import { Button } from '@tastiest-io/tastiest-components';
import { useDispatch } from 'react-redux';
import { toggleOfferMenu } from 'state/navigation';
import {
  extractShortcodeParameters,
  ShortCodeKey,
  ShortCodesRegex,
} from 'utils/shortcodes';

interface ShortCodeProps {
  children: string;
}

const Shortcode = ({ children }: ShortCodeProps) => {
  const dispatch = useDispatch();

  // shortcodes.forEach(shortcode =>
  //   paragraph.replace(
  //     shortcode.original,
  //     '',
  //     // <ShortCode>{shortcode.original}</ShortCode>,
  //   ),
  // );

  // Replace all the shortcodes with their respective elements.

  const p = extractShortcodeParameters(children);

  // Menu link
  if (ShortCodesRegex.MENU_LINK.test(children)) {
    const { params } = extractShortcodeParameters<ShortCodeKey.MENU_LINK>(
      children,
    );

    return (
      <a
        onClick={() => dispatch(toggleOfferMenu(true))}
        className="text-primary"
      >
        {params.text}
      </a>
    );
  }

  // Menu button
  if (ShortCodesRegex.MENU_BUTTON.test(children)) {
    const { params } = extractShortcodeParameters<ShortCodeKey.MENU_BUTTON>(
      children,
    );

    return (
      <Button onClick={() => dispatch(toggleOfferMenu(true))}>
        {params.text}
      </Button>
    );
  }

  // Aux link
  if (ShortCodesRegex.AUX_LINK.test(children)) {
    const { params } = extractShortcodeParameters<ShortCodeKey.AUX_LINK>(
      children,
    );

    return (
      <a
        // onClick={() => dispatch(toggleOfferMenu(true))}
        className="text-primary"
      >
        {params.text}
      </a>
    );
  }

  // Aux button
  if (ShortCodesRegex.AUX_BUTTON.test(children)) {
    const { params } = extractShortcodeParameters<ShortCodeKey.AUX_BUTTON>(
      children,
    );

    return (
      <Button
      // onClick={() => dispatch(toggleOfferMenu(true))}
      >
        {params.text}
      </Button>
    );
  }

  // Aux button
  if (ShortCodesRegex.COLOR.test(children)) {
    const {
      params: { text, color },
    } = extractShortcodeParameters<ShortCodeKey.COLOR>(children);

    return <span style={{ color }}>{text}</span>;
  }

  return null;
};

export default Shortcode;
