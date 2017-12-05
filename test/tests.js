// test if jQuery is available
QUnit.test("jQuery test if exists", function(assert) {
  assert.ok(jQuery, "jQuery window object exists");
  assert.ok($, "jQuery's dollar object exists");
  assert.ok($.fn, "jQuery's dollar fn function exists");
});

// test if $.fn.timeline is available
QUnit.test("$.fn.timeline jquery function test if exists", function(assert) {
  assert.ok($.fn.timeline, "$.fn.timeline exists");
});

// test if new Date methods exist and work as expected
QUnit.test("Date methods test", function(assert) {
  var d = new Date();

  assert.ok(d.formatString, "Date::formatString method exists");

  // TODO: check if 'formatString' works as expected

  assert.ok(d.toDateInputValue, "Date::toDateInputValue method exists");

  // TODO: check if 'toDateInputValue' works as expected

  assert.ok(d.convertToUTC, "Date::convertToUTC method exists");

  // TODO: check if 'convertToUTC' works as expected
});


// test if new Array method exists and works as expected
QUnit.test("Array methods test", function(assert) {
  var a = [];

  assert.ok(a.contains, "Array::contains method exists");

  a = new Array();

  assert.ok(a.contains, "Array::contains method exists");

  // TODO: check if 'contains' works as expected
});

QUnit.todo("$.fn.timeline test", function(assert) {
});
