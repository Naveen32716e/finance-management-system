document.addEventListener("DOMContentLoaded", function () {
    // Owner Login Validation
    document.getElementById("ownerForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let username = document.getElementById("ownerUsername").value;
        let password = document.getElementById("ownerPassword").value;
        let errorElement = document.getElementById("ownerError");

        if (username === "owner" && password === "owner123") {
            window.location.href = "ownerdashboard.html"; // Redirect to Owner Dashboard
        } else {
            errorElement.textContent = "Invalid Owner credentials!";
            errorElement.style.color = "red";
        }
    });

    // Collector Login Validation
    document.getElementById("collectorForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let username = document.getElementById("collectorUsername").value;
        let password = document.getElementById("collectorPassword").value;
        let errorElement = document.getElementById("collectorError");

        if (username === "collector" && password === "collector123") {
            window.location.href = "collectordashboard.html"; // Redirect to Collector Dashboard
        } else {
            errorElement.textContent = "Invalid Collector credentials!";
            errorElement.style.color = "red";
        }
    });

    // Customer Login Validation
    document.getElementById("customerForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let username = document.getElementById("customerUsername").value;
        let password = document.getElementById("customerPassword").value;
        let errorElement = document.getElementById("customerError");

        if (username === "customer" && password === "customer123") {
            window.location.href = "customerdashboard.html"; // Redirect to Customer Dashboard
        } else {
            errorElement.textContent = "Invalid Customer credentials!";
            errorElement.style.color = "red";
        }
    });
});
