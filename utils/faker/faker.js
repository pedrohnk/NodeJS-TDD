const mocks = {
	cars: require("./mocks/cars.json"),
	categories: require("./mocks/category.json")
}

function randomCars() {
	const objectCars = Object.create(mocks.cars)
	const generateRandomIndex = Math.floor(Math.random() * objectCars.cars.length)

	const result = objectCars.cars[generateRandomIndex]

	return result
}

function randomCategory() {
	const objectCategory = Object.create(mocks.categories)
	const generateRandomIndex = Math.floor(Math.random() * objectCategory.categories.length)

	const result = objectCategory.categories[generateRandomIndex]

	return result
}

module.exports = {
	randomCars,
	randomCategory
}