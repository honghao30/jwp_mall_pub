// 탭
$(document).ready(function () {
    $(".tab-item").click(function () {
        // 부모 요소인 .tab-group 내에서만 검색
        var $tabGroup = $(this).closest('.tab-group');

        // 해당 탭 그룹 내에서만 'active' 클래스 제어
        $tabGroup.find(".tab-item").removeClass("active");
        $(this).addClass("active");

        // 해당 탭 그룹 내에서만 탭 내용 표시/숨김
        var index = $(this).index();
        $tabGroup.find(".tab-pane").hide();
        $tabGroup.find(".tab-pane:eq(" + index + ")").show();
    });

    // 페이지 로드시 각 탭 그룹의 첫 번째 탭 메뉴 항목과 탭 내용을 활성화
    $(".tab-group").each(function () {
        $(this).find(".tab-item:first").addClass("active");
        $(this).find(".tab-pane:first").show();
    });

   
    // 탭 안에 탭 .tab-itme1, .tab-pane1 로 다르게 작업
    
    $(".tab-item1").click(function () {
      // 부모 요소인 .tab-group 내에서만 검색
      var $tabGroup = $(this).closest('.tab-group');

      // 해당 탭 그룹 내에서만 'active' 클래스 제어
      $tabGroup.find(".tab-item1").removeClass("active");
      $(this).addClass("active");

      // 해당 탭 그룹 내에서만 탭 내용 표시/숨김
      var index = $(this).index();
      $tabGroup.find(".tab-pane1").hide();
      $tabGroup.find(".tab-pane1:eq(" + index + ")").show();
  });

  // 페이지 로드시 각 탭 그룹의 첫 번째 탭 메뉴 항목과 탭 내용을 활성화
  $(".tab-group").each(function () {
      $(this).find(".tab-item:first").addClass("active");
      $(this).find(".tab-pane1:first").show();
  });
});

// 카테고리 리스트
$(document).ready(function() {
  // link_wish 클래스가 있는 a 태그를 클릭했을 때
  $(".btn_list").click(function(e) {
    e.preventDefault(); // 기본 클릭 이벤트 방지

    // 클릭된 요소에 active 클래스 추가 및 제거
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active"); // 클릭된 요소에 active 클래스 추가
    }
  });

  // category_list 클래스 안의 a 태그를 클릭했을 때
  $(".category_list a").click(function(e) {
    e.preventDefault(); // 기본 클릭 이벤트 방지
    $(".btn_list").removeClass("active"); // btn_list에서 active 클래스 제거
  });
});

$(document).ready(function () {
  // Click event for .menu-item
  $(".category_list ul li").on("click", function () {
    // Remove 'on' class from all siblings
    $(this).siblings().removeClass("on");
    
    // Toggle 'on' class on the clicked element
    $(this).toggleClass("on");
  });
});

// 고도화

// 레이어팝업
$(document).ready(function(){
  // data-target="btn_close" 속성을 가진 요소 클릭 시 foot_banner_cont 클래스에서 on 클래스 제거
  $(document).on("click", "[data-target='btn_close']", function(){
      $(".foot_banner_cont").removeClass("on");
  });

  // btn_fixed_up 버튼 클릭 시 foot_banner_cont 클래스에 on 클래스 추가
  $(".btn_fixed_up").click(function(){
      $(".foot_banner_cont").addClass("on");
  });
});

// 탑버튼
$(document).ready(function() {
  var lastScrollTop = 0; // 마지막 스크롤 위치를 저장할 변수

  // 'top' 버튼 클릭 시 화면 최상단으로 스크롤
  $('#top').click(function() {
    window.scroll({
       top: 0,
       left: 0,
       behavior: "smooth"
     });
  });

  // 스크롤 위치에 따라 'top' 버튼 표시/숨김
  $(window).scroll(function() {
    var currentScrollTop = $(this).scrollTop();

    // 스크롤 위치가 상위 100 이하인 경우 버튼 숨김
    if (currentScrollTop <= 100) {
      $('#top').fadeOut();
    } else {
      // 스크롤 내리기: 버튼 숨김
      if (currentScrollTop > lastScrollTop) {
        $('#top').fadeOut();
      } else { // 스크롤 올리기: 버튼 보임
        $('#top').fadeIn();
      }
    }

    // 현재 스크롤 위치를 마지막 스크롤 위치로 업데이트
    lastScrollTop = currentScrollTop;
  });
});

// 카테고리 메뉴
$(document).ready(function() {
  $('.categorybox .list > li > a').not('.oneDepth').click(function(e) {
    e.preventDefault();

    // 클릭된 요소의 부모 categorybox를 선택
    var $categoryBox = $(this).closest('.categorybox');

    // 해당 categorybox 내의 모든 링크에서 active 클래스 제거 및 모든 ul을 슬라이드 업
    $categoryBox.find('.list > li > a').removeClass('active');
    $categoryBox.find('.list > li > ul').slideUp();

    // 클릭된 링크에 active 클래스 추가 및 인접한 ul을 슬라이드 다운
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      $(this).next('ul').slideDown();
    }
  });
});


// 예치금 구매 하단 플로팅 버튼
$(document).ready(function(){
  $('.btn_arrow').click(function(){
      $('.order_floating_bottom').toggleClass('active');
  });
});

// 즐겨찾기
$(document).ready(function() {
  // link_wish 클래스가 있는 a 태그를 클릭했을 때
  $(".heart").click(function(e) {
    e.preventDefault(); // 기본 클릭 이벤트 방지

    // 클릭된 요소에 on 클래스 추가 및 제거
    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
    } else {
      $(this).addClass("on"); // 클릭된 요소에 on 클래스 추가
    }
  });
});