/* eslint-disable react/display-name */
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  AssetLinkBlock,
  BLOCKS,
  Document,
  Heading2,
  Heading3,
  Heading4,
  Hyperlink,
  INLINES,
  MARKS,
  OrderedList,
  Text,
  UnorderedList,
} from '@contentful/rich-text-types';
import { dlog } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import {
  BaseShortCodeRegex,
  extractShortcodesFromParagraph,
} from 'utils/shortcodes';
import { ArticleCallout } from './article/ArticleCallout';
import Shortcode from './Shortcode';
import { YouTubeVideo } from './YouTubeVideo';

const Bold = ({ children }) => (
  <span className="font-semibold">{children}</span>
);

interface ParagraphProps {
  children: ReactNode;
  margins?: boolean;
  justify?: boolean;
}

const Paragraph = ({
  children,
  justify = true,
  margins = true,
}: ParagraphProps) => (
  <p
    className={clsx(
      'font-secondary',
      margins && 'mb-3',
      justify && 'text-justify',
    )}
  >
    {children}
  </p>
);

interface Props {
  body: Document;
  listColor?: 'primary' | 'secondary';
  paragraph?: {
    margins?: boolean;
    justify?: boolean;
  };
}

// Renders a rich text body
export function RichBody(props: Props) {
  const {
    body,
    listColor = 'primary',
    paragraph = { margins: true, justify: true },
  } = props;

  const options = React.useMemo(
    () => ({
      renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => {
          const plaintext = documentToPlainTextString(node);

          if (BaseShortCodeRegex.test(plaintext)) {
            // Get all the shortcodes from the string
            const shortcodes = extractShortcodesFromParagraph(plaintext);
            const fragments: string[] = [];
            plaintext.split(/\{\{.*\}\}/gm).forEach((fragment, index) => {
              // For each of the non-shortcode fragments, split the newlines
              fragments.push(fragment.replace('\n', ''));

              if (shortcodes?.[index]) {
                fragments.push(shortcodes[index].original);
              }
            });

            // Render the shortcode interlaced with plaintext.
            return (
              <Paragraph
                margins={paragraph.margins}
                justify={paragraph.justify}
              >
                {fragments.map((fragment, index) =>
                  BaseShortCodeRegex.test(fragment) ? (
                    <Shortcode>{fragment}</Shortcode>
                  ) : (
                    <span key={fragment}>
                      {fragment}
                      {index % 2 === 0 && <br />}
                    </span>
                  ),
                )}
              </Paragraph>
            );
          }

          return (
            <Paragraph margins={paragraph.margins} justify={paragraph.justify}>
              {children}
            </Paragraph>
          );
        },
        [BLOCKS.HEADING_1]: (_, chilren: JSX.Element[]) => {
          return (
            <h1 className="mt-8 mb-4 text-3xl font-semibold font-prompt">
              {chilren}
            </h1>
          );
        },
        [BLOCKS.HEADING_2]: (node: Heading2) => {
          const content = (node.content[0] as Text)?.value;
          return (
            <h2 className="mt-8 mb-2 text-2xl font-semibold tracking-wide font-secondary">
              {content}
            </h2>
          );
        },
        [BLOCKS.HEADING_3]: (node: Heading3) => {
          const content = (node.content[0] as Text)?.value;
          return (
            <h2 className="mt-6 mb-2 text-xl font-primary text-primary font-semibold">
              {content}
            </h2>
          );
        },
        [BLOCKS.HEADING_4]: (node: Heading4) => {
          const content = (node.content[0] as Text)?.value;
          return (
            <h2 className="mt-6 mb-2 text-lg font-medium font-secondary">
              {content}
            </h2>
          );
        },
        [BLOCKS.QUOTE]: (_, children: ReactNode) => {
          return (
            <div className="mt-6">
              <ArticleCallout bold indent>
                <Paragraph>{children}</Paragraph>{' '}
              </ArticleCallout>
            </div>
          );
        },
        [BLOCKS.EMBEDDED_ENTRY]: (node: AssetLinkBlock) => {
          const isYouTubeVideo =
            (node as any).data?.target?.sys?.contentType?.sys?.id ===
            'youTubeVideo';

          const description = (node as any).data?.target?.fields?.displayTitle;

          return isYouTubeVideo ? (
            <div className="flex flex-col w-full my-6">
              <YouTubeVideo url={(node as any).data.target.fields.url} />
              {description ? (
                <h4 className="text-lg mt-2 text-primary font-medium">
                  {description}
                </h4>
              ) : null}
            </div>
          ) : null;
        },
        [BLOCKS.EMBEDDED_ASSET]: (node: AssetLinkBlock) => {
          const link = (node.data.target as any).fields.file.url.replace(
            '//',
            'https://',
          );

          return (
            <div className="flex justify-center w-full mb-6">
              <img
                style={{ maxWidth: '800px' }}
                className="object-cover w-full"
                src={link}
              />
            </div>
          );
        },
        [BLOCKS.UL_LIST]: (node: UnorderedList, children: JSX.Element[]) => {
          return (
            <ul className={clsx('ml-2', `list-${listColor}`)}>{children}</ul>
          );
        },
        [BLOCKS.OL_LIST]: (node: OrderedList, children: JSX.Element[]) => {
          return (
            <ol className="list-decimal">
              {children.map(item => (
                <li key={item.key}>{item}</li>
              ))}
            </ol>
          );
        },
        [INLINES.HYPERLINK]: (node: Hyperlink) => {
          const plaintext = documentToPlainTextString(node);

          return (
            <>
              <a
                className="cursor-pointer text-secondary filter hover:brightness-125 hover:underline"
                href={node.data.uri}
                target="_blank"
                rel="noreferrer"
              >
                {plaintext.trim()}
              </a>
            </>
          );
        },
      },
    }),
    [],
  );

  dlog('RichBody ➡️ body:', body);

  const RichBody = documentToReactComponents(body, options);

  return <div>{RichBody}</div>;
}
