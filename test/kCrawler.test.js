/**************************************************
 * Created by kaili on 2017/9/4 下午6:28.
 **************************************************/
import kCrawler from '../src/Crawler/kCrawler'

/**
 * @test {测试网络请求}
 */
test('测试网络请求', () => {
  let crawler = new kCrawler()
  return crawler
    .send('http://www.baidu.com')
    .then(title => {
      expect(title).toEqual('百度一下，你就知道')
    })
})
