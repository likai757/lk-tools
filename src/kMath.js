/**************************************************
 * Created by kaili on 2017/9/4 下午6:26.
 **************************************************/
export default class LMath {

  constructor (val) {
    this.val = val || 0
  }

  add (val) {
    this.val += val
    return this
  }

  subtract (val) {
    this.val -= val
    return this
  }

  multiply (val) {
    this.val *= val
    return this
  }

  divide (val) {
    if (val !== 0) {
      this.val /= val
    }
    return this
  }

  value () {
    return this.val
  }

}