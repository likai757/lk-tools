/**************************************************
 * Created by kaili on 2017/9/4 下午6:28.
 **************************************************/
import KMath from '../src/KMath'

test('测试加法', () => {
  let math = new KMath(100)

  let val = math.add(100).value()
  expect(val).toEqual(200)

  val = math.subtract(50).value()
  expect(val).toEqual(150)
})