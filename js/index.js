/**
 * Created by Devin on 2017/4/20.
 */
$(function () {
    silder('.silder','.chose-qbq',5000);
})
function silder(obj,chose,timeLong) { //obj是大图区域的DIV   chose是缩小的区域的DIV  timeLong定时器的时间
    var lengths = $(obj + " ul li").length; //原始LI的个数
    $(chose).width(lengths*260+40);  //缩略图JS定义宽度居中
    var objclone = $(obj + " ul li").clone(); //克隆形成无缝连接
    $(obj + " ul").width((2 * lengths - 1) * 565 + 2544+2000);
    $(obj + " ul").prepend(objclone.addClass('pre'));
    $(obj + " ul").css('left', -(lengths - 1) * 567);
    $(obj + " ul li").eq(lengths).show().addClass('center').nextAll('li').addClass('aft');
    var beginNum = lengths; //初始显示第二系列的第一张图

    $(chose+' .pre-buttom').click(function () {  //向左翻转效果
        if (beginNum > 1) {
            beginNum--;
            $(obj + " ul").animate({left: -(beginNum - 1) * 567}, 300);
            $(obj + " ul li").eq(beginNum + 1).css('animation', 'go-aft 1s').addClass('aft').removeClass('center');
            $(obj + " ul li").eq(beginNum).addClass('center').removeClass('pre').css('animation', 'pre-changes 1.8s');
            if(beginNum>=lengths){
                $(chose+" ul li").eq(beginNum-lengths).addClass('active').siblings('li').removeClass('active');
            }else{
                $(chose+" ul li").eq(beginNum).addClass('active').siblings('li').removeClass('active');
            }
        }else{
            $(chose+" ul li").eq(beginNum-1).addClass('active').siblings('li').removeClass('active');
            beginNum=lengths;
            $(obj + " ul").animate({left: -(beginNum - 1) * 567}, 300);
            $(obj + " ul li").eq(beginNum).addClass('center').removeClass('pre').removeClass('aft').css('animation', 'aft-changes 1.8s');
            $(obj + " ul li").eq(beginNum).nextAll("li").css('animation', 'go-aft 1s').addClass('aft').removeClass('pre').removeClass('center');
            $(obj + " ul li").eq(beginNum).prevAll("li").css('animation', 'go-pre 1s').addClass('pre').removeClass('aft').removeClass('center');

        }
    });

    $(chose+' .aft-buttom').click(function () {  //向右翻转效果
        if (beginNum < $(obj + " ul li").length-2) {
            beginNum++;
            $(obj + " ul").animate({left: -(beginNum - 1) * 567}, 300);
            $(obj + " ul li").eq(beginNum).addClass('center').removeClass('aft').css('animation', 'aft-changes 1.8s');
            $(obj + " ul li").eq(beginNum - 1).css('animation', 'go-pre 1s').addClass('pre').removeClass('center');
            if(beginNum>=lengths){
                $(chose+" ul li").eq(beginNum-lengths).addClass('active').siblings('li').removeClass('active');
            }else{
                $(chose+" ul li").eq(beginNum).addClass('active').siblings('li').removeClass('active');
            }
        }else{
            beginNum=lengths-1;
            $(chose+" ul li").eq(beginNum).addClass('active').siblings('li').removeClass('active');
            $(obj + " ul").animate({left: -(beginNum - 1) * 567}, 300);
            $(obj + " ul li").eq(beginNum).addClass('center').removeClass('pre').removeClass('aft').css('animation', 'aft-changes 1.8s');
            $(obj + " ul li").eq(beginNum).nextAll("li").css('animation', 'go-aft 1s').addClass('aft').removeClass('pre').removeClass('center');
            $(obj + " ul li").eq(beginNum).prevAll("li").css('animation', 'go-pre 1s').addClass('pre').removeClass('aft').removeClass('center');
        }
    });

    $(chose+" ul li").each(function(index){  //缩略图选择效果
        $(this).click(function(){
            $(this).addClass('active').siblings('li').removeClass('active');
            var toPosition=index+lengths;
            if(index==(lengths-1)){
                beginNum=lengths-1;
                //$(obj + " ul li").eq(beginNum-1).css('animation', 'go-pre 1s').addClass('pre').removeClass('center');
                $(obj + " ul").animate({left: -(beginNum - 1) * 567}, 300);
                $(obj + " ul li").eq(beginNum).addClass('center').removeClass('pre').removeClass('aft').css('animation', 'aft-changes 1.8s');
                $(obj + " ul li").eq(beginNum).nextAll("li").css('animation', 'go-aft 1s').addClass('aft').removeClass('pre').removeClass('center');
                $(obj + " ul li").eq(beginNum).prevAll("li").css('animation', 'go-pre 1s').addClass('pre').removeClass('aft').removeClass('center');
                beginNum=beginNum-1;
            }else{
                beginNum=toPosition;
                $(obj + " ul li").eq(beginNum-1).css('animation', 'go-pre 1s').addClass('pre').removeClass('center');
                $(obj + " ul").animate({left: -(beginNum - 1) * 567}, 300);
                $(obj + " ul li").eq(beginNum).addClass('center').removeClass('pre').removeClass('aft').css('animation', 'aft-changes 1.8s');
                $(obj + " ul li").eq(beginNum).nextAll("li").css('animation', 'go-aft 1s').addClass('aft').removeClass('pre').removeClass('center');
                $(obj + " ul li").eq(beginNum).prevAll("li").css('animation', 'go-pre 1s').addClass('pre').removeClass('aft').removeClass('center');
            }
        });
    });
    //悬停效果
    $(obj).hover(function(){
        window.clearInterval(times);
    },function(){
        times=setInterval(function(){
            if (beginNum < $(obj + " ul li").length-2) {
                beginNum++;
                $(obj + " ul").animate({left: -(beginNum - 1) * 567}, 300);
                $(obj + " ul li").eq(beginNum).addClass('center').removeClass('aft').css('animation', 'aft-changes 1.8s');
                $(obj + " ul li").eq(beginNum - 1).css('animation', 'go-pre 1s').addClass('pre').removeClass('center');
                if(beginNum>=lengths){
                    $(chose+" ul li").eq(beginNum-lengths).addClass('active').siblings('li').removeClass('active');
                }else{
                    $(chose+" ul li").eq(beginNum).addClass('active').siblings('li').removeClass('active');
                }
            }else{
                beginNum=lengths-1;
                $(chose+" ul li").eq(beginNum).addClass('active').siblings('li').removeClass('active');
                $(obj + " ul").animate({left: -(beginNum - 1) * 567}, 300);
                $(obj + " ul li").eq(beginNum).addClass('center').removeClass('pre').removeClass('aft').css('animation', 'aft-changes 1.8s');
                $(obj + " ul li").eq(beginNum).nextAll("li").css('animation', 'go-aft 1s').addClass('aft').removeClass('pre').removeClass('center');
                $(obj + " ul li").eq(beginNum).prevAll("li").css('animation', 'go-pre 1s').addClass('pre').removeClass('aft').removeClass('center');
            }
        },timeLong);
    });

    $(chose).hover(function(){
        window.clearInterval(times);
    },function(){
        times=setInterval(function(){
            if (beginNum < $(obj + " ul li").length-2) {
                beginNum++;
                $(obj + " ul").animate({left: -(beginNum - 1) * 567}, 300);
                $(obj + " ul li").eq(beginNum).addClass('center').removeClass('aft').css('animation', 'aft-changes 1.8s');
                $(obj + " ul li").eq(beginNum - 1).css('animation', 'go-pre 1s').addClass('pre').removeClass('center');
                if(beginNum>=lengths){
                    $(chose+" ul li").eq(beginNum-lengths).addClass('active').siblings('li').removeClass('active');
                }else{
                    $(chose+" ul li").eq(beginNum).addClass('active').siblings('li').removeClass('active');
                }

            }else{
                beginNum=lengths-1;
                $(chose+" ul li").eq(beginNum).addClass('active').siblings('li').removeClass('active');
                $(obj + " ul").animate({left: -(beginNum - 1) * 567}, 300);
                $(obj + " ul li").eq(beginNum).addClass('center').removeClass('pre').removeClass('aft').css('animation', 'aft-changes 1.8s');
                $(obj + " ul li").eq(beginNum).nextAll("li").css('animation', 'go-aft 1s').addClass('aft').removeClass('pre').removeClass('center');
                $(obj + " ul li").eq(beginNum).prevAll("li").css('animation', 'go-pre 1s').addClass('pre').removeClass('aft').removeClass('center');
            }
        },timeLong);
    });

    //定时翻放效果
    var times = setInterval(function(){
        if (beginNum < $(obj + " ul li").length-2) {
            beginNum++;
            $(obj + " ul").animate({left: -(beginNum - 1) * 567}, 300);
            $(obj + " ul li").eq(beginNum).addClass('center').removeClass('aft').css('animation', 'aft-changes 1.8s');
            $(obj + " ul li").eq(beginNum - 1).css('animation', 'go-pre 1s').addClass('pre').removeClass('center');
            if(beginNum>=lengths){
                $(chose+" ul li").eq(beginNum-lengths).addClass('active').siblings('li').removeClass('active');
            }else{
                $(chose+" ul li").eq(beginNum).addClass('active').siblings('li').removeClass('active');
            }
        }else{
            beginNum=lengths-1;
            $(chose+" ul li").eq(beginNum).addClass('active').siblings('li').removeClass('active');
            $(obj + " ul").animate({left: -(beginNum - 1) * 567}, 300);
            $(obj + " ul li").eq(beginNum).addClass('center').removeClass('pre').removeClass('aft').css('animation', 'aft-changes 1.8s');
            $(obj + " ul li").eq(beginNum).nextAll("li").css('animation', 'go-aft 1s').addClass('aft').removeClass('pre').removeClass('center');
            $(obj + " ul li").eq(beginNum).prevAll("li").css('animation', 'go-pre 1s').addClass('pre').removeClass('aft').removeClass('center');
        }
    },timeLong);
    console.log(beginNum);
}
