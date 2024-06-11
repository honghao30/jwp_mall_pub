
// 탭
// $(document).ready(function () {
//     $(".tab-item").click(function () {
//         // 부모 요소인 .tab-group 내에서만 검색
//         var $tabGroup = $(this).closest('.tab-group');

//         // 해당 탭 그룹 내에서만 'active' 클래스 제어
//         $tabGroup.find(".tab-item").removeClass("active");
//         $(this).addClass("active");

//         // 해당 탭 그룹 내에서만 탭 내용 표시/숨김
//         var index = $(this).index();
//         $tabGroup.find(".tab-pane").hide();
//         $tabGroup.find(".tab-pane:eq(" + index + ")").show();
//     });

//     // 페이지 로드시 각 탭 그룹의 첫 번째 탭 메뉴 항목과 탭 내용을 활성화
//     $(".tab-group").each(function () {
//         $(this).find(".tab-item:first").addClass("active");
//         $(this).find(".tab-pane:first").show();
//     });
// });

//javascript
function openWindowPop(url, name){
    var options = 'top=10, left=10, width=500, height=555, status=no, menubar=no, toolbar=no, resizable=no';
    window.open(url, name, options);
}

// 탭
$(document).ready(function() {
    $(".input_btn_area button").on("click", function() {
      $(".input_btn_area button").removeClass("on"); // input_btn_area 버튼에서 on 클래스 제거
      $(this).addClass("on"); // 클릭한 버튼에 on 클래스 추가
    });
  
    $(".table_btn_area button").on("click", function() {
      $(this).parent().find("button").removeClass("on"); // table_btn_area 안에서 버튼들의 on 클래스 제거
      $(this).addClass("on"); // 클릭한 버튼에 on 클래스 추가
    });
});

// 모달 레이어
function modalControl(type,id,size){ //type:열기(o),닫기(c) / id: 열 모달의 id / size: 모달 가로 사이즈
	var $html = $("html");
	if(type == "o"){ //모달 열기
	  $html.addClass("modal-open");//모달오픈 시 뒤의 스크롤이 움직이는 것을 방지
	  $(".modal_new").not(id).removeClass("modal_on");
	  var $modalOn = $(id).addClass("modal_on").on("click", function(e){
		if( $modalOn.hasClass("modal_overlay") && $(".modal_n_wrap").is(e.target) ){ //오버레이 클릭 시 닫기
		  $modalOn.removeClass("modal_on");
		  $html.removeClass("modal-open");
		}
	  });
	} else if(type == "c"){ //모달 닫기
	  $(".modal_new.modal_on").removeClass("modal_on");
	  $html.removeClass("modal-open");
	  // userInfoPop 모달창이 열리기 전에
	}
}

// 메인 레이어 공지 팝업
function imgNotiShow(action) {
  if (action === 'c') {
    $('.img_noti_show').hide(); // 해당 클래스를 감추는 방법을 사용합니다. show()를 사용하면 다시 보일 수 있습니다.
  }
}
// 메인 배너 sub 레이어 닫기
function imgShow(action) {
  if (action === 'c') {
    $('.img_show').hide(); // 해당 클래스를 감추는 방법을 사용합니다. show()를 사용하면 다시 보일 수 있습니다.
  }
}

// tooltip
$(document).ready(function() {
    const button = $('.tooltipBtn');
    const tooltip = $('.tooltip');
    const close = $('.tooltip_cont .close');

    button.on('click', function() {
      // 현재 버튼과 연결된 툴팁만 조작합니다.
      const thisButton = $(this);
      const thisTooltip = thisButton.next('.tooltip');

      // 이미 열려있는 툴팁인지 확인하여 토글 동작을 수행합니다.
      if (thisTooltip.hasClass('on')) {
        thisTooltip.removeClass('on');
      } else {
        // 모든 툴팁을 일단 닫은 후에 클릭한 버튼에 연결된 툴팁만 엽니다.
        tooltip.removeClass('on');
        thisTooltip.addClass('on');
      }
    });

    close.on('click', function() {
      // 현재 닫기 버튼과 연결된 툴팁만 닫습니다.
      const thisTooltip = $(this).closest('.tooltip');
      thisTooltip.removeClass('on');
    });

    $(document).on('click', function(event) {
      // 열려있는 툴팁들 중에서 클릭 이벤트가 발생한 대상이 툴팁이 아니며 버튼도 아닌 경우 닫습니다.
      const openTooltips = $('.tooltip.on');
      if (!openTooltips.is(event.target) && openTooltips.has(event.target).length === 0 &&
          !button.is(event.target)) {
        openTooltips.removeClass('on');
      }
    });
});

// 전체 브라우저 active
// $(document).ready(function () {
//   // Add a scroll event listener
//   $(window).scroll(function () {
//     // Get the current scroll position
//     var currentScroll = $(this).scrollTop();

//     // Check if the scroll position is 11px or more
//     if (currentScroll >= 80) {
//       // Add the active class to #main_new
//       $("#main_new").addClass("active");
//     } else {
//       // Remove the active class from #main_new
//       $("#main_new").removeClass("active");
//     }
//   });
// });

// 카테고리
$(document).ready(function () {
  var $overlay = $(".overlay");
  var $menuContainer = $(".menu-container");
  var $btnCategory = $(".btn_category");

  $btnCategory.click(function () {
    // Toggle the overlay and menu container
    $overlay.toggle();
    $menuContainer.toggleClass("active");

    // Prevent body scrolling when the menu is open
    $("body").toggleClass("no-scroll");
  });

  $overlay.click(function () {
    // Close the menu when clicking on the overlay
    $overlay.hide();
    $menuContainer.removeClass("active");
    $("body").removeClass("no-scroll");
  });
});

// 20231212
// 카테고리 클릭시 on 붙는거 - 삭제
// $(document).ready(function () {
//   // Click event for .menu-item
//   $(".menu-item").on("click", function () {
//     // Remove 'on' class from all siblings
//     $(this).siblings().removeClass("on");
    
//     // Toggle 'on' class on the clicked element
//     $(this).toggleClass("on");
//   });

//   // Click event for the document to close the menu when clicking outside
//   $(document).on("click", function (event) {
//     // Check if the clicked element and its ancestors are not part of the menu
//     if (!$(event.target).closest(".menu-container").length) {
//       // Remove 'on' class from all .menu-item elements
//       $(".menu-item").removeClass("on");
//       // Additional code to close the layer popup
//       // ...
//     }
//   });

// });

// 즐겨찾기
$(document).ready(function() {
  // link_wish 클래스가 있는 a 태그를 클릭했을 때
  $("a.link_wish").click(function(e) {
    e.preventDefault(); // 기본 클릭 이벤트 방지

    // 클릭된 요소에 active 클래스 추가 및 제거
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active"); // 클릭된 요소에 active 클래스 추가
    }
  });
});
// 추천상품 더보기
$(document).ready(function() {
  $('.more_btn').click(function() {
      var $recomendList = $('.recomend_list');

      if ($(this).hasClass('show')) {
          $(this).removeClass('show');
          $recomendList.removeClass('show');
      } else {
          $(this).addClass('show');
          $recomendList.addClass('show');
      }
  });
});
// 이 상품을 찾으셨나요?
$(document).ready(function() {
  // btn arrow를 클릭하면 find_box에 on 클래스 추가
  $('.find_product_cont .btn.arrow').click(function() {
      $('.find_product_cont .find_box').addClass('on');
  });

  // btn_close를 클릭하면 find_box의 on 클래스 제거
  $('.find_product_cont .btn_close').click(function() {
      $('.find_product_cont .find_box').removeClass('on');
  });
});

// 사이드 바 위치 이동
$(document).ready(function() {
  $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      var $leftContArea = $(".left_cont_area");
      var $rightContArea = $(".right_cont_area");
      var sideMenuTop = 80;

      if (scrollTop > sideMenuTop) {
          $leftContArea.addClass("fixed");
          $rightContArea.addClass("fixed");
      } else {
          $leftContArea.removeClass("fixed");
          $rightContArea.removeClass("fixed");
      }

      var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
      var $leftContArea = $(".left_cont_area");
      var $rightContArea = $(".right_cont_area");
      var sideMenuBottom = 200;

      if (scrollBottom < sideMenuBottom) {
        $leftContArea.addClass("fixed-bottom");
        $rightContArea.addClass("fixed-bottom");
      } else {
        $leftContArea.removeClass("fixed-bottom");
        $rightContArea.removeClass("fixed-bottom");
      }
  });
});



// GNB 메뉴 스크립트

// $(document).ready(function() {
//   // Add mouseover event handler to elements with class "more" under menu-container
//   $('.menu-container .more').mouseover(function() {
//     // Get the class of the hovered element
//     var subMenuClass = $(this).attr('class').split(' ')[1];
    
//     // Show the corresponding sub-menu list
//     $('.menu-container .sub_menu_list.' + subMenuClass).addClass('on');
//   });
  
//   // Add mouseout event handler to elements with class "more" under menu-container
//   $('.menu-container .more').mouseout(function() {
//     // Get the class of the hovered element
//     var subMenuClass = $(this).attr('class').split(' ')[1];
    
//     // Hide the corresponding sub-menu list
//     $('.menu-container .sub_menu_list.' + subMenuClass).removeClass('on');
//   });

//   // Add mouseover event handler to .sub_menu
//   $('.menu-container .sub_menu').mouseover(function() {
//     // Add class to .sub_menu when mouse hovers over it
//     $(this).addClass('on');
//     // Add class to corresponding sub_menu_list as well
//     $(this).siblings('.sub_menu_list').addClass('on');
//   });

//   // Add mouseleave event handler to .sub_menu
//   $('.menu-container .sub_menu').mouseleave(function() {
//     // Remove class from .sub_menu when mouse leaves it
//     $(this).removeClass('on');
//     // Remove class from corresponding sub_menu_list as well
//     $(this).siblings('.sub_menu_list').removeClass('on');
//   });

//   // Add mouseover event handler to .sub_menu_list
//   $('.menu-container .sub_menu_list').mouseover(function() {
//     // Add class to .sub_menu when mouse hovers over .sub_menu_list
//     $(this).siblings('.sub_menu').addClass('on');
//     // Add class to .sub_menu_list if .sub_menu_list has class on
//     if ($(this).hasClass('on')) {
//       $(this).addClass('on');
//     }
//   });

//   // Add mouseleave event handler to .sub_menu_list
//   $('.menu-container .sub_menu_list').mouseleave(function() {
//     // Remove class from .sub_menu when mouse leaves .sub_menu_list
//     $(this).siblings('.sub_menu').removeClass('on');
//     // Remove class from .sub_menu_list if .sub_menu_list has class on
//     if ($(this).hasClass('on')) {
//       $(this).removeClass('on');
//     }
//   });
// });


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//원본


// $(document).ready(function() {
//   // Add mouseover event handler to .more inside .menu-item within .menu-container
//   $('.menu-container .menu-item > .more').mouseover(function() {
//     // Remove class 'on' from all sub_menu elements
//     $('.menu-container .sub_menu').removeClass('on');
//     // Add class 'on' to the corresponding sub_menu
//     $(this).closest('.menu-item').find('.sub_menu').addClass('on');
//   });

//   // Add mouseover event handler to .more inside .sub_menu
//   $('.menu-container .sub_menu .more').mouseover(function() {
//     // Remove class 'on' from all sub_menu_list elements
//     $('.menu-container .sub_menu_list').removeClass('on');
//     // Add class 'on' to the corresponding sub_menu_list
//     var subMenuClass = $(this).attr('class').split(' ')[1];
//     $('.menu-container .sub_menu_list.' + subMenuClass).addClass('on');
//   });

//   // Add mouseleave event handler to .sub_menu_list
//   $('.menu-container .sub_menu_list').mouseleave(function() {
//     // Remove class 'on' from the current sub_menu_list
//     $(this).removeClass('on');
//   });

//   // Add mouseleave event handler to .menu-container
//   $('.menu-container').mouseleave(function() {
//     // Remove class 'on' from all sub_menu_list and sub_menu elements
//     $('.menu-container .sub_menu_list, .menu-container .sub_menu').removeClass('on');
//   });

//   // Add mouseover event handler to 'a' tags within .sub_menu
//   $('.menu-container .sub_menu a').mouseover(function() {
//     // Check if the 'a' tag is not the one with class 'more'
//     if (!$(this).hasClass('more')) {
//       // Remove class 'on' from all sub_menu_list elements
//       $('.menu-container .sub_menu_list').removeClass('on');
//     }
//   });
  
//   // Add mouseenter event handler to .menu-container
//   $('.menu-container').mouseenter(function() {
//     // Remove class 'on' from all sub_menu_list elements
//     $('.menu-container .sub_menu_list').removeClass('on');
//   });
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// $(document).ready(function() {
//   // Add mouseover event handler to .more inside .menu-item within .menu-container
//   $('.menu-container .menu-item > .more').mouseover(function() {
//     // Remove class 'on' from all sub_menu elements
//     $('.menu-container .sub_menu').removeClass('on');
//     // Add class 'on' to the corresponding sub_menu
//     $(this).closest('.menu-item').find('.sub_menu').addClass('on');
//     // Add class 'hover' to the more element
//     $(this).addClass('hover');
//   });

//   // Add mouseover event handler to .more inside .sub_menu
//   $('.menu-container .sub_menu .more').mouseover(function() {
//     // Remove class 'on' from all sub_menu_list elements
//     $('.menu-container .sub_menu_list').removeClass('on');
//     // Add class 'on' to the corresponding sub_menu_list
//     var subMenuClass = $(this).attr('class').split(' ')[1];
//     $('.menu-container .sub_menu_list.' + subMenuClass).addClass('on');
//   });

//   // Add mouseleave event handler to .sub_menu_list
//   $('.menu-container .sub_menu_list').mouseleave(function() {
//     // Remove class 'on' from the current sub_menu_list
//     $(this).removeClass('on');
//     // Remove class 'hover' from the more element
//     $('.menu-container .menu-item > .more').removeClass('hover');
//   });

//   // Add mouseleave event handler to .menu-container
//   $('.menu-container').mouseleave(function() {
//     // Remove class 'on' from all sub_menu_list and sub_menu elements
//     $('.menu-container .sub_menu_list, .menu-container .sub_menu').removeClass('on');
//     // Remove class 'hover' from the more element
//     $('.menu-container .menu-item > .more').removeClass('hover');
//   });

//   // Add mouseover event handler to 'a' tags within .sub_menu
//   $('.menu-container .sub_menu a').mouseover(function() {
//     // Check if the 'a' tag is not the one with class 'more'
//     if (!$(this).hasClass('more')) {
//       // Remove class 'on' from all sub_menu_list elements
//       $('.menu-container .sub_menu_list').removeClass('on');
//     }
//   });
  
//   // Add mouseenter event handler to .menu-container
//   $('.menu-container').mouseenter(function() {
//     // Remove class 'on' from all sub_menu_list elements
//     $('.menu-container .sub_menu_list').removeClass('on');
//   });

//   // Add mouseover event handler to .more inside .menu-item within .menu-container
//   $('.menu-container .menu-item > .more').mouseover(function() {
//     // Add class 'hover' to the more element
//     $(this).addClass('hover');
//   });

//   // Add mouseout event handler to .more inside .menu-item within .menu-container
//   $('.menu-container .menu-item > .more').mouseout(function() {
//     // Remove class 'hover' from the more element
//     $(this).removeClass('hover');
//   });
// });





/////////////////////////////////////////////////////////////////////////////////////////////////////////////




$(document).ready(function() {
  // Add mouseenter event handler to .menu-item .more within .menu-container
  $('.menu-container .menu-item > .more').mouseenter(function() {
    // Add class 'on' to the corresponding sub_menu
    $(this).closest('.menu-item').find('.sub_menu').addClass('on');
  });

  // Add mouseleave event handler to .menu-item .more within .menu-container
  $('.menu-container .menu-item > .more').mouseleave(function() {
    // Remove class 'on' from the corresponding sub_menu
    $(this).closest('.menu-item').find('.sub_menu').removeClass('on');
  });

  // Add mouseenter event handler to .sub_menu
  $('.menu-container .sub_menu').mouseenter(function() {
    // Add class 'on' to the corresponding sub_menu
    $(this).addClass('on');
  });

  // Add mouseleave event handler to .sub_menu
  $('.menu-container .sub_menu').mouseleave(function() {
    // Remove class 'on' from the corresponding sub_menu
    $(this).removeClass('on');
  });

  // Add mouseenter event handler to .menu-container
  $('.menu-container').mouseenter(function() {
    // Remove class 'on' from all sub_menu elements
    $('.menu-container .sub_menu').removeClass('on');
  });
});

// 퀵메뉴
$(document).ready(function() {
  // 버튼 클릭 이벤트 핸들러
  $(document).on("click", ".btn_group, .btn_quick_open, .btn_quick_close", function() {
    var i = $(this).attr("data-target");
    var g = $(i).attr("data-group");
    
    $("[data-group='" + g + "']").not(i).removeClass("on");
    $(i).toggleClass("on");

    // 퀵메뉴 클릭 시 컨텐츠 왼쪽으로 밀림
    if ($(i).hasClass("on")) {
      $(".content_wrap").addClass("on");
      $(".left_cont_area").addClass("on");
      $(".btn_quick_open").addClass("on"); // btn_quick_open에 on 클래스 추가
    } else {
      $(".content_wrap").removeClass("on");
      $(".left_cont_area").removeClass("on");
      $(".btn_quick_open").removeClass("on"); // btn_quick_open에서 on 클래스 제거
    }
  });

  // 퀵메뉴 닫기 버튼 클릭 이벤트
  $('.btn_quick_close').click(function() {
    $('.btn_quick_open').removeClass('on');
    // $('.quick_menu_area').removeClass('on');
  });

  // 퀵메뉴 열기 버튼 클릭 이벤트
  $('.btn_quick_open').click(function() {
    $(this).addClass('on');
    // $('.quick_menu_area.btn_quick_01').addClass('on');
  });
});

// load 퀵메뉴 컨텐츠 class="on"
// if( $(".quick_menu_area.on").length > 0 ){
// $(".content_wrap").addClass("on");
// };


// 탭 hover 이벤트
$(document).ready(function() {
  // Function to handle tab item hover
  $('.tab_list .tab-menu .tab-item').mouseenter(function() {
    var $tabMenu = $(this).closest('.tab-menu');
    var index = $(this).index();

    // Add active class to hovered tab item and corresponding tab pane
    $tabMenu.find('.tab-item').removeClass('active');
    $(this).addClass('active');
    $tabMenu.siblings('.tab-content').children('.tab-pane').removeClass('active');
    $tabMenu.siblings('.tab-content').children('.tab-pane').eq(index).addClass('active');
  });
});

$(document).ready(function() {
  // 탭 항목 클릭 이벤트 처리
  $('.tab_list_click .tab-menu .tab-item').click(function() {
    var $tabMenu = $(this).closest('.tab-menu'); // 현재 탭 메뉴 찾기
    var index = $(this).index(); // 현재 탭 항목의 인덱스 찾기

    // 모든 탭 항목에서 active 클래스 제거
    $tabMenu.find('.tab-item').removeClass('active');
    // 현재 탭 항목에 active 클래스 추가
    $(this).addClass('active');

    // 모든 탭 내용에서 active 클래스 제거
    $tabMenu.siblings('.tab-content').children('.tab-pane').removeClass('active');
    // 현재 탭 항목에 대응하는 탭 내용에 active 클래스 추가
    $tabMenu.siblings('.tab-content').children('.tab-pane').eq(index).addClass('active');
  });
});

// 카테고리 펼침, 닫힘
$(document).ready(function() {
  $('.ico_category').click(function() {
    // Toggle the 'on' class for ico_category
    $(this).toggleClass('on');

    // Find the target element with data-target="tab-category"
    var target = $('[data-target="tab-category"]');
    
    // Check if the 'on' class is added or removed
    if ($(this).hasClass('on')) {
      // If 'on' class is added, change the text to "카테고리 닫힘"
      $(this).text("카테고리 닫힘");
      // Add 'on' class to the target element
      target.addClass('on');
    } else {
      // If 'on' class is removed, change the text to "카테고리 펼침"
      $(this).text("카테고리 펼침");
      // Remove 'on' class from the target element
      target.removeClass('on');
    }
  });
});

// 공통 GNB 메뉴
// $(document).ready(function (){
//   // 전체메뉴 (over)
//   function navOn(){
//     $(".nav [data-depth='1']").addClass("on");
//   };
//   $(document).on("mouseenter", ".nav_wrap > a", navOn);

//   // 전체메뉴 (leave)
//   function navOff(){
//     $(".nav_wrap").find(".on").removeClass("on");
//   };
//   $(document).on("mouseleave", ".nav_wrap", navOff);

//   // 메뉴 depth (over)
//   function depthOn(){
//     var n = 1;
//     var depth = $(this).parents("[data-depth]");                      //현재 선택 - depth '선택'
//     var depthNumber = parseInt(depth.attr("data-depth"));             //현재 선택 - depth '값'
//     var depthLength = $("[data-depth]").length;                       //총 depth '갯수'
//     var group = $(this).parent().attr("data-group");                  //현재 선택 - data-group '값'
//     var childGroup = $("ul[data-group='" + group + "']");             // 현재 선택 - 연결된 자식 ul '선택'

//     // 현재 선택 li
//     $(this).parent().addClass("on").siblings().removeClass("on");

//     // 현재 선택 - 연결된 자식 ul
//     childGroup.addClass("on").siblings().removeClass("on").parent().addClass("on");
//     childGroup.parents("[data-depth]").addClass("on");

//     // 현재 선택 - 하위 자식 (조건)
//     for( i=n; i<=depthLength; i++ ){
//       //현재 선택 - 자식이 없는 경우 (하위 자식 전부 off)
//       if(childGroup.length == 0){
//         n = 0;
//       }

//       var closeDepth = $("[data-depth='" + (depthNumber + i + n) + "']"); //현재 선택 - 연결된 자식 depth '선택'

//       closeDepth.removeClass("on").fint(".on").removeClass("on");
//     };
//   };
//   $(document).on("mouseenter", ".nav li > a", depthOn);
// });





$(document).ready(function (){
  // Entire menu (over)
  function navOn(){
    $(this).siblings(".nav").find("[data-depth='1']").addClass("on");
  };
  $(document).on("mouseenter", ".nav_wrap > a", navOn);

  // Entire menu (leave)
  function navOff(){
    $(this).find(".on").removeClass("on");
  };
  $(document).on("mouseleave", ".nav_wrap", navOff);

  // menu depth (over)
  function depthOn(){
    var n = 1;
    var depth = $(this).parents("[data-depth]"); //Current selection - depth 'selection'
    var depthNumber = parseInt(depth.attr("data-depth")); //Current selection - depth 'value'
    var depthLength = $(this).closest(".nav_wrap").find("[data-depth]").length; //Total depth 'number'
    var group = $(this).parent().attr("data-group"); //Current selection - data-group 'value'
    var childGroup = $(this).closest(".nav_wrap").find("ul[data-group='" + group + "']"); // Current selection - connected child ul 'selection'

    // current selection li
    $(this).parent().addClass("on").siblings().removeClass("on");

    // Current selection - connected child ul
    childGroup.addClass("on").siblings().removeClass("on").parent().addClass("on");
    childGroup.parents("[data-depth]").addClass("on");

    // Current selection - child children (condition)
    for( i=n; i<=depthLength; i++ ){
      //Current selection - If there are no children (all lower children are turned off)
      if(childGroup.length == 0){
        n = 0;
      }

      var closeDepth = $(this).closest(".nav_wrap").find("[data-depth='" + (depthNumber + i + n) + "']"); //Current selection - connected child depth 'selection'

      closeDepth.removeClass("on").find(".on").removeClass("on");
    };
  };
  $(document).on("mouseenter", ".nav_wrap .nav li > a", depthOn);
});

// 퀵메뉴 장바구니 미리보기 (중복되는 경우)
// $(document).ready(function(){
//   $(".btn_sub_cont").click(function(){
//       // 클릭된 버튼의 부모 요소 중에서 st_body_cont 클래스를 찾아서 on 클래스를 추가하거나 제거함
//       $(this).closest(".st_body_cont").toggleClass("on");
//       // 클릭된 버튼의 클래스 on을 추가하거나 제거함
//       $(this).toggleClass("on");
//   });
// });

// 퀵메뉴 장바구니 미리보기 (중복되지 않는 경우)
/*$(document).ready(function(){
  $(".btn_sub_cont").click(function(){
      var stBodyCont = $(this).closest(".st_body_cont");
      var btnSubCont = $(this);

      if (!btnSubCont.hasClass("on")) {
          // 다른 .st_body_cont 요소에서 on 클래스 제거
          $(".st_body_cont").removeClass("on");
          // 현재 클릭된 버튼의 부모 요소에만 on 클래스 추가
          stBodyCont.addClass("on");
          // 모든 btn_sub_cont 요소에서 on 클래스 제거
          $(".btn_sub_cont").removeClass("on");
          // 현재 클릭된 버튼에만 on 클래스 추가
          btnSubCont.addClass("on");
      } else {
          // 현재 클릭된 버튼의 부모 요소에만 on 클래스 제거
          stBodyCont.removeClass("on");
          // 현재 클릭된 버튼에만 on 클래스 제거
          btnSubCont.removeClass("on");
      }
  });
});*/


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


