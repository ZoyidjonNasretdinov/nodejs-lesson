// console.log("dir name -->",  __dirname)
// console.log("file name -->", __filename)

// import { user, userLogger } from "./user";
// import { car, carLogger } from "./car";

// console.log(car)
// console.log(carLogger)

// console.log(user)
// console.log(userLogger)




// (function(require, module, exports, __dirname, __filename){
// const userData = require('./user')
// const carData = require('./car')

// console.log(userData.user)
// userData.userLogger


// console.log(carData.user)
// carData.userLogger

// })()


const path = require('path')

// console.log(path.basename(__filename))
// console.log(path.dirname(__filename))
// console.log(path.extname(__filename))


// console.log(path.parse(__filename).root)

// console.log(path.join(__dirname, "template", "index.html"))
console.log(path.resolve(__dirname, "templates", 'index.html'))