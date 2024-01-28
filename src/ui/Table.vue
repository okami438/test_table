<script setup>

import {codeDataSerialization, dateDataSerialization, defaultDataSerialization} from "@/utils/dataSerialization";
import ArrowDownIcon from '@/assets/icons/table/arrow_down.svg';
import ArrowUpIcon from '@/assets/icons/table/arrow_up.svg';
import ArrowsSortIcon from '@/assets/icons/table/arrows_sort.svg';

const tableData = [
  {
    "id": 1,
    "name": "Test one",
    "description": "Lorem ispum",
    "date": "2023-11-29T21:26:32.000000Z"
  },
  {
    "id": 2,
    "name": "Test two",
    "description": "dolor sit amet",
    "date": "2023-11-29T21:26:32.000000Z"
  },
  {
    "id": 3,
    "name": "Test three",
    "description": "consectetur adipiscing elit",
    "date": "2023-11-29T21:26:32.000000Z"
  },
  {
    "id": 4,
    "name": "Test four",
    "description": "Suspendisse et est eget",
    "date": "2023-11-29T21:26:32.000000Z"
  }
];

const tableColumns = [
  {key: 'id', label: 'Код', sorting: true, format: codeDataSerialization},
  {key: 'name', label: 'Наименование', sorting: false, format: defaultDataSerialization},
  {key: 'description', label: 'Описание', sorting: false, format: defaultDataSerialization},
  {key: 'date', label: 'Дата', sorting: true, format: dateDataSerialization},
]

</script>
<template>
  <div class="table-container">
    <div class="table-header">
      <h3>Заголовок таблицы</h3>
      <slot name="header" />
    </div>
    <table>
      <thead>
      <tr>
        <th v-for="column in tableColumns">
          <div>
            <span>{{ column.label }}</span>
            <span class="sort" v-if="column.sorting"><ArrowsSortIcon/></span>

          </div>

        </th>

      </tr>
      </thead>
      <tbody>
      <tr v-for="dataItem in tableData" :key="dataItem.id">
        <td v-for="column in tableColumns">
          <component :is="column.format(dataItem[column.key])"/>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<style lang="scss" scoped>

.table-container {
  padding: 0.5rem 1.5rem;
  border: 1px solid #dddddd;
  border-radius: 12px;
}

table {
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #dddddd;
  border-collapse: collapse;

  thead {
    th {
      font-weight: bold;
      padding: 0.5rem;
      background: #efefef;
      border: 1px solid #dddddd;

      div {
        display: flex;
        gap: 0.5rem ;
        align-items: center;
        justify-content: center;

        .sort {
          cursor: pointer;
        }
      }

    }
  }

  tbody {
    td {
      border: 1px solid #dddddd;
      padding: .5rem;
    }
  }

}

</style>
