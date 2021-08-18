import request from '@/utils/request'

export default {

  //1、创建订单
  createOrder(orderNo) {
    return request({
      url: '/order/manager/createOrder/' + orderNo,
      method: 'post'
    })
  },
  //2、根据id获取订单
  getByOrderNo(orderNo) {
    return request({
      url: '/order/manager/getOrder/' + orderNo,
      method: 'get'
    })
  },
  //3、生成微信支付二维码
  createNative(orderNo) {
    return request({
      url: '/order/payLog/createNative/' + orderNo,
      method: 'get'
    })
  },
  //4、根据id获取订单支付状态
  queryPayStatus(orderNo) {
    return request({
      url: '/order/payLog/queryPayStatus/' + orderNo,
      method: 'get'
    })
  }
}
