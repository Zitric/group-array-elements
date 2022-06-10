import { groupArrayElements } from '../main/GroupArrayElements';

describe('Group array by elements', () => {
  it('Should be strictly equal to an empty array', () => {
    const array: number[] = [];
    const divisor = 3;
    expect(groupArrayElements(array, divisor)).toStrictEqual([]);
  });
});

describe('Group array by elements', () => {
  it('Should have 3 grouped arrays', () => {
    const array = [1, 2, 3, 4, 5];
    const divisor = 3;
    expect(groupArrayElements(array, divisor)).toStrictEqual([
      [1, 2],
      [3, 4],
      [5],
    ]);
  });
});

describe('Group array by elements', () => {
  it('Should have 2 grouped arrays', () => {
    const array = [1, 2, 3, 4, 5];
    const divisor = 2;
    expect(groupArrayElements(array, divisor)).toStrictEqual([
      [1, 2, 3],
      [4, 5],
    ]);
  });
});

describe('Group array by elements', () => {
  it('Should have grouped arrays', () => {
    const array = [1, 2, 3, 4, 5];
    const divisor = 1;
    expect(groupArrayElements(array, divisor)).toStrictEqual([[1, 2, 3, 4, 5]]);
  });
});
