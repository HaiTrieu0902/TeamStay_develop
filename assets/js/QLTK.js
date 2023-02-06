const email = document.getElementById('email');
const passWord = document.getElementById('password');
const sdt = document.getElementById('phone');
const userName = document.getElementById('full_name');
const passWordConfirm = document.getElementById('confirm-password');
email.onblur = function() {
    var aIndex = email.value.indexOf('@');
    /* var valueEmail = email.value.split('@')[1]; */
    if(email.value.trim() =="") {
        document.getElementById('notification-email').innerHTML = "Email không được để trống!";
    } else if(aIndex ==-1) {
        document.getElementById('notification-email').innerHTML = "Email không hợp lệ!";
    }else if(email.value.indexOf('.') < aIndex || email.value.indexOf('.')== -1) {
        document.getElementById('notification-email').innerHTML = "Dấu @ phải đứng sau dấu .!";
    }else {
        document.getElementById('notification-email').innerHTML = "";
        return true;
    }
    return false;
}

passWord.onblur = function() {
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(passWord.value.trim() =="") {
        document.getElementById('notification-password').innerHTML = "Mật khẩu không được để trống!";
    } else if(passWord.value.length < 8) {
        document.getElementById('notification-password').innerHTML = "Mật khẩu tối thiểu 8 ký tự!";
    }else if(format.test(passWord.value)) {
        document.getElementById('notification-password').innerHTML = "Mật khẩu không chứa ký tự đặc biệt!";
    }else {
        document.getElementById('notification-password').innerHTML = "";
        return true;
    }
    return false;
}


// funtion bên đăng ký

    sdt.onblur = function() {
        if(sdt.value.trim() == "") {
            document.getElementById('notification-sdt').innerHTML = "Số điện thoại không được để trống";
        }
        else if (isNaN(sdt.value)) {
            document.getElementById('notification-sdt').innerHTML = "Số điện thoại phải là số";
        } else if (sdt.value.length < 10 || sdt.value.length > 12) {
            document.getElementById('notification-sdt').innerHTML = "Số điện thoại từ 10 - 12";
        } else if (sdt.value[0] != '0') {
            document.getElementById('notification-sdt').innerHTML = "Phải có số không ở đầu";
        } else {
            document.getElementById('notification-sdt').innerHTML = "";
            return true;
        }
        return false;
    }
    userName.onblur = function() {
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if(userName.value.trim() == "") {
            document.getElementById('notification-name').innerHTML = "Họ và tên không được để trống";
        }
        else if (!isNaN(userName.value)) {
            document.getElementById('notification-name').innerHTML = "Họ và tên không được là số!";
        } else if (format.test(userName.value)) {
            document.getElementById('notification-name').innerHTML = "Họ và tên không chứa ký tự đặc biệt!";
        } else {
            document.getElementById('notification-name').innerHTML = "";
            return true;
        }
        return false;
    }
    
    passWordConfirm.onblur = function() {
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if(passWordConfirm.value.trim() =="") {
            document.getElementById('notification-passwordConfirm').innerHTML = "Mật khẩu không được để trống!";
        } else if(passWordConfirm.value.length < 8) {
            document.getElementById('notification-passwordConfirm').innerHTML = "Mật khẩu tối thiểu 8 ký tự!";
        }else if(format.test(passWordConfirm.value)) {
            document.getElementById('notification-passwordConfirm').innerHTML = "Mật khẩu không chứa ký tự đặc biệt!";
        }else if(passWordConfirm.value.trim() != passWord.value.trim()){
            document.getElementById('notification-passwordConfirm').innerHTML = "Mật khẩu nhập lại không trùng khớp!";
        }
        else {
            document.getElementById('notification-passwordConfirm').innerHTML = "";
            return true;
        }
        return false;
    }




