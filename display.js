var id = sessionStorage.getItem("userId");
var lname = sessionStorage.getItem("userLname");
var fname = sessionStorage.getItem("userFname");
var mname = sessionStorage.getItem("userMname");
var pos = sessionStorage.getItem("userPos");
var rate = sessionStorage.getItem("userRate");
var wdays = sessionStorage.getItem("userWdays");

var middleName = mname.charAt(0);
var fullname = lname + ", " + fname + " " + middleName + ".";
 
document.getElementById("idNumber").textContent = id;
document.getElementById("fullname").textContent = fullname;
document.getElementById("pos").textContent = pos;
document.getElementById("rate").textContent = rate;
document.getElementById("wdays").textContent = wdays;




var gpay = rate * wdays;
var sss = 0.05 * gpay;
var pIbig = 0.03 * gpay;
var philHealth = 0.02 * gpay;
var tax = 0.05 * gpay;
var totalDeduction = sss + pIbig + philHealth + tax;
var npay = gpay - totalDeduction;

document.getElementById("gpay").textContent = gpay.toFixed(2);
document.getElementById("sss").textContent = sss.toFixed(2);
document.getElementById("pIbig").textContent = pIbig.toFixed(2);
document.getElementById("phealth").textContent = philHealth.toFixed(2);
document.getElementById("tax").textContent = tax.toFixed(2);
document.getElementById("totalDeduction").textContent = totalDeduction.toFixed(2);
document.getElementById("npay").textContent = npay.toFixed(2);
