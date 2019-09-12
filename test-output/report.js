$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/selenium/cucumberdemo/src/main/java/features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Freecrm contact features",
  "description": "",
  "id": "freecrm-contact-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Contact page functionality check",
  "description": "",
  "id": "freecrm-contact-features;contact-page-functionality-check",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "open browser and navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "i use valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "login to application successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "customer is in homepage of FreeCRM",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Customer click contacts option",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "customer navigate to contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "customer clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "customer enters firstname and lastname",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "verify contact is created successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "freecrm-contact-features;contact-page-functionality-check;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "freecrm-contact-features;contact-page-functionality-check;;1"
    },
    {
      "cells": [
        "practicedemo67@gmail.com",
        "Demo@678"
      ],
      "line": 16,
      "id": "freecrm-contact-features;contact-page-functionality-check;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Contact page functionality check",
  "description": "",
  "id": "freecrm-contact-features;contact-page-functionality-check;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "open browser and navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "i use valid \"practicedemo67@gmail.com\" and \"Demo@678\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "login to application successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "customer is in homepage of FreeCRM",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Customer click contacts option",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "customer navigate to contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "customer clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "customer enters firstname and lastname",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "verify contact is created successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.open_browser_and_navigate_to_login_page()"
});
formatter.result({
  "duration": 31263764089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "practicedemo67@gmail.com",
      "offset": 13
    },
    {
      "val": "Demo@678",
      "offset": 44
    }
  ],
  "location": "Login_Steps.i_use_valid_credential(String,String)"
});
formatter.result({
  "duration": 6063286646,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.login_to_application_successfully()"
});
formatter.result({
  "duration": 2006901440,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_is_in_homepage_of_FreeCRM()"
});
formatter.result({
  "duration": 76269636,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_click_contacts_option()"
});
formatter.result({
  "duration": 254393321,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_navigate_to_contact_page()"
});
formatter.result({
  "duration": 191347571,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_clicks_on_New_button()"
});
formatter.result({
  "duration": 6778542323,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_enters_firstname_and_lastname()"
});
formatter.result({
  "duration": 6921008669,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.verify_contact_is_created_successfully()"
});
formatter.result({
  "duration": 1358714886,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 1094194301,
  "status": "passed"
});
});