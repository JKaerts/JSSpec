/*
 * The spec runner is divided into two parts: the DSL and the assertions.
 */

var ran = 0;
var pending = 0;

function describe(name, callable) {
	console.log(name);
	callable();
}

function it(name, callable) {
	console.log("  - " + name);
	callable();
	ran += 1
}

function xit(name, callable) {
	console.log("  (PENDING) " + name);
	pending += 1;
}

function before(callable) {
	callable();
}

function assert_raises(callable) {
	var ok = true;
	try {
		callable();
	} catch (error) {
		ok = false;
	}
	console.assert(ok === false);
}

function summary() {
	console.log();
	console.log('Ran ' + ran + ' specs (' + pending + ' pending)');
}

/*
 * Utility functions to improve readability of assertions.
 */

function arraysAreEqual(arr1, arr2) {
	return arr1.length === arr2.length && arr1.every(function(u, i) {
		return u === arr2[i];
	})
}

function assertTrue(condition) {
	assert(condition);
}

function assertFalse(condition) {
	assertTrue(!condition);
}

function assertEquals(expected, given) {
	assert(expected === given);
}

function assertEqualArrays(expected, given) {
	assert(arraysAreEqual(expected, given));
}