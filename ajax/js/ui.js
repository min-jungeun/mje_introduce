$(function(){
    $(window).on('scroll', function(){ //this 개념 조심하기 => 는 this 못씀
        let scrpos = $(this).scrollTop();
        if(scrpos > 80 ){ //스크롤이 아래로
            $("#hd").addClass('bg-dark border-bottom border-white').removeClass("bg-white")
        }else{
            $("#hd").removeClass('bg-dark border-bottom border-white').addClass("bg-white")
        }
        // $("body").attr("data-scrollps", $(this).scrollTop() )
    })
})