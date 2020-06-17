describe('A string', function() {
	it('can be declared with single or double quotes', function() {
		var stra = 'hello, world';
		var strb = "hello, world";
		assertEquals(stra, strb);
	});
	
	it('allows escape codes', function() {
		var str = 'FirstLine\n\t\\SecondLine\nThirdLine';
		assert(true);
	});
	
	it('uses + for concatenation', function() {
		var stra = 'a';
		var strb = 'b'
		assertEquals('ab', stra + strb);
	});
	
	it('also uses += for concatenation', function() {
		var stra = 'a';
		stra += 'b';
		assertEquals('ab', stra);
	});
	
	it('has a length attribute', function() {
		var myString = 'hello, world';
		assertEquals(12, myString.length);
	});
	
	it('behaves like a 0-based array of characters', function() {
		var name = 'Charles';
		assertEquals('C', name[0]);
	});
	
	it('cannot be modified using bracket notation', function() {
		var name = 'Bob';
		name[0] = 'J';
		assertEquals("Bob", name);
	});
});
