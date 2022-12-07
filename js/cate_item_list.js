const ITEM_LIST = [
    // concert
    [
        {title: '짙은 콘서트[짙은, 겨울]', place: '‹코엑스 컨퍼런스룸 401호›' ,desc: '“겨울, 포근함은 여기야…”' , src: './img/concert/concert_1.jpg'}, 
        {title: 'MOONCHILD Live In Seoul w/ Special Guest : KIEFER [문차일드 서울라이브공연 / 특별초청재즈음악인 : 키퍼]', place: '‹왓챠홀 WATCHA HALL›' ,desc: '“꿈결같은 잔잔함, 배게같은 포근함”', src: './img/concert/concert_2.jpg'}, 
        {title: '프렙 내한공연 [PREP LIVE IN SEOUL]', place: '‹YES24 LIVE HALL›' ,desc: '“시티팝의 선두주자, 프렙의 등장. 웅장한 여러분의 마음”' , src: './img/concert/concert_3.jpg'}, 
        {title: '2022 신지훈 단독 콘서트 ‘Winter Neverland', place: '‹노들섬 라이브하우스›' ,desc: '“요정이 왜 여기에? 천상의 목소리, 신지훈”' , src: './img/concert/concert_4.jpg'}, 
        {title: '2022 Wave to Earth 단독공연 [floral field 0.2]', place: '‹노들섬 라이브하우스›' ,desc: '"언젠가 그들은 새로운 흐름, 웨이브 투 어스”' , src: './img/concert/concert_5.jpg'}, 
        {title: 'TAHITI80 LIVE IN SEOUL 2022', place: '‹왓챠홀 WATCHA HALL›' ,desc: '“나…왜 이노래 알아? 나 타히티 80 이미 아네..”' , src: './img/concert/concert_6.jpg'}, 
        {title: 'FKJ LIVE IN SEOUL', place: '‹KBS아레나 (구88체육관)›' ,desc: '“즉흥적인 리듬 메이킹? 낭만? FKJ 그들에게서 찾자…”' , src: './img/concert/concert_7.jpg'}, 
        {title: 'MY AUNT MARY 단독공연 [SAME SAME but DIFFERENT 2022]', place: '‹왓챠홀 WATCHA HALL›' ,desc: '“당신을 향한 노래, 인디음악은 마이 앤트 메리…!”' , src: './img/concert/concert_8.jpg'}, 

    ]
    ,
    // musical
    [ 
        {title: '뮤지컬 [비더슈탄트]', place: '‹대학로 드림아트센터 3관›' ,desc: '“우리의 맹세, 이 칼 앞에 , 우린 비더슈탄트 앞에,”' , src: './img/musical/musical_1.jpg'}, 
        {title: '뮤지컬 [알로하, 나의 엄마들]', place: '‹세종문화회관›' ,desc: '“세 여성이 펼쳐내는, 인생의 파도같은 이야기”', src: './img/musical/musical_2.jpg'}, 
        {title: '[광주] 락 뮤지컬 [프리즌]', place: '‹광주 5.18 기념문화센터 민주홀›' ,desc: '“락밴드 연습생들,, 감옥에 가다,,,?”' , src: './img/musical/musical_3.jpg'}, 
        {title: '2022 뮤지컬 [미드나잇 : 액터뮤지션]', place: '‹예그린 씨어터›' ,desc: '“그날밤, 누군가 찾아왔다… 비지터가 누구지? 당신은 누구지?”' , src: './img/musical/musical_4.jpg'}, 
        {title: '뮤지컬 [빨래]', place: '‹대학로 유니플렉스 2관›' ,desc: '“어둡고 막막한 시간, 오늘을 살아가는 당신을 위한 이야기”' , src: './img/musical/musical_5.jpg'}, 
        {title: '뮤지컬 [쓰릴 미]', place: '‹충무아트센터 중극장 블랙›' ,desc: '“누가 누구를 조종하는가? 당신의 진짜 모습은 무엇인가?”' , src: './img/musical/musical_6.jpg'}, 
        {title: '뮤지컬 [차미]', place: '‹플러스씨어터›' ,desc: ' “모두의 워너비, 그녀와 함께 힐링코미디 차미가 돌아왔다”' , src: './img/musical/musical_7.jpg'}, 
        {title: '뮤지컬 [렛미플라이]', place: '‹예스24스테이지 1관›' ,desc: '“꿈과 사랑, 그리고 시간여행, 당신과 함께 손잡고 떠나고싶어요”' , src: './img/musical/musical_8.jpg'}, 
    ],

    // play
    [
        {title: '연극 [플레이백]', place: '‹꿈빛극장›' ,desc: '“제…. 기억을 ….(지워)주세요….”' , src: './img/play/play_1.jpg'}, 
        {title: '연극 [리차드3세]', place: '‹예술의전당 CJ 토월극장›' ,desc: '“매력적인 배우 황정민, 권력을 쥐는 법이 알고싶으세요?”', src: './img/play/play_2.jpg'}, 
        {title: '[대구] 연극 [그남자 그여자]', place: '‹대구 여우별아트홀›' ,desc: '“당신의 연애세포, 여기서 깨우세요!”' , src: './img/play/play_3.jpg'}, 
        {title: '연극 [고양이라서 괜찮아]', place: '‹씨어터 쿰›' ,desc: '“털달린 동물,, 고앵이,, 다 괜찮아”' , src: './img/play/play_4.jpg'}, 
        {title: '연극 [한뼘사이]', place: '‹라온아트홀›' ,desc: '"날 좋아하는건가? 아닌가? 썸이 헷갈리신다면…!”' , src: './img/play/play_5.jpg'}, 
        {title: '[미소티켓] 연극 [옥탑방 고양이]', place: '‹대학로 틴틴홀›' ,desc: '“이중계약으로 시작된 뽈인…럽…!”' , src: './img/play/play_6.jpg'}, 
        {title: '연극 시간을 파는 상점', place: '‹파랑씨어터›' ,desc: '“청소년 권장도서…! 자녀와 함께 파헤치는 시간의 소중함…!”' , src: './img/play/play_7.jpg'}, 
        {title: '2021 연극만원 시리즈 Ⅲ [렁스]: 성남아트센터', place: '‹성남아트센터 앙상블시어터›' ,desc: '“좋은사람이 되는법…..! 여기 있어요…!”' , src: './img/play/play_8.jpg'}, 
]
]   