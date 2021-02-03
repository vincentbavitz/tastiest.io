import TastiestCrypto from '../lib/crypto';

export class KeyPair {
  private crypt = new TastiestCrypto();

  // Public key exported to raw -> hex string
  // Private key exported to PKCS8 PEM
  public publicKeyEncoded?: string;
  public privateKeyEncoded?: string;
  public publicKey?: CryptoKey;
  public privateKey?: CryptoKey;

  constructor(publicKey?: string, privateKey?: string) {
    // Passing privateKey into the constructor is optional; used for
    // recovering keys from strings rather than generating new ones.
    this.publicKey;
    this.privateKey;

    if (publicKey && privateKey) {
      this.publicKeyEncoded = publicKey;
      this.privateKeyEncoded = privateKey;
    }
  }

  public async init() {
    // If we've been given keys, don't generate a new pair
    if (this.publicKeyEncoded && this.privateKeyEncoded) {
      try {
        this.publicKey = await this.crypt.hexToPublicCrypto(
          this.publicKeyEncoded,
          {
            algorithm: { name: 'ECDSA', namedCurve: 'P-256' },
            usages: ['verify'],
            isExtractable: true,
          },
        );

        this.privateKey = await this.crypt.hexToPrivateCrypto(
          this.privateKeyEncoded,
          {
            algorithm: { name: 'ECDSA', namedCurve: 'P-256' },
            usages: ['sign'],
            isExtractable: true,
          },
        );
      } catch (error) {
        throw new Error(`KeyPair: ${error}`);
      }
    } else {
      const keys = await crypto.subtle.generateKey(
        { name: 'ECDSA', namedCurve: 'P-256' },
        true,
        ['sign', 'verify'],
      );

      // Set CryptoKeys
      this.publicKey = keys.publicKey;
      this.privateKey = keys.privateKey;

      // Set encoded now
      if (keys.publicKey && keys.privateKey) {
        this.publicKeyEncoded = await this.crypt.cryptoToPublicHex(
          this.publicKey,
        );
        this.privateKeyEncoded = await this.crypt.cryptoToPrivateHex(
          this.privateKey,
        );
      }
    }
  }

  public async sign(value: string) {
    if (!this.privateKey) {
      throw new Error('KeyPair: Cannot sign - private key is undefined');
    }

    const data = this.crypt.stringToArrayBuffer(value);

    const signatureAb = await window.crypto.subtle.sign(
      {
        name: 'ECDSA',
        hash: 'SHA-256',
      },
      this.privateKey,
      data,
    );

    return this.crypt.arrayBufferToBase64(signatureAb);
  }

  public async verify(value: string, signature: string) {
    // Verify using pubkey that a signature signed with private key is valid
    if (!this.publicKey) {
      throw new Error('KeyPair: Cannot sign - public key is undefined');
    }

    const data = this.crypt.stringToArrayBuffer(value);
    const signatureAb = this.crypt.base64ToArrayBuffer(signature);

    const verification = await window.crypto.subtle.verify(
      {
        name: 'ECDSA',
        hash: 'SHA-256',
      },
      this.publicKey,
      signatureAb,
      data,
    );

    return verification;
  }
}
