import request from '@/utils/request'

export default {
  getPageCourseList(page, limit, searchObj) {
    return request({
      url: `/edu/course/front/pageCourse/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  // 获取课程二级分类
  getCourseNestedTreeList2() {
    return request({
      url: `/edu/subject/getSubjects`,
      method: 'get'
    })
  },
  // 根据课程ID获取课程信息
  getCourseByCourseId(courseId) {
    return request({
      url: `/edu/course/front/getCourse/${courseId}`,
      method: 'get'
    })
  }

}
