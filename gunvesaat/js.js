let person = prompt("Adınızı Giriniz:");

if (person != null) {
    document.getElementById("myName").innerHTML =
        person
}

function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var d = date.getDay();
    var dayName;
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    if (d == 1) {
        dayName = "Pazartesi";
    }
    else if (d == 2) {
        dayName = "Salı";
    }
    else if (d == 3) {
        dayName = "Çarşamba";
    }
    else if (d == 4) {
        dayName = "Perşembe";
    }
    else if (d == 5) {
        dayName = "Cuma";
    }
    else if (d == 6) {
        dayName = "Cumartesi";
    }
    else {
        dayName = "Pazar";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + " " + dayName;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();