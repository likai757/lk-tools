/**************************************************
 * Created by kaili on 2017/9/4 下午6:28.
 **************************************************/
import KMath from '../src/KMath'

test('测试加法', () => {
  let math = new KMath(100)
  let val = math.add(100).value()
  expect(val).toEqual(200)
})

test('测试减法', () => {
  let math = new KMath(100)
  let val = math.subtract(50).value()
  expect(val).toEqual(50)
})

test('测试乘法', () => {
  let math = new KMath(100)
  let val = math.multiply(5).value()
  expect(val).toEqual(500)
})

test('测试除法', () => {
  let math = new KMath(100)
  let val = math.divide(50).value()
  expect(val).toEqual(2)
})