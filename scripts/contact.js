
// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

//jquery slide msg
function displayMsg(test){
    if(test === false){
        $('#submit-error-msg').slideDown(500).delay(2500).slideUp(500);            
        location.href = "#grooming-form-container";       
    }
    if(test === true){
        $('#submit-success-msg').slideDown(500).delay(2500).slideUp(500);           
        location.href = "#grooming-form-container";  
        for(let i = 0; i < myArr.length; i++){
            myArr[i].css('border', '2px solid black'); 
            myArr[i].val('');
        }  
    } 
}
    
let form = document.querySelector('form'); 
form.addEventListener('submit', (e)=>{
    e.preventDefault(); 
    //Get values of form elements 
    var firstName = document.querySelector('#contact-fName').value; 
    var lastName = document.querySelector('#contact-lName').value;
    var email = document.querySelector('#contact-email').value; 
    var userMsg = document.querySelector('#user-msg').value;

    //Send data to mail script  
    function sendData(){
    let details = $('form').serialize(); 
        $.post('mail.php', details, function(data){
        console.log(data); 
    });
}

    // Define error variables with a default value
    var firstNameErr = lastNameErr = emailErr = userMsgErr = true;

    //Validate first name
    if(firstName == "") {
        printError("firstNameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(firstName) === false) {
            printError("firstNameErr", "Please enter a valid name");
        } else {
            printError("firstNameErr", "");
            firstNameErr = false;
        }
    }

    //Validate last name
    if(lastName == "") {
        printError("lastNameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lastName) === false) {
            printError("lastNameErr", "Please enter a valid name");
        } else {
            printError("lastNameErr", "");
            lastNameErr = false;
        }
    }

    //Validate email
    if(email == "") {
        printError("emailErr", "Please enter an email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    //Validate user message
    if(userMsg == "") {
        printError("userMsgErr", "Please write a message");
    }else{
        printError("userMsgErr", "");
        userMsgErr = false;   
    }

    // Prevent the form from being submitted if there are any errors
    if(( firstNameErr|| lastNameErr || emailErr ||  userMsgErr ) == true) {
        e.preventDefault();
        $('#submit-error-msg').slideDown(500).delay(2500).slideUp(500);
        location.href = "#top";     
     }else{
        let firstName = document.querySelector('#contact-fName'); 
        let lastName = document.querySelector('#contact-lName'); 
        let email = document.querySelector('#contact-email'); 
        let message = document.querySelector('#user-msg'); 
        //send data to mail script 
        sendData(); 
        location.href = "#top";
        $('#submit-success-msg').slideDown(500).delay(2500).slideUp(500);    
        firstName.value = ''; 
        lastName.value = '';
        email.value = '';
        message.value ='';  
    }

    
}); 
    
  
 