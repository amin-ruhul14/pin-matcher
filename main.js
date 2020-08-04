//  Hide Disabled  Button
submitBtnDisable();

//  Hide Notifications Button
notificationHide();


// PIN Generate 
function pinGenerate() {
    let pin = Math.floor(999 + Math.random() * 9000);
    document.getElementById("generated-pin-viewer").value = pin;
    document.getElementById("input-pin-viewer").value = "";
    document.getElementById("submitBtn").disabled = true;
    notificationHide();
}

// Disabled Submit Button 
function submitBtnDisable() {
    let inputPin = document.getElementById("input-pin-viewer").value;
    if (inputPin == "") {
        document.getElementById("submitBtn").disabled = true;
    }
}

// Back Button
function backspaceBtn() {
    notificationHide();
    timeLeft();
    document.getElementById("submitBtn").disabled = true;
    let inputPin = document.getElementById("input-pin-viewer").value;
    inputPin = inputPin.substr(0, inputPin.length - 1);
    printOut(inputPin);
}

// Clear Button
function btnClear() {
    notificationHide();
    timeLeft();
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("input-pin-viewer").value = "";
}

// PIN Output
function printOut(num) {
    document.getElementById("input-pin-viewer").value = num;
}

//  Number Click EventListener
let bntNumber = document.getElementsByClassName("number");
for (var i = 0; i < bntNumber.length; i++) {
    bntNumber[i].addEventListener("click", function () {
        let inputPin = document.getElementById("input-pin-viewer").value;
        let leftCount = document.getElementById("left-count").innerText;
        if (inputPin.length == 3 && leftCount != 0) {
            document.getElementById("submitBtn").disabled = false;
            document.getElementById("btn-generate-pin").disabled = false;
        }
        if (inputPin.length < 4) {
            inputPin = inputPin + this.id;
            printOut(inputPin);
        }
    });
}

// Submit Button
function pinBtnSubmit() {
    let generatedPin = document.getElementById("generated-pin-viewer").value;
    let inputPin = document.getElementById("input-pin-viewer").value;
    if (generatedPin == "") {
        notificationInfo();
    } else {
        if (generatedPin == inputPin) {
            notificationSuccess();
        } else {
            notificationError();

            //  Error Count
            let leftCount = parseInt(document.getElementById("left-count").innerText);
            leftCount = leftCount - 1;
            document.getElementById("left-count").innerText = leftCount;
            if (leftCount == 0) {
                for (var i = 0; i < document.getElementsByClassName("button").length; i++) {
                    document.getElementsByClassName("button")[i].onclick = false;
                }
                document.getElementById("submitBtn").disabled = true;
                document.getElementById("btn-generate-pin").disabled = true;
                document.getElementById("pin-error").style.display = "none";
            }
        }
    }
}

// Notification Time Left 
function timeLeft() {
    if (document.getElementById("left-count").innerText == 0) {
    }
}

// All Notification
function notificationError() {
    document.getElementById("pin-success").style.display = "none";
    document.getElementById("pin-error").style.display = "block";
}
function notificationSuccess() {
    document.getElementById("pin-success").style.display = "block";
    document.getElementById("pin-error").style.display = "none";
}
function notificationHide() {
    document.getElementById("pin-success").style.display = "none";
    document.getElementById("pin-error").style.display = "none";
}
function notificationInfo() {
    alert('Please Generate Your PIN');
}