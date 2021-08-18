// Im going to loop though the array and get how man neg numbers there are versus positive numbers
//   -- maybe something along the lines of var posNum = 0 var negNum = -1 and if array[i] is greater than or equal to
//      then increment var howManyPos or var howManyNegs
// After getting how ever many pos vs negs then would write something like var ratioPos = howManyPos / n (which is set to the value of 5)
//      var ratioNeg = howManyNegs / n
// Then I need to make sure that the result of the ratio is displayed with 6 decimal places??
//      for this... I will use google :)
// Side note, zero is nethier positive nor negative soooo.... gotta have a var for that to. 

var array = [1,1,-2,0,-3]
var n = array.length

const posNum = 1;
const zero = 0;
const negNum = -1;

var howManyPos = "";
var howManyZeros = "";
var howManyNegs = "";

var posRatio = int(howManyPos) / n;
var negRatio = int(howManyNegs) / n;
var zeroRatio = int(howManyZeros) / n;

function plusOrMinus() {

    for(i = 0; i <= array.length; i++){
        if (array[i] > zero )
            howManyPos + 1
        else if (array[i] < zero )
            howManyNegs + 1
        else(
            howManyZeros + 1
        )
    };

    console.log(posRatio.toFixed(6));
    console.log(negRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));

}

plusOrMinus()
