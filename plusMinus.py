array = [0, 3, 8, -2, -5]

n = array.length

zero = 0

howManyPos = 
howManyZeros = 
howManyNegs = 

posRatio = int(howManyPos) / n
negRatio = int(howManyNegs) / n
zeroRatio = int(howManyZeros) / n

plusOrMinus() {

    for(i = 0; i <= array.length; i+1){
        if (array[i] > zero )
            howManyPos + 1
        else if (array[i] < zero )
            howManyNegs + 1
        else(
            howManyZeros + 1
        )
    }

    
    

}

plusOrMinus()