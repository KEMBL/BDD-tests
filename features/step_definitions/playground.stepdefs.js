const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { newE2EPage, E2EPage } = require("@stencil/core/testing");
const { puppeteer } = require("puppeteer");
//import assert from "assert";
// import puppeteer from 'puppeteer';
// import { newE2EPage, E2EPage } from "@stencil/core/testing";
// import { Given, When, Then } from 'cucumber';
// import testControllerHolder from '../support/testControllerHolder';

let browser; // : puppeteer.Browser;
let page;
let pp = puppeteer;

Given('I am open playground page {string}', async (siteUrl) => {
  this.browser  = await this.puppeteer.launch({headless: false});
  this.page = await this.browser.newPage();
   //this.page = await newE2EPage();
  // console.log(siteUrl);
  // newE2EPage().then(async (tmpPage) => {
  //   this.page = tmpPage;
  //   await page.goto(siteUrl);
  // })
   await page.goto('http://kembl.ru/stencil');
});

When('I am searching for {string} button on page', async (buttonSelector) => {
  // Write code here that turns the phrase above into concrete actions
    await this.page.waitForSelector(buttonSelector);
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
