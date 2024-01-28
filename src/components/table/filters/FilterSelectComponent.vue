<script setup>

import InputTypeFilterComponent from "@/components/table/filters/types/InputTypeFilterComponent.vue";
import DateTypeFilterComponent from "@/components/table/filters/types/DateTypeFilterComponent.vue";

const props = defineProps(['filter'])

</script>

<template>
  <div class="filter_container">
    <InputTypeFilterComponent v-if="filter.type === 'input'" :filter="filter"/>
    <DateTypeFilterComponent v-if="filter.type === 'date'" :filter="filter"/>
  </div>
</template>

<style scoped>


</style>