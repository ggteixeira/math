import { format, fraction } from "mathjs";

interface ICoefficients {
  a: number;
  b: number;
  c: number;
}

type Coefficients = number[];

function bhaskara(coefficients: Coefficients) {
  const [a, b, c] = coefficients;

  if (a === 0) throw new Error("Coefficient 'a' must be non-zero");

  const delta = ({ a, b, c }: ICoefficients): number => {
    return b ** 2 - 4 * a * c;
  };

  const deltaResult = delta({ a, b, c });

  if (deltaResult < 0) throw new Error("Complex roots are not supported yet.");

  console.log(
    format(fraction(-b + Math.sqrt(deltaResult), 2 * a), { fraction: "ratio" }),
  );

  const isFraction = Math.sqrt(deltaResult) % (2 * a) > 0;

  return {
    x1: isFraction
      ? format(fraction(-b + Math.sqrt(deltaResult), 2 * a), {
          fraction: "ratio",
        })
      : ((-b + Math.sqrt(deltaResult)) / 2) * a,
    x2: isFraction
      ? format(fraction(-b - Math.sqrt(deltaResult), 2 * a), {
          fraction: "ratio",
        })
      : ((-b - Math.sqrt(deltaResult)) / 2) * a,
  };
}

console.log(bhaskara([9, 0, -1]));
console.log(bhaskara([-1, 2, 15]));
