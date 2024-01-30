import moment from "moment";

export function defaultDataSerialization(value)  {
    return () => <div>{ value }</div>
}

export function codeDataSerialization(value)  {
    return () => <div style="color: cornflowerblue">{ value }</div>
}

export function dateDataSerialization(value)  {
    return () => <div>{ moment(value, 'YYYY-MM-DD hh:mm:ss').format('DD.MM.YYYY') }</div>
}