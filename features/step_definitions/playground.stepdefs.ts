import assert from "assert";
// import puppeteer from 'puppeteer';
import { newE2EPage, E2EPage } from "@stencil/core/testing";
import { Given, When, Then } from 'cucumber';
// import testControllerHolder from '../support/testControllerHolder';

// let browser : puppeteer.Browser;
let page : E2EPage;

Given('I am open playground page {string}', function (siteUrl) {
  // this.browser  = await puppeteer.launch({headless: false});
  //this.page = await browser.newPage();
  // this.page = newE2EPage();
  newE2EPage().then(async (tmpPage) => {
    this.page = tmpPage;
    await page.goto(siteUrl);
  })
  // await page.goto('http://kembl.ru/stencil');
});

When('I am searching for {string} button on page', async (buttonSelector) => {
  // Write code here that turns the phrase above into concrete actions
    await page.waitForSelector(buttonSelector);
    const button = await page.find(buttonSelector);
    assert.notEqual(!!button, false);
});

Then('I am pressing {string} button on page', async (defaultButtonSelector) => {
  // Write code here that turns the phrase above into concrete actions
  const button = await page.find(defaultButtonSelector);
  assert.notEqual(!!button, false);
  await button.click();
  await page.waitForChanges();
});

Then('I should see dropdown list {string} inside {string} by class {string}', async (popupSelector, containerSelector, className)  => {
  // Write code here that turns the phrase above into concrete actions
  const div = await page.find(containerSelector);
  assert.notEqual(!!div, false);
  const popup = await div.find(popupSelector);
  assert.notEqual(!!popup, false);
//  expect(popup).not.toHaveClass(className);

  // await button.click();
  //await page.waitForChanges();
  expect(popup).toHaveClass(className);
});
