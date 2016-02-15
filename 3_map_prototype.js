/**
 * Created by Pernille on 12-02-2016.
 */


Array.prototype.myUcase = function() {
    for (var i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
    return this;
};
var names = ["Lars", "Peter", "Bo", "Frederik", "Ib", "Sofus", "Anders", "Tue", "John"];
var result = names.myUcase();
console.log(result.toString());
