
$('.mobile-btn').on('click',function () {
  $('.mobile-btn').toggleClass('btn-show');
  $('.menu-block-list').toggleClass('menu-show');
});

$('.menu-block-item').on('click',function () {
  $('.mobile-btn').removeClass('btn-show');
  $('.menu-block-list').removeClass('menu-show');
});

$('.trpp').on('click',function () {
    $('.video-object').toggleClass('show');
    $('.main-video-block').toggleClass('bg-show');
  });

  $(document).ready(function(){

    let HZperPage = 6,//number of results per page
       HZwrapper = 'paginationTable',//wrapper class
       HZlines   = 'tableItem',//items class
       HZpaginationId ='pagination-container',//id of pagination container
       HZpaginationArrowsClass = 'paginacaoCursor',//set the class of pagi
       HZpaginationColorDefault =  '#FFFFFF',//default color for the pagination numbers
       HZpaginationColorActive = '#0d6efd', //color when page is clicked
       HZpaginationCustomClass = 'customPagination'; //custom class for styling the pagination (css)
     
  
     /*-------------------------F/ AHMED HIJAZI -------------------------*/
     /*------------------------- HOPE YOU LIKE -------------------------*/
  
  
  /*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
    function paginationShow(){if($("#"+HZpaginationId).children().length>8){var a=$(".activePagination").attr("data-valor");if(a>=4){var i=parseInt(a)-3,o=parseInt(a)+2;$(".paginacaoValor").hide(),exibir2=$(".paginacaoValor").slice(i,o).show()}else $(".paginacaoValor").hide(),exibir2=$(".paginacaoValor").slice(0,5).show()}}paginationShow(),$("#beforePagination").hide(),$("."+HZlines).hide();for(var tamanhotabela=$("."+HZwrapper).children().length,porPagina=HZperPage,paginas=Math.ceil(tamanhotabela/porPagina),i=1;i<=paginas;)$("#"+HZpaginationId).append("<p class='paginacaoValor "+HZpaginationCustomClass+"' data-valor="+i+">"+i+"</p>"),i++,$(".paginacaoValor").hide(),exibir2=$(".paginacaoValor").slice(0,5).show();$(".paginacaoValor:eq(0)").css("background",""+HZpaginationColorActive).addClass("activePagination");var exibir=$("."+HZlines).slice(0,porPagina).show();$(".paginacaoValor").on("click",function(){$(".paginacaoValor").css("background",""+HZpaginationColorDefault).removeClass("activePagination"),$(this).css("background",""+HZpaginationColorActive).addClass("activePagination");var a=$(this).attr("data-valor"),i=a*porPagina,o=i-porPagina;$("."+HZlines).hide(),exibir=$("."+HZlines).slice(o,i).show(),"1"===a?$("#beforePagination").hide():$("#beforePagination").show(),a===""+$(".paginacaoValor:last").attr("data-valor")?$("#afterPagination").hide():$("#afterPagination").show(),paginationShow()}),$(".paginacaoValor").last().after($("#afterPagination")),$("#beforePagination").on("click",function(e){e.stopImmediatePropagation();var a=$(".activePagination").attr("data-valor"),i=parseInt(a)-1;$("[data-valor="+i+"]").click(),paginationShow()}),$("#afterPagination").on("click",function(e){e.stopImmediatePropagation();var a=$(".activePagination").attr("data-valor"),i=parseInt(a)+1;$("[data-valor="+i+"]").click(),paginationShow()}),$(".paginacaoValor").css("float","left"),$("."+HZpaginationArrowsClass).css("float","left");
  })