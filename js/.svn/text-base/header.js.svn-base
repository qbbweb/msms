$(function(){
	var oWrap=$(".header_nav_wrap");
	var tit=$(".nav_menu_tit,.nav_menu_tit2");
	var Scroll=$(".Scroll_wrap");
	var oMenu=$(".nav_menu");
	var oLi=$(".nav_menu_tit li,.nav_menu_tit2 li")
	var Lis=$(".nav_menu_tit li")
	nowIndex=0;
	
	
	oWrap.hover(function(){
		$(this).css("background","#000")
		Scroll.stop().slideDown();
		oLi.find("a").css("color","#fff")
	},function(){
		$(this).css("background","#fff")
		Scroll.hide();
		oLi.find("a").css("color","#666")
	})
	
	oMenu.hover(function(){
		nowIndex=oMenu.index($(this))
       $(this).css("background","#ebebec")
       Lis.eq(nowIndex).addClass("bbb")
    
	},function(){
		$(this).css("background","#fff")
       Lis.eq(nowIndex).removeClass("bbb")
      
	})
})
