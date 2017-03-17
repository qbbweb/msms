$(function(){
	$("#header").load("header.html")
	$("#footer").load("footer.html")
	
	var dj=false;
	$(".weixin").click(function(){
		if(dj==false){
			dj=true;
		$(this).removeClass("weixin").addClass("weixin2")
//		$(this).css({"background":"#f8f8f8","border-width":"1px","border-color":"#dadada","border-style":"solid"})

		$(".erweima").css("display","block")
		}else{
		$(this).removeClass("weixin2").addClass("weixin")
//		$(this).css({"background":"#f8f8f8","border-width":"1px","border-color":"#dadada","border-style":"solid"})
//		$(this).find("i").removeClass("icon")
		$(".erweima").css("display","none")
		 dj=false
		}

		
	})
	
	    
	$(window).scroll(function(){
			var nav=$(".sp_nav")
			var oA=nav.find("a")
			if($(window).scrollTop()>=1064){
				nav.css({"position":"fixed","top":"0","z-index":"998"})
				
			}else{
				nav.css({"position":"relative","top":"0","background":"#fff","z-index":"0"})
				
			}
		});
	
	
//	放大镜加切换
	var oWrap=$(".pic_wrap");
	var oLeft=$(".left_pic");
	var Lia=oLeft.find("li");
	var oRight=$(".right_pic");
	var Lib=oRight.find("li");
	nowIndex=0;
	
	Lia.click(function(){
		nowIndex=Lia.index($(this));
		Lia.find("img").removeClass("bor").end().eq(nowIndex).find("img").addClass("bor");
		Lib.hide().eq(nowIndex).show();
	})
	
	
	
	
	var oCon=$(".count");
	var oJian=$(".jian");
	var oJia=$(".jia");
	var oNum=$(".count_num");
	
	oJia.click(function(){
		oNum.html=++oNum.html;
	})
	
})
