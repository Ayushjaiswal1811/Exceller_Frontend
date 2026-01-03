let display = document.getElementById("display")
display.value = 0;
function appendvalue(value){
  if(display.value=="Invalid")
    clearvalue();
  display.value += value;
}
function clearvalue(){
  display.value = "";
}
function calculate(){
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Invalid"
    console.log(error);
  }
}
function backspace(){

}