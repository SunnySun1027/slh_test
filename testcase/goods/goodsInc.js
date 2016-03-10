//LuXingXin <52619481 at qq.com> 20151214
//货品管理内部用到的一些方法

/**
 * 新增货品 混合keys
 */
//function addGoodsKeysMix(newKeys) {
//    var oldKeys = { "款号" : "goods", "名称" : "货品", "品牌" : "1010pp",
//        "吊牌价" : "200", "产品折扣" : "0.85", "季节" : "夏季", "类别" : "登山服",
//        "厂商" : "Adida公司", "计量单位" : "双", "仓位" : "默认", "最小库存" : "0",
//        "最大库存" : "1000", "经办人" : "000", "备注" : "123" }
//    var ret = mixObject(oldKeys, newKeys);
//    return ret;
//}
/**
 * 获取新增货品界面输入框的值
 * @returns {Array}
 */
function getEditGoodsValue() {
    var arr = new Array();
    // 现在有26个
    for (var i = 0; i < 27; i++) {
        var j = i;
        if (i >= 6) {
            j = i + 1;
        }
        arr[i] = getTextFieldValue(getScrollView(), j);
        if (isUndefined(getTextFieldValue(getScrollView(), j))) {
            arr[i] = "";
            logDebug("找不到下标为" + j + "的输入框");
            break;
        }
    }

    return arr;
}

/**
 * 新增货品
 * @param keys
 * @param colorSize "yes":颜色尺码 "no":均色均码
 * @param price "yes":默认价格模式 "no":省代价格模式
 * @param day 上架日期
 */
function addGoods(keys, colorSize, price, day) {
    var colorSizeStartIndex, priceStartIndex;

    if (isUndefined(colorSize) || colorSize == "no") {
        colorSizeStartIndex = 0;
    } else {
        if (colorSize == "yes") {
            colorSizeStartIndex = 4;
        } else {
            logDebug("未知colorSize" + colorSize);
        }
    }

    if (isUndefined(price) || price == "no") {
        priceStartIndex = 0;
    } else {
        if (price == "yes") {
            priceStartIndex = -1;
        } else {
            logDebug("未知price" + price);
        }
    }

    tapMenu("货品管理", "新增货品+");
    if (isDefined(day)) {
        changeMarketTime(day);
    }
    var fields = editGoodsFields(keys, false, colorSizeStartIndex,
            priceStartIndex);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();

    delay();
    tapReturn();
}

/**
 * 库存调整单 r:调整后库存
 */
function addGoodsStockAdjustment(r) {
    tapFirstText();
    tapNaviButton("库存调整");
    test100090Field1(r);
    runAndAlert("test100090Field", OK);
    tapNaviLeftButton();
}

/**
 * 新增客户
 * @param keys
 */
function addCustomer(keys, check) {
    tapMenu("往来管理", "新增客户+");
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    var ret = true;
    if (isDefined(check) && check == "yes") {
        tapMenu("往来管理", "客户查询");
        var qKeys = { "客户名称" : keys["名称"] };
        fields = queryCustomerFields(qKeys);
        var qr = getQR();
        ret = isEqual(keys["名称"], qr.data[0]["名称"]);
    }
    return ret;
}

/**
 * 新增厂商
 * @param keys
 */
function addProvider(keys) {
    tapMenu("往来管理", "新增厂商+");
    var fields = editCustomerProviderFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);

    delay();
    tapReturn();
}

/**
 * 根据第一个标题，点击静态文本，默认为序号1
 * @param name 第一个标题的内容
 * @param view1
 */
function tapTextByFirstWithName(name, view1) {
    if (isUndefined(name)) {
        name = "1";
    }
    if (isUndefined(view1)) {
        view1 = getScrollView();
    }
    var texts = getStaticTexts(view1);
    var ok = tap(texts.firstWithName(name), true);
    delay();
}
/**
 * 点击第一个标题内容为value的静态文本
 * @param title
 * @param value
 * @param view1
 * @param title2
 * @param value2
 */
function tapFirstTextByTitle(title, value, view1, title2, value2, qr) {
    if (isUndefined(view1)) {
        view1 = getScrollView();
    }
    if (isUndefined(qr)) {
        qr = getQR();
    }
    var a;
    for (var i = 0; i < qr.curPageTotal; i++) {
        if (isDefined(title2) && isDefined(value2)) {
            if (qr.data[i][title] == value && qr.data[i][title2] == value2) {
                a = i;
                break;
            }
        } else {
            if (qr.data[i][title] == value) {
                a = i;
                break;
            }
        }
    }

    if (isUndefined(a)) {
        logDebug("当前页没有找到" + title + "的内容为" + value);
    }

    var name = qr.data[a]["序号"];
    tapTextByFirstWithName(name, view1);

    return a;
}

/**
 * 修改密码
 * @param oldSecure
 * @param newSecure
 */

function changeSecure(oldSecure, newSecure) {
    tapMenu("系统设置", "改密码");
    var tf = window.secureTextFields()[0].secureTextFields()[0];
    tf.setValue(oldSecure);
    tf = window.secureTextFields()[1].secureTextFields()[0];
    tf.setValue(newSecure);
    tf = window.secureTextFields()[2].secureTextFields()[0];
    tf.setValue(newSecure);

    tapButton(window, OK);
    tapPrompt();
    var ret = isIn(alertMsg, "操作成功");
    tapNaviLeftButton();

    // 刷新，使新密码生效
    tapRefresh();
    return ret;
}

function checkShowField(view1, fields, expected) {
    var ret = true;
    for ( var i in fields) {
        var f = fields[i];
        var idx = f.index;
        var actual;
        var type2 = f.type.substr(0, 2);
        switch (type2) {
        case TF:
            actual = getTextFieldValue(view1, idx);
            break;
        case TV:
            actual = getTextViewValue(view1, idx);
            break;
        default:
            logWarn("未知type＝" + f.type);
        }

        var ok = isEqual(expected, actual);
        ret = ret && ok;
    }
    return ret;
}
/**
 * 单项查询条件验证
 * @param qr
 * @param title
 * @param expected
 * @param type
 * @param expected2
 * @returns {Boolean}
 */
function checkQResult(qr, title, expected, type, expected2) {
    var ret = false;
    if (qr.data.length > 0) {
        for (var j = 1; j <= qr.totalPageNo; j++) {
            for (var i = 0; i < qr.curPageTotal; i++) {
                var value = qr.data[i][title];
                switch (type) {
                case "batch":
                    ret = expected <= value && value <= expected2;
                    break;
                case "day":
                    var value = getDay24(value);
                    ret = isAnd(expected <= value, value <= expected2);
                    break;
                default:
                    ret = isEqual(expected, value);
                    break;
                }
                if (!ret) {
                    logDebug("第" + j + "页,第" + i + "行 expected=" + expected
                            + "  actual=" + value);
                    break;
                }
            }
            if (ret && j < qr.totalPageNo) {
                scrollNextPage();
                qr = getQR();
            }
        }
    }
    return ret;
}

/**
 * 清除指定下标的文本框的内容
 * @param view
 * @param index
 * @param type "SC":TF_SC一类的文本框
 */
function clearTFieldsByIndex(view, index, type) {
    var tf = view.textFields()[index];
    tap(tf.textFields()[0]);

    if (isDefined(type) && type == "SC") {
        view.popover().dismiss();
    }

    var ok = tap(tf.buttons()["清除文本"]);
    if (!ok) {
        tap(tf.buttons()["Clear text"]);
    }

    tapKeyboardHide();
}

function toDate(day) {
    var day1 = day.split("-");
    return new Date(day1[0], day1[1], day1[2]);
}

/**
 * 总数据条数和总页码数的验证
 * @param qr
 * @returns
 */
function totalAndPageCheck() {
    var qr = getQR();
    var total = qr.total;
    var totalPageNo = qr.totalPageNo;
    var expected = Math.ceil(total / 15);
    var ret = isEqual(expected, totalPageNo);

    goPage(totalPageNo, qr);
    delay();
    qr = getQR();
    var i = qr.curPageTotal - 1;
    expected = qr.data[i]["序号"];
    ret = isAnd(ret, isEqual(expected, total));

    goPage(1, qr);
    delay();
    return ret;
}

/**
 * 跳转到指定页面(输入值)
 * @param page
 * @param qr
 */
function goPage2(page, qr) {
    var total = qr.totalPageNo;
    var curPageIndex = qr.curPageNo + "/" + total;
    if (total > 1 && page <= total && page > 0) {
        window.staticTexts()[curPageIndex].tapWithOptions({ tapOffset : {
            x : 0.08, y : 0.55 } });
        delay(); // 为了让跳转页面加载完成

        var index = getTextFieldIndex(window, -1);
        var tf = window.textFields()[index].textFields()[0];
        tf.setValue(page);
        tapKeyboardHide();
        // var f = new TField("", TF, index, page);
        // setTFieldsValue(window, f);
        tapButton(window, OK);
    } else {
        logDebug("goPage 目标页=" + page + " 总页数=" + total + "，无需换页或失败");
    }

}

/**
 * 翻页检验 取页面每一条数据与其他页面的每一条数据做对比 正常情况下，应该不存在完全相同的数据吧~ 最后会回到第一页
 * @param titleTotal
 */
function goPageCheck(titleTotal) {
    var pageInfoView = window;
    var dataView = getScrollView();
    var firstTitle = TITLE_SEQ;

    // 当前页为1
    var qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
    var ok = isEqual(1, qr.curPageNo);
    if (!ok) {
        goPage(1, qr);
        qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
    }

    var totalPageNo = qr.totalPageNo;
    var i, ret = true;

    if (totalPageNo > 1) {
        var page1 = qr.data;
        // 总页数验证
        ret = isAnd(ret, isEqual(Math.ceil(qr.total / 15), totalPageNo));

        // 最后一页验证
        goPage(totalPageNo, qr);
        qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
        var page2 = qr.data;
        var finSeq = qr.curPageTotal - 1;
        var firstSeq = Number(qr.curPageNo - 1) * 15 + 1;
        // 最后的序号应该等于总数据条数
        ret = isAnd(ret, isEqual(qr.total, qr.data[finSeq]["序号"]), isEqual(
                firstSeq, qr.data[0]["序号"]),
                isEqual(totalPageNo, qr.curPageNo), isDifferentArray(page1,
                        page2, 1), scrollPrevPageCheck(firstTitle, titleTotal));

        // 当总页数大于2时，追加一页验证
        if (totalPageNo > 2) {
            qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
            var midPage = Math.ceil(totalPageNo / 2);
            logDebug("midPage=" + midPage);
            // 输入值页面切换
            goPage2(midPage, qr);
            qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
            firstSeq = Number(qr.curPageNo - 1) * 15 + 1;
            finSeq = Number(qr.curPageNo) * 15;
            var page3 = qr.data;
            ret = isAnd(ret, isEqual(firstSeq, qr.data[0]["序号"]), isEqual(
                    finSeq, qr.data[14]["序号"]), isEqual(midPage, qr.curPageNo),
                    scrollPrevPageCheck(firstTitle, titleTotal),
                    isDifferentArray(page1, page2, 1), isDifferentArray(page1,
                            page3, 1), isDifferentArray(page2, page3, 1));

            qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
            ret = isAnd(ret, goPageCheckField());
            goPage2(1, qr);
        }
    } else {
        // 只有一页的时候，滑动页面，检测有没有提示错误
        scrollPrevPage();
        scrollNextPage();
        goPage(1, qr);
        ret = isAnd(ret, goPageCheckField());
    }
    logDebug("goPageCheck ret=" + ret);
    return ret;
}

/**
 * 页面切换，输入页码后点取消，验证留在当前页
 * @param qr
 */
function goPageCheckField() {
    var qr = getQR();
    var arr1 = qr.data;
    var total = qr.totalPageNo;
    var curPageNo = qr.curPageNo;
    var curPageIndex = curPageNo + "/" + total;
    window.staticTexts()[curPageIndex].tapWithOptions({ tapOffset : { x : 0.08,
        y : 0.55 } });
    delay(); // 为了让跳转页面加载完成

    var index = getTextFieldIndex(window, -1);
    var tf = window.textFields()[index].textFields()[0];
    tf.setValue("1");
    tapKeyboardHide();
    tapButton(window, CANCEL);

    qr = getQR();
    var arr2 = qr.data;
    var ret = isAnd(isEqualDyadicArray(arr1, arr2), isEqual(curPageNo,
            qr.curPageNo));
    return ret;
}

/**
 * 二维数组是否相等
 * @param data1
 * @param data2
 * @returns {Boolean}
 */
function isEqualDyadicArray(data1, data2) {
    var i, ret = true;
    var length = Math.min(data1.length, data2.length)
    for (i = 0; i < length; i++) {
        var arr1 = data1[i];
        var arr2 = data2[i];
        ret = isAnd(ret, isEqualObject(arr1, arr2));
    }
    return ret;
}

function arrayToString(data) {
    var value, ret = "";
    for ( var i in data) {
        value = data[i];
        ret = ret + "," + value;
    }
    return ret;
}
/**
 * 数组是否不同
 * @param data1
 * @param data2
 * @returns {Boolean}
 */
function isDifferentArray(data1, data2, n) {
    var i, j, s1, s2, ret = true;
    if (isUndefined(n)) {
        n = 0;
    }
    for (j = n; j < data1.length; j++) {
        s1 = arrayToString(data1[j]);
        for (i = n; i < data2.length; i++) {
            s2 = arrayToString(data2[i]);
            if (isEqual(s1, s2)) {
                ret = false;
                break;
            }
        }
        if (!ret) {
            logDebug("内容相同");
            break;
        }
    }

    return ret;
}

function isDifferentArrayField(arr1, arr2) {
    // debugObject(arr1, "expected");
    // debugObject(arr2, "actual");
    var ret = false;
    var v1, v2;
    for ( var i in arr1) {
        v1 = arr1[i];
        v2 = arr2[i];
        if (v1 != v2) {
            ret = true;
            break;
        }
    }
    return ret;
}

/**
 * 判断2个数组是否有相同数据
 * @param arr1
 * @param arr2
 * @returns {Boolean}
 */
function isHasSame(arr1, arr2) {
    var ret = true;
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                ret = false;
                logDebug("i=" + i + " arr1=" + arr1[i] + "   j=" + j
                        + "   arr2=" + arr2[j] + "  存在相同数据");
                break;
            }
        }
    }
    return ret;
}

/**
 * 如果expected里的内容包含查询结果数据中一行数据的内容 ，返回真
 * @param qr QResult对象
 * @param expected 期望行数据对象
 * @returns {Boolean}
 */
function isInQRData1Object(qr, expected) {
    var ret = false;
    for (var i = 0; i < qr.data.length; i++) {
        var data1 = qr.data[i];
        ret = isEqualObject(data1, expected);
        if (ret) {
            break;
        }
    }
    return ret;
}

/**
 * 滑动翻页验证 先向上翻，再向下翻
 */
function scrollPrevPageCheck(firstTitle, titleTotal) {
    var pageInfoView = window;
    var dataView = getScrollView();

    var qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
    var pageNo = qr.curPageNo;
    var curData = qr.data;

    // 向上翻页验证
    scrollPrevPage();
    delay();
    qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
    var prevData = qr.data;
    var prevPageNo = qr.curPageNo;
    var firstSeq = (prevPageNo - 1) * 15 + 1;
    var ret = isAnd(isEqual(firstSeq, qr.data[0]["序号"]), isEqual(pageNo - 1,
            qr.curPageNo));

    // 向下翻页验证
    scrollNextPage();
    delay();
    qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
    var curPageNo = qr.curPageNo;
    ret = isAnd(ret, isEqualDyadicArray(qr.data, curData), isEqual(pageNo,
            curPageNo));

    scrollPrevPage();
    qr = getQR(pageInfoView, dataView, firstTitle, titleTotal);
    ret = isAnd(ret, isEqualDyadicArray(qr.data, prevData));

    return ret;
}

/**
 * 详细页面滑动翻页验证
 * @param dataView
 * @param firstTitle
 * @param titleTotal
 * @returns {Boolean}
 */
function scrollPrevPageCheck2(dataView, firstTitle, lastTitle) {
    var ret = true;

    var qr = getQR2(dataView, firstTitle, lastTitle);
    var totalPageNo = qr.totalPageNo;
    var curPageNo = qr.curPageNo;
    var curData = qr.data;

    if (totalPageNo > 1) {
        scrollNextPage();
        delay();
        qr = getQR2(dataView, firstTitle, lastTitle);
        var nextData = qr.data;
        ret = isAnd(ret, isEqual(1, sub(qr.curPageNo, curPageNo)),
                !isEqualDyadicArray(nextData, curData));

        scrollPrevPage();
        delay();
        qr = getQR2(dataView, firstTitle, lastTitle);
        var prevData = qr.data;
        ret = isAnd(ret, isEqual(qr.curPageNo, curPageNo), isEqualDyadicArray(
                prevData, curData), !isEqualDyadicArray(prevData, nextData));

        scrollNextPage();
        delay();
        qr = getQR2(dataView, firstTitle, lastTitle);
        ret = isAnd(ret, isEqualDyadicArray(qr.data, nextData));
    } else {
        scrollNextPage();
        delay();
        qr = getQR2(dataView, firstTitle, lastTitle);
        ret = isAnd(ret, isEqualDyadicArray(qr.data, curData));

        scrollPrevPage();
        delay();
        qr = getQR2(dataView, firstTitle, lastTitle);
        ret = isAnd(ret, isEqualDyadicArray(qr.data, curData));
    }

    return ret;
}

/**
 * 下拉列表验证,有一个符合就返回true
 * @param index 静态文本下标
 * @param value 输入值
 * @param expected 希望显示的内容
 */
function dropDownListCheck(index, value, expected, o) {
    var ret = false;
    var f = new TField("款号", TF_AC, index, value, -1);
    var cells = getTableViewCells(window, f, o);
    if (cells.length > 0) {
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            var v = cell.name();
            if (isIn(v, expected)) {
                ret = true;
                break;
            }
        }
        delay();
        tapKeyboardHide();
    } else {
        ret = isEqual(getTextFieldValue(window, index), expected);
    }

    if (window.buttons()[CLEAR].isVisible) {
        tapButton(window, CLEAR);
    }

    return ret;
}

/**
 * 下拉列表验证,有一个不符合就返回false
 * @param index
 * @param value
 * @param expected
 * @param o eg:o= {"键盘":"简体拼音", "拼音":["lian"],"汉字":["联"]};
 * @returns {Boolean}
 */
function dropDownListCheck2(index, value, expected, o) {
    var ret = true;
    var f = new TField("款号", TF_AC, index, value, -1);
    var cells = getTableViewCells(window, f, o);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (!isIn(v, expected)) {
            ret = false;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    if (window.buttons()[CLEAR].isVisible) {
        tapButton(window, CLEAR);
    }

    return ret;
}
/**
 * 下拉框内容是否与期望内容相同
 * @param expected
 * @param view1
 * @returns {Boolean}
 */
function isEqualDropDownList(expected, view1) {
    var ret = true;
    for (var i = 0; i < expected.length; i++) {
        // 下拉框奇数行内容为空
        ret = isAnd(ret, isEqual(expected[i], getStaticTextValue(view1, i * 2)));
    }
    target.frontMostApp().mainWindow().popover().dismiss();
    return ret;
}

/**
 * 模糊查询验证
 * @param index 静态文本下标
 * @param title
 * @param value 输入值
 * @param title1 查询条件为款号名称时，对应标题为款号或名称，2个标题符合一个就可
 */
function fuzzyQueryCheckField(index, title, value, title1) {
    var f = new TField("名称", TF, index, value);
    var fields = [ f ];
    query(fields);
    var qr = getQR();
    var ret1 = true;
    var ret2 = true;
    var value1 = value.toUpperCase();

    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (!isIn(qr.data[i][title], value)
                    && !isIn(qr.data[i][title], value1)) {
                ret1 = false;
            }
            if (!ret1 && isDefined(title1)) {
                if (!isIn(qr.data[i][title1], value)
                        && !isIn(qr.data[i][title1], value1)) {
                    ret2 = false;
                }
                if (ret2) {
                    ret1 = true;
                }
            }
            if (!ret1) {
                logDebug("错误页码j=" + j + "  错误序号i=" + i);
                break;
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    tapButton(window, CLEAR);
    return ret1;
}
/**
 * 积分兑换
 * @param customer
 * @param points
 * @param money
 */
function addRedeemPoints(customer, points, money) {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : customer };
    editSalesBillCustomer(json);

    tapButton(window, "核销");
    tapButton(getScrollView(-1, 0), "积分兑换");
    var g0 = new TField("兑换积分", TF, 0, points);
    var g1 = new TField("兑换金额", TF, 1, money);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    // tapButton(getPop(), CLOSE);
    tapNaviLeftButton();

    tapReturn();
}

function addLogisticsVerify(o) {
    tapMenu("销售开单", "核销+");
    logisticsVerifySetField(o, "物流");
    logisticsVerifySetField(o, "店员");
    logisticsVerifySetField(o, "日期");
    logisticsVerifySetField(o, "备");

    editLogisticsVerify(o);

    logisticsVerifySetField(o, "现金");
    editSalesBillCard(o);
    editSalesBillRemit(o);
    editSalesBillSave(o);
    return o;
}

function logisticsVerifySetField(o, key) {
    var v = o[key];
    var msg = "key=" + key + " v=" + v;
    if (isDefined(v)) {
        var keys = {};
        keys[key] = v;
        var fields = logisticsVerifyFields(keys);
        setTFieldsValue(window, fields);
    } else {
        msg += " do nothing"
    }
    logDebug(msg);
}

/**
 * 撤销一段时间内的盘点记录
 */
function repealRecordsForCheck(day) {
    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : day, "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    var qr = getQR();
    do {
        tapChoose(getScrollView(), [ 0 ]);
        tapButton(window, "盘点撤销");
        qr = getQR();
    } while (qr.data.length > 0);
}

function editLogisticsVerify(o) {
    if (isDefined(o["核销"])) {
        tapButton(window, "核销");
        var a1 = o["核销"];
        // debugElementTree(window);
        // 坐标偏移8 ,8
        // tableView是倒数第二个
        var qr = getQRtable1(window, 8, -2);
        // debugQResult(qr);
        // debugObject(qr.data[0], "qr.data[0]=");
        var batch;
        for (var i = 0; i < a1.length; i++) {
            batch = qr.data[i]["批次"];
            getTableView(window, -2).cells().firstWithName(batch).tap();
        }
        // tapNaviRightButton();
        tapNaviButton("完成");
    }
}

/**
 * 静态文本中是否包含txt1 类似销售开单，代收，物流商界面的内容判断
 * @param texts
 * @param txt1
 * @param f1
 * @returns {Boolean}
 */
function isHasStaticTexts(texts, txt1) {
    var ret = false;
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isEqual(v, txt1)) {
            ret = true;
            break;
        }
    }
    return ret;
}

/**
 * 明细详细页面排序验证
 * @param dataView
 * @param firstTitle
 * @param lastTitle
 * @param title
 * @param isNum
 * @returns
 */
function sortByTitle2(dataView, firstTitle, lastTitle, title, isNum) {

    var t1 = getTimestamp();
    tapTitle(dataView, title); // 点击一下后是升序
    delay();
    var ret1 = compareQR2(title, isNum, "asc", dataView, firstTitle, lastTitle);

    tapTitle(dataView, title); // 再点击一下后是降序
    delay();
    var ret2 = compareQR2(title, isNum, "desc", dataView, firstTitle, lastTitle);

    logDebug(getTakeTimeMsg(t1));
    return isAnd(ret1, ret2);
}

function compareQR2(title, type, order, dataView, firstTitle, lastTitle) {
    var t1 = getTimestamp();
    if (isUndefined(order)) {
        order = "asc";
    }
    if (isUndefined(dataView)) {
        dataView = getScrollView(-1, 0);
    }

    var ret = true, value, valuePre;
    if (isDefined(type)) {

        var qr = getQR2(dataView, firstTitle, lastTitle);

        for (var i = 0; i < qr.curPageTotal; i++) {
            value = qr.data[i][title];
            switch (type) {
            case IS_NUM:
                value = Number(value);
                break;
            case IS_DATE2:
                value = getDay24(value);
                break;
            case IS_OPTIME:
                break;
            default:
                logInfo("未知type=" + type);
            }
            if (i > 0) {
                var b;
                if (order == "asc") {
                    b = valuePre <= value;
                } else {
                    b = valuePre >= value;
                }
                ret = ret && b;
                // logDebug(valuePre + "<= " + value + "," + b);
            }
            valuePre = value;
        }
    }

    logDebug(title + "," + type + "," + order + ",ret=" + ret + ","
            + getTakeTimeMsg(t1));
    return ret;
}
/**
 * 去除数组重复元素
 * @param arr
 * @returns {Array}
 */
function getUnique(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}
/**
 * 判断数组是否有重复,有返回true
 * @param arr
 * @returns {Boolean}
 */
function isRepetitione(arr) {
    var hash = {};
    for ( var i in arr) {
        if (hash[arr[i]])
            return true;
        hash[arr[i]] = true;
    }
    return false;

}

function isPositiveNumber(n) {
    var ret = false;
    if (Number(n) >= 0) {
        ret = true;
    }
    return ret;
}

function isNegativeNumber(n) {
    var ret = false;
    if (Number(n) <= 0) {
        ret = true;
    }
    return ret;
}

function addObject(jo1, jo2) {
    debugObject(jo2, "jo2");
    debugObject(jo1, "jo1");
    var ret = {};
    for ( var i in jo1) {
        var v = jo1[i];
        if (isNaN(v)) {
            ret[i] = v;
        } else {
            var v1 = 0;
            if (isDefined(jo2) && !isNaN(jo2[i])) {
                v1 = jo2[i];
            }
            ret[i] = Number(v) + Number(v1);
        }
    }
    debugObject(ret, "addObject jo1+jo2");
    return ret;
}
