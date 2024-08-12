import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from 'chai'


Given(/^Jira Site is opened$/, async function () {
    console.log("Befor opening the browser");
    await browser.url("https://visteon-dev.atlassian.net");
    //console.log("After closing the browser");

})


When(/^I enter the inputfield of Jira site (.*)$/, async function (username) {
    console.log(`>> username: ${username}`);
    let ele = await $('[id=username]');
    await ele.setValue(username);
    await browser.keys("Enter");

})

When(/^I enter the inputfield of SSO site (.*)$/, async function (username) {
    console.log(`>> username: ${username}`);
    let ele = await $('[name="loginfmt"]');
    await ele.setValue(username);
    await browser.keys("Enter");

    await browser.waitUntil(async function () {
        return (await browser.getUrl()) === 'https://visteon-dev.atlassian.net/jira/your-work'
    }, {
        timeout: 1000 * 60 * 2,
        timeoutMsg: 'expected text to be different after 5s'
    })

})

Then(/^ULR should match (.*)$/, async function (expectedURL) {
    console.log(`>> expectedURL: ${expectedURL}`);
    let url = await browser.getUrl();
    expect(url).to.equal(expectedURL);
})




