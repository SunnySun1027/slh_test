//LuXingXin <52619481 at qq.com> 20151012

function testPurchaseOrder001() {
    run("【采购订货-按批次查】翻页_排序_汇总", "test130001_1");
    run("【采购订货-按批次查】条件查询，清除按钮,下拉框", "test130001_2");
    run("【采购订货-按明细查】翻页_排序_汇总", "test130002_1");
    run("【采购订货-按明细查】条件查询，清除按钮,下拉框", "test130002_2");
    run("【采购订货-订货汇总】订货汇总->按款号", "test130004");
    run("【采购订货-订货汇总】订货汇总->按厂商", "test130005");
    run("【采购订货-订货汇总】订货汇总->按厂商数据验证", "test130005_1");
    run("【采购订货-订货汇总】订货汇总->按门店", "test130006");
    run("【采购订货-订货汇总】订货汇总->按门店数据验证", "test130006_1");
    run("【采购订货-订货汇总】订货汇总->按款号_按厂商_按门店_明细检查", "test130004_130005_130006");
}

function testPurchaseOrderAll() {

    // run("【采购订货-新增订货】全局变量：均色均码+新增订货", "test130007");
    // run("新增【采购订货-新增订货】全局变量：颜色尺码+新增订货", "test130008");

    // run("【采购订货-按明细查】全局变量：颜色尺码+按明细查", "test130002");

    // run("【采购订货-按明细查】作废订单后内容检查", "test130003");
    // run("【采购订货】采购订货-按批次界面，部分发货的单子不允许作废", "test130009");
    // run("【采购订货】不输入店员时在单据修改界面检查店员显示", "test130010");
    // run("【采购订货】客户或供应商信息不允许修改", "test130011");

}

// 翻页_排序_汇总
function test130001_1() {
    tapMenu("采购订货", "按批次查");
    var keys = { "日期从" : getDay(-10), "日期到" : getToday(), "门店" : "常青店" };
    var fields = purchaseOrderQueryBatchFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheckField("批次", 3);

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("总数", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("入库数", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("备注");

    logDebug("ret=" + ret);

    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["总数"]);
            sum5 += Number(qr.data[i]["金额"]);
            sum6 += Number(qr.data[i]["入库数"]);
            sum7 += Number(qr.data[i]["差异数"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["总数"],
            sum4), isEqual(qr.counts["金额"], sum5), isEqual(qr.counts["入库数"],
            sum6), isEqual(qr.counts["差异数"], sum7));
    return ret;
}

// 条件查询，清除按钮,下拉框
function test130001_2() {
    tapMenu("采购订货", "按批次查");
    var keys = { "日期从" : getToday(), "日期到" : getToday(), "门店" : "常青店" };
    var fields = purchaseOrderQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "Rt", "店员" : "000",
        "明细" : [ { "货品" : "4562", "数量" : "20" } ], "备注" : "xx" };
    editSalesBillNoColorSize(json);

    tapMenu("采购订货", "按批次查");
    var i;
    var ret1 = false;
    var f = new TField("厂商", TF_AC, 0, "v", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "Vell")) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("采购订货", "按批次查");
    var keys = { "厂商" : "Rt", "日期从" : getToday(), "日期到" : getToday(),
        "批次从" : batch, "批次到" : batch + 1, "门店" : "常青店", "备注" : "xx" }
    var fields = purchaseOrderQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret = isAnd(isEqual(getToday("yy"), qr.data[0]["日期"]), isEqual("Rt",
            qr.data[0]["厂商"]));

    tapButton(window, CLEAR);
    for (i = 0; i < 7; i++) {
        if (i == 1 || i == 2) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret && ret1;
}
// 翻页_排序_汇总
function test130002_1() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "店员" : "000",
        "明细" : [ { "货品" : "jkk", "数量" : "20" } ], "备注" : "xx" };
    editSalesBillNoColorSize(json);

    tapMenu("采购订货", "按明细查");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = purchaseOrderQueryParticularFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheckField("序号");

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("单价", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("已入库", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("备注");

    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0;// 库存，在途数，核算金额
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["金额"]);
            sum3 += Number(qr.data[i]["已入库"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(sum1, qr.counts["数量"]), isEqual(sum2,
            qr.counts["金额"]), isEqual(sum3, qr.counts["已入库"]));

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}

// 下拉框,条件查询，清除按钮
function test130002_2() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "店员" : "000",
        "明细" : [ { "货品" : "jkk", "数量" : "20", "备注" : "xx" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购订货", "按明细查");
    var i;
    var ret1 = false;
    var f = new TField("款号", TF_AC, 1, "303", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "3035,jkk,")) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    var keys = { "门店" : "常青店", "款号" : "3035", "厂商" : "Vell",
        "日期从" : getToday(), "到" : getToday(), "备注" : "xx" }
    var fields = purchaseOrderQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual("3035", qr.data[0]["款号"]);

    tapButton(window, CLEAR);
    for (i = 0; i < 6; i++) {
        if (i == 3 || i == 4) {
            ret = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret && ret1;
}

function test130004() {

    tapMenu("采购订货", "按汇总", "按款号");
    var keys = { "日期从" : getDay(-60), "到" : getToday() };
    var fields = purchaseOrderCodeFields(keys);
    query(fields);
    var ret = goPageCheckField("款号");

    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);

    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["已发"]);
            sum3 += Number(qr.data[i]["差异数"]);
            sum4 += Number(qr.data[i]["小计"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(sum1, qr.counts["数量"]), isEqual(sum2,
            qr.counts["已发"]), isEqual(sum3, qr.counts["差异数"]), isEqual(sum4,
            qr.counts["小计"]));

    keys = { "日期从" : getDay(-60), "到" : getToday(), "款号" : "3035", "门店" : "常青店" };
    fields = purchaseOrderCodeFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual("3035", qr.data[0]["款号"]), isEqual("jkk",
            qr.data[0]["名称"]));

    tapButton(window, CLEAR);
    ret = ret && isEqual(getToday(), getTextFieldValue(window, 0));
    ret = ret && isEqual(getToday(), getTextFieldValue(window, 1));
    ret = ret && isEqual("", getTextFieldValue(window, 2));
    ret = ret && isEqual("", getTextFieldValue(window, 3));

    return ret && ret1;
}

function test130005() {
    tapMenu("采购订货", "按汇总", "按厂商");
    var keys = { "日期从" : getDay(-30) };
    var fields = purchaseOrderProviderFields(keys);
    query(fields);
    var ret = goPageCheckField("名称");

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);
    logDebug("ret=" + ret);

    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["已发"]);
            sum3 += Number(qr.data[i]["差异数"]);
            sum4 += Number(qr.data[i]["小计"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(sum1, qr.counts["数量"]), isEqual(sum2,
            qr.counts["已发"]), isEqual(sum3, qr.counts["差异数"]), isEqual(sum4,
            qr.counts["小计"]));

    keys = { "日期从" : getDay(-30), "到" : getToday(), "厂商" : "vell", "门店" : "常青店" };
    fields = purchaseOrderProviderFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual("Vell", qr.data[0]["名称"]));

    tapButton(window, CLEAR);
    ret = ret && isEqual(getToday(), getTextFieldValue(window, 0));
    ret = ret && isEqual(getToday(), getTextFieldValue(window, 1));
    ret = ret && isEqual("", getTextFieldValue(window, 2));
    ret = ret && isEqual("", getTextFieldValue(window, 3));

    return ret && ret1;
}

// 均色均码
function test130005_1() {
    tapMenu("采购订货", "按汇总", "按厂商");
    var keys = { "日期从" : getDay(-30), "厂商" : "vell" };
    var fields = purchaseOrderProviderFields(keys);
    query(fields);
    tapFirstText();
    var qr = getQR2(getScrollView(-1, 0), "款号", "差异数");
    var i, j;
    var arr1 = new Array();
    var curPageTotal = qr.curPageTotal;
    var ret1 = true;
    for (i = 0; i < curPageTotal; i++) {
        arr1[i] = new Array();
        arr1[i][0] = qr.data[i]["款号"];
        arr1[i][1] = qr.data[i]["名称"];
        arr1[i][2] = qr.data[i]["数量"];
        arr1[i][3] = qr.data[i]["已发"];
        ret1 = isAnd(ret1, isEqual("均色", qr.data[i]["颜色"]), isEqual("均码",
                qr.data[i]["尺码"]));
    }
    tapNaviLeftButton();

    tapMenu("采购订货", "按明细查");
    keys = { "厂商" : "vell", "日期从" : getDay(-30) };
    fields = purchaseOrderQueryParticularFields(keys);
    query(fields);

    var ret = true;
    for (i = 0; i < arr1.length; i++) {
        keys = { "款号" : arr1[i][0] };
        fields = purchaseOrderQueryParticularFields(keys);
        setTFieldsValue(window, fields);
        tapButton(window, QUERY);

        qr = getQR();
        ret = isAnd(ret, isEqual(arr1[i][0], qr.data[0]["款号"]), isEqual(
                arr1[i][1], qr.data[0]["名称"]), isEqual(arr1[i][2],
                qr.counts["数量"]), isEqual(arr1[i][3], qr.counts["已入库"]));
        if (ret == false) {
            break;
        }
    }
    return ret && ret1;
}

function test130006() {
    tapMenu("采购订货", "按汇总", "按门店");
    var keys = { "日期从" : getDay(-60) };
    var fields = purchaseOrderShopFields(keys);
    query(fields);
    var ret = goPageCheckField("名称");

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("已发", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);

    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["已发"]);
            sum3 += Number(qr.data[i]["差异数"]);
            sum4 += Number(qr.data[i]["小计"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(sum1, qr.counts["数量"]), isEqual(sum2,
            qr.counts["已发"]), isEqual(sum3, qr.counts["差异数"]), isEqual(sum4,
            qr.counts["小计"]));

    keys = { "日期从" : getDay(-60), "到" : getToday(), "门店" : "常青店" };
    fields = purchaseOrderShopFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual("常青店", qr.data[0]["名称"]));

    tapButton(window, CLEAR);
    ret = ret && isEqual(getToday(), getTextFieldValue(window, 0));
    ret = ret && isEqual(getToday(), getTextFieldValue(window, 1));
    ret = ret && isEqual("", getTextFieldValue(window, 2));

    return ret && ret1;
}

// 均色均码
function test130006_1() {
    tapMenu("采购订货", "按汇总", "按门店");
    var keys = { "日期从" : getDay(-30), "门店" : "常青店" };
    var fields = purchaseOrderShopFields(keys);
    query(fields);
    tapFirstText();
    var qr = getQR2(getScrollView(-1, 0), "款号", "差异数");
    var i, j;
    var arr1 = new Array();
    var ret1 = true;
    for (i = 0; i < qr.curPageTotal; i++) {
        arr1[i] = new Array();
        arr1[i][0] = qr.data[i]["款号"];
        arr1[i][1] = qr.data[i]["名称"];
        arr1[i][2] = qr.data[i]["数量"];
        arr1[i][3] = qr.data[i]["已发"];
        ret1 = isAnd(ret1, isEqual("均色", qr.data[i]["颜色"]), isEqual("均码",
                qr.data[i]["尺码"]));
    }
    tapNaviLeftButton();

    tapMenu("采购订货", "按明细查");
    keys = { "门店" : "常青店", "日期从" : getDay(-30) };
    fields = purchaseOrderQueryParticularFields(keys);
    query(fields);

    var ret = true;
    for (i = 0; i < arr1.length; i++) {
        keys = { "款号" : arr1[i][0] };
        fields = purchaseOrderQueryParticularFields(keys);
        setTFieldsValue(window, fields);
        tapButton(window, QUERY);

        qr = getQR();
        ret = isAnd(ret, isEqual(arr1[i][0], qr.data[0]["款号"]), isEqual(
                arr1[i][1], qr.data[0]["名称"]), isEqual(arr1[i][2],
                qr.counts["数量"]), isEqual(arr1[i][3], qr.counts["已入库"]));
        if (ret == false) {
            break;
        }
    }
    return ret && ret1;
}

function test130004_130005_130006() {
    tapMenu("采购订货", "按汇总", "按款号");
    var keys1 = { "日期从" : getToday(), "到" : getToday(), "款号" : "3035" };
    var fields1 = purchaseOrderCodeFields(keys1);
    query(fields1);
    var qr = getQR();
    var a1 = qr.data[0]["数量"];
    var b1 = qr.data[0]["已发"];
    var c1 = qr.data[0]["差异数"];
    var d1 = qr.data[0]["小计"];
    var ret = isEqual(sub(a1, b1), c1);

    var sum1 = 0, sum2 = 0, sum3 = 0;
    var i, j;
    tapFirstText();
    delay();
    qr = getQR2(getScrollView(-1, 0), "厂商", "差异数");
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["已发"]);
            sum3 += Number(qr.data[i]["差异数"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "厂商", "差异数");
        }
    }
    tapNaviLeftButton();
    ret = isAnd(ret, isEqual(a1, sum1), isEqual(b1, sum2), isEqual(c1, sum3));

    tapMenu("采购订货", "按汇总", "按厂商");
    var keys2 = { "日期从" : getToday(), "到" : getToday(), "厂商" : "vell" };
    var fields2 = purchaseOrderProviderFields(keys2);
    query(fields2);
    qr = getQR();
    var a2 = qr.data[0]["数量"];
    var b2 = qr.data[0]["已发"];
    var c2 = qr.data[0]["差异数"];
    var d2 = qr.data[0]["小计"];
    ret = isAnd(ret, isEqual(sub(a2, b2), c2));

    sum1 = 0, sum2 = 0, sum3 = 0;
    tapFirstText();
    delay();
    qr = getQR2(getScrollView(-1, 0), "款号", "差异数");
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["已发"]);
            sum3 += Number(qr.data[i]["差异数"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "款号", "差异数");
        }
    }
    tapNaviLeftButton();
    ret = isAnd(ret, isEqual(a2, sum1), isEqual(b2, sum2), isEqual(c2, sum3));

    tapMenu("采购订货", "按汇总", "按门店");
    var keys3 = { "日期从" : getToday(), "到" : getToday(), "门店" : "常青店" };
    var fields3 = purchaseOrderShopFields(keys3);
    query(fields3);
    qr = getQR();
    var a3 = qr.data[0]["数量"];
    var b3 = qr.data[0]["已发"];
    var c3 = qr.data[0]["差异数"];
    var d3 = qr.data[0]["小计"];
    ret = isAnd(ret, isEqual(sub(a3, b3), c3));

    sum1 = 0, sum2 = 0, sum3 = 0;
    tapFirstText();
    delay();
    qr = getQR2(getScrollView(-1, 0), "款号", "差异数");
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["已发"]);
            sum3 += Number(qr.data[i]["差异数"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "款号", "差异数");
        }
    }
    tapNaviLeftButton();
    ret = isAnd(ret, isEqual(a3, sum1), isEqual(b3, sum2), isEqual(c3, sum3));

    tapMenu("采购订货", "按明细查");
    var keys = { "款号" : "3035", "日期从" : getToday(), "到" : getToday() }
    var fields = purchaseOrderQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual(a1, qr.counts["数量"]),
            isEqual(b1, qr.counts["已入库"]), isEqual(d1, qr.counts["金额"]));

    keys = { "厂商" : "Vell" }
    fields = purchaseOrderQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual(a2, qr.counts["数量"]),
            isEqual(b2, qr.counts["已入库"]), isEqual(d2, qr.counts["金额"]));

    keys = { "门店" : "常青店" }
    fields = purchaseOrderQueryParticularFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual(a3, qr.counts["数量"]),
            isEqual(b3, qr.counts["已入库"]), isEqual(d3, qr.counts["金额"]));

    return ret;
}

function test130007() {
    var r = getTimestamp(6);
    tapMenu("采购订货", "新增订货+");
    tapButton(window, "新增+");
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("订货数", TF, 3, "30");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    tapButton(window, "新增货品");
    g0 = new TField("款号*", TF, 0, r);
    var g1 = new TField("名称*", TF, 1, r);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    var f7 = new TField("订货数", TF, 7, "30");
    var fields = [ f7 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);

    tapMenu("采购订货", "按批次查");
    // delay();
    // query();
    tapFirstText();
    var ret1 = false;
    var ret2 = false;
    var a = getTextFieldValue(getScrollView(), 0);
    var b = getTextFieldValue(getScrollView(), 3);
    logDebug("a=" + a + "  b=" + b);
    if (isIn(a, "3035") && b == 30) {
        ret1 = true;
    }
    var a1 = getTextFieldValue(getScrollView(), 4);
    var b1 = getTextFieldValue(getScrollView(), 7);
    if (isIn(a1, r) && b1 == 30) {
        ret2 = true;
    }
    delay();
    tapButton(window, RETURN);

    logDebug("ret1=" + ret1 + "   ret2=" + ret2);
    return ret1 && ret2;
}

function test130008() {
    tapMenu("采购订货", "新增订货+");
    var json = {
        "客户" : "vell",
        "goodsFieldIndex" : -2,
        "明细" : [ { "货品" : "3035", "数量" : [ 30 ] },
                { "货品" : "k300", "数量" : [ 20 ] } ]

    };
    editSalesBillColorSize(json);

    tapMenu("采购订货", "按批次查");
    delay();
    query();
    tapFirstText();
    var ret1 = false;
    var ret2 = false;
    var a = getTextFieldValue(getScrollView(), 0);
    var b = getTextFieldValue(getScrollView(), 3);
    if (a == "3035,jkk" && b == 30) {
        ret1 = true;
    }
    var a1 = getTextFieldValue(getScrollView(), 4);
    var b1 = getTextFieldValue(getScrollView(), 7);
    if (a1 == "k300,铅笔裤" && b1 == 20) {
        ret2 = true;
    }
    delay();
    tapButton(window, RETURN);
    logDebug("ret1=" + ret1 + "   ret2=" + ret2);
    return ret1 && ret2;

}

function test130003() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "4562", "数量" : "20" } ], };
    editSalesBillNoColorSize(json);

    tapMenu("采购订货", "按批次查");
    var qr = getQR();
    var a = qr.data[0]["批次"];
    tapFirstText();
    tapButtonAndAlert("作 废");
    delay();
    tapButton(window, RETURN);

    tapMenu("采购订货", "按明细查");
    qr = getQR();
    var b = qr.data[0]["批次"];
    if (a != b) {
        var ret = true;
    }

    return ret;
}

function test130009() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "20" } ], };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按订货入库");
    tapFirstText();
    var f5 = new TField("入库数", TF, 5, "10");
    var fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("采购订货", "按批次查");
    tapFirstText();
    tapButtonAndAlert("作 废");
    var ret1 = false, ret2 = false;
    if (isIn(alertMsg, "确定作废吗")) {
        ret1 = true;
    }
    delay();
    if (isIn(alertMsg, "订单已入库，不允许作废")) {
        ret2 = true;
    }
    delay();
    tapButton(window, RETURN);

    logDebug(" ret1=" + ret1 + " ret2=" + ret2);
    return ret1 && ret2;
}

function test130010() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "20" } ], };
    editSalesBillNoColorSize(json);

    tapMenu("采购订货", "按批次查");
    var qr = getQR();
    var ret1 = isEqual("总经理", qr.data[0]["操作人"]);
    tapFirstText();
    var ret2 = isIn(getTextFieldValue(window, 1), "000");
    tapButton(window, RETURN);

    tapMenu("采购入库", "按订货入库");
    qr = getQR();
    var ret3 = isEqual("总经理", qr.data[0]["操作人"]);
    tapFirstText();
    var ret4 = isIn(getTextFieldValue(window, 1), "000");
    tapButton(window, RETURN);

    logDebug(" ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3 + " ret4="
            + ret4);
    return ret1 && ret2 && ret3 && ret4;
}

function test130011() {
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购订货", "按批次查");
    tapFirstText();
    var keys = { "厂商" : "lx" };
    var fields = purchaseOrderAddFields(keys);
    setTFieldsValue(window, fields);
    saveAndAlertOk();
    delay();
    tapButtonAndAlert("none", OK);
    if (isIn(alertMsg, "操作失败")) {
        var ret = true;
    }
    delay();
    tapButton(window, RETURN);

    logDebug(" ret=" + ret);
    return ret;
}