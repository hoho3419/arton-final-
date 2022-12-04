$(document).ready(function(){
/* *************************** h_f fixed ***************************** */  
    let box_heigt = $('.main_banner').height();
    let box_top = $('.main_banner').offset().top + box_heigt;
    // 메인 슬라이드 지나면 나타나게
    $(window).scroll(function(){
        let header_bot = $(window).scrollTop();
        let header_height = $('.header').height();
        if(box_top <= header_bot){
            $('.header').addClass('header_event')
            $("#wrap").css({
                paddingTop: header_height
            })
        }
        else if(box_top >= header_bot){
            $('.header').removeClass('header_event')
            $("#wrap").css({
                paddingTop: 0
            })
        }
    })
/* *************************** 상단 버튼 ***************************** */ 
$(window).scroll(function(){
    // 메인 슬라이드 지나면 나타나게
    if ($(this).scrollTop() > 630){
        $('.btn_gotop').css({display: 'block'});
    } 
    else{
        $('.btn_gotop').css({display: 'none'});
    }
});
$('.btn_gotop').click(function(){
    $('html, body').animate({scrollTop:0},400);
});
/* *************************** 메인 슬라이드 ***************************** */     
    let m_banner = $('.main_banner'); 
    let ban = $('.banner');
    let idx = 0; //초기화값
    const timer = 1000;
    let mb_width = m_banner.width(); //전체 가로 크기
    let b_width = mb_width / 3; //한 배너의 가로 크기
    let b_count = ban.length;

// 처음 화면에 3개 띄워주기
    for(let i = 0; i < b_count; i++) {
        ban.eq(i).css({ left: b_width * i });
    }
// 초기에 가운데 이미지 커지게
$('.banner >a> img').eq(1).prop('class','on');
     
//오른쪽 버튼 클릭시
    $('.slide_next').click(function () {
        btn_stop() //클릭시 왼/오 버튼 기능 잠시 멈춤
        $('.banner >a> img').removeClass(); 
        $('.banner >a> img').eq((idx+2) % b_count).prop('class','on'); 
        // 버튼 클릭시 -> 2번째 있는 배너가 가운데로 오므로!
        ban.animate({ left: `-=${b_width}` }, timer, 'linear');
      

        // 배너섹션밖으로 나간배너를 끝으로 이동
        ban.eq(idx % b_count).animate({
            left: mb_width+b_width
        }, 0); 
        idx += 1;
    })
//왼쪽 버튼 클릭시 
    $('.slide_prev').click(function () {
        btn_stop()
        $('.banner >a> img').removeClass();
        $('.banner >a> img').eq(idx % b_count).prop('class','on');
        idx -= 1;
        //클릭시(왼쪽에서) 들어와야할 배너 잡아주기
        ban.eq(idx % b_count).animate({
            left: -b_width
        },0)
        ban.animate({ left: `+=${b_width}` }, timer, 'linear');
        console.log("왼 버튼:"+idx);
    })

    // 오른쪽 버튼 누른거처럼 돌아가게 
    let main_interval ="";
    function main_auto_slide(){
        main_interval = setInterval(function(){
            $('.slide_next').trigger('click')
        },timer+1000)
    }
    //호버시 멈춤
    m_banner.hover(function(){
        clearInterval(main_interval);
    },function(){
        main_auto_slide();
    })
    main_auto_slide();

    //버튼막는 함수
    function btn_stop(){
        $('.slide').css({pointerEvents : 'none'});
        setTimeout(() => {
            $('.slide').css({pointerEvents: 'auto'})
        }, timer);
    }
/* *************************** 탭 fade-in/out ***************************** */       
    const f_timer = 500;
    // 초기화
    $('.w_a_txtbox').eq(0).css({display: 'block'});
    $('.w_a_img').eq(0).css({ display: 'block' });

    $('.per_title_item').click(function () {
         click($(this).index());
         count=($(this).index()+1)%4; //1
        // w_idx($(this).index());
    })
    

    // //첫번째 'rgb(48 68 56)'
    // //두번쨰 #4a1714;
    // //세번째 'rgb(245 131 87)'
    // //네번째 'rgb(11 46 93)'

    function click(f_idx) {
 
        f_btn_stop(); //버튼 막기
         //클릭해서 fn 돌면 -> fadeout으로 초기화
        $('.w_a_txtbox').css({ zIndex: 1 }).fadeOut(f_timer);
        $('.w_a_img').css({ zIndex: 1 }).fadeOut(f_timer);

        $('.w_a_txtbox').eq(f_idx).css({ zIndex: 99 }).delay(f_timer).fadeIn(f_timer);
        $('.w_a_img').eq(f_idx).css({ zIndex: 99 }).delay(f_timer).fadeIn(f_timer);


        
        if (f_idx == 0) {
            color_chg('rgb(48 68 56)');
        }
        if (f_idx == 1) {
            color_chg('#4a1714');
        }
        if (f_idx == 2) {
            color_chg('rgb(245 131 87)');
        }
        if (f_idx == 3) {
            color_chg('rgb(11 46 93)');
        }
        
    }
    function color_chg(color) {

        /*원래방식*/ 
        $('.what_about_body').css({
            zIndex: 99,
            backgroundColor: color
        }).fadeIn(f_timer);

    }

    let count = 1; 
    function auto_slide(){
        interval = setInterval(function(){
            click(count % 4);
            count++;
        },f_timer+2000); 
    }
    auto_slide();

    $('.what_about_body').hover(function(){
        clearInterval(interval);
    },function(){
        auto_slide()
    });

    //버튼막는 함수
    function f_btn_stop(){
        $('.per_title_item').css({pointerEvents : 'none'});
        setTimeout(() => {
            $('.per_title_item').css({pointerEvents: 'auto'})
        }, timer);
    }
})


