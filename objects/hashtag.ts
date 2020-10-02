export class Tag {
  readonly tag;
  readonly formatted;

  constructor(tag: string) {
    this.tag = tag;
    this.formatted = `#${tag}`;
  }
}
