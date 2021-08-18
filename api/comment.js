import request from '@/utils/request'

export default {

  getPageCommentList(page, limit, courseId) {
    return request({
      url: `/edu/comment/pageComment/${page}/${limit}`,
      method: 'get',
      params: {courseId}
    })
  },
  addComment(comment) {
    return request({
      url: `/edu/comment/auth/save`,
      method: 'post',
      data: comment
    })
  }
}
