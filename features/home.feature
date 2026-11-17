Feature: LabInsights home page

  Scenario: Navigate to the LabInsights stage site
    Given I navigate to the LabInsights home page
    When I accept the cookies and close the popup

  Scenario: Visual snapshots of the LabInsights home page
    Given I navigate to the LabInsights home page
    When I accept the cookies and close the popup
    Then I should see the Subscribe Newsletter button
    And I capture a visual snapshot named "Home page - after cookies and popup dismissed"

  Scenario: Subscribe newsletter button is present on the landing page
    Given I navigate to the LabInsights home page
    Then I should see the Subscribe Newsletter button
