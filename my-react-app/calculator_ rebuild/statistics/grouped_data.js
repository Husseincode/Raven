'use strict'
import {mathX} from "../main_page/MathX.js"

addEventListener("DOMContentLoaded", ()=>{

    function create_intervals(get_length)
    {
        /**intervals */
        let input_value = document.querySelector(".input_values");
        let encapsule = document.createElement("div");

        let lower_b = document.createElement("input");
        lower_b.setAttribute("type", "number");
        lower_b.setAttribute("title", "Lower class boundary")
        lower_b.setAttribute("placeholder", "Lcb")
        let upper_b = document.createElement("input");
        upper_b.setAttribute("type", "number");
        upper_b.setAttribute("title", "Upper class boundary")
        upper_b.setAttribute("placeholder", "Ucb")

        lower_b.setAttribute("class", "inputs_lower_upper lower_class_boundary");
        upper_b.setAttribute("class", "inputs_lower_upper upper_class_boundary");
        upper_b.style.marginLeft = "10px";
        encapsule.appendChild(lower_b);
        encapsule.appendChild(upper_b);

        /**frequencies */
        let freq_value = document.querySelector(".freq_values");
        let input_freq = document.createElement("input");
        input_freq.setAttribute("type", "number");
        input_freq.setAttribute("class", "freq_inputs frequency");
        input_freq.setAttribute("placeholder", "frequency")

        /**appending frequencies */
        freq_value.appendChild(input_freq);
        /**appending intervals */
        input_value.appendChild(encapsule);
        console.warn(get_length)
    }

    /**
     * @len - get length of the intervals from user
     *  @returns: if @get_length > 0...then call the function 
     * @create_intervals
     */
    let len = document.querySelector(".length");
    len.addEventListener("click", ()=>{
        let get_length = window.prompt("What is the length?");
        get_length = Number(get_length);
        sub.disabled = false;
        
        if (get_length > 0)
        {
            for (var i = 0; i < get_length; i++)
            {
                create_intervals(get_length);
                len.disabled = true;
            }
        }
        else
        {
            sub.disabled = true;
            return false;
        }
    });

    /**
     * @mean_attr - get the mean, total no and total
     * frequency of the inputted data by the user
     * @data : array
     * @frequency : array
     * 
     * @returns: the mean value
     */
    function mean_attr(data = [], frequency = [])
    {
        let mid_points = [];
        let mid_freq = []; /**A miltidimensional array of both midpoints and frequency */;
        let total = 0; /**Addition of all the elements in @multiplied to get summation fx */
        let multiplied = []; /**frequency and mid points multiplied */
        let total_freq = 0; /**Total frequency */

        for (let i = 0; i < data.length; i++)
        {
            let sum = mathX.reduce(data[i]) / 2;
            mid_points.push(sum)
        }

        for (let j = 0; j < mid_points.length && j < frequency.length; j++)
        {
            mid_freq.push([mid_points[j], frequency[j]])
        }

        for (let k = 0; k < mid_freq.length; k++)
        {
            multiplied.push(mathX.multiply(mid_freq[k]))
        }

        let l = 0;
        while (l < multiplied.length)
        {
            total += multiplied[l];
            l++;
        }

        let m = 0;
        while (m < frequency.length)
        {
            total_freq += frequency[m]
            m++
        }

        let mean_xbar = total / total_freq;
        return [mean_xbar, total, total_freq]
    }

    /**
     * @mode - gets the mode
     * 
     * @returns: the mode of the number
     */
    function mode_attr(data = [], occurence = [])
    {
        let lower_b, freq_bf_mod, freq_aft_mod, freq_of_mod, class_size;
        let boundaries; /**will be set to hold an array of lcb and ucb */
        let merge = new Map();
        let high_number = Math.max(...occurence);
        let new_array = [];
        let zero_array = [0, [0, 0]];
        let mode;
        
        for (let i = 0; i < data.length && i < occurence.length; i++)
        {
            merge.set(occurence[i], data[i])
        }

        for (const [x, y] of merge.entries())
        {
            new_array.push([x, y])
        }

        for (let j = 0; j < new_array.length; j++)
        {
            for (let k = 0; k < new_array[j].length; k++)
            {
                if (new_array[j][k] == high_number)
                {
                    boundaries = new_array[j][1];
                    freq_of_mod = new_array[j][k];

                    if (new_array[j + 1] == undefined)
                    {
                        freq_aft_mod = zero_array[0];
                    }

                    else
                    {
                        freq_aft_mod = new_array[j + 1][0];
                    }

                    if (new_array[j - 1] == undefined)
                    {
                        freq_bf_mod= zero_array[0];
                    }

                    else
                    {
                        freq_bf_mod = new_array[j - 1][0];
                    }
                }
            }
        }
        lower_b = boundaries[0] - 0.5;
        class_size = [(boundaries[1] + 0.5) - (boundaries[0] - 0.5)];
        mode = lower_b + ((freq_of_mod - freq_bf_mod) / ((freq_of_mod - freq_bf_mod) + (freq_of_mod - freq_aft_mod))) * class_size;

        return [mode, lower_b, class_size, freq_of_mod, freq_bf_mod, freq_aft_mod];
    }

    /**
     * @median
     */
    function median_attr(data = [], occurence = [])
    {
        let lower_b, class_size, Cf_bfMedian, position, freqOfMedian, boundaries;
        let new_array = [];
        let cumulative_frequency = [];
        let a = 0;
        let total_freq = 0;

        while (a < occurence.length)
        {
            total_freq += occurence[a];
            cumulative_frequency [a] = total_freq;
            a++;
        }

        position = (total_freq / 2);

        for (let i = 0; i < data.length && i < occurence.length && i < cumulative_frequency.length; i++)
        {
            new_array.push([[occurence[i], data[i]], cumulative_frequency[i]])
        }

        for (let j = 0; j < new_array.length; j++)
        {
            for (let k = 0; k < new_array[j].length; k++)
            {
                if (new_array[j][k] >= position && new_array[j + 1][k] <= position)
                {
                    console.error(new_array[j][k])
                    console.error(new_array[j + 1][k])
                }
            }
        }
        console.warn(position);
        console.warn(cumulative_frequency);
        console.warn(new_array)
    }

    /**
     * @submit - On submission of the data by the user, it should return
     * the necessary output.
     */

    /**Local storage API, arrays and sets to store necessary and modify data */
    var data = [];
    var occurence = [];

    let sub = document.querySelector(".submit");
    sub.addEventListener("click", ()=>{
        let lower_cb = document.querySelectorAll(".lower_class_boundary");
        let upper_cb = document.querySelectorAll(".upper_class_boundary");
        let frequency = document.querySelectorAll(".frequency");

        /**accessing all necessary class and IDs to give user's result */
        let mean = document.querySelector(".mean");
        let mode = document.querySelector(".mode");

        for (let a = 0; a < lower_cb.length && a < upper_cb.length; a++)
        {
            data.push([Number(lower_cb[a].value), Number(upper_cb[a].value)]);
        }

        for (let b = 0; b < frequency.length; b++)
        {
            occurence.push(Number(frequency[b].value));
        }
        sub.disabled = true;

        let get_mean_attr = mean_attr(data, occurence);
        let get_mode_attr = mode_attr(data, occurence);
        let get_median_attr = median_attr(data, occurence);
        mean.innerHTML = get_mean_attr[0].toFixed(2)
        mode.innerHTML = get_mode_attr[0].toFixed(2)
    })

    /**
     * @save - save the data
     * 
     * @returns: true
     */
    let save = document.querySelector(".save");
    save.addEventListener("click", ()=>{
        let file_name = window.prompt("save as?");
        let merge = new Map();
        let new_array = [];

        for (let i = 0; i < data.length && i < occurence.length; i++)
        {
            merge.set(occurence[i], data[i])
        }

        for (const [x, y] of merge.entries())
        {
            new_array.push([x, y])
        }
        let dt = localStorage.setItem(file_name, JSON.stringify(new_array))
        console.warn(localStorage.getItem(file_name));
        console.log(dt)
        len.disabled = true;
        sub.disabled = true;
        save.disabled = true;
        erase.disabled = false;
    })

    let idea = document.querySelector(".idea");
    idea.addEventListener("click", ()=>{
        let file_name = window.prompt("file name?");
        console.log(localStorage.getItem(file_name))
    })

    /**
     * @erase - restore everything back to default once
     * clicked on.
     * 
     * @returns: if promise is settled, value will be cleared
     */
    function ersae_data()
    {
        window.location.reload()
    }
    let erase = document.querySelector(".erase")
    erase.addEventListener("click", ()=>{
        let decide = new Promise((resolve, reject)=>{
            let question = window.confirm("Are you sure you want to rese1t?");
            question == true ? resolve(question) : reject(question);
        })
        decide.then(result => {ersae_data();}).catch(result => {let dispose = result})
    })
})