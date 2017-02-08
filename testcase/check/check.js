//luxingxin <52619481 at qq.com> 20151014

function testCheck001() {
    run("处理掉待作废", "checkPrepare");
    run("处理掉盘点计划", "checkPrepare1");
    run("【盘点管理—按批次查】翻页_排序_汇总", "test180001_180003_180005");
    run("【盘点管理—按批次查】条件查询，清除按钮,下拉框", "test180001_2_180004");
    run("【盘点管理—按明细查】翻页_排序_汇总", "test180013_1_180055");
    run("【盘点管理—按明细查】条件查询，清除按钮,下拉框", "test180013_2_180014");
    run("【盘点管理—处理记录】排序翻页跳转,下拉框", "test180053");
    run("【盘点管理—处理记录】条件查询，清除按钮", "test180029_180031_180032");
    run("【盘点管理—盈亏表】翻页_排序_汇总", "test180037");
    run("【盘点管理—盈亏表】条件查询，清除按钮,下拉框", "test180037_180034_180035");
    run("【盘点管理—库存表】清除", "test180054");
    run("【货品管理-货品进销存】累计调入、累计调出、盈亏数量", "ts100157For000_2");
}
function testCheckAll() {
    run("处理掉待作废", "checkPrepare");
    run("调拨单入库", "checkPrepare_1");
    run("处理掉盘点计划", "checkPrepare1");
    run("处理掉盘点单", "checkPrepare2");
    run("【盘点管理-更多-未盘点款号】检查数据正确性", "test180088");
    run("【盘点管理—盘点处理】部分处理", "test180026");
    run("【盘点管理—盘点处理】全盘处理", "test180025");
    run("【盘点管理—按批次查】输入起始批次和结束批次后查询", "test180002");
    run("【盘点管理—按明细查】品牌,类别查询条件检查", "test180015");
    run("【盘点管理—新增盘点】", "test180019");
    run("【盘点管理—新增盘点】整单复制、整单粘贴", "test180021");
    run("【盘点管理—新增盘点】返回", "test180023");
    run("【盘点管理—新增盘点】删除按钮", "test180024");
    run("【盘点管理—处理记录】处理记录界面门店检查", "test180030");
    run("【盘点管理—按批次查】处理人检查", "test180048");
    run("【盘点管理-盘点处理】盘点处理的单据修改", "test180042");
    run("【盘点管理-盘点处理】盘点处理的单据作废\待作废", "test180042_2_170614");
    run("【盘点管理-盘点处理】盘点处理的单据修改", "test180042_4");
    run("【盘点管理-盘点处理】盘点处理的单据修改", "test180042_1");
    run("【盘点管理-盘点处理】盘点处理的单据作废", "test180042_3");
    run("【盘点管理-盘点处理】盘点处理的单据修改", "test180042_5");
    run("【盘点管理-盘点处理】盘点处理的单据作废", "test180042_7");
    run("【盘点管理—按批次查】保存（已处理盘点单）", "test180008");
    run("【盘点管理—按批次查】删除（未处理盘点单）", "test180009");
    run("【盘点管理—按批次查】删除（已处理盘点单）", "test180010");
    run("【盘点管理—盘点撤销】", "test180033");
    run("【盘点管理—盈亏表】盈亏金额的正确性", "test180049_180036");
    run("【盘点管理—盈亏表】盈亏金额的正确性", "test180049_1");
    run("【盘点管理-处理记录】详细界面的翻页、排序、底部数据汇总", "test180092");
    // run("【盘点管理-新增盘点】是否允许负库存 设为 允许负库存/不允许负库存", "test180090_180091");//
    run("【盘点管理-新增盘点】盘点时是否允许允许输入负数", "test180091_1");
    run("【盘点管理—盘点处理】处理日期设置", "test180027");
    run("【盘点管理-更多-未盘点款号】店长和开单员只能看自己门店的数据", "test180098_1");
    run("【盘点管理-按批次查】修改界面款号下拉列表价格检查", "test180099");
}
function testCheck003() {
    run("【盘点管理-盘点计划】新增盘点计划-按品牌（门店不存在未处理的盘点单和盘点计划）", "test180061");
    run("【盘点管理-盘点计划】新增盘点计划-按品牌（门店存在未处理的盘点单和盘点计划）", "test180062");
    run("【盘点管理-盘点计划】新增盘点计划-按品牌-检查品牌下拉列表", "test180063");
    run("【盘点管理-盘点计划】新增品牌盘点计划成功后-新增盘点单", "test180064");
    run("【盘点管理-盘点计划】新增品牌盘点计划成功后-新增盘点单成功后-盘点处理完毕后-进行盘点撤销", "test180066");
    run("【盘点管理-盘点计划】新增盘点计划-按类别（门店不存在未处理的盘点单和盘点计划）", "test180067");
    run("【盘点管理-盘点计划】新增盘点计划-按类别（门店存在未处理的盘点单和盘点计划）", "test180068");
    run("【盘点管理-盘点计划】新增盘点计划-按类别-检查类别下拉列表", "test180069");
    run("【盘点管理-盘点计划】新增类别盘点计划成功后-新增盘点单", "test180070");// //
    run("【盘点管理-盘点计划】新增厂商计划-按厂商（门店不存在未处理的盘点单和盘点计划）", "test180073");
    run("【盘点管理-盘点计划】新增盘点计划-按厂商（门店存在未处理的盘点单和盘点计划）", "test180074_180082_180083");
    run("【盘点管理-盘点计划】新增厂商盘点计划成功后-新增盘点单", "test180076");
    run("【盘点管理-盘点计划】新增厂商盘点计划成功后-新增盘点单成功后-进行盘点处理", "test180077");// /// 修改
    run("【盘点管理-盘点计划】新增厂商盘点计划成功后-新增盘点单成功后-盘点处理完毕后-进行盘点撤销", "test180078");// ///
    run("【盘点管理-盘点计划】按品牌/按类别/按厂商三个不能同时新增", "test180079");// //
    run("【盘点管理-盘点计划】盘点计划组合类型", "test180084");
    run("【盘点管理-盘点计划表】查询清除排序", "test180082_180083");//    
    run("【盘点管理-新增盘点】款号提示", "test180085");
    run("【盘点管理-更多-未盘点款号】查询、清除", "test180086");
    run("【盘点管理-更多-未盘点款号】排序、底部数据汇总、翻页", "test180087");
    run("【盘点管理-更多-未盘点款号】已停用的款号不显示", "test180089");
    run("【盘点管理-盘点计划】新增盘点计划-按组合（门店不存在未处理的盘点单和盘点计划）", "test180093");
    run("【盘点管理-盘点计划】新增盘点计划-按组合（门店存在未处理的盘点单和盘点计划）", "test180094");
    run("【盘点管理-盘点计划】新增组合盘点计划成功后-新增盘点单", "test180095");
    run("【盘点管理-盘点计划】新增组合盘点计划成功后-新增盘点单成功后-进行盘点处理", "test180096");
    run("【盘点管理-盘点计划】新增组合盘点计划成功后-新增盘点单成功后-盘点处理完毕后-进行盘点撤销", "test180097");
    run("【盘点管理-盘点计划】新增盘点计划-按组合-检查类别/品牌/厂商/季节下拉列表", "test180100");
    // run("【盘点管理-盘点计划】新增品牌盘点计划成功后-新增盘点单成功后-进行盘点处理",
    // "test180065_180071_180077");//需要调拨单，陆那么运行
    // run("【盘点管理－新增盘点计划】停用", "test180101");
    // run("【盘点管理-盘点处理】待作废不允许盘点处理", "test180057");
}
function checkPrepare_Off() {
    tapButton(window, "作 废");
}
function checkPrepare_IN() {
    tapButton(window, "调 入");
}
function checkPrepare() {
    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : "2015-01-01", "作废挂单" : "待作废" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    var qr = getQR();
    var t1 = qr.total;
    for (var i = 0; i < t1; i++) {
        tapButton(window, QUERY);
        tapFirstText();
        runAndAlert("checkPrepare_Off", OK);
        delay();
    }
    tapMenu("销售开单", "按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    var t2 = qr.total;
    var ret = false;
    if (t2 < 1) {
        ret = true;
    }
}
function checkPrepare_1() {
    tapMenu("门店调入", "在途调拨");
    var keys = { "日期从" : "2015-01-01" };
    var fields = shopInFlitFields(keys);
    query(fields);
    qr = getQR();
    var t2 = qr.total;
    for (var i = 0; i < t2; i++) {
        tapButton(window, QUERY);
        tapFirstText();
        runAndAlert("checkPrepare_IN", OK);
        delay();
    }

    tapButton(window, QUERY);
    qr = getQR();
    var ret = isEqual(0, qr.data.length);

    logDebug(" t1=" + t1);
    return ret;
}
function checkPrepare1() {
    tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    var keys = { "是否处理" : "否" };
    var fields = checkPlanFields(keys);
    query(fields);
    var qr = getQR();
    var t1 = qr.total;
    for (var i = 0; i < t1; i++) {
        tapButton(window, QUERY);
        tapFirstText();
        tapButtonAndAlert("删除计划", OK);
        tapPrompt();
    }
    tapButton(window, QUERY);
    qr = getQR();
    var ret = false;
    var t = qr.total;
    if (t == 0) {
        ret = true;
    }

    return ret;
}
function checkPrepare2() {
    tapMenu("盘点管理", "按批次查");
    var keys = { "日期从" : getDay(-3) };
    var fields = queryCheckBatchFields(keys);
    query(fields);
    var qr = getQR();
    var ret = true;
    if (qr.data.length != 0) {
        for (var i = 0; i < qr.total - 1; i++) {
            var qr1 = getQR();
            var date = qr1.data[0]["处理时间"];
            if (date == "") {
                tapFirstText();
                tapButtonAndAlert("删 除", OK);
                delay();
            }
        }

        tapMenu("盘点管理", "按批次查");
        tapButton(window, QUERY);
        var qr = getQR();
        if (qr.data[0]["处理时间"] == "") {
            tapFirstText();
            tapButtonAndAlert("删 除", OK);
            delay();
        }

        tapButton(window, QUERY);
        var qr = getQR();
        var arr = [], date;
        var totalPageNo = qr.totalPageNo;
        for (var j = 1; j <= totalPageNo; j++) {
            for (var i = 0; i < qr.curPageTotal - 1; i++) {
                date = qr.data[i]["处理时间"];
                if (date == "") {
                    ret = false;
                }
            }
            if (j < totalPageNo) {
                scrollNextPage();
                qr = getQR();
            }
        }
    }

    return ret;
}
function test180001_180003_180005() {
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "k300", "数量" : 5 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "按批次查");
    var keys = { "日期从" : getDay(-1) };
    var fields = queryCheckBatchFields(keys);
    query(fields);
    // // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("盘点日期", IS_OPTIME);
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("处理时间");
    ret = ret && sortByTitle("处理人");

    query();
    var qr = getQR();
    var sum1 = 0;
    var qr = getQR();
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1));

    logDebug(" sum1=" + sum1 + ", ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test180001_2_180004() {
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 100 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理");
    delay(2);
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 100 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理");
    delay(2);
    tapButton(window, RETURN);

    tapMenu("盘点管理", "按批次查");
    var keys = { "日期从" : getDay(-30), "批次从" : batch - 1, "批次到" : batch + 1,
        "处理时间从" : getToday(), "处理时间到" : getToday(), "门店" : "常青店" };
    var fields = queryCheckBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a1 = qr.data[0]["门店"];
    var a2 = qr.data[0]["数量"];
    var a3 = qr.data[0]["盘点日期"];
    var a4 = qr.data[0]["操作人"];
    var a5 = qr.data[0]["处理时间"];
    var a6 = qr.data[0]["处理人"];
    var a7 = qr.data[0]["批次"];
    var ret1 = isAnd(isEqual("常青店", a1), isEqual("100", a2), isAqualOptime(
            getOpTime(), a3, 2), isEqual("总经理", a4), isAqualOptime(getOpTime(),
            a5, 2), isEqual("总经理", a6), isEqual(batch + 1, a7));

    tapButton(window, CLEAR);
    var ret2 = true;
    for (var i = 0; i < 7; i++) {
        if (i == 0 || i == 1) {
            ret2 = ret2 && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret2 = ret2 && isEqual("", getTextFieldValue(window, i));
        }
    }

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2);
    return ret1 && ret2;
}
function test180002() {
    tapMenu("盘点管理", "按批次查");
    var keys = { "日期从" : "2015-01-01" };
    var fields = queryCheckBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("盘点管理", "按批次查");
    var keys = { "日期从" : "2015-01-01", "批次从" : Number(batch - 29),
        "批次到" : batch };
    var fields = queryCheckBatchFields(keys);
    query(fields);
    qr = getQR();

    var ret = true;
    var len = qr.data.length;
    for (var i = 0; i <= len - 1; i++) {
        var p = qr.data[i]["批次"];
        var p1 = Math.floor(batch / 10);
        if (isEqual(p1, p)) {
            ret = false;
        }
    }

    scrollNextPage();
    qr = getQR();
    var ret1 = true;
    var len = qr.data.length;
    for (var i = 0; i <= len - 1; i++) {
        var p = qr.data[i]["批次"];
        var p1 = Math.floor(batch / 10);
        if (isEqual(p1, p)) {
            ret1 = false;
        }
    }

    return ret && ret1;
}
function test180007() {
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 100 },
            { "货品" : "k200", "数量" : -112 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "按批次查");
    var keys = [ "门店" ];
    var fields1 = queryCheckBatchFields(keys);
    changeTFieldValue(fields1["门店"], "常青店");
    query(fields1);
    tapFirstText();

    tapButton(getScrollView(-1), 0);

    var josn = { "明细" : [ { "货品" : "k300", "数量" : 0 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "按批次查");
    query(fields1);
    tapFirstText();
    var qr = getQRDet();
    var ret = isAnd(isEqual(0, qr.data[0]["数量"]), isEqual("k300,铅笔裤",
            qr.data[0]["货品"]));
    delay();
    tapReturn();

    logDebug(" ret=" + ret);
    return ret;
}
function test180008() {
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 100 },
            { "货品" : "k200", "数量" : -28 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    tapFirstText();
    tapButton(getScrollView(-1), 0);
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "盘点单已处理，不允许更改");
    tapReturn();

    return ret;
}
function test180009() {
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 100 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "按批次查");
    var keys = [ "门店" ];
    var fields1 = queryCheckBatchFields(keys);
    changeTFieldValue(fields1["门店"], "常青店");
    query(fields1);
    var qr = getQR();
    var a = qr.data[0]["批次"];

    tapFirstText();
    tapButtonAndAlert("删 除", CANCEL);
    tapButtonAndAlert("删 除", OK);

    tapMenu("盘点管理", "按批次查");
    query(fields1);
    qr = getQR();
    var ret = true;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (qr.data[i]["批次"] == a) {
                ret = false;
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    logDebug(" ret=" + ret);
    return ret;
}
function test180010() {
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : -59 },
            { "货品" : "k200", "数量" : 0 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    tapFirstText();
    tapButtonAndAlert("删 除", OK);
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "操作失败，[盘点单已处理，不允许删除] ");
    tapReturn();

    return ret;
}
function test180013_1_180055() {
    tapMenu("盘点管理", "按明细查");
    var keys = { "日期从" : getDay(-3), "日期到" : getToday() };
    var fields = queryCheckParticularFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("类别");
    ret = ret && sortByTitle("品牌");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("盘点数量", IS_NUM);
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("操作日期", IS_DATE2);

    var qr = getQR();
    var sum1 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["盘点数量"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isEqual(sum1, qr.counts["盘点数量"]);

    return ret && ret1;
}
function test180013_2_180014() {
    tapMenu("盘点管理", "按明细查");
    var i;
    var ret1 = false;
    var f = new TField("款号", TF_AC, 2, "456", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "4562,Story")) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 150 },
            { "货品" : "4562", "数量" : 150 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("盘点管理", "按明细查");
    tapButton(window, CLEAR);
    query();
    qr = getQR();
    var batch1 = qr.data[0]["批次"];
    var batch2 = qr.data[1]["批次"];
    var ret = isAnd(isEqual(batch, batch1), isEqual(batch, batch2));

    tapMenu("盘点管理", "按明细查");
    var keys = { "日期从" : getDay(-3), "日期到" : getToday(), "款号" : "3035",
        "款号名称" : "jkk", "品牌" : "Adidas", "类别" : "登山服", "门店" : "常青店" };
    var fields = queryCheckParticularFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["款号"];
    var a1 = qr.data[0]["名称"];
    var a2 = qr.data[0]["类别"];
    var a3 = qr.data[0]["品牌"];
    var a4 = qr.data[0]["颜色"];
    var a5 = qr.data[0]["尺码"];
    var a7 = qr.data[0]["操作人"];
    var a8 = qr.data[0]["操作日期"];
    var ret2 = isAnd(isEqual("3035", a), isEqual("jkk", a1),
            isEqual("登山服", a2), isEqual("Adidas", a3), isEqual("均色", a4),
            isEqual("均码", a5), isEqual("总经理", a7), isIn(a8, getToday("")));

    tapButton(window, CLEAR);
    var ret3 = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)), isEqual("",
                    getTextFieldValue(window, 3)), isEqual("",
                    getTextFieldValue(window, 4)), isEqual("",
                    getTextFieldValue(window, 5)));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test180015() {
    tapMenu("货品管理", "货品查询");
    var keys = { "name" : "3035" };
    var fields = queryGoodsFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isAnd(isEqual("3035", qr.data[0]["款号"]), isEqual("jkk",
            qr.data[0]["名称"]), isEqual("登山服", qr.data[0]["类别"]), isEqual(
            "Adidas", qr.data[0]["品牌"]));

    tapMenu("盘点管理", "按明细查");
    var keys = { "日期从" : "2015-01-02", "日期到" : getToday(), "品牌" : "Adidas",
        "类别" : "登山服" };
    var fields = queryCheckParticularFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["款号"];
    var a1 = qr.data[0]["名称"];
    var a2 = qr.data[0]["类别"];
    var a3 = qr.data[0]["品牌"];
    ret = isAnd(ret, isEqual("登山服", a2), isEqual("Adidas", a3));

    var ret1 = false;
    if (a == "3035" || a == "k300") {
        ret1 = true;
    }

    logDebug(" ret=" + ret + ",  ret1=" + ret1);
    return ret && ret1;
}
function test180019() {
    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    tapMenu("盘点管理", "新增盘点+");
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "空单，无法保存");

    var josn = { "明细" : [ { "货品" : "3035", "数量" : 100 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "按批次查");
    var keys = { "门店" : "常青店" };
    var fields = queryCheckBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret1 = isAnd(isEqual(Number(batch + 1), Number(qr.data[0]["批次"])),
            isEqual(100, qr.data[0]["数量"]), isEqual("常青店", qr.data[0]["门店"]),
            isEqual("总经理", qr.data[0]["操作人"]), isAqualOptime(
                    qr.data[0]["盘点日期"], getOpTime()));

    tapFirstText();
    qr = getQRDet();
    var ret2 = isAnd(isEqual(100, getTextFieldValue(window, 0)), isEqual(
            "3035,jkk", qr.data[0]["货品"]), isEqual("均色", qr.data[0]["颜色"]),
            isEqual("均码", qr.data[0]["尺码"]), isEqual(100, qr.data[0]["数量"]));
    tapReturn();

    tapMenu("盘点管理", "按明细查");
    query();
    qr = getQR();
    var ret3 = isAnd(isEqual(Number(batch + 1), Number(qr.data[0]["批次"])),
            isEqual("3035", qr.data[0]["款号"]),
            isEqual("jkk", qr.data[0]["名称"]), isEqual("登山服", qr.data[0]["类别"]),
            isEqual("Adidas", qr.data[0]["品牌"]),
            isEqual("均色", qr.data[0]["颜色"]), isEqual("均码", qr.data[0]["尺码"]),
            isEqual(100, qr.data[0]["盘点数量"]),
            isEqual("总经理", qr.data[0]["操作人"]), isAqualOptime(
                    qr.data[0]["操作日期"], getOpTime(), 1));

    return ret && ret1 && ret2 && ret3;
}
function test180021() {
    tapMenu("盘点管理", "新增盘点+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : 10 },
            { "货品" : "k200", "数量" : -11 }, { "货品" : "k300", "数量" : 0 },
            { "货品" : "3035", "数量" : 12 }, { "货品" : "k200", "数量" : -11 },
            { "货品" : "k300", "数量" : 0 }, { "货品" : "3035", "数量" : 10 },
            { "货品" : "k200", "数量" : -11 }, { "货品" : "k300", "数量" : 0 },
            { "货品" : "3035", "数量" : 10 }, { "货品" : "k200", "数量" : -11 },
            { "货品" : "k300", "数量" : 0 }, { "货品" : "3035", "数量" : 10 },
            { "货品" : "k200", "数量" : -11 }, { "货品" : "8989", "数量" : 0 },
            { "货品" : "3035", "数量" : 20 } ] };
    // editCheckAddNoColorSize(json);
    editSalesBillNoColorSize(json);

    tapMenu("盘点管理", "按批次查");
    query();
    tapFirstText();
    tapButton(window, "整单复制");
    delay();

    tapMenu("盘点管理", "新增盘点+");
    tapButton(window, "整单粘贴");
    var exp0 = { "货品" : "3035,jkk", "颜色" : "均色", "尺码" : "均码", "数量" : 10 };
    var exp1 = { "货品" : "k200,范范", "颜色" : "均色", "尺码" : "均码", "数量" : -11 };
    var exp2 = { "货品" : "k300,铅笔裤", "颜色" : "均色", "尺码" : "均码", "数量" : 0 };
    var exp3 = { "货品" : "3035,jkk", "颜色" : "均色", "尺码" : "均码", "数量" : 12 };
    var exp4 = { "货品" : "k200,范范", "颜色" : "均色", "尺码" : "均码", "数量" : -11 };
    var exp5 = { "货品" : "k300,铅笔裤", "颜色" : "均色", "尺码" : "均码", "数量" : 0 };
    var exp6 = { "货品" : "3035,jkk", "颜色" : "均色", "尺码" : "均码", "数量" : 10 };
    var exp7 = { "货品" : "k200,范范", "颜色" : "均色", "尺码" : "均码", "数量" : -11 };
    var exp8 = { "货品" : "k300,铅笔裤", "颜色" : "均色", "尺码" : "均码", "数量" : 0 };
    var exp9 = { "货品" : "3035,jkk", "颜色" : "均色", "尺码" : "均码", "数量" : 10 };
    var exp10 = { "货品" : "k200,范范", "颜色" : "均色", "尺码" : "均码", "数量" : -11 };
    var exp11 = { "货品" : "k300,铅笔裤", "颜色" : "均色", "尺码" : "均码", "数量" : 0 };
    var exp12 = { "货品" : "3035,jkk", "颜色" : "均色", "尺码" : "均码", "数量" : 10 };
    var exp13 = { "货品" : "k200,范范", "颜色" : "均色", "尺码" : "均码", "数量" : -11 };
    var exp14 = { "货品" : "8989,我们", "颜色" : "均色", "尺码" : "均码", "数量" : 0 };
    var exp15 = { "货品" : "3035,jkk", "颜色" : "均色", "尺码" : "均码", "数量" : 20 };

    var qr = getQRDet();
    var ret = isAnd(isEqualObject(exp0, qr.data[0]), isEqualObject(exp1,
            qr.data[1]), isEqualObject(exp2, qr.data[2]), isEqualObject(exp3,
            qr.data[3]), isEqualObject(exp4, qr.data[4]), isEqualObject(exp5,
            qr.data[5]), isEqualObject(exp6, qr.data[6]), isEqualObject(exp7,
            qr.data[7]), isEqualObject(exp8, qr.data[8]), isEqualObject(exp9,
            qr.data[9]), isEqualObject(exp10, qr.data[10]), isEqualObject(
            exp11, qr.data[11]), isEqualObject(exp12, qr.data[12]),
            isEqualObject(exp13, qr.data[13]),
            isEqualObject(exp14, qr.data[14]),
            isEqualObject(exp15, qr.data[15]));
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    tapButton(window, QUERY);
    tapFirstText();
    var qr = getQRDet();
    var ret1 = isAnd(isEqualObject(exp0, qr.data[0]), isEqualObject(exp1,
            qr.data[1]), isEqualObject(exp2, qr.data[2]), isEqualObject(exp3,
            qr.data[3]), isEqualObject(exp4, qr.data[4]), isEqualObject(exp5,
            qr.data[5]), isEqualObject(exp6, qr.data[6]), isEqualObject(exp7,
            qr.data[7]), isEqualObject(exp8, qr.data[8]), isEqualObject(exp9,
            qr.data[9]), isEqualObject(exp10, qr.data[10]), isEqualObject(
            exp11, qr.data[11]), isEqualObject(exp12, qr.data[12]),
            isEqualObject(exp13, qr.data[13]),
            isEqualObject(exp14, qr.data[14]),
            isEqualObject(exp15, qr.data[15]));
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test180023() {
    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 100 } ], "onlytest" : "yes" };
    editCheckAddDetNoColorSize(josn);

    tapReturn();
    delay(3);
    var ret = true;
    var btn = window.buttons()["返 回"];
    if (btn.isVisible()) {
        ret = false;
    }

    tapMenu("盘点管理", "按批次查");
    query();
    qr = getQR();
    var batch1 = qr.data[0]["批次"];
    var ret1 = isEqual(batch1, batch);

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test180024() {
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : -10 },
            { "货品" : "k200", "数量" : 27 }, { "货品" : "k300", "数量" : 0 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "按批次查");
    query();

    tapFirstText();
    tapButton(getScrollView(-1), 2);
    var ret = isAnd(isEqual("", getTextFieldValue(getScrollView(-1), 8)),
            isEqual("", getTextFieldValue(getScrollView(-1), 11)));
    tapReturn();

    logDebug(" ret=" + ret);
    return ret;
}
function test180025() {
    // 先处理掉以前的盘点单
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理", OK);
    var bt = window.buttons()[RETURN];
    var cond = !isUIAElementNil(bt) || bt.isVisible();
    waitUntil(cond, 10);
    tapReturn();

    tapMenu("货品管理", "新增货品+");
    var s = "anewkhao" + randomWord(false, 4);
    var keys = { "款号" : s, "名称" : s };// , "进货价" : 100
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "rt", "明细" : [ { "货品" : s, "数量" : 20, "单价" : 100 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "款号库存");
    keys = { "款号" : "4562", "门店" : "常青店" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    var qKeys = [ "门店" ];
    var qFields = queryGoodsCodeStockFields(qKeys);
    changeTFieldValue(qFields["门店"], "中洲店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var b = qr.data[0]["库存"];

    keys = { "款号" : s, "门店" : "常青店" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var c = qr.data[0]["库存"];

    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var josn = { "明细" : [ { "货品" : "4562", "数量" : r },
            { "货品" : "k200", "数量" : 0 }, { "货品" : "8989", "数量" : -22 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    keys = { "盘点门店" : "常青店" };
    fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理");
    delay(5);
    tapReturn();

    tapMenu("盘点管理", "处理记录");
    keys = { "门店" : "常青店" };
    fields = checkProcessRecordFields(keys);
    query(fields);
    qr = getQR();
    var ret1 = isAnd(isEqual("全部盘点", qr.data[0]["备注"]), isEqual(getToday("yy"),
            qr.data[0]["盘点日期"]), isEqual("常青店", qr.data[0]["门店"]), isEqual(
            "总经理", qr.data[0]["处理人"]), isAqualOptime(getOpTime(),
            qr.data[0]["处理时间"], 2));

    tapFirstText();
    var qr1 = getQR2(getScrollView(-1, 0), "批次", "处理人");
    tapNaviLeftButton();

    tapMenu("盘点管理", "按批次查");
    query();
    qr = getQR();
    ret1 = isAnd(ret1, isEqualQRDataOfCheckProcessRecord(qr, qr1), isEqual(
            qr.data[0]["数量"], qr1.data[0]["数量"]));

    tapMenu("货品管理", "款号库存");
    keys = { "款号" : "4562", "门店" : "常青店" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = isAnd(isEqual(r, qr.data[0]["库存"]),
            !isEqual(a, qr.data[0]["库存"]));

    qFields = queryGoodsCodeStockFields(qKeys);
    changeTFieldValue(qFields["门店"], "中洲店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var ret3 = isEqual(b, qr.data[0]["库存"]);

    keys = { "款号" : s, "门店" : "常青店" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var ret4 = isAnd(isEqual(0, qr.data[0]["库存"]), !isEqual(0, c));

    keys = { "门店" : "常青店" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var m = qr.counts["库存"];
    var ret5 = false;
    var sum = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["库存"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    if (sum == m) {
        var ret5 = true;
    }
    // (r－22)为盘点总数
    ret5 = ret5 && isAqualNum(Number(r - 22), m);

    tapMenu("盘点管理", "盘点处理");
    keys = { "盘点门店" : "常青店" };
    fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理");
    delay(3);
    var ret6 = isIn(alertMsg, "本仓库(店铺)没有新录入的盘点流水，请核对");
    tapReturn();

    tapMenu("盘点管理", "处理记录");
    keys = { "是否撤销" : "否" };
    fields = checkProcessRecordFields(keys);
    query(fields);
    var qr = getQR();
    var total1 = qr.total;

    tapButton(getScrollView(), 0);
    tapButton(window, "盘点撤销");
    delay(2);

    tapMenu("盘点管理", "处理记录");
    tapButton(window, QUERY);
    qr = getQR();
    var total2 = qr.total;
    var ret7 = isEqual(1, sub(total1, total2));

    tapMenu("盘点管理", "处理记录");
    query();
    tapFirstText();
    var qr1 = getQR2(getScrollView(-1, 0), "批次", "处理人");
    tapNaviLeftButton();
    var ret8 = isEqual(0, qr1.data.length);

    logDebug(", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3 + ", ret4="
            + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6 + ", ret7=" + ret7
            + ", ret8=" + ret8);
    return ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7 && ret8;
}
function test180026() {
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    var bt = window.buttons()[RETURN];
    var cond = !isUIAElementNil(bt) || bt.isVisible();
    waitUntil(cond, 10);
    tapReturn();

    tapMenu("货品管理", "新增货品+");
    var s = "anewC" + randomWord(false, 4);
    var keys = { "款号" : s, "名称" : s };// , "进货价" : "100"
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt",
        "明细" : [ { "货品" : s, "数量" : "20", "单价" : "100" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "4562", "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    var qKeys = [ "门店" ];
    var qFields = queryGoodsCodeStockFields(qKeys);
    changeTFieldValue(qFields["门店"], "中洲店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var b = qr.data[0]["库存"];

    keys = { "款号" : s, "门店" : "常青店" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var c = qr.data[0]["库存"];

    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var josn = { "明细" : [ { "货品" : "4562", "数量" : r },
            { "货品" : "k200", "数量" : 0 }, { "货品" : "8989", "数量" : -22 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    var bt = window.buttons()[RETURN];
    var cond = !isUIAElementNil(bt) || bt.isVisible();
    waitUntil(cond, 10);
    tapReturn();

    tapMenu("盘点管理", "处理记录");
    keys = { "门店" : "常青店" };
    fields = checkProcessRecordFields(keys);
    query(fields);
    qr = getQR();
    var ret1 = isAnd(isEqual("部分盘点", qr.data[0]["备注"]), isEqual(getToday("yy"),
            qr.data[0]["盘点日期"]), isEqual("常青店", qr.data[0]["门店"]), isEqual(
            "总经理", qr.data[0]["处理人"]), isAqualOptime(getOpTime(),
            qr.data[0]["处理时间"], 2));

    tapFirstText();
    var qr1 = getQR2(getScrollView(-1, 0), "批次", "处理人");
    tapNaviLeftButton();

    tapMenu("盘点管理", "按批次查");
    query();
    qr = getQR();
    ret1 = isAnd(ret1, isEqualQRDataOfCheckProcessRecord(qr, qr1), isEqual(
            qr.data[0]["数量"], qr1.data[0]["数量"]));

    tapMenu("货品管理", "款号库存");
    keys = { "款号" : "4562", "门店" : "常青店" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = isAnd(isEqual(r, qr.data[0]["库存"]),
            !isEqual(a, qr.data[0]["库存"]));

    changeTFieldValue(qFields["门店"], "中洲店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var ret3 = isEqual(b, qr.data[0]["库存"]);

    keys = { "款号" : s, "门店" : "常青店" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var ret4 = isAnd(isEqual(c, qr.data[0]["库存"]),
            !isEqual(0, qr.data[0]["库存"]));

    delay();
    tapMenu("盘点管理", "盘点处理");
    keys = { "盘点门店" : "常青店" };
    fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理");
    delay(3);
    var ret5 = isIn(alertMsg, "本仓库(店铺)没有新录入的盘点流水，请核对");
    tapReturn();

    logDebug(" r=" + r + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3
            + ", ret4=" + ret4 + ", ret5=" + ret5);
    return ret1 && ret2 && ret3 && ret4 && ret5;
}
function test180027() {
    var r = "1" + getRandomInt(100);
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : r }, ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点日期" : getDay(2), "盘点门店" : [ "常青店", "in" ] };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理", OK);
    tapPrompt();
    var ret = isIn(alertMsg, "盘点处理日期最多选到第二天，请重新选择");

    keys = { "盘点日期" : getDay(1) };
    fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理", OK);
    tapPrompt();
    waitUntil(cond, 5);
    tapReturn();

    tapMenu("盘点管理", "处理记录");
    keys = { "日期到" : getDay(2) };
    fields = checkProcessRecordFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isAnd(isEqual(getDay(1, "yy"), qr.data[0]["盘点日期"]),
            isAqualOptime(getOpTime(), qr.data[0]["处理时间"], 4));

    var r1 = "1" + getRandomInt(100);
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "k300", "数量" : r1 }, ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    keys = { "盘点门店" : [ "常青店", "in" ] };
    fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapPrompt();
    if (isIn(alertMsg, "操作失败，[本仓库(店铺)存在更新的盘点记录，请核对盘点日期是否正确")) {
        var ret2 = true;
    }
    tapReturn();

    tapMenu("盘点管理", "处理记录");
    keys = { "日期到" : getDay(2) };
    fields = checkProcessRecordFields(keys);
    query(fields);
    qr = getQR();
    var batch = qr.data[0]["批次"];

    var Keys = [ "日期从", "是否撤销" ];
    var Fields = checkProcessRecordFields(Keys);
    changeTFieldValue(Fields["日期从"], getDay(1));
    changeTFieldValue(Fields["是否撤销"], "否");
    setTFieldsValue(window, Fields);
    tapButton(window, QUERY);
    qr = getQR();
    var t1 = qr.total;
    var bt = window.buttons()[QUERY];
    var cond = !isUIAElementNil(bt) || bt.isVisible();
    for (var i = 0; i < t1; i++) {
        tapButton(getScrollView(), 0);
        tapButton(window, "盘点撤销");
        waitUntil(cond, 5);
    }

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : [ "常青店", "in" ] };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理", OK);
    tapPrompt();
    waitUntil(cond, 5);
    tapReturn();

    tapMenu("盘点管理", "处理记录");
    query();
    qr = getQR();
    var ret3 = isAnd(isEqual(Number(batch) + 1, qr.data[0]["批次"]), isEqual(
            getToday("yy"), qr.data[0]["盘点日期"]), isAqualOptime(getOpTime(),
            qr.data[0]["处理时间"]));

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test180030() {
    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : "2015-01-01", "门店" : "仓库店" };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    var qr = getQR();
    var ret = !isEqual(0, qr.data.length);

    var qKeys = [ "门店" ];
    var qFields = checkProcessRecordFields(qKeys);
    changeTFieldValue(qFields["门店"], "中洲店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var ret1 = !isEqual(0, qr.data.length);

    var ret2 = Number(ret) + Number(ret1);

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret2;
}
function test180029_180031_180032() {
    tapMenu("盘点管理", "处理记录");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var josn = { "明细" : [ { "货品" : "3035", "数量" : r }, ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapReturn();

    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "门店" : "常青店",
        "批次从" : batch, "批次到" : add(batch, 1), "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    var qr = getQR();

    var a = qr.data[0]["盘点日期"];
    var a1 = qr.data[0]["门店"];
    // var a2 = qr.data[0]["操作人"];
    // var a3 = qr.data[0]["操作日期"];
    var a4 = qr.data[0]["备注"];
    var a5 = qr.data[0]["批次"];

    var ret = isAnd(isEqual(getToday("yy"), a), isEqual("常青店", a1), isEqual(
            "部分盘点", a4), isEqual(add(batch, 1), a5));

    tapButton(window, CLEAR);
    var ret1 = isAnd(isEqual(getToday(), getTextFieldValue(window, 0)),
            isEqual(getToday(), getTextFieldValue(window, 1)), isEqual("",
                    getTextFieldValue(window, 2)), isEqual("",
                    getTextFieldValue(window, 3)), isEqual("",
                    getTextFieldValue(window, 4)), isEqual("",
                    getTextFieldValue(window, 5)));

    logDebug("ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test180033() {
    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : "2015-01-01", "日期到" : getDay(1), "门店" : "常青店",
        "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    var qr = getQR();

    tapButton(getScrollView(), 0);
    tapButton(window, "盘点撤销");

    var batch = qr.data[0]["批次"];
    var shop = qr.data[0]["门店"];
    var opStaff = qr.data[0]["处理人"];
    var ckTime = qr.data[0]["盘点日期"];
    var opTime = qr.data[0]["处理时间"];
    var tip = qr.data[0]["备注"];

    tapMenu("盘点管理", "处理记录");
    keys = [ "批次从", "批次到", "是否撤销" ];
    fields = checkProcessRecordFields(keys);
    changeTFieldValue(fields["批次从"], batch);
    changeTFieldValue(fields["批次到"], batch);
    changeTFieldValue(fields["是否撤销"], "是");
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();

    var ret2 = isAnd(isEqual(batch, qr.data[0]["批次"]), isEqual(ckTime,
            qr.data[0]["盘点日期"]), isEqual(shop, qr.data[0]["门店"]), isEqual(tip,
            qr.data[0]["备注"]), isEqual(opStaff, qr.data[0]["处理人"]),
            isAqualOptime(opTime, qr.data[0]["处理时间"], 2));

    tapMenu("盘点管理", "盈亏表");
    var keys = { "门店" : [ "常青店", "in" ], "日期从" : "2015-01-01",
        "日期到" : getToday() };
    var fields = checkProfitAndLossFields(keys);
    query(fields);
    qr = getQR();
    var ret3 = sortByTitle("批次", IS_NUM);

    qr = getQR();
    ret3 = ret3 && !isEqual(batch, qr.data[0]["批次"]);

    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : "2015-01-01", "日期到" : getDay(1), "门店" : "常青店",
        "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);

    tapButton(window, "盘点撤销");

    tapButton(getScrollView(), 0);
    tapButton(getScrollView(), 1);
    tapButton(window, "盘点撤销");

    tapButton(getScrollView(), 0);
    tapButton(window, "盘点撤销");

    var cond = "isIn(alertMsg, '只能撤销最近一次盘点处理')";
    waitUntil(cond, 5);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var alertMsg3 = getArray1(alertMsgs, -3);

    var ret = isAnd(isIn(alertMsg3, "请点击[处理记录]并选择一条记录"), isIn(alertMsg2,
            "请点击[处理记录]并选择一条记录"), isIn(alertMsg1, "只能撤销最近一次盘点处理"));

    logDebug(" ret=" + ret + ", ret2=" + ret2 + ", ret3=" + ret3);
    return ret && ret2 && ret3;
}
function test180037() {
    // 为了数据的多样性和复杂性，跑这部分用例之前需要造一些数据
    // test180036();

    tapMenu("盘点管理", "盈亏表");
    var keys = { "日期从" : getDay(-3) };
    var fields = checkProfitAndLossFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("盘前");
    ret = ret && sortByTitle("盘后", IS_NUM);
    ret = ret && sortByTitle("盈亏", IS_NUM);
    ret = ret && sortByTitle("盈亏金额", IS_NUM);
    ret = ret && sortByTitle("操作日期", IS_DATE2);

    var qr = getQR();
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["盘前"]);
            sum2 += Number(qr.data[i]["盘后"]);
            sum3 += Number(qr.data[i]["盈亏"]);
            sum4 += Number(qr.data[i]["盈亏金额"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isAqualNum(sum1, qr.counts["盘前"]), isAqualNum(sum2,
            qr.counts["盘后"]), isAqualNum(sum3, qr.counts["盈亏"]), isAqualNum(
            sum4, qr.counts["盈亏金额"]));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test180037_180034_180035() {
    tapMenu("盘点管理", "盈亏表");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    var code = qr.data[0]["款号"];

    tapMenu("盘点管理", "盈亏表");
    var keys = { "门店" : "常青店", "款号" : code, "日期从" : getDay(-30),
        "日期到" : getToday() };
    if (ipadVer >= "7.21") {
        keys["批次从"] = batch;
        keys["批次到"] = batch;
    }
    var fields = checkProfitAndLossFields(keys);
    query(fields);
    qr = getQR();

    var a = qr.data[0]["款号"];
    var a1 = qr.data[0]["名称"];
    var a2 = qr.data[0]["颜色"];
    var a3 = qr.data[0]["尺码"];
    var a4 = qr.data[0]["操作日期"];

    var ret1 = isAnd(isEqual(code, a), isEqual("均色", a2), isIn("均码", a3), isIn(
            a4, getDay(0, "")));

    tapButton(window, CLEAR);
    var idx = 3;
    if (ipadVer >= "7.27") {
        idx = 0;
    }
    for (var i = 0; i < 5; i++) {
        if (i == Number(1 + Number(idx)) || i == Number(2 + Number(idx))) {
            var ret2 = isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret2 = isEqual("", getTextFieldValue(window, i));
        }
    }

    logDebug(", ret1=" + ret1 + ", ret2=" + ret2);
    return ret1 && ret2;
}
function test180042Prepare() {
    // 准备数据：采购入库、门店调出、销售开单都开一单数据，款号k300
    // var qo, o, ret = true;
    // qo = { "备注" : "调拨是否启用密码验证" };
    // o = { "新值" : "0", "数值" : [ "不启用", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "k300", "数量" : 20 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("门店调出", "批量调出+");
    delay();
    var f0 = new TField("调出人", TF_AC, 0, "000", -1, 0);
    var f1 = new TField("接收店", TF_SC, 1, "中洲店");
    var fields = [ f0, f1 ];
    setTFieldsValue(window, fields);

    var json = { "明细" : [ { "货品" : "k300", "数量" : 10 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : 10 } ] };
    editSalesBillNoColorSize(json);
}
function test180042() {
    var qo, o, ret = true;
    qo = { "备注" : "不允许修改盘点之前出入库流水" };
    o = { "新值" : "1", "数值" : [ "盘点后不允许修改", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "门店调拨" };
    o = { "新值" : "0", "数值" : [ "没有价格", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    test180042Prepare();// 盘点前新增单据
    // 部分处理
    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var josn = { "明细" : [ { "货品" : "k300", "数量" : r } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapReturn();

    tapMenu("采购入库", "按批次查");
    keys = { "门店" : "常青店", "作废挂单" : "正常" };
    fields = purchaseQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    var o = [ { "数量" : [ 50 ] } ];
    editChangeSalesBillOrderNum(o, "no");
    saveAndAlertOk();
    tapPrompt();
    var ret1 = isIn(alertMsg, "盘点之前的流水不允许修改");
    tapReturn();

    tapMenu("门店调出", "按批次查");
    query();
    tapFirstText();
    o = [ { "数量" : [ 50 ] } ];
    editChangeSalesBillOrderNum(o, "no");
    saveAndAlertOk();
    tapPrompt();
    var ret2 = isIn(alertMsg, "盘点之前的流水不允许修改");
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    o = [ { "数量" : [ 50 ] } ];
    editChangeSalesBillOrderNum(o, "no");
    saveAndAlertOk();
    tapPrompt();
    var ret3 = isIn(alertMsg, "盘点之前的流水不允许修改");
    tapReturn();

    logDebug(", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3);
    return ret1 && ret2 && ret3;
}
function test180042_1() {
    var qo, o, ret = true;
    qo = { "备注" : "不允许修改盘点之前出入库流水" };
    o = { "新值" : "1", "数值" : [ "盘点后不允许修改", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // 准备数据：采购入库、门店调出、销售开单都开一单数据，款号k300
    test180042Prepare();

    // 全盘处理
    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var josn = { "明细" : [ { "货品" : "k300", "数量" : r } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理", OK);
    var bt = window.buttons()[RETURN];
    var cond = !isUIAElementNil(bt) || bt.isVisible();
    waitUntil(cond, 10);
    tapReturn();

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();
    var o = [ { "数量" : [ 50 ] } ];
    editChangeSalesBillOrderNum(o, "no");
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "全盘之前出入库流水不允许修改");
    tapReturn();

    tapMenu("门店调出", "按批次查");
    query();
    tapFirstText();
    o = [ { "数量" : [ 50 ] } ];
    editChangeSalesBillOrderNum(o, "no");
    saveAndAlertOk();
    tapPrompt();
    var ret1 = isIn(alertMsg, "全盘之前出入库流水不允许修改");
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    o = [ { "数量" : [ 50 ] } ];
    editChangeSalesBillOrderNum(o, "no");
    saveAndAlertOk();
    tapPrompt();
    var ret2 = isIn(alertMsg, "全盘之前出入库流水不允许修改");
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test180042_2_170614() {
    var qo, o, ret = true;
    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();
    tapButtonAndAlert("作 废", OK);
    tapPrompt();
    var ret = isIn(alertMsg, "盘点之前的流水不允许修改");
    tapReturn();

    tapMenu("门店调出", "按批次查");
    query();
    tapFirstText();
    tapButtonAndAlert("作 废", OK);
    tapPrompt();
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isIn(alertMsg1, "盘点之前的流水不允许修改");
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    tapButtonAndAlert("作 废", OK);
    tapPrompt();
    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    var ret2 = isIn(alertMsg1, "盘点之前的流水不允许修改");

    var bt = app.mainWindow().buttons()["待作废"];
    if (!isUIAElementNil(bt) || bt.isVisible()) {
        tapButtonAndAlert("待作废", OK);
        tapPrompt();
    } else {
        runAndAlert("test170172Bad", OK);
        tapPrompt();
    }
    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    var ret3 = isIn(alertMsg1, "盘点之前的流水不允许修改");
    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test180042_3() {
    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();
    tapButtonAndAlert("作 废", OK);
    tapPrompt();
    var ret = isIn(alertMsg, "全盘之前出入库流水不允许修改");
    tapReturn();

    tapMenu("门店调出", "按批次查");
    query();
    tapFirstText();
    tapButtonAndAlert("作 废", OK);
    tapPrompt();
    var ret1 = isIn(alertMsg, "全盘之前出入库流水不允许修改");
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    tapButtonAndAlert("作 废", OK);
    tapPrompt();
    var ret2 = isIn(alertMsg, "全盘之前出入库流水不允许修改");
    tapReturn();

    return ret && ret1 && ret2;
}
function test180042_4() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "k300", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();
    var o = [ { "数量" : [ 50 ] } ];
    editChangeSalesBillOrderNum(o, "no");
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "操作成功") || isIn(alertMsg, "保存成功");
    tapReturn();

    tapMenu("门店调出", "批量调出+");
    var f0 = new TField("调出人", TF_AC, 0, "000", -1, 0);
    var f1 = new TField("接收店", TF_SC, 1, "中洲店");
    var fields = [ f0, f1 ];
    setTFieldsValue(window, fields);

    var json = { "明细" : [ { "货品" : "k300", "数量" : 10 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("门店调出", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    tapFirstText();
    o = [ { "数量" : [ 50 ] } ];
    editChangeSalesBillOrderNum(o);

    tapMenu("门店调出", "按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    var ret1 = isAnd(isEqual(batch, qr.data[0]["批次"]), isEqual("50",
            qr.data[0]["数量"]));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    o = [ { "数量" : [ 50 ] } ];
    editChangeSalesBillOrderNum(o, "no");
    saveAndAlertOk();
    tapPrompt();
    var ret2 = isIn(alertMsg, "保存成功");
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test180042_5() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "k300", "数量" : "20" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();
    var o = [ { "数量" : [ 50 ] } ];
    editChangeSalesBillOrderNum(o, "no");
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "操作成功") || isIn(alertMsg, "保存成功");
    tapReturn();

    tapMenu("门店调出", "批量调出+");
    var f0 = new TField("调出人", TF_AC, 0, "000", -1, 0);
    var f1 = new TField("接收店", TF_SC, 1, "中洲店");
    var fields = [ f0, f1 ];
    setTFieldsValue(window, fields);
    var json = { "明细" : [ { "货品" : "k300", "数量" : 10 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("门店调出", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    tapFirstText();
    o = [ { "数量" : [ 50 ] } ];
    editChangeSalesBillOrderNum(o);

    tapMenu("门店调出", "按批次查");
    tapButton(window, QUERY);
    qr = getQR();
    var ret1 = isAnd(isEqual(batch, qr.data[0]["批次"]), isEqual(50,
            qr.data[0]["数量"]));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    o = [ { "数量" : [ 50 ] } ];
    editChangeSalesBillOrderNum(o, "no");
    saveAndAlertOk();
    tapPrompt();
    var ret2 = isIn(alertMsg, "保存成功");
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test180042_6() {
    tapMenu("采购入库", "按批次查");
    var keys = { "作废状态" : "正常" }
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    tapFirstText();
    tapButtonAndAlert("作 废", OK);

    var bt = window.buttons()[QUERY];
    var cond = !isUIAElementNil(bt) || bt.isVisible();
    waitUntil(cond, 5);
    tapMenu("采购入库", "按批次查");
    keys = { "作废挂单" : "作废" }
    fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret = isEqual(batch, qr.data[0]["批次"]);

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : "k300", "门店" : "常青店" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    var b1 = Number(qr.data[0]["库存"]);

    tapMenu("门店调出", "按批次查");
    query();
    qr = getQR();
    var num = qr.data[0]["数量"];
    tapFirstText();
    tapButtonAndAlert("作 废", OK);

    waitUntil(cond, 5);
    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var b2 = Number(qr.data[0]["库存"]);
    var ret1 = isEqual(num, sub(b2, b1));

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();
    var batch2 = qr.data[0]["批次"];
    tapFirstText();
    tapButtonAndAlert("作 废", OK);

    waitUntil(cond, 5);
    tapMenu("销售开单", "按批次查");
    keys = { "作废挂单" : "作废" };
    fields = salesQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = isEqual(batch2, qr.data[0]["批次"]);

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test180042_7() {
    tapMenu("采购入库", "按批次查");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    tapFirstText();
    tapButtonAndAlert("作 废", OK);

    var bt = window.buttons()[QUERY];
    var cond = !isUIAElementNil(bt) || bt.isVisible();
    waitUntil(cond, 5);

    tapMenu("采购入库", "按批次查");
    var keys = { "作废挂单" : "作废" }
    var fields = purchaseQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret = isEqual(batch, qr.data[0]["批次"]);

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : "k300", "门店" : "常青店" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    var b = Number(qr.data[0]["库存"]);

    tapMenu("门店调出", "批量调出+");
    var f0 = new TField("货品", TF_AC, 0, "000", -1, 0);
    var f1 = new TField("数量", TF_SC, 1, "中洲店");
    var fields = [ f0, f1 ];
    setTFieldsValue(window, fields);

    var json = { "明细" : [ { "货品" : "k300", "数量" : 10 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var b1 = Number(qr.data[0]["库存"]);

    tapMenu("门店调出", "按批次查");
    query();
    qr = getQR();
    var num = qr.data[0]["数量"];
    tapFirstText();
    tapButtonAndAlert("作 废", OK);

    waitUntil(cond, 5);
    tapMenu("货品管理", "当前库存");
    keys = { "款号" : "k300", "门店" : "常青店" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    var b2 = Number(qr.data[0]["库存"]);
    var ret1 = isAnd(isEqual(b, b2), isEqual(num, sub(b, b1)));

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var batch2 = qr.data[0]["批次"];
    tapFirstText();
    tapButtonAndAlert("作 废", OK);

    waitUntil(cond, 5);
    tapMenu("销售开单", "按批次查");
    var keys = { "作废挂单" : "作废" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = isEqual(batch2, qr.data[0]["批次"]);

    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : "2015-01-01", "日期到" : getDay(1), "门店" : "常青店",
        "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    tapButton(getScrollView(), 0);
    tapButton(window, "盘点撤销");

    return ret && ret1 && ret2;
}
function test180048() {
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "k300", "数量" : 20 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "按批次查");
    query();
    tapFirstText();

    var josn = { "明细" : [ { "货品" : "k300", "数量" : 50 } ] };
    editCheckAddDetNoColorSize(josn);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("", qr.data[0]["处理时间"]), isEqual("",
            qr.data[0]["处理人"]));

    return ret;
}
function test180049_180036() {
    var qo, o, ret = true;
    qo = { "备注" : "盘点核算价格" };
    o = { "新值" : "0", "数值" : [ "盘点按进货价核算", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // 需先处理掉以前的盘点单
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapPrompt();
    tapReturn();

    // 需要为盈亏表造数据
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "4562", "数量" : 100 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理");
    delay(5);
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "k300", "数量" : "10" }, { "货品" : "k200", "数量" : "8" } ] };
    editSalesBillNoColorSize(json);
    delay();

    tapMenu("货品管理", "新增货品+");
    var r = "akhao" + randomWord(false, 8);
    var keys = { "款号" : r, "名称" : r };// , "进货价" : "200"
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("货品管理", "新增货品+");
    var r1 = "akhao" + randomWord(false, 8);
    var keys = { "款号" : r1, "名称" : r1 };
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = {
        "客户" : "Rt",
        "明细" : [ { "货品" : r, "数量" : "20", "单价" : "200" },
                { "货品" : r1, "数量" : 5, "单价" : "280" } ] };
    editSalesBillNoColorSize(json);
    delay();

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "4562", "数量" : 1 }, { "货品" : r, "数量" : 25 },
            { "货品" : r1, "数量" : 5 }, { "货品" : "k300", "数量" : -11 },
            { "货品" : "k200", "数量" : 0 }, { "货品" : "8989", "数量" : -5 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual(15, qr.data[0]["数量"]), isAqualOptime(getOpTime(),
            qr.data[0]["盘点日期"], 2));

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理");
    delay(5);
    tapReturn();

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "4562" };
    var fields = queryGoodsFields(keys);
    query(fields);
    qr = getQR();
    var inprice = qr.data[0]["进货价"];

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "k300" };
    var fields = queryGoodsFields(keys);
    query(fields);
    qr = getQR();
    var inprice3 = qr.data[0]["进货价"];

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "k200" };
    var fields = queryGoodsFields(keys);
    query(fields);
    qr = getQR();
    var inprice4 = qr.data[0]["进货价"];

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "8989" };
    var fields = queryGoodsFields(keys);
    query(fields);
    qr = getQR();
    var inprice5 = qr.data[0]["进货价"];

    tapMenu("盘点管理", "盈亏表");
    var keys = { "门店" : [ "常青店", "in" ] };
    var fields = checkProfitAndLossFields(keys);
    query(fields);
    qr = getQR();
    var ret1 = isAnd(isEqual(r1, qr.data[0]["款号"]),
            isEqual(5, qr.data[0]["盘后"]), isEqual(5, qr.data[0]["盘前"]),
            isEqual(Number(sub(qr.data[0]["盘后"], qr.data[0]["盘前"])),
                    qr.data[0]["盈亏"]), isEqual(qr.data[0]["盈亏金额"],
                    200 * Number(qr.data[0]["盈亏"])), isEqual(r,
                    qr.data[1]["款号"]), isEqual(25, qr.data[1]["盘后"]), isEqual(
                    20, qr.data[1]["盘前"]), isEqual(Number(sub(qr.data[1]["盘后"],
                    qr.data[1]["盘前"])), qr.data[1]["盈亏"]), isEqual(
                    qr.data[1]["盈亏金额"], 0), isEqual("k200", qr.data[2]["款号"]),
            isEqual(0, qr.data[2]["盘后"]), isEqual(-8, qr.data[2]["盘前"]),
            isEqual(Number(sub(qr.data[2]["盘后"], qr.data[2]["盘前"])),
                    qr.data[2]["盈亏"]), isEqual(qr.data[2]["盈亏金额"], inprice4
                    * Number(qr.data[2]["盈亏"])), isEqual("k300",
                    qr.data[3]["款号"]), isEqual(-11, qr.data[3]["盘后"]), isEqual(
                    -10, qr.data[3]["盘前"]), isEqual(Number(sub(
                    qr.data[3]["盘后"], qr.data[3]["盘前"])), qr.data[3]["盈亏"]),
            isEqual(qr.data[3]["盈亏金额"], inprice3 * Number(qr.data[3]["盈亏"])),
            isEqual("8989", qr.data[4]["款号"]), isEqual(-5, qr.data[4]["盘后"]),
            isEqual(0, qr.data[4]["盘前"]), isEqual(Number(sub(qr.data[4]["盘后"],
                    qr.data[4]["盘前"])), qr.data[4]["盈亏"]), isEqual(
                    qr.data[4]["盈亏金额"], inprice5 * Number(qr.data[4]["盈亏"])),
            isEqual("4562", qr.data[5]["款号"]), isEqual(1, qr.data[5]["盘后"]),
            isEqual(qr.data[5]["盈亏金额"], inprice * Number(qr.data[5]["盈亏"])),
            isEqual(100, qr.data[5]["盘前"]), isEqual(Number(sub(
                    qr.data[5]["盘后"], qr.data[5]["盘前"])), qr.data[5]["盈亏"]));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test180049_1() {
    var qo, o, ret = true;
    qo = { "备注" : "盘点核算价格" };
    o = { "新值" : "1", "数值" : [ "盘点按销价1核算", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // 需先处理掉以前的盘点单
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapPrompt();
    tapReturn();

    // 需要为盈亏表造数据
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "4562", "数量" : 100 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理");
    delay(5);
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "k300", "数量" : "10" }, { "货品" : "k200", "数量" : "8" } ] };
    editSalesBillNoColorSize(json);
    delay();

    tapMenu("货品管理", "新增货品+");
    var r = "aCode1" + randomWord(false, 8);
    var keys = { "款号" : r, "名称" : r };// , "进货价" : 200, "零批价" : 250
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("货品管理", "新增货品+");
    var r1 = "aCode2" + randomWord(false, 8);
    var keys = { "款号" : r1, "名称" : r1 };// , "进货价" : 200, "零批价" : 300
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = {
        "客户" : "Rt",
        "明细" : [ { "货品" : r, "数量" : "20", "单价" : "250" },
                { "货品" : r1, "数量" : 5, "单价" : "300" } ] };
    editSalesBillNoColorSize(json);
    delay();

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "4562", "数量" : 1 }, { "货品" : r, "数量" : 25 },
            { "货品" : r1, "数量" : 5 }, { "货品" : "k300", "数量" : -11 },
            { "货品" : "k200", "数量" : 0 }, { "货品" : "8989", "数量" : -5 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual(15, qr.data[0]["数量"]), isAqualOptime(getOpTime(),
            qr.data[0]["盘点日期"], 1));

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理");
    delay(5);
    tapReturn();

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "4562" };
    var fields = queryGoodsFields(keys);
    query(fields);
    qr = getQR();
    var inprice = qr.data[0]["零批价"];

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "k300" };
    var fields = queryGoodsFields(keys);
    query(fields);
    qr = getQR();
    var inprice3 = qr.data[0]["零批价"];

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "k200" };
    var fields = queryGoodsFields(keys);
    query(fields);
    qr = getQR();
    var inprice4 = qr.data[0]["零批价"];

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "8989" };
    var fields = queryGoodsFields(keys);
    query(fields);
    qr = getQR();
    var inprice5 = qr.data[0]["零批价"];

    tapMenu("盘点管理", "盈亏表");
    var keys = { "门店" : [ "常青店", "in" ] };
    var fields = checkProfitAndLossFields(keys);
    query(fields);
    qr = getQR();
    // 款号r对应的盈亏金额为250 * Number(qr.data[1]["盈亏"])
    var ret1 = isAnd(isEqual(r1, qr.data[0]["款号"]),
            isEqual(5, qr.data[0]["盘后"]), isEqual(5, qr.data[0]["盘前"]),
            isEqual(0, qr.data[0]["盈亏"]), isEqual(qr.data[0]["盈亏金额"],
                    300 * Number(qr.data[0]["盈亏"])), isEqual(r,
                    qr.data[1]["款号"]), isEqual(25, qr.data[1]["盘后"]), isEqual(
                    20, qr.data[1]["盘前"]), isEqual(5, qr.data[1]["盈亏"]),
            isEqual(qr.data[1]["盈亏金额"], 0), isEqual("k200", qr.data[2]["款号"]),
            isEqual(0, qr.data[2]["盘后"]), isEqual(-8, qr.data[2]["盘前"]),
            isEqual(8, qr.data[2]["盈亏"]), isEqual(qr.data[2]["盈亏金额"], inprice4
                    * Number(qr.data[2]["盈亏"])), isEqual("k300",
                    qr.data[3]["款号"]), isEqual(-11, qr.data[3]["盘后"]), isEqual(
                    -10, qr.data[3]["盘前"]), isEqual(-1, qr.data[3]["盈亏"]),
            isEqual(qr.data[3]["盈亏金额"], inprice3 * Number(qr.data[3]["盈亏"])),
            isEqual("8989", qr.data[4]["款号"]), isEqual(-5, qr.data[4]["盘后"]),
            isEqual(0, qr.data[4]["盘前"]), isEqual(-5, qr.data[4]["盈亏"]),
            isEqual(qr.data[4]["盈亏金额"], inprice5 * Number(qr.data[4]["盈亏"])),
            isEqual("4562", qr.data[5]["款号"]), isEqual(1, qr.data[5]["盘后"]),
            isEqual(qr.data[5]["盈亏金额"], inprice * Number(qr.data[5]["盈亏"])),
            isEqual(100, qr.data[5]["盘前"]), isEqual(-99, qr.data[5]["盈亏"]));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test180053() {
    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday() };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck();
    //
    ret = ret && sortByTitle("选择");
    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("盘点日期", IS_DATE2);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("备注");
    if (ipadVer >= "7.21") {
        ret = ret && sortByTitle("处理时间", IS_OPTIME);
        ret = ret && sortByTitle("处理人");
    } else {
        ret = ret && sortByTitle("操作日期", IS_OPTIME);
        ret = ret && sortByTitle("操作人");
    }
    query();

    return ret;
}
function test180054() {
    tapMenu("盘点管理", "库存表");
    var keys = { "门店" : "常青店", "款号" : "3035", "款号名称" : "jkk", "品牌" : "Adidas",
        "季节" : "春季", "上架从" : "2015-01-01", "到" : getToday(), "厂商" : "vell" };
    var fields = checkMaterialFields(keys);
    setTFieldsValue(window, fields);

    tapButton(window, CLEAR);
    var ret = isAnd(isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)), isEqual("", getTextFieldValue(
            window, 2)), isEqual("", getTextFieldValue(window, 3)), isEqual("",
            getTextFieldValue(window, 4)), isEqual("", getTextFieldValue(
            window, 5)), isEqual("", getTextFieldValue(window, 6)));

    return ret;
}
function test180057() {
    var qo, o, ret = true;
    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : "2015-01-01", "日期到" : getToday(), "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapFirstText();
    tapButtonAndAlert("待作废", OK);
    tapPrompt();
    var ret = (isIn(alertMsg, "作废成功"));

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "4562", "数量" : 50 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    var ret1 = (isIn(alertMsg, "操作失败，[盘点日期之前存在待作废的销售单，无法盘点]"));

    tapButtonAndAlert("全盘处理");
    tapPrompt();
    var ret2 = (isIn(alertMsg, "操作失败，[盘点日期之前存在待作废的销售单，无法盘点]"));
    delay();
    tapReturn();

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2);
    return ret1 && ret2;
}
function test180061() {
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按品牌+");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret = isIn(alertMsg, "门店不能为空");

    keys = { "门店" : "常青店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret1 = isIn(alertMsg, "盘点内容不能为空");
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按品牌+");
    testAddPlanCheck("按品牌");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret2 = isIn(alertMsg, "门店不能为空");

    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    // testAddPlanCheck(按品牌);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    if (ipadVer >= "7.21") {
        tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    } else {
        tapMenu("盘点管理", "盘点计划表");
    }
    query();
    var qr = getQR();
    var ret3 = isAnd(isEqual("常青店", qr.data[0]["门店"]), isEqual("按品牌",
            qr.data[0]["计划类型"]), isEqual("总经理", qr.data[0]["操作人"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作时间"], 3), isEqual("",
                    qr.data[0]["盘点类别"]), isEqual("Adidas", qr.data[0]["盘点品牌"]),
            isEqual("", qr.data[0]["盘点厂商"]));

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3);
    return ret1 && ret2 && ret3;
}
function test180062() {
    tapMenu("盘点管理", "盘点计划+", "按品牌+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddPlanCheck("按品牌");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret = isIn(alertMsg, "盘点计划正在执行中，请等盘点处理完毕后新增计划");
    tapReturn();

    if (ipadVer >= "7.21") {
        tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    } else {
        tapMenu("盘点管理", "盘点计划表");
    }
    query();
    tapFirstText();
    tapButtonAndAlert("删除计划", OK);
    tapPrompt();

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 50 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点计划+", "按品牌+");
    keys = { "门店" : "常青店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddPlanCheck("按品牌");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret1 = isIn(alertMsg, "请处理完毕后新增计划");
    delay();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    keys = { "盘点门店" : "常青店" };
    fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按品牌+");
    keys = { "门店" : "常青店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddPlanCheck("按品牌");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "新增盘点+");
    josn = { "明细" : [ { "货品" : "3035", "数量" : 50 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点计划+", "按品牌+");
    keys = { "门店" : "常青店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddPlanCheck("按品牌");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret2 = isIn(alertMsg, "请等盘点处理完毕后新增计划");

    keys = { "门店" : "中洲店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);

    // testAddPlanCheck(按品牌);
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    if (ipadVer >= "7.21") {
        tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    } else {
        tapMenu("盘点管理", "盘点计划表");
    }
    keys = { "门店" : "中洲店" };
    fields = checkPlanFields(keys);
    query(fields);
    var qr = getQR();
    var ret3 = isAnd(isEqual("中洲店", qr.data[0]["门店"]), isEqual("按品牌",
            qr.data[0]["计划类型"]), isEqual("总经理", qr.data[0]["操作人"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作时间"], 2), isEqual("",
                    qr.data[0]["盘点类别"]), isEqual("Adidas", qr.data[0]["盘点品牌"]),
            isEqual("", qr.data[0]["盘点厂商"]));
    checkPrepare1();

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3);
    return ret1 && ret2 && ret3;
}
function test180063() {
    tapMenu("盘点管理", "盘点计划+", "按品牌+");
    tapButton(getScrollView(), 1);
    cells = test180100GetCells();
    var len2 = cells.length;
    var arr2 = [];
    for (var l = 0; l < len2; l++) {
        a = cells[l].name();
        arr2.push(a);
    }
    window.popover().dismiss();
    tapReturn();

    tapMenu("货品管理", "基本设置", "所有品牌");
    var keys = { "是否停用" : "否" };
    var fields = goodsBrandFields(keys);
    query(fields);
    var qr = getQR();
    var totalPageNo = qr.totalPageNo;
    var ret = true;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            for (var t = 0; t < qr.data.length; t++) {
                ret = isAnd(ret, isIn(arr2, qr.data[t]["名称"]), isEqual(len2,
                        qr.total));
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    return ret;
}
function test180064() {
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按品牌+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    testAddPlanCheck("按品牌");
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var total1 = qr.total;

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "k200", "数量" : 10 },
            { "货品" : "3035", "数量" : 20 } ] };
    editCheckAddDetNoColorSize(josn);
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "不属于本次盘点计划");

    tapButton(getScrollView(-1), 0);
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    qr = getQR();
    var total2 = qr.total;
    var ret1 = isEqual(1, sub(total2, total1));

    tapFirstText();
    var josn = { "明细" : [ { "货品" : "k200", "数量" : 20 } ] };
    editCheckAddDetNoColorSize(josn);

    saveAndAlertOk();
    tapPrompt();
    var ret2 = isIn(alertMsg, "不属于本次盘点计划");
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test180065_180071_180077() {
    var menu = [ "按品牌+", "按类别+", "按厂商+" ];
    return test180065_180071_180077Field(menu);
}
function test180065_180071_180077Field(menu) {
    checkPrepare();
    checkPrepare1();
    checkPrepare2();
    for (var j = 0; j < menu.length; j++) {
        var menu1 = menu[j];
        tapMenu("盘点管理", "盘点计划+", menu1);
        var keys = { "门店" : "常青店" };
        var fields = checkPlanAddFields(keys);
        setTFieldsValue(getScrollView(), fields);
        delay();

        var menu2;
        switch (menu1) {
        case "按品牌+":
            menu2 = "按品牌";
            break;
        case "按类别+":
            menu2 = "按类别";
            break;
        case "按厂商+":
            menu2 = "按厂商";
            break;
        default:
            menu2 = "按品牌";
            break;
        }
        testAddPlanCheck(menu2);
        tapButtonAndAlert(SAVE, OK);
        tapPrompt();
        tapReturn();

        var code = "3035";
        if (menu2 == "按厂商") {
            code = "adidas";
        }
        var josn = { "明细" : [ { "货品" : code, "数量" : 50 } ] };
        tapMenu("盘点管理", "新增盘点+");
        editCheckAddNoColorSize(josn);

        tapMenu("盘点管理", "盘点处理");
        var keys = { "盘点门店" : "常青店" };
        var fields = checkProcessFields(keys);
        setTFieldsValue(getScrollView(), fields);
        delay();
        tapButtonAndAlert("部分处理");
        tapPrompt();
        var ret1 = isIn(alertMsg, "本仓库(店铺)还有调拨单没有接收入库，请全部接收之后再做盘点处理");
        tapReturn();

        checkPrepare1();
        checkPrepare2();
    }

    return ret1;
}
function test180066() {
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    tapReturn();

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : "3035", "门店" : "常青店" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var kc = add(qr.counts["库存"], qr.counts["在途数"]);

    tapMenu("盘点管理", "盘点计划+", "按品牌+");
    keys = { "门店" : "常青店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    testAddPlanCheck("按品牌");
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    var r = 1 + getRandomInt(100);
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : r } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    keys = { "盘点门店" : "常青店" };
    fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("全盘处理");
    tapPrompt();
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    var qr1 = getQR();
    var kc1 = add(qr1.counts["库存"], qr1.counts["在途数"]);

    tapMenu("盘点管理", "盘点计划+", "按品牌+");
    keys = { "门店" : "常青店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddPlanCheck("按品牌");
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : "2015-01-01", "日期到" : getDay(1), "门店" : "常青店",
        "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    var qr = getQR();
    var total1 = qr.total;
    tapButton(getScrollView(), 0);
    tapButton(window, "盘点撤销");
    tapPrompt();
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret = isIn(alertMsg1, "盘点计划正在执行中，盘点处理无法撤销")
            || isIn(alertMsg2, "盘点计划正在执行中，盘点处理无法撤销");
    delay();

    if (ipadVer >= "7.21") {
        tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    } else {
        tapMenu("盘点管理", "盘点计划表");
    }
    query();
    tapFirstText();
    tapButtonAndAlert("删除计划", OK);
    tapPrompt();

    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : "2015-01-01", "日期到" : getDay(1), "门店" : "常青店",
        "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);

    tapButton(getScrollView(), 0);
    tapButton(window, "盘点撤销");
    tapButton(window, QUERY);
    qr = getQR();
    var total2 = qr.total;
    var ret1 = isEqual(1, sub(total1, total2));

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    var qr1 = getQR();
    var kc2 = add(qr1.counts["库存"], qr1.counts["在途数"]);
    var ret2 = isAnd(!isEqual(r, kc), isEqual(r, kc1), isEqual(kc, kc2));

    if (ipadVer >= "7.21") {
        tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    } else {
        tapMenu("盘点管理", "盘点计划表");
    }
    query();
    tapFirstText();
    tapButtonAndAlert("删除计划", OK);
    tapPrompt();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test180067() {
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    var bt = window.buttons()[RETURN];
    var cond = !isUIAElementNil(bt) || bt.isVisible();
    waitUntil(cond, 10);
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按类别+");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret = isIn(alertMsg, "门店不能为空");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret1 = isIn(alertMsg, "盘点内容不能为空");
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按类别+");
    testAddPlanCheck("按类别");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret2 = isIn(alertMsg, "门店不能为空");

    setTFieldsValue(getScrollView(), fields);
    // testAddPlanCheck("按类别");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    if (ipadVer >= "7.21") {
        tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    } else {
        tapMenu("盘点管理", "盘点计划表");
    }
    query();
    var qr = getQR();
    var ret3 = isAnd(isEqual("常青店", qr.data[0]["门店"]), isEqual("按类别",
            qr.data[0]["计划类型"]), isEqual("总经理", qr.data[0]["操作人"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作时间"], 2), isEqual("登山服",
                    qr.data[0]["盘点类别"]), isEqual("", qr.data[0]["盘点品牌"]),
            isEqual("", qr.data[0]["盘点厂商"]), isEqual("", qr.data[0]["盘点季节"]));

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3);
    return ret1 && ret2 && ret3;
}
function test180068() {
    tapMenu("盘点管理", "盘点计划+", "按类别+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    testAddPlanCheck("按类别");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret = isIn(alertMsg, "盘点计划正在执行中，请等盘点处理完毕后新增计划");
    tapReturn();

    if (ipadVer >= "7.21") {
        tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    } else {
        tapMenu("盘点管理", "盘点计划表");
    }
    query();
    tapFirstText();
    tapButtonAndAlert("删除计划", OK);
    tapPrompt();

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 50 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点计划+", "按类别+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddPlanCheck("按类别");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret1 = isIn(alertMsg, "请处理完毕后新增计划");
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    keys = { "盘点门店" : "常青店" };
    fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按类别+");
    keys = { "门店" : "常青店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    testAddPlanCheck("按类别");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "新增盘点+");
    josn = { "明细" : [ { "货品" : "3035", "数量" : 50 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点计划+", "按类别+");
    setTFieldsValue(getScrollView(), fields);
    delay();
    testAddPlanCheck("按类别");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret2 = isIn(alertMsg, "请等盘点处理完毕后新增计划");

    keys = { "门店" : "中洲店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    // testAddPlanCheck("按类别");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    if (ipadVer >= "7.21") {
        tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    } else {
        tapMenu("盘点管理", "盘点计划表");
    }
    query();
    var qr = getQR();
    var ret3 = isAnd(isEqual("中洲店", qr.data[0]["门店"]), isEqual("按类别",
            qr.data[0]["计划类型"]), isEqual("总经理", qr.data[0]["操作人"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作时间"], 2), isEqual("登山服",
                    qr.data[0]["盘点类别"]), isEqual("", qr.data[0]["盘点品牌"]),
            isEqual("", qr.data[0]["盘点厂商"]), isEqual("", qr.data[0]["盘点季节"]));

    checkPrepare1();

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3);
    return ret1 && ret2 && ret3;
}
function test180069() {
    tapMenu("盘点管理", "盘点计划+", "按类别+");
    tapButton(getScrollView(), 1);
    var cells = test180100GetCells();
    var len1 = cells.length;
    var arr1 = [], a;
    for (var l = 0; l < len1; l++) {
        a = cells[l].name();
        arr1.push(a);
    }
    window.popover().dismiss();
    tapReturn();

    tapMenu("货品管理", "基本设置", "货品类别");
    var keys = { "是否停用" : "否" };
    var fields = goodsTypeFields(keys);
    query(fields);
    var qr = getQR();
    var totalPageNo = qr.totalPageNo;
    var ret = true;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            for (var t = 0; t < qr.data.length; t++) {
                ret = isAnd(ret, isIn(arr1, qr.data[t]["名称"]), isEqual(len1,
                        qr.total));
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    return ret;
}
function test180070() {
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    delay(2);
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按类别+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    testAddPlanCheck("按类别");
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var total1 = qr.total;

    tapMenu("盘点管理", "新增盘点+");
    var josn = {
        "明细" : [ { "货品" : "4562", "数量" : 10 }, { "货品" : "3035", "数量" : 20 } ],
        "onlytest" : "yes" };
    editCheckAddDetNoColorSize(josn);
    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "不属于本次盘点计划");
    tapButton(getScrollView(-1), 0);
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    qr = getQR();
    var total2 = qr.total;
    var ret1 = isEqual(1, sub(total2, total1));
    tapFirstText();
    qr = getQRDet();
    ret1 = isAnd(ret1, isEqual("3035,jkk", qr.data[0]["货品"]), isEqual("",
            qr.data[1]["货品"]));

    var josn = { "明细" : [ { "货品" : "4562", "数量" : 20 } ] };
    editCheckAddDetNoColorSize(josn);

    saveAndAlertOk();
    tapPrompt();
    var ret2 = isIn(alertMsg, "不属于本次盘点计划");
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    qr = getQR();
    var total3 = qr.total;
    var ret3 = isEqual(total2, total3);
    tapFirstText();
    qr = getQRDet();
    ret3 = isAnd(ret3, isEqual("3035,jkk", qr.data[0]["货品"]), isEqual("",
            qr.data[1]["货品"]));
    tapReturn();

    checkPrepare1();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test180073() {
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按厂商+");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret = isIn(alertMsg, "门店不能为空");

    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret1 = isIn(alertMsg, "盘点内容不能为空");
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按厂商+");
    testAddPlanCheck("按厂商");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret2 = isIn(alertMsg, "门店不能为空");

    setTFieldsValue(getScrollView(), fields);
    // testAddPlanCheck("按厂商");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    delay();
    if (ipadVer >= "7.21") {
        tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    } else {
        tapMenu("盘点管理", "盘点计划表");
    }
    query();
    var qr = getQR();
    var ret3 = isAnd(isEqual("常青店", qr.data[0]["门店"]), isEqual("按厂商",
            qr.data[0]["计划类型"]), isEqual("总经理", qr.data[0]["操作人"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作时间"], 2), isEqual("",
                    qr.data[0]["盘点类别"]), isEqual("", qr.data[0]["盘点品牌"]),
            isEqual("Adida公司", qr.data[0]["盘点厂商"]), isEqual("",
                    qr.data[0]["盘点季节"]));

    // checkPrepare1();

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3);
    return ret1 && ret2 && ret3;
}
function test180074_180082_180083() {
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按厂商+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddPlanCheck("按厂商");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret = isIn(alertMsg, "盘点计划正在执行中，请等盘点处理完毕后新增计划");
    tapReturn();

    if (ipadVer >= "7.21") {
        tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    } else {
        tapMenu("盘点管理", "盘点计划表");
    }
    query();
    tapFirstText();
    tapButtonAndAlert("删除计划", OK);
    tapPrompt();

    tapMenu("盘点管理", "新增盘点+");
    // 款号：Adidas-001对应厂商Adida公司
    var josn = { "明细" : [ { "货品" : "adidas", "数量" : 50 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点计划+", "按厂商+");
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddPlanCheck("按厂商");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret1 = isIn(alertMsg, "请处理完毕后新增计划");
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    keys = { "盘点门店" : "常青店" };
    fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按厂商+");
    keys = { "门店" : "常青店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    testAddPlanCheck("按厂商");
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "adidas", "数量" : 50 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点计划+", "按厂商+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    testAddPlanCheck("按厂商");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret2 = isIn(alertMsg, "请等盘点处理完毕后新增计划");

    keys = { "门店" : "中洲店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    // testAddPlanCheck("按厂商");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    if (ipadVer >= "7.21") {
        tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    } else {
        tapMenu("盘点管理", "盘点计划表");
    }
    var keys = { "门店" : "中洲店", "是否处理" : "否" };
    var fields = checkPlanFields(keys);
    query(fields);
    var qr = getQR();
    var ret3 = isAnd(isEqual("中洲店", qr.data[0]["门店"]), isEqual("按厂商",
            qr.data[0]["计划类型"]), isEqual("总经理", qr.data[0]["操作人"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作时间"], 2), isEqual("",
                    qr.data[0]["盘点类别"]), isEqual("", qr.data[0]["盘点品牌"]),
            isEqual("Adida公司", qr.data[0]["盘点厂商"]), isEqual("",
                    qr.data[0]["盘点季节"]));

    tapButton(window, CLEAR);
    var ret4 = isAnd(isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)));

    checkPrepare1();

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3 + ", ret4="
            + ret4);
    return ret1 && ret2 && ret3 && ret4;
}
function test180076() {
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按厂商+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddPlanCheck("按厂商");
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var total1 = qr.total;

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 30 },
            { "货品" : "adidas", "数量" : 100 } ] };
    editCheckAddDetNoColorSize(josn);

    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "不属于本次盘点计划");

    tapButton(getScrollView(-1), 0);
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    qr = getQR();
    var total2 = qr.total;
    var ret1 = isEqual(1, sub(total2, total1));

    tapFirstText();
    var josn = { "明细" : [ { "货品" : "4562", "数量" : 20 } ] };
    editCheckAddDetNoColorSize(josn);

    saveAndAlertOk();
    tapPrompt();
    var ret2 = isIn(alertMsg, "不属于本次盘点计划");
    tapReturn();

    checkPrepare1();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test180077() {
    if (ipadVer >= "7.21") {
        tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    } else {
        tapMenu("盘点管理", "盘点计划表");
    }
    var keys = { "是否处理" : "否" };
    var fields = checkPlanFields(keys);
    query(fields);
    var qr = getQR();
    var len = qr.data.length;
    if (len != 0) {
        tapFirstText();
        tapButtonAndAlert("删除计划", OK);
        tapPrompt();
    }

    tapMenu("盘点管理", "盘点计划+", "按厂商+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    testAddPlanCheck("按厂商");
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "adidas", "数量" : 40 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理");
    tapPrompt();
    var ret = isIn(alertMsg, "存在未执行的盘点计划");
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("全盘处理");
    delay(5);
    tapReturn();

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "adidas", "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isEqual(40, qr.data[0]["库存"]);

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test180078() {
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    tapReturn();

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : "3035", "门店" : "常青店", "厂商" : "vell" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var kcun = add(qr.counts["库存"], qr.counts["在途数"]);

    keys = { "款号" : "adidas", "门店" : "常青店", "厂商" : "Adida" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var kc = add(qr.counts["库存"], qr.counts["在途数"]);

    // 厂商库存检查，计划内的款号有库存，盘点计划外的一个有库存的款号库存检查-不变
    var key = [ "款号" ];
    var qFields = queryGoodsStockFields(key);
    changeTFieldValue(qFields["款号"], "adidas_bag");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var kcu = add(qr.counts["库存"], qr.counts["在途数"]);

    tapMenu("盘点管理", "盘点计划+", "按厂商+");
    keys = { "门店" : "常青店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    testAddPlanCheck("按厂商");
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    var r = 1 + getRandomInt(100);
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "adidas", "数量" : r } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    keys = { "盘点门店" : "常青店" };
    fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("全盘处理");
    tapPrompt();
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var kcu1 = add(qr.counts["库存"], qr.counts["在途数"]);

    // 厂商库存检查
    changeTFieldValue(qFields["款号"], "adidas");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var kc1 = add(qr.counts["库存"], qr.counts["在途数"]);

    keys = { "款号" : "3035", "门店" : "常青店", "厂商" : "vell" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    var kcun1 = add(qr.counts["库存"], qr.counts["在途数"]);

    tapMenu("盘点管理", "盘点计划+", "按厂商+");
    keys = { "门店" : "常青店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddPlanCheck("按厂商");
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : "2015-01-01", "日期到" : getDay(1), "门店" : "常青店",
        "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);

    var qr = getQR();
    var total1 = qr.total;
    tapButton(getScrollView(), 0);
    tapButton(window, "盘点撤销");
    tapPrompt();
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "盘点计划正在执行中，盘点处理无法撤销"));
    delay();

    if (ipadVer >= "7.21") {
        tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    } else {
        tapMenu("盘点管理", "盘点计划表");
    }
    query();
    tapFirstText();
    tapButtonAndAlert("删除计划", OK);
    tapPrompt();

    tapMenu("盘点管理", "处理记录");
    tapButton(window, QUERY);

    tapButton(getScrollView(), 0);
    tapButton(window, "盘点撤销");
    tapButton(window, QUERY);
    qr = getQR();
    var total2 = qr.total;
    var ret1 = isEqual(1, sub(total1, total2));

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : "adidas", "门店" : "常青店", "厂商" : "Adida" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    var qr1 = getQR();
    var kc2 = add(qr1.counts["库存"], qr1.counts["在途数"]);

    // 厂商库存检查
    key = [ "款号" ];
    qFields = queryGoodsStockFields(key);
    changeTFieldValue(qFields["款号"], "adidas_bag");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var kcu2 = add(qr.counts["库存"], qr.counts["在途数"]);

    keys = { "款号" : "3035", "门店" : "常青店", "厂商" : "vell" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    var kcun2 = add(qr.counts["库存"], qr.counts["在途数"]);
    var ret2 = isAnd(!isEqual(r, kc), isEqual(r, kc1), isEqual(kc, kc2),
            isEqual(kcu, kcu1), isEqual(kcu2, kcu1), isEqual(kcun1, kcun),
            isEqual(kcun2, kcun1));

    if (ipadVer >= "7.21") {
        tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    } else {
        tapMenu("盘点管理", "盘点计划表");
    }
    query();
    tapFirstText();
    tapButtonAndAlert("删除计划", OK);
    tapPrompt();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test180079() {
    checkPrepare1();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按品牌+");
    keys = { "门店" : "常青店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    testAddPlanCheck("按品牌");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按类别+");
    keys = { "门店" : "常青店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    testAddPlanCheck("按类别");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret = isIn(alertMsg, "请等盘点处理完毕后新增计划");
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按厂商+");
    keys = { "门店" : "常青店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    testAddPlanCheck("按厂商");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret1 = isIn(alertMsg, "请等盘点处理完毕后新增计划");
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按组合+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    testAddPlanGroupCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret2 = isIn(alertMsg, "请等盘点处理完毕后新增计划");
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test180081() {
    // 总经理门店下拉列表显示全部门店
    tapMenu("盘点管理", "盘点计划+", "按品牌+");

}
function test180082_180083() {
    tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    var keys = { "门店" : "常青店", "是否处理" : "是" };
    var fields = checkPlanFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = !isEqual(0, qr.total);

    tapButton(window, QUERY);
    tapFirstText();
    tapButtonAndAlert("删除计划", OK);
    tapPrompt();
    var ret2 = isIn(alertMsg, "不能删除已执行的盘点计划");

    tapButton(window, CLEAR);
    var ret3 = isAnd(isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)));

    query();
    var ret = goPageCheck();

    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("计划类型");
    ret = ret && sortByTitle("操作人");
    ret = ret && sortByTitle("操作时间", IS_OPTIME);
    ret = ret && sortByTitle("盘点类别");
    ret = ret && sortByTitle("盘点品牌");
    ret = ret && sortByTitle("盘点厂商");
    ret = ret && sortByTitle("盘点季节");

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test180084() {
    checkPrepare1();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按组合+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    testAddPlanGroupCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("常青店", qr.data[0]["门店"]), isEqual("按组合",
            qr.data[0]["计划类型"]), isEqual("总经理", qr.data[0]["操作人"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作时间"], 2), isEqual("登山服",
                    qr.data[0]["盘点类别"]), isEqual("Adidas", qr.data[0]["盘点品牌"]),
            isEqual("Adida公司", qr.data[0]["盘点厂商"]), isEqual("夏季",
                    qr.data[0]["盘点季节"]));

    var r = 1 + getRandomInt(100);
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : r } ], "onlytest" : "yes" };
    editCheckAddNoColorSize(josn);
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret1 = isIn2(alertMsg, "款号:3035,不属于本次盘点计划");

    tapButton(getScrollView(-1), 0);
    var josn = { "明细" : [ { "货品" : "adidas", "数量" : r } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理", OK);
    delay(5);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : "2015-01-01", "日期到" : getDay(1), "门店" : "常青店",
        "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = isAnd(isEqual(r, qr.data[0]["盘后数量"]), isEqual("总经理",
            qr.data[0]["处理人"]), isAqualOptime(getOpTime(), qr.data[0]["处理时间"],
            2));

    logDebug(" ret=" + ret + " ret1=" + ret1 + " ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test180085() {
    checkPrepare();
    checkPrepare1();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(3);
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按厂商+");
    keys = { "门店" : "常青店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddPlanCheck("按厂商");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "anewkhao" };
    var fields = queryGoodsFields(keys);
    query(fields);
    delay();
    var qr = getQR();
    qr = qr.data;
    if (qr.total <= 14) {
        for (var i = 0, len = 15 - Number(qr.total); i < len; i++) {
            tapMenu("货品管理", "新增货品+");
            var r = "anewkhao" + randomWord(false, 5);
            var keys = { "款号" : r, "名称" : r };
            addGoods(keys);
        }
        qr.push(r);
    }

    tapMenu("盘点管理", "新增盘点+");
    delay();
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 1 },
            { "货品" : qr[0]["款号"], "数量" : 3 }, { "货品" : qr[1]["款号"], "数量" : 4 },
            { "货品" : qr[2]["款号"], "数量" : 5 }, { "货品" : qr[3]["款号"], "数量" : 6 },
            { "货品" : qr[4]["款号"], "数量" : 7 }, { "货品" : qr[5]["款号"], "数量" : 8 },
            { "货品" : qr[6]["款号"], "数量" : 9 }, { "货品" : qr[7]["款号"], "数量" : 1 },
            { "货品" : qr[8]["款号"], "数量" : 3 }, { "货品" : qr[9]["款号"], "数量" : 2 },
            { "货品" : qr[10]["款号"], "数量" : 3 },
            { "货品" : qr[11]["款号"], "数量" : 4 },
            { "货品" : qr[12]["款号"], "数量" : 5 },
            { "货品" : qr[13]["款号"], "数量" : 6 },
            { "货品" : qr[14]["款号"], "数量" : 7 } ] };
    editCheckAddNoColorSize(josn);
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = isAnd(isIn(alertMsg1, "不属于本次盘点计划"), isIn(alertMsg1, "..."));
    ret = isAnd(ret, isEqual(Number(isIn(alertMsg1, qr[0]["款号"]))
            + Number(isIn(alertMsg1, qr[1]["款号"]))
            + Number(isIn(alertMsg1, qr[2]["款号"]))
            + Number(isIn(alertMsg1, qr[3]["款号"]))
            + Number(isIn(alertMsg1, qr[4]["款号"]))
            + Number(isIn(alertMsg1, qr[5]["款号"]))
            + Number(isIn(alertMsg1, qr[6]["款号"]))
            + Number(isIn(alertMsg1, qr[7]["款号"]))
            + Number(isIn(alertMsg1, qr[8]["款号"]))
            + Number(isIn(alertMsg1, qr[9]["款号"]))
            + Number(isIn(alertMsg1, qr[10]["款号"]))
            + Number(isIn(alertMsg1, qr[11]["款号"]))
            + Number(isIn(alertMsg1, qr[12]["款号"]))
            + Number(isIn(alertMsg1, qr[13]["款号"]))
            + Number(isIn(alertMsg1, qr[14]["款号"]))
            + Number(isIn(alertMsg1, "3035")), 15));

    checkPrepare1();

    logDebug(" ret=" + ret);
    return ret;
}
function test180086() {
    checkPrepare2();

    tapMenu("盘点管理", "getMenu_More", "未盘点款号");
    var keys = { "款号" : "k300", "款号名称" : "铅笔裤", "品牌" : "Adidas", "类别" : "登山服",
        "厂商" : "rt", "门店" : "常青店", "日期从" : getDay(1), "日期到" : getToday() };
    var fields = checkUnCheckCodeFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isAnd(isEqual("k300", qr.data[0]["款号"]), isEqual("铅笔裤",
            qr.data[0]["名称"]), isEqual("常青店", qr.data[0]["门店"]));

    tapButton(window, CLEAR);
    for (var i = 0; i < 9; i++) {
        if (i == 6 || i == 7) {
            var ret1 = isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            var ret2 = isEqual("", getTextFieldValue(window, i));
        }
    }

    tapMenu("盘点管理", "getMenu_More", "未盘点款号");
    var keys = { "日期从" : getDay(1), "日期到" : getToday() };
    var fields = checkUnCheckCodeFields(keys);
    query(fields);
    qr = getQR();
    var total = qr.total;
    var ventory = qr.counts["库存"];

    tapMenu("货品管理", "款号库存");
    keys = { "门店" : "常青店" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var total1 = qr.total;
    var ventory1 = qr.counts["库存"];
    var ret3 = isAnd(isEqual(ventory, ventory1), isEqual(total1, total));

    tapMenu("盘点管理", "按明细查");
    var keys = { "日期从" : getDay(-1), "日期到" : getToday() };
    var fields = queryCheckParticularFields(keys);
    query(fields);
    qr = getQR();
    var batch = qr.data[0]["批次"];
    var v, arr = [];
    arr.push(qr.data[0]["款号"]);
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal - 2; i++) {
            var code = qr.data[i]["款号"];
            v = qr.data[Number(i) + 1]["款号"];
            if (isAnd(!isEqual(code, v))) {
                arr.push(v);
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
        if (j == totalPageNo) {
            qr = getQR();
            var len = qr.data.length;
            var batch1 = qr.data[Number(len) - 1]["批次"];
        }
    }

    var len = arr.length;
    var v1, arr1 = [];
    arr1.push(arr[0]);
    for (var s = 0; s <= len - 1; s++) {
        var code1 = arr[s]["款号"];
        v1 = arr[Number(s) + 1]["款号"];
        if (isAnd(!isEqual(code, v1))) {
            arr1.push(v1);
        }
    }

    tapMenu("盘点管理", "getMenu_More", "未盘点款号");
    var keys = { "批次从" : batch1, "批次到" : batch, "日期从" : getDay(-1) };
    var fields = checkUnCheckCodeFields(keys);
    query(fields);
    var qr1 = getQR();
    var ret4 = isEqual(Number(total1) - arr1.length, qr1.total);

    var ret5 = true;
    var key = [ "款号" ];
    var qFields = checkUnCheckCodeFields(key);
    for (var k = 0; k < arr.length; k++) {
        changeTFieldValue(qFields["款号"], arr[k]);
        setTFieldsValue(window, qFields);
        tapButton(window, QUERY);
        qr1 = getQR();
        if (qr1.data.length != 0) {
            ret5 = false;
            break;
        }
    }

    logDebug(" a=" + a + " ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2
            + ", ret3=" + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test180087() {
    tapMenu("盘点管理", "getMenu_More", "未盘点款号");
    query();

    var ret = goPageCheck();
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("库存", IS_NUM);
    ret = ret && sortByTitle("在途数", IS_NUM);

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0;
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["库存"]);
            sum2 += Number(qr.data[i]["在途数"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["库存"], sum1), isAqualNum(
            qr.counts["在途数"], sum2));

    logDebug(", ret=" + ret + ", ret1=" + ret1 + ", sum1=" + sum1 + ", sum2="
            + sum2);
    return ret && ret1;
}
function test180088() {
    tapMenu("盘点管理", "getMenu_More", "未盘点款号");
    query();
    var qr = getQR();
    var total = qr.total;
    var ventory = qr.counts["库存"];

    tapMenu("货品管理", "款号库存");
    var keys = { "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var total1 = qr.total;
    var ventory1 = qr.counts["库存"];
    var ret = isAnd(isEqual(ventory, ventory1), isEqual(total1, total));

    keys = { "门店" : "常青店", "款号" : "4562" };
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var kc = add(qr.data[0]["库存"], qr.data[0]["在途数"]);

    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var josn = { "明细" : [ { "货品" : "4562", "数量" : r } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "getMenu_More", "未盘点款号");
    var keys = { "款号" : "4562" };
    var fields = checkUnCheckCodeFields(keys);
    query(fields);
    var qr1 = getQR();
    var ret1 = isEqual(0, qr1.data.length);

    query();
    qr1 = getQR();
    var total2 = qr1.total;
    var ventory2 = qr1.counts["库存"];
    var ret2 = isEqual(Number(kc) + Number(ventory2), ventory1);

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test180089() {
    tapMenu("盘点管理", "getMenu_More", "未盘点款号");
    query();
    var qr = getQR();
    var code = qr.data[0]["款号"];

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : code };
    var fields = queryGoodsFields(keys);
    query(fields);
    tapFirstText();
    tapButtonAndAlert(STOP, OK);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "getMenu_More", "未盘点款号");
    var keys = { "款号" : code };
    var fields = checkUnCheckCodeFields(keys);
    query(fields);
    qr = getQR();
    var ret = isAnd(isEqual(0, qr.data.length), isEqual(0, qr.total));
    tapButton(window, CLEAR);

    logDebug(", ret=" + ret);
    return ret;
}
function test180091_1() {
    var qo, o, ret = true;
    qo = { "备注" : "盘点时是否允许输入负数" };
    o = { "新值" : "0", "数值" : [ "默认不开启" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var josn = { "明细" : [ { "货品" : "8989", "数量" : -2 },
            { "货品" : "k200", "数量" : 0 }, { "货品" : "4562", "数量" : r } ] };
    editCheckAddNoColorSize(josn);
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret1 = isAnd(isIn(alertMsg1, "盘点不允许有负数[-2]"));

    qo = { "备注" : "盘点时是否允许输入负数" };
    o = { "新值" : "1", "数值" : [ "开启" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret && ret1;
}
function test180090_180091() {
    var qo, o, ret = true;
    qo = { "备注" : "盘点时是否允许输入负数" };
    o = { "新值" : "1", "数值" : [ "开启" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "1", "数值" : [ "必须先入库再出库", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("盘点管理", "新增盘点+");
    var r = "1" + getRandomInt(100);
    var josn = { "明细" : [ { "货品" : "8989", "数量" : -2 },
            { "货品" : "k200", "数量" : 0 }, { "货品" : "4562", "数量" : r } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapPrompt();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isIn(alertMsg1, "库存不足");

    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "0", "数值" : [ "允许负库存", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("盘点管理", "新增盘点+");
    josn = { "明细" : [ { "货品" : "4562", "数量" : r }, { "货品" : "k200", "数量" : 0 },
            { "货品" : "8989", "数量" : -5 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var ret2 = isEqual("-5", qr.data[0]["数量"]);

    tapMenu("盘点管理", "盘点处理");
    keys = { "盘点门店" : "常青店" };
    fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapPrompt();
    tapReturn();

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : "8989", "门店" : "常青店" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    qr = getQR();
    var ret3 = isEqual("-5", qr.data[0]["库存"]);

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test180092() {
    // 先处理掉以前的盘点单
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "新增盘点+");
    var josn = {
        "明细" : [ { "货品" : "8989", "数量" : -2 }, { "货品" : "k200", "数量" : 0 } ],
        "不返回" : "yes" };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "k300", "数量" : 10 } ], "不返回" : "yes" };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 30 } ], "不返回" : "yes" };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "4562", "数量" : 35 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("部分处理", OK);
    delay(2);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "处理记录");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    var opTime = qr.data[0]["处理时间"];
    var num = qr.data[0]["数量"];
    var shop = qr.data[0]["门店"];
    var opStaff = qr.data[0]["处理人"];

    tapFirstText();
    var qr1 = getQR2(getScrollView(-1, 0), "批次", "处理人");

    var ret = goPageCheckQR2(getScrollView(-1, 0), "批次", "处理人");
    ret = ret && test180092Field("批次", IS_NUM);
    ret = ret && test180092Field("门店");
    ret = ret && test180092Field("数量", IS_NUM);
    ret = ret && test180092Field("操作人");
    ret = ret && test180092Field("操作时间", IS_OPTIME);
    ret = ret && test180092Field("处理人");
    tapNaviLeftButton();

    tapMenu("盘点管理", "按批次查");
    query();
    qr = getQR();// 处理记录详细界面总数没有检查
    var ret1 = isAnd(isEqualQRDataOfCheckProcessRecord(qr, qr1), isEqual(4,
            qr1.data.length), !isEqual(batch, qr1.data[0]["批次"]), isEqual(shop,
            qr1.data[0]["门店"]), isEqual(opStaff, qr1.data[0]["处理人"]));

    logDebug(", ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test180093() {
    checkPrepare();
    checkPrepare1();

    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按组合+");
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret = isIn(alertMsg, "门店不能为空");

    keys = { "门店" : "常青店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret1 = isIn(alertMsg, "所有盘点计划不能全部为空");
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按组合+");
    testAddPlanGroupCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret2 = isIn(alertMsg, "门店不能为空");

    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    // testAddPlanCheck(按组合);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    if (ipadVer >= "7.21") {
        tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    } else {
        tapMenu("盘点管理", "盘点计划表");
    }
    query();
    var qr = getQR();
    var ret3 = isAnd(isEqual("常青店", qr.data[0]["门店"]), isEqual("按组合",
            qr.data[0]["计划类型"]), isEqual("总经理", qr.data[0]["操作人"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作时间"], 3), isEqual("登山服",
                    qr.data[0]["盘点类别"]), isEqual("Adidas", qr.data[0]["盘点品牌"]),
            isEqual("Adida公司", qr.data[0]["盘点厂商"]), isEqual("夏季",
                    qr.data[0]["盘点季节"]));

    logDebug(" ret1=" + ret1 + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test180094() {
    tapMenu("盘点管理", "盘点计划+", "按组合+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddPlanGroupCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret = isIn(alertMsg, "盘点计划正在执行中，请等盘点处理完毕后新增计划");
    tapReturn();

    if (ipadVer >= "7.21") {
        tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    } else {
        tapMenu("盘点管理", "盘点计划表");
    }
    query();
    tapFirstText();
    tapButtonAndAlert("删除计划", OK);
    tapPrompt();

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "adidas", "数量" : 50 },
            { "货品" : "adidas", "数量" : 50 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点计划+", "按组合+");
    keys = { "门店" : "常青店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddPlanGroupCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret1 = isIn(alertMsg, "请处理完毕后新增计划");
    delay();
    tapReturn();

    tapMenu("盘点管理", "盘点处理");
    keys = { "盘点门店" : "常青店" };
    fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按组合+");
    keys = { "门店" : "常青店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddPlanGroupCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "新增盘点+");
    josn = { "明细" : [ { "货品" : "adidas", "数量" : 50 } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点计划+", "按组合+");
    keys = { "门店" : "常青店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddPlanGroupCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    var ret2 = isIn(alertMsg, "请等盘点处理完毕后新增计划");

    keys = { "门店" : "中洲店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);

    // testAddPlanCheck(按品牌);
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    if (ipadVer >= "7.21") {
        tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    } else {
        tapMenu("盘点管理", "盘点计划表");
    }
    keys = { "门店" : "中洲店" };
    fields = checkPlanFields(keys);
    query(fields);
    var qr = getQR();
    var ret3 = isAnd(isEqual("中洲店", qr.data[0]["门店"]), isEqual("按组合",
            qr.data[0]["计划类型"]), isEqual("总经理", qr.data[0]["操作人"]),
            isAqualOptime(getOpTime(), qr.data[0]["操作时间"], 2), isEqual("登山服",
                    qr.data[0]["盘点类别"]), isEqual("Adidas", qr.data[0]["盘点品牌"]),
            isEqual("Adida公司", qr.data[0]["盘点厂商"]), isEqual("夏季",
                    qr.data[0]["盘点季节"]));
    checkPrepare1();

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3);
    return ret1 && ret2 && ret3;
}
function test180095() {
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("全盘处理");
    delay(5);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "盘点计划+", "按组合+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddPlanGroupCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    var qr = getQR();
    var total1 = qr.total;

    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "3035", "数量" : 10 },
            { "货品" : "adidas", "数量" : 20 } ] };
    editCheckAddDetNoColorSize(josn);

    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "不属于本次盘点计划");

    tapButton(getScrollView(-1), 0);
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    qr = getQR();
    var total2 = qr.total;
    var ret1 = isEqual(1, sub(total2, total1));

    tapFirstText();
    josn = { "明细" : [ { "货品" : "3035", "数量" : 25 } ], "onlytest" : "yes" };
    editCheckAddDetNoColorSize(josn);

    saveAndAlertOk();
    tapPrompt();
    var ret2 = isIn(alertMsg, "不属于本次盘点计划");
    tapReturn();

    checkPrepare1();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test180096() {
    tapMenu("盘点管理", "盘点计划+", "按组合+");
    var keys = { "门店" : "常青店" };
    var fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    testAddPlanGroupCheck();
    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    var r = getRandomInt(100);
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "adidas", "数量" : r } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    var ret = isIn(alertMsg, "存在未执行的盘点计划");

    tapButtonAndAlert("全盘处理");
    delay(5);
    tapReturn();

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : "adidas", "门店" : "常青店" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isEqual(r, qr.data[0]["库存"]);

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test180097() {
    tapMenu("盘点管理", "盘点处理");
    var keys = { "盘点门店" : "常青店" };
    var fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("部分处理");
    tapPrompt();
    tapReturn();

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : "adidas" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var kc = add(qr.counts["库存"], qr.counts["在途数"]);

    tapMenu("盘点管理", "盘点计划+", "按组合+");
    keys = { "门店" : "常青店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    testAddPlanGroupCheck();
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    var r = 1 + getTimestamp(2);
    tapMenu("盘点管理", "新增盘点+");
    var josn = { "明细" : [ { "货品" : "adidas", "数量" : r } ] };
    editCheckAddNoColorSize(josn);

    tapMenu("盘点管理", "盘点处理");
    keys = { "盘点门店" : "常青店" };
    fields = checkProcessFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();
    tapButtonAndAlert("全盘处理");
    tapPrompt();
    tapReturn();

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : "adidas", "门店" : "常青店" };
    fields = queryGoodsStockFields(keys);
    query(fields);
    var qr1 = getQR();
    var kc1 = add(qr1.counts["库存"], qr1.counts["在途数"]);

    tapMenu("盘点管理", "盘点计划+", "按组合+");
    keys = { "门店" : "常青店" };
    fields = checkPlanAddFields(keys);
    setTFieldsValue(getScrollView(), fields);
    delay();

    testAddPlanGroupCheck();
    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    tapMenu("盘点管理", "处理记录");
    var keys = { "日期从" : "2015-01-01", "日期到" : getDay(1), "门店" : "常青店",
        "是否撤销" : "否" };
    var fields = checkProcessRecordFields(keys);
    query(fields);

    var qr = getQR();
    var total1 = qr.total;
    tapButton(getScrollView(), 0);
    tapButton(window, "盘点撤销");
    tapPrompt();
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "盘点计划正在执行中，盘点处理无法撤销"));
    delay();

    if (ipadVer >= "7.21") {
        tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    } else {
        tapMenu("盘点管理", "盘点计划表");
    }
    query();
    tapFirstText();
    tapButtonAndAlert("删除计划", OK);
    tapPrompt();

    tapMenu("盘点管理", "处理记录");
    tapButton(window, QUERY);

    tapButton(getScrollView(), 0);
    tapButton(window, "盘点撤销");
    tapButton(window, QUERY);
    qr = getQR();
    var total2 = qr.total;
    var ret1 = isEqual(1, sub(total1, total2));

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    var qr1 = getQR();
    var kc2 = add(qr1.counts["库存"], qr1.counts["在途数"]);
    var ret2 = isAnd(!isEqual(r, kc), isEqual(r, kc1), isEqual(kc, kc2));

    if (ipadVer >= "7.21") {
        tapMenu("盘点管理", "getMenu_More", "盘点计划表");
    } else {
        tapMenu("盘点管理", "盘点计划表");
    }
    query();
    tapFirstText();
    tapButtonAndAlert("删除计划", OK);
    tapPrompt();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test180098_1() {
    return test180098Field(true);
}
function test180098_2() {
    return test180098Field(false);
}
function test180098Field(rights) {
    var ret = true;
    tapMenu("盘点管理", "按批次查");
    var keys = { "日期从" : getDay(-5), "门店" : "仓库店" };
    var fields = queryCheckBatchFields(keys);
    query(fields);
    var qr = getQR();
    if (rights) {
        ret = isAnd(ret, !isEqual(0, qr.data.total), isEqual("仓库店",
                qr.data[0]["门店"]));
    } else {
        ret = isAnd(ret, isEqual(0, qr.data.total));
    }

    return ret;
}
function test180099() {
    tapMenu("盘点管理", "按批次查");
    query();
    tapFirstText();
    var ret = false;
    var titles = getSalesBillDetTfObject();
    var title_num = "货品";
    var f = new TField("货品", TF_AC, titles[title_num], "456", -1);
    var cells = getTableViewCells(getScrollView(-1), f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "4562,Story,713元")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    tapReturn();

    return ret;
}
function test180100GetCells() {
    var view1 = getPop(window, -1);
    var table1 = getTableViews(view1)[0];
    var cells = table1.cells();
    return cells;
}
function test180100() {
    tapMenu("盘点管理", "盘点计划+", "按组合+");
    tapButton(getScrollView(), 1);
    var cells = test180100GetCells();
    var len1 = cells.length;
    var arr1 = [], a;
    for (var l = 0; l < len1; l++) {
        a = cells[l].name();
        arr1.push(a);
    }
    window.popover().dismiss();

    tapButton(getScrollView(), 2);
    cells = test180100GetCells();
    var len2 = cells.length;
    var arr2 = [];
    for (var l = 0; l < len2; l++) {
        a = cells[l].name();
        arr2.push(a);
    }
    window.popover().dismiss();

    tapButton(getScrollView(), 3);
    cells = test180100GetCells();
    var len3 = cells.length;
    var arr3 = [];
    for (var l = 0; l < len3; l++) {
        a = cells[l].name();
        arr3.push(a);
    }
    window.popover().dismiss()

    tapButton(getScrollView(), 4);
    cells = test180100GetCells();
    var len4 = cells.length;
    var arr4 = [];
    for (var l = 0; l < len4; l++) {
        a = cells[l].name();
        arr4.push(a);
    }
    window.popover().dismiss();
    tapReturn();

    tapMenu("货品管理", "基本设置", "货品类别");
    var keys = { "是否停用" : "否" };
    var fields = goodsTypeFields(keys);
    query(fields);
    var qr = getQR();
    var totalPageNo = qr.totalPageNo;
    var ret = true;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            for (var t = 0; t < qr.data.length; t++) {
                ret = isAnd(ret, isIn(arr1, qr.data[t]["名称"]), isEqual(len1,
                        qr.total));
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    tapMenu("货品管理", "基本设置", "所有品牌");
    var keys = { "是否停用" : "否" };
    var fields = goodsBrandFields(keys);
    query(fields);
    var qr = getQR();
    var totalPageNo = qr.totalPageNo;
    var ret = true;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            for (var t = 0; t < qr.data.length; t++) {
                ret = isAnd(ret, isIn(arr2, qr.data[t]["名称"]), isEqual(len2,
                        qr.total));
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    tapMenu("往来管理", "厂商查询");
    var keys = { "是否停用" : "否" };
    var fields = queryCustomerProviderFields(keys);
    query(fields);
    qr = getQR();
    var totalPageNo = qr.totalPageNo;
    var ret = true;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            for (var t = 0; t < qr.data.length; t++) {
                ret = isAnd(ret, isIn(arr3, qr.data[t]["名称"]), isEqual(len3,
                        qr.total));
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    tapMenu("往来管理", "厂商查询");
    var keys = { "是否停用" : "否" };
    var fields = queryCustomerProviderFields(keys);
    query(fields);
    qr = getQR();
    var totalPageNo = qr.totalPageNo;
    var ret = true;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            for (var t = 0; t < qr.data.length; t++) {
                ret = isAnd(ret, isIn(arr3, qr.data[t]["名称"]), isEqual(len3,
                        qr.total));
            }
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    return ret;
}
function test180101() {

}