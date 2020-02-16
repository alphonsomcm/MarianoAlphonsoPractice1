
function CorrectDate(){
    if (document.getElementById('EndDate').value < document.getElementById('StartDate').value ){
        alert("Incorrect End Date input!");
        document.getElementById('EndDate').value = null;
    }
}
function submt(){
        alert("The Event Proposal has been Submitted!");
    }
function function1() {
        var checkBox = document.getElementById("firstQ");
        
        var text = document.getElementById("f1");
        if (checkBox.checked == true){
            text.style.display = "block";
        } else {
           text.style.display = "none";
        }
}   
function function2() {
    var checkBox = document.getElementById("SecondQ");
    
    var text = document.getElementById("f2");
    if (checkBox.checked == true){
    
    
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }   
  function function3() {
    var checkBox = document.getElementById("ThirdQ");
    
    var text = document.getElementById("f3");
    if (checkBox.checked == true){
    
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  } 
  function function4() {
    var checkBox = document.getElementById("FourthQ");
    
    var text = document.getElementById("f4");
    if (checkBox.checked == true){
    
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  } 
  function function5() {
    var checkBox = document.getElementById("FifthQ");
    
    var text = document.getElementById("f5");
    if (checkBox.checked == true){
    
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  } 

