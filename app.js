let navResponsive = document.getElementById("navResponsive")
let bar = document.getElementById("bar")
let barX = document.getElementById("bar-x")

bar.addEventListener("click",()=>{
    navResponsive.style.display = "block"
    bar.style.display = "none"
    barX.style.display = "block"
})
barX.addEventListener("click",()=>{
    navResponsive.style.display = "none"
    bar.style.display = "block"
    barX.style.display = "none"
})