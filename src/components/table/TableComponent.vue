<script setup>

import Table from "@/ui/Table.vue";
import FilterSelectComponent from "@/components/table/filters/FilterSelectComponent.vue";
import {filterComposable} from "@/components/table/features/filterComposable.js";
import {sortingComposable} from "@/components/table/features/sortingComposable.js";
import {onMounted, ref} from "vue";

const props = defineProps(['columnsConfig', 'filtersConfig', 'title', 'requestFn']);

const defaultTableData = ref();
const currentTableData = ref(8);
const activeColumnKey = ref('');
const isLoading = ref(false);

const fetchData = () => {
  isLoading.value = true;
  props.requestFn().then((data) => {
    defaultTableData.value = data;
    currentTableData.value = data;
    isLoading.value = false;
  })
}

onMounted(() => fetchData());

const {onClickFilteringData, onClickUnFilteringData} = filterComposable(defaultTableData, currentTableData);

const { onSortingData } = sortingComposable(currentTableData, activeColumnKey);

</script>

<template>
<Table
    :title="title"
    :columns-config="columnsConfig"
    :filters-config="filtersConfig"
    :data="currentTableData"
    :is-loading="isLoading"
    :active-column-key="activeColumnKey"
    @change:active-column-key="(key) => activeColumnKey = key"
    @sort="onSortingData"
>
  <template #header>
    <div class="filters">
      <FilterSelectComponent @filtering="(filters) => onClickFilteringData(filters)" @reset="onClickUnFilteringData" :table-filters="filtersConfig" />
    </div>
  </template>
</Table>
</template>