import {http} from '@untils/server'


// 发现首页
export const FindData = (params) => http("get", "/api.thebeastshop.com/app/shareOrder/evaluate",params)
// 封面故事
export const StoryData = (params) => http("get", "/api.thebeastshop.com/app/store/getReviewList",params)


