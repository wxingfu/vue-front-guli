import request from '@/utils/request'

export default {
  getPageTeacherList(page, limit) {
    return request({
      url: `/edu/teacher/front/pageTeacher/${page}/${limit}`,
      method: 'get'
    })
  },

  getCourseByTeacherId(teacherId) {
    return request({
      url: `/edu/teacher/front/getTeacher/${teacherId}`,
      method: 'get'
    })
  }
}
