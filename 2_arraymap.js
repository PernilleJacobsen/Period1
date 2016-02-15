/**
 * Created by Pernille on 12-02-2016.
 */
function myMap(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i]); //Call the provided callback
    }
}
var names = ["Lars", "Peter", "Bo", "Frederik", "Ib", "Sofus", "Anders", "Tue", "John"];
var name3 = [];
myMap(names,function(name){

        return name3.push(name.toUpperCase());

});
console.log(name3.toString());
