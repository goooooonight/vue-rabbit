import { dayjs } from 'element-plus'

export const formatTime = (time) => dayjs(time).format('mm分ss秒')
