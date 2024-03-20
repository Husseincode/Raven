# sample.py
# A program that computes the factorial of a number, exponent, sphere
# strings are immutable, lists are not

class attributes:
    
    def __init__(self):
        pass
    
    def factorial(num):
        if num <= 0:
            return (1)
        else:
            return (num * attributes.factorial(num - 1))
        
    def exponent(base, power):
        if power <= 0:
            return (1)
        else:
            return (base * attributes.exponent(base, power - 1))
    
    def sphere(radius):
        pie = 3.142
        volume = (4 * pie * radius * radius * radius) / 3
        area = 4 * pie * radius * radius
        
        return [volume, area]
    
    def sum_series(length):
        array = []
        total = 0
        i = 0
        
        while i < length:
            array.append(int(input('Enter number: \n')))
            i += 1
        
        for j in array:
            total += j
            j += 1
        return (total)

print (('============= simple program =============').center(50))
print()

# username.py

# def main():
#     print("This program generates computer username. \n")
    
#     # get user's first name and last name 
#     fname = input('Please enter your first name: ')
#     lname = input('Please, enter your last name: ')
    
#     uname = fname[0].capitalize() + lname[:7].lower()
    
#     print('Your username is: ', uname)
    
# main()

# la = lambda x : x + 2
# print(la(3))

# ========================================
# text2numbers . py
# A program to convert a textual message into a sequence of
# numbers, utilizing the underlying Unicode encoding.

# def main():
#     print ( "This program converts a textual message into a sequence ")
#     print ("of numbers representing the Unicode encoding of the message . \n")
#     # Get the message to encode
#     message = input ( "Please enter the message to encode : ")
#     print ( " \nHere are the Unicode codes : ")
#     # Loop through the message and print out the Unicode values
#     for ch in message :
#         print (ord(ch) , end=" ")
#         print () # blank line before prompt
        
# main()

# def receiver():
#     message = input ( "Please enter the message to decode : ")
#     message = message.split()
    
#     for i in message:
#         print(chr(int(i)), end="")

# receiver()

text = 'Hello, i came here for an arguements and i know i will win'

def _count(text, letter):
    total = 0
    for i in text:
        if i == letter:
            total += 1
            continue
    return (total)

# def _date():
#     # get the date
#     dateStr = input('Enter a date (mm/dd/yyyy): ')
#     monthStr, dayStr, yearStr = dateStr.split('/')
    
#     # list of months
#     months = [
#         'January',
#         'Feburary',
#         'March',
#         'April',
#         'May',
#         'June',
#         'July',
#         'August',
#         'September',
#         'October',
#         'November',
#         'December'
#     ]
#     monthStr = months[int(monthStr) - 1]
    
#     return (f"The converted date is: {monthStr} {dayStr}, {yearStr}")

# print(_date())
# total = 1
# print ( "The total value of your change is $ {0:0.2f}" .format (total) )

# def main():
#     print ( "This program creates a file of usernames from a")
#     print ( " file of names . ")
#     # get the file names
#     infileName = input ( "What file are the names in? ")
#     outfileName = input ( "What file should the usernames go in? ")
#     # open the files
#     infile = open(infileName , "r")
#     outfile = open(outfileName , "w")
#     # process each line of the input file
#     for line in infile :
#         # get the first and last names from line
#         first , last = line.split()
#         # create the username
#         uname = (first[0] +last[:7] ).lower()
#         # write it to the output file
#         print (uname , file=outfile)
#     # close both files
#     infile.close()
#     outfile.close()
#     print ( "Usernames have been written to" , outfileName)
# main()

# element.py
# find an elemet in a list

def _element(array, elem):
    length = len(array)
    index = []
    
    for i in range(0, length, 1):
        if array[i] == elem:
            index.append(i)
    return index
        
_element([1, 3, 5, 12, 5, 3, 6], 1)

## calculating fibonacci series...
def fibonacci(n):
    fib_series = [0, 1]
    while len(fib_series) < n:
        fib_series.append(fib_series[-1] + fib_series[-2])
    return fib_series

# Example usage
print(fibonacci(10))  # prints the first 10 Fibonacci numbers