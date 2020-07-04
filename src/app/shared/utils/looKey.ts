/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export class LooKey {
  public static karaOwaru(a: any, b: string[]): string[] {
    switch (a.key) {
      case 'ArrowUp': {
        if ((b.length === 0 || b[0] === 'ArrowUp') && b.length < 2) {
          b.push(a.key);
        } else {
          b = [];
        }
        return b;
      }
      case 'ArrowDown': {
        if ((b[1] === 'ArrowUp' || b[2] === 'ArrowDown') && b.length < 4) {
          b.push(a.key);
        } else {
          b = [];
        }
        return b;
      }
      case 'ArrowLeft': {
        if ((b[3] === 'ArrowDown' && b.length < 5) || (b[5] === 'ArrowRight' && b.length < 7)) {
          b.push(a.key);
        } else {
          b = [];
        }
        return b;
      }
      case 'ArrowRight': {
        if ((b[4] === 'ArrowLeft' && b.length < 6) || (b[6] === 'ArrowLeft' && b.length < 8)) {
          b.push(a.key);
        } else {
          b = [];
        }
        return b;
      }
      case 'b': {
        if (b[7] === 'ArrowRight' && b.length < 9) {
          b.push(a.key);
        } else {
          b = [];
        }
        return b;
      }
      case 'a': {
        if (b[8] === 'b' && b.length < 10) {
          b.push(a.key);
        } else {
          b = [];
        }
        return b;
      }
      case 'Enter': {
        if (b[9] === 'a' && b.length < 11) {
          b.push(a.key);
        } else {
          b = [];
        }
        return b;
      }
      default: {
        b = [];
        return b;
      }
    }
  }
}
