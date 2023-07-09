setInterval(function() {
    const greeting = document.getElementById("greeting");
    const dateS = document.getElementById("date");
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    
    let hr = hours * 30 + minutes / 2;
    let mn = minutes * 6;
    let sc = seconds * 6;

    document.getElementById("hour").style.transform = `rotate(${hr}deg)`;
    document.getElementById("minute").style.transform = `rotate(${mn}deg)`;
    document.getElementById("second").style.transform = `rotate(${sc}deg)`;

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById("digital").innerHTML = `${hours}:${minutes}:${seconds}`;
    
    if (hours < 12) {
        document.body.style.backgroundImage = "url('images/morning.webp')";
        greeting.innerHTML = "Good Morning";
    } else if (hours > 12 && hours < 17) {
        document.body.style.backgroundImage = "url('images/afternoon.jpg')";
        greeting.innerHTML = "Good Afternoon";
    } else if (hours > 17 && hours < 24) {
        document.body.style.backgroundImage = "url('images/evening.jpg')";
        greeting.innerHTML = "Good Evening";
    }

    if (date < 10) {
        date = "0" + date;
    }
    if (month < 10) {
        month = "0" + (month + 1);
    }
    dateS.innerHTML = `${date}.${month}.${year}.`;

}, 1000);
