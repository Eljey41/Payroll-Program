const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function (event){
    event.preventDefault();

    const id = document.getElementById("idNumber").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const fname = document.getElementById("fname").value.trim();
    const mname = document.getElementById("mname").value.trim();
    const pos = document.getElementById("pos").value.trim();
    const rate = document.getElementById("rate").value.trim();
    const wdays = document.getElementById("wdays").value.trim();

    if (!id || !lname || !fname || !mname || !pos || !rate || !wdays) {

        alert("Please fill out all fields!");
    }

    else{
        window.location.href = "DisplayInfo.html";
    }
    
    
});




function submitForm() {
    var id = document.getElementById("idNumber").value;
    var lname = document.getElementById("lname").value;
    var fname = document.getElementById("fname").value;
    var mname = document.getElementById("mname").value;
    var pos = document.getElementById("pos").value;
    var rate = document.getElementById("rate").value;
    var wdays = document.getElementById("wdays").value;    
    
    sessionStorage.setItem("userId", id);
    sessionStorage.setItem("userLname", lname);
    sessionStorage.setItem("userFname", fname);
    sessionStorage.setItem("userMname", mname);
    sessionStorage.setItem("userPos", pos);
    sessionStorage.setItem("userRate", rate);
    sessionStorage.setItem("userWdays", wdays);

    

}



