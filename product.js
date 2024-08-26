 const getProduct = () => {
    return new Promise((resolve , reject)=> {
        setTimeout(()=> {
           resolve({
            products : [
                {
                    id: 1 ,
                    name: "iphone",
                    price : 80000
                }
            ]
           })
        }, 2000)
    })
}

module.exports = {getProduct}

