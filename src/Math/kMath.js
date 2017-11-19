/**************************************************
 * Created by kaili on 2017/9/4 下午6:26.
 **************************************************/

/**
 * 数学函数计算
 * @module kMath
 */
export default class kMath {
  /**
   * 构建一个数学计算实例
   * @param val
   */
  constructor (val) {
    this.val = val || 0
  }

  /**
   * 加法
   * @param 加数
   * @returns {kMath}
   */
  add (val) {
    this.val += val
    return this
  }

  /**
   * 减法
   * @param 减数
   * @returns {kMath}
   */
  subtract (val) {
    this.val -= val
    return this
  }

  /**
   * 乘法
   * @param 乘数
   * @returns {kMath}
   */
  multiply (val) {
    this.val *= val
    return this
  }

  /**
   * 除法
   * @param 除数
   * @returns {kMath}
   */
  divide (val) {
    if (val !== 0) {
      this.val /= val
    }
    return this
  }

  /**
   * 取值
   * @returns {kMath}
   */
  value () {
    return this.val
  }

}