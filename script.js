const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const firstnameError = document.getElementById('firstnameerror');
const surname = document.getElementById('surname');
const surnameError = document.getElementById('surnameerror');
const email = document.getElementById('email');
const emailError = document.getElementById('emailerror');
const prefixe = document.getElementById('optionList');
const phone = document.getElementById('phone');
const phoneError = document.getElementById('phoneerror');
const password =document.getElementById('password');
const passwordError = document.getElementById('passworderror');
const samePassword = document.getElementById('confirmPassword');
const samePasswordError = document.getElementById('samepassworderror');
const cancel = document.getElementById('buttonCancel');
const create = document.getElementById('buttonCreate');
const togglePassword = document.getElementById('togglePassword');
const toggleSamePassword = document.getElementById('toggleSamePassword');

//Désactiver tous les éléments du formulaire sauf le premier champ et le bouton reset
// ils seront réactivés au fur et à mesure 
const lesChamps = document.querySelectorAll('input')
console.log('lesChamps.length: ',lesChamps.length);
lesChamps.forEach(e => {  //désactiver tous les éléments du formulaire
    e.disabled = true;
});
lesChamps[0].disabled = false; // active le champ first name
cancel.disabled = false; // active le bouton reset

// Au départ, le curseur est dans le champ firstname
firstname.focus();

//Traitement first name
firstname.addEventListener('blur', () => {
    if(firstname.value === "") {
        firstnameError.className="error visible"; //message d'erreur
        firstname.focus();
    } else {
        firstnameError.className="invisible";
        surname.disabled = false;
        surname.focus();
    }
});
//Traitement surname
surname.addEventListener('blur', () => {
    if(surname.value === "") {
        surnameError.className="error visible";
        surname.focus();
    } else {
        surnameError.className="invisible";
        email.disabled = false;
        email.focus();
       
    }
});
//Traitement email
email.addEventListener('blur', () => {
    if(email.value === "") {
        emailError.className="error visible";
        email.focus();
    } else {
        emailError.className="invisible";
        phone.disabled = false;
        phone.focus();
    }
});
//Traitement phone
phone.addEventListener('blur', () => {
    if(phone.value === "") {
        phoneError.className="error visible";
        phone.focus();
    } else {
        phoneError.className="invisible";
        password.disabled = false;
        password.focus();
    }
});
//
//Traitement password
password.addEventListener('blur', () => {
   // if((password.value === "") || !verifierMotDePasse(password.value)) {
    if((password.value === "")) {
        passwordError.className="error visible";
        passeword.focus();
    } else {
        passwordError.className="invisible";
        samePassword.disabled = false;
        samePassword.focus();
    }
});
//Traitement samepassword
samePassword.addEventListener('blur', () => {
    if((samePassword.value === "") || !verifieSamePassword(password.value,samePassword.value)) {
     //if((samePassword.value === "")) {
         samePasswordError.className="error visible";
         samePassword.focus();
     } else {
         samePasswordError.className="invisible";
         create.disabled = false;
     }
 });

//Vérification syntaxe mot de passe
 function verifierMotDePasse(motdepasse) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return regex.test(motdepasse);
  }

//Vérification de l'égalité des deux mots de passe
function verifieSamePassword(motdepasse1,motdepasse2){
    let test = false;
    if(motdepasse1 == motdepasse2){
        test = true;
        console.log("c'est le même");
    }
    return test;
}


//toggle eyebutton
const eyelight = document.getElementById('clickeye');

function togglePasswordVisibility(){
    if (password.type === "password"){
        password.type = "text";
    }
    else {
        password.type ="password";
    }
}
eyelight.addEventListener('click', togglePasswordVisibility);

//toggle eyebuttonconfirm
const eyelightconfirm = document.getElementById('clickeyeconfirm');

function togglePasswordVisibilityConfirm(){
    if (samePassword.type === "password"){
        samePassword.type = "text";
    }
    else {
        samePassword.type ="password";
    }
}
eyelightconfirm.addEventListener('click', togglePasswordVisibilityConfirm);

/*************************************************** */
