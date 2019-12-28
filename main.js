function ajaxLoadJs(files, funBefore, funOk, funPercent) {
	var fileData = []; //记录加载完的文件
	var oknum = 0; //加载完成的数量
	if (typeof(funBefore) == "function") funBefore(); //回调完成事件  

	//循环异步加载文件
	for (var i = 0; i < files.length; i++) {
		loadfile(files[i]);
	}
	//加载文件
	function loadfile(file) {
		$.ajax({
			url: file,
			dataType: "text",
			success: function(data) {
				oknum++;
				console.log(data)
				fileData[file] = data; //加载成功写入数组
				loadok(file); //调用成功后的处理
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				console.log("加载失败：" + file)
				console.log(textStatus)
				console.log(errorThrown)
			}
		});
	}

	//加载成功后的处理
	function loadok(file) {
		//计算加载进度
		//这里加1，因为输出js文件到页面，也需要时间，加1就是把输出js的时间计为一个文件
		//这样所有文件加载完成后是 99% ，输出到页面完成后，才是 100%    
		var percent = oknum / (files.length + 1);
		if (typeof(funPercent) == "function") funPercent(percent, file);

		//加载完成后，按传的顺序输出js到页面
		if (oknum == files.length) {
			for (var i = 0; i < files.length; i++) {
				var script = document.createElement('script');
				script.innerHTML = fileData[files[i]];
				document.getElementsByTagName('HEAD').item(0).appendChild(script);
			}
			if (typeof(funPercent) == "function") funPercent(1, "all"); //输出完成即认为加载完成
			if (typeof(funOk) == "function"){funOk()}else{console.error('funOk must be a function type')}; //回调完成事件
			//loading.close()
		}
	}
}