import { Maths } from '../src/index';

describe('week4 unit test', () => {
  it('to be defined', () => {
    expect(Maths).toBeDefined();
    expect(Maths.average).toBeDefined();
  });

  /**
   * Kiểm thử biên (yếu):
   * Đầu vào có 3 tham số: input[], start, length
   * input[i] có giá trị [{@link Number.MIN_SAFE_INTEGER}, {@link Number.MAX_SAFE_INTEGER}]
   * start có giá trị [0, {@link Number.MAX_SAFE_INTEGER}]
   * length có giá trị [1, {@link Number.MAX_SAFE_INTEGER}]
   *
   * Các giá trị đặc biệt: min(m), min+(m+), normal(n), max-(M-), max(M)
   */

  it('boundary: input(n), start(n), length(n)', () => {
    const data = [1, 2, 3, 4, 5];
    const start = 2;
    const length = 3;

    expect(Maths.average(data, start, length)).toBe(4);
  });

  it('boundary: input(m), start(n), length(n)', () => {
    const data = [1, 3, Number.MIN_SAFE_INTEGER, 2, 3, 4];
    const start = 2;
    const length = 3;

    expect(Maths.average(data, start, length)).toBe(-3002399751580329);
  });

  it('boundary: input(m+), start(n), length(n)', () => {
    const data = [1, 3, Number.MIN_SAFE_INTEGER + 1, 2, 3, 4];
    const start = 2;
    const length = 2;

    expect(Maths.average(data, start, length)).toBe(-4503599627370494);
  });

  it('boundary: input(M-), start(n), length(n)', () => {
    const data = [1, 3, Number.MAX_SAFE_INTEGER - 1, 100, 3, 4];
    const start = 2;
    const length = 3;

    // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
    expect(Maths.average(data, start, length)).toBe(3002399751580364.5);
  });

  it('boundary: input(M), start(n), length(n)', () => {
    const data = [1, 3, Number.MAX_SAFE_INTEGER, 100, 3, 4];
    const start = 2;
    const length = 3;

    // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
    expect(Maths.average(data, start, length)).toBe(3002399751580365);
  });

  it('boundary: input(n), start(m), length(n)', () => {
    const data = [1, 2, 3, 4, 5];
    const start = 0;
    const length = 3;

    expect(Maths.average(data, start, length)).toBe(2);
  });

  it('boundary: input(n), start(m+), length(n)', () => {
    const data = [1, 2, 3, 4, 5];
    const start = 1;
    const length = 3;

    expect(Maths.average(data, start, length)).toBe(3);
  });

  it('boundary: input(n), start(M-), length(n)', () => {
    const data = [1, 2, 3, 4, 5];
    const start = Number.MAX_SAFE_INTEGER - 1;
    const length = 3;

    expect(Maths.average(data, start, length)).toBe(5);
  });

  it('boundary: input(n), start(M), length(n)', () => {
    const data = [1, 2, 3, 4, 5];
    const start = Number.MAX_SAFE_INTEGER;
    const length = 3;

    expect(Maths.average(data, start, length)).toBe(5);
  });

  it('boundary: input(n), start(n), length(m)', () => {
    const data = [1, 2, 3, 4, 5];
    const start = 3;
    const length = 1;

    expect(Maths.average(data, start, length)).toBe(4);
  });

  it('boundary: input(n), start(n), length(m+)', () => {
    const data = [1, 2, 3, 4, 5];
    const start = 3;
    const length = 2;

    expect(Maths.average(data, start, length)).toBe(4.5);
  });

  it('boundary: input(n), start(n), length(M-)', () => {
    const data = [1, 2, 3, 4, 5];
    const start = 3;
    const length = Number.MAX_SAFE_INTEGER - 1;

    expect(Maths.average(data, start, length)).toBe(4.5);
  });

  it('boundary: input(n), start(n), length(M)', () => {
    const data = [1, 2, 3, 4, 5];
    const start = 3;
    const length = Number.MAX_SAFE_INTEGER;

    expect(Maths.average(data, start, length)).toBe(4.5);
  });

  /**
   * Kiểm thử tương đương (yếu):
   * Xác định miền tương đương:
   * - start:
   *   + start ∈ (-∞, 0): throws "unsafe argument"
   *   + start ∈ [0, +∞): trung bình
   * - length:
   *   + length ∈ (-∞, 1): throws "unsafe argument"
   *   + length ∈ [1, +∞): trung bình
   * - input:
   *   + input[i] ∈ [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]: trung bình
   *   + input[i] ∉ [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]: throws "unsafe argument"
   *
   * Miền thử: normal(n), error(e)
   */

  it('equivalence: input(n), start(n), length(n)', () => {
    const data = [1, 2, 3, 4, 5];
    const start = 0;
    const length = 3;

    expect(Maths.average(data, start, length)).toEqual(expect.any(Number));
  });

  it('equivalence: input(e), start(n), length(n)', () => {
    const data = [Number.MIN_SAFE_INTEGER - 1, 1, 2, 3, 4, 5];
    const start = 0;
    const length = 2;

    expect(Maths.average.bind(null, data, start, length)).toThrowError(
      'unsafe argument',
    );
  });

  it('equivalence: input(n), start(e), length(n)', () => {
    const data = [1, 2, 3, 4, 5];
    const start = -1;
    const length = 2;

    expect(Maths.average.bind(null, data, start, length)).toThrow(
      'unsafe argument',
    );
  });

  it('equivalence: input(n), start(n), length(e)', () => {
    const data = [1, 2, 3, 4, 5];
    const start = 0;
    const length = 0;

    expect(Maths.average.bind(null, data, start, length)).toThrow(
      'unsafe argument',
    );
  });
});
