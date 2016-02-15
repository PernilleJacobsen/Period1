/**
 * Created by Pernille on 12-02-2016.
 */


var tempArray = [];
Array.prototype.myUcase = function() {
    for (var i = 0; i < this.length; i++) {
        if(this[i].length <=3)
        tempArray.push(this[i]);

    }
    return tempArray;
};
var names = ["Lars", "Peter", "Bo", "Frederik", "Ib", "Sofus", "Anders", "Tue", "John"];
var result = names.myUcase();
console.log(result.toString());

/*
var names = ["Lars", "Peter", "Bo", "Frederik", "Ib", "Sofus", "Anders", "Tue", "John"];
function myForEach(callback){
    for(var i = 0; i<this.length; i++){
        callback(this[i]);
    }
}
Array.prototype.myForEach = myForEach;

myForEach(names, function(name){
    console.log(name);
    });
    */
