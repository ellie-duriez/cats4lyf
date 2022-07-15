import faker from "faker";

const Faker = () => {
    const dataArray = []

    for (let i = 0; i < 20; i++) {
        const name = faker.name.firstName()
        const breed = faker.animal.cat()
        const age = faker.datatype.number(20)
        const price = faker.commerce.price(50, 500)

        dataArray.push({ name, breed, age, price })
    }
    return dataArray
}

export default Faker;