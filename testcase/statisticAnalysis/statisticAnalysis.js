//LuXingXin <52619481 at qq.com> 20151109

function testStatisticAnalysisAll() {
    // run("【统计分析—新增收入】新增类别", "test190012");
    // run("【统计分析—新增收入】保存", "test190013");
    // run("【统计分析—新增收入】返回", "test190014");
    // run("【统计分析—新增收入】删除", "test190015");
    // run("【统计分析—新增支出】新增类别", "test190016");
    // run("【统计分析—新增支出】保存", "test190017");
    // run("【统计分析—新增支出】返回", "test190018");
    // run("【统计分析—新增支出】删除", "test190019");

    // 全局设置单价小数位，精确到元
    // run("【统计分析-新增收入】金额支持2位小数", "test190020");
    // run("【统计分析-新增支出】金额支持2位小数", "test190021");

    // run("【统计分析—收支表】", "test190001");
    // run("【统计分析—收支表】查询/底部数据检查", "test190002_190008");
    // run("【统计分析—收支表】清除", "test190003");
    // run("【统计分析—收支表】详细信息", "test190004");
    // run("【统计分析—收支表】详细信息-返回", "test190006");
    // run("【统计分析—收支汇总】收入或支出查询", "test190009");
    // run("【统计分析—收支汇总】进入详细", "test190010");
    // run("【统计分析—收支汇总】检查底部数据", "test190011");
    // run("【统计分析—收支流水】查询", "test190022");
    // run("【统计分析—收支流水】清除", "test190023");
    // run("【统计分析—收支流水】流水检查/金额正负检查", "test190024_190025");
    // run("【统计分析—收支流水】底部数据检查", "test190026");
    // run("【统计分析—收支类别】保存", "test190028");
    // run("【统计分析—收支类别】返回", "test190029");

    // run("【统计分析—汇总表-退货表】查询/清除", "test190068_190070");
//     run("【统计分析—汇总表-退货表】排序", "test190069");
    // run("【统计分析—汇总表-退货表】款号退货数检查", "test190071");
    // run("【统计分析—汇总表-退货表】底部数据检查", "test190072");
//    run("【统计分析—汇总表-畅销表】查询/清除/款号畅销数检查", "test190073_190075_190076");
    run("【统计分析—汇总表-滞销表】滞销款号检查", "test190077");

}

function test190012() {
    var r = "收入" + getTimestamp(6);
    tapMenu("统计分析", "新增收入");
    tapButton(window, "新增类别");
    var f0 = new TField("数量", TF, 0, r);
    var fields = [ f0 ];
    setTFieldsValue(getPopOrView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), CLOSE);
    tapButton(window, RETURN);

    tapMenu("统计分析", "收支类别");
    var qr = getQR(window, getScrollView(), "序号", 3);
    var ret = isEqual("收入", qr.data[0]["出入类别"]) && isEqual(r, qr.data[0]["名称"])

    return ret;
}

function test190013() {
    tapMenu("统计分析", "收支汇总");
    var key = { "日期从" : "2015-11-09" }
    var fields = statisticAnalysisInOutSummaryFields(key);
    query(fields);
    var qr = getQR();
    var counts = Number(qr.counts["金额"]);

    var r = getTimestamp(6);// 不输入备注会提示提交重复数据
    tapMenu("统计分析", "新增收入");
    var json = { "账户" : "现",
        "明细" : [ { "收入类别" : "订金", "金额" : "888", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    qr = getQR();
    var ret = isEqual("现", qr.data[0]["简称"])
            && isEqual("888", qr.data[0]["金额"]);

    tapMenu("统计分析", "收支汇总");
    qr = getQR(window, getScrollView(), "序号", 3);
    ret = ret && isEqual(counts + 888, qr.counts["金额"]);

    return ret;
}

function test190014() {
    var r = getTimestamp(6);
    tapMenu("统计分析", "新增收入");
    var json = { "账户" : "现", "明细" : [ { "收入类别" : "订金", "金额" : r } ],
        "onlytest" : "yes" };
    editStatisticAnalysisIn(json);
    tapButtonAndAlert(RETURN);
    delay();

    var qr = getQR();
    var ret = false;
    if (qr.data[0]["金额"] != r) {
        ret = true;
    }

    return ret;
}

function test190015() {
    tapMenu("统计分析", "新增收入");
    var json = { "账户" : "现",
        "明细" : [ { "收入类别" : "订金", "金额" : "888", "备注" : "123" } ],
        "onlytest" : "yes" };
    editStatisticAnalysisIn(json);
    tapButton(getScrollView(), 0);
    var ret = isEqual("", getTextFieldValue(getScrollView(), 0))
            && isEqual("", getTextFieldValue(getScrollView(), 1))
            && isEqual("", getTextFieldValue(getScrollView(), 2));
    tapButtonAndAlert(RETURN);

    return ret;
}

function test190016() {
    var r = "支出" + getTimestamp(6);
    tapMenu("统计分析", "新增支出");
    tapButton(window, "新增类别");
    var f0 = new TField("数量", TF, 0, r);
    var fields = [ f0 ];
    setTFieldsValue(getPopOrView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), CLOSE);
    tapButton(window, RETURN);

    tapMenu("统计分析", "收支类别");
    var qr = getQR(window, getScrollView(), "序号", 3);
    var ret = isEqual("支出", qr.data[0]["出入类别"]) && isEqual(r, qr.data[0]["名称"])

    return ret;
}

function test190017() {
    tapMenu("统计分析", "收支汇总");
    var key = { "日期从" : "2015-11-09" }
    var fields = statisticAnalysisInOutSummaryFields(key);
    query(fields);
    var qr = getQR();
    var counts = Number(qr.counts["金额"]);

    var r = getTimestamp(6);// 不输入备注会提示提交重复数据
    tapMenu("统计分析", "新增支出");
    var json = { "账户" : "现",
        "明细" : [ { "收入类别" : "物业", "金额" : "888", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    qr = getQR();
    var ret = isEqual("现", qr.data[0]["简称"])
            && isEqual("888", qr.data[0]["金额"]);

    tapMenu("统计分析", "收支汇总");
    qr = getQR(window, getScrollView(), "序号", 3);
    ret = ret && isEqual(counts - 888, qr.counts["金额"]);

    return ret;
}

function test190018() {
    var r = getTimestamp(6);
    tapMenu("统计分析", "新增支出");
    var json = { "账户" : "现", "明细" : [ { "收入类别" : "物业", "金额" : r } ],
        "onlytest" : "yes" };
    editStatisticAnalysisIn(json);
    tapButtonAndAlert(RETURN);
    delay();

    var qr = getQR();
    var ret = false;
    if (qr.data[0]["金额"] != r) {
        ret = true;
    }

    return ret;
}

function test190019() {
    tapMenu("统计分析", "新增支出");
    var json = { "账户" : "现",
        "明细" : [ { "收入类别" : "物业", "金额" : "888", "备注" : "123" } ],
        "onlytest" : "yes" };
    editStatisticAnalysisIn(json);
    tapButton(getScrollView(), 0);
    var ret = isEqual("", getTextFieldValue(getScrollView(), 0))
            && isEqual("", getTextFieldValue(getScrollView(), 1))
            && isEqual("", getTextFieldValue(getScrollView(), 2));
    tapButtonAndAlert(RETURN);

    return ret;
}

function test190020() {
    tapMenu("统计分析", "新增收入");
    var r = getTimestamp(6);
    var json = { "账户" : "现",
        "明细" : [ { "收入类别" : "订金", "金额" : "888.88", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    var qr = getQR();
    var ret = isEqual("888.88", qr.data[0]["金额"]);

    return ret;
}

function test190021() {
    tapMenu("统计分析", "新增支出");
    var r = getTimestamp(6);
    var json = { "账户" : "现",
        "明细" : [ { "收入类别" : "物业", "金额" : "888.88", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    var qr = getQR();
    var ret = isEqual("888.88", qr.data[0]["金额"]);

    return ret;
}

function test190001() {
    tapMenu("统计分析", "新增收入");
    var r = getTimestamp(6);
    var json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : "6666", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    var key = { "日期从" : getToday(), "到" : getToday() };
    var fields = statisticAnalysisInOutFields(key);
    query(fields);

    var qr = getQR();
    var expected = { "序号" : "1", "日期" : getToday(), "账户名称" : "东灵测试-银行账户",
        "简称" : "银", "金额" : "6666", "备注" : r, "操作人" : "总经理" };
    var ret = isEqualQRData1Object(qr, expected);
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            ret = ret && isEqual(getToday(), qr.data[i]["日期"])
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    return ret;
}

function test190002_190008() {
    var i, j;
    tapMenu("统计分析", "新增收入");
    var r = getTimestamp(6);
    var json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : "6666", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    var key = { "日期从" : getToday(), "到" : getToday(), "收支类别" : "收入" };
    var fields = statisticAnalysisInOutFields(key);
    query(fields);

    var qr = getQR();
    var expected = { "序号" : "1", "日期" : getToday(), "账户名称" : "东灵测试-银行账户",
        "简称" : "银", "金额" : "6666", "备注" : r, "操作人" : "总经理" };
    var ret = isEqualQRData1Object(qr, expected);
    var sum1 = 0;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = ret && isEqual(qr.counts["金额"], sum1);

    tapMenu("统计分析", "新增支出");
    json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "物业", "金额" : "1000", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支表");
    key = { "收支类别" : "支出" };
    fields = statisticAnalysisInOutFields(key);
    query(fields);

    qr = getQR();
    expected = { "序号" : "1", "日期" : getToday(), "账户名称" : "东灵测试-银行账户",
        "简称" : "银", "金额" : "1000", "备注" : r, "操作人" : "总经理" };
    ret = ret && isEqualQRData1Object(qr, expected);
    var sum2 = 0;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum2 += Number(qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = ret && isEqual(qr.counts["金额"], -sum2);// 支出的汇总为负数

    query();
    qr = getQR();
    ret = ret && isAqualNum(qr.counts["金额"], sum1 - sum2, 0);

    return ret;
}

function test190003() {
    tapMenu("统计分析", "收支表");
    var key = { "日期从" : getToday(), "到" : getToday(), "收支类别" : "支出" };
    var fields = statisticAnalysisInOutFields(key);
    setTFieldsValue(window, fields);
    tapButton(window, CLEAR);
    var ret = isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual(getToday(), getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2));

    return ret;
}

function test190004() {
    tapMenu("统计分析", "新增收入");
    var r = getTimestamp(6);
    var json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : "6666", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapFirstText();
    var ret = isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual("银", getTextFieldValue(window, 1))
            && isEqual("6666", getTextFieldValue(window, 2))// 总额
            && isEqual(r, getTextFieldValue(window, 3))
            && isEqual("订金", getTextFieldValue(getScrollView(), 0))// 收入类别
            && isEqual("6666", getTextFieldValue(getScrollView(), 1))// 金额
            && isEqual(r, getTextFieldValue(getScrollView(), 2));
    tapButton(window, RETURN);

    return ret;
}

function test190006() {
    tapMenu("统计分析", "收支表");
    var qr = getQR();
    var a = qr.titles[3];// 账户名称

    tapFirstText();
    tapButton(window, RETURN);
    qr = getQR();
    var ret = isEqual(a, qr.titles[3]);

    return ret;
}

function test190009() {
    var i, j;
    tapMenu("统计分析", "新增收入");
    var r = getTimestamp(6);
    var json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : "6666", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支汇总");
    var key = { "日期从" : getToday(), "到" : getToday(), "收支类别" : "收入" };
    var fields = statisticAnalysisInOutSummaryFields(key);
    query(fields);

    var qr = getQR();
    var ret = true;
    var sum1 = 0;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = ret && isEqual(qr.counts["金额"], sum1);

    tapMenu("统计分析", "新增支出");
    json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "物业", "金额" : "1000", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支汇总");
    key = { "收支类别" : "支出" };
    fields = statisticAnalysisInOutSummaryFields(key);
    query(fields);

    qr = getQR();
    var sum2 = 0;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum2 += Number(qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = ret && isEqual(qr.counts["金额"], -sum2);// 支出的汇总为负数

    return ret;
}

function test190010() {
    tapMenu("统计分析", "新增收入");
    var r = getTimestamp(6);
    var json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : "6666", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支汇总");
    var key = { "日期从" : getToday(), "到" : getToday(), "收支类别" : "收入" };
    var fields = statisticAnalysisInOutSummaryFields(key);
    query(fields);

    tapFirstText();
    var qr = getQR2(getScrollView(1), "日期", "操作人");
    var ret = isEqual(getToday("yy"), qr.data[0]["日期"])
            && isEqual("东灵测试-银行账户", qr.data[0]["账户"])
            && isEqual("6666", qr.data[0]["金额"])
            && isEqual("总经理", qr.data[0]["操作人"]);

    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            ret = ret && isEqual(getToday("yy"), qr.data[i]["日期"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(1), "日期", "操作人");
        }
    }
    tapNaviLeftButton();

    return ret;
}

function test190011() {
    tapMenu("统计分析", "收支汇总");
    var keys = { "收支类别" : "收入" };
    var fields = statisticAnalysisInOutSummaryFields(keys);
    query(fields);
    var qr = getQR();
    var a = Number(qr.counts["金额"]);

    keys = { "收支类别" : "支出" };
    fields = statisticAnalysisInOutSummaryFields(keys);
    query(fields);
    qr = getQR();
    var b = Number(qr.counts["金额"]);// 为负数

    query();
    qr = getQR();
    var ret = isEqual(a + b, qr.counts["金额"]);

    return ret;
}

function test190022() {
    tapMenu("统计分析", "新增收入");
    var r = getTimestamp(6);
    var json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : "6666", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支流水");
    query();
    var qr = getQR();
    var expected = { "序号" : "1", "门店" : "常青店", "类型" : "收入单", "账户" : "银",
        "金额" : "6666", "操作人" : "总经理" };
    var ret = isEqualQRData1Object(qr, expected)
            && isAqualOptime(json["操作日期"], qr.data[0]["操作日期"]);

    return ret;
}

function test190023() {
    tapMenu("统计分析", "收支流水");
    var keys = { "日期从" : getToday(), "到" : getToday(), "门店" : "常青店", "账户" : "现" };
    var fields = statisticAnalysisInOutAccountFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, CLEAR);

    var ret = isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3));
    return ret;
}

function test190024_190025() {
    // 价格为200
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "15" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "收支流水");
    var qr = getQR();
    var a = Number(qr.data[0]["余额"]);// 账户:现
    var expected = { "序号" : "1", "门店" : "常青店", "类型" : "销售单", "账户" : "现",
        "金额" : "3000", "操作人" : "总经理" };
    var ret = isEqualQRData1Object(qr, expected)
            && isAqualOptime(json["操作日期"], qr.data[0]["操作日期"]);

    tapMenu("统计分析", "新增收入");
    var r = getTimestamp(6);
    json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "订金", "金额" : "6666", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支流水");
    qr = getQR();
    var b = Number(qr.data[0]["余额"]);// 账户:银
    expected = { "序号" : "1", "门店" : "常青店", "类型" : "收入单", "账户" : "银",
        "金额" : "6666", "操作人" : "总经理" };
    ret = ret && isEqualQRData1Object(qr, expected)
            && isAqualOptime(json["操作日期"], qr.data[0]["操作日期"]);

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "Vell", "明细" : [ { "货品" : "3035", "数量" : "20" } ], };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "收支流水");
    qr = getQR();
    var ret1 = isEqual(qr.data[0]["金额"], sub(qr.data[0]["余额"], a));// 现余额验证
    expected = { "序号" : "1", "门店" : "常青店", "类型" : "采购单", "账户" : "现",
        "金额" : "-2000", "操作人" : "总经理" };
    ret = ret && isEqualQRData1Object(qr, expected)
            && isAqualOptime(json["操作日期"], qr.data[0]["操作日期"]);

    tapMenu("统计分析", "新增支出");
    json = { "账户" : "银", "收支备注" : r,
        "明细" : [ { "收入类别" : "物业", "金额" : "1000", "备注" : r } ] };
    editStatisticAnalysisIn(json);

    tapMenu("统计分析", "收支流水");
    qr = getQR();
    ret1 = ret1 && isEqual(qr.data[0]["金额"], sub(qr.data[0]["余额"], b));// 银余额验证
    expected = { "序号" : "1", "门店" : "常青店", "类型" : "支出单", "账户" : "银",
        "金额" : "-1000", "操作人" : "总经理" };
    ret = ret && isEqualQRData1Object(qr, expected)
            && isAqualOptime(json["操作日期"], qr.data[0]["操作日期"]);

    return ret && ret1;
}

function test190026() {
    tapMenu("统计分析", "收支流水");
    query();
    var sum = 0
    var qr = getQR();
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isEqual(sum, qr.counts["金额"]);

    return ret;
}

function test190028() {
    tapMenu("统计分析", "收支类别");
    tapFirstText();
    var r = "类别" + getTimestamp(6);
    var f0 = new TField("名称", TF, 0, r);
    var fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();

    delay();
    var qr = getQR();
    var ret = isEqual(r, qr.data[0]["名称"]);

    return ret;
}

function test190029() {
    tapMenu("统计分析", "收支类别");
    tapFirstText();
    tapButton(window, RETURN);

    delay();
    var qr = getQR();
    var ret = isEqual("序号", qr.titles[0]) && isEqual("出入类别", qr.titles[1])
            && isEqual("名称", qr.titles[2]);

    return ret;
}

function test190068_190070() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "-5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "汇总表", "退货表");
    var keys = { "日期从" : getToday(), "到" : getToday(), "款号" : "3035",
        "款号名称" : "jkk" };
    var fields = statisticAnalysisReturnFields(keys);
    query(fields);

    var qr = getQR();
    var expected = { "序号" : "1", "门店" : "常青店", "款号" : "3035", "名称" : "jkk" };
    var ret = isEqualQRData1Object(qr, expected);

    tapButton(window, CLEAR);
    ret = ret && isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3));

    return ret;
}

function test190069() {
    tapMenu("统计分析", "汇总表", "退货表");
    var ret = true;
    var qr=getQR();
    // ret = ret && sortByTitle("门店");
    // ret = ret && sortByTitle("款号");
    // ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("退货数", IS_NUM);

    return ret;
}

function test190071() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "3035", "数量" : "-5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按退货汇总");
    var keys = { "门店" : "常青店", "类型" : "退货" };
    var fields = salesReturnFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["数量"];// 显示为正数

    tapMenu("统计分析", "汇总表", "退货表");
    qr = getQR();
    var ret = isEqual(-a, qr.counts["退货数"]);

    return ret;
}

function test190072() {
    tapMenu("统计分析", "汇总表", "退货表");
    query();
    var qr = getQR();
    var sum = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["退货数"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isEqual(-sum, qr.counts["退货数"]);

    return ret;

}

function test190073_190075_190076() {
    tapMenu("销售开单", "按明细查");
    var keys = { "款号" : "3035", "发生日期从" : getToday(), "到" : getToday() };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.counts["数量"];

    tapMenu("统计分析", "汇总表", "畅销表");
    keys = { "款号" : "3035", "日期从" : getToday(), "到" : getToday(), "门店" : "常青店",
        "款号名称" : "jkk" };
    fields = statisticAnalysisGoodMarketFields(keys);
    query(fields);
    qr = getQR();
    var expected = { "序号" : "1", "门店" : "常青店", "款号" : "3035", "名称" : "jkk" };
    var ret = isEqualQRData1Object(qr, expected)
            && isEqual(a, qr.counts["销售数"]);

    tapButton(window, CLEAR);
    ret = ret && isEqual("", getTextFieldValue(window, 0))
            && isEqual(getToday(), getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3))
            && isEqual("", getTextFieldValue(window, 4));

    return ret;
}

function test190077(){
    tapMenu("货品管理", "新增货品+");
    
    
}

function editStatisticAnalysisIn(o) {
    editStatisticAnalysisInField1(o, "日期");
    editStatisticAnalysisInField1(o, "账户");
    editStatisticAnalysisInField1(o, "收支备注");

    editStatisticAnalysisInDet(o);

    editStatisticAnalysisInSave(o);
}

function editStatisticAnalysisInField1(o, key) {
    var v = o[key];
    if (isDefined(v)) {
        var keys = {};
        keys[key] = v;
        var fields = editStatisticAnalysisInFields(keys);
        setTFieldsValue(window, fields);
    }
}

function editStatisticAnalysisInDet(o) {
    var details = o["明细"];
    for ( var i in details) {
        var d = details[i];

        var f0 = new TField("收入类别", TF_SC, 0, d["收入类别"]);
        setTFieldsValue(getScrollView(), [ f0 ]);

        var f1 = new TField("金额", TF, 1, d["金额"]);
        setTFieldsValue(getScrollView(), [ f1 ]);

        var fields = [];
        if (isDefined(d["备注"])) {
            fields.push(new TField("备注", TF, 2, d["备注"]));
        }
        setTFieldsValue(getScrollView(), fields);
    }
}

function editStatisticAnalysisInSave(o) {
    if (isDefined(o["onlytest"])) {
        return;
    }

    saveAndAlertOk();
    o["操作日期"] = getOpTime();
    tapPrompt();
    delay();
    if (isDefined(o["不返回"]) && "yes" == o["不返回"]) {
        logDebug("不返回=" + o["不返回"] + " 点击键盘隐藏");
        tapKeyboardHide();
    } else {
        tapButtonAndAlert(RETURN);
    }
}