
const modal = document.getElementById("contactModal");
const openBtn = document.getElementById("openContactBtn");
const closeBtn = document.getElementById("closeModal");
const popupForm = document.getElementById("popupForm");

// OPEN popup
openBtn.onclick = function () {
    modal.style.display = "flex";
};

// CLOSE popup
closeBtn.onclick = function () {
    modal.style.display = "none";
};

// close when clicking outside form
window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
};

// VALIDATE popup form
popupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("popupName").value.trim();
    const email = document.getElementById("popupEmail").value.trim();
    const message = document.getElementById("popupMessage").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        return;
    }

    fetch(popupForm.action, {
        method: popupForm.method,
        body: new FormData(popupForm),
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            alert("Message sent!");
            popupForm.reset();
            modal.style.display = "none";
        } else {
            alert("Oops! Something went wrong.");
        }
    })
    .catch(() => alert("Error submitting form."));
});

document.getElementById("openContactBtnNav").onclick = function(e){
    e.preventDefault();
    modal.style.display = "block";
};