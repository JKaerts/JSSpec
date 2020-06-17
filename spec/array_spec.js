describe('An array', () => {
	it('is declared, accessed and modified with square brackets', () => {
		var myArray = ['peanut butter', 'jelly', 'bread'];
		assertEquals('jelly', myArray[1]);
		
		myArray[1] = "cheese";
		assertEqualArrays(['peanut butter', 'cheese', 'bread'], myArray);
	});
	
	it('can be multidimensional', () => {
		var myArray = [["Bulls", 23], ["White Sox", 45]];
		assertTrue(Array.isArray(myArray[0]));
		assertTrue(Array.isArray(myArray[1]));
		assertEquals(23, myArray[0][1]);
	});
	
	it('has stack methods that modify the array', () => {
		var myArray = [1, 2, 3];
		myArray.push(4);
		
		assertEquals(4, myArray[myArray.length - 1]);
		
		var lastElement = myArray.pop();
		assertEquals(4, lastElement);
	});
	
	it('interestingly returns its new length after a push()', () => {
		assertEquals(4, [1, 2, 3].push('a'));
	})
	
	it('also has additional methods making it a deque', () => {
		var myArray = [1, 2, 3];
		myArray.unshift(4);
		
		assertEquals(4, myArray[0]);
		
		var lastElement = myArray.shift();
		assertEquals(4, lastElement);
	});
	
	it('interestingly returns its new length after an unshift()', () => {
		assertEquals(4, [1, 2, 3].unshift('a'));
	})
	
	it('can slice from a given index onwards', () => {
		assertEqualArrays([40, 50], [10, 20, 30, 40, 50].slice(3));
	});
	
	it('can also slice up to a given index (not inclusive)', () => {
		assertEqualArrays([20], [10, 20, 30, 40, 50].slice(1, 2));
	})
	
	it('can slice beyond the end of the array', () => {
		assertEqualArrays([10, 20], [10, 20].slice(0, 3));
	});
	
	
	it('can be concatenated to a second array', () => {
		var arr1 = [1, 2, 3];
		var arr2 = [4, 5, 6];
		assertEqualArrays([1, 2, 3, 4, 5, 6], arr1.concat(arr2));
	});
	
	it('can be concatenated to multiple arrays', () => {
		assertEqualArrays([1, 2, 3, 4, 5, 6], [1, 2].concat([3, 4], [5, 6]));
	});
	
	it('sadly can also be concatenated with a single element', () => {
		assertEqualArrays([1, 2, 3], [1, 2].concat(3));
	});
	
	it('makes a copy when calling concat()', () => {
		var myArray = [1, 2];
		var newArray = myArray.concat([3, 4]);
		
		assertEqualArrays([1, 2], myArray);
	});
	
	it('can test membership', () => {
		var myArray = [1, 2];
		assertTrue(myArray.includes(1));
	});
	
	it('can be filled with a set value', () => {
		var myArray = [1, 2];
		assertEqualArrays(['d', 'd'], myArray.fill('d'));
		
		// Extra example: fill dynamically
		function fillDynamically(value, length) {
			return new Array(length).fill(value);
		}
		assertEqualArrays([5, 5, 5, 5], fillDynamically(5, 4));
	});
	
	it('can loop a function over its elements', () => {
		var arr = [1, 2, 3];
		var sum = 0;
		
		arr.forEach((item) => {
			sum += item;
		});
		
		assertEquals(6, sum);
	});
});