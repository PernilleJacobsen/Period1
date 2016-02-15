/**
 * Created by Pernille on 14-02-2016.
 */
//variable hoisting
// Outputs: undefined fordi den ikke er erklæret som var...
console.log(declaredLater);

var declaredLater = "Now it's defined!";

// Outputs: "Now it's defined!"
console.log(declaredLater);
// JavaScript treats variables which will be declared later on in a function
// differently than variables that are not declared at all. Basically, the JavaScript
// interpreter "looks ahead" to find all the variable declarations and "hoists" them to
// the top of the function.

//function hoisting...Unlike variables, a function declaration doesn't just
// hoist the function's name. It also hoists the actual function definition.
// Outputs: "Yes!"
isItHoisted();

function isItHoisted() {
    console.log("Yes!");
}
//As you can see, the JavaScript interpreter allows you to use the function
// before the point at which it was declared in the source code. This is useful
// because it allows you to express your high-level logic at the beginning of your
// source code rather than the end, communicating your intentions more clearly.
//OBS function hoisting gælder kun declarations af funktioner ikke expressions