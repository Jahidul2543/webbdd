$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("docStringDemo.feature");
formatter.feature({
  "line": 3,
  "name": "Doc String Demo",
  "description": "",
  "id": "doc-string-demo",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DocString"
    }
  ]
});
formatter.before({
  "duration": 4930654338,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Doc String parsing",
  "description": "",
  "id": "doc-string-demo;doc-string-parsing",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "a blog post named \"Random\" with Markdown body",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 8,
    "value": "Hello"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "Random",
      "offset": 19
    }
  ],
  "location": "DocStringDemo.a_blog_post_named_with_Markdown_body(String,String)"
});
formatter.result({
  "duration": 76046000,
  "status": "passed"
});
formatter.after({
  "duration": 82507351,
  "status": "passed"
});
});