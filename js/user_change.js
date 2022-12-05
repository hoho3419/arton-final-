$(document).ready(function () {

    // (?=.*) 내의 조건은 반드시 필요
    // [] 내의 조건은 선택적 조건
    // {} 내의 조건은 최소, 최대길이

});

const reg_name = /^[가-힣a-zA-Z]+$/; // 한글, 영문만
const reg_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/; //@와 . 사이에는 영어가 최소 한개이상 포함
const reg_phone = /^[0-9]{11,}$/; //11자리 이상 숫자만
// 성별은 required html에 걸어둠!

let u_new_name = $('#u_new_name');
let new_email = $('#new_email');
let u_new_phone = $('#u_new_phone');


function focus_chk(type) {

    if (type == "u_new_name") {
       
        remove_msg('u_new_name');
        remove_msg('new_email');
        remove_msg('u_new_phone');
        blank_chk($('#u_msg_new_name'), $('#u_new_name'))

        if (!reg_email.test(new_email.val())) {
            set_message('올바른 이메일의 형식이 아닙니다', 'new_email')
        }
        blank_chk($('#u_msg_new_email'), $('#new_email'));
        
        if (!reg_phone.test(u_new_phone.val())) {
            set_message('올바른 전화번호의 형식이 아닙니다','new_phone')
        }
        blank_chk($('#u_msg_new_phone'),$('#u_new_phone'));
    }

    if (type == "new_email") {
       
        remove_msg('u_new_name');
        remove_msg('u_new_phone');

        if (!reg_name.test(u_new_name.val())) {
            set_message('이름은 한글 또는 영문만 입력할 수 있습니다.', 'new_name')
        }
        blank_chk($('#u_msg_new_name'), $('#u_new_name'));
        
        if (!reg_phone.test(u_new_phone.val())) {
            set_message('올바른 전화번호의 형식이 아닙니다','new_phone')
        }
        blank_chk($('#u_msg_new_phone'),$('#u_new_phone'));
    }
    else if (type == "u_new_phone") {
        
        remove_msg('u_new_name');
        remove_msg('new_email');
        
        if (!reg_name.test(u_new_name.val())) {
            set_message('이름은 한글 또는 영문만 입력할 수 있습니다.', 'new_name')
        }
        blank_chk($('#u_msg_new_name'), $('#u_new_name'))
        if (!reg_email.test(new_email.val())) {
            set_message('올바른 이메일의 형식이 아닙니다', 'new_email')
        }
        blank_chk($('#u_msg_new_email'), $('#new_email'));
    }
    
}
function remove_msg(el){
    //각 조건이 일치하면 그에 해당하는 메세지가 지워짐
    
    if(el == 'u_new_name'){
        if (reg_name.test(u_new_name.val())) {
            $('#u_msg_new_name').text("");
        }
    }
    if(el == 'new_email'){
        if (reg_email.test(new_email.val())) {
            $('#u_msg_new_email').text("");
        }
    }
    if(el == 'u_new_phone'){
        if (reg_phone.test(u_new_phone.val())) {
            $('#u_msg_new_phone').text("");
        }
    }
}
function blank_chk(msg, txt) {
    if (txt.val().length == 0) {
        msg.text("필수 입력 항목입니다")
    }
}
function set_message(msg, val) {
    $('#u_msg_' + val).text(""); //msg 넣어주기 위함
    $('#u_msg_' + val).text(msg); //msg 넣어주기 위함
}

function form_chk(frm) {
    //아이디 유효성 체크
    if (!reg_name.test(frm.u_new_name.value)) {
        // blank_chk($('#u_msg_new_name'),$('#u_new_name'));
        set_form_message('이름은 한글 또는 영문만 입력할 수 있습니다.', frm.u_new_name, 'new_name')
        console.log(frm.u_new_name.value);
        return false;
    }
    if (!reg_email.test(frm.new_email.value)) {
        set_form_message('올바른 이메일의 형식이 아닙니다', frm.new_email, 'new_email')
        console.log(frm.new_email.value);
        return false;
    }
    if (!reg_phone.test(frm.u_new_phone.value)) {
        
        set_form_message('올바른 전화번호의 형식이 아닙니다', frm.u_new_phone, 'new_phone')
        console.log(frm.u_new_phone.value);
        return false;
    }
    if (!frm.agree.checked && !frm.disagree.checked) {    
        alert("광고 수신동의/거부를 선택해주세요");
        return false;
    }
    else {
        alert("회원정보 수정이 완료되었습니다");
    }
}

function set_form_message(msg, e, val) {
    $('#u_msg_' + val).text(""); //msg 넣어주기 위함
    $('#u_msg_' + val).text(msg); //msg 넣어주기 위함

    if (e) {
        //해당 요소로 focus
        e.select();
    }
}

