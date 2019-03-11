import { browser } from "protractor";
import { SearchPageObjects } from "../pages/searchPage";
const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const search: SearchPageObjects = new SearchPageObjects();

Given("I am on playground page", async () => {
    await expect(browser.getTitle()).to.eventually.equal("Stencil Playground");
});

Then("I am searching for Git .ignore button on page", async () => {
    const dropdownExists = await search.isDropDownButtonPresent();
    await expect(dropdownExists).to.equal(true);
});

When("I click Git .ignore button on page", async () => {
    await search.dropdownButton.click();
});

Then("I should see dropdown list", async () => {
    const popupExists = await search.isPopupPresent();
    await expect(popupExists).to.equal(true);
});
