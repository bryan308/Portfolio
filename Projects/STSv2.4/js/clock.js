function displayTime() {
    var date = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    var day = days[date.getDay()];
    var month = months[date.getMonth()];
    var dayOfMonth = date.getDate();
    var year = date.getFullYear();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var period = hour >= 12 ? "PM" : "AM";

    hour = hour % 12;
    hour = hour ? hour : 12;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    var time = hour + ":" + minute + ":" + second + " " + period;
    var currentDate = day + ", " + month + " " + dayOfMonth + ", " + year;

    document.getElementById("clock").innerHTML = currentDate + ", " + time;

    setTimeout(displayTime, 1000);
}
displayTime();