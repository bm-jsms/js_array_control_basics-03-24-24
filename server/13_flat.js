const matriz = [
	[1, 2, 3],
	[4, 5, 6, [1, 2, [1, 2]]],
	[7, 8, 9],
];

/* 
    const newArray = [];

    for (let i = 0; i < matriz.length; i++) {
        const array = matriz[i];
        for (let j = 0; j < array.length; j++) {
            newArray.push(array[j]);
        }
    }
    console.log(newArray);
*/

const newArray = matriz.flat(3);

console.log(newArray);
