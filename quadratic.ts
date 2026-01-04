import { format, fraction } from "mathjs";

interface ICoefficients {
  a: number;
  b: number;
  c: number;
}

// const coefficients = {
//   a: -1,
//   b: 2,
//   c: 15,
// };

const coefficients = {
  a: 9,
  b: 0,
  c: -1,
};

const { a, b, c }: ICoefficients = coefficients;

function bhaskara({ a, b, c }: ICoefficients) {
  if (a === 0) throw new Error("Coefficient 'a' must be non-zero");

  const delta = ({ a, b, c }: ICoefficients): number => {
    return b ** 2 - 4 * a * c;
  };

  const deltaResult = delta({ a, b, c });

  if (deltaResult < 0) throw new Error("Complex roots are not supported yet.");

  console.log(
    format(fraction(-b + Math.sqrt(deltaResult), 2 * a), { fraction: "ratio" }),
  );

  return {
    x1: format(fraction(-b + Math.sqrt(deltaResult), 2 * a), {
      fraction: "ratio",
    }),

    x2: format(fraction(-b - Math.sqrt(deltaResult), 2 * a), {
      fraction: "ratio",
    }),
  };
}

const { x1, x2 } = bhaskara({ a, b, c });

console.log(`x1: ${x1}`);
console.log(`x2: ${x2}`);
