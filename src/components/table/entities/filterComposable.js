export const filterComposable = (defaultData, currentData) => {


    const onClickFilteringData = (filters) => {
        currentData.value = defaultData.filter(item => {
            return Object.keys(filters).every(key => {
                if (filters[key] !== null && filters[key] !== "") {
                    return item[key] == filters[key];
                }
                return true;
            });
        });
    };

    const onClickUnFilteringData = () => {
        return currentData.value = defaultData;
    }


    return {
        onClickFilteringData,
        onClickUnFilteringData
    }
}