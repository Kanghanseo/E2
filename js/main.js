$(function(){

    //MENU

    $(".main > li").hover(function(){
        $(this).find(".sub").stop().slideDown()
    },function(){
        $(".sub").stop().slideUp()
    })

    //IMG_SLIDE

    var n=0

    setInterval(function(){

        if(n == 2){
            n=0
        }else{
            n++
        }

        pos= n* (-600) + "px"

        $(".top_move").animate({top:pos},500)

    },3000)

    //POP

    $(".pop").click(function(){
        $(".popup, .pop_bg").show()
    })

    $(".close").click(function(){
        $(".popup, .pop_bg").hide()
    })

})