import { Maths } from '../src';

describe('week6 unit test', () => {
  it('Path covered: 1,2F,4F,6,7;6,7,8,9T,11F,13F,15;15,10,9F,16', () => {
    expect(Maths.average([1, 2], 0, 1)).toBe(1);
  });

  it('Path covered: 10,9T,11F,13F,15', () => {
    expect(Maths.average([1, 2], 0, 2)).toBe(1.5);
  });
});
