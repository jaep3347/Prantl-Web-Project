// Validating form on the contact us page
function validate() {
    var inputZip = $("#zipcode").val();
    console.log(inputZip)
    if (isNaN(inputZip) || inputZip.length != 5) {
        alert("Invalid Zipcode");
        return false;
    }
}
