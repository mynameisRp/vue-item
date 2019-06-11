import {http} from '@untils/server'


// 发现首页
export const FindData = (params) => http("get", "app/shareOrder/evaluate",params)
// 封面故事
export const StoryData = (params) => http("get", "app/store/getReviewList",params)


