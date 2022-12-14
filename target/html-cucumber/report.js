$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/HomePage.feature");
formatter.feature({
  "name": "HomePage Feature Scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have the application launched",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.HomePageStepDef.i_have_the_application_launched()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I insert the correct username and password",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.HomePageStepDef.i_insert_the_correct_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click button to login",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.HomePageStepDef.i_click_button_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is to add product to cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I click Add To cart on product \"Sauce Labs Backpack\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.HomePageStepDef.i_click_Add_To_cart_on_product(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Basket item number should be 1",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.HomePageStepDef.basket_item_number_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Feature Scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is to define the login happy path",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the correct username and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.LoginStepDef.i_enter_the_correct_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.LoginStepDef.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.LoginStepDef.i_should_land_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is to define the failure path",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I enter the incorrect username and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.LoginStepDef.i_enter_the_incorrect_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on button to login",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.LoginStepDef.i_click_on_button_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.LoginStepDef.i_should_get_the_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});