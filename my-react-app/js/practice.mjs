import { data } from "./data.mjs";
let user = "Aminat";

function rev_string(user)
{
    let i = 0;
    for (; i < user['length'];)
    {
        i++;
    }

    i = i - 1;
    let reversed_string = '';

    while (i >= 0)
    {
        reversed_string += user[i];
        i--;
    }
    return (reversed_string);
}

let result = rev_string(user);
console.log(result);

function _reduce(array = [])
{
    let sum = 0;
    let i = 0;

    while (i < array.length)
    {
        sum += array[i];
        i++;
    }

    return (sum);
}

let result2 = _reduce([1, 2, 3, 4, 5]);
console.log(result2);

function import_data()
{
    data.map(item => {
        let {name, age, profession} = item;
        return [name, age, profession];
    })
}

import_data();