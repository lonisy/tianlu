itz.remind={},itz.remind.init=function(remindData){$("body").delegate(".ps1-close","click",function(){var id=$(this).parents(".ui-dialog-content").attr("id");$("#"+id).dialog("close")}),$("#notificationForm").validate({submitHandler:function(form){$("#submitBtn").attr("disabled",!0).val("提交中..."),$.ajax({url:remindData.postUrl,type:"post",dataType:"json",data:$(form).serialize()+"&type=1",success:function(data){0===data.code?itz.util.promptA("Drawings_prompt","promptTmpl",["通知设置提示","设置成功！","",1]):itz.util.promptA("Drawings_prompt","promptTmpl",["通知设置提示","设置失败！","原因："+(data.info?data.info:data.data[0])+"<br/>",0]),$("#submitBtn").removeAttr("disabled").val("确认提交")},error:function(){itz.util.promptA("Drawings_prompt","promptTmpl",["通知设置提示","由于网络原因，保存失败！","您可以点击保存重试，或联系网站客服<br/>",0]),$("#submitBtn").removeAttr("disabled").val("确认提交")}})}})};