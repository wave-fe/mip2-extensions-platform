/**
 * @file url.js 和url相关的处理
 * @author huangjing02
 * @date 2018-09-17
 */

/**
 * 获取链接中的 query
 *
 * @param  {string} name 参数名称
 * @returns {string} 结果
 */
export function getQuery () {
  let url = location.search.substr(1)
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let matched = url.match(reg)

  return matched ? decodeURIComponent(matched[2]) : ''
}
