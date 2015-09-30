// JinXinhua <79202792 at qq.com> 20150930

// 新增开单，无颜色尺码
function editSalesBillNoColorSize(o) {
	var keys = [ "客户" ];
	var fields = editSalesBillFields(keys);
	changeTFieldValue(fields["客户"], o["客户"]);
	setTFieldsValue(window, fields);

	var details = o["明细"];
	for ( var i in details) {
		var start = 4 * i;
		var d = details[i];
		var f0 = new TField("货品", TF_AC, start + 0, d["货品"], -1, 0);
		var f3 = new TField("数量", TF, start + 3, d["数量"]);
		var fields = [ f0, f3 ];
		setTFieldsValue(getScrollView(), fields);
	}

	if (!isUndefined(o["现金"])) {
		var f = editSalesBillField("现金");
		changeTFieldValue(f, o["现金"]);
		setTFieldsValue(window, [ f ]);
	}

	tapButton(window, SAVE);
	tapPrompt();
	// 保存成功后还有一个是否打印的弹窗
	var cond = "!isAlertVisible()";
	waitUntil(cond, 9);
	// clearAlert();

	tapButton(window, RETURN);
}