function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modal = document.querySelector(".modal");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModal = document.querySelector(".close-form");
const confirmation = document.querySelector(".confirmation");
const closeConfirmation = document.querySelectorAll(".close-confirmation");

const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");

const checkboxPlace = document.querySelectorAll(".cb-place");
const conditionsAccepted = document.getElementById("checkbox1");
const submit = document.querySelector(".submit");

/*ouverture/fermeture modales*/
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modal.style.display = "block";
}

// button close modal form
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// buttons close modal confirmation
closeConfirmation.forEach((btn) => btn.addEventListener("click", CloseConfirmationModale));

function CloseConfirmationModale() {
  confirmation.style.display = "none";
}

/* verif inputs*/
let firstValid = false;
let lastValid = false;
let emailValid = false;
let birthdateValid = false;
let tournamentSelected = false;
let nbTounamentSelected = false;

// verif input first name
first.addEventListener("input", VeriFirstName);
// verif input first name length
first.addEventListener("change", VeriFirstNameLength);
// verif input last name
last.addEventListener("input", VerifLastName);
// verif input last name length
last.addEventListener("change", VeriLasttNameLength);
// verif input email 
email.addEventListener("change", VerifEmail);
// verif input birthdate 
birthdate.addEventListener("input", VerifBirthdate);
// verif nb tournoi renseigné
quantity.addEventListener("input", VerifNbTounrnaments);
// verif tournoi selectionné
checkboxPlace.forEach((btn) => btn.addEventListener("click", TournamentSelection));
// verif conditionsAccepted
conditionsAccepted.addEventListener("click", ConditionsAcceptation);

// submit button
submit.addEventListener("click", Validate);

function VeriFirstNameLength(event) {
  // recup ce qui est tapé
  const input = event.target.value;

  // verif qu'il y a lettres au moins 2 lettres
  if (input.length < 2) {
    firstValid = false;
    const errorMessage = document.getElementById("error-first");
    errorMessage.innerHTML = "Veuillez rentrer au moins deux lettres";
  }
}

function VeriFirstName(event) {
  // recup ce qui est tapé
  const input = event.target.value;

  // verif qu'il n'y a que des lettres
  var regex = new RegExp("^[a-zA-Z]+$");
  if (regex.test(input)) {
    firstValid = true;
    const errorMessage = document.getElementById("error-first");
    errorMessage.innerHTML = "";
  } else {
    firstValid = false;
    const errorMessage = document.getElementById("error-first");
    errorMessage.innerHTML = "Veuillez ne rentrer que des lettres";
  }
}

function VeriLasttNameLength(event) {
  // recup ce qui est tapé
  const input = event.target.value;

  // verif qu'il y a lettres au moins 2 lettres
  if (input.length < 2) {
    firstValid = false;
    const errorMessage = document.getElementById("error-last");
    errorMessage.innerHTML = "Veuillez rentrer au moins deux lettres";
  }
}

function VerifLastName(event) {
  // recup ce qui est tapé
  const input = event.target.value;

  // verif qu'il n'y a que des lettres
  var regex = new RegExp("^[a-zA-Z]+$");
  if (regex.test(input)) {
    lastValid = true;
    const errorMessage = document.getElementById("error-last");
    errorMessage.innerHTML = "";
  } else {
    lastValid = false;
    const errorMessage = document.getElementById("error-last");
    errorMessage.innerHTML = "Veuillez ne rentrer que des lettres";
  }
}

function VerifEmail(event) {
  // recup ce qui est tapé
  const input = event.target.value;

  // verif mail regex
  var regex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.{1}[a-zA-Z0-9]+$");
  if (regex.test(input)) {
    emailValid = true;
    const errorMessage = document.getElementById("error-email");
    errorMessage.innerHTML = "";
  } else {
    emailValid = false;
    const errorMessage = document.getElementById("error-email");
    errorMessage.innerHTML = "Veuillez entrer une adresse valide";
  }
}

// détermine si date renseignée est inferieure à la date du jour
function VerifBirthdate(event) {
  // recup ce qui est tapé
  const input = event.target.value;
  // Créer un objet Date à partir de la date donnée
  var givenDate = new Date(input);
  // Créer un objet Date pour aujourd'hui
  var todayDate = new Date();
  // Comparer les deux dates en ignorant l'heure
  if (givenDate.setHours(0, 0, 0, 0) < todayDate.setHours(0, 0, 0, 0)) {
    birthdateValid = true;
    const errorMessage = document.getElementById("error-birthdate");
    errorMessage.innerHTML = "";
  } else {
    birthdateValid = false;
    const errorMessage = document.getElementById("error-birthdate");
    errorMessage.innerHTML = "Veuillez entrer une date de naissance valide";
  }
}

function VerifNbTounrnaments(event) {
  // recup ce qui est tapé
  const input = event.target.value;
  if (input == "") {
    nbTounamentSelected = false;
  } else {
    const errorMessage = document.getElementById("error-quantity");
    errorMessage.innerHTML = "";
    nbTounamentSelected = true;
  }
}

function TournamentSelection() {
  tournamentSelected = true;
  const errorMessage = document.getElementById("error-tournament");
  errorMessage.innerHTML = "";
}

function ConditionsAcceptation() {
  const errorMessage = document.getElementById("error-conditions");
  errorMessage.innerHTML = "";
}

// validation form
function Validate() {
  /* messages d'erreur */
  // first name renseigné
  ErrorMessage(firstValid, "error-first", "Veuillez entrer un prénom valide");

  // last name renseigné
  ErrorMessage(lastValid, "error-last", "Veuillez entrer un nom valide");

  // email renseigné
  ErrorMessage(emailValid, "error-email", "Veuillez entrer un email valide");

  // birthdate renseigné
  ErrorMessage(birthdateValid, "error-birthdate", "Veuillez entrer un date valide");

  // nb tournois renseigné
  ErrorMessage(nbTounamentSelected, "error-quantity", "Veuillez selectionner un nombre de tournois");

  // tournoi selectionné
  ErrorMessage(tournamentSelected, "error-tournament", "Veuillez selectionner un tournoi");

  // conditions accceptées
  ErrorMessage(conditionsAccepted.checked, "error-conditions", "Veuillez accepter les conditions d'utilisation");

  /* message confirmation*/
  if (firstValid && lastValid && emailValid && birthdate && nbTounamentSelected && tournamentSelected && conditionsAccepted.checked) {
    modal.style.display = "none";
    confirmation.style.display = "block";
  }
}

function ErrorMessage(item, idHtml, message) {
  // si accceptées
  if (item) {
    const errorMessage = document.getElementById(idHtml);
    errorMessage.innerHTML = "";
  } else {
    // si pas accceptées
    const errorMessage = document.getElementById(idHtml);
    errorMessage.innerHTML = message;
  }
}