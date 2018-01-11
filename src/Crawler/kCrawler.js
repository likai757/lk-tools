import Crawler from 'crawler'
import MessageCenter from 'nmessage-center'

/**
 * 爬虫工具类
 */
export default class kCrawler {

  constructor() {
    /**
     * 消息总线
     * @type {MessageCenter}
     */
    this.bus = new MessageCenter()
    /**
     * Crawler实例
     * @type {Crawler} Crawler
     * @property {function} C.queue 执行队列
     * @property {number} C.maxConnections 最大连接数
     */
    this.crawler = new Crawler({
      maxConnections: 10,
      callback: this.handleResponse
    })
  }

  /**
   * 发送网络请求
   * @param {array} 请求队列
   * @listens {@send-response} 监听相应结果事件
   * @desc 发送网络请求
   * @example
   * new kCrawler().send(['http://www.baidu.com'])
   * new kCrawler().send('http://www.baidu.com')
   */
  send = (queue) => {
    this.crawler.queue(queue)
    return new Promise((resolve, reject) => {
      this.bus.once('@send-response', (resp) => {
        if (resp.error) {
          reject(resp.error)
        } else {
          resolve(resp.title)
        }
      })
    })
  }

  /**
   * 更新State 可使用{@link kMath}替代
   * @private
   * @deprecated 用_updateState代替
   * @see https://reactjs.org/
   */
  _updateNewState = () => {
    console.log('_updateNewState')
  }

  /**
   * 更新State
   * @private
   */
  _updateState = () => {
    throw 'params has '
    console.log('_updateState')
  }

  /**
   * 处理请求结果
   * @param {error} 错误信息
   * @param {res} 响应结果
   * @param {done} 执行完成
   * @emits {@send-response} 当请求结果返回时触发.
   */
  handleResponse = (error, res, done) => {
    if (error) {
      this.bus.emit('@send-response', { error })
    } else {
      var $ = res.$
      let title = $('title').text()
      this.bus.emit('@send-response', { title })
    }
    done()
  }
}