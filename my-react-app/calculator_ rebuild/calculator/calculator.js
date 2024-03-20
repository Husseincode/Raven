'use strict'

/**
 * This program is meant for accessing 
 * each and every buttons in its html document
 * and perform necessary functions
 */
let user_typing = document.querySelector(".user_typing");
let result = document.querySelector(".output");
let get_all_buttons = document.querySelectorAll("button");

get_all_buttons.forEach((x)=>{
    x.addEventListener(("click"), ()=>{

        if (x.value == "=")
        {
            let perform_task = eval(user_typing.innerHTML);
            result.innerHTML = perform_task;
        }

        else if (x.value == "clear")
        {
            user_typing.innerHTML = "";
            result.innerHTML = 0;
        }

        else
        {
            user_typing.innerHTML += x.value
        }
    })
});

function homepage()
{
    let url = '../main_page/main_page.html';
    window.location.assign(url);
}

let go_home_page = document.querySelectorAll(".homepage");
go_home_page.forEach(x => {
    x.addEventListener("click", homepage);
});