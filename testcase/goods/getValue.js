// goods
/**
 * 获取库存分布二级界面 款号的数据
 * @param code
 * @param close 是否返回 默认返回
 * @returns
 */
function getDetTS100006(code, close) {
    tapLine();
    var keys = { "款号" : code };
    var fields = queryGoodsDistributionDetFields(keys);
    var view = getScrollView(-1, 0);
    setTFieldsValue(view, fields);
    tapButton(view, QUERY);

    var qr = getQR2(view, "名称", "文一店");// utf-8
    // 查询结果唯一
    var data = qr.data[0];

    if (isUndefined(close)) {
        tapNaviClose();
    }

    return data;
}
/**
 * 获取当前库存界面，货品的库存
 * @returns
 */
function getGoodCurStock() {
    var qr = getQR();
    var stock = {};
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.data.length; i++) {
            var t = qr.data[i]["颜色"] + "-" + qr.data[i]["尺码"];
            stock[t] = qr.data[i]["库存"];
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    return stock;
}
/**
 * 获取最后一个不为空的tableView
 * @param view
 * @returns
 */
function getLastTableView(view) {
    if (isUndefined(view)) {
        view = window;
    }
    var exclude = 0;// 主界面0是菜单，要排除掉
    if (view != window) {
        exclude = -1;
    }
    var tableViews = getTableViews(view), view1;
    var tableViewIndex = tableViews.length - 1;
    for (; tableViewIndex > exclude; tableViewIndex--) {
        view1 = tableViews[tableViewIndex];
        if (view1.cells().length != 0) {
            break;
        }
    }
    logDebug("tableViews length=" + tableViews.length + "  ,tableViewIndex="
            + tableViewIndex);
    return view1;
}
/**
 * 获取图片选择界面查询结果
 * @param view
 * @returns {Array}
 */
function getPictureQR(view) {
    var cells = view.cells(), arr = [], f;
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var texts = getStaticTexts(cell);
        var length = texts.length;
        // 每个货品都含3条数据，对应款号名称，数据，上架天数
        // 每行右端可能显示行数，有1~2个显示上架天数范围
        var curLineTotal = Math.floor((length - 1) / 3);
        for (var j = 0; j < curLineTotal; j++) {
            var t1 = texts[j * 2];
            var v = t1.value().split(/\s+/);
            var code = v[0], name = v[1];
            var addIdx = length - curLineTotal + j;
            var subIdx = j * 2 + 1;
            var det = texts[subIdx].value();// 不同模块显示不同
            var days = texts[addIdx].value();
            f = new PResult(code, name, det, days, addIdx, subIdx);
            arr.push(f);
        }
    }
    return arr;
}
/**
 * 获取查询界面第一个...按钮的下标
 * @returns
 */
function getQueryBtnIndex() {
    return getButtonIndex(window, "...");
}
/**
 * 获取view中TF数组激活状态 0灰化 1正常
 * @param view
 * @param startIdx
 * @param endIdx
 * @returns {String}
 */
function getTFEnabledState(view, startIdx, endIdx) {
    var str = "";
    var tf = getTextFields(view);
    if (isUndefined(startIdx)) {
        startIdx = 0;
    }
    if (isUndefined(endIdx)) {
        endIdx = tf.length - 1;
    }
    for (var i = startIdx; i <= endIdx; i++) {//
        var ok = tf[i].isEnabled();
        if (ok) {
            str += 1;
        } else {
            str += 0;
        }
    }
    return str;
}
/**
 * 获取指定界面textFields数组的下标
 * @param view
 * @returns
 */
function getTFieldsIndex(view) {
    var ret = {};
    var texts = getTextFields(view);
    for (var i = 0; i < texts.length; i++) {
        var tf = texts[i];// .textFields()[0]
        if (tf.isVisible()) {// 排除无效的TF !isUIAElementNil(tf) isHidden
            var name = texts[i].name();
            if (isDefined(ret[name])) {
                name += "2";// 重名
            }
            ret[name] = i;
        }
    }
    // debugObject(ret, "下标数组为");
    return ret;
}
/**
 * 获取一级界面查询textfield对象数组
 * @returns
 */
function getWindowTFieldsIndex() {
    return getTFieldsIndex(window);
}
/**
 * 获取整个界面所有textfield的值 需要添加accessibilityLabel
 * @params view 默认window
 * @returns
 */
function getTFieldsValue(view) {
    if (isUndefined(view)) {
        view = window;
    }
    var tf = getTFieldsIndex(view);
    var arr = {};
    for ( var i in tf) {
        var index = tf[i];
        var v = getTextFieldValue(view, index);
        arr[i] = v;
    }
    if (isDefined(arr["totalmoney"])) {
        arr["总计"] = arr["totalmoney"];
    }
    debugObject(arr, "值为");
    return arr;
}
/**
 * 统一通知数，保存后由NULL变成0
 * @param qResult
 * @returns
 */
function unityNotice(qResult) {
    if (qResult.titles.hasOwnProperty("通知数")) {
        for (var i = 0; i < qResult.data.length; i++) {
            qResult.data[i]["通知数"] = 0;// 通知数没有用到，直接统一处理
        }
    }
    return qResult;
}
/**
 * 统一已发，销售订货新增订货保存后由NULL变成0
 * @param qResult
 * @returns
 */
function unityShipped(qResult) {
    if (qResult.titles.hasOwnProperty("已发")) {
        for (var i = 0; i < qResult.data.length; i++) {
            if (qResult.data[i]["已发"] == "") {
                qResult.data[i]["已发"] = 0;
            }
        }
    }
    return qResult;
}