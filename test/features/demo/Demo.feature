Feature: Jira login
    # @login
    Scenario Outline: Login sucessfully into jira with valid creaditials
        Given Jira login page is opened
        When  I enter the userfield with <Username>
        # Then Click on the first search result
        # Then URL should match the <ExpectedURL>

        Examples:
            | Test Id    | Username             | ExpectedURL |
            | DEMO_TC001 | kvinayag@visteon.com | Value 3     |