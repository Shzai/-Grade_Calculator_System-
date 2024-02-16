function Calculate() {
    var a = Number(document.querySelector("#Bookone").value);
    var b = Number(document.querySelector("#Booktwo").value);
    var c = Number(document.querySelector("#Bookthree").value);
    var d = Number(document.querySelector("#Bookfour").value);
    var e = Number(document.querySelector("#Bookfive").value);
    var f = Number(document.querySelector("#Booksix").value);
    var g = Number(document.querySelector("#Bookseven").value);
    if (a >= 101 || b >= 101 || c >= 101 || d >= 101 || e > 101 || f >= 101 || g >= 101) {
        alert("Please correct your entry");
    }
    else {
        var obt1 = a + b + c + d + e + f + g;
        document.querySelector("#obt1").innerHTML = obt1;
        var per1 = obt1 / 560 * 100;
        document.querySelector("#per1").innerHTML = per1;
    }
    if (a >= 40 && b >= 40 && c >= 40 && d >= 40 && e >= 40 && f >= 40 && g >= 40) {
        document.querySelector("#rem1").innerHTML = "PASS";
    }
    else {
        document.querySelector("#rem1").innerHTML = "FAIL";
    }
    if (per1 >= 90) {
        document.querySelector("#gd1").innerHTML = "A+";
    }
    else if (per1 >= 80) {
        document.querySelector("gd1").innerHTML = "A";
    }
    else if (per1 >= 70) {
        document.querySelector("#gd1").innerHTML = "B";
    }
    else if (per1 >= 60) {
        document.querySelector("#gd1").innerHTML = "C";
    }
    else if (per1 >= 50) {
        document.querySelector("#gd1").innerHTML = "D";
    }
    else if (per1 >= 40) {
        document.querySelector("#gd1").innerHTML = "E";
    }
    else {
        document.querySelector("#gd1").innerHTML = "F";
    }
}