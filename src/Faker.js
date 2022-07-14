import React from "react";
import faker from "faker"

function Faker() {

    const data = {
    name : faker.name.firstName(),
    breed : faker.animal.cat(),
    age : faker.datatype.number(20),
    price : faker.commerce.price(100,600,0),
    sex : faker.datatype.boolean()?"Female":"Male"
    }

    return(
        <div>
            <p>
            Name: {data.name} <br></br>
            Breed: {data.breed} <br></br>
            Age: {data.age} {data.age===1?"year":"years"}<br></br>
            Price: £{data.price} <br></br>
            Sex: {data.sex} <br></br>
            </p>  
        </div>
    )
}

export default Faker;