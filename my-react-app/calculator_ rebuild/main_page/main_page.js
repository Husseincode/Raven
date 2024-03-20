'use strict'

/**
 * @dynamic_words - lines of codes that changes the 
 * word in the landing page.
 */
const words = ['easier.', 'simple.', 'faster.', 'durable.'];
let wordIndex = 0;
let letterIndex = 0;
const wordContainer = document.getElementById("words");

function typeLetter()
{
    const current_word = words[wordIndex];
    wordContainer.textContent = current_word.substring(0, letterIndex);
    letterIndex += 1;

    if (letterIndex <= current_word.length)
    {
        setTimeout(typeLetter, 100);
    }
    else
    {
        setTimeout(clearWord, 1500);
    }
}

function clearWord()
{
    letterIndex = 0;
    setTimeout(updateWord, 500);
}

function updateWord()
{
    wordIndex = (wordIndex + 1) % words.length;
    typeLetter();
}

updateWord();

/**
 * @dynamic_images - lines of codes that changes the image
 * in the landing page every 3 seconds
 * 
 */
let images_array = 
[
    "../web_images/College-Student-Download-PNG-Image.png",
    "../web_images/Female-College-Student-PNG-Photo.png"
]

let image_index = 0;

function change_image()
{
    let image = images_array[image_index];
    image_index = (image_index + 1) % images_array.length;
    let image_displayer = document.getElementById("image_disp");
    image_displayer.style.background = `url("${image}")`;
    image_displayer.style.backgroundSize = "cover";
}

setInterval(change_image, 5000);
/**
 * Go to homepage
 * 
 */
function homepage()
{
    window.location.assign("./main_page.html")
}

let home_page = document.querySelectorAll(".homepage")
home_page.forEach((x)=>{
    x.addEventListener("click", homepage)
    x.setAttribute("title", "Homepage")
})

/**
 * Navigate to twitter
 */
function twitter()
{
    let twitter_URL = "https://www.twitter.com/Abayomi_hussein";

    window.open(twitter_URL, "_blank")
}

let twitter_follow = document.querySelectorAll(".follow_me");
twitter_follow.forEach((x)=>{
    x.addEventListener("click", twitter);
    x.setAttribute("title", "Twitter");
})

/**
 * creating cards
 */

let all_cards = document.querySelector(".all_cards");

/**
 * we will mostly due with importing
 * on this one.
 */
function creating_card(card_heading, card_image, text, src_link, genre)
{

    let container = document.createElement("div");
    let container_head = document.createElement("div");
    let container_image = document.createElement("div");
    let container_body = document.createElement("div");
    let container_footer = document.createElement("div");
    let brand = document.createElement("span");
    let footer_button = document.createElement("a");

    container.append(container_head);
    container.append(container_image);
    container.append(container_body);
    container.append(container_footer);

    container.setAttribute("class", `card each_card_style ${genre}`);
    container.setAttribute("id", "card_heading")
    container_head.setAttribute("class", "card-header");
    container_head.innerHTML = `${card_heading}`
    container_image.setAttribute("class", "card-img-top container_image");
    container_image.style.background = `url('${card_image}')`
    container_body.setAttribute("class", "card-body");
    container_body.innerHTML = `${text}`;
    container_body.style.fontSize = '13px'
    container_footer.setAttribute("class", "card-footer");
    footer_button.setAttribute("class", `btn btn-primary btn-sm check-btn`);
    footer_button.setAttribute("id", `${card_heading}`)
    footer_button.setAttribute("title", `Check ${card_heading} calculator`);
    footer_button.href = `${src_link}`;
    footer_button.target = "_parent"
    footer_button.innerHTML = "Check";
    brand.innerHTML = "H.M.E.C";
    brand.style.fontSize = "18px";
    brand.setAttribute("class", "text-dark")
    container_footer.append(footer_button);
    container_footer.append(brand);
    container_footer.style.display = "flex";
    container_footer.style.justifyContent = "space-between"

    container.setAttribute("title", `${card_heading}`);
    container.setAttribute("id", `${card_heading}`)

    all_cards.appendChild(container);
}

/**
 * @card_attributes - A multidimensional array containing important information
 * about the card such as @card_header , @genre , @src_link , @card_image respectively
 */
let card_attributes =
[
    ["Arithmetic progression", "Sequence_and_series", "javascript:(void)", "../web_images/strategy.jpg"],
    ["Geometric progression", "Sequence_and_series", "javascript:(void)", "../web_images/tech.png"], 
    ["Mensuration", "Area_of_solid_shapes", "javascript:(void)", "../web_images/finance.jpg"],
    ["Calculator (Basic)", "Calculator", "../calculator/calculator.html", "../web_images/ethics.png"],
    ["Grouped data", "Statistics", "javascript:(void)", "../web_images/EAE493F8FD24FCF819FE24AF1BC5009B.jpg"],
    ["Ungrouped data", "Statistics", "javascript:(void)", "../web_images/strategybus.jpg"]
]

let text = 
[
    "Designed to help you achieve fluency in the language of business, CORe is a business fundamentals of program that combines Business Analytics, Economics for Managers and Financial Accounting with a final exam",
    "Designed to help you achieve fluency in the language of business, CORe is a business fundamentals of program that combines Business Analytics, Economics for Managers and Financial Accounting with a final exam",
    "Designed to help you achieve fluency in the language of business, CORe is a business fundamentals of program that combines Business Analytics, Economics for Managers and Financial Accounting with a final exam",
    "Designed to help you achieve fluency in the language of business, CORe is a business fundamentals of program that combines Business Analytics, Economics for Managers and Financial Accounting with a final exam",
    "Designed to help you achieve fluency in the language of business, CORe is a business fundamentals of program that combines Business Analytics, Economics for Managers and Financial Accounting with a final exam",
    "Designed to help you achieve fluency in the language of business, CORe is a business fundamentals of program that combines Business Analytics, Economics for Managers and Financial Accounting with a final exam",

]


for (let i = 0; i < card_attributes['length']; i++)
{
    creating_card(card_attributes[i][0],card_attributes[i][3], text[i], card_attributes[i][2],  card_attributes[i][1])
}

let cards_present = document.querySelectorAll(".card");

if (cards_present.length == 0)
{
    let content_info = document.createElement("p");
    content_info.innerHTML = "No result";

    all_cards.appendChild(content_info)
}

cards_present.forEach((x)=>{
    x.addEventListener("mouseover", ()=>{
        x.classList.add("shadow");
    })
})
cards_present.forEach((x)=>{
    x.addEventListener("mouseout", ()=>{
        x.classList.remove("shadow");
    })
})


let search_bar = document.querySelector("#search");
search_bar.addEventListener("keyup", ()=>{
    let cards = document.querySelectorAll(".card");
    cards.forEach((x)=>{

        let new_string = x.id.toLowerCase();

        if (new_string.includes(search_bar.value)) 
        {
            x.style.display = "flex";
        }

        else
        {
            x.style.display = "none";
        }
        
        if (search_bar.value == "")
        {
            x.style.display = "flex"
        }
    })
})

let options = document.querySelector("#opts");
options.addEventListener("click", (e)=>{
    let cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++)
    {
        if (cards[i].classList.contains(e.target.value))
        {
            cards[i].style.display = "flex";
        }
        else
        {
            cards[i].style.display = "none"
        }

        if (e.target.value == "All")
        {
            cards[i].style.display = "flex"
        }
    }
})

let calculator_type_search = document.querySelector("#calculator_type_search");
calculator_type_search.addEventListener("submit", (e)=>{
    e.preventDefault();
})
