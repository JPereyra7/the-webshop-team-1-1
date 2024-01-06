import "/src/scss/orderConfirmation.scss";

document.addEventListener("DOMContentLoaded", function () {
    const backHomeButton = document.getElementById("backHome") as HTMLButtonElement;

    if (backHomeButton) {
        backHomeButton.addEventListener("click", function () {

            //Wipe localstorage and thus the cart when going back home to landingpage!
            localStorage.removeItem("storedProducts");

            window.location.href = "index.html";
        });
    }
});