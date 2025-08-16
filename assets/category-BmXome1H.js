import { z as a, r } from './index-DU_P6jZu.js'
import { g as o } from './category-CwYMqhg4.js'
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
