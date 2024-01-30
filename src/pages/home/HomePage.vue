<script setup>

import TableComponent from "@/components/table/TableComponent.vue";
import {HOME_PAGE_TABLE_COLUMNS_CONFIG} from "@/pages/home/structure/table.js";
import {HOME_PAGE_TABLE_FILTERS_CONFIG} from "@/pages/home/structure/filters.js";
import {getData} from "@/pages/home/api/getData.js";
</script>

<template>
  <TableComponent
      title="Заголовок таблицы"
      :columns-config="HOME_PAGE_TABLE_COLUMNS_CONFIG"
      :filters-config="HOME_PAGE_TABLE_FILTERS_CONFIG"
      :request-fn="getData"
  />
</template>

<style scoped>

</style>