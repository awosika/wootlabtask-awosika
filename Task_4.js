let passWord;
passWord = 2345;
passWord = "great"
passWord = 3546+"theboy"
passWord = "cool"+637467
passWord = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/

function passwordValidator(passWord){
    if (passWord === String){
        return 0
    } else if (passWord === Number){
        return 1
    } else if (passWord === String && Number){
        return 2
    } else {
        return 3
    }
}