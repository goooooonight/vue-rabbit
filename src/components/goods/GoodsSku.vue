<script setup>
import { defineProps, ref } from 'vue'

defineProps({
  goods: Object
})

// 选择的商品参数
const activeSpec = ref({})
</script>

<template>
  <dl v-for="spec in goods.specs" :key="spec.id">
    <dt>{{ spec.name }}</dt>
    <dd class="spec-dd flex-1 flex-wrap">
      <div
        v-for="(value, index) in spec.values"
        :key="index"
        class="cursor-pointer border border-[#e4e4e4]"
        :class="{
          'spec-active': activeSpec[spec.name] === value.name
        }"
        @click="activeSpec[spec.name] = value.name"
      >
        <!-- 如果携带图片则展示图片 -->
        <img
          v-if="value.picture"
          v-img-lazy="value.picture"
          alt=""
          :title="value.desc"
          class="w-[50px] h-[50px]"
        />
        <!-- 否则展示文字 -->
        <span v-else class="block px-[20px] py-[5px]">
          {{ value.name }}
        </span>
      </div>
    </dd>
  </dl>
</template>

<style scoped lang="scss">
dl {
  display: flex;
  align-items: center;
  dt {
    color: #999;
    margin-right: 20px;
  }
  dd {
    color: #666;
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
// 规格参数样式
.spec-dd {
  margin-right: 10px;
}
.spec-active {
  border: 1px $xtxColor solid;
}
</style>
