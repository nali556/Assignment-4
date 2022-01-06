//1.	Create an HTML page with two buttons that argue with each other. When one button is clicked, the text "I'm right" should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!"
displayTextOne = () =>{
    line = document.querySelector("p")
    line.innerText = "I'm right!"
}
displayTextTwo = () =>{
    line = document.querySelector("p")
    line.innerText = "No, I'm right!"
}