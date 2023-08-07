interface IUUID {
  generate(): string;
  generateShort(): string;
  generateNumber(): string;
  generateNumberShort(): string;
  generateByLength(length: number): string;
}

export class UUID implements IUUID {
  generate() {
    const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
    return uuid;
  }

  generateShort() {
    const uuid = "xxxxxxxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
    return uuid;
  }

  generateNumber() {
    const uuid = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[x]/g, function (c) {
      const r = (Math.random() * 10) | 0;
      return r.toString(10);
    });
    return uuid;
  }

  generateNumberShort() {
    const uuid = "xxxxxxxx".replace(/[x]/g, function (c) {
      const r = (Math.random() * 10) | 0;
      return r.toString(10);
    });
    return uuid;
  }

  generateByLength(length: number) {
    const uuid = "x".repeat(length).replace(/[x]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      return r.toString(16);
    });
    return uuid;
  }
}
