// JinXinhua <79202792 at qq.com> 20150930
//开单模式 no均色均码 yes颜色尺码 head尺码表头
var colorSize = "no";
/**
 * 新增开单，无颜色尺码 核销5是指核销界面上按钮下标，多选是个按钮
 * 
 * @param o 输入对象，eg: { "客户" : "zhhz1", "店员" : "005", "发货" : "仓库店","日期" :
 *            "2015-10-01", "价格":"打包价","明细" : [ { "货品" : "k300", "数量" : 5,"备注" :
 *            "xx" } ], "核销" : [ 5 ]，"特殊货品" : { "抹零" : 9, "打包费" : 10 } , "现金" :
 *            0,"刷卡":[100,"交"],"汇款":[100,"交"],"备注" : "xx" , "明细输入框个数" : 8,
 *            "未付":"yes","不返回" : "yes","onlytest" : "yes","代收" :
 *            "是","采购订货":"yes","配货":"004"};
 * @returns 输入对象加操作日期 "操作日期":"10-22 16:50" window界面值
 */
function editSalesBillNoColorSize(o) {
    return editSalesBill(o, "no");
}
/**
 * 新增开单，颜色尺码
 * 
 * @param o 主要明细不同，其它同非颜色尺码，eg: { "明细" : [ { "货品" : "14L595", "数量" : [ 5, 6, 7 ] }, {
 *            "货品" : "150921", "数量" : [ 1, 2, 3 ] } ],"关闭明细":"no" };
 */
function editSalesBillColorSize(o) {
    return editSalesBill(o, "yes");
}
/**
 * 新增开单，尺码头部
 * 
 * @param o 主要明细不同，其它同非颜色尺码，eg: { "明细" : [ { "货品" : "141229000", "颜色" : "灰色",
 *            "尺码" : { "S2" : 2, "S3" : 3 } } ] };
 */
function editSalesBillSizehead(o) {
    return editSalesBill(o, "head");
}
/**
 * 具体实现
 * 
 * @param o
 * @param colorSize
 * @returns
 */
function editSalesBill(o, colorSize) {
    delay();
    debugObject(o);

    editSalesBillCustomer(o);
    editSalesBillPrice(o);// 价格类型
    editSalesBillField1(o, "店员");
    editSalesBillField1(o, "发货");// 开单模式15
    editSalesBillField1(o, "日期");
    editSalesBillField1(o, "入库门店");
    editSalesBillField1(o, "订货门店");// 必须先输入订货门店 再输入款号 这样库存显示才正确
    editSalesBillField1(o, "折扣");
    editSalesBillField1(o, "配货");// 开单模式20

    if (colorSize == "yes") {
        editSalesBillDetColorSize(o);
    }
    if (colorSize == "no") {
        editSalesBillDetNoColorSize(o);
    }
    if (colorSize == "head") {
        editSalesBillDetSizehead(o);
    }

    // editSalesBillPicture(o);// 图片选款
    editBillDet(o);

    editSalesBillVerify(o);
    // 有可能未关闭就执行下面代码，所以要等待
    var cond = "getButton(window, SAVE).isVisible()";
    waitUntil(cond, 5);

    editSalesBillSpecial(o);
    editSalesBillField1(o, "备注");
    // 代收要在现金等之前
    editSalesBillAgency(o);
    editSalesBillCash(o);
    editSalesBillCard(o);
    editSalesBillRemit(o);
    editSalesBillUnpay(o);

    editSalesBillSave(o);
    return o;
}
/**
 * 无颜色尺码明细
 * 
 * @param o
 */
function editSalesBillDetNoColorSize(o) {
    var details = o["明细"], byOrder = 0;
    // 输入超出当前页面显示条数时，比如8条时，tfNum会将前面10行内容都当做标题，因此只在最开始取一次标题数
    var title = getSalesBillDetTfObject();
    var tfNum = title["明细输入框个数"];
    if (isDefined(o["明细输入框个数"])) {
        tfNum = o["明细输入框个数"];
    }
    var title_num = getBillTitle_Num(title);// 采购为入库数，销售为数量

    for ( var i in details) {
        // var start = tfNum * (i - mergeLine+ detLine);
        var start = getBillDetInputIndex(tfNum);
        var d = details[i];
        var f0 = new TField("货品", TF_AC, start + 0, d["货品"], -1, 0);
        var view1 = getScrollView(-1);
        setTFieldsValue(view1, [ f0 ]);

        var num;
        if (isArray(d["数量"])) {
            num = d["数量"][0];
        } else {
            num = d["数量"];
        }
        var view2; // 如果只有一行明细，是肯定不用合并的
        if (details.length > 1) {
            view2 = getPop();
        }
        if (isDefined(view2) && view2.isVisible()) {
            var f3 = new TField("数量", TF, 0, num);
            setTFieldsValue(getPopOrView(), [ f3 ]);
            tapButton(view2, OK);
            // mergeLine++;
        } else {
            var f3 = new TField("数量", TF, start + title[title_num], num);
            setTFieldsValue(view1, [ f3 ]);
        }

        var fields = [];
        if (isDefined(d["单价"]) && title.hasOwnProperty("单价")) {
            fields.push(new TField("单价", TF, start + title["单价"], d["单价"]));
        }

        // 开单模式5，产品折扣
        if (isDefined(d["折扣"]) && title.hasOwnProperty("折扣")) {
            fields.push(new TField("折扣", TF, start + title["折扣"], d["折扣"]));
        }

        if (isDefined(d["备注"]) && title.hasOwnProperty("备注")) {
            if (Number(num) >= 0) {
                fields.push(new TField("备注", TF, start + title["备注"], d["备注"]));
            } else {
                fields.push(new TField("备注", TF_SC, start + title["备注"],
                        d["备注"]));
            }
        }
        setTFieldsValue(view1, fields);
    }
    o["标题"] = title;
    return o;
}

/**
 * 颜色尺码明细
 * 
 * @param o
 */
function editSalesBillDetColorSize(o) {
    var details = o["明细"], detLine = 0;
    // 按订货入库，开单界面，新增新的货品起始下标
    if (isDefined(o["按订货"])) {
        detLine = getBillDetInputIndex();
    }
    if (isDefined(details) && details.length > 0) {
        tap(getTextField(getScrollView(-1), 0 + detLine), true);
        delay(); // 延时保证款号输入窗加载完成
        var goodsFieldIndex = getBillDetCSGoodsFieldIndex();
        for (var i = 0; i < details.length; i++) {
            var d = details[i], f, fields;
            f = new TField("货品", TF_AC, goodsFieldIndex, d["货品"], -1, 0);
            fields = [ f ];
            setTFieldsValue(window, fields);
            tapKeyboardHide();

            var num = d["数量"];
            if (num && num.length > 0) {
                fields = [];
                for (var ni = 0; ni < num.length; ni++) {
                    if (num[ni] != "") {
                        f = new TField("数量", TF, ni, num[ni]);
                        fields.push(f);
                    }
                }
                var view1 = getScrollView(-1);
                setTFieldsValue(view1, fields);
            }

            if (isDefined(d["单价"])) {
                f = new TField("单价", TF, goodsFieldIndex + 1, d["单价"]);
                fields = [ f ];
                setTFieldsValue(window, fields);
            }
            tapButton(window, OK);
        }
        if (o["关闭明细"] != "no") {
            tapNaviLeftButton();
            if (isDefined(d["备注"])) {
                // 门店调出不一样，输入负数还是可以任意输入备注，而不是下拉框
                var tfNum = getSalesBillDetTfObject();
                o["标题"] = tfNum;
                var remarks = d["备注"];
                fields = [];
                for (var i = 0; i < remarks.length; i++) {
                    // 根据输入的数量判断备注栏的属性，退货为TF_SC
                    if (num[i] >= 0) {
                        fields.push(new TField("备注", TF, tfNum["明细输入框个数"] * i
                                + tfNum["备注"], remarks[i]))
                    } else {
                        fields.push(new TField("备注", TF_SC, tfNum["明细输入框个数"]
                                * i + tfNum["备注"], remarks[i]))
                    }
                }
                setTFieldsValue(getScrollView(-1), fields);
            }
        }
    }
    return o;
}
/**
 * 尺码表头明细 { "明细" : [ { "货品" : "141229000", "颜色" : "灰色", "尺码" : { "S2" : 2, "S3" :
 * 3 } }, { "货品" : "141229000", "颜色" : "黑色", "尺码" : { "S1" : 1 } } ] };
 * 
 * @param o
 */
function editSalesBillDetSizehead(o) {
    var details = o["明细"], colIndex = 0, tfNum = 0;
    if (isUndefined(details)) {
        return;
    }
    var titles = getDetSizheadTitle();
    var view1 = getScrollView(-1);
    var texts = getStaticTexts(view1);
    // 尺码头部下显示库存 文本框下标与标题不对应，根据相应X轴重新取值
//    var tfidx = getDetSizheadTFIndex(titles);
    var tfNum = tfidx["明细输入框个数"];// 不能用标题个数判断

    for (var i = 0; i < details.length; i++) {
        var start = tfNum * i;
        // logDebug("start=" + start + " tfNum=" + tfNum + " i=" + i);
        var d = details[i];
        var f = new TField("货品", TF_AC, start + 0, d["货品"], -1, 0);
        setTFieldsValue(view1, [ f ]);

        if (isDefined(d["颜色"])) {
            var popView = getPopView(window, -1);
            tapCheckBox(popView, d["颜色"]);// 自动弹窗
            tapButton(getPop(window, -1), OK);
        } else {
            tapButton(getPop(window, -1), CLOSE);
        }

        var fields = [];
        var sizeObj = d["尺码"];
        for ( var j in sizeObj) {
            var cm = sizeObj[j];
            // colIndex = tfidx[j];
            colIndex = titles[j];
            f = new TField(j, TF, start + colIndex, cm);
            fields.push(f);
        }
        if (fields.length > 0) {
            setTFieldsValue(view1, fields);
        }
        if (isDefined(d["单价"])) {
            f = new TField("单价", TF, start + tfidx["单价"], d["单价"]);
            setTFieldsValue(view1, [ f ]);
        }
        if (isDefined(d["箱数"])) {// 尺码头部3--靓点 必需输入，箱数0没有意义
            f = new TField("箱数", TF, start + tfidx["箱数"], d["箱数"]);
            setTFieldsValue(view1, [ f ]);
        }
    }
    return o;
}
function editSalesBillPicture(o) {
    var details = o["图片选款"];
    if (isDefined(details)) {
        tapButton(window, "图片选款");
        delay();// 等待加载，比较慢
        var view = getLastTableView();
        var group = view.groups()[0];
        for (var i = 0; i < details.length; i++) {

        }

        tapNaviRightButton();// 购物袋
        editShoppingBag(details);
    }
}
function editShoppingBagNoColorSize(details) {
    var view = getLastTableView(window);
    var cells = view.cells();
    for (var i = 0; i < details.length; i++) {
        var d = details[i];
        var code = d["货品"], num = d["数量"];
        for (var j = 0; j < cells.length; j++) {
            if (cells[j].name() == code) {
                var tf = cells[j].textFields()[0].textFields()[0];
                if (tf.value() != num) {
                    tf.setValue(num);
                }
            }
        }
    }
    tapNaviRightButton();// 确 定
}
function editSalesBillCustomer(o) {
    var oc = o["客户"];
    if (isDefined(oc)) {
        // var keys = [ "客户" ];
        // var fields = editSalesBillFields(keys);
        // changeTFieldValue(fields["客户"], oc);
        var f = new TField("客户", TF_AC, 0, oc, -1, 0);
        setTFieldsValue(window, [ f ]);
    }
}

/**
 * 简单字段输入
 * 
 * @param o
 * @param key
 */
function editSalesBillField1(o, key) {
    var v = o[key];
    var msg = "key=" + key + " v=" + v;
    if (isDefined(v)) {
        var keys = {};
        keys[key] = v;
        var fields = editSalesBillFields(keys);
        setTFieldsValue(window, fields);
        logDebug(msg);
    } else {
        // msg += " do nothing"
    }
    // logDebug(msg);
}
function editSalesBillSpecial(o) {
    var ot = o["特殊货品"];
    if (isDefined(ot)) {
        delay();
        tapButton(window, "特殊货品");
        var fields = [];
        var n0 = ot["抹零"];
        if (isDefined(n0)) {
            fields.push(new TField("抹零", TF_KB, 0, n0));
        }
        var n1 = ot["打包费"];
        if (isDefined(n1)) {
            fields.push(new TField("打包费", TF_KB, 1, n1));
        }
        var n2 = ot["免单"];
        if (isDefined(n2)) {
            fields.push(new TField("免单", TF, 2, n2));
        }
        var n4 = ot["不核算积分"];
        if (isDefined(n4)) {
            fields.push(new TField("不核算积分", TF, 4, n4));
        }
        var n7 = ot["积分抵现"];// 编码66666，负值
        if (isDefined(n7)) {
            fields.push(new TField("积分抵现", TF, 7, n7));
        }
        var view1 = getPopOrView();
        setTFieldsValue(view1, fields);

        var view2 = getPop();
        var btn = view2.buttons()[OK];
        if (isUIAElementNil(btn)) {
            view2 = getPopView();
        }
        tapButton(view2, OK);
        tapButton(view2, CLOSE);// 防止出错
    }
}
function editSalesBillCash(o) {
    if (isDefined(o["现金"])) {
        var f = editSalesBillField("现金");
        changeTFieldValue(f, o["现金"]);
        setTFieldsValue(window, [ f ]);
    }
}
function editSalesBillVerify(o) {
    if (isDefined(o["核销"])) {
        tapButton(window, "核销");
        var a1 = o["核销"];
        for (var i = 0; i < a1.length; i++) {
            tapButton(getScrollView(-1, 0), a1[i]);
        }
        try {
            app.navigationBar().buttons()[OK].tap();
        } catch (e) {
            app.navigationBar().buttons()["确 认"].tap(); // 7.13前为确认
        }
    }
}
/**
 * 获取开单window界面中的值，现金，核销等数值为空时返回0 结余值再次点击进入明细后就变成0，暂时不取结余值
 */
function editSalesBillGetValue() {
    var staffTFindex = getValueFromCacheF1("getStaffTFindex");
    var cardTFindex = getValueFromCacheF1("getCardTFindex");
    var remitTFindex = getValueFromCacheF1("getRemitTFindex");
    var arr = {};
    arr["客户"] = getTextFieldValue(window, 0);// 客户一般都是第一个

    // var cashTFindex = getEditSalesTFindex2("客户,厂商", "现金");
    arr["现金"] = getTextFieldValue(window, 2);
    if (arr["现金"] == "") {
        arr["现金"] = 0;
    }

    var payableIndex = getValueFromCacheF1("getPayableTFindex");
    if (payableIndex >= 0) {
        arr["应"] = getTextFieldValue(window, payableIndex);
    }

    // 有时候是本单的结余覆盖了实收 实收的宽还是正常宽度，可以取到值为NULL，暂不处理
    var paidIndex = getValueFromCacheF1("getPaidTFindex");
    if (paidIndex >= 0) {
        arr["实"] = getTextFieldValue(window, paidIndex);
        if (arr["实"] == null)
            arr["实"] = 0;
    }

    arr["店员"] = getTextFieldValue(window, staffTFindex);

    var index = getValueFromCacheF1("getShippingTFindex");
    if (index >= 0) {
        arr["发货"] = getTextFieldValue(window, index);// 销售的发货门店
    }

    arr["核销"] = getTextFieldValue(window, cardTFindex - 1);
    if (arr["核销"] == "") {
        arr["核销"] = 0;
    }

    arr["刷卡"] = getTextFieldValue(window, cardTFindex);
    if (arr["刷卡"] == "") {
        arr["刷卡"] = 0;
    }

    // 不同开单模式，显示的内容不同
    var index = getValueFromCacheF1("getAgencyTFindex");
    if (index > 0) {
        arr["代收"] = getTextFieldValue(window, index);
        if (arr["代收"] == "") {
            arr["代收"] = 0;
        }
    }

    var dateTFindex = getValueFromCacheF1("getDateTFindex");
    arr["日期"] = getTextFieldValue(window, dateTFindex);

    var index = getValueFromCacheF1("getDiscountTFindex");
    if (index >= 0) {
        arr["折扣"] = getTextFieldValue(window, index);
    }

    arr["备"] = getTextViewValue(window, 0);

    index = getValueFromCacheF1("getOrderShopTFindex");
    if (index >= 0) {
        arr["订货门店"] = getTextFieldValue(window, index);
    }

    arr["总数"] = getTextFieldValue(window, remitTFindex - 2);
    if (arr["总数"] == "") {
        arr["总数"] = 0;
    }
    arr["总计"] = getTextFieldValue(window, remitTFindex - 1);// totalmoney

    arr["汇款"] = getTextFieldValue(window, remitTFindex);
    if (arr["汇款"] == "") {
        arr["汇款"] = 0;
    }
    return arr;
}
/**
 * 获取开单界面值
 * 
 * @returns
 */
function getSalesBillValueByLabel() {
    var arr = {};
    if (ipadVer >= 7.27) {
        arr = getTFieldsValue();
    } else {
        arr = editSalesBillGetValue();// gCache
    }
    return arr;
}
function editSalesBillSave(o) {
    if (isDefined(o["onlytest"])) {
        return;
    }
    o["输入框值"] = getSalesBillValueByLabel();// 7.27
    o["明细值"] = getQRDet(getScrollView(-1));// gCache

    if (isDefined(o["挂单"]) && o["挂单"] == "yes") {
        if (gMenu1 == "采购入库") {
            runAndAlert("test120052Hang", OK);
        } else {
            tapButtonAndAlert("挂 单", OK);
        }
    } else {
        // 本次开单包括了补货退货的货品，是否继续开单保存 \n 1, k200,范范 均色 均码\n
        var o1 = { "继续开单保存" : "仍然保存" };
        // 保存成功，是否打印?
        o1["是否打印"] = CANCEL;
        if (isDefined(o["打印"])) {
            o1["是否打印"] = o["打印"];
        }
        // 确定返回吗？
        // o1["确定返回"] = OK;
        // 同款不同价提醒
        o1["同款不同价提醒"] = "仍然保存";
        o1["是否需要重新刷新明细价格等信息"] = "刷新价格";
        // tapAlertButtonsByMsgKey(o1);
        setValueToCache(ALERT_MSG_KEYS, o1);// gCache

        saveAndAlertOk();// 保存后会清空页面数据
    }

    o["操作日期"] = getOpTime();

    waitUntilAlertInvisible();
    tapKeyboardHide();
    if (isDefined(o["不返回"]) && "yes" == o["不返回"]) {
        logDebug("不返回=" + o["不返回"] + " 点击键盘隐藏");
        // tapKeyboardHide();
    } else {
        // tapButtonAndAlert(RETURN);
        // tapButton(window, RETURN, 2);
        tapReturn();
    }

    return o;
}

/**
 * 开单界面新增客户 eg:o={"名称":"小王","手机":"1234","店员":"000","适用价格":"零批价","地址":"a"};
 * 
 * @param o
 */
function editSalesBillAddCustomer(o) {
    tapButton(window, "新增+");

    var fields = [], n, ret = true;
    fields.push(new TField("名称", TF, 0, o["名称"]));

    n = o["手机"];
    if (isDefined(n)) {
        fields.push(new TField("手机", TF, 1, n));
    }

    n = o["店员"];
    if (isDefined(n)) {
        fields.push(new TField("店员", TF, 2, n, -1, "pop"));// 不稳定，有时店员输入不了
    }
    n = o["适用价格"];
    if (isDefined(n)) {
        tapButton(getPopView(), SELECT);// 选择按钮
        delay();
        try {
            tapStaticText(getPopOrView(window, -1), n);
        } catch (e) {
            target.frontMostApp().mainWindow().popover().dismiss();
            ret = false;
        }

        delay();
    }
    n = o["地址"];
    if (isDefined(n)) {
        fields.push(new TField("地址", TF, 4, n));
    }

    setTFieldsValue(getPopView(), fields);

    tapButton(getPop(), OK);
    ret = isAnd(ret, !isIn(alertMsgs, "名称重复"), !isIn(alertMsgs, "操作失败"));
    tapButton(getPop(), CLOSE);
    return ret;
}
/**
 * 开单界面，新增货品 颜色尺码模式不会自动添加到单据，开单细节不同，因此暂时不放到editSalesBill中
 * 
 * @param o
 *            eg：{"款号":"kh","名称":"名称","进货价":120,"零批价":130,"打包价":140,"大客户价":150,"Vip价格":160,
 *            "添加到单据":"否"}
 */
function editSalesBillAddGoods(o) {
    var index = getButtonIndex(window, "货品+");
    if (index > 0) {
        tapButton(window, index);// 新增货品
    } else {
        tapButton(window, "新增货品+");// 采购入库界面
    }
    var fields = [], n;

    fields.push(new TField("款号", TF, 0, o["款号"]));
    fields.push(new TField("名称", TF, 1, o["名称"]));

    n = o["进货价"];
    if (isDefined(n)) {
        fields.push(new TField("进货价", TF, 2, n));
    }
    n = o["零批价"];
    if (isDefined(n)) {
        fields.push(new TField("零批价", TF, 3, n));
    }
    n = o["打包价"];
    if (isDefined(n)) {
        fields.push(new TField("打包价", TF, 4, n));
    }
    n = o["大客户价"];
    if (isDefined(n)) {
        fields.push(new TField("大客户价", TF, 5, n));
    }
    n = o["Vip价格"];
    if (isDefined(n)) {
        fields.push(new TField("Vip价格", TF, 6, n));
    }

    n = o["添加到单据"];
    if (isDefined(n)) {
        var s0 = getPopView().switches()[0];
        if (n == "否") {
            s0.setValue(0);
        } else {
            s0.setValue(1);
        }
    }
    // getPopOrView
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), CLOSE);

    delay(0.5);// 等待返回开单界面
    // 新增成功确定关闭后，键盘会显示，光标会自动弹到新增货品相应的数量文本框
    n = String(o["数量"]);
    if (isDefined(n) && app.keyboard().isVisible()) {
        app.keyboard().typeString(n);
    }
}
/**
 * 刷卡
 * 
 * @param o eg:{"刷卡":[100]} 或 {"刷卡":[100,"交"]}
 */
function editSalesBillCard(o) {
    editSalesBillBank(o, "刷卡", 0);
}
/**
 * 汇款
 * 
 * @param o eg:{"汇款":[100]} 或 {"汇款":[100,"交"]}
 */
function editSalesBillRemit(o) {
    editSalesBillBank(o, "汇款", 1);
}
function editSalesBillBank(o, key, scIndex) {
    if (isDefined(o[key])) {
        // tap(getStaticText(window, key)); 点击 刷卡 标题时，会把现金金额切换到刷卡
        // tapButton(window, key);
        var a1 = o[key];
        var n = getArray1(a1, 0);
        logDebug(" n=" + n);
        if (isDefined(n)) {
            // var keys = {key: n };
            var keys = [ key ];
            var fields = editSalesBillFields(keys);
            changeTFieldValue(fields[key], n);
            setTFieldsValue(window, fields);
        }
        n = getArray1(a1, 1);
        logDebug("scIndex=" + scIndex + " n=" + n);
        if (isDefined(n)) {
            tap(window.segmentedControls()[scIndex].buttons()[n]);
        }
    }
}
function editSalesBillPrice(o) {
    var key = "价格";
    var v = o[key];
    if (isDefined(v)) {
        tap(window.segmentedControls()[2].buttons()[v]);
    }
}
function editSalesBillUnpay(o) {
    var key = "未付";
    var v = o[key];
    if (isDefined(v)) {
        var btn = getButton(window, key);
        if (isUIAButton(btn)) {
            tapButton(window, key);
        } else {
            tapButton(window, "欠");
        }
    }
}

/**
 * 代收,模式2会返回代收金额
 * 
 * @param o eg: {"代收":"是"} 或者 {"代收":{"物流商":"yt","运单号":"123","备注":"a","代收金额":90}}
 */
function editSalesBillAgency(o) {
    var key = "代收";
    var v = o[key];
    if (isDefined(v)) {
        if (isObject(v)) {
            editSalesBillAgency2(v);
        } else {
            tap(window.segmentedControls()[1].buttons()[v]);
        }
    }
    return o;
}
function editSalesBillAgency2(obj) {
    var st = getStaticText(window, "代收");
    if (st.isVisible()) {
        st.tap();
    } else {
        tapTFLabel(window, "代收");// 新的开单界面
    }
    delay();
    var f, v, key1, key2, key3, key4, fields = [];

    key1 = "物流商";
    v = obj[key1];
    if (isDefined(v)) {
        f = new TField(key1, TF_AC, -4, v, -1, 0);
        fields.push(f);
    }
    key2 = "运单号";
    v = obj[key2];
    if (isDefined(v)) {
        f = new TField(key2, TF, -3, v);
        fields.push(f);
    }
    key3 = "备注";
    v = obj[key3];
    if (isDefined(v)) {
        f = new TField(key3, TF, -2, v);
        fields.push(f);
    }
    key4 = "代收金额";
    v = obj[key4];
    if (isDefined(v)) {
        f = new TField(key4, TF, -1, v);
        fields.push(f);
    }

    setTFieldsValue(window, fields);
    delay();

    obj[key1] = getTextFieldValue(window, -4);
    obj[key2] = getTextFieldValue(window, -3);
    obj[key3] = getTextFieldValue(window, -2);
    obj[key4] = getTextFieldValue(window, -1);

    tapNaviRightButton();
}

/**
 * 开单明细，点击款号TableView的cell
 * 
 * @param o eg: { "明细" : [ { "货品" : "30", "表格行包含" : "绿茶"} ]}
 * @returns
 */
function editSalesBillDetTapCell(o, colorSize) {
    var key = "明细";
    var details = o[key];
    if (isDefined(details)) {
        var d1 = details[0];
        var v1 = d1["货品"];
        var f = new TField("货品", TF_AC, 0, v1, -1, 0);
        var view1 = getScrollView(-1);
        if (colorSize == "yes") {
            tap(getTextField(getScrollView(-1), 0), true);
            f.index = getBillDetCSGoodsFieldIndex();
            view1 = window;
        }
        var cells = getTableViewCells(view1, f);
        var txt1 = d1["表格行包含"];
        var index = getArrayIndexIn(cells, txt1);
        var cell = cells[index];
        var button = cell.buttons()[0];
        tap(button);
        delay();
    }
    return o;
}

/**
 * 颜色尺码库存数,只能根据坐标来判断属于哪个尺码，哪个颜色
 * 
 * @returns {"花色-27-常青店":-3,... } 如果只显示本门店的，key中不带本店，eg:{"花色-27":-3,... }
 */
function getColorSizeStockNum() {
    var viewSize = getScrollView(-2); // 尺码所在视图
    var texts = getStaticTexts(viewSize);
    var textColorX = texts[0].rect().origin.x; // 颜色所在列坐标x
    var oSize = {};
    for (var i = 1; i < texts.length; i++) {
        // 尺码对应坐标x eg: oSize["27"] = 136
        oSize[texts[i].name()] = texts[i].rect().origin.x;
    }
    debugObject(oSize);

    var view1 = getScrollView(-1); // 颜色及库存字样，输入框所在视图
    texts = getStaticTexts(view1);
    var oColor = {}; // 先找到颜色及坐标Y
    for (var i = 0; i < texts.length; i++) {
        var txt = texts[i];
        if (Math.abs(textColorX - txt.rect().origin.x) < 2) {
            // 颜色对应坐标y eg: oSize["花色"] = 185
            oColor[txt.name()] = texts[i].rect().origin.y;
        }
    }
    debugObject(oColor);

    var oStock = {}, key;
    for (var i = 0; i < texts.length; i++) {
        var txt = texts[i];
        var x = txt.rect().origin.x;
        var y = txt.rect().origin.y;
        var size = getKeyByXy(oSize, x);
        var color = getKeyByXy(oColor, y);
        logDebug(txt.name() + " color=" + color + " size=" + size);
        // 按相同颜色尺码放到一个数组中
        if (isDefined(size) && isDefined(color)) {
            key = color + "-" + size;
            var a1 = oStock[key];
            if (isUndefined(a1)) {
                a1 = [];
            }
            a1.push(txt.name());
            oStock[key] = a1;
        }
    }
    debugObject(oStock);

    var oStockNum = {};
    for ( var key in oStock) {
        var a1 = oStock[key];
        if (a1.length == 1) { // 如果只有本门店的库存
            oStockNum[key] = a1[0];
        } else {
            // 数组元素 依次是 店名 数量 ...
            for (var i = 0; i < a1.length; i += 2) {
                var k1 = key + "-" + a1[i], v1 = a1[i + 1];
                oStockNum[k1] = v1;
            }
        }
    }
    debugObject(oStockNum);

    return oStockNum;
}
/**
 * 如果不指定输入框个数，自动判断个数
 * 
 * @param o
 * @returns {Number} 明细输入框个数
 */
function getSalesBillDetTfNum(o, idx) {
    var ret = 7;
    var n = o["明细输入框个数"]
    if (isDefined(n)) {
        ret = n;
    } else {
        if (isUndefined(idx)) {
            idx = -1;
        }
        var view1 = getScrollView(idx);
        var texts = getTextFields(view1);
        // 根据一行中输入框个数自动判定
        var arrX = [], x = 0;// y = 0, yPre = 0,
        for (var i = 0; i < texts.length; i++) {
            var tf = texts[i];
            // yPre = y;
            // y = getY(tf);
            x = getX(tf);
            arrX.push(x);// 尺码表头显示库存时TF的Y轴处于第二行，改成用X轴判断
            // 新增的图片列中的图片目前找到的最大偏移量为5
            if (isRepetition(arrX)) {// yPre > 0 && !isAqualNum(y, yPre, 10)
                break;
            }
        }
        ret = i--;
    }
    logDebug("明细输入框个数 tfNum=" + ret);
    return ret;
}
/**
 * 尺码表头模式 获取明细输入框个数，标题列号，从0开始
 * 
 * @params order 寻找顺序
 * @returns {"明细输入框个数":10,"货品":0,"颜色":1,"T9":2,"S1":2,...}
 */
function getDetSizheadTitle(order) {
    // debugElementTree(window);
    // 标题以#开头，表示序号，以操作结束
    var ret = {}, colX = {}, temp = {}, colIndex = -1;
    var texts = getStaticTexts(window);
    var qrTitle1 = getSalesBillDetTitle1Index(texts, order);// 起始标题 # 图
    var qrTitle2 = getQResultTitle(texts, "操作", "#", order);// 结束标题 操作
    for (var j = qrTitle1.index + 1; j < qrTitle2.index; j++) {
        var width = texts[j].rect().size.width;
        if (width > 5) {// 忽略隐藏标题
            var title = texts[j].name();
            if (!isNull(title) && isDefined(title)) {
                colX[title] = getX(texts[j]);
            }
        }
    }

    var headView = getScrollView(-2);// -2尺码表头 -1单据明细
    var headTexts = getStaticTexts(headView);
    var len = headTexts.length;
    // 获取第一行尺码组
    var x = 0, xPre = 0
    for (var i = 0; i < len; i++) {
        var x = getX(headTexts[i]);
        if (xPre > 0 && xPre > x) {
            break;
        }
        colIndex++;// 尺码下标
        var title = headTexts[i].name();
        if (isNull(title) || isUndefined(title)) {
            title = "cm" + colIndex;
        }
        colX[title] = x;
        xPre = x;
    }
    ret = getDetSizheadTFIndex(colX);// 根据TF的X轴取下标，兼容是否显示库存
    ret["标题坐标"] = colX;// 尺码表头显示尺码 确定TF对应的标题用，其他都是下标对应的关系

    // 其它尺码加入标题，取前4组尺码 其他的尺码组未维护，取出来没用
//    for (var ii = colIndex + 1, len = 4 * (colIndex + 1); ii < len; ii++) {
//        var x = getX(headTexts[ii]);
//        var size = texts[ii].name();
//        for ( var t in colX) {
//            if (colX[t] == x) {
//                ret[size] = temp[t]; // 根据X轴取标题 过滤掉隐藏的内容
//                break;
//            }
//        }
//    }
    debugObject(ret, "ret");
    return ret;
}

/**
 * 加载挂单
 * 
 * @param i 下标，从0开始
 */
function loadHangBill(i) {
    tapTableCell(i);
    tapButtonAndAlert("none", OK);
}

function testEditSalesBillAll() {
    run("非颜色尺码开单", "testEditSalesBillNoColorSize1");
    // run("开单界面，新增货品,明细点款号自动完成表格", "testEditSalesBillDetTapCell");
    // run("开单界面，新增货品,明细备注", "testEditSalesBillDetNoColorSize");
    // run("开单界面，新增货品,输入框个数", "testGetNoColorSizeDetTfNum");
    // run("颜色尺码输入界面库存数", "testGetColorSizeStockNum");
    // run("库存分布图", "testGetColorSizeStockNum1");
    // run("所有挂单", "testGetAllHangBills");
    // run("积分竞换", "testUseScore");
    // run("尺码表头开单明细", "testEditSalesBillDetSizhead");
}
function testEditSalesBillNoColorSize1() {
    tapMenu("销售开单", "开  单+");
    var o = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "k300", "数量" : 5 } ], "现金" : 0, "备注" : "zdbz",
        "onlytest" : "yes" };
    o = { "客户" : "ls", "onlytest" : "yes" };
    editSalesBillNoColorSize(o);
    return true;
}
function testEditSalesBillDetTapCell() {
    tapMenu("销售开单", "开  单+");
    var o = { "明细" : [ { "货品" : "30", "表格行包含" : "Gugg" } ] };
    editSalesBillDetTapCell(o);
    return true;
}
function testEditSalesBillDetNoColorSize(o) {
    tapMenu("销售开单", "开  单+");
    var o = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1", "备注" : "mxbz" } ], "备注" : "zdbz", };
    editSalesBillDetNoColorSize(o);
    return true;
}
function testGetNoColorSizeDetTfNum() {
    tapMenu("销售开单", "开  单+");
    var o = {};
    var n = getSalesBillDetTfNum(o);
    logDebug("n=" + n);
    return true;
}
function testGetColorSizeStockNum() {
    tapMenu("销售开单", "开  单+");
    var o = { "明细" : [ { "货品" : "1234567800" } ], "关闭明细" : "no" };
    o = { "明细" : [ { "货品" : "3035" } ], "关闭明细" : "no" };
    editSalesBillDetColorSize(o);
    var oStockNum = getColorSizeStockNum();
    tapNaviLeftButton();
    return true;
}
function testGetColorSizeStockNum1() {
    var oStockNum = getColorSizeStockNum();
    return true;
}
/**
 * 所有挂单
 * 
 * @returns {Boolean}
 */
function testGetAllHangBills() {
    tapMenu("销售开单", "开  单+");
    tapMenu("销售开单", MORE, "所有挂单");
    delay();
    var qr = getQRtable1();
    debugQResult(qr);
    loadHangBill(1);
    return true;
}
function testUseScore() {
    var texts = getStaticTexts(getScrollView(-1));
    var titleTexts = getStaticTexts(window);
    var qr = getQRverify(texts, "序号", 5, 0, titleTexts)
    debugElementTree(getScrollView(-1));
    debugQResult(qr);
    return true;
}
function testEditSalesBillDetSizhead() {
    tapMenu("销售开单", "开  单+");
    var o = { "明细" : [
            { "货品" : "141229000", "颜色" : "灰色", "尺码" : { "S2" : 2, "S3" : 3 } },
            { "货品" : "141229000", "颜色" : "黑色", "尺码" : { "S1" : 1 } } ] };
    editSalesBillDetSizehead(o);
    return true;
}