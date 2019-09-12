$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/selenium/cucumberdemo/src/main/java/features/deals.feature");
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
  "name": "Customer clicks on deal option",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "customer navigate to deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "customer clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "customer enters \"\u003cTitle\u003e\",\"\u003cdescription\u003e\" and \"\u003cprobability\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "customer clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "verify deal is created",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "freecrm-contact-features;contact-page-functionality-check;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Title",
        "description",
        "probability"
      ],
      "line": 16,
      "id": "freecrm-contact-features;contact-page-functionality-check;;1"
    },
    {
      "cells": [
        "practicedemo67@gmail.com",
        "Demo@678",
        "project1",
        "new project1 crated",
        "20"
      ],
      "line": 17,
      "id": "freecrm-contact-features;contact-page-functionality-check;;2"
    },
    {
      "cells": [
        "practicedemo67@gmail.com",
        "Demo@678",
        "project2",
        "new project2 crated",
        "30"
      ],
      "line": 18,
      "id": "freecrm-contact-features;contact-page-functionality-check;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
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
  "name": "Customer clicks on deal option",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "customer navigate to deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "customer clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "customer enters \"project1\",\"new project1 crated\" and \"20\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "customer clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "verify deal is created",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.open_browser_and_navigate_to_login_page()"
});
formatter.result({
  "duration": 27003714256,
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
  "duration": 1073068566,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.login_to_application_successfully()"
});
formatter.result({
  "duration": 1916487806,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_is_in_homepage_of_FreeCRM()"
});
formatter.result({
  "duration": 164638980,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_clicks_on_deal_option()"
});
formatter.result({
  "duration": 487709810,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_navigate_to_deal_page()"
});
formatter.result({
  "duration": 180029716,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_clicks_on_New_button()"
});
formatter.result({
  "duration": 1185025729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "project1",
      "offset": 17
    },
    {
      "val": "new project1 crated",
      "offset": 28
    },
    {
      "val": "20",
      "offset": 54
    }
  ],
  "location": "Login_Steps.customer_enters_and(String,String,String)"
});
formatter.result({
  "duration": 1314853220,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_clicks_on_save_button()"
});
formatter.result({
  "duration": 148009353,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.verify_deal_is_created()"
});
formatter.result({
  "duration": 1069933304,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 998727300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Contact page functionality check",
  "description": "",
  "id": "freecrm-contact-features;contact-page-functionality-check;;3",
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
  "name": "Customer clicks on deal option",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "customer navigate to deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "customer clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "customer enters \"project2\",\"new project2 crated\" and \"30\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "customer clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "verify deal is created",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.open_browser_and_navigate_to_login_page()"
});
formatter.result({
  "duration": 19297953718,
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
  "duration": 901338569,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.login_to_application_successfully()"
});
formatter.result({
  "duration": 2009472198,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_is_in_homepage_of_FreeCRM()"
});
formatter.result({
  "duration": 490221400,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_clicks_on_deal_option()"
});
formatter.result({
  "duration": 290880210,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_navigate_to_deal_page()"
});
formatter.result({
  "duration": 1298525466,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_clicks_on_New_button()"
});
formatter.result({
  "duration": 622246533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "project2",
      "offset": 17
    },
    {
      "val": "new project2 crated",
      "offset": 28
    },
    {
      "val": "30",
      "offset": 54
    }
  ],
  "location": "Login_Steps.customer_enters_and(String,String,String)"
});
formatter.result({
  "duration": 1428723659,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_clicks_on_save_button()"
});
formatter.result({
  "duration": 271326633,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.verify_deal_is_created()"
});
formatter.result({
  "duration": 1424510104,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 872225251,
  "status": "passed"
});
});