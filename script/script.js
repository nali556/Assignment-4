//Question 4
let check = () =>{
    //checking if the password is 12345678
    const header = document.querySelector("h1")
    const password = document.getElementById("exampleInputPassword1").value
    const form = document.querySelector("form")
    if(String(password) === "12345678"){
        form.addEventListener("submit", (event) =>{
            event.preventDefault()
            header.innerText = "Correct"
        })
    }
    else{
        alert("Wrong password")
    }
}