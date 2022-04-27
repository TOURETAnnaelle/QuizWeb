function validateForm() {
    let x = document.forms["Form"]["name"].value;
    let y = document.forms["Form"]["email"].value;
    let w = document.forms["Form"]["message"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    } else if (y == "") {
        alert("Email must be filled out");
        return false;
    } else if (w == "") {
        alert("Message must be filled out");
        return false;
    } else {
        alert("Message sent ");
        return true;

    }
}