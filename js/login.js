$(document).ready(function(){

});
let login_msg = $('.login_msg');
function form_chk(frm){
    const reg_id = /^[a-z0-9_-]{5,20}$/;
    const reg_pw = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{8,16}/; 
    if(!reg_pw.test(frm.pw.value) && !reg_id.test(frm.id.value)){
        set_message('아이디 또는 패스워드가 맞지 않는 형식입니다.',frm.id);
        return false;
    }
    else if(frm.id.value.length == 0){
        set_message('id를 입력해주세요',frm.id);
        return false;
    }
    else if(frm.pw.value.length == 0){
        set_message('pw를 입력해주세요',frm.pw);
        return false;
    }
    return true;
}
//trim 적용하면 좋을듯 (세현의견)
function set_message(msg,e){
    login_msg.text(msg);
    if(e){
         e.select();
    }
}