$(function () {

    $("#button").click(function () {

        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();

        $("#someTextArea").append("First Name: " + firstName + "\n Lastname: " + lastName + " \n ");

        SaveToFile(firstName, lastName);
    });


    function SaveToFile(firstname, lastname) {
        $.ajax({
            type: "POST",
            url: "/Home/AjaxMethod",
            data: "{'FirstName':'" + firstname + "', 'LastName':'" + lastname + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                alert("Success");
            },
            failure: function (response) {
                alert(response.responseText);
            },
            error: function (response) {
                alert(response.responseText);
            }
        });
    }
});