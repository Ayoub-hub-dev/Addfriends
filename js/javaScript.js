
var myFriends = [],
    myDiv   = document.getElementById('One');

function myFun() {
    "use strict";

    var myNew = document.getElementById('inp').value;
    myFriends.push(myNew);
    
    var myName = myFriends.join(" & ");
    document.getElementById('One').innerHTML= myName;
    console.log(myFriends);
}    

function mySort() {
    var my_sort = myFriends.sort(),
        myNsort = my_sort.join(" & ");
    document.getElementById('One').innerHTML= myNsort;
}