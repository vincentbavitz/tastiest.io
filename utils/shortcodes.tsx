export const BaseShortCodeRegex = /\{\{.*\}\}/;

export enum ShortCodeKey {
  MENU_LINK = 'MENU_LINK',
  MENU_BUTTON = 'MENU_BUTTON',
  AUX_LINK = 'AUX_LINK',
  AUX_BUTTON = 'AUX_BUTTON',
  COLOR = 'COLOR',
}

// prettier-ignore
export type ShortCodeParams<T extends ShortCodeKey> = 
    T extends ShortCodeKey.MENU_LINK ? { text: string } :
    T extends ShortCodeKey.MENU_BUTTON ? { text: string } :
    T extends ShortCodeKey.AUX_LINK ? { text: string } :
    T extends ShortCodeKey.AUX_BUTTON ? { text: string } :
    T extends ShortCodeKey.COLOR ? { color: string; text: string } :
    Record<string, never>;

export type TShortCode<T extends ShortCodeKey> = {
  code: ShortCodeKey;
  params: ShortCodeParams<T>;
};

export const ShortCodesRegex = {
  [ShortCodeKey.MENU_LINK]: /\{\{[\s]*MENU_LINK[\s]*text="[\w\s.,'-_]{1,333}"[\s]*\}\}/,
  [ShortCodeKey.AUX_LINK]: /\{\{[\s]*AUX_LINK[\s]*text="[\w\s.,'-_]{1,333}"[\s]*\}\}/, // {{ AUX_LINK text="aux link"}}
  [ShortCodeKey.MENU_BUTTON]: /\{\{[\s]*MENU_BUTTON[\s]*text="[\w\s.,'-_]{1,333}"[\s]*\}\}/, // {{ MENU_BUTTON text="menu button"}}
  [ShortCodeKey.AUX_BUTTON]: /\{\{[\s]*AUX_BUTTON[\s]*text="[\w\s.,'-_]{1,333}"[\s]*\}\}/, // {{ AUX_BUTTON text="aux button"}}
  [ShortCodeKey.COLOR]: /\{\{[\s]*COLOR[\s]*color="[#]?[\w0-9-]{3,333}"[\s]*text="[\w\s.,'-_]{1,333}"[\s]*\}\}/, // {{ COLOR color="#FF0083 text="Green!" }}
};

/** Pulls out parameters from a shortcode. For example,
 *  `{{ COLOR color="#00FF83" text="Green!" }}` yields
 *  ↦ { code: 'COLOR', params: { color: '#00FF83', text: 'Green!' } }
 */
export const extractShortcodeParameters = <T extends ShortCodeKey>(
  shortcode: string,
): TShortCode<T> => {
  const code = shortcode
    .match(/\{\{[\s]*[A-Z_]{1,33}[\s]/)?.[0]
    ?.replace(/\{\{/, '')
    ?.trim() as ShortCodeKey;

  const paramKeyPairs = shortcode
    .match(/\s[\w]{1,20}="[^"]{0,333}"/gm)
    .map(item => item.trim().replace('\\', ''));

  const params = {};
  paramKeyPairs.forEach((param: string) => {
    const key = param.match(/^[\w]{1,20}/)?.[0];
    const value = param.match(/"([^"]{0,333})"/)?.[1];
    params[key] = value;
  });

  return { code, params: params as ShortCodeParams<T> };
};
