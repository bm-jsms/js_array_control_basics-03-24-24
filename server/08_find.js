const numbers = [2, 4, 8, 6, 5];

function findN(arr, n) {
	return arr.find((i) => i === n);
}

console.log(findN(numbers, 5));
