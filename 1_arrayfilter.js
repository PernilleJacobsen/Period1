/**
 * Created by Pernille on 08-02-2016.
 */
var names = ["Lars", "Peter", "Bo", "Frederik","Ib", "Sofus", "Anders", "Tue", "John"];

var result = names.filter(function (name) {
    return (name.length <= 3);
});

console.log(result.toString());





