
var yourElement = document.getElementById("password");
yourElement.addEventListener("keydown", function (e) {
    password_validation()
});

    
document.getElementById("false").style.display="none";
document.getElementById("true").style.display="none";


document.getElementById("false__capital_letter").style.display="none";
document.getElementById("true_capital_letter").style.display="none";

document.getElementById("small_letter_check_false").style.display="none";
document.getElementById("small_letter_check_true").style.display="none";

document.getElementById("true_number_check").style.display="none";
document.getElementById("false_number_check").style.display="none";

document.getElementById("true_number_check").style.display="none";
document.getElementById("false_number_check").style.display="none";

document.getElementById("true_special_characters").style.display="none";
document.getElementById("false_special_characters").style.display="none";



function lengh_check(password)
{
    if (  8<=password.length)
    {
  document.getElementById("length").style.color='green'
  console.log("true length")
  document.getElementById("true").style.display="inline";
  document.getElementById("false").style.display="none";
    }
  else if(password.length<8)
  {
    console.log("false length")
    document.getElementById("length").style.color= 'red';
    document.getElementById("false").style.display="inline";
    document.getElementById("true").style.display="none";
  }
    return;
}





function capital_letter_check(password){
    
    if(password.toLowerCase() != password){
        console.log("true capital")
        document.getElementById("capital_letter").style.color='green'
        document.getElementById("true_capital_letter").style.display="inline";
        document.getElementById("false__capital_letter").style.display="none";
    }
    else {
        console.log("false capital")
        document.getElementById("capital_letter").style.color='red';
        document.getElementById("false__capital_letter").style.display="inline";
        document.getElementById("true_capital_letter").style.display="none";
    }
    return;
} 

function small_letter_check(password){
   
    if(password.toUpperCase() != password){
        console.log("true smalls")
        document.getElementById("lowercase_letter").style.color='green'
        document.getElementById("small_letter_check_true").style.display="inline";
        document.getElementById("small_letter_check_false").style.display="none";
    }
    else{
        console.log("false smalls");
        document.getElementById("lowercase_letter").style.color='red';
        document.getElementById("small_letter_check_false").style.display="inline";
        document.getElementById("small_letter_check_true").style.display="none";
    }
    return;
} 


function number_check(password){
    let regex = /\d/;
    if(regex.test(password)){
        console.log("we have a number")
        document.getElementById("number").style.color='green'
        document.getElementById("true_number_check").style.display="inline";
        document.getElementById("false_number_check").style.display="none";
    }
    else{
        console.log("no numbers");
        document.getElementById("number").style.color='red'
        document.getElementById("true_number_check").style.display="none";
        document.getElementById("false_number_check").style.display="inline";
    }
    return;
}


function special_characters_check(password){
    let regex = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    if(regex.test(password)){
        console.log("hase special_characters ");
        document.getElementById("special_characters").style.color='green';
        document.getElementById("true_special_characters").style.display="inline";
document.getElementById("false_special_characters").style.display="none";
    }
    else{
        console.log("no special_characters");
        document.getElementById("special_characters").style.color='red';
        document.getElementById("true_special_characters").style.display="none";
document.getElementById("false_special_characters").style.display="inline";
    }
}




function password_validation() {

let user_password =document.getElementById("password").value;

console.log(user_password); 
console.log(typeof(user_password) );
console.log(user_password.length);

console.log(lengh_check(user_password));
console.log(capital_letter_check(user_password));
console.log(small_letter_check(user_password));
console.log(number_check(user_password));
console.log(special_characters_check(user_password));
return ;

}



