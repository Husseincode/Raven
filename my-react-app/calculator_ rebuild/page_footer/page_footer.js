"use strict"

let anchor_tags = document.querySelector(".social_media_icons").children;

for (var i = 0; i < anchor_tags['length']; i++)
{
    anchor_tags[i].classList.add("text-secondary");
}