/*
Template Name: Bizfinity
Author: GrayGrids
*/
$(document).ready(function(){
  //Скрыть PopUp при загрузке страницы
  PopUpHide();
});
//Функция отображения PopUp
function PopUpShow(){
  $("#pop").show();
}
//Функция скрытия PopUp
function PopUpHide(){
  $("#pop").hide();
}
  $('.select_send_language').on('change', function() {
  $(this.form).submit();
});

$('.slider-center').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 300,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 968,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
});




$('.teacher-slider-center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }

    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }



        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    // for menu scroll 
    var pageLink = document.querySelectorAll('.page-scroll');

    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60,
            });
        });
    });

    //===== close navbar-collapse when a  clicked
    let navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");

    document.querySelectorAll(".page-scroll").forEach(e =>
        e.addEventListener("click", () => {
            navbarToggler.classList.remove("active");
            navbarCollapse.classList.remove('show')
        })
    );
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    })
    // WOW active
    new WOW().init();

    let filterButtons = document.querySelectorAll('.portfolio-btn-wrapper button');
    filterButtons.forEach(e =>
        e.addEventListener('click', () => {

            let filterValue = event.target.getAttribute('data-filter');
            iso.arrange({
                filter: filterValue
            });
        })
    );

    var elements = document.getElementsByClassName("portfolio-btn");
    for (var i = 0; i < elements.length; i++) {
        elements[i].onclick = function () {
            var el = elements[0];
            while (el) {
                if (el.tagName === "BUTTON") {
                    el.classList.remove("active");
                }
                el = el.nextSibling;
            }
            this.classList.add("active");
        };
    };

    //====== counter up 
    var cu = new counterUp({
        start: 0,
        duration: 2000,
        intvalues: true,
        interval: 100,
        append: " ",
    });
    cu.start();

})();





// var count = 7; //всего записей
// var cnt = 6; //сколько отображаем сначала
// var cnt_page = Math.ceil(count / cnt); //кол-во страниц

// //выводим список страниц
// var paginator = document.querySelector(".paginator");
// var page = "";
// for (var i = 0; i < cnt_page; i++) {
//   page += "<span data-page=" + i * cnt + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
// }
// paginator.innerHTML = page;

// //выводим первые записи {cnt}
// var div_num = document.querySelectorAll(".num");
// for (var i = 0; i < div_num.length; i++) {
//   if (i < cnt) {
//     div_num[i].style.display = "block";
//   }
// }

// var main_page = document.getElementById("page1");
// main_page.classList.add("paginator_active");

// //листаем
// function pagination(event) {
//   var e = event || window.event;
//   var target = e.target;
//   var id = target.id;
  
//   if (target.tagName.toLowerCase() != "span") return;
  
//   var num_ = id.substr(4);
//   var data_page = +target.dataset.page;
//   main_page.classList.remove("paginator_active");
//   main_page = document.getElementById(id);
//   main_page.classList.add("paginator_active");

//   var j = 0;
//   for (var i = 0; i < div_num.length; i++) {
//     var data_num = div_num[i].dataset.num;
//     if (data_num <= data_page || data_num >= data_page)
//       div_num[i].style.display = "none";

//   }
//   for (var i = data_page; i < div_num.length; i++) {
//     if (j >= cnt) break;
//     div_num[i].style.display = "block";
//     j++;
//   }
// }