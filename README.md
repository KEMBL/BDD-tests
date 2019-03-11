### It is a CLONE of Protractor-Cucumber-TypeScript project

This project was made in education purposes

More about source project: https://github.com/igniteram/protractor-cucumber-typescript

### BDD playground tests Setup Guide   

### To Get Started

#### Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

2.Chrome or Firefox browsers installed.

3.Text Editor(Optional) installed-->Sublime/Visual Studio Code/Brackets.

4. Install Java https://www.java.com/en/download/

#### Setup Scripts
* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt
```
npm install 
```
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

#### Run Scripts

* First step is to fire up the selenium server which could be done in many ways,  **webdriver-manager** proves very handy for this.The below command should download the **chrome & gecko driver** binaries locally for you!

```
npm run webdriver-update
``` 

* Then you should start your selenium server!
```
npm run webdriver-start
```

* The below command would create an output folder named 'typeScript' and transpile the .ts files to .js.
```
npm run build
```

* Now just run the test command which launches the Chrome Browser and runs the scripts.
```
npm test
```

#### Features

This feature is written for site http://kembl.ru/stencil/

Features reside in /features

Step definitions reside in /stepdefinitions

```
Feature: Git .ignore button prototype on site

I want that button opens dropdown list
@StencilJSScenario
Scenario: Click on button after site opens
	Given I am on playground page
	When I am searching for Git .ignore button on page
	Then I click Git .ignore button on page
	Then I should see dropdown list
```

## License
```   
MIT License

Copyright: Copied and changed according to Mit License, previous Copyright (c) 2019 Ram Pasala
```

