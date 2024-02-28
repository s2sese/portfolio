$(function () {
    // 화살표 버튼 스크롤 500px 도달시 나타남
    $(window).scroll(() => {
        // .scrollTop() - 세로 스크롤 된 컨테이너의 위치 반환
        // 500보다 크지 않으면 fadeOut() - 사라짐
        if ($(this).scrollTop() > 500) {
            $(".btn_top").fadeIn();
        } else {
            $(".btn_top").fadeOut();
        }
    });

    // 로고와 화살표 버튼 클릭 시 최상단
    $(".logo, .btn_top").click(() => {
        $("html,body").animate({ scrollTop : 0 }, 400);
    });

    // 스크롤 이동 시 메뉴와 라인 색 변경
    $(window).scroll(() => {
        const height = $(document).scrollTop();
        $(".header_main>ul>li").removeClass("active");
        if (height <= 1300) { // 0~1300px 사이일 때 색 나옴
            $(".header_main>ul>li:nth-child(1)").addClass("active");
        } else if (height <= 4500) { // 1301~4500px 사이일 때 색 나옴
            $(".header_main>ul>li:nth-child(2)").addClass("active");
        } else {// 4501px 이상일 때 색 나옴
            $(".header_main>ul>li:nth-child(3)").addClass("active");
        }
        // 최상단 왔을 때 메뉴 색 해제
        if (height === 0) {
            $(".header_main>ul>li").removeClass("active");
        }
    });

    // 각 메뉴 클릭 시 해당 위치로 이동
    // .position(); - 선택한 요소의 위치 가져옴
    $(".header_main>ul>li:nth-child(1)").on("click",()=>{
        let about = $("#skill").position();
        $("html,body").animate({
            scrollTop:about.top - 80
        },400);
        // 전체메뉴 active 삭제
        // 클릭이 일어난 this에만 active 추가
        $(".header_main>ul>li").removeClass("active");
        $(this).addClass("active");
    });

    // portfolio 클릭 시 해당 위치로 이동
    $(".header_main>ul>li:nth-child(2)").on("click", () => {
        let  portfolio = $("#portfolio").offset().top; //
        // .offset() - #portfolio를 픽셀단위로 위치값 반환
        $("html,body").animate({
            scrollTop:portfolio
        }, 400);
        $(".header_main>ul>li").removeClass("active");
        $(this).addClass("active");
    });
    // etc 클릭시 해당 위치로 이동
    $(".header_main>ul>li:nth-child(3)").on("click",() => {
        let etc = $("#etc").position();
        $("html,body").animate({
            scrollTop: etc.top - 40
        }, 400);
        $(".header_main>ul>li").removeClass("active");
        $(this).addClass("active");
    });
    // 썸네일 이미지 클릭 시 배경과 이미지, 화살표 나타남
    $(".etc_1").on("click", () => $(".bg, .popup1, .popup1>button").fadeIn());
    // 좌우화살표 클릭시 슬라이드 이동됨
    // 이미지에 마우스가 들어왔을 때 버튼 나타남
    $(".popup1").mouseenter(() => $(".popup1>button").fadeIn());
    // 이미지에서 마우스가 벗어날 때 버튼 사라짐
    $(".popup1").mouseleave(() => $(".popup1>button").fadeOut());

    // popup1 이미지 클릭 시 팝업창 사라짐
    // history.go(0) 메서드 - 새로고침(현재 페이지 다시 로드)
    $(".popup1>.popList>.popImg").on("click", () => $(".bg, .popup1, .popup>button").fadeOut(() => history.go(0)));

    // 배경 클릭시 팝업 사라짐
    $(".bg").on("click", () => $(".bg, .popup1, .popup>button").fadeOut(() => history.go(0)));
});