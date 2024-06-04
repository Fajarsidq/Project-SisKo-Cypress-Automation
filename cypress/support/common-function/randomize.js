import { faker } from '@faker-js/faker'

class Randomize {
    constructor() {
        this.randomName = '';
    }

    first_name() {
        this.randomName = faker.person.firstName();
        return this.randomName
    }

    last_name() {
        this.randomName = faker.person.lastName();
        return this.randomName
    }

    email() {
        return this.randomName + '@test.com';
    }

    phone_number() {
        return faker.number.int()
    }

    landline_number() {
        return faker.number.int()
    }
}

module.exports = new Randomize();
