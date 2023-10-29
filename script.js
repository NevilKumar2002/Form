let submit= document.getElementById("submit");
let reset= document.getElementById("reset");

// let input= document.querySelectorAll("input");
// let firstName= document.getElementById("firstName");
// let lastName= document.getElementById("lastName");
// let dob= document.getElementById("dob");
// let profession= document.getElementById("profession");
// let email= document.getElementById("email");
// let number= document.getElementById("number");
// let form=document.getElementById("form")

let popup= document.getElementById("popup")
submit.addEventListener("onSubmit", function(event)
{
    event.preventDefault();
           const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const dob = document.getElementById("dob").value;
            const country = document.getElementById("country").value;
            const gender = [...document.querySelectorAll('input[name="gender"]:checked')].map(e => e.value).join(', ');
            const profession = document.getElementById("profession").value;
            const email = document.getElementById("email").value;
            const mobile = document.getElementById("mobile").value;

            // Update popup content
            document.getElementById("popupFirstName").innerHTML = firstName;
            document.getElementById("popupLastName").textContent = lastName;
            document.getElementById("popupDob").textContent = dob;
            document.getElementById("popupCountry").textContent = country;
            document.getElementById("popupGender").textContent = gender;
            document.getElementById("popupProfession").textContent = profession;
            document.getElementById("popupEmail").textContent = email;
            document.getElementById("popupMobile").textContent = mobile;

            // Display the popup
            popup.style.display = "block";
    
})
        // Close popup
        document.getElementById("closePopup").addEventListener("click", function () {
            popup.style.display = "none";
            surveyForm.reset();
        });
   
    

function handleReset(){
    firstName.value="";
    input.value="";
    form.reset();

}

reset.addEventListener('click', handleReset)


