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
    });

    // 각 메뉴 클릭 시 해당 위치로 이동
    // 썸네일 이미지 클릭 시 배경과 이미지, 화살표 나타남
    // 배경 클릭시 팝업 사라짐
    // 좌우화살표 클릭시 슬라이드 이동됨
});

