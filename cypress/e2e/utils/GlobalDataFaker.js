import { faker } from "@faker-js/faker";

export default class RegisterDataFaker {
    
    nameFaker(){
        return faker.internet.username()
    }
    
    emailFaker(){
        return faker.internet.email()
    }

    passwordFaker(){
        return faker.internet.password()
    }


}