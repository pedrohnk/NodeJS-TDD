const BaseRepoisoty = require("./../repository/base/baseRepository")

class CarService {
    constructor({ cars }) {
        this.carRepository = new BaseRepoisoty({ file: cars })
    }

    getRandomPositionFromArray(list) {
        const listLength = list.length

        return Math.floor(
            Math.random() * (listLength)
        )
    }

    chooseRandomCar(carCategory) {
        const randomCarIndex = this.getRandomPositionFromArray(carCategory.carsId)
        const carId = carCategory.carsId[randomCarIndex]

        return carId
    }

    async getAvailableCar(carCategory) {
        const carId = this.chooseRandomCar(carCategory)
        const car = await this.carRepository.find(carId)

        return car
    }
}

module.exports = CarService