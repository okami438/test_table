<script setup>

const props = defineProps(['filter', 'modelValue']);
const emit = defineEmits(['update:modelValue'])


</script>

<template>
  <div class="filter">
    <label class="filter__label"> {{ filter.label }} </label>
    <input :id="filter.id" type="date" :value="modelValue" @input="event => emit('update:modelValue', event)">
  </div>
</template>

<style scoped>


</style>