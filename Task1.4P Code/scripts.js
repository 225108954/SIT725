function displayDate() {
    let today = new Date();
    let formattedDate = today.toDateString(); // Example: "Mon Mar 10 2025"
    document.getElementById("date").innerText = formattedDate;
}

// Call the function when the page loads
displayDate();
