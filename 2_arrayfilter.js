/**
 * Created by Pernille on 10-02-2016.
 */

function myFilter(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i]); //Call the provided callback
    }
}
var names = ["Lars", "Peter", "Bo", "Frederik", "Ib", "Sofus", "Anders", "Tue", "John"];
var name3 = [];
myFilter(names,function(name){
    if(name.length<=3)
        return name3.push(name);

});
console.log(name3.toString());