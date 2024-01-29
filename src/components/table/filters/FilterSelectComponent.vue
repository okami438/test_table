<script setup>

import InputTypeFilterComponent from "@/components/table/filters/types/InputTypeFilterComponent.vue";
import DateTypeFilterComponent from "@/components/table/filters/types/DateTypeFilterComponent.vue";
import {onMounted, ref} from "vue";

const props = defineProps(['tableFilters']);
const emit = defineEmits(['filtering', 'reset'])

const filtersData = ref({});

const initFiltersData = () => {
  filtersData.value = props.tableFilters.reduce((acc, current) => {
    const filterDataItem = {
      [current.key]: current.defaultValue || null
    }
    return {...acc, ...filterDataItem}
  }, {})
}

onMounted(() => {
  initFiltersData();
})

</script>

<template>
  <div class="filter_container" v-for="filter in tableFilters">
    <InputTypeFilterComponent
        v-if="filter.type === 'input'"
        :filter="filter"
        :model-value="filtersData[filter.key]"
        @update:model-value="event => filtersData[filter.key] = event.target.value"
    />
    <DateTypeFilterComponent
        v-if="filter.type === 'date'"
        :filter="filter"
        :model-value="filtersData[filter.key]"
        @update:model-value="event => filtersData[filter.key] = event.target.value"
    />
  </div>

  <div class="button-group">
    <button @click="emit('filtering', filtersData)">Отфильтровать</button>
    <button @click="emit('reset')">Сбросить</button>
  </div>

</template>

<style scoped>


.button-group {
    display: flex;
    flex-direction: row;
    gap: .5rem;
  }


</style>