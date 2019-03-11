Feature: Searching for git button on site

  I want that "Add .gitignore" button opens dropdown list

  Scenario: Click on button after site opens
    Given I am open playground page "http://kembl.ru/stencil"
    When I am searching for "button-with-popup" button on page
    Then I am pressing "button-with-popup >>> div > default-button" button on page
    Then I should see dropdown list "popup-window >>> .popupWindow" inside "button-with-popup >>> div"  by class "popupWindow--visible"
