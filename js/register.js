$(document).ready(function () {

    // (?=.*) 내의 조건은 반드시 필요
    // [] 내의 조건은 선택적 조건
    // {} 내의 조건은 최소, 최대길이

})
const reg_id = /^[a-z0-9_-]{5,20}$/; // 소문자 , _ - 허용(영어만도 가능) / 5~20자리 // 
const reg_pw = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{8,16}/; // .* => 0회이상 / 숫자8~16자 /영문 대소문자 /최소 1개의 숫자 혹은 특수 문자를 포함해야 함.
const reg_name = /^[가-힣a-zA-Z]+$/; // 한글, 영문만
//만약 한글만으로 고려할 경우, /^[가-힣]+$/
const reg_birth = /^(19[0-9][0-9]|20\d{2})(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/; //숫자로 비교해도 괜찮긴함..!
const reg_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/; //@와 . 사이에는 영어가 최소 한개이상 포함
const reg_phone = /^[0-9]{11,}$/; //11자리 이상 숫자만
// 성별은 required html에 걸어둠!
let id = $('#id');
let pw = $('#pw');
let pw_ag = $('#pw_ag')
let u_name = $('#u_name');
let birth = $('#birth');
let email = $('#email');

function focus_chk(type) {

    if (type == "pw") {
        // 아이디가 조건에 맞을떄
        if (reg_id.test(id.val())) {
            set_message('멋진 아이디네요!', 'id')
        }

        else if (!reg_id.test(id.val())) {
            set_message('5~20자의 영문 소문자, 숫자 또는 특수기호(_),(-) 만 사용 가능합니다.', 'id')
        }
        blank_chk($('#reg_msg_id'), $('#id'))
    }
    else if (type == "pw_ag") {
        remove_msg('pw');
        // id 조건이 일치하지 않을때 -> 메세지 띄우게
        if (!reg_id.test(id.val())) {
            set_message('5~20자의 영문 소문자, 숫자 또는 특수기호(_),(-) 만 사용 가능합니다.', 'id')
        }
        blank_chk($('#reg_msg_id'), $('#id'))
        if (!reg_pw.test(pw.val())) {
            set_message('8~16자 영문 대문자 또는 소문자, 숫자, 특수문자(#?!@$ %^&*-)를 사용하세요.', 'pw')
        }
        else if(pw.val().search(/\s/) != -1){
            set_message('비밀번호에는 공백이 들어갈 수 없습니다.', 'pw')
        }

        blank_chk($('#reg_msg_pw'), $('#pw'))
    }
    else if (type == "u_name") {
        remove_msg('pw');
        remove_msg('pw_ag');
        if (!reg_id.test(id.val())) {
            set_message('5~20자의 영문 소문자, 숫자 또는 특수기호(_),(-) 만 사용 가능합니다.', 'id')
        }
        blank_chk($('#reg_msg_id'), $('#id'))
        if (!reg_pw.test(pw.val())) {
            set_message('8~16자 영문 대문자 또는 소문자, 숫자, 특수문자(#?!@$ %^&*-)를 사용하세요.', 'pw')
        }
        else if(pw.val().search(/\s/) != -1){
            set_message('비밀번호에는 공백이 들어갈 수 없습니다.', 'pw')
        }
        blank_chk($('#reg_msg_pw'), $('#pw'))
        if (pw.val() != pw_ag.val()) {
            set_message('동일한 비밀번호를 사용해주세요', 'pw_ag')
        }
        blank_chk($('#reg_msg_pw_ag'), $('#pw_ag'))
    }
    else if (type == "birth") {
        remove_msg('pw');
        remove_msg('pw_ag');
        remove_msg('u_name');
        if (!reg_id.test(id.val())) {
            set_message('5~20자의 영문 소문자, 숫자 또는 특수기호(_),(-) 만 사용 가능합니다.', 'id')
        }
        blank_chk($('#reg_msg_id'), $('#id'))
        if (!reg_pw.test(pw.val())) {
            set_message('8~16자 영문 대문자 또는 소문자, 숫자, 특수문자(#?!@$ %^&*-)를 사용하세요.', 'pw')
        }
        blank_chk($('#reg_msg_pw'), $('#pw'))
        if (pw.val() != pw_ag.val()) {
            set_message('동일한 비밀번호를 사용해주세요', 'pw_ag')
        }
        blank_chk($('#reg_msg_pw_ag'), $('#pw_ag'))
        if (!reg_name.test(u_name.val())) {
            set_message('이름은 한글 또는 영문만 입력할 수 있습니다.', 'u_name')
        }
        blank_chk($('#reg_msg_u_name'), $('#u_name'))
    }
    else if (type == "email") {
        remove_msg('pw');
        remove_msg('pw_ag');
        remove_msg('u_name');
        remove_msg('birth');
        if (!reg_id.test(id.val())) {
            set_message('5~20자의 영문 소문자, 숫자 또는 특수기호(_),(-) 만 사용 가능합니다.', 'id')
        }
        blank_chk($('#reg_msg_id'), $('#id'))
        if (!reg_pw.test(pw.val())) {
            set_message('8~16자 영문 대문자 또는 소문자, 숫자, 특수문자(#?!@$ %^&*-)를 사용하세요.', 'pw')
        }
        blank_chk($('#reg_msg_pw'), $('#pw'))
        if (pw.val() != pw_ag.val()) {
            set_message('동일한 비밀번호를 사용해주세요', 'pw_ag')
        }
        blank_chk($('#reg_msg_pw_ag'), $('#pw_ag'))
        if (!reg_name.test(u_name.val())) {
            set_message('이름은 한글 또는 영문만 입력할 수 있습니다.', 'u_name')
        }
        blank_chk($('#reg_msg_u_name'), $('#u_name'))
        if (!reg_birth.test(birth.val())) {
            set_message('올바른 생년월일의 형식이 아닙니다', 'birth')
        }
        blank_chk($('#reg_msg_birth'), $('#birth'))
    }
    else if (type == "phone") {
        remove_msg('pw');
        remove_msg('pw_ag');
        remove_msg('u_name');
        remove_msg('birth');
        remove_msg('email');
        //모든 조건이 일치하면 메세지 지우게
        if (!reg_id.test(id.val())) {
            set_message('5~20자의 영문 소문자, 숫자 또는 특수기호(_),(-) 만 사용 가능합니다.', 'id')
        }
        blank_chk($('#reg_msg_id'), $('#id'))
        if (!reg_pw.test(pw.val())) {
            set_message('8~16자 영문 대문자 또는 소문자, 숫자, 특수문자(#?!@$ %^&*-)를 사용하세요.', 'pw')
        }
        blank_chk($('#reg_msg_pw'), $('#pw'))
        if (pw.val() != pw_ag.val()) {
            set_message('동일한 비밀번호를 사용해주세요', 'pw_ag')
        }
        blank_chk($('#reg_msg_pw_ag'), $('#pw_ag'))
        if (!reg_name.test(u_name.val())) {
            set_message('이름은 한글 또는 영문만 입력할 수 있습니다.', 'u_name')
        }
        blank_chk($('#reg_msg_u_name'), $('#u_name'))
        if (!reg_birth.test(birth.val())) {
            set_message('올바른 생년월일의 형식이 아닙니다', 'birth')
        }
        blank_chk($('#reg_msg_birth'), $('#birth'))
        if (!reg_email.test(email.val())) {
            set_message('올바른 이메일의 형식이 아닙니다', 'email')
        }
        blank_chk($('#reg_msg_email'), $('#email'))
    }
}
function remove_msg(el){
    //각 조건이 일치하면 그에 해당하는 메세지가 지워짐
    if(el == 'pw'){
        if (reg_pw.test(pw.val())) {
            $('#reg_msg_pw').text("");
        }
    }
   else if(el == 'pw_ag'){
        if (pw.val() == pw_ag.val()) {
            $('#reg_msg_pw_ag').text("");
        }
    }
   else if(el == 'u_name'){
        if (reg_name.test(u_name.val())) {
            $('#reg_msg_u_name').text("");
        }
    }
   else if(el == 'birth'){
        if (reg_birth.test(birth.val())) {
            $('#reg_msg_birth').text("");
        }
    }
   else if(el == 'email'){
        if (reg_email.test(email.val())) {
            $('#reg_msg_email').text("");
        }
    }

}
function blank_chk(msg, txt) {
    if (txt.val().length == 0) {
        msg.text("필수 입력 항목입니다")
    }
}
function set_message(msg, val) {
    $('#reg_msg_' + val).text(""); //msg 넣어주기 위함
    $('#reg_msg_' + val).text(msg); //msg 넣어주기 위함
}

function form_chk(frm) {

    //아이디 유효성 체크
    if (!reg_id.test(frm.id.value)) {
        set_form_message('5~20자의 영문 소문자, 숫자 또는 특수기호(_),(-) 만 사용 가능합니다.', frm.id, 'id')
        return false;
    }
    if (!reg_pw.test(frm.pw.value)) {
        set_form_message('8~16자 영문 대문자 또는 소문자, 숫자, 특수문자(#?!@$ %^&*-)를 사용하세요.', frm.pw, 'pw')
        return false;
    }
    if(frm.pw.value.search(/\s/) != -1){
        set_form_message('비밀번호에는 공백이 들어갈 수 없습니다.', frm.pw, 'pw')
        return false;
    }
    if(frm.pw.value.search(/\s/) != -1){
        set_form_message('비밀번호에는 공백이 들어갈 수 없습니다.', frm.pw, 'pw')
        return false;
    }
    if ((frm.pw_ag.value != frm.pw.value)) {
        set_form_message('동일한 비밀번호를 사용해주세요', frm.pw_ag, 'pw_ag')
        return false;
    }
    if (!reg_name.test(frm.u_name.value)) {
        set_form_message('이름은 한글 또는 영문만 입력할 수 있습니다.', frm.u_name, 'u_name')
        return false;
    }
    if (!reg_birth.test(frm.birth.value)) {
        set_form_message('올바른 생년월일의 형식이 아닙니다', frm.birth, 'birth')
        return false;
    }
    if (!reg_email.test(frm.email.value)) {
        set_form_message('올바른 이메일의 형식이 아닙니다', frm.email, 'email')
        return false;
    }
    if (!reg_phone.test(frm.phone.value)) {
        set_form_message('올바른 전화번호의 형식이 아닙니다', frm.phone, 'phone')
        return false;
    }
    if (!frm.promo_btn.checked) {
        frm.promo_btn.value = "false";
        frm.promo_btn.checked = true;
        alert("회원가입이 완료되었습니다");
        return true;
    }
    else {
        frm.promo_btn.value = "true";
        alert("회원가입이 완료되었습니다");
        return true;
    }
}

function set_form_message(msg, e, val) {
    $('#reg_msg_' + val).text(""); //msg 넣어주기 위함
    $('#reg_msg_' + val).text(msg); //msg 넣어주기 위함

    if (e) {
        //해당 요소로 focus
        e.select();

    }

}

