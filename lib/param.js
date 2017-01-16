//JinXinhua <79202792 at qq.com> 20150904

/**
 * 获取全局设置
 * @param qo 查询三个参数,不要求全部输入 {“名称”:"xx",“备注”:"",“类别”:""}
 * @returns 指定参数值
 */
function getGlobalParam(qo) {
    var menu1 = "系统设置";
    var menu2 = "全局设置";
    tapMenu(menu1, menu2);
    var ret = {};
    var fields = querySystemGlobalFields(qo);
    query(fields);
    var qr = getQR();
    if (qr.total > 0) {
        // ret = qr.data[0]["数值"];
        if (qr.total == 1) {
            ret["行"] = 0;
            ret["数值"] = qr.data[0]["数值"];
        } else {
            for (var i = 0; i < qr.curPageTotal; i++) {
                var name = qo["名称"], rem = qo["备注"];
                if (name == qr.data[i]["名称"] || rem == qr.data[i]["备注"]) {
                    ret["行"] = i;
                    ret["数值"] = qr.data[i]["数值"];
                    break;
                }
            }
        }
    }
    return ret;
}

/**
 * 设置全局参数
 * @param qo 查询的字段,＝getGlobalParam qo
 * @param o 设置的字段,eg:{ "新值" : "0", "数值" : [ "不合并", "in" ] } 或 { "新值" : "0", "数值" : [
 *            "需要" ] };
 * @returns 成功与否
 */
function setGlobalParam(qo, o) {
    var msg = "全局设置-" + qo["备注"];

    var newValue = o["新值"];
    var a1 = o["数值"];
    var newTxt = a1[0];
    var op = getArray1(a1, 1);

    var obj = getGlobalParam(qo);
    if (isUndefined(obj["行"])) {
        logDebug("未找到参数" + qo["备注"]);
        return false;
    }
    var line = obj["行"];
    var oldValue = obj["数值"];

    var isEq = (op == "in" && isEqualOrIn(oldValue, newValue, newTxt))
            || ((op == "eq" || isUndefined(op) && oldValue == newTxt));
    if (isEq) {
        logDebug("新值与旧值相同，无需修改");
    } else {
        tapLine(line);// tapFirstText();
        // debugElementTree(window);
        var setObj = {};
        setObj["数值"] = [ newValue, "in" ];
        setObj["授权码"] = [];
        var fields = editSystemGlobalFields(setObj);
        setTFieldsValue(getScrollView(), fields);
        saveAndAlertOk();
        // oldValue = getGlobalParam(qo);
        tapMenu2("全局设置");
        tapButton(window, QUERY);
        var qr = getQR();
        oldValue = qr.data[line]["数值"];
    }

    isEq = (op == "in" && isEqualOrIn(oldValue, newValue, newTxt))
            || ((op == "eq" || isUndefined(op) && oldValue == newTxt));
    if (isEq) {
        logInfo(msg + ",通过");
    } else {
        logInfo(msg + ",失败");
    }
    return isEq;
}
/**
 * 设置全局参数 直接输入值
 * @param qo
 * @param o
 * @returns {Boolean}
 */
function setGlobalParam2(qo, o) {
    var newValue = o["数值"];
    var obj = getGlobalParam(qo);
    var line = obj["行"];
    if (isUndefined(line)) {
        logDebug("未找到参数" + qo["备注"]);
        return false;
    }

    tapLine(line);
    var setObj = {};
    setObj["数值2"] = [ newValue ];
    setObj["授权码"] = [];
    var fields = editSystemGlobalFields(setObj);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();// 设置保存后新值不显示，因此跳过验证
    tapMenu2("全局设置");// 防止卡界面
    return true;
}
/**
 * 获取本地设置,返回对象 {"数值":"1","rowIndex":5}
 * @param qo 查询参数,只支持备注关键字(多个逗号分割), eg:{ "备注" : "开单界面,保存后,打印确认" }
 * @returns
 */
function getLocalParam(qo) {
    var menu1 = "系统设置";
    var menu2 = "本地设置";
    tapMenu(menu1, menu2);
    var ret = {};
    var qr = getQR(window, getScrollView(-1), TITLE_SEQ);
    if (qr.total > 0) {
        var nameKeys = qo["名称"];
        var remarkKeys = qo["备注"];
        for (var i = 0; i < qr.data.length; i++) {
            var data1 = qr.data[i];
            var name = data1["名称"];
            var remark = data1["备注"];
            if (isEqual(nameKeys, name) || isIn2(remark, remarkKeys)) {
                ret["数值"] = data1["数值"];
                ret["rowIndex"] = i;
                break;
            }
        }
    }

    return ret;
}
/**
 * 
 * @param qo ＝getLocalParam qo
 * @param o 设置的字段,eg:{ "新值" : "0", "数值" : [ "不合并", "in" ] } 或 { "新值" : "0", "数值" : [
 *            "需要" ] };
 * @returns 成功与否
 */
function setLocalParam(qo, o) {
    var msg = "本地设置-";
    for ( var i in qo) {
        msg = msg + i + qo[i];
    }

    var newValue = o["新值"];
    var a1 = o["数值"];
    var newTxt = a1[0];
    var op = getArray1(a1, 1);

    var o1 = getLocalParam(qo);
    var rowIndex = o1["rowIndex"];
    var oldValue = o1["数值"];
    var isEq = (op == "in" && isEqualOrIn(oldValue, newValue, newTxt))
            || ((op == "eq" || isUndefined(op) && oldValue == newValue));
    if (isEq) {
        logDebug("新值与旧值相同，无需修改");
    } else {
        var texts = getStaticTexts(getScrollView());
        var qrTitle = getQResultTitle(texts, TITLE_SEQ, 4);
        var index = qrTitle.index + (rowIndex + 1) * qrTitle.total;
        tap(texts[index]);
        delay();

        var setObj = { "数值" : [ newValue, "in" ] };
        var fields = editSystemGlobalFields(setObj);
        setTFieldsValue(getScrollView(), fields);
        saveAndAlertOk();

        o1 = getLocalParam(qo);
        oldValue = o1["数值"];
    }

    isEq = (op == "in" && isEqualOrIn(oldValue, newValue, newTxt))
            || ((op == "eq" || isUndefined(op) && oldValue == newValue));
    if (isEq) {
        logInfo(msg + ",通过");
    } else {
        logInfo(msg + ",失败");
    }
    return isEq;
}

function testParamAll() {
    // run("修改全局设置值", "testSetGlobalParam");
    // run("获取本地设置值", "testGetLocalParam");
    run("修改本地设置值", "testSetLocalParam");
}
function testSetGlobalParam() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "均色均码", "in" ] };
    o = { "新值" : [ "0" ], "数值" : [ "颜色尺码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    return ret;
}
function testGetLocalParam() {
    var qo = { "备注" : "开单界面,保存后,打印确认" };
    var v1 = getLocalParam(qo);
    return v1 == "1"; // 1 默认显示
}
function testSetLocalParam() {
    var qo, o, ret = true;
    qo = { "备注" : "开单界面,保存后,打印确认" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));
    return ret;
}