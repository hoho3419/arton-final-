$(document).ready(function(){
/*순서
1. 필수동의(2개)가 체크되어야 버튼 활성화(현재는 disabled)
    하나라도 체크 안되어있으면 alert("개인정보 수집 및 이용에 대한 안내 모두 동의해주세요.")
2. 취소 버튼 누르면 초기화 되어야함

*/

    
$('#terms_btn_agr').click(function(){
const btn_agr = $('#terms_btn_agr');
const terms_service = $('#terms_service');
const terms_privacy = $('#terms_privacy');

    if(!terms_service.is(':checked') || !terms_privacy.is(':checked')){
        alert("개인정보 수집 및 이용에 대한 안내 모두 동의해주세요.")
        return;
    }
    else{
        btn_agr.attr('type','submit');
    }
});

$('#terms_btn_can').click(function(){
    window.location.reload();
});
});
