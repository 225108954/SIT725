function updateDateTime() {
    let now = new Date();

    // Format date
    let formattedDate = now.toDateString(); // Example: "Mon Mar 10 2025"
    
    // Format time (HH:MM:SS AM/PM)
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    
    hours = hours % 12 || 12; // Convert to 12-hour format
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    let formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Update HTML
    document.getElementById("date").innerText = formattedDate;
    document.getElementById("time").innerText = formattedTime;
}

// Call function every second to update time dynamically
setInterval(updateDateTime, 1000);

// Call it once immediately to avoid delay
updateDateTime();
