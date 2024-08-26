Feature: Jira Login 
    As a Developer
    I want to test login for Jira site

    @login
    Scenario Outline: Successful Jira login with valid credentials
        Given Jira Site is opened
        When I enter the inputfield of Jira site <Username> 
        And I enter the inputfield of SSO site <Username> 
        Then ULR should match <ExpectedURL>

        Examples:
            | TestID     | Username             | ExpectedURL           |
            | DEMO_TC001 | kvinayag@visteon.com | https://visteon-dev.atlassian.net/jira/your-work |
