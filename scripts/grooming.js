 
//Display or hide list of dog breeds
function displayMenu(){
    $('#pet-type').on('change', ()=>{
        console.log($('#pet-type').val()); 
        if($('#pet-type').val() === 'Dog'){
            $('#breed-list').css('display','block'); 
        }else{
            $('#breed-list').css('display','none'); 
        }

        if($('#pet-type').val() === 'Cat'){
            $('#breed').val('-- select an option --'); 
        }
    });
} 
displayMenu(); 

//Display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

//Send data to server 
function sendData(){
    let details = $('form').serialize(); 
        $.post('handle_grooming_data.php', details, function(data){
        console.log(data); 
    });
}

let form = document.querySelector('#grooming-form'); 
form.addEventListener('submit', (e)=>{ 
    //Get values of form elements 
    var firstName = document.querySelector('#fName').value; 
    var lastName = document.querySelector('#lName').value;
    var address = document.querySelector('#address').value; 
    let city = document.querySelector('#city').value; 
    let state = document.querySelector('#state').value; 
    let zipcode = document.querySelector('#zipcode').value; 
    let phoneNumber = document.querySelector('#phone').value; 
    //email not required. but still need to make sure it is a valid email
    let email = document.querySelector('#email').value; 
    let petType = document.querySelector('#pet-type').value; 
    let breedList = document.querySelector('#breed').value; 
    let petName = document.querySelector('#pet-name').value; 

    // Define error variables with a default value
    var firstNameErr = lastNameErr = addressErr = cityErr = stateErr = zipCodeErr = phoneNumberErr = petTypeErr = petNameErr = true; 

    var emailErr = false; 

    //Hidden value 
    var breedErr = false ; 
    
    //Validate first name
    if(firstName == "") {
        printError("firstNameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(firstName) === false) {
            printError("firstNameErr", "Please enter only letters");
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
            printError("lastNameErr", "Please enter only letters");
        } else {
            printError("lastNameErr", "");
            lastNameErr = false;
        }
    }

    //Validate address
    if(address == "") {
        printError("addressErr", "Please enter your Address");
    }else{
        printError("addressErr", "");
        addressErr = false;   
    }

    //Validate city
    if(city == "") {
        printError("cityErr", "Please enter your City");
    }else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(city) === false) {
            printError("cityErr", "Please enter only letters");
        } else {
            printError("cityErr", "");
            cityErr = false;
        }
    }

    //Validate state
    if(state == "") {
        printError("stateErr", "Please enter your State");
    }else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(state) === false) {
            printError("stateErr", "Please enter only letters");
        } else {
            printError("stateErr", "");
            stateErr = false;
        }
    }

    //Validate zipcode
    if(zipcode == ""){
        printError("zipCodeErr", "Please enter your Zip Code");
    }else{
        var regex = /^[0-9]+$/;            
        if(regex.test(zipcode) === false){
            printError("zipCodeErr", "Please enter only numbers");
        } else{
            printError("zipCodeErr", "");
            zipCodeErr = false;
        }  
    } 

    //Validate phone number
    if(phoneNumber == ""){
        printError("phoneNumberErr", "Please enter your Phone Number");
    }else{
        var regex = /^[0-9]+$/;            
        if(regex.test(phoneNumber) === false){
            printError("phoneNumberErr", "Please enter only numbers");
        } else{
            printError("phoneNumberErr", "");
            phoneNumberErr = false;
        }  
    } 

    //Validate Pet Type
    if(petType == ""){
        printError("petTypeErr", "Please enter a pet type");
    }else{
        printError("petTypeErr", "");
        petTypeErr = false;   
    } 

    console.log(breedList); 

    //Validate Breed
    if(petType === "Dog" && breedList == ''){
        breedErr = true;
        printError("breedErr", "Please select a breed");
    }else{
        printError('breedErr', ""); 
        breedErr = false;
    }
    
    //Validate Pet Name
    if(petName == "") {
        printError("petNameErr", "Please enter a pet name");
    }else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(petName) === false) {
            printError("petNameErr", "Please enter only letters");
        } else {
            printError("petNameErr", "");
            petNameErr = false;
        }
    }

    //Validate email
    if(email !== "") {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false){
            e.preventDefault(); 
            printError("emailErr", "Please enter a valid email address");
            emailErr = true; 
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    } 
 
    // Prevent the form from being submitted if there are any errors
    if(( firstNameErr|| lastNameErr || addressErr ||  cityErr || stateErr ||  zipCodeErr || emailErr ||phoneNumberErr || petTypeErr || breedErr) == true){
        e.preventDefault();
        $('#submit-error-msg').slideDown(500).delay(2500).slideUp(500);
        location.href = "#top";     
     }else{
        e.preventDefault(); 
        $('#submit-success-msg').slideDown(500).delay(2500).slideUp(500);           
        sendData(); 
        location.href = "#top"; 
        
        //clear form
        let firstName = document.querySelector('#fName');
        let lastName = document.querySelector('#lName');
        let address = document.querySelector('#address'); 
        let city = document.querySelector('#city');
        let state = document.querySelector('#state'); 
        let zipcode = document.querySelector('#zipcode'); 
        let phoneNumber = document.querySelector('#phone');
        let email = document.querySelector('#email'); 
        let petType = document.querySelector('#pet-type');
        let petName = document.querySelector('#pet-name');
        firstName.value = ''; 
        lastName.value = ''; 
        address.value = ''; 
        city.value = ''; 
        state.value = ''; 
        zipcode.value = ''; 
        phoneNumber.value = ''; 
        email.value = ''; 
        petType.value = ''; 
        petName.value = '';   
    }

    
}); 
    
