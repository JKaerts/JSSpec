describe('A variable', function() {
	it('is declared with var and assigned with =', function() {
		var myVariable;
		myVariable = 5;
		var newVariable = 7
		assert(myVariable == 5);
		assert(newVariable == 7);
	});
	
	it('defaults to undefined', function() {
		var myVariable;
		assert(myVariable === undefined);
	});
	
	it ('is case sensitive', function() {
		assert_raises(function() {
			var myVar = 7;
			MYVAR += 3;
		});
		
	});
});
