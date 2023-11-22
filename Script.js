const myButton = document.querySelector('#CmdMenu');
const myMenu = document.querySelector("#LeMenu");

myButton.addEventListener('click', () => {
    if(myMenu.style.display === "none"){
        myMenu.style.display = "block";
    }else {
        myMenu.style.display = "none"
    }
    
});