const animals = ['cat', 'dog', 'catrrot'];

function filterPets(arr, type) {
	const result = arr.filter((a) => a.includes(type));

	return result;
}

console.log(filterPets(animals, 'cat'));
