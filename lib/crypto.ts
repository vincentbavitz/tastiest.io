// Ref. OpenCrypto
export type TAlgorithm = 'EDHH' | 'ECDSA' | 'ECDH' | 'RSA-OAEP' | 'RSA-PSS';
export type THashAlgorithm = 'SHA-512' | 'SHA-256' | 'SHA-384' | 'SHA-1';
export type TCipher = 'AES-GCM' | 'AES-CBC' | 'AES-CFB';
export type TKeyLength = 128 | 192 | 256 | 384 | 512;

interface IAlgorithmOptions {
  name: TAlgorithm;
  hash?: THashAlgorithm;
  namedCurve?: string;
  saltLength?: number;
}

/*
 *
 * -- ECDH: { name: 'ECDH', usages: [], isExtractable: true }
 * -- ECDSA: { name: 'ECDSA', usages: ['verify'], isExtractable: true }
 * -- RSA-OAEP: { name: 'RSA-OAEP', hash: { name: 'SHA-512' }, usages: ['encrypt', 'wrapKey'], isExtractable: true }
 * -- RSA-PSS: { name: 'RSA-PSS', hash: { name: 'SHA-512' }, usages: ['verify'], isExtractable: true }
 */
export interface IKeyOptions {
  algorithm: TAlgorithm | IAlgorithmOptions;
  hash?: THashAlgorithm;
  usages: Array<
    | 'sign'
    | 'verify'
    | 'decrypt'
    | 'deriveBits'
    | 'deriveKey'
    | 'encrypt'
    | 'unwrapKey'
    | 'wrapKey'
  >;
  isExtractable: boolean;
}

export default class TastiestCrypto {
  private cryptoApi = window.crypto.subtle;
  private chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  private lookup = new Uint8Array(256);

  constructor() {
    for (let i = 0; i < this.chars.length; i++) {
      this.lookup[this.chars.charCodeAt(i)] = i;
    }

    if (typeof window === 'undefined') {
      throw new Error(
        "Reference error: window is not defined. Ensure you're running from the client side.",
      );
    }
  }

  encodeAb(arrayBuffer: ArrayBuffer) {
    const bytes = new Uint8Array(arrayBuffer);
    const len = bytes.length;
    let base64 = '';

    for (let i = 0; i < len; i += 3) {
      base64 += this.chars[bytes[i] >> 2];
      base64 += this.chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += this.chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += this.chars[bytes[i + 2] & 63];
    }

    if (len % 3 === 2) {
      base64 = base64.substring(0, base64.length - 1) + '=';
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + '==';
    }

    return base64;
  }

  decodeAb(base64: string) {
    const len = base64.length;
    let bufferLength = base64.length * 0.75;
    let p = 0;
    let encoded1;
    let encoded2;
    let encoded3;
    let encoded4;

    if (base64[base64.length - 1] === '=') {
      bufferLength--;
      if (base64[base64.length - 2] === '=') {
        bufferLength--;
      }
    }

    const arrayBuffer = new ArrayBuffer(bufferLength);
    const bytes = new Uint8Array(arrayBuffer);

    for (let i = 0; i < len; i += 4) {
      encoded1 = this.lookup[base64.charCodeAt(i)];
      encoded2 = this.lookup[base64.charCodeAt(i + 1)];
      encoded3 = this.lookup[base64.charCodeAt(i + 2)];
      encoded4 = this.lookup[base64.charCodeAt(i + 3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arrayBuffer;
  }

  /**
   * Encoding / Decoding
   */
  arrayBufferToString(arrayBuffer: ArrayBuffer) {
    const decoder = new TextDecoder('utf-8'); // eslint-disable-next-line
    return decoder.decode(arrayBuffer);
  }

  stringToArrayBuffer(str: string) {
    const encoder = new TextEncoder();
    const byteArray = encoder.encode(str);
    return byteArray.buffer;
  }

  arrayBufferToHexString(arrayBuffer: ArrayBuffer) {
    const byteArray = new Uint8Array(arrayBuffer);
    let hexString = '';
    let nextHexByte;

    for (let i = 0; i < byteArray.byteLength; i++) {
      nextHexByte = byteArray[i].toString(16);

      if (nextHexByte.length < 2) {
        nextHexByte = '0' + nextHexByte;
      }

      hexString += nextHexByte;
    }

    return hexString;
  }

  hexStringToArrayBuffer(hexString: string) {
    if (hexString.length % 2 !== 0) {
      throw new RangeError(
        'Expected string to be an even number of characters',
      );
    }

    const byteArray = new Uint8Array(hexString.length / 2);
    for (let i = 0; i < hexString.length; i += 2) {
      byteArray[i / 2] = parseInt(hexString.substring(i, i + 2), 16);
    }

    return byteArray.buffer;
  }

  arrayBufferToBase64(arrayBuffer: ArrayBuffer) {
    if (typeof arrayBuffer !== 'object') {
      throw new TypeError('Expected input to be an ArrayBuffer Object');
    }

    return this.encodeAb(arrayBuffer);
  }

  base64ToArrayBuffer(b64: string) {
    return this.decodeAb(b64);
  }

  decimalToHex(d: number | string, unsigned = false) {
    let h = null;
    if (typeof d === 'number') {
      if (unsigned) {
        h = d.toString(16);
        return h.length % 2 ? '000' + h : '00' + h;
      } else {
        h = d.toString(16);
        return h.length % 2 ? '0' + h : h;
      }
    } else if (typeof d === 'string') {
      h = (d.length / 2).toString(16);
      return h.length % 2 ? '0' + h : h;
    }
  }

  addNewLines(str: string) {
    let finalString = '';
    while (str.length > 0) {
      finalString += str.substring(0, 64) + '\r\n';
      str = str.substring(64);
    }

    return finalString;
  }

  removeLines(str: string) {
    return str.replace(/\r?\n|\r/g, '');
  }

  /**
   *
   * Converts asymmetric public key from CryptoKey to hex string
   */
  async cryptoToPublicHex(key: CryptoKey): Promise<string> {
    if (key.type !== 'public') {
      throw new TypeError(
        'Expected input of privateKey to be a CryptoKey of type public',
      );
    }

    /* eslint-disable-next-line @typescript-eslint/no-this-alias */
    const self = this;
    const exported = await self.cryptoApi.exportKey('raw', key);
    return this.arrayBufferToHexString(exported);
  }

  /**
   *
   * Converts asymmetric private key from CryptoKey to hex string
   */
  async cryptoToPrivateHex(key: CryptoKey): Promise<string> {
    if (key.type !== 'private') {
      throw new TypeError(
        'Expected input of privateKey to be a CryptoKey of type public',
      );
    }

    /* eslint-disable-next-line @typescript-eslint/no-this-alias */
    const self = this;
    const exported = await self.cryptoApi.exportKey('pkcs8', key);
    return this.arrayBufferToHexString(exported);
  }

  /**
   *
   * Converts asymmetric public key from hex string to CryptoKey
   */
  async hexToPublicCrypto(
    hex: string,
    options: IKeyOptions,
  ): Promise<CryptoKey> {
    /* eslint-disable-next-line @typescript-eslint/no-this-alias */
    const self = this;

    const arrayBuffer = self.hexStringToArrayBuffer(hex);
    const key = await self.cryptoApi.importKey(
      'raw',
      arrayBuffer,
      options.algorithm,
      options.isExtractable,
      options.usages,
    );

    return key;
  }

  /**
   *
   * Converts asymmetric private key from hex string to CryptoKey
   */
  async hexToPrivateCrypto(
    hex: string,
    options: IKeyOptions,
  ): Promise<CryptoKey> {
    /* eslint-disable-next-line @typescript-eslint/no-this-alias */
    const self = this;

    const arrayBuffer = self.hexStringToArrayBuffer(hex);
    const key = await self.cryptoApi.importKey(
      'pkcs8',
      arrayBuffer,
      options.algorithm,
      options.isExtractable,
      options.usages,
    );

    return key;
  }

  /**
   *
   * Converts asymmetric private key from CryptoKey to PEM format
   */
  async cryptoPrivateToPem(privateKey: CryptoKey): Promise<string> {
    /* eslint-disable-next-line @typescript-eslint/no-this-alias */
    const self = this;

    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    return new Promise(function (resolve, _reject) {
      if (
        Object.prototype.toString.call(privateKey) !== '[object CryptoKey]' &&
        privateKey.type !== 'private'
      ) {
        throw new TypeError('Expected input to be a CryptoKey Object');
      }

      self.cryptoApi
        .exportKey('pkcs8', privateKey)
        .then(function (exportedPrivateKey) {
          const b64 = self.arrayBufferToBase64(exportedPrivateKey);
          let pem = self.addNewLines(b64);
          pem =
            '-----BEGIN PRIVATE KEY-----\r\n' +
            pem +
            '-----END PRIVATE KEY-----';

          resolve(pem);
        });
    });
  }
}
