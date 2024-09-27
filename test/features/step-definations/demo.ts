import { Given,When,Then } from "@wdio/cucumber-framework";
import logger from "../../helper/logger.ts";
import reporter from "../../helper/reporter.ts";


Given(/^Jira login page is opened$/,async function(){
    //get the TestID
reporter.addStep(this.testId,"info","Jira login page function initialized")
logger.info(`Starting opening of Jira page`)
    //@ts-ignore
    await browser.url(browser.options.jiraURL)
    await browser.maximizeWindow()
    
})

When(/^I enter the userfield with (.*)$/,async function(userName){
    const ele=await $(`input[type=email]`)
    console.log('usernMae', userName)
    await ele.setValue(userName)
    await browser.keys("Enter")
    // await browser.debug()
    
})


//Web Interaction//

// Given(/^Web page opened$/,async function(){
//     await browser.url("/inputs")
//     await browser.setTimeout({implicit:15000,pageLoad:10000})
//     // await browser.maximizeWindow
// })



// When(/^perfrom web interaction$/,async function(){
//     //once opened the select the inputs 
//     //one the input is opened then select the input component 
//     //after type some random number in the input 
    
//     const num=12345
//     const strNum=num.toString()
//     const input= await $(`input[type=number]`)
//     await input.click()

//     for (let index = 0; index < strNum.length; index++) {
//         const element = await strNum[index];
//         await browser.pause(1000)
//         await browser.keys(element)
//     }
// })

/**
 * 
 * 
 */
