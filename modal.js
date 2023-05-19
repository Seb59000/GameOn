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
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close-form");

const confirmation = document.querySelector(".confirmation");

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

// verif si form a été validé
verifFormValidated();

function verifFormValidated() {
  const valid = sessionStorage.getItem('valid');

  // si form validé
  if (valid != null) {
    // Suppr des données de sessionStorage
    sessionStorage.removeItem('valid');
    // affichage message confirmation
    showConfirmationInscription();
  }
}

// validation form
function Validate() {
  let valid = true;

  // si tout est OK
  if (valid) {
    // affichage modale confirmation inscription
    sessionStorage.setItem('valid', '1');
    return true;
  } else {
    return false;
  }
}

// display confimration dialog
function showConfirmationInscription() {
  confirmation.style.display = "block";
}

// close confimration dialog
function closeConfirmationInscription() {
  confirmation.style.display = "none";
}