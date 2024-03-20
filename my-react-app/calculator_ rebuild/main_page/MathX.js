'use strict'

/**
 * @MathX - A Class constructor that contains all mathematical tools
 *
 * Return: False
 */

class MathX
{
    constructor (ab)
    {
        /**codes to be executed */
    }

    /**
     * @catch_err - throws error, if there is an error in
     * any of the program
     * 
     * @return: the parameter/value of the function
     */
    catch_err(value)
    {
        return value
    }

    /**
     * @absolute - This method returns the absolute value of a
     * number.
     * @arg: can not accept more than one parameter which is
     * @x
     * Return: @absolute number (x)
     */
    absolute(x)
    {
        let decide = 1;
    
        if (typeof x == "string" || x == null)
        {
            decide = 0;
        }

        if (decide)
        {
            if (x < 0)
            {
                return (-1 * x);
            }
            else
            {
                return x;
            }
        }
        else
        {
            return this.catch_err(NaN);
        }
    }

    /**
     * @minimum - A method that finds the minimum number.
     * @arg: can take two arguments only.
     * 
     * @return: the minimum number if requirements are met, else : throw error
     */
    minimum(x,y)
    {
        if ((typeof x == "string") || (typeof y == "string"))
        {
            return this.catch_err(NaN)
        }
        else
        {
            if (x == undefined && y == undefined)
            {
                return this.catch_err(null);
            }

            if (x == undefined || y == undefined)
            {
                return ('other arg')
            }

            return (x < y ? x : y);
        }
    }

    /**
     * @maximum - A method that finds the maximum number
     * @arg: can take two arguements only.
     * 
     * @return: the maximum number if requirements are met, else : throw error
     */
    maximum(x,y)
    {
        if ((typeof x == "string") || (typeof y == "string"))
        {
            return this.catch_err(NaN)
        }
        else
        {
            if (x == undefined && y == undefined)
            {
                return this.catch_err(null);
            }

            if (x == undefined || y == undefined)
            {
                return ('other arg')
            }

            return (x > y ? x : y);
        }
    }

    /**
     * @round - A method that rounds a decimal to the nearest
     * whole number.
     * @x : value (integer || float)
     * @returns : The rounded number (ans)
     */
    round(x)
    {
        if (typeof x == "string" || x == null)
        {
            return this.catch_err(NaN);
        }

        else
        {
            let num_string = x.toString()
            let i = 0;
            let j = 0;
            let ans = 0;
            
            while (i < num_string.length)
            {
                if (num_string[i] != ".")
                {
                    ans += Number(num_string[i]);
                    break;
                }
                i++;
            }

            while (j < num_string.length)
            {
                if ((num_string[j] == ".") && num_string[j + 1] >= 5)
                {
                    ans += 1;
                }
                j++;
            }

            return (ans)
        }
    }

    /**
     * @floor - A method that brings the whole integer
     * before the ".".
     * @x : value (integer || float)
     * @returns - The integer (ans)
     */
    floor(x)
    {
        if (x == "string" || x == null)
        {
            return this.catch_err(NaN);
        }

        else
        {
            let num_string = x.toString()
            let i = 0;
            let j = 0;
            let ans = 0;
            
            while (i < num_string.length)
            {
                if (num_string[i] != ".")
                {
                    ans += Number(num_string[i]);
                    break;
                }
                i++;
            }
            return (ans)
        }
    }

    /**
     * @power - A method that returns the exponent of an integer
     * @x : The base
     * @y : The power
     * @returns: the exponent of the number
     */
    power(x, y)
    {
        if ((typeof x == "string" || typeof y == "string"))
        {
            return (NaN);
        }

        if (x == undefined && y == undefined)
        {
            return -1;
        }

        if (x == undefined || y == undefined)
        {
            return -1;
        }

        return (x ** y);
    }

    /**
     * @reduce : adds all the elements in an array.
     *  
     * @returns: the sum of every number if @false 
     * returns -1.
     */
    reduce(array)
    {
        if (typeof array == "object")
        {
            let i = 0;
            let total = 0;
            
            while (i < array.length)
            {
                total += array[i];
                i++;
            }
            return (total);
        }
        else
        {
            return -1;
        }
    }

    /**
     * @multiply
     */
    multiply(array)
    {
        if (typeof array == "object")
        {
            let i = 0;
            let total = 1;
            
            while (i < array.length)
            {
                total *= array[i];
                i++;
            }
            return (total);
        }
        else
        {
            return -1;
        }
    }

    /**
     * @sort
     */
    sort(a, b)
    {
        if (a > b)
        {
            return 1;
        }
        else
        {
            return -1;
        }
    }

}

/**
 * using @X as an instance of @MathX
 * 
 */

export const mathX = new MathX();