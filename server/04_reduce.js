let arr = [1, 2, 3, 4, 5, 6, 7];

/* let res = 0;

for (let i = 0; i < arr.length; i++) {
	res += arr[i];
}

console.log(res); */

const rta = arr.reduce((sum, i) => {
	return (sum += i);
}, 0);

console.log(rta);
