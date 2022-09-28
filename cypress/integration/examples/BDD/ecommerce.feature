Feature: End to End Ecommerce validation


    application regression
    Scenario: Ecommerce product delivery
    Given I open Ecommerce page
    When I add items to cart
    And Validate the total prices 
    Then select country submit and verift thankyou