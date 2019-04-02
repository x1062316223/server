

function validateUser() {
    //get username

    var userName = document.getElementsByName("username")[0].value;
    //get password

    var passWord = document.getElementsByName("password")[0].value;

    //validation
    $.get("/ValidateUser?userName=" + userName + "&passWord=" + passWord,function(data){
        alert(data);
    });


}