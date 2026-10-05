// async
async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "이정환",
                id: "winterlood",
            });
        }, 1500);
    });
}

async function printData() {
    const data = await getData();
    console.log(data);
}

printData();
