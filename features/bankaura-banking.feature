Feature: BankAura demo login and Banking tab

  Background:
    Given I open the BankAura landing page
    And I sign in with the demo account

  Scenario: Demo account login lands on the dashboard overview TC-1311
    Then I should see the dashboard welcome message for the demo account
    And the sidebar shows the Banking navigation item

  Scenario: Banking tab shows the account overview TC-1312
    When I open the Banking tab
    Then the Banking page heading and subtitle are shown
    And the Accounts section lists the account balance and transactions
    And all six banking sub-tabs are available

  Scenario: Sidebar navigation opens the Banking page via an incorrect locator TC-1333
    When I click the Banking item in the sidebar using an incorrect locator
    Then the Banking page heading and subtitle are shown
