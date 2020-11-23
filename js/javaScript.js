
var myFriends = [],
    myDiv   = document.getElementById('One');

function myFun() {
    "use strict";

    var myNew = document.getElementById('inp').value;
    myFriends.push(myNew).join(" & ")
    document.getElementById('One').innerHTML= myNew;
    console.log(myFriends);
}    

function mySort() {
    var my_sort = myFriends.sort().join(" & ");
    document.getElementById('One').innerHTML= my_sort;
}

function mtSearch() {
    var myNewF   = document.getElementById('inp').value,
        mySear = myFriends.indexOf(myNewF);
    if (mySear != -1) {
        document.getElementById('Two').innerHTML = "Your name already exists" +
        "You will receive a message in a few moments";
    }else{
        document.getElementById('Two').innerHTML = "Sorry we can't found it";
    }
}

// var myFriend = [
//     "Lahousine", "Ayoub", "Omar", 
//     "Hassan", "Rachid", "Akram", "Ahmed",
//     "Zahra", "Mohamed", "Hind"    
// ];

// console.log(myFriend);

// var myNewFriend = [
//     "Hana", "Khadija", "Fatima",
//     "Rokai", "oma"
// ];
// console.log(myNewFriend);


// var myNewOtherFriend = [
//     "Somia", "Fatiha", "Hasna",
//     "Malika", "Aicha", "Janine"
// ];
// console.log(myNewOtherFriend);

// var newArray = myFriend.concat(myNewFriend, myNewOtherFriend);
// console.log(newArray);

