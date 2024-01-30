import {codeDataSerialization, dateDataSerialization, defaultDataSerialization} from "@/utils/dataSerialization.jsx";


export const HOME_PAGE_TABLE_COLUMNS_CONFIG = [
    {key: 'id', label: 'Код', sorting: true, format: codeDataSerialization},
    {key: 'name', label: 'Наименование', sorting: false, format: defaultDataSerialization},
    {key: 'description', label: 'Описание', sorting: false, format: defaultDataSerialization},
    {key: 'date', label: 'Дата', sorting: true, format: dateDataSerialization},
]