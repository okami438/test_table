export const sortingComposable = (currentData, key) => {

    const firstSorting = (a, b) => {
        if (a == b) return 0
        if (a < b) return -1
        return 1
    }

    const ascSortingData = (a, b) => {
        const a1 = a[key.value];
        const b1 = b[key.value];
        if (a1 == b1) firstSorting(a[key.value], b[key.value]);
        if (a1 < b1) return -1
        return 1
    }

    const descSortingData = (a, b) => {
        const a1 = a[key.value];
        const b1 = b[key.value];
        if (a1 == b1) firstSorting(a[key.value], b[key.value]);
        if (a1 > b1) return -1
        return 1
    }

    const onSortingData = (state) => {

        const sortTypes = {
            asc: ascSortingData,
            desc: descSortingData
        }

        currentData.value = currentData.value.sort(sortTypes[state]);
    }


    return {
        onSortingData
    }

}