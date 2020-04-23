let MAX_AGE = 100;

export function makeRandomNumber(max: number = MAX_AGE): number {
  return Math.ceil(Math.random() * max);
}

export function test(a: number, b: number): number {
  return a + b;
}
