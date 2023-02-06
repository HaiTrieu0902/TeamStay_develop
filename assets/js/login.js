

//Kiểm tra bạn đã nhập email, mật khẩu hay chưa
//Đối tượng validator

 /* function Validator(options) { //Option chỉ định đến form
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }


    var selectorRules = {};
    //Hàm thực hiện validate
    function Validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMes;

        //Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        //Lặp qua từng rule và kiểm tra
        //Nếu có lỗi thì dừng việc kiểm tra
        for (var i = 0; i < rules.length; ++i) {
            errorMes = rules[i](inputElement.value);
            if (errorMes) break;
        }

        if (errorMes) {
            errorElement.innerText = errorMes;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }


        return !errorMes;
    }
    var formElement = document.querySelector(options.form);

    if (formElement) {
        formElement.onsubmit = function(e) {
            e.preventDefault();

            var isFormValid = true;


            //Lặp qua từng rules và validate
            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = Validate(inputElement, rule);

                if (!isValid) {
                    isFormValid = false;
                }
            });

            var enableInputs = formElement.querySelectorAll('[name]');

            var formValues = Array.from(enableInputs).reduce(function(values, input) {
                values[input.name] = input.value;
                return values;
            }, {});


            if (isFormValid) {
                if (typeof options.onsubmit === 'function') {

                    var enableInputs = formElement.querySelectorAll('[name]');

                    var formValues = Array.from(enableInputs).reduce(function(values, input) {
                        return (values[input.name] = input.value) && values;
                    }, {});
                    options.onsubmit(formValues);
                }
            }
        }

        //lặp qua mỗi rule và xử lý
        options.rules.forEach(function(rule) {

            //Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                inputElement.onblur = function() {
                    //Lấy value: inputElement.value
                    //Lấy test func: rule.test
                    Validate(inputElement, rule);


                }

                //Xử lý mỗi khi người dùng nhập input
                inputElement.oninput = function() {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            }
        })
    }
}




//Định nghĩa các rules: Ktra đã nhập email hay mật khẩu chưa
Validator.isRequired = function(selector, obj) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : `Vui lòng nhập ${obj}`
        }
    };
}

//Định nghĩa các rules: Ktra có nhập đúng Email ko
Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Bạn cần nhập Email hợp lệ';
        }
    };
}

//Định nghĩa rules độ dài
Validator.minLength = function(selector, min) {
        return {
            selector: selector,
            test: function(value) {
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`
            }
        };
    }
    //Định nghĩa rules kiểm tra nhập lại mật khẩu có đúng không
Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'
        }
    }
} */


// Chuyển ảnh   

    
window.onload = () => {
    const valueHeadingLogin =  document.getElementById('container-account-heading');
    const locationContain = document.querySelector('.header-location');
    const headerLogo = document.querySelector('.header-logo_link');
    const headerLogoImg = document.querySelector('.header-logo_link img');
    console.log(valueHeadingLogin.innerHTML.trim()); 
    if( valueHeadingLogin.innerHTML.trim()=="Đăng nhập" || valueHeadingLogin.innerHTML.trim()=="Đăng ký thành viên") {
        locationContain.style.display="none";

        headerLogo.classList.remove('header-logo_link');
        headerLogo.classList.add('header-logo_link_login');

        headerLogoImg.src = './assets/img/logoTemaStay.png';
        headerLogo.parentElement.classList.add('header-logo-change') 
    }
}




// Form not Validator rules
const email = document.getElementById('email');
const passWord = document.getElementById('password');
const sdt = document.getElementById('phone');
const userName = document.getElementById('full_name');
const passWordConfirm = document.getElementById('confirm-password');
function checkMail() {
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

function checkPassword() {
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

function checkSDT() {
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

function checkTen() {
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

function checkPasswordConfirm() {
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
    // check trùng mật khẩu
} 

//check tổng
function checkData() {

    if(btnSubmit.value =="Đăng Nhập") {
        checkMail();
        checkPassword();
        return checkMail() && checkPassword();
    }
    else
    {
        checkMail();
        checkPassword();
        checkSDT();
        checkTen();
        checkPasswordConfirm();
        return checkMail() && checkPassword() && checkSDT() && checkTen() && checkPasswordConfirm(); 
    }
} 

// onsubmit
const btnSubmit = document.getElementById('account-form__submit');
btnSubmit.onclick = function() {
    checkData();
}


// blur
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


