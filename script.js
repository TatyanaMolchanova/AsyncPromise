console.clear()

// getProducts => list of products

// getBasket => basket
// clearBasket

// addProductToBasket
// removeProductToBasket


// console.log('start')

// let basket = []

// basket = Sync.getBasket()
// console.table(basket)

// const products = Sync.getProducts()
// console.table(products)

// basket = Sync.addProductToBasket(products[0])
// console.table(basket)

// basket = Sync.addProductToBasket(products[1])
// console.table(basket)


// console.log('finish')


//Callback

// console.log('start')
// Callback.getBasket(function(basket) {
//     console.table(basket)

//     Callback.getProducts(function(products) {
//         console.table(products)

//         Callback.addProductToBasket(products[0], function(basket) {
//             console.table(basket)
//         })
//     })
// })

// console.log('finish')
// console.log('fifdsafdsafsdnish')

//26:21  https://www.youtube.com/watch?v=LCsIuCGrCL0

// Promise

// console.log('start')

// // const promise = ByPromise.getBasket()
// let basket = []
// let products = []


// ByPromise.getBasket()

//     .then(_basket => {
//         basket = _basket
//         console.log(basket)

//         // return ByPromise.getProducts()

//         throw Error('some error')
//     })
    
//     . then(_products => {
//         products = _products
//         console.table(products)

//         return ByPromise.addProductToBasket(products[0])
//     })
    
//     .then(_basket => {
//         basket = _basket 
//         console.table(basket)

//         return ByPromise.addProductToBasket(products[1])
//     })

//     .then(_basket => {
//         basket = _basket 
//         console.table(basket)

//         return ByPromise.addProductToBasket(products[1])
//     })

//     .then(_basket => {
//         basket = _basket 
//         console.table(basket)

//         return 5
//     })

//     .then(value => {
//         console.log(value)
//     })

//     .catch(err => {
//         console.log(err)
//     })

// console.log('finish')

// console.log('work')

// const a = [0, 1, 2]
// const b = [3, 4, 5]

// const c = [...a, ...b]
// console.log(c)

// ASYNC

// console.log('start')

// main()

// console.log('finish')

// async function main() {
//     let basket = await ByPromise.getBasket()
//     console.log(basket)

//     const products = await ByPromise.getProducts()
//     console.table(products)

//     await Promise.all([
//         ByPromise.addProductToBasket(products[0]),
//         ByPromise.addProductToBasket(products[0]),
//         ByPromise.addProductToBasket(products[0]),
//         ByPromise.addProductToBasket(products[1]),
//     ])

//     basket = await ByPromise.getBasket()
//     console.table(basket)


    
// }

// ASYNC CATCH ERR

console.log('start')

main()

console.log('finish')

async function main() {

    try {
        let basket = await ByPromise.getBasket()
        console.log(basket)
    
        const products = await ByPromise.getProducts()
        console.table(products)

        throw Error('some error')
    
        await Promise.all([
            ByPromise.addProductToBasket(products[0]),
            ByPromise.addProductToBasket(products[0]),
            ByPromise.addProductToBasket(products[0]),
            ByPromise.addProductToBasket(products[1]),
        ])
    
        basket = await ByPromise.getBasket()
        console.table(basket)
    } catch(err) {
        console.log(err)
    }


    // kinds of functions

    // synchronous

    function f1 () {
        this // personal this
    }
    const f2 = () => {
        //this // this of previous environment - it hasn't personal this
    }

    // asynchronous

    async function f3 () {
        this // personal this
    }
    const f4 = async () => {
        //this // this of previous environment - it hasn't personal this
    }








    
}
