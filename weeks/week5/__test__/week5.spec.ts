import { Maths } from '../src';

describe('week5 unit test', () => {
  it('start < 0', () => {
    const data = [1, 2];
    const start = -1;
    const length = 1;

    expect(Maths.average.bind(null, data, start, length)).toThrowError(
      'unsafe argument',
    );
  });

  it('start > MAX_SAFE_INTEGER', () => {
    const data = [1, 2];
    const start = Number.MAX_SAFE_INTEGER + 1;
    const length = 0;

    expect(Maths.average.bind(null, data, start, length)).toThrowError(
      'unsafe argument',
    );
  });

  it('length < 1', () => {
    const data = [1, 2];
    const start = 0;
    const length = 0;

    expect(Maths.average.bind(null, data, start, length)).toThrowError(
      'unsafe argument',
    );
  });

  it('length > MAX_SAFE_INTEGER', () => {
    const data = [1, 2];
    const start = 0;
    const length = Number.MAX_SAFE_INTEGER + 1;

    expect(Maths.average.bind(null, data, start, length)).toThrowError(
      'unsafe argument',
    );
  });

  it('input[i] is not a number', () => {
    const data = ['', 0];
    const start = 0;
    const length = 1;

    expect(Maths.average.bind(null, data, start, length)).toThrowError(
      'unsafe argument',
    );
  });

  it('input[i] < MIN_SAFE_INTEGER', () => {
    const data = [Number.MIN_SAFE_INTEGER - 1];
    const start = 0;
    const length = 1;

    expect(Maths.average.bind(null, data, start, length)).toThrowError(
      'unsafe argument',
    );
  });

  it('input[i] > MAX_SAFE_INTEGER', () => {
    const data = [9007199254740992];
    const start = 0;
    const length = 1;

    expect(Maths.average.bind(null, data, start, length)).toThrowError(
      'unsafe argument',
    );
  });

  it('OK', () => {
    const data = [1, 2];
    const start = 0;
    const length = 1;

    expect(Maths.average(data, start, length)).toBe(1);
  });
});
