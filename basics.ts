function add(n1: number, n2: number, showResult: boolean) {
    if (showResult){
        console.log(n1 + n2);
        return("Hello Word!");
    } else {
        return n1 + n2;
    }
}

const number1 = 5;
const number2 = 2.5;
let printResult = true;

const result = add(number1, number2, printResult);

console.log(result);

/*const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; //tuple
}
const person = {
    name: "Dana",
    age: 105,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};*/

enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: "Dana",
    age: 105,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
}