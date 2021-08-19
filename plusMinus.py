array = [0, 3, 8, -2, -5]

n = array.length

zero = 0

howManyPos = 0
howManyZeros = 0 
howManyNegs = 0

posRatio = int(howManyPos) / n
negRatio = int(howManyNegs) / n
zeroRatio = int(howManyZeros) / n

def plusOrMinus():
    for i in array: 
        if i > zero:
            howManyPos + 1
            continue
        elif i < zero: 
            howManyNegs + 1
            continue
        elif i == zero:
            howManyZeros + 1
            continue
        else:
            break

plusOrMinus()