<script setup>

import ArrowDownIcon from '@/assets/icons/table/arrow_down.svg';
import ArrowUpIcon from '@/assets/icons/table/arrow_up.svg';
import ArrowsSortIcon from '@/assets/icons/table/arrows_sort.svg';
import {ref, watch} from "vue";


const props = defineProps(['column', 'activeColumnKey']);
const emit = defineEmits(['sort', 'change:activeColumnKey']);

const currentState = ref('waiting');

const changeButtonState = () => {
  emit('change:activeColumnKey', props.column.key)
  if (currentState.value === 'waiting' || currentState.value === 'desc') currentState.value = 'asc';
  else currentState.value = 'desc';
  emit('sort', currentState.value)
};

watch(() => props.activeColumnKey, (newValue) => {
  if (newValue !== props.column.key) currentState.value = 'waiting';
})

</script>

<template>
  <span class="sort" @click="changeButtonState">
    <ArrowsSortIcon v-if="currentState === 'waiting'"/>
    <ArrowUpIcon v-else-if="currentState === 'asc'" />
    <ArrowDownIcon v-else />
  </span>

</template>

<style scoped>

</style>