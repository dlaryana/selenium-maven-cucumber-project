Feature: HomePage Feature Scenario

  Background: 
    Given I have the application launched
    And I insert the correct username and password
    And I click button to login

  @sanity
  Scenario: This scenario is to add product to cart
    When I click Add To cart on product "Sauce Labs Backpack"
    Then Basket item number should be 1
