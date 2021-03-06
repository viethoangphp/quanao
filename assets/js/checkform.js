function check() {
  var inputTen = document.form1.username;
  var giaTriTen = inputTen.value;
  if (giaTriTen === "") {
    var theP = document.getElementById("thongbao");
    theP.style.display = "block";
    theP.innerHTML = "Hãy nhập vào giá trị";

    return false;
  } else {
    theP.style.display = "none";
    return true;
  }
}
document
  .getElementById("exampleInputPhoneNumber")
  .addEventListener("focusout", checkSdt());

checkSdt = () => {
  var inputTag = document.getElementById("exampleInputPhoneNumber");
  var number = /^[0-9]+$/;
  var theP = document.getElementById("checkInputPhoneNumber");
  if (inputTag.value.match(number)) {
    return true;
  } else {
    theP.innerHTML = "Vui làm nhập sđt đúng";
    return false;
  }
};

function validate() {
  var thePName = document.getElementById("checkInputName");
  var thePEmail = document.getElementById("checkInputEmail1");
  var thePPhoneNumber = document.getElementById("checkInputPhoneNumber");
  var thePAddress = document.getElementById("checkInputAddress");
  var thePPassword1 = document.getElementById("checkInputPassword1");
  var thePPassword2 = document.getElementById("checkInputPassword2");
  var thePCity = document.getElementById("checkGroupSelecCity");
  var thePDistric = document.getElementById("checkGroupSelectDistric");
  var thePWard = document.getElementById("checkGroupSelectWards");
  if (document.myForm.FullName.value == "") {
    thePName.innerHTML = "Vui lòng nhập Họ Tên";
  } else {
    thePName.innerHTML = "";
  }
  if (document.myForm.Email.value == "") {
    thePEmail.innerHTML = "Vui lòng nhập Email";
  } else {
    kiemTraEmailHopLe();
  }
  if (document.myForm.sdt.value == "") {
    thePPhoneNumber.innerHTML = "Vui lòng nhập Sdt";
  } else {
    kiemTraTatCaLaSo();
  }
  if (document.myForm.Address.value == "") {
    thePAddress.innerHTML = "Vui lòng nhập Địa chỉ";
  } else {
    thePAddress.innerHTML = "";
  }
  if (document.myForm.Password1.value == "") {
    thePPassword1.innerHTML = "Vui lòng nhập Mật Khẩu";
  } else {
    kiemMatKhau('exampleInputPassword1','checkInputPassword1');
  }
  if (document.myForm.Password2.value == "") {
    thePPassword2.innerHTML = "Vui lòng Xác Nhận Mật Khẩu";
  } else {
    xacNhanMatKhau('exampleInputPassword1','exampleInputPassword2','checkInputPassword2');
  }
  
  if (document.myForm.SelecCity.value == "") {
    thePCity.innerHTML = "Chọn Tỉnh/TP";
  } else {
    thePCity.innerHTML = "";
  }
  if (document.myForm.SelectDistric.value == "") {
    thePDistric.innerHTML = "Chọn Quận/huyện";
  } else {
    thePDistric.innerHTML = "";
  }
  if (document.myForm.SelectWards.value == "") {
    thePWard.innerHTML = "Chọn Phường/xã";
  } else {
    thePWard.innerHTML = "";
  }
  if (
    document.myForm.FullName.value == "" ||
    document.myForm.Email.value == "" ||
    document.myForm.sdt.value == "" ||
    document.myForm.Address.value == "" ||
    document.myForm.Password1.value == "" ||
    document.myForm.Password2.value == "" ||
    document.myForm.SelecCity.value == "" ||
    document.myForm.SelectDistric.value == ""||
    document.myForm.SelectWards.value == "" ||
    !kiemTraEmailHopLe() ||
    !kiemTraTatCaLaSo() ||
    !xacNhanMatKhau('exampleInputPassword1','exampleInputPassword2','checkInputPassword2') ||
    !kiemMatKhau('exampleInputPassword1','checkInputPassword1')
  ) {
    return false;
  }

  return true;
}
function validateChangePassWord(){
  var theP1 = document.getElementById("checkInputPasswordNew1");
  var theP2 = document.getElementById("checkInputPasswordNew2");
  if (document.myForm.PasswordNew1.value == "") {
    theP1.innerHTML = "Vui lòng nhập Mật Khẩu";
  } else {
    kiemMatKhau('exampleInputPasswordNew1','checkInputPasswordNew1');
  }
  if (document.myForm.PasswordNew2.value == "") {
    theP2.innerHTML = "Vui lòng Xác Nhận Mật Khẩu";
  } else {
    xacNhanMatKhau('exampleInputPasswordNew1','exampleInputPasswordNew2','checkInputPasswordNew2');
  }
  if (
    document.myForm.PasswordNew1.value == "" ||
    document.myForm.PasswordNew2.value == "" ||
    !kiemMatKhau('exampleInputPasswordNew1','checkInputPasswordNew1') ||
    !xacNhanMatKhau('exampleInputPasswordNew1','exampleInputPasswordNew2','checkInputPasswordNew2') 
  ) {
    return false;
  }
  return true;
}
function kiemTraEmailHopLe() {
  var inputTag = document.getElementById("exampleInputEmail1");
  var email = /^([\w\.])+@([a-zA-z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
  var theP = document.getElementById("checkInputEmail1");
  if (inputTag.value.match(email)) {
    theP.innerHTML = "";
    return true;
  } else {
    theP.innerHTML = "Hãy Nhập Email Hợp Lệ";
    return false;
  }
}
function kiemTraTatCaLaSo() {
  var inputTag = document.getElementById("exampleInputPhoneNumber");
  var number = /^(0)+[0-9]+$/;
  var theP = document.getElementById("checkInputPhoneNumber");
  if (inputTag.value.length != 10) {
    theP.innerHTML = "Hãy nhập đủ 10 số";
    return false;
  }
  if (inputTag.value.match(number)) {
    theP.innerHTML = "";
    return true;
  } else {
    theP.innerHTML = "Hãy đúng sdt";
    return false;
  }
}
function xacNhanMatKhau(example1,example2,check) {
  var inputTag1 = document.getElementById(example1).value;
  var inputTag2 = document.getElementById(example2).value;
  var theP2 = document.getElementById(check);
  if (inputTag1 == inputTag2) {
    theP2.innerHTML = "";
    return true;
  } else {
    theP2.innerHTML = "Mật khẩu không trùng";
    return false;
  }
}
function kiemMatKhau(example,check) {
  var inputText = document.getElementById(example).value;
  var theP = document.getElementById(check);

  if (inputText.length < 8 || inputText.length > 16) {
    theP.innerHTML = "Hãy Nhập vào giá trị từ 8 đến 16 ";
    return false;
  } else {
    theP.innerHTML = "";
    return true;
  }
}
