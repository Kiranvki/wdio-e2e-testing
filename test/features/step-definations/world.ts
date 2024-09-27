import { setWorldConstructor } from "@wdio/cucumber-framework";
import {expect} from 'chai'


class CustomWorld{
    testId:string
    constructor(){
        this.testId=""
    
    }
}

setWorldConstructor(CustomWorld)