export const createRangrlterable = (from: number, to: number) => {
  let currentValue = from;
  return {
    next() {
      const value = currentValue < to ? currentValue++ : undefined;
      const done = value == undefined;
      return { value, done };
    }
  };
};
