interface IRandom {
  next(): number;
  nextInt(): number;
  nextIntRange(min: number, max: number): number;
  nextFloat(): number;
  nextFloatRange(min: number, max: number): number;
  nextBoolean(): boolean;
  nextString(length: number): string;
  nextArray<T>(length: number, generator: () => T): T[];
}

export class Random implements IRandom {
  private salt: number;

  constructor(salt?: number) {
    this.salt = salt || 1;
  }

  public next(): number {
    return Math.random() * this.salt;
  }

  public nextInt(): number {
    return Math.floor(this.next() * Number.MAX_SAFE_INTEGER);
  }

  public nextIntRange(min: number, max: number): number {
    return Math.floor(this.next() * (max - min)) + min;
  }

  public nextFloat(): number {
    return this.next();
  }

  public nextFloatRange(min: number, max: number): number {
    return this.next() * (max - min) + min;
  }

  public nextBoolean(): boolean {
    return this.next() > 0.5;
  }

  public nextString(length: number): string {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += String.fromCharCode(this.nextIntRange(32, 126));
    }
    return result;
  }

  public nextArray<T>(length: number, generator: () => T): T[] {
    const result = [];
    for (let i = 0; i < length; i++) {
      result.push(generator());
    }
    return result;
  }
}
