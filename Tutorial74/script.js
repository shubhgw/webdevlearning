
let butt = document.getElementById("b1");


butt.addEventListener("dblclick", ()=> {
    // action can be : click , hover, doubleclick, mouseover, mouseout, mouseup, mousedown, mousemove, rightclick- check mdn references for broder info about these
    alert("Button b1 was cliked!")
    document.querySelector(".box").innerHTML = "<h3> Faaaaaaaa </h3>"
})

document.addEventListener("keydown", (event)=> {
    console.log(event)
})


