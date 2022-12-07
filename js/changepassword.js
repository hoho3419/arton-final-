$(document).ready(function () {

/*필요한 조건 : 
- 현재 비밀번호가 공백이면 안됨(백에서 데이터 비교하는 조건 필요)
    아예 입력 안하고 넘길시 -> '비밀번호를 입력하세요'라는 메세지 사용(onsubmit)
1. 새 비밀번호 : onfocus(현재비밀번호 공백체크)
2. 새 비밀번호 확인 : onfocus(새 비밀번호에 정규식 걸고, 중간공백사용 조건 , 공백 체크 )
3. onsubmit(새 비밀번호정규식 / 중간공백사용 , 새 비밀번호 != 새 비밀번호 확인 조건)
+ pw_focus_chk에 조건 맞으면 지워주는 remove_msg 필요
4. 취소 누를시 새로고침

*/
$('#ch_btn_can').click(function(){
    window.location.reload();
});

}) 
const reg_pw = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{8,16}/;
let pw = $('#pw');
let new_pw = $('#new_pw');
let chk_pw = $('#chk_pw');

function pw_focus_chk(type){
    // 새 비밀번호에 focus일때 현재비밀번호 조건 검사
    if(type == 'new_pw'){
        remove_msg('pw');
        if(!reg_pw.test(pw.val())){
            set_message('8~16자 영문 대문자 또는 소문자, 숫자, 특수문자(#?!@$ %^&*-)를 사용하세요.', 'pw')
        }
        blank_chk($('#cha_msg_pw'), $('#pw'))
    }
    // 새 비밀번호 확인에 focus일때 새 비밀번호 조건 검사
    if(type == 'chk_pw'){
        remove_msg('pw');
        remove_msg('new_pw');
        if(!reg_pw.test(new_pw.val())){
            set_message('8~16자 영문 대문자 또는 소문자, 숫자, 특수문자(#?!@$ %^&*-)를 사용하세요.', 'new_pw')
        }
        blank_chk($('#cha_msg_new_pw'), $('#new_pw'))
    }
}
// 전체 폼이 submit 되기 전 검사(유효성 검사만함 (자동 공백 체크됨))
function pw_form_chk(frm){
    if(!reg_pw.test(frm.pw.value)){
        set_form_message('8~16자 영문 대문자 또는 소문자, 숫자, 특수문자(#?!@$ %^&*-)를 사용하세요.', frm.pw, 'pw')
        return false;
    }
    if(frm.pw.value.search(/\s/) != -1){
        set_form_message('비밀번호에는 공백이 들어갈 수 없습니다.', frm.pw, 'pw')
        return false;
    }
    if(!reg_pw.test(frm.new_pw.value)){
        set_form_message('8~16자 영문 대문자 또는 소문자, 숫자, 특수문자(#?!@$ %^&*-)를 사용하세요.', frm.new_pw, 'new_pw')
        return false;
    }
    if(frm.new_pw.value.search(/\s/) != -1){
        set_form_message('비밀번호에는 공백이 들어갈 수 없습니다.', frm.new_pw, 'new_pw')
        return false;
    }
    if(frm.new_pw.value != frm.chk_pw.value){
        set_form_message('동일한 비밀번호를 사용해주세요', frm.chk_pw, 'chk_pw')
        return false;
    }

    alert("회원가입이 완료되었습니다");
    return true;
}
function remove_msg(el){
    if(el == 'pw'){
        if(reg_pw.test(pw.val())){
            $('#cha_msg_pw').text("");
        }
    }
    else if(el == 'new_pw'){
        if(reg_pw.test(new_pw.val())){
            $('#cha_msg_new_pw').text("");
        }
    }
    else if(el == 'chk_pw'){
        if(reg_pw.test(chk_pw.val())){
            $('#cha_msg_chk_pw').text("");
        }
    }
}
function blank_chk(msg, txt) {
    if (txt.val().length == 0) {
        msg.text("필수 입력 항목입니다")
    }
}
function set_message(msg, val) {
    $('#cha_msg_' + val).text(""); //msg 넣어주기 위함
    $('#cha_msg_' + val).text(msg); //msg 넣어주기 위함
}
function set_form_message(msg, e, val) {
    $('#cha_msg_' + val).text(""); //msg 넣어주기 위함
    $('#cha_msg_' + val).text(msg); //msg 넣어주기 위함

    if (e) {
        //해당 요소로 focus
        e.select();

    }

}