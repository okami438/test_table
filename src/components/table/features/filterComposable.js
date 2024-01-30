export const filterComposable = (defaultData, currentData) => {


    const onClickFilteringData = (filters) => {
        currentData.value = defaultData.value.filter(item => {
            return Object.keys(filters).every(key => {
                if (filters[key] !== null && filters[key] !== "") {
                    return item[key] == filters[key] || (typeof item[key] === 'string' && item[key].startsWith(filters[key]));
                }
                return true;
            });
        });
    };

    const onClickUnFilteringData = () => {
        return currentData.value = defaultData.value;
    }


    return {
        onClickFilteringData,
        onClickUnFilteringData
    }
}