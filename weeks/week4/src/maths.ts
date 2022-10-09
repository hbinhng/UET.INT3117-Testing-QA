export class Maths {
  /**
   * Calculate average value of `input` array
   * @param {number[]} input array of number
   * @param {number} [start=0] start of range to be calculated (will be floored)
   * @param {number} [length=Number.MAX_SAFE_INTEGER] length of range to be calculated (will be floored)
   * @throws {Error} "unsafe argument" if input contains item out of range
   * [{@link Number.MIN_SAFE_INTEGER}, {@link Number.MAX_SAFE_INTEGER}] or not even a number, start is out of range
   * [0, {@link Number.MAX_SAFE_INTEGER}], length is out of range [1, {@link Number.MAX_SAFE_INTEGER}]
   */
  public static average(
    input: number[],
    start = 0,
    length = Number.MAX_SAFE_INTEGER,
  ): number {
    if (start < 0 || start > Number.MAX_SAFE_INTEGER)
      throw new Error('unsafe argument');
    if (length < 1 || length > Number.MAX_SAFE_INTEGER)
      throw new Error('unsafe argument');

    const _start = Math.min(Math.floor(start), input.length - 1);
    const _length = Math.min(Math.floor(length), input.length - _start);

    const range = input.slice(_start, _start + _length);

    const average = range.reduce((accumulator, value) => {
      if (typeof value !== 'number') throw new Error('unsafe argument');
      if (value < Number.MIN_SAFE_INTEGER || value > Number.MAX_SAFE_INTEGER)
        throw new Error('unsafe argument');

      return accumulator + value / _length;
    }, 0);

    return average;
  }
}
