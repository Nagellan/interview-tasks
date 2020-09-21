/**
 * Task: extend the Number type with add(), sub(), mult(), div() functions
 */

class NumberExtended extends Number {
  add(val) {
    return new NumberExtended((this + val));
  }

  sub(val) {
    return new NumberExtended((this - val));
  }

  mult(val) {
    return new NumberExtended((this * val));
  }

  div(val) {
    return new NumberExtended((this / val));
  }
}

const myNum = new NumberExtended(4);
console.log(myNum.add(34).sub(12));

// Wrap/Hide this function's body using your IDE
const showSolutions = () => {
  class Solution extends Number {
    static get [Symbol.species]() {
      return Number;
    }

    f(value) {
      return new Solution(value);
    }

    add(value) {
      return this.f(this + value);
    }

    minus(value) {
      return this.f(this - value);
    }

    multiply(value) {
      return this.f(this * value);
    }

    divide(value) {
      return this.f(this / value);
    }
  }

  const sol = new Solution(4);
  console.log(sol.add(34).minus(12));
};

showSolutions();
