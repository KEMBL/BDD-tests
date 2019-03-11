Feature: Git .ignore button prototype on site

    I want that button opens dropdown list
    @StencilJSScenario
    Scenario: Click on button after site opens
        Given I am on playground page
        When I am searching for Git .ignore button on page
        Then I click Git .ignore button on page
        Then I should see dropdown list