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
import { CMS } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { renderShortcode } from '../utils/shortcodes';
import { ArticleCallout } from './article/ArticleCallout';

const Bold = ({ children }) => (
  <span className="font-semibold">{children}</span>
);

interface ParagraphProps {
  children: ReactNode;
  paragraphMargins?: boolean;
}

const Paragraph = ({ children, paragraphMargins = true }: ParagraphProps) => (
  <p
    className={clsx(
      'tracking-wide text-justify font-roboto',
      paragraphMargins && 'mb-3',
    )}
  >
    {children}
  </p>
);

interface Props {
  body: Document;
  paragraphMargins?: boolean;
  listColor?: 'primary' | 'secondary';
}

// Renders a rich text body
export function RichBody(props: Props) {
  const { body, paragraphMargins = true, listColor = 'primary' } = props;

  const options = React.useMemo(
    () => ({
      renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => {
          // Grab shortcodes
          // const children;
          const plaintext = documentToPlainTextString(node);
          const isShortcode = CMS.SHORTCODE_REGEX.test(plaintext);

          return isShortcode ? (
            renderShortcode(plaintext)
          ) : (
            <Paragraph paragraphMargins={paragraphMargins}>
              {children}
            </Paragraph>
          );
        },
        [BLOCKS.HEADING_1]: (_, chilren: JSX.Element[]) => {
          return (
            <h1 className="mt-8 mb-4 text-4xl font-semibold font-prompt">
              {chilren}
            </h1>
          );
        },
        [BLOCKS.HEADING_2]: (node: Heading2) => {
          const content = (node.content[0] as Text)?.value;
          return (
            <h2 className="mt-8 mb-2 text-3xl font-semibold tracking-wide font-roboto">
              {content}
            </h2>
          );
        },
        [BLOCKS.HEADING_3]: (node: Heading3) => {
          const content = (node.content[0] as Text)?.value;
          return (
            <h2 className="mt-6 mb-2 text-xl font-semibold font-roboto">
              {content}
            </h2>
          );
        },
        [BLOCKS.HEADING_4]: (node: Heading4) => {
          const content = (node.content[0] as Text)?.value;
          return (
            <h2 className="mt-6 mb-2 text-lg font-bold font-roboto">
              {content}
            </h2>
          );
        },
        [BLOCKS.QUOTE]: (_node, children: ReactNode) => {
          return (
            <div className="mt-6">
              <ArticleCallout bold indent>
                <Paragraph>{children}</Paragraph>{' '}
              </ArticleCallout>
            </div>
          );
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
              {' '}
              <a
                className="cursor-pointer text-blue hover:underline"
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

  const RichBody = documentToReactComponents(body, options);

  return <div>{RichBody}</div>;
}
