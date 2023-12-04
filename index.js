function cubeNumber(number) {
    if (typeof number == "string") {
        return "Please enter a valid Number .."
    }
    else {

        let num = number * number * number;
        return num;
    }

}
cubeNumber(4);




function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "please input valid string... "

    }
    else if (string1.match(string2)) {
        return true;
    }
    else {
        return false;
    }
}

let string1 = "hello";
let string2 = 'llo';

matchFinder(string1, string2);







function sortMaker(arr) {
    if (arr[0] == arr[1]) {
        return 'equal';
    }
    else if (arr[0] >= 0 && arr[1] >= 0) {
       if(arr[0] < arr[1]){
         return arr.reverse();
       }
       else{
        return arr ; 
       }
    }
    else {
        return 'invalid input'
    }
}
sortMaker([2,4]);





function findAddress(obj) {
    let objarr = [];
    objarr.push(obj['street'] != undefined ? obj['street'] : '__')
    objarr.push(obj['house'] != undefined ? obj['house'] : '__')
    objarr.push(obj['society'] != undefined ? obj['society'] : '__')

    let print = objarr.join(',');
    return print;

}
let obj = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
}

findAddress(obj);





function canPay(changeArray, totalDue) {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        let element = changeArray[i];
        sum += element;

    }
    if (changeArray.length == 0) {
        return 'please enter a number !'
    }

    else if (sum >= totalDue) {
        return true;
    }
    else {
        return false;
    }


}

let arrTaka = [2, 4, 3, 1];
let ChipsPrice = 10;

canPay(arrTaka, ChipsPrice);
