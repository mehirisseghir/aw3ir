$(document).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");

    // Y mettre le code jQuery pour valider tous les champs du formulaire
});
$(function datepicker() {
    $("#datepicker").datepicker();
});

function checkValidation() {

    if ($("#name").val() == "" || $("#lastname").val() == "" || $("#datepicker").val() == "" || $("#adress").val() == "" || $("#mail").val() == "") {
        $('#myModal').modal("show");

    } else {

        $('#imageModel').modal("show");
    }

}