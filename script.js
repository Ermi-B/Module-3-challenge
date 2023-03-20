

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//function that generates password
function generatePassword(){

  
    //input variables
    var numChar = prompt('How many charcters do you want your password to be?');
    if(!(numChar>=8 && numChar<=128)){
      alert("Password must contain 8 - 128 characters!");
      location.reload(); //reloads the page to accept new valid values (8-128)
    }else{
      var has_Special = confirm("Special characters?"); 
      var has_LowerCase = confirm("Lowercase characters?");
      var has_UpperCase = confirm("UpperCase characters?");
      var has_numerics = confirm("Numeric characters?")
      
      //variables containing  letters and characheter
      var lowerChar = "abcdefghijklmnopqrstuvwxyz";
      var upperChar = lowerChar.toUpperCase();
      var specialChar = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
      var numericChar = "1234567890"
      var pass = []; //empty array to build up the password (pushing each random charactes)
      
      for(var i = 0; i<numChar;i++){
        if(has_Special && has_LowerCase && has_UpperCase && has_numerics){
          var temp = lowerChar.concat(upperChar).concat(specialChar).concat(numericChar);
          pass.push(temp.charAt(Math.floor(Math.random()*temp.length)));
          
  
        }else if(has_Special && has_LowerCase && has_UpperCase ){
          var temp = lowerChar.concat(upperChar).concat(specialChar);
          pass.push(temp.charAt(Math.floor(Math.random()*temp.length)));
  
        }else if(has_LowerCase && has_UpperCase && has_numerics){
          var temp = lowerChar.concat(upperChar).concat(numericChar);
          pass.push(temp.charAt(Math.floor(Math.random()*temp.length)));
  
        }else if(has_LowerCase && has_UpperCase){
          var temp = lowerChar.concat(upperChar);
          pass.push(temp.charAt(Math.floor(Math.random()*temp.length)));
  
        }else if(has_LowerCase && has_Special && has_numerics){
          var temp = lowerChar.concat(specialChar).concat(numericChar);
          pass.push(temp.charAt(Math.floor(Math.random()*temp.length)));  
  
        }else if(has_LowerCase && has_Special){
          var temp = lowerChar.concat(specialChar);
          pass.push(temp.charAt(Math.floor(Math.random()*temp.length)));
  
        }else if(has_UpperCase && has_Special && has_numerics){
          var temp = lowerChar.concat(upperChar).concat(numericChar);
          pass.push(temp.charAt(Math.floor(Math.random()*temp.length)));
  
        }else if(has_UpperCase && has_Special){
          var temp = upperChar.concat(specialChar);
          pass.push(temp.charAt(Math.floor(Math.random()*temp.length)));
  
        }else if(has_Special && has_numerics){
          var temp = specialChar.concat(numericChar);
          pass.push(temp.charAt(Math.floor(Math.random()*temp.length)));
  
        }else if(has_LowerCase && has_numerics){
          var temp = lowerChar.concat(numericChar);
          pass.push(temp.charAt(Math.floor(Math.random()*temp.length)));
  
        }else if(has_UpperCase && has_numerics){
          var temp = upperChar.concat(numericChar);
          pass.push(temp.charAt(Math.floor(Math.random()*temp.length)));
  
        }else if(has_LowerCase){
          pass.push(lowerChar.charAt(Math.floor(Math.random()*lowerChar.length)));
  
        }else if(has_UpperCase){
          pass.push(upperChar.charAt(Math.floor(Math.random()*upperChar.length)));
  
        }else if(has_Special){
          pass.push(specialChar.charAt(Math.floor(Math.random()*specialChar.length)));
  
        }else if(has_numerics){
          pass.push(numericChar.charAt(Math.floor(Math.random()*numericChar.length)));
  
        }else{
          console.error("Password needs to contain at least one of these: Uppercase, lower case and special characters or numerics");
          alert("Password needs to contain at least one of these: Uppercase, lower case, special characters or numerics");
          generatePassword();
          
        } 
        }
     
      
      return (pass.join(''));  //.join('') removes comma and joins array elemnts without space
    }
    
  }
  