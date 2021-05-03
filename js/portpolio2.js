;
(function ($) {

        var portpolio2 = {
            btn: 0,


            init: function () {
                this.scrollEventFn();
                this.headerFn();
                this.navFn();
                this.section1Fn();
                this.section2Fn();
                this.section3Fn();
                this.section4Fn();
                this.section5Fn();
                this.section6Fn();
                this.section7Fn();
                this.section8Fn();
                this.footerFn();
                this.ajaxFn();
                this.smoothScrollFn();
                this.mouseWheelEventFn();
                this.modalFn();
                this.buyModalFn();

            },
            scrollEventFn: function () {
                var scrollA = 0;
                var scrollB = 0;
                var $win = $(window);
                var result = null;
                var $header = $('#header');
                var that = this;

                function scrollEventFn() {

                    scrollB = $win.scrollTop();

                    var src = function () {
                        result = scrollA - scrollB > 0 ? 'UP ' : 'DOWN';


                    }
                    src();

                    if ($win.scrollTop() == 0) {
                        $header.removeClass('addHide');



                    } else {
                        $header.addClass('addTop');

                        if (result == 'UP') {

                            if (that.btn == 1) {
                                $header.removeClass('addHide');
                                $header.addClass('addTop');


                            } else {
                                $header.removeClass('addHide');
                                $header.addClass('addTop');

                            }
                        }

                        if (result == 'DOWN') {
                            if (that.btn == 1) {
                                $header.removeClass('addHide');
                                $header.addClass('addTop');


                            } else {

                                $header.removeClass('addTop');
                                $header.addClass('addHide');
                            }
                        }
                    }


                    scrollA = scrollB;

                }

                $win.scroll(function () {
                    scrollEventFn();
                });

            },
            headerFn: function () {

                var nikeNav = {
                    sub1: [{
                            sub: ["New & Featured ", "신상품 전체보기", "SNKRS", "에어 포스1", "ACG", "NIKELab", "NEW TO SALE", "지속 가능 컬렉션"]
                        },
                        {
                            sub: ["New For Men", "신발", "의류", "용품", "전체보기"]
                        },
                        {
                            sub: ["New For Women", "신발", "의류", "용품", "전체보기"]
                        },
                        {
                            sub: ["New For Kids", "신발", "의류", "용품", "전체보기 "]
                        }
                    ],
                    sub2: [{
                            sub: ["New & Featured", "신상품", "SNKRS", "THE BEST", "MEMBER SHOP", "줌X 인빈서블 런 플라이니트", "스프링 재킷 컬렉션", "스우시 컬렉션", "젠더리스 컬렉션", "1 ON 1 상품 설명 서비스", "SALE", "지속 가능 컬렉션"]
                        },
                        {
                            sub: ["신발 ", "신발전체", "라이프스타일", "러닝", "트레이닝 & 짐", "농구", "축구", "스케이트보딩", "골프", "테니스", "샌들 & 슬리퍼"]
                        },
                        {
                            sub: ["의류", "의류전체", "후디 & 크루", "팬츠 &타이츠", "탑 & 티셔츠", "재킷 & 베스트", "숏 팬츠", "나이키 프로", "양말 ", "셋업", ]
                        },
                        {
                            sub: ["용품", "모자 & 헤어밴드", "가방", "애플워치"]
                        },
                        {
                            sub: ["스포츠", "러닝", "트레이닝 & 짐", "축구", "골프", "테니스", "요가"]
                        },
                        {
                            sub: ["브랜드", "NIKE SPORTSWEAR", "NIKELab", "JORDAN", "ACG", ]
                        }
                    ],
                    sub3: [{
                            sub: ["New & Featured", "신상품", "SNKRS", "THE BEST", "MEMBER SHOP", "브라 & 레깅스 이벤트", "아이콘 클래쉬 컬렉션", "Femme 컬렉션", "홈트레이닝 컬렉션", "에어맥스 97", "1 ON 1 상품 설명 서비스", "SALE", "지속 가능 컬렉션"]
                        },
                        {
                            sub: ["신발", "신발 전체", "라이프스타일", "러닝", "트레이닝 & 짐", "조던", "축구", "골프", "테니스", "샌들 & 슬리퍼"]
                        },
                        {
                            sub: ["의류", "의류 전체", "스포츠 브라", "후디 & 크루", "타이츠 & 레깅스", "팬츠 & 숏 팬츠", "탑 & 티셔츠", "재킷 & 베스트", "스커트 & 드레스", "요가 ", "양말", "셋업"]
                        },
                        {
                            sub: ["용품", "모자 & 헤어밴드", "가방", "애플워치 "]
                        },
                        {
                            sub: ["스포츠", "러닝", "트레이닝 & 짐", "축구", "골프", "테니스", "요가"]
                        },
                        {
                            sub: ["브랜드", "NIKE SPORTSWEAR", "NIKELAB", "JORDAN", "ACG"]
                        }
                    ],
                    sub4: [{
                            sub: ["New & Featured", "신상품", "GOOD PRICE 컬렉션", "스프링 컬렉션", "나이키 키즈 클래식", "조던 키즈", "아이들을 위한 선물", "SALE"]
                        },
                        {
                            sub: ["신발", "베이비(160mm 이하)", "리틀키즈(165-220mm)", "주니어(225-250mm)", "라이프스타일러닝", "축구", "농구", "샌들 & 슬리퍼"]
                        },
                        {
                            sub: ["의류", "베이비 (0-4세)", "리틀키즈 (4-7세)", "주니어 (8-13세)", "후디 & 크루", "팬츠 & 레깅스", "탑 & 티셔츠", "트랙수트 & 세트", "재킷 & 베스트", "스커트 & 드레스", "가방 & 모자 & 용품"]
                        },
                        {
                            sub: ["스포츠", "축구", "농구", "테니스", "러닝"]
                        }
                    ],
                    sub5: [{
                            sub: ["New To Sale", "브라 & 레깅스 이벤트"]
                        },
                        {
                            sub: ["Mens Sale", "러닝", "라이프스타일", "트레이닝", "농구 & 조던", "골프 & 테니스", "축구"]
                        },
                        {
                            sub: ["Womens Sal", "러닝", "라이프스타일", "트레이닝", "골프 & 테니스"]
                        },
                        {
                            sub: ["Kids Sale", "베이비(0-4세)", "리틀키즈(4-7세)", "주니어(8-13세)"]
                        }
                    ]
                }
                //서브1

                var $sub1 = $('#nav .sub1 .sub-menu');
                var txt = '';

                for (var i in nikeNav.sub1) {
                    for (var j in nikeNav.sub1[i].sub) {
                        if (j == 0) {
                            txt = "<dt>" + nikeNav.sub1[i].sub[j] + "</dt>";
                        } else {
                            txt += "<dd><a href='#'>" + nikeNav.sub1[i].sub[j] + "</a></dd>";
                        }
                    }
                    $sub1.eq(i).html(txt);
                    txt = '';
                }

                //서브2

                var $sub2 = $('#nav .sub2 .sub-menu');
                var txt = '';

                for (var i in nikeNav.sub2) {
                    for (var j in nikeNav.sub2[i].sub) {
                        if (j == 0) {
                            txt = "<dt>" + nikeNav.sub2[i].sub[j] + "</dt>";
                        } else {
                            txt += "<dd><a href='#'>" + nikeNav.sub2[i].sub[j] + "</a></dd>";
                        }
                    }
                    $sub2.eq(i).html(txt);
                    txt = '';
                }
                var $sub3 = $('#nav .sub3 .sub-menu');
                var txt = '';

                for (var i in nikeNav.sub3) {
                    for (var j in nikeNav.sub3[i].sub) {
                        if (j == 0) {
                            txt = "<dt>" + nikeNav.sub3[i].sub[j] + "</dt>";
                        } else {
                            txt += "<dd><a href='#'>" + nikeNav.sub3[i].sub[j] + "</a></dd>";
                        }
                    }
                    $sub3.eq(i).html(txt);
                    txt = '';
                }
                var $sub4 = $('#nav .sub4 .sub-menu');
                var txt = '';

                for (var i in nikeNav.sub4) {
                    for (var j in nikeNav.sub4[i].sub) {
                        if (j == 0) {
                            txt = "<dt>" + nikeNav.sub4[i].sub[j] + "</dt>";
                        } else {
                            txt += "<dd><a href='#'>" + nikeNav.sub4[i].sub[j] + "</a></dd>";
                        }
                    }
                    $sub4.eq(i).html(txt);
                    txt = '';
                }
                var $sub5 = $('#nav .sub5 .sub-menu');
                var txt = '';

                for (var i in nikeNav.sub5) {
                    for (var j in nikeNav.sub5[i].sub) {
                        if (j == 0) {
                            txt = "<dt>" + nikeNav.sub5[i].sub[j] + "</dt>";
                        } else {
                            txt += "<dd><a href='#'>" + nikeNav.sub5[i].sub[j] + "</a></dd>";
                        }
                    }
                    $sub5.eq(i).html(txt);
                    txt = '';
                }




            },

            navFn: function () {

                var $window = $(window);
                var $mainBtn = $('#header .main-btn')
                var $mobileBtn = $('#header .mobile-btn')
                var $navUlLi = $('#header #nav>ul>li');
                var $Sub = $('#header .sub');
                var $nav = $('#header #nav');
                var pc = 0;
                var mobile = 0;
                var $bar = $('#header .bar');

                var that = this;

                function pcEventFn() {

                    $nav.stop().show();
                    $Sub.stop().hide();
                    $nav.css({
                        display: 'inline-block'
                    });

                    $mainBtn.on({
                        mouseenter: function (e) {
                            e.preventDefault();
                            $(this).next().stop().show();
                        }
                    });

                    $navUlLi.on({
                        mouseleave: function (e) {
                            e.preventDefault();
                            $Sub.stop().hide();
                        }
                    });
                }

                function mobileEventFn() {
                    $Sub.stop().hide();
                    $nav.stop().slideUp(0);
                    $bar.removeClass('addMobile');



                    //이벤트 삭제
                    $mainBtn.off('mouseenter');
                    $navUlLi.off('mouseleave');

                }

                function pcMobileFn() {
                    if ($window.innerWidth() > 960) {
                        pc = 1;
                        mobile = 0;
                        pcEventFn();
                        that.btn = 0;
                    } else {
                        pc = 0;
                        mobile = 1;
                        mobileEventFn();

                    }
                }
                setTimeout(pcMobileFn, 100);

                $window.resize(function () {
                    pcMobileFn();
                })

                mobileEventFn();

                $mainBtn.on({
                    click: function (e) {
                        e.preventDefault();
                        if (mobile == 1) {
                            $Sub.stop().slideUp(300);
                            $(this).next().stop().slideToggle(300);
                        }
                    }
                });

                $mobileBtn.on({
                    click: function (e) {
                        e.preventDefault();
                        $bar.toggleClass('addMobile');
                        $nav.stop().slideToggle(300);

                        return that.btn == 0 ? that.btn = 1 : that.btn = 0;
                    }
                });


            },

            section1Fn: function () {

                var $win = $(window);
                var $section1 = $('#section1');
                var $video = $('.main-video');

                var $winW = $(window).innerWidth();
                var $winH = $(window).innerHeight();
                var $videoW = $video.innerWidth();
                var $videoH = $video.innerHeight();
                var marginL = ($winW - $videoW) / 2;
                var marginT = ($winH - $videoH) / 2;

                function resizeFn() {

                    $winW = $(window).innerWidth();
                    $winH = $(window).innerHeight();
                    $videoW = $video.innerWidth();
                    $videoH = $video.innerHeight();
                    marginL = ($winW - $videoW) / 2;
                    marginT = ($winH - $videoH) / 2;

                    if ($winW > $videoW) {
                        $video.css({
                            width: $winW,
                            height: '1080'
                        });


                    }
                    if ($winH > $videoH) {
                        $video.css({
                            width: '1920',
                            height: $winH
                        });
                    }

                    $video.css({
                        marginLeft: marginL,
                        marginTop: marginT
                    });
                    $section1.css({
                        width: $winW,
                        height: $winH
                    });


                }

                setTimeout(resizeFn, 100);

                $win.resize(function () {

                    setTimeout(resizeFn, 100);

                });


            },
            section2Fn: function () {

                var $section2 = $('#section2');
                var t = 0;
                var $section2Top = $('#section2').offset().top-400;

                function scrollFn() {
                    $section2.addClass('addScroll');
                }

                $(window).scroll(function () {
                    if ($(this).scrollTop() == 0) {
                        t = 0;
                        $section2.removeClass('addScroll');
                    }
                    if ($(this).scrollTop() > $section2Top) {
                        if (t == 0) {
                            t = 1
                            scrollFn();
                        }
                    }
                })


            },
            section3Fn: function () {
                var $col = $('#section3 .content-wrap>ul>li');
                var $section3Top = $('#section3').offset().top-200;
                var t = 0;

                function scrollFn() {

                    $col.eq(0).stop().animate({
                        opacity: 1
                    }, 1000, function () {
                        $col.eq(1).stop().animate({
                            opacity: 1
                        }, 1000, function () {
                            $col.eq(2).stop().animate({
                                opacity: 1
                            }, 1000)

                        });
                    });
                }

                $(window).scroll(function () {
                    if ($(this).scrollTop() == 0) {
                        t = 0
                        $col.stop().animate({
                            opacity: 0
                        }, 0)
                    }
                    if ($(this).scrollTop() > $section3Top) {
                        if (t == 0) {
                            t = 1
                            scrollFn()
                        }
                    }
                })
            },
            section4Fn: function () {

                var $col = $('#section4 .content-gap ul li')
                var t = 0;
                var $section4Top = $('#section4').offset().top - 300;

                function scrollFn() {

                    $col.eq(0).stop().animate({
                        opacity: 1
                    }, 1000, function () {
                        $col.eq(1).stop().animate({
                            opacity: 1
                        }, 700, function () {
                            $col.eq(2).stop().animate({
                                opacity: 1
                            }, 700, function () {
                                $col.eq(3).stop().animate({
                                    opacity: 1
                                }, 700)
                            });

                        });
                    });

                }

                $(window).scroll(function () {
                    if ($(this).scrollTop() == 0) {
                        t = 0;
                        $col.stop().animate({
                            opacity: 0
                        }, 0);
                    }
                    if ($(this).scrollTop() > $section4Top) {
                        if (t == 0) {
                            t = 1;
                            scrollFn();
                        }
                    }
                })


            },
            section5Fn: function () {

                var $bg = $('#section5 .content .bg');
                var $li = $('#section5 .content li');

                var $section5 = $('#section5');
                var $section4Top = $('#section4').offset().top;
                var t = 0;

                function scrollFn() {
                    $section5.addClass('addScroll');
                }

                $(window).scroll(function () {
                    if ($(this).scrollTop() == 0) {
                        t = 0;
                        $section5.removeClass('addScroll');

                    }
                    if ($(this).scrollTop() > $section4Top) {
                        if (t == 0) {
                            t = 1;
                            scrollFn();
                        }
                    }
                })






                $li.each(function (idx) {
                    $(this).on({
                        mouseenter: function () {

                            $bg.stop().animate({
                                opacity: 0
                            }, 600);
                            $bg.eq(idx).stop().animate({
                                opacity: 1
                            }, 600);


                        }
                    })
                })

            },
            section6Fn: function () {
                var $slide = $('#section6 .slide');
                var cnt = 0
                var setId = null;
                var setId2 = null;

                var $section6 = $('#section6');
                var $section6Top = $('#section6').offset().top - 200;
                var t = 0;

                function scrollFn() {
                    $section6.addClass('addScroll');
                }

                $(window).scroll(function () {
                    if ($(this).scrollTop() == 0) {
                        t = 0;
                        $section6.removeClass('addScroll');
                    }
                    if ($(this).scrollTop() > $section6Top) {
                        if (t == 0) {
                            t = 1;
                            scrollFn();
                        }
                    }
                })



                //메인 다음슬라이드
                function nextSlideFn() {
                    $slide.css({
                        zIndex: 1
                    });
                    $slide.eq(cnt).css({
                        zIndex: 1
                    });
                    $slide.eq(cnt == 0 ? 3 : cnt - 1).css({
                        zIndex: 2
                    });
                    $slide.eq(cnt).css({
                        zIndex: 3
                    }).stop().animate({
                        opacity: 0
                    }, 0).animate({
                        opacity: 1
                    }, 1600);

                }
                //메인 이전슬라이드
                function prevSlideFn() {
                    $slide.css({
                        zIndex: 1
                    }).animate({
                        opacity: 1
                    }, 0);
                    $slide.eq(cnt).css({
                        zIndex: 1
                    });
                    $slide.eq(cnt).css({
                        zIndex: 2
                    });
                    $slide.eq(cnt == 3 ? 0 : cnt + 1).css({
                        zIndex: 3
                    }).stop().animate({
                        opacity: 1
                    }, 0).animate({
                        opacity: 0
                    }, 1600);

                }

                function nextSlideCountFn() {
                    cnt++;
                    if (cnt > 3) {
                        cnt = 0;
                    }
                    nextSlideFn();
                }

                function prevSlideCountFn() {
                    cnt--;
                    if (cnt < 0) {
                        cnt = 3;
                    }
                    prevSlideFn();
                }

                var start = 0
                var end = 0

                $slide.on({
                    mousedown: function (e) {
                        e.preventDefault();
                        start = e.pageX;

                    },
                    mouseup: function (e) {
                        e.preventDefault();
                        end = e.pageX;
                        swipeFn()
                    }
                })

                function swipeFn() {
                    if (start - end > 0) {
                        stopFn()
                        nextSlideCountFn();
                    }
                    if (start - end < 0) {
                        stopFn()
                        prevSlideCountFn();
                    }
                }

                function autoplayFn() {
                    setId = setInterval(nextSlideCountFn, 4000);
                }
                autoplayFn();

                function stopFn() {
                    t = 0;

                    clearInterval(setId);
                    clearInterval(setId2);
                    setId2 = setInterval(function () {
                        t++;
                        if (t >= 4) {
                            t = 0;
                            clearInterval(setId2);
                            clearInterval(setId);
                            nextSlideCountFn();
                            autoplayFn();
                        }
                    }, 1000)
                }
            },
            section7Fn: function () {


            },
            section8Fn: function () {
                var $col = $('#section8 .face-content ul li')
                var $section8Top = $('#section8').offset().top - 300;
                var t = 0;

                function scrollFn() {
                    $col.eq(0).stop().animate({
                        opacity: 1
                    }, 1000, function () {
                        $col.eq(1).stop().animate({
                            opacity: 1
                        }, 1000, function () {
                            $col.eq(2).stop().animate({
                                opacity: 1
                            }, 1000)

                        });
                    });
                }


                $(window).scroll(function () {
                    if ($(this).scrollTop() == 0) {
                        t = 0;
                        $col.stop().animate({
                            opacity: 0
                        }, 0)
                    }
                    if ($(this).scrollTop() > $section8Top) {
                        if (t == 0) {
                            t = 1;
                            scrollFn();
                        }
                    }
                })

            },

            footerFn: function () {

            },

            ajaxFn: function(){

                var $submitBtn = $('#submit-Btn');
                var $response = $('.response h3');
                var $msgWrap = $('.msg-wrap');
                var $name = $('#frmName');
                var $hp = $('#frmHp');

                $submitBtn.on({
                        click: function (e) {
                            e.preventDefault();

                            var frmname = $('#frmName').val();
                            var frmhp = $('#frmHp').val();

                            if (frmname == '', frmhp == '') {
                                
                                $name.focus();
                                $hp.focus();
                                return false;
                            } 

                            else {

                                $.ajax({
                                        url: './response.php',
                                        type: 'POST',
                                        data: {
                                            name : frmname,
                                            hp : frmhp
                                        },
                                        success: function (result) {

                                            $response.html(result);

                                            $msgWrap.fadeIn(1000);
                                            setTimeout(msgFn, 4000);

                                            function msgFn() {
                                                $name.val('');
                                                $hp.val('');
                                                $response.empty();
                                                $msgWrap.fadeOut(1000);
                                                $name.focus();
                                                $hp.focus();

                                            }
                                        },
                                        error: function (msg) {
                                            alert('AJAX 전송 실패!!');
                                            console.log(msg);
                                        }
                                    
                                });
                            }
                        }
                })

            },

            smoothScrollFn: function () {
                var $smoothBtn = $('.smoothBtn');
                var $goTopBtnWrap = $('.goTopBtn-wrap');
                var t = 0;
                var $modal = $('.modalDemo');


                $smoothBtn.on({
                    click: function (e) {
                        e.preventDefault();
                        var url = $(this).attr('href');
                        $('html,body').stop().animate({
                            scrollTop: $(url).offset().top
                        }, 600, 'easeInOutExpo');

                    }
                });

                function responseFn() {
                    if ($(window).innerWidth() > 1200) {
                        $modal.stop().fadeIn(1000);
                    } else {
                        $modal.stop().fadeOut(0);
                    }
                }
                responseFn();

                $(window).resize(function () {

                    responseFn();

                })


                $(window).scroll(function () {
                    if ($(this).scrollTop() >= 100) {
                        if (t == 0) {
                            t = 1;
                            $goTopBtnWrap.stop().fadeIn(600);
                            responseFn();
                        }
                    } else {
                        if (t == 1) {
                            t = 0;
                            $goTopBtnWrap.stop().fadeOut(600);
                        }
                    }

                })

            },

            mouseWheelEventFn: function () {
                var $section = $('.section');
                var wheelDelta = 0;

                $section.each(function (idx) {
                    $(this).on('mousewheel DOMMouseScroll', function (e) {
                        e.preventDefault();

                        if (e.originalEvent.wheelDelta) {
                            wheelDelta = e.originalEvent.wheelDelta;
                        } else {
                            wheelDelta = e.detail * -1;
                        }

                        if (wheelDelta < 0) {
                            if (idx < 7) {
                                if (!$('html,body').is(':animated')) {
                                    $('html,body').stop().animate({
                                        scrollTop: $(this).next().offset().top
                                    }, 600, 'easeInOutExpo');
                                }
                            }
                        } else {
                            if (idx > 0) {
                                if (!$('html,body').is(':animated')) {
                                    $('html,body').stop().animate({
                                        scrollTop: $(this).prev().offset().top
                                    }, 600, 'easeInOutExpo');
                                }
                            }
                        }
                    });
                })

            },
            modalFn: function () {

                $modal = $('.modalDemo');
                $modalBtn = $('.modalDemo .modal-btn');
                $eventBtn = $('.modalDemo .event-btn');
                $closeBtn = $('.eventModal .close-btn')
                $event = $('.eventModal');

                $modalBtn.on({
                    click: function () {
                        $modal.toggleClass('addDemo');
                    }
                });

                $eventBtn.on({
                    click: function () {
                        $event.fadeIn(600);

                    }
                })

                $closeBtn.on({
                    click: function () {
                        $event.fadeOut(600);
                    }
                })

            },
            buyModalFn:function(){
                var $buyModal = $('.buyModal')
                var $buyModal1 = $('.buyModal1')
                var $buyModal2 = $('.buyModal2')
                var $buyModal3 = $('.buyModal3')
                var $closeBtn  = $('.buyModal .no');
                var $closeBtn2  = $('.buyModal .yes');
                var $modalBtn1  = $('#section3 .buy-btn1') 
                var $modalBtn2  = $('#section3 .buy-btn2') 
                var $modalBtn3  = $('#section3 .buy-btn3') 
            
            
            
                $modalBtn1.on({
                    click:function(){
                        $buyModal1.fadeIn(600);
                    }
                })

                $modalBtn2.on({
                    click:function(){
                        $buyModal2.fadeIn(600);
                    }
                })

                $modalBtn3.on({
                    click:function(){
                        $buyModal3.fadeIn(600);
                    }
                })


                $closeBtn.on({
                    click:function(){
                        $buyModal.fadeOut(600);
                    }
                })

                $closeBtn2.on({
                    click:function(){
                        $buyModal.fadeOut(600);
                    }
                })
            
            },

                     
    }

    portpolio2.init();

})(jQuery);