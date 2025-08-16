import { z as a, r } from './index-62YaKhWX.js'
import { g as o } from './category-D4LaOi0H.js'
const i = a('rabbit-category', () => {
  const t = r([])
  return {
    cateList: t,
    getCategory: async () => {
      const {
        data: { result: e }
      } = await o()
      t.value = e
    }
  }
})
export { i as u }
