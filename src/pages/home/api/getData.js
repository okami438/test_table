
const data = [
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
        "id": 5,
        "name": "Test one",
        "description": "dolor sit amet",
        "date": "2023-11-10T21:26:32.000000Z"
    },
    {
        "id": 6,
        "name": "Test two",
        "description": "dolor sit amet",
        "date": "2023-11-15T21:26:32.000000Z"
    },
    {
        "id": 7,
        "name": "Test three",
        "description": "dolor sit amet",
        "date": "2023-11-09T21:26:32.000000Z"
    },
    {
        "id": 8,
        "name": "Test two",
        "description": "dolor sit amet",
        "date": "2023-11-27T21:26:32.000000Z"
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
        "date": "2023-11-30T21:26:32.000000Z"
    }
]

export const getData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);

    });
}