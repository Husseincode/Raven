let dashboard_interface = document.querySelector(".overlay");

function overlay()
{
    dashboard_interface.classList.toggle("toggle_overlay")
    setTimeout(() => {
        const overlay = document.querySelector(".overlay");
        overlay.style.filter = `blur(0px)`
    }, 1000)
}

function exit_overlay()
{
    dashboard_interface.classList.remove("toggle_overlay");
    dashboard_interface.classList.add("overlay");
}

//for mobile phones
const dashboard = document.querySelector(".fa-bars");
dashboard.addEventListener("click", ()=>{
    overlay();
    dashboard.classList.toggle("fa-bars");
})

//search button
const search = document.querySelector("form");
search.addEventListener("submit", (event)=>{
    event.preventDefault();
    alert("Search is still in development");
    search['search_here'].value = ''
})

/**const home = document.querySelector(".fa-home").parentNode;
home.addEventListener("click", () => {
    window.location.assign("../hmec home pages/HusseinMadeEasyCalculator(H.M.E.C)[All calculators].html")
})*/