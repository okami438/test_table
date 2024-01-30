<script setup>
import TableSortButton from "@/components/table/entities/TableSortButton.vue";

const props = defineProps(['columnsConfig', 'filtersConfig', 'activeColumnKey', 'data', 'isLoading', 'title']);
const emit = defineEmits(['sort', 'change:activeColumnKey']);

</script>
<template>
  <div class="table-container">
    <div class="table-container__header">
      <h3>{{ title }}</h3>
      <slot name="header" />
    </div>
    <table>

      <thead>
      <tr>
        <th v-for="column in columnsConfig" :key="column.key">
          <div>
            <span>{{ column.label }}</span>
            <TableSortButton
                v-if="column.sorting"
                :active-column-key="activeColumnKey"
                :column="column"
                @change:active-column-key="(key) => emit('change:activeColumnKey', key)"
                @sort="(state) => emit('sort', state)"
            />
          </div>
        </th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="dataItem in data" :key="dataItem.id">
        <td v-for="column in columnsConfig">
          <span :class="`loading-${dataItem}`" v-if="isLoading" />
          <component v-if="!isLoading" :is="column.format(dataItem[column.key])"/>
        </td>
      </tr>
      </tbody>

    </table>
  </div>

</template>

<style lang="scss" scoped>

@for $i from 1 through 8 {
  .loading-#{$i} {
    display: block;
    border-radius: 12px;
    width: random(300) + px;
    height: 18px;
    background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
    background-size: 500px 100px;
    animation-name: moving-gradient;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
}



.table-container {
  padding: 0.5rem 1.5rem;
  border: 1px solid #dddddd;
  border-radius: 12px;

  &__header {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: .3rem;

    h3 {
      color: cornflowerblue;
    }
  }

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
