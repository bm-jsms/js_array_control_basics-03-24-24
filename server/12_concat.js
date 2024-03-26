const arr1 = [1, 1, 2, 2];
const arr2 = [3, 3, 4, 4];

/* 
    const newArray = arr1;

    for (let i = 0; i < arr2.length; i++) {
        newArray.push(arr2[i]);
    }

    console.log(newArray);
*/

/* 
    const newArray = [...arr1, ...arr2];
    console.log(newArray);
*/

const newArray = arr1.concat(arr2);

console.log(newArray);
