const client = require("./client");

const hashMap = async () => {
    const data = await client.hset(
        "car:1",
        'model', 'Thar roxx',
        'brand', 'mahindra',
        'type', 'SUV',
        'price', 1500000
    );

    const data2 = await client.hset(
        "car:2",
        'model', ' Mayback 650',
        'brand', 'Mercedes',
        'type', 'SUV',
        'price', 45000000
    )

    const data3 = await client.hset(
        "car:3",
        'model', 'Defender p90',
        'brand', 'Land Rover',
        'type', 'SUV',
        'price', 15000000
    )


    // console.log(data);

    // const res2 = await client.hget('car:1', 'model')
    // console.log(res2) 

    const res = await client.hmget('car:2', ['model' , 'brand' , 'type', 'price']);
    console.log(res);
}

hashMap();
