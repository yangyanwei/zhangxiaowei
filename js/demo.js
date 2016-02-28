$(function() {
    var navs=$(".nav div[class|=col]");
    var navr=$(".navr");
    navs.click(function(){
        var index=$(this).index();
        navs.removeClass("navr").eq(index-1).addClass("navr");
    });
    $(window).resize(function(){
        var clientW=$(window).width();
        if(clientW<768) {
            $(".nav").css("display", "none");
            $(".nav1").css("display", "block");
        }
        else{
            $(".nav").css("display","block");
            $(".nav1").css("display","none");
        }
    });
    $(window).resize();
    $(".cols").click(function(){
        $(".sons").finish();
        $(".sons").slideToggle(200);
    });
/*header下拉效果*/
    var son=$(".son");
    son.click(function(e){
        var index = $(this).index();
        son.css({background: "#2B2C30", color: "#fff"}).eq(index).css({
            background: "#2F3238", color: "#FFA200"})
        e.stopPropagation();
    })

/*banner向上跑一屏*/
    var btn=$(".btn");
    var banner=$(".banner");
    var clientH=$(window).height()-65+"px";
    var clienth=$(window).height();
    btn.click(function(){
        $("body").animate({scrollTop:clientH},300)
    })
    $(".logo").click(function(){
        $("body,html").animate({scrollTop:0},300)
    })

/*阻止浏览器默认行为*/
    $(document).mousedown(function(e){
        e.preventDefault();
    })
    //楼层跳转
    var abouts=$(".abouts");
    var heads=$(".head");
    for(var i=0;i<abouts.length;i++){
        abouts[i].aa=abouts[i].offsetTop;
         obj=document.documentElement.scrollTop?document.documentElement:document.body;
        if(obj.scrollTop>=abouts[i].aa-66){//滚动条的高度如果超出当前楼层的高度的offsetTop，就让对应的小按钮发生变化
            for(var j=0;j<heads.length;j++){
                //heads[j].style.background="#2B2C30";
                //heads[j].style.color="#fff";
            }
             //heads[i].style.background="#2F3238";
            //heads[i].style.color="#FFA200";
        }
    }
    //6-2通过小按钮控制楼层
    for(var i=0;i<heads.length;i++){
        heads[i].index=i;
        heads[i].onclick=function(){
            $("body,html").animate({scrollTop:abouts[this.index].aa-66},300)
        }
    }
    $(".input1").mousedown(function(){
        var index=$(this).index(".input1");
        $(".input1").css({border:"1px solid #555",boxShadow:"none"}).eq(index).css({border:"1px solid #FFA200",boxShadow:"0 0 5px #ffa200"});
    })
    $(".textarea").focus().css({border:"1px solid #FFA200",boxShadow:"0 0 5px #ffa200"});
/*选项卡*/
    $(".daoa").click(function(){
        var index=$(this).index(".daoa");
        $(".daoa").css({color:"#fff"}).eq(index).css({color:"#FFA200"})
        $(".zuopina").css({display:"none"}).eq(index).css({display:"block"});
    })
/*显示放大*/
    $(".zuopin .zi").hover(function(){
        var index=$(this).index(".zuopin .zi");
        $(".zuopin a").css({transform:"scale(0,0)"}).eq(index).css({transform:"scale(1,1)",transition:"transform 0.5s linear"})
    },function(){
        $(".zi a").css({transform:"scale(0,0)",transition:"transform 0.5s linear"})
    })

});

