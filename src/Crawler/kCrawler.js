var Crawler = require('crawler')

/**
 * 爬虫获取网页标题
 * @module Crawler
 */
var c = new Crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  /**
   * 回调方法
   * @param 错误
   * @param 返回结果
   * @param 返回处理
   */
  callback: function (error, res, done) {
    if (error) {
      console.log(error)
    } else {
      var $ = res.$
      // $ is Cheerio by default
      //a lean implementation of core jQuery designed specifically for the server
      console.log($('title').text())
    }
    done()
  }
})

// Queue just one URL, with default callback
c.queue('http://www.baidu.com')