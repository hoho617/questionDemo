// 显示评论框
	function showCommentText() {
		$("#content").focus();
		showModal('comment_popover');
	}
	function showModal(id){
	var idStr = String(id); 
	$("#"+id).addClass("slide_active");
	$("body").append("<div class='popoverbg' id='hideDiv' onclick='hideBody()'></div>");
	$("#hideDiv").addClass("popoverbg_active");
}
//鍏抽棴寮瑰嚭妗�
function closeModal(id){
	$("#"+id).removeClass("slide_active");
	setTimeout(function(){
		$("#hideDiv").removeClass("popoverbg_active");
		$("#hideDiv").remove();
	},300) 
}

function hideBody() {
	$(".popover_content").removeClass("slide_active");
	$(".popover_follow").removeClass("slide_active");
	setTimeout(function(){
		$(".popoverbg_active").removeClass("popoverbg_active");
		$(".popoverbg").remove();
	},300)
}