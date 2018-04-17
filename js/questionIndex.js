
function init(){
	changeTab();
	inputSearch();
	inputPop();
	closeSearchPop();
	showEmptyIcon();
	emptyInput();
}
// tab切换
function changeTab(){
	$(".question_tab li").click(function(){
		$(".question_tab li").removeClass('active').eq($(this).index()).addClass('active');
		$(".questions_list").addClass('dn').eq($(this).index()).removeClass('dn');
	})
}


// 点击搜索框跳页面
function inputSearch(){
	$(".search_question").focus(function(){
//		window.location.href = "search.html";
//		window.open('search.html');
		$(".search_question").blur();
	})
}

// 点击搜索框出现蒙版
function inputPop(){
	$(".search_question").focus(function(){
		$(".search_pop").removeClass("dn");
		inputFocus();
	})
}

// 出现搜索页面时搜索框聚焦
function inputFocus(){
	$("#searchInput").focus();
}

// 关闭搜索页面
function closeSearchPop(){
	$(".cancle_button").click(function(){
		$(".search_pop").addClass("dn");
	})
}

//显示清空按钮
function showEmptyIcon(){
	$("#searchInput").keydown(function(){
			$(".empty_icon").removeClass("dn");
		}
	);
}

// 点击清空按钮，清空文本框内容
function emptyInput(){
	$(".empty_icon").click(function(){
		$("#searchInput").val("");
		inputFocus();
	})
}


$(function(){
	init();
})
