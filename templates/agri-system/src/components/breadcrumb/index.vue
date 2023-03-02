<!--
 * @Author: Yanc
 * @Date: 2023-01-09 14:01:23
 * @LastEditTime: 2023-03-02 16:55:24
-->
<template>
  <a-breadcrumb class="container-breadcrumb">
    <a-breadcrumb-item style="cursor: pointer" @click="router.go(-1)">
      <icon-apps />
    </a-breadcrumb-item>

    <div v-if="items.length > 0">
      <a-breadcrumb-item v-for="item in items" :key="item">
        {{ item }}
      </a-breadcrumb-item>
    </div>
  </a-breadcrumb>
</template>

<script lang="ts" setup>
  import { PropType } from 'vue';
  import router from '@/router';

  defineProps({
    items: {
      type: Array as PropType<string[]>,
      default() {
        return [];
      },
    },
    texts: {
      type: Array as PropType<string[]>,
      default() {
        return [];
      },
    },
  });
</script>

<style scoped lang="less">
  .container-breadcrumb {
    :deep(.arco-breadcrumb-item) {
      color: rgb(var(--gray-6));

      &:last-child {
        color: rgb(var(--gray-8));
      }
    }
  }
</style>
