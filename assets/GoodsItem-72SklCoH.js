import {
  _ as i,
  e as a,
  l as n,
  m as l,
  o as r,
  w as m,
  a as e,
  k as x,
  t as s
} from './index-DU_P6jZu.js'
const _ = {
    class:
      'item w-[220px] h-[300px] px-[30px] flex flex-col justify-center items-center'
  },
  p = { alt: '', class: 'w-[160px] h-[160px]' },
  d = { class: 'w-full text-center text-[16px] truncate' },
  u = { class: 'w-full text-center truncate text-[#999]' },
  h = { class: 'price text-[20px]' },
  f = {
    __name: 'GoodsItem',
    props: { item: Object },
    setup(t) {
      return (v, w) => {
        const c = a('RouterLink'),
          o = n('img-lazy')
        return (
          r(),
          l(
            c,
            { to: `/goods/${t.item.id}` },
            {
              default: m(() => [
                e('div', _, [
                  x(e('img', p, null, 512), [[o, t.item.picture]]),
                  e('p', d, s(t.item.name), 1),
                  e('p', u, s(t.item.desc), 1),
                  e('p', h, '￥' + s(t.item.price), 1)
                ])
              ]),
              _: 1
            },
            8,
            ['to']
          )
        )
      }
    }
  },
  k = i(f, [['__scopeId', 'data-v-14c94891']])
export { k as G }
