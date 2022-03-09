const { randomCars, randomCategory } = require("../utils/faker/faker")
const CarsCategory = require("../src/entities/carsCategory")
const Cars = require("../src/entities/cars")
const Customer = require("../src/entities/customer")

const Chance = require("chance")
const { join } = require("path")
const { writeFile } = require("fs/promises")

const chance = new Chance()

const seederBaseFolder = join(__dirname, "../", "database")
const ITEMS_AMOUNT = 2
const cars = []
const customers = []

const carCategory = new CarsCategory({
    id: chance.hash({length: 40}),
    name: randomCategory(),
    carsId: [],
    price: chance.dollar({min: 3000})
})

for(let index = 0; index <= ITEMS_AMOUNT; index++) {
    const car = new Cars({
        id: chance.hash({length: 40}),
        name: randomCars(),
        releaseYear: chance.year({min: 2010, max: 2022}),
        available: true,
        gasAvailable: true,
        profession: chance.profession()
    })

    carCategory.carsId.push(car.id)
    cars.push(car)

    const customer = new Customer({
        id: chance.hash({length: 40}),
        name: chance.name(),
        age: chance.age({min: 18, max: 50})
    })
    customers.push(customer)
}

const write = (filename, data) => writeFile(join(seederBaseFolder, filename), JSON.stringify(data))

;(async () => {
    await write('cars.json', cars)
    await write('carsCategory.json', [carCategory])
    await write('customers.json', [customers])

    console.log([cars])
    console.log([carCategory])
    console.log([customers])
})()
