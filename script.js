const endDate = new Date("31 oct, 2024 23:51:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer() {
    const now = new Date().getTime();
    
    // Calculate distances
    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    // Constants for time calculations
    const oneDayInMillis = 24 * 60 * 60 * 1000;
    const oneHourInMillis = 60 * 60 * 1000;
    const oneMinInMillis = 60 * 1000;
    const oneSecondInMillis = 1000;

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(distancePending / oneDayInMillis);
    const hrs = Math.floor((distancePending % oneDayInMillis) / oneHourInMillis);
    const mins = Math.floor((distancePending % oneHourInMillis) / oneMinInMillis);
    const secs = Math.floor((distancePending % oneMinInMillis) / oneSecondInMillis);

    // Populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    // Calculate total distance for the progress bar
    const totalDistance = endDate - startDate;

    // Ensure percentage doesn't go below 0%
    const percentageDistance = Math.max(0, (distanceCovered / totalDistance) * 100);

    // Set width for progress bar
    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    // Check if the countdown has expired
    if (distancePending < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Expired";
        document.getElementById("progress-bar").style.width = "100%";
    }
}, 1000);
