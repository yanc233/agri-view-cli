<!--
 * @Author: Yanc
 * @LastEditTime: 2023-03-02 16:56:05
-->
<template>
  <a-input-number
    v-if="type === 'number'"
    :style="{ width: '80px' }"
    size="small"
    :default-value="(defaultValue as any)"
    @change="handleChange"
  />
  <a-input
    v-else-if="type === 'string'"
    :style="{ width: '180px' }"
    size="small"
    :default-value="(defaultValue as any)"
    @change="handleChange"
  />
  <a-switch
    v-else
    :default-checked="(defaultValue as any)"
    size="small"
    @change="handleChange"
  />
</template>

<script lang="ts" setup>
  const props = defineProps({
    type: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    defaultValue: {
      type: [String, Boolean, Number],
      default: '',
    },
  });
  const emit = defineEmits(['inputChange']);
  const handleChange = (value: unknown) => {
    emit('inputChange', {
      value,
      key: props.name,
    });
  };
</script>
