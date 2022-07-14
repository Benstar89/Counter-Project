let value = 0;
document.querySelector(".Decrease").addEventListener("click" , Decrease);
document.querySelector(".Reset").addEventListener("click" , Reset);
document.querySelector(".Increase").addEventListener("click" , Increase);

function Decrease(){
    value--;
    document.querySelector(".number").innerText = value;
}
function Increase(){
    value++;
    document.querySelector(".number").innerText = value;
}
function Reset(){
    value = 0;
    document.querySelector(".number").innerText = value;
}

