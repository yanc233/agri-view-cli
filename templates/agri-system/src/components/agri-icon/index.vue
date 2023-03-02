<template>
  <div class="">
    <icon-font
      v-if="icon?.type === 'iconfont'"
      :content="icon.name"
      :type="icon.name"
      :size="size"
    />
    <component :is="icon?.name" v-else :size="size"></component>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    icon?: {
      type: string;
      name: string;
    };
    size?: number;
  }

  withDefaults(defineProps<Props>(), {
    icon: () => ({
      type: 'arcoIcon',
      name: 'icon-loading',
    }),
    size: 14,
  });
</script>
