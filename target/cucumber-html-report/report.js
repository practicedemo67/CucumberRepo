$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/selenium/cucumberdemo/src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Freecrm Login feature",
  "description": "",
  "id": "freecrm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "login page check with valid credentials",
  "description": "",
  "id": "freecrm-login-feature;login-page-check-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "open browser and navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "i use valid credential",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "login to aplication successfully.",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.open_browser_and_navigate_to_login_page()"
});
formatter.result({
  "duration": 20161348555,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.i_use_valid_credential()"
});
formatter.result({
  "duration": 718955444,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.login_to_aplication_successfully()"
});
formatter.result({
  "duration": 3750561636,
  "status": "passed"
});
});