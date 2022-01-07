//Question 4
let check = () =>{
    //checking if the password is 12345678
    const header = document.querySelector("h1")
    const password = document.getElementById("exampleInputPassword1").value
    if(String(password) === "12345678"){
        alert("Correct")
        header.innerText = "Correct"
    }
    else{
        console.log(password)
        alert("Wrong password")
    }
}