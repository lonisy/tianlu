itz.invite={},itz.invite.init=function(inviteData){this.generalize(inviteData.copy),itz.util.ajaxPager({pager:inviteData.pager,ajaxHostUrl:inviteData.ajaxHostUrl,loadImgPath:inviteData.loadImgPath,container:"pagerContainer",pagination:"pagination"}),$("body").delegate(".ps1-close","click",function(){var id=$(this).parents(".ui-dialog-content").attr("id");$("#"+id).dialog("close")}),$(".iShare-d").iShare({url:inviteData.inviteurl,title:"100元起投！年化收益12%-15%，全额本息担保",content:"100元起投！年化收益12%-15%，全额本息担保，注册即送50元，快来注册吧！"})},itz.invite.generalize=function(copy){var cpStatic=!0;$("#generalize").click(function(){$("#generalizePop").dialog({dialogClass:"clearPop pop-style-1",bgiframe:!0,modal:!0,resizable:!1,closeOnEscape:!1,show:{effect:"fadeIn",duration:450},open:function(){cpStatic&&(ele=$("#generalizePop_error"),$("#copyBtn").zclip({path:copy.path,copy:function(){return $("#copyText").val()},afterCopy:function(){ele.show().find(".em").text("复制成功").end().find(".generalize_icon").removeClass("icon-tanhao").addClass("icon-check")}}),cpStatic=!1),$("#generalizePop_error").hide()},width:537,close:243})})};