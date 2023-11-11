// Menu button trigger
document.getElementById("menu-toggle").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("wrapper").classList.toggle("toggled");
});

// Confirmatin of students' info deletion
function showDeleteConfirmation(id) {
    var confirmDialog = document.getElementById('confirmDialog');
    confirmDialog.style.display = 'block';
    
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
    
    // Optional: Disable scrolling when the confirm dialog is open
    document.body.style.overflow = 'hidden';
    
    // Store the ID of the item to be deleted
    confirmDialog.dataset.itemId = id;
}

function hideDeleteConfirmation() {
    var confirmDialog = document.getElementById('confirmDialog');
    confirmDialog.style.display = 'none';
    
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    
    // Optional: Enable scrolling when the confirm dialog is closed
    document.body.style.overflow = '';
}

function deleteItemNew() {
    window.location.href = "new_list.html";
}

function deleteItemOld() {
    window.location.href = "old_list.html";
}

function updateNew() {
    window.location.href = "new_info_page1.html";
}

function updateOld() {
    window.location.href = "old_info.html";
}


// Function for birthday format validation in new list
// function validateBirthdate(input) {
//     var birthdate = input.value;
//     var pattern = /^\d{2}\/\d{2}\/\d{4}$/;

//     if (!pattern.test(birthdate)) {
//         document.getElementById('birthdateError').textContent = "Please enter a valid date format.";
//         input.setCustomValidity("Invalid date format");
//     } else {
//         document.getElementById('birthdateError').textContent = "";
//         input.setCustomValidity("");
//     }
// }