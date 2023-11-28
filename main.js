

//Task 1

function Word(word) {
    return "Salam " + word;
}

console.log(Word("anar"));


//Task 2



function EvenOrOdd(num) {
    if (num == 0) {
        return "Zero"
    }
    else if ( num % 2 == 0){
        return "Even"
    } 
    else {
        return "Odd"
    }
}


console.log(EvenOrOdd(0));


//Task 3


function Kub(a) {
 return a*a*a;  
}

console.log(Kub(3));


//Task 4

function farangeyt(a) {
    b= (a-32) / 1.8

    function bowling(b) {
        return 100-b
    }
    return b + " C" + " " + bowling(b);
}

console.log(farangeyt(100));

//Task 5

function reverse(a) {
b = a % 10;
c = (a-b) / 10;
// return b;
// return c;
return b + "" + c;    
}

console.log(reverse(84));


