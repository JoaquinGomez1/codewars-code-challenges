def solution(romanNumber):
    romanNumbers = {"I":1, "V":5, "X": 10, "L":50, "C": 100, "D":500, "M":1000}
    previousNumber = None
    total = 0
    for number in romanNumber:
        thisNumber = romanNumbers[number]

        if previousNumber != None and previousNumber < thisNumber:
             total = (thisNumber - previousNumber)
        elif previousNumber != None: 
                total += thisNumber + previousNumber
                previousNumber = thisNumber
        else: 
            total = thisNumber
            previousNumber = thisNumber
    
    return total


print(solution("X"));
print(solution("IX"));
print(solution("IV"));
print(solution("MMMCDLVIII"));