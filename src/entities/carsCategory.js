const Base = require("./base/base")

class CarsCategory extends Base {
    constructor({ id, name, carsId, price }) {
        super({ id, name })

        this.carsId = carsId
        this.price = price
    }
}

module.exports = CarsCategory