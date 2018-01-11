/**************************************************
 * Created by kaili on 2017/9/4 下午6:26.
 **************************************************/

/**
 * 数学函数计算
 */
export default class kMath {
  /**
   * @ignore
   */
  constructor(val) {
    this.val = val || 0
  }

  /**
   * 调用add方法，在原有value加上新的数值
   *
   * @example
   * new kMath(1).add(1).value();
   * // returns 2
   *
   * @param {number} val=0 与kMath实例的Value相加的值.
   * @return {kMath} kMath实例.
   */
  add(val) {
    this.val += val
    return this
  }

  /**
   * 调用subtract方法，在原有value减去新的数值
   *
   * @default [val=undefined]
   * @param {number} val - 与kMath实例的Value相减的值.
   * @returns {kMath}
   */
  subtract(val) {
    this.val -= val
    return this
  }

  /**
   * 乘法
   * @param 乘数
   * @returns {kMath}
   */
  multiply(val) {
    this.val *= val
    return this
  }

  /**
   * 除法
   * @param 除数
   * @returns {kMath}
   */
  divide(val) {
    if (val !== 0) {
      this.val /= val
    }
    return this
  }

  /**
   * 取值
   * @returns {kMath}
   */
  value() {
    return this.val
  }

}