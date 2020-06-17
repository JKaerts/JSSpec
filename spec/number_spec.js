describe('A number', () => {
	it('supports the four basic operations', () => {
		assertEquals(15, 5 + 10);
		assertEquals(12, 45 - 33);
		assertEquals(50, 5 * 10);
		assertEquals(8, 16/2);
		
		assertEquals(5.0, 2.0 * 2.5);
		assertEquals(2.2, 4.4 / 2.0);
	});
	
	it('can be quickly incremented or decremented', () => {
		var myVar = 5;
		myVar++;
		assertEquals(6, myVar);
		myVar--;
		assertEquals(5, myVar);
	});
	
	it('has a remainder when divided by another number', () => {
		assertEquals(1, 7 % 3);
		assertEquals(0.5, 5 % 1.5)
	})
	
	it('has compound operators for assignment', () => {
		var myVar = 5;
		
		myVar += 2;
		assertEquals(7, myVar);
		
		myVar -= 3;
		assertEquals(4, myVar);
		
		myVar *= 3;
		assertEquals(12, myVar);
		
		myVar /= 2;
		assertEquals(6, myVar);
	});
});
