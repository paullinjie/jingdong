/**
 * Created by linjie on 2018/8/30.
 */
    (function( win, doc ) {
        var docEl = doc.documentElement || document.body;//获取HTML元素

        var container1 = doc.getElementById('container');
        var resize = 'onorientationchange' in win ? 'orientationchange' : 'resize';

        function rem() {
            console.log(container1.clientWidth + '-------1111');
            docEl.style.fontSize = 100*(container1.clientWidth/640) + 'px';
            console.log(docEl.style.fontSize);
        }
        doc.addEventListener('DOMContentLoaded', rem, false);
        win.addEventListener(resize, rem, false);
    })(window, document)

    //轮播1
    var mySwiper = new Swiper ('#swiper1', {
        autoplay: 3000,
        loop: true,

        pagination: '.swiper-pagination',
        paginationClickable: true
    })

    //header滚动
    var oHeader = document.getElementsByClassName("header")[0];

    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if( scrollTop > 0 ) {
            oHeader.style.background = "rgba(255, 0, 0, .7)";
        }
        else
            oHeader.style.background = "transparent";
    }

    new Swiper ('#swiper2', {
        autoplay: 4000,
        loop: true,
        slidesPerView: 3.5,
        slidesPerGroup: 1,
        spaceBetween: 25
    })

    new Swiper ('#swiper3', {
        autoplay: 2000,
        loop: true,

        pagination: '.swiper-pagination',
        paginationClickable: true
    })

    new Swiper ('#swiper4', {
        autoplay: 3000,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true
    })