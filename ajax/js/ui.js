$(function(){
    $(window).on('scroll', function(){ //this 개념 조심하기 => 는 this 못씀
        let scrpos = $(this).scrollTop();
        if(scrpos > 80 ){ //스크롤이 아래로
            $("#hd").addClass('scroll')
        }else{
            $("#hd").removeClass('scroll')
        }
        // $("body").attr("data-scrollps", $(this).scrollTop() )
    })
})