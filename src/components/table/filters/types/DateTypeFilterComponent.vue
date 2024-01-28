<script setup>

import { ref } from "vue";

const props = defineProps(['filter'])

const modelValue = ref();


</script>

<template>
  <div class="filter">
    <label class="filter__label"> {{ filter.label }} </label>
    <input class="filter__label" :id="filter.id" type="date" v-model="modelValue">
  </div>
</template>

<style scoped>


</style>