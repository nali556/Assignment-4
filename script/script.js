//Question 4
check = () =>{
    //checking if the password is 12345678
    const header = document.querySelector("h1")
    const password = getElementById("exampleInputPassword1").textContent
    if(password === 12345678){
        header.innerText = "Correct"
    }
    else{
        alert("Wrong password")
    }
}