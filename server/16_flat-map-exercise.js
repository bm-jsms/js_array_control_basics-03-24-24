const array = [
	'Beautiful is better than ugly',
	'Explicit is better than implicit',
	'Simple is better than complex',
	'Complex is better than complicated',
];

function countWords(array) {
	/* let final = array.flatMap((i) => i.split(' ')); */
	// let final = array.flatMap((i) => i);
	// let final = array.map((i) => i.split(' '));

	let final = array.flatMap((i) => i.split(' '));
	return final.length;
}

console.log(countWords(array));
