// Zhangy <15068165765 at 139.com>  11.5

function testSalesNoColorSizeElse001() {
    // if(setIgnorecolorsize_1Params()){
    run("【销售开单－按批次查】翻页_排序_汇总", "test170001_1");
    run("【销售开单－按批次查】条件查询，清除按钮,下拉框", "test170001_2");
    run("【销售开单－按明细查】翻页_排序_汇总", "test170028_1");
    run("【销售开单－按明细查】条件查询，清除按钮,下拉框", "test170028_2_1");
    run("【销售开单－按明细查】条件查询，清除按钮,下拉框", "test170028_2_2");
    run("【销售开单－按明细查】条件查询，清除按钮,下拉框", "test170028_2_3");
    run("【销售开单－按明细查】条件查询，清除按钮,下拉框", "test170028_2_4");
    run("【销售开单】按挂单--正常功能检查", "test170305_1");
    run("【销售开单】按挂单--正常功能检查", "test170305_2");
    run("【销售开单－销售汇总-按金额汇总】按金额汇总", "test170306");
    run("【销售开单－销售汇总-按金额汇总】清除功能", "test170307");
    run("【销售开单－销售汇总-按金额汇总】翻页_排序_汇总", "test170307_1");
    run("【销售开单－销售汇总-按款号汇总】按款号汇总", "test170308");
    run("【销售开单－销售汇总-按款号汇总】清除功能", "test170309");
    run("【销售开单－销售汇总-按款号汇总】排序/翻页/快速翻页", "test170310_170311_170312");
    run("【销售开单－销售汇总-按退货汇总】按退货汇总", "test170313");
    run("【销售开单－销售汇总-按退货汇总】清除功能", "test170314");
    run("【销售开单－销售汇总-按退货汇总】排序/翻页/快速翻页", "test170315_170316_170317");
    run("【销售开单－销售汇总-按退货汇总】点击查询记录后页面检查", "test170318");// (数据准确性验证)
    run("【销售开单－销售汇总-按店员汇总】按店员汇总", "test170319");
    run("【销售开单－销售汇总-按店员汇总】清除功能", "test170320");
    run("【销售开单－销售汇总-按店员汇总】排序/翻页/快速翻页", "test170321_170322_170323");
    run("【销售开单－销售汇总-按客户销售】按客户销售", "test170325");
    run("【销售开单－销售汇总-按客户销售】清除/下拉框功能", "test170326");
    run("【销售开单－销售汇总-按客户销售】排序/翻页/快速翻页", "test170327_170328_170329_170330");

    run("【销售开单－销售汇总-按客户未结】按客户未结", "test170332");
    run("【销售开单－销售汇总-按客户未结】清除功能", "test170333");
    run("【销售开单－销售汇总-按客户未结】排序/翻页/快速翻页", "test170334_70335_170336");

    run("【销售开单－销售汇总-按客户上货】按客户上货", "test170338");
    run("【销售开单－销售汇总-按客户上货】品牌查询", "test170339");
    run("【销售开单－销售汇总-按客户上货】清除功能", "test170340");
    run("【销售开单－销售汇总-按客户上货】排序/翻页/快速翻页", "test170341_70342_170343_170346");

    run("【销售开单－销售汇总-客户对帐单】清除功能", "test170351");
    run("【销售开单－销售汇总】按类别汇总", "test170356");
    run("【销售开单－销售汇总-按类别汇总】清除功能/查询条件／下拉列表", "test170357");
    run("【销售开单－销售汇总-按类别汇总】排序/翻页/快速翻页", "test170358_170359_170360");
    run("【销售开单－销售汇总-按供应商汇总】按供应商汇总", "test170361");
    run("【销售开单－销售汇总-按供应商汇总】清除功能/下拉列表", "test170363");
    run("【销售开单－销售汇总-按供应商汇总】排序/翻页/快速翻页", "test170363_1");

    run("【销售开单－按订货开单】单据查询", "test170252");// 不要启用异地仓库
    run("【销售开单－按订货开单】清除按钮/下拉列表", "test170253");
    run("【销售开单－按订货开单】排序/翻页/快速翻页", "test170255_170256_170257");// (Bug)
    run("【销售开单－按订货开单】排序/翻页/快速翻页", "test170257_1");
    run("【销售开单-收款记录】查询", "test170275");

    run("【销售开单－物流单查询】正常查询", "test170278");
    run("【销售开单－物流单查询】按客户查询", "test170279");
    run("【销售开单－物流单查询】排序", "test170280_170281_170282");

    run("【销售开单－物流单查询】查询条件单独查询", "test170284");
    run("【销售开单－物流单查询】查询条件组合查询", "test170285");
    run("【销售开单－物流单查询】下拉列表", "test170285_1");
    run("【销售开单－物流单查询】底部数据统计汇总", "test170285_2");
    run("【销售开单－物流单查询】翻页／排序", "test170285_3");

    run("【销售开单－更多-代收收款查询】单项查询", "test170295");
    run("【销售开单－更多-代收收款查询】组合查询", "test170296");
    run("【销售开单－更多-代收收款查询】清除", "test170297");
    run("【销售开单－更多-代收收款查询】底部数据汇总检查", "test170298");
    run("【销售开单－更多-代收收款查询】排序／翻页／下拉列表", "test170298_1");
    // }

}
function testSalesNoColorSizeElse002() {
    run("【销售开单－按批次查】作废挂单 输入条件检查", "test170006");
    run("【销售开单-按批次查】打印作废单", "test170025");
    run("【销售开单－物流单】代收单作废", "test170292");
    run("【销售开单－物流单】代收收款记录作废后内容检查", "test170293");//
    run("【销售开单】按挂单--挂单作废", "test170304");//

}
function testSalesNoColorSizeElseAll() {
    run("【销售开单－按批次查】查询条件单独查询", "test170001");
    run("【销售开单－按批次查】按时间段查询", "test170002");
    run("【销售开单－按批次查】查询条件组合查询", "test170003");
    run("【销售开单-按批次查】按备注信息查询", "test170004");
    run("【销售开单－按批次查】是否未结", "test170005");

    run("【【销售开单－按批次查】作废挂单 选择除“正常”以外其它三个条件时，查看IPAD端屏幕底部的汇总数据", "test170007");
    run("【销售开单－按批次查】是否配货", "test170008");
    run("【销售开单－按批次查】排序/翻页/快速翻页", "test1700010_1700011_1700012()");//
    run("【销售开单－按批次查】页面跳转检查", "test170013");
    run("【销售开单－按批次查】底部数据统计检查", "test170018");//
    run("【销售开单－按批次查】退货并退款情况下实收金额检查", "test170019");
    run("【销售开单－按批次查】清除按钮", "test170020");
    run("【销售开单－按批次查】修改代收内容", "test170024");

    run("【销售开单－按明细查】查询条件单独查询", "test170028_170029");
    run("【销售开单-按明细查】作废开单后内容检查", "test170030");

    run("【销售开单－按订货开单】单据查询", "test170252");
    run("【销售开单－按订货开单】清除按钮", "test170253");
    run("【销售开单－按订货开单】排序/翻页/快速翻页", "test170255_170256_170257");
    run("【销售开单－按订货开单】页面跳转检查", "test170258");
    run("【销售开单－按订货开单】全部发货", "test170260");
    run("【销售开单－按订货开单】部分发货", "test170261");
    run("【销售开单－按订货开单】已终结的订单检查", "test170262");
    run("【销售开单－按订货开单】特殊货品金额计算", "test170264");
    run("【销售开单－按订货开单】核销", "test170265");
    run("【销售开单－按订货开单】预付款", "test170266");
    run("【销售开单－按订货开单】清除数量", "test170267");
    run("【销售开单－按订货开单】按订货开单按当前库存数自动填写发货数", "test170268");// (关闭参数异地发货仓库)
    run("【销售开单－按订货开单】按订货开单不按当前库存数自动填写发货数", "test170269");
    run("【销售开单－按订货开单】开单日期检查", "test170272");
    run("【销售开单-按订货开单】开单允许折扣大于1+产品折扣+大于1的折扣", "test170273");
    run("【销售开单-按订货开单】开单允许折扣大于1+整单折扣+大于1的折扣", "test170274");
    run("【销售开单-收款撤销】收款撤销", "test170277");
    run("【销售开单－代收收款】清除功能", "test170286");
    run("【销售开单－代收收款】核销代收收款功能", "test170287");
    run("【销售开单－代收收款】核销代收收款界面多种支付方式", "test170288");
    run("【销售开单－代收收款】店员下拉框检查", "test170289");
    run("【销售开单－代收收款】核销代收单", "test170290");
    run("【销售开单－代收收款】连续核销", "test170294");
    run("【销售开单－更多-代收收款查询】进入代收收款内容明细", "test170300");
    run("【销售开单】按挂单--正常功能检查", "test170303");
    run("【销售开单】按挂单--查询条件检查", "test170305");//
    run("【销售开单－销售汇总-按退货汇总】点击查询记录后页面检查", "test170318");// (数据准确性验证)
    run("【销售开单－销售汇总-按客户销售】点击查询记录后页面检查", "test170331");// (数据准确性验证)
    run("【销售开单－销售汇总-按客户未结】点击查询记录后页面检查", "test170337");//
    run("【销售开单－销售汇总-按客户上货】点击查询记录后页面检查", "test170344");// (数据准确性验证)
    run("【销售开单－销售汇总-按客户上货】拿货次数检查", "test170345");

    run("【销售开单+整单折扣+代收】挂单转为销售单", "test170365");
    run("【销售开单+整单折扣+代收】销售开单+折扣值+二次挂单后代收收款", "test170366");
    run("【销售开单+整单折扣+代收】整单折扣+代收后核销物流单", "test170368");
    run("【销售开单+整单折扣+代收】整单折扣+代收后核销物流单", "test170368_1");
    run("【销售开单+整单折扣+代收】销售开单-销售汇总-按店员汇总，检查代收", "test170369");
    run("【销售开单+整单折扣+代收】销售开单-销售汇总-按金额汇总，检查代收", "test170370");
    run("【销售开单+整单折扣+代收】收支流水界面检查代收款核销单", "test170371");
    run("【销售开单+整单折扣+代收】统计分析-综合汇总，检查代收", "test170372");
    run("【销售开单+产品折扣+代收】挂单转为销售单", "test170375");
    run("【销售开单+产品折扣+代收】销售开单+折扣值+二次挂单后代收收款", "test170376");
    run("【销售开单+产品折扣+代收】产品折扣+代收后核销物流单", "test170378");
    run("【销售开单+产品折扣+代收】销售开单-销售汇总-按店员汇总，检查代收", "test170379");
    run("【销售开单+产品折扣+代收】收支流水界面检查代收款核销单", "test170380");
    run("销售开单+产品折扣+代收】销售开单-销售汇总-按金额汇总，检查代收", "test170381");
    run("【销售开单+产品折扣+代收】统计分析-综合汇总，检查代收", "test170382");
    run("【销售开单+产品折扣+代收】销售开单+特殊货品+折扣值，通过代收方式开单打印，检查打印小票", "test170383");
    run("【销售开单】销售开单-销售汇总-按退货汇总，点击进入明细，内容检查", "test170394");//
    run("【销售开单】挂单界面打印时提示检查", "test170400");
    run("【销售开单】均色均码模式下，开单输入款号之后的款号框不能修改", "test170406");
    run("【销售开单】按订货开单界面款号查询结果检查", "test170409");
    run("【销售开单-更多】检查代收收款金额", "test170410");
}

function setIgnorecolorsize_1Params() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "默认均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function test170001_1() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "4" } ],
        "特殊货品" : { "抹零" : 19, "打包费" : 30 }, "现金" : 11, "刷卡" : [ 100, "交" ],
        "汇款" : [ 200, "建" ],
        "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a", "代收金额" : "50" },
        "备注" : "xx" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck("批次");

    var ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("日期");
    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("实收", IS_NUM);
    ret = ret && sortByTitle("代收", IS_NUM);
    ret = ret && sortByTitle("未结", IS_NUM);
    ret = ret && sortByTitle("还款/抵扣", IS_NUM);
    ret = ret && sortByTitle("客户分店", IS_NUM);
    ret = ret && sortByTitle("配货");
    ret = ret && sortByTitle("备注");
    ret = ret && sortByTitle("操作日期");
    ret = ret && sortByTitle("操作人");

    logDebug("ret=" + ret);

    query();
    var qr = getQR();
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sum6 = 0;
    var sum7 = 0;

    var qr = getQR(window, getScrollView(), "序号", 20);
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["金额"]);
            sum3 += Number(qr.data[i]["现金"]);
            sum4 += Number(qr.data[i]["刷卡"]);
            sum5 += Number(qr.data[i]["汇款"]);
            sum6 += Number(qr.data[i]["实收"]);
            sum7 += Number(qr.data[i]["代收"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["金额"],
            sum2), isEqual(qr.counts["现金"], sum3), isEqual(qr.counts["刷卡"],
            sum4), isEqual(qr.counts["汇款"], sum5), isEqual(qr.counts["实收"],
            sum6), isEqual(qr.counts["代收"], sum7));

    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4
            + "sum5=" + sum5 + "sum6=" + sum6 + "sum7=" + sum7);
    return ret && ret1;
}
function test170001_2() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "备注" : "zdbz" };
    editSalesBillNoColorSize(json);
    var opt = json["操作日期"];

    tapMenu("销售开单", "按批次查");
    var i;
    var ret = false;
    var f = new TField("款号", TF_AC, 0, "lx", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "李响")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "lx", "日期从" : getDay(-30), "日期到" : getToday() };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("销售开单", "按批次查");
    keys = { "客户" : "lx", "日期从" : getDay(-30), "日期到" : getToday(),
        "门店" : "常青店", "备注" : "zdbz", "店员" : "000", "批次从" : batch,
        "批次到" : batch, "是否未结" : "否", "作废挂单" : "正常", "配货" : "否", "客户类别" : "零批客户" };
    fields = salesQueryBatchFields(keys);
    query(fields);

    var qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a8 = qr.data[0]["配货"];
    var a9 = qr.data[0]["备注"];
    var a10 = qr.data[0]["操作日期"];
    var a11 = qr.data[0]["批次"];
    var ret1 = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李响", a3), isEqual("总经理", a4), isEqual("180", a5),
            isEqual("1", a6), isEqual("0", a7), isEqual("否", a8), isEqual(
                    "zdbz", a9), isAqualOptime(opt, a10, 2),
            isEqual(batch, a11));

    tapButton(window, CLEAR);
    for (var i = 0; i < 13; i++) {
        if (i == 2 || i == 3) {
            var ret2 = isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret2 = isEqual("", getTextFieldValue(window, i));
        }
    }

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170001() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "备注" : "zdbz" };
    editSalesBillNoColorSize(json);
    var opt = json["操作日期"];

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "lx", "日期从" : getToday(), "日期到" : getToday(),
        "门店" : "常青店", "备注" : "zdbz", "店员" : "000,总经理", "批次从" : "1",
        "批次到" : "10000", "是否未结" : "否", "作废挂单" : "正常", "配货" : "否" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    var qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a8 = qr.data[0]["配货"];
    var a9 = qr.data[0]["备注"];
    var a10 = qr.data[0]["操作日期"];
    var ret = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李响", a3), isEqual("总经理", a4), isEqual("250", a5),
            isEqual("1", a6), isEqual("0", a7), isEqual("否", a8), isEqual(
                    "zdbz", a9), isEqual(opt, a10));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "备注" : "zdbz" };
    editSalesBillNoColorSize(json);
    var opt = json["操作日期"];

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "lx" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    var qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a8 = qr.data[0]["配货"];
    var a9 = qr.data[0]["备注"];
    var a10 = qr.data[0]["操作日期"];
    var ret = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李响", a3), isEqual("总经理", a4), isEqual("250", a5),
            isEqual("1", a6), isEqual("0", a7), isEqual("否", a8), isEqual(
                    "zdbz", a9), isEqual(opt, a10));

    logDebug("ret=" + ret);
    return ret;
}
function test170002() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "备注" : "zdbz" };
    editSalesBillNoColorSize(json);
    var opt = json["操作日期"];

    var keys = { "日期从" : getToday(), "日期到" : getToday() };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    var qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a8 = qr.data[0]["配货"];
    var a9 = qr.data[0]["备注"];
    var a10 = qr.data[0]["操作日期"];
    var ret = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李响", a3), isEqual("总经理", a4), isEqual("250", a5),
            isEqual("1", a6), isEqual("0", a7), isEqual("否", a8), isEqual(
                    "zdbz", a9), isEqual(opt, a10));
    logDebug("ret=" + ret);
    return ret;
}
function test170003() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "备注" : "zdbz" };
    editSalesBillNoColorSize(json);
    var opt = json["操作日期"];

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "lx", "日期从" : getToday(), "日期到" : getToday(),
        "门店" : "常青店", "备注" : "zdbz", "店员" : "000,总经理", "批次从" : "1",
        "批次到" : "10000", "是否未结" : "否", "作废挂单" : "正常", "配货" : "否" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    var qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a8 = qr.data[0]["配货"];
    var a9 = qr.data[0]["备注"];
    var a10 = qr.data[0]["操作日期"];
    var ret = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李响", a3), isEqual("总经理", a4), isEqual("250", a5),
            isEqual("1", a6), isEqual("0", a7), isEqual("否", a8), isEqual(
                    "zdbz", a9), isEqual(opt, a10));
    logDebug("ret=" + ret);
    return ret;
}
function test170004() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx",
        "明细" : [ { "货品" : "3035", "数量" : "1", "备注" : "mxbz" } ], "备注" : "zdbz" };
    editSalesBillNoColorSize(json);
    var opt = json["操作日期"];

    tapMenu("销售开单", "按批次查");
    var keys = { "备注" : "zdbz" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    var qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a8 = qr.data[0]["配货"];
    var a9 = qr.data[0]["备注"];
    var a10 = qr.data[0]["操作日期"];
    var ret = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李响", a3), isEqual("总经理", a4), isEqual("1", a6), isEqual("0", a7),
            isEqual("否", a8), isEqual("zdbz", a9), isEqual(opt, a10));
    logDebug("ret=" + ret);
    return ret;
}
function test170005() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "备注" : "zdbz", "现金" : "0" };
    editSalesBillNoColorSize(json);
    var opt = json["操作日期"];

    tapMenu("销售开单", "按批次查");
    var keys = { "是否未结" : "是" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    var qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a8 = qr.data[0]["配货"];
    var a9 = qr.data[0]["备注"];
    var a10 = qr.data[0]["操作日期"];
    var ret = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李响", a3), isEqual("总经理", a4), isEqual("250", a5),
            isEqual("1", a6), isEqual("-250", a7), isEqual("否", a8), isEqual(
                    "zdbz", a9), isEqual(opt, a10));

    tapMenu("销售开单", "按批次查");
    var keys = { "是否未结" : "否" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    var qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a8 = qr.data[0]["配货"];
    var a9 = qr.data[0]["备注"];
    var ret1 = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李响", a3), isEqual("总经理", a4), isEqual("250", a5),
            isEqual("1", a6), isEqual("0", a7), isEqual("否", a8), isEqual(
                    "zdbz", a9));

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170006() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "2" } ],
        "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按批次查");
    var keys = { "作废挂单" : "挂单" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    var qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a8 = qr.data[0]["配货"];
    var ret = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李四", a3), isEqual("总经理", a4), isEqual(money, a5),
            isEqual("2", a6), isEqual("0", a7), isEqual("否", a8));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "yt", "运单号" : "234", "备注" : "abc" } };
    editSalesBillNoColorSize(json);

    money = json["代收"]["代收金额"];

    var qo, o, ret = true;
    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按批次查");
    var keys1 = { "客户" : "lx", "作废挂单" : "正常" };
    var fields1 = salesQueryBatchFields(keys1);
    query(fields1);

    var qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a8 = qr.data[0]["配货"];
    var ret1 = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李响", a3), isEqual("总经理", a4), isEqual(money, a5),
            isEqual("1", a6), isEqual("0", a7), isEqual("否", a8));

    tapFirstText();

    tapButtonAndAlert("待作废", OK);
    tapPrompt();

    tapMenu("销售开单", "按批次查");
    var keys2 = { "作废挂单" : "待作废" };
    var fields2 = salesQueryBatchFields(keys2);
    query(fields2);

    var qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a8 = qr.data[0]["配货"];
    var ret2 = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李响", a3), isEqual("总经理", a4), isEqual(money, a5),
            isEqual("1", a6), isEqual("0", a7), isEqual("否", a8));

    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "3" } ],
        "代收" : { "物流商" : "yt", "运单号" : "345", "备注" : "c" } };
    editSalesBillNoColorSize(json);

    money = json["代收"]["代收金额"];

    tapMenu("销售开单", "按批次查");
    var keys1 = { "作废挂单" : "正常" };
    var fields1 = salesQueryBatchFields(keys1);
    query(fields1);
    tapFirstText();

    tapButtonAndAlert("作 废", OK);

    tapMenu("销售开单", "按批次查");
    var keys4 = { "作废挂单" : "作废" };
    var fields4 = salesQueryBatchFields(keys4);
    query(fields4);

    var qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a8 = qr.data[0]["配货"];
    var ret3 = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李四", a3), isEqual("总经理", a4), isEqual(money, a5),
            isEqual("3", a6), isEqual("0", a7), isEqual("否", a8));

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170007() {
    // 运行test170007之前为准备数据应先运行test170006
    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-300), "日期到" : getToday(), "作废挂单" : "挂单" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sum6 = 0;
    var sum7 = 0;

    var qr = getQR(window, getScrollView(), "序号", 20);
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["代收"]);
            sum5 += Number(qr.data[i]["数量"]);
            sum6 += Number(qr.data[i]["金额"]);
            sum7 += Number(qr.data[i]["实收"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["代收"],
            sum4), isEqual(qr.counts["数量"], sum5), isEqual(qr.counts["金额"],
            sum6), isEqual(qr.counts["实收"], sum7));
    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4
            + "sum5=" + sum5 + "sum6=" + sum6 + "sum7=" + sum7);

    tapMenu("销售开单", "按批次查");
    var keys2 = { "日期从" : getDay(-300), "日期到" : getToday(), "作废挂单" : "待作废" };
    var fields2 = salesQueryBatchFields(keys2);
    query(fields2);

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sum6 = 0;
    var sum7 = 0;

    var qr = getQR(window, getScrollView(), "序号", 20);
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["代收"]);
            sum5 += Number(qr.data[i]["数量"]);
            sum6 += Number(qr.data[i]["金额"]);
            sum7 += Number(qr.data[i]["实收"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["代收"],
            sum4), isEqual(qr.counts["数量"], sum5), isEqual(qr.counts["金额"],
            sum6), isEqual(qr.counts["实收"], sum7));

    tapMenu("销售开单", "按批次查");
    var keys2 = { "日期从" : getDay(-300), "日期到" : getToday(), "作废挂单" : "作废" };
    var fields2 = salesQueryBatchFields(keys2);
    query(fields2);

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sum6 = 0;
    var sum7 = 0;

    var qr = getQR(window, getScrollView(), "序号", 20);
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["代收"]);
            sum5 += Number(qr.data[i]["数量"]);
            sum6 += Number(qr.data[i]["金额"]);
            sum7 += Number(qr.data[i]["实收"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret2 = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["代收"],
            sum4), isEqual(qr.counts["数量"], sum5), isEqual(qr.counts["金额"],
            sum6), isEqual(qr.counts["实收"], sum7));

    tapMenu("销售开单", "按批次查");
    var keys2 = { "日期从" : getDay(-30), "日期到" : getToday(), "作废挂单" : "正常" };
    var fields2 = salesQueryBatchFields(keys2);
    query(fields2);

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sum6 = 0;
    var sum7 = 0;

    var qr = getQR(window, getScrollView(), "序号", 20);
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["代收"]);
            sum5 += Number(qr.data[i]["数量"]);
            sum6 += Number(qr.data[i]["金额"]);
            sum7 += Number(qr.data[i]["实收"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret3 = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["代收"],
            sum4), isEqual(qr.counts["数量"], sum5), isEqual(qr.counts["金额"],
            sum6), isEqual(qr.counts["实收"], sum7));

    return ret && ret1 && ret2 && ret3;
}
function test170008() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);
    var opt = json["操作日期"];

    tapMenu("销售开单", "按批次查");
    var keys = { "配货" : "否" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    var qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a8 = qr.data[0]["配货"];
    var a10 = qr.data[0]["操作日期"];
    var ret = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李响", a3), isEqual("总经理", a4), isEqual("1", a6), isEqual("0", a7),
            isEqual("否", a8), isEqual(opt, a10));
    logDebug("ret=" + ret);
    return ret;
}
function test170009() {

}
function test1700010_1700011_1700012() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    scrollNextPage();
    scrollPrevPage();
    goPage(1, qr);

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getToday(), "日期到" : getToday() };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var ret = true;

    var ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("金额");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("未结", IS_NUM);
    ret = ret && sortByTitle("配货");
    ret = ret && sortByTitle("备注");
    ret = ret && sortByTitle("操作日期");

    return ret;
}
function test170013() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 0);
    var a1 = getTextFieldValue(getScrollView(), 3);
    var a2 = getTextFieldValue(getScrollView(), 4);

    var ret = isAnd(isEqual("3035,jkk", a), isEqual("1", a1),
            isEqual("250", a2));

    return ret;
}
function test170018() {
    tapMenu("销售开单", "按批次查");
    query();

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sum6 = 0;

    var qr = getQR(window, getScrollView(), "序号", 20);
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["代收"]);
            sum5 += Number(qr.data[i]["数量"]);
            sum6 += Number(qr.data[i]["金额"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["代收"],
            sum4), isEqual(qr.counts["数量"], sum5), isEqual(qr.counts["金额"],
            sum6));
    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4
            + "sum5=" + sum5 + "sum6=" + sum6);
    return ret;
}
function test170019() {

}
function test170020() {

}
function test170024() {

}
function test170025() {

}
function test170028_1() {
    tapMenu("销售开单", "按明细查");
    var keys = { "日期从" : getDay(-2), "到" : getToday() };
    var fields = salesQueryParticularFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck("批次");

    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("日期");
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("单价", IS_NUM);
    ret = ret && sortByTitle("折扣", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);
    ret = ret && sortByTitle("差额", IS_NUM);
    ret = ret && sortByTitle("客户分店");
    ret = ret && sortByTitle("备注");
    // ret = ret && sortByTitle("操作日期");

    logDebug("ret=" + ret);

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["小计"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isAqualNum(
            qr.counts["小计"], sum2, 0.01));
    return ret && ret1;
}
function test170028_2_1() {
    tapMenu("销售开单", "按明细查");
    var i;
    var ret1 = false;
    var f = new TField("款号", TF_AC, 0, "303", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "3035,jkk")) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();

    return ret1;
}
function test170028_2_2() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx",
        "明细" : [ { "货品" : "3035", "数量" : "10", "备注" : "mxbz" } ] };
    editSalesBillNoColorSize(json);
    // tapButton(window, RETURN);
    tapReturn();

    tapMenu("销售开单", "按明细查");
    query();
    var keys = { "款号" : "3035", "款号名称" : "jkk", "客户" : "lx", "店员" : "000",
        "门店" : "常青店", "日期从" : getToday(), "到" : getToday(), "备注" : "mxbz",
        "适用价格" : "打包价" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["客户"];
    var a1 = qr.data[0]["款号"];
    var a2 = qr.data[0]["数量"];

    var ret1 = isAnd(isEqual("李响", a), isEqual("3035", a1), isEqual("10", a2));

    return ret1;
}
function test170028_2_3() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "特殊货品" : { "抹零" : 100 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f11 = new TField("备注", TF, 13, "mxbz");
    var fields = [ f11 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapButtonAndAlert("none", "取 消");
    delay(2);
    tapButton(window, RETURN);

    tapMenu("销售开单", "按明细查");
    query();
    var keys = { "款号" : "00000", "款号名称" : "抹零", "客户" : "lx", "店员" : "000,",
        "门店" : "常青店", "类型" : "退货", "日期从" : getToday(), "到" : getToday(),
        "备注" : "mxbz", "适用价格" : "打包价" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr1 = getQR();
    var b = qr1.data[0]["客户"];
    var b1 = qr1.data[0]["款号"];
    var b2 = qr1.data[0]["数量"];

    var ret2 = isAnd(isEqual("李响", b), isEqual("00000", b1), isEqual("0", b2));

    return ret2;
}
function test170028_2_4() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "-1" } ],
        "备注" : "zdbz", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f6 = new TField("备注", TF_SC, 6, "退货");
    var fields = [ f6 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapButtonAndAlert("none", "取 消");
    delay(2);
    tapButton(window, RETURN);

    tapMenu("销售开单", "按明细查");
    query();
    var keys = { "款号" : "3035", "款号名称" : "jkk", "客户" : "lx", "店员" : "000,",
        "门店" : "常青店", "类型" : "退货", "日期从" : getToday(), "到" : getToday(),
        "备注" : "退货", "适用价格" : "打包价" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr2 = getQR();
    var c = qr2.data[0]["客户"];
    var c1 = qr2.data[0]["款号"];
    var c2 = qr2.data[0]["数量"];

    var ret3 = isAnd(isEqual("李响", c), isEqual("3035", c1), isEqual("-1", c2));

    tapButton(window, CLEAR);
    var ret4 = isAnd(isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)), isEqual("", getTextFieldValue(
            window, 2)), isEqual("", getTextFieldValue(window, 3)), isEqual("",
            getTextFieldValue(window, 4)), isEqual("", getTextFieldValue(
            window, 5)), isEqual(getToday(), getTextFieldValue(window, 6)),
            isEqual(getToday(), getTextFieldValue(window, 7)), isEqual("",
                    getTextFieldValue(window, 8)));

    return ret3 && ret4;
}
function test170030() {

}
function test170252() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["发货状态"];
    var ret = isEqual("未发货", a);

    tapFirstText();

    var f3 = new TField("数量", TF, 5, "3");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr1 = getQR();
    var b = qr1.data[0]["发货状态"];
    var ret1 = isEqual("部分发货", b);

    tapFirstText();
    var f3 = new TField("数量", TF, 5, "7");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "全部发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr2 = getQR();
    var c = qr2.data[0]["发货状态"];
    var ret2 = isEqual("全部发货", c);

    return ret && ret1 && ret2;
}
function test170253() {
    tapMenu("销售开单", "按订货开单");
    var i;
    var ret = false;
    var f = new TField("款号", TF_AC, 2, "303", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "3035,jkk")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("销售开单", "按订货开单");
    var i;
    var ret1 = false;
    var f = new TField("客户", TF_AC, 3, "ls", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "李四")) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("销售开单", "按订货开单");
    var ret2 = false;
    tap(getTextField(window, 4));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("常青店", v)) {
            ret2 = true;
            break;
        }
    }
    target.frontMostApp().mainWindow().popover().dismiss();
    query();

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getToday(), "日期到" : getToday(), "款号" : "3035",
        "客户" : "ls", "门店" : "常青店", "批次从" : "1", "批次到" : "300", "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapButton(window, "清 除");

    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);
    var a4 = getTextFieldValue(window, 4);
    var a5 = getTextFieldValue(window, 5);
    var a6 = getTextFieldValue(window, 6);
    var a7 = getTextFieldValue(window, 7);

    var ret3 = isAnd(isEqual(getToday(), a), isEqual(getToday(), a1), isEqual(
            "", a2), isEqual("", a3), isEqual("", a4), isEqual("", a5),
            isEqual("", a6), isEqual("", a7));

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170255_170256_170257() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    // tapMenu("销售开单", "按订货开单");
    // query();
    // var qr = getQR();
    // scrollNextPage();
    // scrollPrevPage();
    // goPage(1, qr);

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday() };
    var fields = salesBillOrderFields(keys);
    query(fields);

    // 点击翻页
    var ret = goPageCheck("批次");

    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("订货数", IS_NUM);
    ret = ret && sortByTitle("已发数", IS_NUM);
    ret = ret && sortByTitle("差异数", IS_NUM);
    ret = ret && sortByTitle("订货额", IS_NUM);
    ret = ret && sortByTitle("已付", IS_NUM);
    ret = ret && sortByTitle("未付", IS_NUM);
    ret = ret && sortByTitle("发货状态");
    ret = ret && sortByTitle("客户分店");
    ret = ret && sortByTitle("操作日期");

    return ret;
}
function test170257_1() {
    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sum6 = 0;

    var qr = getQR();
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["订货数"]);
            sum2 += Number(qr.data[i]["已发数"]);
            sum3 += Number(qr.data[i]["差异数"]);
            sum4 += Number(qr.data[i]["订货额"]);
            sum5 += Number(qr.data[i]["已付"]);
            sum6 += Number(qr.data[i]["未付"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["订货数"], sum1), isEqual(qr.counts["已发数"],
            sum2), isEqual(qr.counts["差异数"], sum3), isEqual(qr.counts["订货额"],
            sum4), isEqual(qr.counts["已付"], sum5), isEqual(qr.counts["未付"],
            sum6));

    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4
            + "sum5=" + sum5 + "sum6=" + sum6);
    return ret;
}
function test170258() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();

    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(getScrollView(), 0);

    var ret = isAnd(isEqual("李四", a), isIn(a1, "3035"));
    tapButtonAndAlert(RETURN, OK);

    return ret;
}
function test170260() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);
    var opt = json["操作日期"];

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls", "门店" : "常青店" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["备注"];

    tapMenu("销售开单", "按订货开单");
    var keys1 = { "款号" : "3035", "客户" : "ls", "门店" : "常青店" };
    var fields1 = salesBillOrderFields(keys1);
    query(fields1);
    delay();
    tapFirstText(getScrollView(), "序号", 20);

    saveAndAlertOk();
    delay();
    tapPrompt();
    // tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys2 = { "款号" : "3035", "客户" : "ls", "门店" : "常青店" };
    var fields2 = salesBillOrderFields(keys2);
    query(fields2);
    var qr1 = getQR();
    var a1 = qr1.data[0]["发货状态"];

    tapMenu("销售开单", "按批次查");
    var keys3 = { "客户" : "ls", "门店" : "常青店" };
    var fields3 = salesQueryBatchFields(keys3);
    query(fields3);
    var qr2 = getQR();
    var a2 = qr2.data[0]["备注"];
    var a3 = qr2.data[0]["操作日期"];

    var ret = isAnd(isEqual("预付款", a), isEqual("全部发货", a1), isEqual("", a2),
            isAqualOptime(opt, a3));

    return ret;
}
function test170261() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "9" }, { "货品" : "k200", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["发货状态"];
    var a1 = qr.data[0]["订货数"];
    var a2 = qr.data[0]["已发数"];
    var a3 = qr.data[0]["差异数"];

    var ret = isAnd(isEqual("未发货", a), isEqual("14", a1), isEqual("0", a2),
            isEqual("14", a3));

    tapFirstText();
    var f5 = new TField("数量", TF, 5, "0");
    var fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    // tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var b = qr.data[0]["发货状态"];
    var b1 = qr.data[0]["订货数"];
    var b2 = qr.data[0]["已发数"];
    var b3 = qr.data[0]["差异数"];

    var ret = isAnd(isEqual("部分发货", b), isEqual("14", b1), isEqual("5", b2),
            isEqual("9", b3));

    tapFirstText();
    var a4 = getTextFieldValue(getScrollView(), 0);
    var a5 = getTextFieldValue(getScrollView(), 5);

    var ret1 = isAnd(isEqual("9", a5), isIn(a4, "3035"));
    tapButtonAndAlert(RETURN, OK);

    return ret && ret1;
}
function test170262() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "3035", "数量" : "8" }, { "货品" : "k200", "数量" : "2" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();
    var f5 = new TField("数量", TF, 5, "0");
    var fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售订货", "按批次查");
    var keys1 = { "发货状态" : "部分发货" };
    var fields1 = salesOrderQueryBatchFields(keys1);
    setTFieldsValue(window, fields1);

    query(fields1);

    tapFirstText();
    tapMenu("销售订货", "更多.", "终结订单");
    tapButtonAndAlert("终结订单", OK);
    tapPrompt();

    tapMenu("销售订货", "按批次查");
    var keys2 = { "客户" : "lt" };
    var fields2 = salesOrderQueryBatchFields(keys2);
    setTFieldsValue(window, fields2);
    query(fields2);
    var qr = getQR();
    var a = qr.data[0]["发货状态"];
    var ret = isEqual("结束", a);

    return ret;
}
function test170264() {
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : "3035", "数量" : "5" }, { "货品" : "k200", "数量" : "5" } ],
        "特殊货品" : { "抹零" : 100 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText(getScrollView(), "序号", 14);
    var f5 = new TField("数量", TF, 5, "0");
    fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["发货状态"];

    tapFirstText();
    var a1 = getTextFieldValue(window, 2);
    var a2 = getTextFieldValue(getScrollView(), 22);
    var a3 = getTextFieldValue(getScrollView(), 23);
    var a4 = getTextFieldValue(getScrollView(), 24);
    var a5 = getTextFieldValue(getScrollView(), 25);

    var ret = isAnd(isEqual("部分发货", a), isEqual("500", a1), isEqual("-1", a2),
            isEqual("0", a3), isEqual("0", a4), isEqual("0", a5));
    tapReturn();

    return ret;
}
function test170265() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();

    tapFirstText();
    var json1 = { "核销" : [ 5 ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json1);

    var a = getTextFieldValue(window, 5);
    var ret = isEqual("500", a);
    delay();

    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按订货开单");
    query();
    var qr = getQR();
    var a1 = qr.data[0]["发货状态"];
    var ret1 = isEqual("全部发货", a1);

    return ret && ret1;
}
function test170266() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    tapFirstText();
    tapButton(window, "预付款");

    var texts = getStaticTexts(getPopOrView());
    var index = getArrayIndexIn(texts, "订货时间");
    var a = getStaticTextValue(getPopOrView(), index + 6);
    var a1 = getStaticTextValue(getPopOrView(), index + 7);
    var a2 = getStaticTextValue(getPopOrView(), index + 8);

    var ret = isAnd(isEqual(getDay(), a), isEqual("002,仓管员", a1), isEqual(
            "500", a2));
    target.frontMostApp().mainWindow().popover().dismiss();
    tapButtonAndAlert(RETURN, OK);

    return ret;
}
function test170267() {
    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : "3035", "数量" : "5" }, { "货品" : "k300", "数量" : "5" } ],
        "特殊货品" : { "抹零" : 100, "打包费" : 300 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    tapFirstText();

    tapButton(window, "清除数量");
    var a = getTextFieldValue(getScrollView(), 5);

    var ret = isEqual("0", a);

    tapButtonAndAlert(RETURN, OK);

    return ret;
}
function test170268() {
    // 设置全局参数 按订货开单是否按当前库存自动填写发货数 为 自动填写 ,然后重新登录
    var qo, o, ret = true;
    qo = { "备注" : "发货数" };
    o = { "新值" : "1", "数值" : [ "自动填写", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称", "品牌", "吊牌价", "季节", "类别", "厂商", "仓位", "经办人", "备注" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "新增货品+");
    var r1 = "k" + getTimestamp(8);
    var keys1 = [ "款号", "名称", "品牌", "吊牌价", "季节", "类别", "厂商", "仓位", "经办人", "备注" ];
    var fields1 = editGoodsFields(keys1, false, 0, 0);
    changeTFieldValue(fields1["款号"], r1);
    changeTFieldValue(fields1["名称"], r1);
    setTFieldsValue(getScrollView(), fields1);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : r1, "数量" : "50" } ],
        "现金" : "5000" };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    var qr = getQR();
    var a = qr.data[0]["库存"];
    var ret = isEqual("50", a);

    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : r, "数量" : "5" }, { "货品" : r1, "数量" : "60" },
                { "货品" : r1, "数量" : "40" }, { "货品" : r1, "数量" : "50" },
                { "货品" : "3035", "数量" : "5" }, { "货品" : "k300", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    tapFirstText(getScrollView(), "序号", 14);

}
function test170269() {
    // 设置全局参数 按订货开单是否按当前库存自动填写发货数 为 默认不填写 ,然后重新登录
    var qo, o, ret = true;
    qo = { "备注" : "发货数" };
    o = { "新值" : "0", "数值" : [ "默认不填写" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称", "品牌", "吊牌价", "季节", "类别", "厂商", "仓位", "经办人", "备注" ];
    var fields = editGoodsFields(keys, false, 0, 0);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "新增货品+");
    var r1 = "k" + getTimestamp(8);
    var keys1 = [ "款号", "名称", "品牌", "吊牌价", "季节", "类别", "厂商", "仓位", "经办人", "备注" ];
    var fields1 = editGoodsFields(keys1, false, 0, 0);
    changeTFieldValue(fields1["款号"], r1);
    changeTFieldValue(fields1["名称"], r1);
    setTFieldsValue(getScrollView(), fields1);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : r1, "数量" : "50" } ],
        "现金" : "5000" };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    var qr = getQR();
    var a = qr.data[0]["库存"];
    var ret = isEqual("50", a);

    tapMenu("销售订货", "新增订货+");
    var json = {
        "客户" : "lt",
        "明细" : [ { "货品" : r, "数量" : "5" }, { "货品" : r1, "数量" : "60" },
                { "货品" : r1, "数量" : "40" }, { "货品" : r1, "数量" : "50" },
                { "货品" : "3035", "数量" : "5" }, { "货品" : "k300", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按订货开单");
    tapFirstText(getScrollView(), "序号", 14);

    var a = getTextFieldValue(getScrollView(), 5);
    var a1 = getTextFieldValue(getScrollView(), 14);
    var a2 = getTextFieldValue(getScrollView(), 23);
    var a3 = getTextFieldValue(getScrollView(), 32);
    var a4 = getTextFieldValue(getScrollView(), 41);
    var a5 = getTextFieldValue(getScrollView(), 50);

    var ret = isAnd(isEqual("5", a), isEqual("60", a1), isEqual("40", a2),
            isEqual("50", a3), isEqual("5", a4), isEqual("5", a5));

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    return ret;
}
function test170272() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    // var opt = json["操作日期"];

    var keys = { "日期" : getDay(-3) };
    var fields = salesOrderAddFields(keys);
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getDay(-3), "日期到" : getDay(-3) };
    var fields = salesBillOrderFields(keys);
    query(fields);
    tapFirstText(getScrollView(), "序号", 14);

    var a = getTextFieldValue(window, 9);
    var ret = isEqual(getToday(), a);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按批次查");
    // var keys = { "日期从" : getDay(-3), "日期到" : getDay(-3) };
    // var fields = salesQueryBatchFields(keys);
    // query(fields);
    query();
    var qr = getQR();
    var a1 = qr.data[0]["操作日期"];

    var ret1 = isAqualOptime(getOpTime(), a1);

    return ret && ret1;
}
function test170273() {
    // 设置“开单是否允许折扣大于1”,开单模式为产品折扣模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "允许折扣大于1" };
    o = { "新值" : "1", "数值" : [ "允许折扣大于1", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "特殊货品" : { "抹零" : 100 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f7 = new TField("折扣", TF, 5, "1.5");
    var fields = [ f7 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getToday(), "日期到" : getToday() };
    var fields = salesBillOrderFields(keys);
    query(fields);
    tapFirstText(getScrollView(), "序号", 14);
    var a = getTextFieldValue(getScrollView(), 7);
    var ret = isEqual("1.5", a);

    saveAndAlertOk();
    tapPrompt();

    return ret;
}
function test170274() {
    // 设置“开单是否允许折扣大于1”,开单模式为整单折扣模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "7", "数值" : [ "整单折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "特殊货品" : { "抹零" : 100 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f10 = new TField("折扣", TF, 10, "1.5");
    var fields = [ f10 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys = { "日期从" : getToday(), "日期到" : getToday() };
    var fields = salesBillOrderFields(keys);
    query(fields);
    tapFirstText(getScrollView(), "序号", 14);
    var a = getTextFieldValue(window, 10);
    var ret = isEqual("1.5", a);
    delay();

    saveAndAlertOk();
    tapPrompt();

    return ret;
}
function test170275Prepare() {
    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-300), "作废挂单" : "待作废" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    var qr = getQR();
    var total1 = qr.total;
    for (var i = 0; i < total1; i++) {
        tapFirstText();
        editShopInFlitting();
    }

    qr = getQR();
    var total2 = qr.total;
    var ret = false;
    if (total2 <= 1) {
        ret = true;
    }

    return ret;
}
function test170275Getmoney() {
    tapMenu2("更多.");
    tapMenu3("收 款");
}
function test170275() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    tapMenu1("销售开单", "按批次查");
    query();
    tapFirstText();

    runAndAlert("test170275Getmoney", OK);

    // tapMenu("销售开单", "收款单");
    // var keys = { "日期从" : getDay(-30) };
    // var fields = salesCollectionRecordFields(keys);
    // query(fields);
    //
    // var sum1 = 0;
    // var sum2 = 0;
    // var sum3 = 0;
    // var qr = getQR();
    // debugQResult(qr);
    // var totalPageNo = qr.totalPageNo;
    // for (var j = 1; j <= totalPageNo; j++) {
    // for (var i = 0; i < qr.curPageTotal; i++) {
    // sum1 += Number(qr.data[i]["现金"]);
    // sum2 += Number(qr.data[i]["刷卡"]);
    // sum3 += Number(qr.data[i]["汇款"]);
    // }
    // if (j < totalPageNo) {
    // scrollNextPage();
    // qr = getQR();
    // }
    // }
    // var ret = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
    // sum2), isEqual(qr.counts["汇款"], sum3));
    // logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3);
    // return ret;
}
function test170277() {
    tapMenu("销售开单", "收款单");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesCollectionRecordFields(keys);
    query(fields);

    tapChoose(getScrollView(), [ 0 ]);

    tapMenu("销售开单", "撤销");
    delay();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "撤销成功"));

    logDebug("ret=" + ret);
    return ret;
}
function test170278() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];
    var ydh = json["代收"]["运单号"];
    var bz = json["代收"]["备注"];
    if (money == "416") {
        var ret = true;
    }
    if (wls == "圆通速递") {
        var ret1 = true;
    }
    if (ydh == "123") {
        var ret2 = true;
    }
    if (bz == "a") {
        var ret3 = true;
    }

    tapMenu("销售开单", "物流单");
    var keys = { "日期从" : getToday(), "日期到" : getToday(), "物流商" : "圆通速递",
        "运单号" : "123" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["货款收讫"];

    var ret = isAnd(isEqual(money, a), isEqual(wls, a1), isEqual(ydh, a2),
            isEqual(bz, a3), isEqual("是", a4), isEqual("否", a5));

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170279() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];
    var ydh = json["代收"]["运单号"];
    var bz = json["代收"]["备注"];
    if (money == "416") {
        var ret = true;
    }
    if (wls == "圆通速递") {
        var ret1 = true;
    }
    if (ydh == "123") {
        var ret2 = true;
    }
    if (bz == "a") {
        var ret3 = true;
    }

    tapMenu("销售开单", "物流单");

    var keys = { "客户" : "ls" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var ret4 = true;
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            ret4 = ret4 && isEqual(qr.data[i]["客户"], "李四")
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3
            + "ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170280_170281_170282() {
    tapMenu("销售开单", "物流单");
    var keys = { "日期从" : getDay(-10), "日期到" : getToday() };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);

    // 点击翻页
    var ret = goPageCheck("批次");

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("物流商");
    ret = ret && sortByTitle("运单号");
    ret = ret && sortByTitle("代收货款");
    ret = ret && sortByTitle("代收金额", IS_NUM);
    ret = ret && sortByTitle("货款收讫");
    ret = ret && sortByTitle("物流备注");

    return ret;
}
function test170284() {
    tapMenu("销售开单", "物流单");
    var keys = { "物流商" : "圆通速递" }
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["物流商"];
    var ret = isEqual("圆通速递", a);

    tapMenu("销售开单", "物流单");
    var keys1 = { "日期从" : getDay(-60), "日期到" : getToday() }
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);
    var qr1 = getQR();
    var a1 = qr1.data[0]["物流商"];
    var ret1 = isEqual("圆通速递", a1);

    tapMenu("销售开单", "物流单");
    var keys2 = { "门店" : "常青店" }
    var fields2 = salesQueryLogisticsFields(keys2);
    query(fields2);
    var qr2 = getQR();
    var a2 = qr2.data[0]["物流商"];
    var ret2 = isEqual("圆通速递", a2);

    tapMenu("销售开单", "物流单");
    query();
    var q = getQR();
    var num = q.data[0]["批次"];

    tapMenu("销售开单", "物流单");
    var keys3 = { "批次从" : "1", "批次到" : num }
    var fields3 = salesQueryLogisticsFields(keys3);
    query(fields3);
    var qr3 = getQR();
    var a3 = qr3.data[0]["物流商"];
    var ret3 = isEqual("圆通速递", a3);

    tapMenu("销售开单", "物流单");
    var keys4 = { "运单号" : "123" }
    var fields4 = salesQueryLogisticsFields(keys4);
    query(fields4);
    var qr4 = getQR();
    var a4 = qr4.data[0]["物流商"];
    var ret4 = isEqual("圆通速递", a4);

    tapMenu("销售开单", "物流单");
    var keys5 = { "是否收款" : "否" }
    var fields5 = salesQueryLogisticsFields(keys5);
    query(fields5);
    var qr5 = getQR();
    var a5 = qr5.data[0]["物流商"];
    var ret5 = isEqual("圆通速递", a5);

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3
            + "ret4=" + ret4 + "ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test170285() {
    tapMenu("销售开单", "物流单");
    var keys = { "是否收款" : "否", "是否作废" : "否" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var q = getQR();
    var num = Number(q.data[0]["批次"]);

    tapMenu("销售开单", "物流单");
    var keys = { "客户" : "ls", "日期从" : getDay(-60), "日期到" : getToday(),
        "物流商" : "圆通速递", "批次从" : num - 1, "批次到" : num, "门店" : "常青店",
        "运单号" : "123", "是否收款" : "否", "是否作废" : "否" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);

    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["客户"];
    var a6 = qr.data[0]["门店"];
    var a7 = qr.data[0]["货款收讫"];
    var a8 = qr.data[0]["批次"];

    var ret = isAnd(isEqual("416", a), isEqual("圆通速递", a1), isEqual("123", a2),
            isEqual("a", a3), isEqual("是", a4), isEqual("李四", a5), isEqual(
                    "常青店", a6), isEqual("否", a7), isEqual(num, a8));

    logDebug("ret=" + ret);
    return ret;
}
function test170285_1() {
    tapMenu("销售开单", "物流单");
    var i;
    var ret = false;
    var f = new TField("客户", TF_AC, 0, "ls", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "李四")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("销售开单", "物流单");
    var ret1 = false;
    tap(getTextField(window, 5));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("常青店", v)) {
            ret1 = true;
            break;
        }
    }
    target.frontMostApp().mainWindow().popover().dismiss();
    query();

    tapMenu("销售开单", "物流单");
    var ret2 = false;
    tap(getTextField(window, 6));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("圆通速递", v)) {
            ret2 = true;
            break;
        }
    }
    target.frontMostApp().mainWindow().popover().dismiss();
    query();

    tapMenu("销售开单", "物流单");
    var keys = { "客户" : "ls", "日期从" : getDay(-60), "日期到" : getToday() }
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var q = getQR();
    var num = q.data[0]["批次"];

    tapMenu("销售开单", "物流单");
    var keys = { "客户" : "ls", "日期从" : getDay(-60), "日期到" : getToday(),
        "物流商" : "圆通速递", "批次从" : Number(num - 1), "批次到" : num, "门店" : "常青店",
        "运单号" : "123", "是否收款" : "否", "是否作废" : "否" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);

    tapButton(window, CLEAR);

    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);
    var a4 = getTextFieldValue(window, 4);
    var a5 = getTextFieldValue(window, 5);
    var a6 = getTextFieldValue(window, 6);
    var a7 = getTextFieldValue(window, 7);
    var a8 = getTextFieldValue(window, 8);
    var a9 = getTextFieldValue(window, 9);

    var ret3 = isAnd(isEqual("", a), isEqual(getToday(), a1), isEqual(
            getToday(), a2), isEqual("", a3), isEqual("", a4), isEqual("", a5),
            isEqual("", a6), isEqual("", a7), isEqual("", a8), isEqual("", a9));

    return ret && ret1 && ret2 && ret3;
}
function test170285_2() {
    var keys = { "客户" : "ls", "日期从" : getDay(-10), "日期到" : getToday(),
        "是否作废" : "否" };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var sum1 = 0;

    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["代收金额"]);

        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["代收金额"], sum1));

    logDebug("sum1=" + sum1);
    return ret;
}
function test170285_3() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "物流单");
    var keys = { "客户" : "ls", "日期从" : getDay(-60), "日期到" : getToday() };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck("批次");

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("日期");
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("物流商");
    ret = ret && sortByTitle("运单号");
    ret = ret && sortByTitle("代收货款");
    ret = ret && sortByTitle("代收金额", IS_NUM);
    ret = ret && sortByTitle("货款收讫");
    ret = ret && sortByTitle("物流备注");

    return ret;
}
function test170286() {
    tapMenu("销售开单", "核销+");
    var f0 = new TField("物流", TF, 0, "tt");
    var f1 = new TField("店员", TF, 4, "000,");
    var fields = [ f0, f1 ];
    setTFieldsValue(window, fields);

    tapButton(window, 2);
    var a = getTextFieldValue(getScrollView(), 0);

    var ret = isEqual(null, a);

    tapButton(window, 3);
    var a1 = getTextFieldValue(getScrollView(), 4);

    var ret1 = isEqual(null, a1);
    delay();
    tapButtonAndAlert(RETURN, OK);

    return ret && ret1;
}
function test170287() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "tt", "运单号" : "123", "备注" : "a", "代收金额" : "200" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "tt");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    var table1 = getTableView(window, -1);
    var cells = table1.cells();
    tap(cells[0]);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "更多.", "代收收款查询");
    var keys = { "门店" : "常青店", "日期从" : getDay(-20), "日期到" : getToday() };
    var fields = salesCollectionFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["现金"];
    var a1 = qr.data[0]["金额"];
    var ret = isAnd(isEqual("200", a), isEqual("200", a1));

    tapMenu("统计分析", "收支流水");
    var keys = [ "day1", "day2", "shop", "account" ];
    var fields = statisticAnalysisInOutAccountFields(keys);
    changeTFieldValue(fields["day1"], getToday());
    changeTFieldValue(fields["day2"], getToday());
    changeTFieldValue(fields["shop"], "常青店");
    changeTFieldValue(fields["account"], "现");
    query(fields);
    var qr1 = getQR();
    var b = qr1.data[0]["金额"];
    var b1 = qr1.data[0]["类型"];
    var ret1 = isEqual("代收收款", b1);

    tapMenu("销售开单", "按汇总", "按金额汇总");
    query();
    var qr2 = getQR();
    var c = qr2.data[0]["现金"];
    var c1 = qr2.data[0]["代收收款"];

    var ret = isEqual(c, b);

    tapMenu("统计分析", "综合汇总");
    var f2 = new TField("门店", TF_SC, 2, "常青店");
    var fields = [ f2 ];
    setTFieldsValue(window, fields);
    query(fields);
    tapFirstText();
    // 综合收支表
    var texts = getStaticTexts(getScrollView(-1));
    var qr3 = getQRverify(texts, "名称", 5);
    var d = qr3.data[0]["金额"];
    var ret = false;
    if (d >= 0) {
        var ret2 = true;
    }
    tapNaviLeftButton();

    logDebug("金额=" + a + "ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170288() {
    tapMenu("销售开单", "开 单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "tt", "运单号" : "123", "备注" : "a", "代收金额" : "200" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "tt");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    var table1 = getTableView(window, -1);
    var cells = table1.cells();
    tap(cells[0]);
    tapNaviRightButton();

    var f0 = new TField("现金", TF, 2, "100");
    var f1 = new TField("刷卡", TF, 6, "50");
    var f2 = new TField("汇款", TF, 12, "50");
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);

    tapButtonAndAlert(SAVE, OK);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "更多.", "代收收款查询");
    var keys = { "门店" : "常青店", "日期从" : getToday(), "日期到" : getToday() };
    var fields = salesCollectionFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    var qr = getQR();
    var a = Number(qr.counts["现金"]);
    var a1 = qr.data[0]["刷卡"];
    var a2 = qr.data[0]["汇款"];
    var a3 = qr.data[0]["金额"];

    var ret = isAnd(isEqual("50", a1), isEqual("50", a2), isEqual("200", a3));

    tapMenu("统计分析", "收支流水");
    var keys = [ "day1", "day2", "shop", "account" ];
    var fields = statisticAnalysisInOutAccountFields(keys);
    changeTFieldValue(fields["day1"], getToday());
    changeTFieldValue(fields["day2"], getToday());
    changeTFieldValue(fields["shop"], "常青店");
    changeTFieldValue(fields["account"], "现");
    setTFieldsValue(window, fields);
    query(fields);
    var qr1 = getQR();
    var b = qr1.data[0]["金额"];
    var b1 = qr1.data[0]["类型"];
    var b2 = qr1.data[0]["账户"];
    var ret1 = isAnd(isEqual("代收收款", b1), isEqual("现", b2));

    tapMenu("销售开单", "按批次查");
    query();
    var qr2 = getQR();
    var c = Number(qr2.counts["现金"]);

    tapMenu("统计分析", "综合汇总");
    query();
    var qr3 = getQR();
    var d = Number(qr3.counts["现金"]);
    var ret2 = isEqual(c + a, d);

    tapFirstText();
    // 综合收支表
    var texts = getStaticTexts(getScrollView(-1));
    var qr4 = getQRverify(texts, "名称", 5);
    var e = qr4.data[0]["金额"];
    var ret3 = false;
    if (e >= 0) {
        var ret3 = true;
    }
    tapNaviLeftButton();

    logDebug("a=" + a + "c=" + c + "d=" + d + "ret=" + ret + "ret1=" + ret1
            + "ret2=" + ret2 + "ret3=" + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170289() {
    tapMenu("销售开单", "核销+");
    var f0 = new TField("物流", TF_AC, 0, "yt");
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    var ret1 = false;
    var f = new TField("店员", TF_AC, 4, "88", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("888,yun", v)) {
            ret1 = true;
            break;
        }
    }
    delay();
    tapButton(window, RETURN);
    return ret1;
}
function test170290() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "tt", "运单号" : "123", "备注" : "a", "代收金额" : "200" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "tt");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    var table1 = getTableView(window, -1);
    var cells = table1.cells();
    tap(cells[0]);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    delay(2);
    tapButtonAndAlert(RETURN, OK);

    tapMenu("销售开单", "物流单");
    var keys1 = { "客户" : "lx", "门店" : "常青店", "物流商" : "天天物流", "运单号" : "123" }
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);
    var qr = getQR();
    var a = qr.data[0]["货款收讫"];
    var ret = isEqual("是", a);

    return ret;
}
function test170292() {
    tapMenu("销售开单", "物流单");
    var keys = { "运单号" : "123", "物流商" : "汇通快递" }
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.total;

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a", "代收金额" : "200" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "物流单");
    var keys1 = { "运单号" : "123", "物流商" : "汇通快递" }
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);
    var qr1 = getQR();
    var a1 = qr1.total;
    var ret = isEqual("1", sub(a1, a));

    tapMenu("销售开单", "按批次查");
    var keys1 = { "客户" : "lx", "门店" : "常青店" };
    var fields1 = salesQueryBatchFields(keys1);
    query(fields1);
    tapFirstText();
    tapButtonAndAlert("作 废", OK);
    tapPrompt();

    tapMenu("销售开单", "物流单");
    var keys2 = { "运单号" : "123", "物流商" : "汇通快递" }
    var fields2 = salesQueryLogisticsFields(keys2);
    query(fields2);
    var qr2 = getQR();
    var a2 = qr2.total;
    var ret1 = isEqual(a, a2);

    return ret && ret1;
}
function test170293() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "ht");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    var table1 = getTableView(window, -1);
    var cells = table1.cells();
    tap(cells[0]);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    delay(2);
    tapButtonAndAlert(RETURN, OK);

    tapMenu("销售开单", "物流单");
    var k = { "运单号" : "123", "物流商" : "汇通快递" }
    var keys = k;
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["货款收讫"];

    tapMenu("统计分析", "收支流水");
    var k1 = { "day1" : getToday(), "day2" : getToday(), "shop" : "常青店",
        "account" : "现" }
    var keys = k1;
    var fields = statisticAnalysisInOutAccountFields(keys);
    query(fields);
    var qr1 = getQR();
    var b = qr1.total;

    tapMenu("统计分析", "综合汇总");
    var f2 = new TField("门店", TF_SC, 2, "常青店");
    var fields = [ f2 ];
    query(fields);
    var r = getQR();
    var c = r.data[0]["现金"];
    tapFirstText();
    // 综合收支表
    var texts = getStaticTexts(getScrollView(-1));
    var r1 = getQRverify(texts, "名称", 5);
    var c1 = r1.data[0]["金额"];
    tapNaviLeftButton();

    tapMenu("销售开单", "更多.", "代收收款查询");
    tapFirstText();
    tapButtonAndAlert("作 废", OK);

    tapMenu("销售开单", "物流单");
    var keys = k;
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr2 = getQR();
    var a1 = qr2.data[0]["货款收讫"];
    var ret = isAnd(isEqual("否", a1), isEqual("是", a));

    tapMenu("统计分析", "收支流水");
    var keys = k1;
    var fields = statisticAnalysisInOutAccountFields(keys);
    query(fields);
    var qr3 = getQR();
    var b1 = qr3.total;
    var ret1 = isEqual("1", sub(b, b1));

    tapMenu("统计分析", "综合汇总");
    var f2 = new TField("门店", TF_SC, 2, "常青店");
    var fields = [ f2 ];
    setTFieldsValue(window, fields);
    query(fields);
    tapFirstText();
    var r2 = getQR();
    var c2 = r2.data[0]["现金"];
    var ret2 = isEqual("250", sub(c, c2));

    // 综合收支表
    var texts = getStaticTexts(getScrollView(-1));
    var r3 = getQRverify(texts, "名称", 5);
    var c3 = r3.data[0]["金额"];
    var ret3 = isEqual("250", sub(c1, c3));
    tapNaviLeftButton();

    logDebug("ret=" + ret + "ret1" + ret1 + "ret2" + ret2 + "ret3" + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170294() {
    tapMenu("统计分析", "收支流水");
    var k1 = { "day1" : getToday(), "day2" : getToday(), "shop" : "常青店",
        "account" : "现" }
    var keys = k1;
    var fields = statisticAnalysisInOutAccountFields(keys);
    query(fields);
    var qr = getQR();
    var b = qr.total;

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "tt", "运单号" : "123", "备注" : "a", "代收金额" : "200" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "tt");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    var table1 = getTableView(window, -1);
    var cells = table1.cells();
    tap(cells[0]);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    delay(2);
    tapButtonAndAlert(RETURN, OK);

    tapMenu("统计分析", "收支流水");
    var keys = k1;
    var fields = statisticAnalysisInOutAccountFields(keys);
    query(fields);
    var qr1 = getQR();
    var b1 = qr1.total;
    var ret1 = isEqual("1", sub(b1, b));

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "tt");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    var table1 = getTableView(window, -1);
    var cells = table1.cells();
    tap(cells[0]);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    delay(2);
    tapButtonAndAlert(RETURN, OK);

    tapMenu("统计分析", "收支流水");
    var keys = k1;
    var fields = statisticAnalysisInOutAccountFields(keys);
    query(fields);
    var qr2 = getQR();
    var b2 = qr2.total;
    var ret2 = isEqual("1", sub(b2, b1));

    logDebug("ret1" + ret1 + "ret2" + ret2);
    return ret1 && ret2;
}
function test170295() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF_AC, 0, "ht", -1, 0);
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    var table1 = getTableView(window, -1);
    var cells = table1.cells();
    tap(cells[0]);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    delay(2);
    tapButtonAndAlert(RETURN, OK);

    tapMenu("销售开单", "更多.", "代收收款查询");
    var keys1 = { "日期从" : getDay(-10), "日期到" : getToday() }
    var fields1 = salesCollectionFields(keys1);
    query(fields1);
    var qr1 = getQR();
    var a1 = qr1.data[0]["日期"];
    var a2 = qr1.data[0]["门店"];
    var a3 = qr1.data[0]["金额"];
    var ret1 = isAnd(isEqual(getToday("yy"), a1), isEqual("常青店", a2), isEqual(
            "180", a3));

    tapMenu("销售开单", "更多.", "代收收款查询");
    var keys2 = { "门店" : "常青店" }
    var fields2 = salesCollectionFields(keys2);
    query(fields2);
    var qr2 = getQR();
    var b1 = qr2.data[0]["日期"];
    var b2 = qr2.data[0]["门店"];
    var b3 = qr2.data[0]["金额"];
    var ret2 = isAnd(isEqual(getToday("yy"), b1), isEqual("常青店", b2), isEqual(
            "180", b3));

    tapMenu("销售开单", "更多.", "代收收款查询");
    query();
    var q = getQR();
    var num = Number(q.data[0]["物流核销批次"]);

    tapMenu("销售开单", "更多.", "代收收款查询");
    var keys3 = { "批次从" : num, "批次到" : num }
    var fields3 = salesCollectionFields(keys3);
    query(fields3);
    var qr3 = getQR();
    var c1 = qr3.data[0]["日期"];
    var c2 = qr3.data[0]["门店"];
    var c3 = qr3.data[0]["金额"];
    var c4 = qr3.data[0]["物流核销批次"];
    var ret3 = isAnd(isEqual(getToday("yy"), c1), isEqual("常青店", c2), isEqual(
            "180", c3), isEqual(num, c4));

    logDebug("ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3);
    return ret1 && ret2 && ret3;
}
function test170296() {
    tapMenu("销售开单", "更多.", "代收收款查询");
    query();
    var q = getQR();
    var num = q.data[0]["物流核销批次"];

    tapMenu("销售开单", "更多.", "代收收款查询");
    var keys = { "日期从" : getToday(), "日期到" : getToday(), "物流商" : "汇通快递",
        "批次从" : num, "批次到" : num, "门店" : "常青店", "是否作废" : "否" };
    var fields = salesCollectionFields(keys);
    query(fields);

    var qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["金额"];
    var c4 = qr.data[0]["物流核销批次"];
    var ret = isAnd(isEqual(getToday("yy"), a1), isEqual("常青店", a2), isEqual(
            "180", a3), isEqual(num, c4));

    logDebug("ret=" + ret);
    return ret;
}
function test170297() {
    tapMenu("销售开单", "更多.", "代收收款查询");
    var keys = { "日期从" : getDay(-60), "日期到" : getToday(), "批次从" : "1",
        "批次到" : "10000", "门店" : "常青店" };
    var fields = salesCollectionFields(keys);
    query(fields);

    tapButton(window, "清除");
    var a = getTextFieldValue(getScrollView(), 0);
    var a1 = getTextFieldValue(getScrollView(), 1);
    var a2 = getTextFieldValue(getScrollView(), 2);
    var a3 = getTextFieldValue(getScrollView(), 3);
    var a4 = getTextFieldValue(getScrollView(), 4);

    var ret = isAnd(isEqual(null, a), isEqual(null, a1), isEqual(null, a2),
            isEqual(null, a3), isEqual(null, a4));

    tapButtonAndAlert(RETURN, OK);

    logDebug("ret=" + ret);
    return ret;
}
function test170298() {
    tapMenu("销售开单", "更多.", "代收收款查询");
    var keys = { "日期从" : getDay(-20), "日期到" : getToday(), "是否作废" : "否" };
    var fields = salesCollectionFields(keys);
    query(fields);

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var qr = getQR();
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["金额"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["金额"],
            sum4));
    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4);
    return ret;
}
function test170298_1() {
    tapMenu("销售开单", "更多.", "代收收款查询");
    var ret1 = false;
    tap(getTextField(window, 2));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("圆通速递", v)) {
            ret1 = true;
            break;
        }
    }
    target.frontMostApp().mainWindow().popover().dismiss();
    query();

    tapMenu("销售开单", "更多.", "代收收款查询");
    var ret2 = false;
    tap(getTextField(window, 3));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("常青店", v)) {
            ret2 = true;
            break;
        }
    }
    target.frontMostApp().mainWindow().popover().dismiss();
    query();

    tapMenu("销售开单", "更多.", "代收收款查询");
    var keys = { "日期从" : getDay(-20), "日期到" : getToday(), "是否作废" : "否" };
    var fields = salesCollectionFields(keys);
    query(fields);

    // 点击翻页
    var ret = goPageCheck("物流核销批次");

    ret = ret && sortByTitle("物流商");
    ret = ret && sortByTitle("物流核销批次", IS_NUM);
    ret = ret && sortByTitle("日期");
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("备注");

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170300() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "tt", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "ht");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    var table1 = getTableView(window, -1);
    var cells = table1.cells();
    tap(cells[0]);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    delay(2);
    tapButtonAndAlert(RETURN, OK);

    tapMenu("销售开单", "物流单");
    var k = { "运单号" : "123", "物流商" : "汇通快递" }
    var keys = k;
    var fields = salesQueryLogisticsFields(keys);
    query(fields);

    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["客户"];
    var a6 = qr.data[0]["门店"];
    var a7 = qr.data[0]["货款收讫"];

    var ret = isAnd(isEqual("250", a), isEqual("汇通快递", a1), isEqual("123", a2),
            isEqual("a", a3), isEqual("是", a4), isEqual("李响", a5), isEqual(
                    "常青店", a6), isEqual("是", a7));
    return ret;
}
function addHang() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1", "备注" : "mxbz" },
                { "货品" : "8989", "数量" : "2" } ],
        "特殊货品" : { "抹零" : 50, "打包费" : 100 }, "现金" : 62, "刷卡" : [ 600, "交" ],
        "汇款" : [ 400, "建" ], "备注" : "zdbz", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay(3);
    tapButton(window, RETURN);
}
function test170303() {
    addHang();

    tapMenu("销售开单", "按挂单");
    query();
    tapFirstText();
    var f28 = new TField("货品", TF_AC, 28, "3035", -1, 0);
    var f31 = new TField("数量", TF, 31, "4");
    var fields = [ f28, f31 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert("挂 单", OK);
    delay(2);
    tapButtonAndAlert(RETURN, OK);
    delay();

    tapMenu("销售开单", "按挂单");
    query();
    var qr = getQR();
    var a = qr.data[0]["客户"];
    var b = qr.data[0]["日期"];
    var c = qr.data[0]["金额"];

    var ret = isAnd(isEqual("李四", a), isEqual(getToday(""), b), isEqual("1782",
            c));

    logDebug(" ret" + ret);
    return ret;
}
function test170305_1() {
    addHang();

    tapMenu("销售开单", "按挂单");
    var keys = { "日期从" : getDay(-60), "日期到" : getToday() };
    var fields = salesQueryGuaDanFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck("序号");

    var ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("日期");
    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("金额", IS_NUM);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("实收", IS_NUM);
    ret = ret && sortByTitle("代收", IS_NUM);
    ret = ret && sortByTitle("未结", IS_NUM);
    ret = ret && sortByTitle("还款/抵扣", IS_NUM);
    ret = ret && sortByTitle("客户分店");
    ret = ret && sortByTitle("配货");
    ret = ret && sortByTitle("备注");
    ret = ret && sortByTitle("操作日期");
    ret = ret && sortByTitle("操作人");

    logDebug("ret=" + ret);

    query();
    var qr = getQR();
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sum6 = 0;
    var sum7 = 0;

    var qr = getQR(window, getScrollView(), "序号", 20);
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["金额"]);
            sum3 += Number(qr.data[i]["现金"]);
            sum4 += Number(qr.data[i]["刷卡"]);
            sum5 += Number(qr.data[i]["汇款"]);
            sum6 += Number(qr.data[i]["实收"]);
            sum7 += Number(qr.data[i]["代收"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["金额"],
            sum2), isEqual(qr.counts["现金"], sum3), isEqual(qr.counts["刷卡"],
            sum4), isEqual(qr.counts["汇款"], sum5), isEqual(qr.counts["实收"],
            sum6), isEqual(qr.counts["代收"], sum7));

    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4
            + "sum5=" + sum5 + "sum6=" + sum6 + "sum7=" + sum7);
    return ret && ret1;
}

function test170305_2() {
    addHang();

    tapMenu("销售开单", "按挂单");
    var i;
    var ret = false;
    var f = new TField("款号", TF_AC, 0, "lx", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "李响")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("销售开单", "按挂单");
    var keys = { "客户" : "ls", "日期从" : getToday(), "日期到" : getToday(),
        "门店" : "常青店", "备注" : "zdbz", "店员" : "000" };
    var fields = salesQueryGuaDanFields(keys);
    query(fields);
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);

    addHang();

    tapMenu("销售开单", "按挂单");
    keys = { "客户" : "ls", "日期从" : getToday(), "日期到" : getToday(), "门店" : "常青店",
        "备注" : "zdbz", "店员" : "000", "批次从" : batch, "批次到" : batch + 1 };
    fields = salesQueryGuaDanFields(keys);
    query(fields);

    qr = getQR();
    var a1 = qr.data[0]["日期"];
    var a2 = qr.data[0]["门店"];
    var a3 = qr.data[0]["客户"];
    var a4 = qr.data[0]["店员"];
    var a5 = qr.data[0]["金额"];
    var a6 = qr.data[0]["数量"];
    var a7 = qr.data[0]["未结"];
    var a8 = qr.data[0]["配货"];
    var a9 = qr.data[0]["备注"];
    var a10 = qr.data[0]["操作日期"];
    var ret1 = isAnd(isEqual(getToday(""), a1), isEqual("常青店", a2), isEqual(
            "李四", a3), isEqual("总经理", a4), isEqual("1062", a5),
            isEqual("3", a6), isEqual("0", a7), isEqual("否", a8), isEqual(
                    "zdbz", a9), isIn(a10, getToday("")));

    tapButton(window, CLEAR);
    for (var i = 0; i < 9; i++) {
        if (i == 2 || i == 3) {
            var ret2 = ret && isEqual(getToday(), getTextFieldValue(window, i));
        } else {
            ret2 = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170304() {
    addHang();

    tapMenu("销售开单", "按挂单");
    var qr = getQR();
    var a = qr.data[0]["批次"];
    tapFirstText();
    tapButtonAndAlert("作 废", OK);
    tapPrompt();

    // tapMenu("销售开单", "按挂单");
    // var keys = { "批次从" : "1", "批次到" : "10000" };
    // var fields = salesQueryGuaDanFields(keys);
    // query(fields);
    // var qr = getQR();
    // var a1 = qr.total;
    // var ret = isEqual("0", a1);
    // 验证数据少一条

    logDebug("ret=" + ret);
    return ret;
}
function test170305() {
    addHang();

    tapMenu("销售开单", "按挂单");
    var keys2 = { "门店" : "常青店" }
    var fields2 = salesQueryGuaDanFields(keys2);
    query(fields2);
    var qr2 = getQR();
    var b1 = qr2.data[0]["日期"];
    var b2 = qr2.data[0]["门店"];
    var b3 = qr2.data[0]["金额"];
    var ret2 = isAnd(isEqual(getToday("yy"), b1), isEqual("常青店", b2), isEqual(
            "250", b3));

    tapMenu("销售开单", "按挂单");
    var keys3 = { "批次从" : "1", "批次到" : "10000" }
    var fields3 = salesQueryGuaDanFields(keys3);
    query(fields3);
    var qr3 = getQR();
    var c1 = qr3.data[0]["日期"];
    var c2 = qr3.data[0]["门店"];
    var c3 = qr3.data[0]["金额"];
    var ret3 = isAnd(isEqual(getToday("yy"), c1), isEqual("常青店", c2), isEqual(
            "250", c3));

    tapMenu("销售开单", "按挂单");
    var keys = { "客户" : "lx" }
    var fields = salesQueryGuaDanFields(keys);
    query(fields);
    var qr = getQR();
    var d1 = qr1.data[0]["日期"];
    var d2 = qr1.data[0]["门店"];
    var d3 = qr1.data[0]["金额"];
    var ret4 = isAnd(isEqual(getToday("yy"), d1), isEqual("常青店", d2), isEqual(
            "250", d3));

    tapMenu("销售开单", "按挂单");
    var keys = { "店员" : "000," }
    var fields = salesQueryGuaDanFields(keys);
    query(fields);
    var qr = getQR();
    var e1 = qr1.data[0]["日期"];
    var e2 = qr1.data[0]["门店"];
    var e3 = qr1.data[0]["金额"];
    var ret5 = isAnd(isEqual(getToday("yy"), e1), isEqual("常青店", e2), isEqual(
            "250", e3));

    tapMenu("销售开单", "按挂单");
    var keys = { "客户" : "lx", "日期从" : getDay(-60), "日期到" : getToday(),
        "批次从" : "1", "批次到" : "10000", "门店" : "常青店", "店员" : "000,总经理" };
    var fields = salesQueryGuaDanFields(keys);
    query(fields);

    var qr = getQR();
    var f1 = qr.data[0]["日期"];
    var f2 = qr.data[0]["门店"];
    var f3 = qr.data[0]["金额"];
    var ret6 = isAnd(isEqual(getToday("yy"), f1), isEqual("常青店", f2), isEqual(
            "250", f3));

    tapMenu("销售开单", "按挂单");
    var keys = { "客户" : "lx", "日期从" : getDay(-60), "日期到" : getToday(),
        "批次从" : "1", "批次到" : "10000", "门店" : "常青店", "店员" : "000,总经理" };
    var fields = salesQueryGuaDanFields(keys);

    tapButton(window, "清除");
    var a = getTextFieldValue(getScrollView(), 0);
    var a1 = getTextFieldValue(getScrollView(), 1);
    var a4 = getTextFieldValue(getScrollView(), 4);
    var a5 = getTextFieldValue(getScrollView(), 5);
    var a6 = getTextFieldValue(getScrollView(), 6);
    var a7 = getTextFieldValue(getScrollView(), 7);
    var a8 = getTextFieldValue(getScrollView(), 8);

    var ret7 = isAnd(isEqual(null, a), isEqual(null, a1), isEqual(getToday(),
            a2), isEqual(getToday(), a3), isEqual(null, a4), isEqual(null, a5),
            isEqual(null, a6), isEqual(null, a7), isEqual(null, a8));

    tapButtonAndAlert(RETURN, OK);

    logDebug("ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3 + "ret4=" + ret4
            + "ret5=" + ret5 + "ret6=" + ret6 + "ret7=" + ret7);
    return ret1 && ret2 && ret3;
}
function test170306() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按金额汇总");
    var keys = { "day1" : getToday(), "day2" : getToday() };
    var fields = salesCodeFields(keys);
    query(fields);
    var qr = getQR();
    var a = Number(qr.data[0]["现金"]);
    var a1 = Number(qr.data[0]["刷卡"]);
    var a2 = Number(qr.data[0]["汇款"]);
    var a3 = Number(qr.data[0]["代收"]);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "代收" : { "物流商" : "yt", "运单号" : "1234", "代收金额" : "100" }, "现金" : "500",
        "刷卡" : [ 500, "交" ], "汇款" : [ 400, "农" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按金额汇总");
    var keys1 = { "day1" : getToday(), "day2" : getToday() };
    var fields1 = salesCodeFields(keys1);
    query(fields1);
    var qr1 = getQR();
    var b = Number(qr1.data[0]["现金"]);
    var b1 = Number(qr1.data[0]["刷卡"]);
    var b2 = Number(qr1.data[0]["汇款"]);
    var b3 = Number(qr1.data[0]["代收"]);
    var b4 = qr1.data[0]["日期"];

    var ret = isAnd(isEqual("500", sub(b, a)), isEqual("500", sub(b1, a1)),
            isEqual("400", sub(b2, a2)), isEqual("100", sub(b3, a3)), isEqual(
                    getToday("yy"), b4));

    return ret;
}
function test170307() {
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
    // "现金" : "1500" };
    // editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按金额汇总");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = salesPriceFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);

    var ret = isAnd(isEqual(getToday(), a), isEqual(getToday(), a1));

    logDebug("ret=" + ret);
    return ret;
}
function test170307_1() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "1" }, { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 100, "打包费" : 100 } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按金额汇总");
    var keys = { "日期从" : getDay(-300), "到" : getToday() };
    var fields = salesPriceFields(keys);
    query(fields);
    // 点击翻页
    var ret = goPageCheck("日期");

    var ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("代收", IS_NUM);

    tapButton(window, QUERY);
    var qr = getQR();
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;

    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["代收"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["代收"],
            sum4));

    // logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" +
    // sum4);
    return ret && ret1;
}

function test170308() {
    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr1 = getQR();
    var kc = qr1.data[0]["库存"];

    tapMenu("销售开单", "按汇总", "按款号汇总");
    keys = { "日期从" : getDay(-30), "日期到" : getToday(), "厂商" : "vell",
        "门店" : "常青店", "款号" : "3035", "上架从" : "2015-10-1", "上架到" : getToday(),
        "颜色" : "均色", "尺码" : "均码", "品牌" : "Adidas" };
    fields = salesCodeFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["名称"];
    var a1 = qr.data[0]["上架日期"];
    var a2 = qr.data[0]["颜色"];
    var a3 = qr.data[0]["尺码"];
    var a4 = qr.data[0]["库存"];
    var a5 = qr.data[0]["实销数"];

    var ret = isAnd(isEqual("jkk", a), isEqual("15-10-13", a1), isEqual("均色",
            a2), isEqual("均码", a3), isEqual(kc, a4));

    tapMenu("销售开单", "按汇总", "按款号汇总");
    keys = { "日期从" : getDay(-30), "日期到" : getToday(), "门店" : "常青店" };
    fields = salesCodeFields(keys);
    query(fields);
    var qr = getQR();
    totalSale = qr.counts["实销数"];

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-30), "日期到" : getToday(), "门店" : "常青店",
        "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    qr = getQR();

    var ret1 = isEqual(totalSale, qr.counts["数量"]);

    tapMenu("统计分析", "综合汇总");
    var keys = { "day1" : getDay(-30), "day2" : getToday(), "shop" : "常青店" };
    var fields = statisticAnalysisSynthesisFields(keys);
    query(fields);
    qr = getQR();

    var ret = isEqual(totalSale, qr.counts["实销数"]);

    logDebug("ret=" + ret);
    return ret && ret1;
}
function test170309() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按款号汇总");
    var i;
    var ret = false;
    var f = new TField("款号", TF_AC, 4, "303", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "3035,jkk")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    f = new TField("厂商", TF_AC, 3, "v", -1);
    cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "Vell")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("销售开单", "按汇总", "按款号汇总");
    var keys = { "日期从" : getDay(-10), "日期到" : getToday(), "厂商" : "rt",
        "门店" : "常青店", "款号" : "k300", "上架从" : "2015-10-1", "上架到" : getToday(),
        "颜色" : "均色", "尺码" : "均码", "品牌" : "Adidas" };
    var fields = salesCodeFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);
    var a4 = getTextFieldValue(window, 4);
    var a5 = getTextFieldValue(window, 5);
    var a6 = getTextFieldValue(window, 6);
    var a7 = getTextFieldValue(window, 7);
    var a8 = getTextFieldValue(window, 8);
    var a9 = getTextFieldValue(window, 9);

    var ret1 = isAnd(isEqual(getToday(), a), isEqual(getToday(), a1), isEqual(
            "", a2), isEqual("", a3), isEqual("", a4), isEqual("", a5),
            isEqual(getToday(), a6), isEqual("", a7), isEqual("", a8), isEqual(
                    "", a9));

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170310_170311_170312() {
    // tapMenu("销售开单", "开 单+");
    // var json = {
    // "客户" : "ls",
    // "店员" : "000",
    // "明细" : [ { "货品" : "3035", "数量" : "1" }, { "货品" : "8989", "数量" : "1" } ],
    // "特殊货品" : { "抹零" : 100, "打包费" : 100 } };
    // editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按款号汇总");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = salesPriceFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck("款号");

    var ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("上架日期", IS_DATE2);
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("实销数", IS_NUM);
    ret = ret && sortByTitle("库存", IS_NUM);
    //
    // logDebug("ret=" + ret);

    query();
    var qr = getQR();
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;

    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["实销数"]);
            sum2 += Number(qr.data[i]["库存"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["实销数"], sum1), isEqual(qr.counts["库存"],
            sum2));

    // logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" +
    // sum4);
    return ret && ret1;
}
function test170313() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "-5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按退货汇总");
    var keys = { "客户" : "xjkh1", "日期从" : getToday(), "到" : getToday(),
        "门店" : "常青店", "类型" : "退货" };
    var fields = salesReturnFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["名称"];

    var ret = isEqual("退货", a);

    return ret;
}
function test170314() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "-5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按退货汇总");
    var ret = false;
    tap(getTextField(window, 3));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("退货", v)) {
            ret = true;
            break;
        }
    }
    target.frontMostApp().mainWindow().popover().dismiss();
    query();

    tapMenu("销售开单", "按汇总", "按退货汇总");
    var keys = { "客户" : "xjkh1", "日期从" : getToday(), "到" : getToday(),
        "门店" : "常青店", "类型" : "退货" };
    var fields = salesReturnFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);
    var a4 = getTextFieldValue(window, 4);

    var ret = isAnd(isEqual("", a), isEqual(getToday(), a1), isEqual(
            getToday(), a2), isEqual("", a3), isEqual("", a4));

    logDebug("ret=" + ret);
    return ret;
}
function test170315_170316_170317() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "-5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按退货汇总");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = salesReturnFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    // 点击翻页
    var ret = goPageCheck("门店");

    var ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("数量", IS_NUM);
    ret = ret && sortByTitle("退货均价", IS_NUM);
    ret = ret && sortByTitle("小计", IS_NUM);
    //
    // logDebug("ret=" + ret);

    query();
    var qr = getQR();
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;

    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["数量"]);
            sum2 += Number(qr.data[i]["小计"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["数量"], sum1), isEqual(qr.counts["小计"],
            sum2));

    // logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" +
    // sum4);
    return ret && ret1;
}
function test170318() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "-5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按退货汇总");
    var keys = { "日期从" : getToday(), "到" : getToday(), "门店" : "常青店",
        "类型" : "退货" };
    var fields = salesReturnFields(keys);
    query(fields);

    tapFirstText();

    var qr = getQR2(getScrollView(-1, 0), "店员", "小计");
    var a = qr.data[0]["客户"];
    var a1 = qr.data[0]["款号"];
    var a2 = qr.data[0]["名称"];
    var a3 = qr.data[0]["数量"];
    var a4 = qr.data[0]["单价"];
    var a5 = qr.data[0]["小计"];
    tapNaviLeftButton();

    var ret = isAnd(isEqual("下级客户1", a), isEqual("k300", a1),
            isEqual("铅笔裤", a2), isEqual("-5", a3), isEqual("300", a4), isEqual(
                    "-1500", a5));

    return ret;
}
function test170319() {
    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "日期从" : getDay(-30), "到" : getToday(), "门店" : "常青店",
        "店员" : "000" };
    var fields = salesStaffFields(keys);
    query(fields);

    var qr = getQR();

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sum6 = 0;
    var sum7 = 0;
    var sum8 = 0;
    var sum9 = 0;
    var sum10 = 0;
    var sum11 = 0;
    var sum12 = 0;
    var sum13 = 0;

    var qr = getQR();
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["代收"]);
            sum5 += Number(qr.data[i]["退额"]);
            sum6 += Number(qr.data[i]["销售数"]);
            sum7 += Number(qr.data[i]["退货数"]);
            sum8 += Number(qr.data[i]["实销数"]);
            sum9 += Number(qr.data[i]["实销额"]);
            sum10 += Number(qr.data[i]["抹零"]);
            sum11 += Number(qr.data[i]["实销额2"]);
            sum12 += Number(qr.data[i]["其他费用"]);
            sum13 += Number(qr.data[i]["欠款"]);

        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["代收"],
            sum4), isEqual(qr.counts["退额"], sum5), isEqual(qr.counts["销售数"],
            sum6), isEqual(qr.counts["退货数"], sum7), isEqual(qr.counts["实销数"],
            sum8), isEqual(qr.counts["实销额"], sum9), isEqual(qr.counts["抹零"],
            sum10), isEqual(qr.counts["实销额2"], sum11), isEqual(
            qr.counts["其他费用"], sum12));
    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4
            + "sum5=" + sum5 + "sum6=" + sum6 + "sum7=" + sum7 + "sum8=" + sum8
            + "sum9=" + sum9 + "sum10=" + sum10 + "sum11=" + sum11 + "sum12="
            + sum12 + "sum13=" + sum13);

    return ret;
}
function test170320() {
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
    // "现金" : "1500" };
    // editSalesBillNoColorSize(json);
    //
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "-1" } ],
    // "现金" : "1500" };
    // editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var ret = false;
    tap(getTextField(window, 3));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("常青店", v)) {
            ret = true;
            break;
        }
    }
    target.frontMostApp().mainWindow().popover().dismiss();
    query();

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "日期从" : getToday(), "到" : getToday(), "店员" : "000",
        "门店" : "常青店" };
    var fields = salesStaffFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);

    var ret1 = isAnd(isEqual(getToday(), a), isEqual(getToday(), a1), isEqual(
            "", a2), isEqual("", a3));

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170321_170322_170323() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "-5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = salesStaffFields(keys);
    query(fields);

    // 点击翻页
    var ret = goPageCheck("门店");

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("代收", IS_NUM);
    ret = ret && sortByTitle("退额");
    ret = ret && sortByTitle("销售数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);
    ret = ret && sortByTitle("实销数", IS_NUM);
    ret = ret && sortByTitle("实销额", IS_NUM);
    ret = ret && sortByTitle("抹零");
    ret = ret && sortByTitle("其他费用");
    ret = ret && sortByTitle("实销额2");
    ret = ret && sortByTitle("欠款", IS_NUM);

    return ret;
}
function test170325() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按客户销售");
    var keys = { "到" : getToday(), "客户" : "ls" };
    var fields = salesCustomerConsumeFields(keys);
    query(fields);
    var qr = getQR();

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum5 = 0;
    var sum6 = 0;
    var sum7 = 0;
    var sum8 = 0;
    var sum9 = 0;

    var qr = getQR(window, getScrollView(), "序号", 10);
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum6 += Number(qr.data[i]["销售数"]);
            sum7 += Number(qr.data[i]["退货数"]);
            sum8 += Number(qr.data[i]["实销数"]);
            sum9 += Number(qr.data[i]["实销额"]);

        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["销售数"],
            sum6), isEqual(qr.counts["退货数"], sum7), isEqual(qr.counts["实销数"],
            sum8), isEqual(qr.counts["实销额"], sum9));
    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum6=" + sum6
            + "sum7=" + sum7 + "sum8=" + sum8 + "sum9=" + sum9);

    return ret;
}
function test170326() {
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
    // "现金" : "1500" };
    // editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按客户销售");
    var i;
    var ret = false;
    var f = new TField("客户", TF_AC, 2, "ls", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "李四")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("销售开单", "按汇总", "按客户销售");
    var keys = { "到" : getToday(), "客户" : "ls" };
    var fields = salesCustomerConsumeFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var ret1 = isAnd(isEqual(getToday(), a), isEqual(getToday(), a1), isEqual(
            "", a2));

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170327_170328_170329_170330() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按客户销售");
    var keys = { "日期从" : getDay(-30), "到" : getToday() };
    var fields = salesCustomerConsumeFields(keys);
    query(fields);

    // 点击翻页
    var ret = goPageCheck("名称");

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("代收");
    ret = ret && sortByTitle("销售数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);
    ret = ret && sortByTitle("实销数", IS_NUM);
    ret = ret && sortByTitle("实销额", IS_NUM);

    return ret;
}
function test170331() {
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ] };
    // editSalesBillNoColorSize(json);
    // var optime=json["操作日期"];

    tapMenu("销售开单", "按汇总", "按客户销售");
    var keys = { "到" : getToday(), "客户" : "ls" };
    var fields = salesCustomerConsumeFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0][""];

    tapFirstText();
    query();
    var qr1 = getQR();
    var b = qr1.data[0]["批次"];
    var b1 = qr1.data[0]["客户"];
    var b2 = qr1.data[0]["金额"];
    var b3 = qr1.data[0]["操作日期"];

    tapFirstText();
    debugElemenTree(window);
    var texts = getStaticTexts(getScrollView(1));
    var index = getArrayIndexIn(texts, "批次号");
    var pici = getStaticTextValue(getPopOrView(), index + 1);
    var zonge = getStaticTextValue(getPopOrView(), index + 5);

    tapNaviLeftButton();
    tapNaviLeftButton();

    var ret = isAnd(isEqual(b, pici), isEqual("李四", b1), isEqual(b2, zonge),
            isEqual(optime, b3));

    return ret;
}
function test170332() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "0" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按客户未结");
    var keys = { "到" : getToday(), "客户" : "ls" };
    var fields = salesCustomerOutstandingFields(keys);
    query(fields);

    var qr = getQR();

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var sum6 = 0;
    var sum7 = 0;
    var sum8 = 0;
    var sum9 = 0;
    var sum10 = 0;

    var qr = getQR(window, getScrollView(), "序号", 12);
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["现金"]);
            sum2 += Number(qr.data[i]["刷卡"]);
            sum3 += Number(qr.data[i]["汇款"]);
            sum4 += Number(qr.data[i]["代收"]);
            sum6 += Number(qr.data[i]["销售数"]);
            sum7 += Number(qr.data[i]["退货数"]);
            sum8 += Number(qr.data[i]["实销数"]);
            sum9 += Number(qr.data[i]["实销额"]);
            sum10 += Number(qr.data[i]["未结"]);

        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["现金"], sum1), isEqual(qr.counts["刷卡"],
            sum2), isEqual(qr.counts["汇款"], sum3), isEqual(qr.counts["代收"],
            sum4), isEqual(qr.counts["销售数"], sum6), isEqual(qr.counts["退货数"],
            sum7), isEqual(qr.counts["实销数"], sum8), isEqual(qr.counts["实销额"],
            sum9), isEqual(qr.counts["未结"], sum10));
    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4
            + "sum6=" + sum6 + "sum7=" + sum7 + "sum8=" + sum8 + "sum9=" + sum9
            + "sum10=" + sum10);

    return ret;
}
function test170333() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : 200, "刷卡" : [ 100, "交" ], "汇款" : [ 100, "建" ], "备注" : "xx" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按客户未结");
    var i;
    var ret = false;
    var f = new TField("客户", TF_AC, 2, "ls", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "李四")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("销售开单", "按汇总", "按客户未结");
    var keys = { "到" : getToday(), "客户" : "ls", "日期从" : getDay(-30),
        "店员" : "000," };
    var fields = salesCustomerOutstandingFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);
    var ret = isAnd(isEqual(getToday(), a), isEqual(getToday(), a1), isEqual(
            "", a2), isEqual("", a3));

    logDebug("ret=" + ret);
    return ret;
}
function test170334_70335_170336() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : 200, "刷卡" : [ 1000, "交" ], "汇款" : [ 1000, "建" ], "备注" : "xx" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按客户未结");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesCustomerOutstandingFields(keys);
    query(fields);

    var ret = goPageCheck("名称");

    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("店员");
    ret = ret && sortByTitle("现金", IS_NUM);
    ret = ret && sortByTitle("刷卡", IS_NUM);
    ret = ret && sortByTitle("汇款", IS_NUM);
    ret = ret && sortByTitle("代收", IS_NUM);
    ret = ret && sortByTitle("销售数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);
    ret = ret && sortByTitle("实销数", IS_NUM);
    ret = ret && sortByTitle("实销额", IS_NUM);
    ret = ret && sortByTitle("未结", IS_NUM);

    return ret;
}
function test170337() {

}
function test170338() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按客户上货");
    var keys = { "上架到" : getToday(), "客户" : "ls", "款号" : "k300",
        "品牌" : "Adidas" };
    var fields = salesCustomerSupplyFields(keys);
    query(fields);

    var qr = getQR();

    var sum1 = 0, sum2 = 0;

    var qr = getQR();
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["实销数"]);
            sum2 += Number(qr.data[i]["实销额"]);
        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["实销数"], sum1), isEqual(qr.counts["实销额"],
            sum2));
    logDebug("sum1=" + sum1 + "sum2=" + sum2);

    return ret;
}
function test170339() {
    tapMenu("销售开单", "按汇总", "按客户上货");
    var keys = { "客户" : "ls", "上架从" : "2015-1-1", "上架到" : getToday(),
        "款号" : "k300", "品牌" : "Adidas", "日期从" : getDay(-10), "日期到" : getToday() };
    var fields = salesCustomerSupplyFields(keys);
    query(fields);

    var qr = getQR();
    var a = qr.data[0]["品牌"];
    var ret = isEqual("Adidas", a);

    return ret;
}
function test170340() {
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
    // "现金" : "1500" };
    // editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按客户上货");
    var i;
    var ret = false;
    var f = new TField("款号", TF_AC, 3, "303", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "3035,jkk")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    query();

    tapMenu("销售开单", "按汇总", "按客户上货");
    var keys = { "客户" : "ls", "上架从" : "2015-1-1", "上架到" : getToday(),
        "款号" : "k300", "品牌" : "Adidas", "日期从" : getDay(-10), "日期到" : getToday() };
    var fields = salesCustomerSupplyFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);
    var a4 = getTextFieldValue(window, 4);
    var a5 = getTextFieldValue(window, 5);
    var a6 = getTextFieldValue(window, 6);
    var ret1 = isAnd(isEqual("", a), isEqual("", a1), isEqual(getToday(), a2),
            isEqual("", a3), isEqual("", a4), isEqual(getToday(), a5), isEqual(
                    getToday(), a6));

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170341_70342_170343_170346() {
    tapMenu("销售开单", "按汇总", "按客户上货");
    var keys = { "日期从" : getDay(-30), "客户" : "xw" };
    var fields = salesCustomerSupplyFields(keys);
    query(fields);

    var ret = goPageCheck("款号", 3);

    query();
    ret = ret && sortByTitle("客户");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("品牌");
    ret = ret && sortByTitle("实销数", IS_NUM);
    ret = ret && sortByTitle("实销额", IS_NUM);
    ret = ret && sortByTitle("最后一次拿货", IS_DATE2);
    ret = ret && sortByTitle("拿货次数", IS_NUM);

    return ret;
}
function test170344() {

}
function test170345() {
    tapMenu("销售开单", "按汇总", "按客户上货");
    var keys = { "上架日期到" : getToday(), "客户" : "ls", "款号" : "k300",
        "品牌" : "Adidas" };
    var fields = salesCustomerSupplyFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["拿货次数"];

    tapFirstText();
    var qr1 = getQR2(getScrollView(1), "批次", "操作日期");
    var b = qr1.total;
    tapNaviLeftButton();

    var ret = isEqual(a, b);

    return ret;
}
function test170351() {
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
    // "现金" : "1500" };
    // editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "客户对账单");
    var i;
    var ret = false;
    var f = new TField("客户", TF_AC, 0, "ls", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "李四")) {
            ret = true;
            break;
        }
    }
    tapKeyboardHide();

    tapButton(window, CLEAR);

    tapMenu("销售开单", "按汇总", "客户对账单");
    var ret = false;
    tap(getTextField(window, 1));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("常青店", v)) {
            ret = true;
            break;
        }
    }
    tapKeyboardHide();
    target.frontMostApp().mainWindow().popover().dismiss();
    tapButton(window, CLEAR);

    tapMenu("销售开单", "按汇总", "客户对账单");
    var keys = { "日期从" : getDay(-30), "到" : getToday(), "客户" : "ls",
        "门店" : "常青店" };
    var fields = salesQueryCustomerFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);
    var a3 = getTextFieldValue(window, 3);

    var ret = isAnd(isEqual("", a), isEqual("", a1), isEqual(getToday(), a2),
            isEqual(getToday(), a3));

    logDebug("ret=" + ret);
    return ret;
}
function test170356() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按类别汇总");
    var keys = { "类别" : "登山服" };
    var fields = salesTypeFields(keys);
    query(fields);

    var qr = getQR();

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;

    var qr = getQR(window, getScrollView(), "序号", 6);
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["销售数"]);
            sum2 += Number(qr.data[i]["退货数"]);
            sum3 += Number(qr.data[i]["实销数"]);
            sum4 += Number(qr.data[i]["实销额"]);

        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret = isAnd(isEqual(qr.counts["销售数"], sum1), isEqual(qr.counts["退货数"],
            sum2), isEqual(qr.counts["实销数"], sum3), isEqual(qr.counts["实销额"],
            sum4));
    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4);

    return ret;
}
function test170357() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按类别汇总");
    var ret = false;
    tap(getTextField(window, 2));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("登山服", v)) {
            ret = true;
            break;
        }
    }
    tapKeyboardHide();
    target.frontMostApp().mainWindow().popover().dismiss();
    tapButton(window, CLEAR);

    tapMenu("销售开单", "按汇总", "按类别汇总");
    var keys = { "日期从" : getDay(-10), "到" : getToday(), "类别" : "登山服" };
    var fields = salesTypeFields(keys);
    query(fields);
    var qr = getQR();

    var a = qr.data[0]["类别"];

    var ret = isAnd(isEqual("登山服", a));

    tapButton(window, CLEAR);
    var b = getTextFieldValue(window, 0);
    var b1 = getTextFieldValue(window, 1);
    var b2 = getTextFieldValue(window, 2);

    var ret1 = isAnd(isEqual(getToday(), b), isEqual(getToday(), b1), isEqual(
            "", b2));

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170358_170359_170360() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按类别汇总");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesTypeFields(keys);
    query(fields);

    var ret = goPageCheck("类别");

    var ret = true;
    ret = ret && sortByTitle("类别");
    ret = ret && sortByTitle("销售数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);
    ret = ret && sortByTitle("实销数", IS_NUM);
    ret = ret && sortByTitle("实销额", IS_NUM);

    return ret;
}
function test170361() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按厂商汇总");
    var keys = { "厂商" : "Vell", "日期从" : getToday(), "到" : getToday() };
    var fields = salesProviderFields(keys);
    query(fields);

    var qr = getQR();
    var a = qr.data[0]["厂商"];

    var ret = isAnd(isEqual("Vell", a));

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;

    var qr = getQR(window, getScrollView(), "序号", 6);
    var totalPageNo = qr.totalPageNo;
    for (var j = 1; j <= totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["销售数"]);
            sum2 += Number(qr.data[i]["退货数"]);
            sum3 += Number(qr.data[i]["实销数"]);
            sum4 += Number(qr.data[i]["实销额"]);

        }
        if (j < totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    var ret1 = isAnd(isEqual(qr.counts["销售数"], sum1), isEqual(qr.counts["退货数"],
            sum2), isEqual(qr.counts["实销数"], sum3), isEqual(qr.counts["实销额"],
            sum4));
    logDebug("sum1=" + sum1 + "sum2=" + sum2 + "sum3=" + sum3 + "sum4=" + sum4);

    return ret && ret1;
}
function test170363() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按厂商汇总");
    var i;
    var ret = false;
    var f = new TField("厂商", TF_AC, 0, "v", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "Vell")) {
            ret = true;
            break;
        }
    }
    tapKeyboardHide();

    tapMenu("销售开单", "按汇总", "按厂商汇总");
    var keys = { "厂商" : "Vell", "日期从" : getToday(), "到" : getToday() };
    var fields = salesProviderFields(keys);
    query(fields);

    tapButton(window, CLEAR);
    var a = getTextFieldValue(window, 0);
    var a1 = getTextFieldValue(window, 1);
    var a2 = getTextFieldValue(window, 2);

    var ret = isAnd(isEqual("", a), isEqual(getToday(), a1), isEqual(
            getToday(), a2));

    logDebug("ret=" + ret);
    return ret;
}
function test170363_1() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k300", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按厂商汇总");
    var keys = { "日期从" : getDay(-30) };
    var fields = salesProviderFields(keys);
    query(fields);

    var ret = goPageCheck("厂商");

    var ret = true;
    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("销售数", IS_NUM);
    ret = ret && sortByTitle("退货数", IS_NUM);
    ret = ret && sortByTitle("实销数", IS_NUM);
    ret = ret && sortByTitle("实销额", IS_NUM);

    return ret;
}
function test170365() {
    // 全局设置开单模式：18整单折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "18", "数值" : [ "整单折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按批次查");
    var keys1 = { "客户" : "ls", "门店" : "常青店", "作废挂单" : "挂单" };
    var fields1 = salesQueryBatchFields(keys1);
    query(fields1);
    tapFirstText();

    var k2 = getTextFieldValue(window, 3);
    var k3 = getTextFieldValue(window, 4);
    var ret = isAnd(isEqual("316", k2), isEqual("316", k3));

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售开单", "物流单");
    var k = { "运单号" : "123", "物流商" : "汇通快递" };
    var keys = k;
    var fields = salesQueryLogisticsFields(keys);
    query(fields);

    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["客户"];
    var a6 = qr.data[0]["门店"];
    var a7 = qr.data[0]["货款收讫"];

    var ret1 = isAnd(isEqual("316", a), isEqual("汇通快递", a1),
            isEqual("123", a2), isEqual("a", a3), isEqual("是", a4), isEqual(
                    "李四", a5), isEqual("常青店", a6), isEqual("否", a7));

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170366() {
    // 全局设置开单模式：18整单折扣+代收
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按挂单");
    query();
    tapFirstText(getScrollView(), "序号", 20);
    delay();

    var f15 = new TField("货品", TF_AC, 14, "3035", -1, 0);
    var f18 = new TField("数量", TF, 17, "1");
    var fields = [ f15, f18 ];
    setTFieldsValue(getScrollView(), fields);

    tapStaticText(window, "代收");
    var d20 = new TField("代收金额", TF, 20, "500");
    var fields = [ d20 ];
    setTFieldsValue(window, fields);
    tapNaviRightButton();
    delay();

    tapButtonAndAlert("挂 单", OK);
    tapPrompt();
    delay();
    tapButtonAndAlert(RETURN, OK);

    tapMenu("销售开单", "按挂单");
    query();
    tapFirstText(getScrollView(), "序号", 20);
    var k4 = getTextFieldValue(window, 4);
    var ret = isAnd(isEqual("500", k4));

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售开单", "物流单");
    var keys1 = { "运单号" : "123", "物流商" : "汇通快递" };
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);

    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["客户"];
    var a6 = qr.data[0]["门店"];
    var a7 = qr.data[0]["货款收讫"];

    var ret1 = isAnd(isEqual("500", a), isEqual("汇通快递", a1),
            isEqual("123", a2), isEqual("a", a3), isEqual("是", a4), isEqual(
                    "李四", a5), isEqual("常青店", a6), isEqual("否", a7));

    return ret && ret1;
}
function test170368() {
    // 全局设置开单模式为：18整单折扣+代收
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "8989", "数量" : "1" }, { "货品" : "3035", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "物流单");
    var keys1 = { "运单号" : "123", "物流商" : "汇通快递" };
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "ht");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    var table1 = getTableView(window, -1);
    var cells = table1.cells();
    tap(cells[0]);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "物流单");
    var keys1 = { "运单号" : "123", "物流商" : "汇通快递" };
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);

    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["客户"];
    var a6 = qr.data[0]["门店"];
    var a7 = qr.data[0]["货款收讫"];

    var ret1 = isAnd(isEqual("500", a), isEqual("汇通快递", a1),
            isEqual("123", a2), isEqual("a", a3), isEqual("是", a4), isEqual(
                    "李四", a5), isEqual("常青店", a6), isEqual("是", a7));

    tapMenu("销售开单", "更多.", "代收收款查询");
    var keys1 = { "日期从" : getToday(), "日期到" : getToday() }
    var fields1 = salesCollectionFields(keys1);
    query(fields1);
    var qr1 = getQR();
    var a1 = qr1.data[0]["日期"];
    var a2 = qr1.data[0]["门店"];
    var a3 = qr1.data[0]["金额"];
    var ret2 = isAnd(isEqual(getToday("yy"), a1), isEqual("常青店", a2), isEqual(
            "500", a3));

    return ret1 && ret2;
}
function test170368_1() {
    // 19产品折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "19", "数值" : [ "产品折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = {
        "明细" : [ { "货品" : "8989", "数量" : "1" }, { "货品" : "3035", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "ht");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    var table1 = getTableView(window, -1);
    var cells = table1.cells();
    tap(cells[0]);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "物流单");
    var keys1 = { "运单号" : "123", "物流商" : "汇通快递" };
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);

    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["客户"];
    var a6 = qr.data[0]["门店"];
    var a7 = qr.data[0]["货款收讫"];

    var ret1 = isAnd(isEqual("654", a), isEqual("汇通快递", a1),
            isEqual("123", a2), isEqual("a", a3), isEqual("是", a4), isEqual(
                    "李四", a5), isEqual("常青店", a6), isEqual("是", a7));

    tapMenu("销售开单", "更多.", "代收收款查询");
    var keys1 = { "日期从" : getToday(), "日期到" : getToday() }
    var fields1 = salesCollectionFields(keys1);
    query(fields1);
    var qr1 = getQR();
    var a1 = qr1.data[0]["日期"];
    var a2 = qr1.data[0]["门店"];
    var a3 = qr1.data[0]["金额"];
    var ret2 = isAnd(isEqual(getToday("yy"), a1), isEqual("常青店", a2), isEqual(
            "654", a3));

    return ret1 && ret2;
}
function test170369() {
    // 全局设置开单模式为：18整单折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "18", "数值" : [ "整单折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "日期从" : getToday(), "到" : getToday(), "门店" : "常青店",
        "店员" : "000,总经理" };
    var fields = salesStaffFields(keys);
    query(fields);

    var qr = getQR();
    var a = Number(qr.data[0]["代收"]);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys1 = { "日期从" : getToday(), "到" : getToday(), "门店" : "常青店",
        "店员" : "000,总经理" };
    var fields1 = salesStaffFields(keys1);
    query(fields1);

    var qr1 = getQR();
    var a1 = Number(qr1.data[0]["代收"]);

    var ret = isEqual(a + 310, a1);

    return ret;
}
function test170370() {
    // 全局设置开单模式为：18整单折扣+代收
    tapMenu("销售开单", "按汇总", "按金额汇总");
    var keys = { "日期从" : getToday(), "到" : getToday() };
    var fields = salesStaffFields(keys);
    query(fields);

    var qr = getQR();
    var a = Number(qr.data[0]["代收"]);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按金额汇总");
    var keys1 = { "日期从" : getToday(), "到" : getToday() };
    var fields1 = salesPriceFields(keys1);
    query(fields1);

    var qr1 = getQR();
    var a1 = Number(qr1.data[0]["代收"]);

    var ret = isEqual(a + 310, a1);

    return ret;
}
function test170371() {
    // 全局设置开单模式为：18整单折扣+代收
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "ht");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    var table1 = getTableView(window, -1);
    var cells = table1.cells();
    tap(cells[0]);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    delay();
    tapButton(window, RETURN);

    tapMenu("统计分析", "收支流水");
    var keys = [ "day1", "day2", "shop", "account" ];
    var fields = statisticAnalysisInOutAccountFields(keys);
    changeTFieldValue(fields["day1"], getToday());
    changeTFieldValue(fields["day2"], getToday());
    changeTFieldValue(fields["shop"], "常青店");
    changeTFieldValue(fields["account"], "代");
    setTFieldsValue(window, fields);
    query(fields);
    var qr1 = getQR();
    var b = qr1.data[0]["金额"];
    var b1 = qr1.data[0]["账户"];
    var ret = isAnd(isEqual("310", b), isEqual("代", b1));

    return ret;
}
function test170372() {
    // 全局设置开单模式为：18整单折扣+代收
    tapMenu("统计分析", "综合汇总");
    query();
    var qr = getQR();
    var a = Number(qr.counts["代收"]);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "综合汇总");
    query();
    var qr1 = getQR();
    var a1 = Number(qr1.counts["代收"]);

    var ret = isEqual(a + 310, a1);

    return ret;
}
function test170375() {
    // 全局设置开单模式：2代收， 19产品折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "19", "数值" : [ "产品折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按挂单");
    query();
    tapFirstText();

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按批次查");
    tapFirstText(getScrollView(), "序号", 20);
    var k3 = getTextFieldValue(window, 3);
    var k4 = getTextFieldValue(window, 4);
    var ret = isAnd(isEqual("310", k4), isEqual("310", k3));

    tapButton(window, RETURN);

    tapMenu("销售开单", "物流单");
    var keys1 = { "运单号" : "123", "物流商" : "汇通快递" };
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);

    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["客户"];
    var a6 = qr.data[0]["门店"];
    var a7 = qr.data[0]["货款收讫"];

    var ret1 = isAnd(isEqual("310", a), isEqual("汇通快递", a1),
            isEqual("123", a2), isEqual("a", a3), isEqual("是", a4), isEqual(
                    "李四", a5), isEqual("常青店", a6), isEqual("否", a7));

    return ret && ret1;

    return ret;
}
function test170376() {
    // 全局设置开单模式：2代收， 19产品折扣+代收
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按挂单");
    query();
    tapFirstText(getScrollView(), "序号", 20);
    delay();

    var f16 = new TField("货品", TF_AC, 16, "3035", -1, 0);
    var f19 = new TField("数量", TF, 19, "1");
    var fields = [ f16, f19 ];
    setTFieldsValue(getScrollView(), fields);

    tapStaticText(window, "代收");
    var d19 = new TField("代收金额", TF, 19, "654");
    var fields = [ d19 ];
    setTFieldsValue(window, fields);
    tapNaviRightButton();
    delay();

    tapButtonAndAlert("挂 单", OK);
    tapPrompt();
    delay();
    tapButtonAndAlert(RETURN, OK);

    tapMenu("销售开单", "按挂单");
    query();
    tapFirstText(getScrollView(), "序号", 20);
    var k4 = getTextFieldValue(window, 4);
    var ret = isAnd(isEqual("654", k4));

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("销售开单", "物流单");
    var keys1 = { "运单号" : "123", "物流商" : "汇通快递" };
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);

    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["客户"];
    var a6 = qr.data[0]["门店"];
    var a7 = qr.data[0]["货款收讫"];

    var ret1 = isAnd(isEqual("654", a), isEqual("汇通快递", a1),
            isEqual("123", a2), isEqual("a", a3), isEqual("是", a4), isEqual(
                    "李四", a5), isEqual("常青店", a6), isEqual("否", a7));

    return ret && ret1;
}
function test170378() {
    // 全局设置开单模式为：19产品折扣+代收
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "ht");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    var table1 = getTableView(window, -1);
    var cells = table1.cells();
    tap(cells[0]);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "物流单");
    var keys1 = { "运单号" : "123", "物流商" : "汇通快递" };
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);

    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["客户"];
    var a6 = qr.data[0]["门店"];
    var a7 = qr.data[0]["货款收讫"];

    var ret1 = isAnd(isEqual("404", a), isEqual("汇通快递", a1),
            isEqual("123", a2), isEqual("a", a3), isEqual("是", a4), isEqual(
                    "李四", a5), isEqual("常青店", a6), isEqual("是", a7));

    tapMenu("销售开单", "更多.", "代收收款查询");
    var keys = { "门店" : "常青店", "日期从" : getToday(), "日期到" : getToday() };
    var fields = salesCollectionFields(keys);
    setTFieldsValue(window, fields);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["现金"];
    var a1 = qr.data[0]["金额"];
    var ret = isAnd(isEqual("404", a), isEqual("404", a1));

    return ret && ret1;
}
function test170379() {
    // 全局设置开单模式为：19产品折扣+代收
    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys = { "日期从" : getToday(), "到" : getToday(), "门店" : "常青店",
        "店员" : "000,总经理" };
    var fields = salesStaffFields(keys);
    query(fields);

    var qr = getQR();
    var a = Number(qr.data[0]["代收"]);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按店员汇总");
    var keys1 = { "日期从" : getToday(), "到" : getToday(), "门店" : "常青店",
        "店员" : "000,总经理" };
    var fields1 = salesStaffFields(keys1);
    query(fields1);

    var qr1 = getQR();
    var a1 = Number(qr1.data[0]["代收"]);

    var ret = isEqual(a + 404, a1);

    return ret;
}
function test170380() {
    // 全局设置开单模式为：19产品折扣+代收
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "ht");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    var table1 = getTableView(window, -1);
    var cells = table1.cells();
    tap(cells[0]);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    delay();
    tapButton(window, RETURN);

    tapMenu("统计分析", "收支流水");
    var keys = [ "day1", "day2", "shop", "account" ];
    var fields = statisticAnalysisInOutAccountFields(keys);
    changeTFieldValue(fields["day1"], getToday());
    changeTFieldValue(fields["day2"], getToday());
    changeTFieldValue(fields["shop"], "常青店");
    changeTFieldValue(fields["account"], "代");
    setTFieldsValue(window, fields);
    query(fields);
    var qr1 = getQR();
    var b = qr1.data[0]["金额"];
    var b1 = qr1.data[0]["账户"];
    var ret = isAnd(isEqual("404", b), isEqual("代", b1));

    return ret;
}
function test170381() {
    // 全局设置开单模式为：19产品折扣+代收
    tapMenu("销售开单", "按汇总", "按金额汇总");
    var keys = { "日期从" : getToday(), "到" : getToday() };
    var fields = salesStaffFields(keys);
    query(fields);

    var qr = getQR();
    var a = Number(qr.data[0]["代收"]);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按汇总", "按金额汇总");
    var keys1 = { "日期从" : getToday(), "到" : getToday() };
    var fields1 = salesPriceFields(keys1);
    query(fields1);

    var qr1 = getQR();
    var a1 = Number(qr1.data[0]["代收"]);

    var ret = isEqual(a + 404, a1);

    return ret;
}
function test170382() {
    // 全局设置开单模式为：19产品折扣+代收
    tapMenu("统计分析", "综合汇总");
    query();
    var qr = getQR();
    var a = Number(qr.counts["代收"]);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    tapMenu("统计分析", "综合汇总");
    query();
    var qr1 = getQR();
    var a1 = Number(qr1.counts["代收"]);

    var ret = isEqual(a + 404, a1);

    return ret;
}
function test170383() {
    // 全局设置开单模式为：19产品折扣+代收
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    tapFirstText(getScrollView(), "序号", 20);
    var k3 = getTextFieldValue(window, 3);
    var k4 = getTextFieldValue(window, 4);
    var ret = isAnd(isEqual("404", k4), isEqual("404", k3));

    tapButton(window, RETURN);

    tapMenu("销售开单", "物流单");
    var keys1 = { "运单号" : "123", "物流商" : "汇通快递" };
    var fields1 = salesQueryLogisticsFields(keys1);
    query(fields1);

    var qr = getQR();
    var a = qr.data[0]["代收金额"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];
    var a5 = qr.data[0]["客户"];
    var a6 = qr.data[0]["门店"];
    var a7 = qr.data[0]["货款收讫"];

    var ret1 = isAnd(isEqual("404", a), isEqual("汇通快递", a1),
            isEqual("123", a2), isEqual("a", a3), isEqual("是", a4), isEqual(
                    "李四", a5), isEqual("常青店", a6), isEqual("否", a7));

    return ret && ret1;
}
// function test170394() {
// tapMenu("销售开单", "开 单+");
// var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "5" } ] };
// editSalesBillNoColorSize(json);
//
// tapMenu("销售开单", "开 单+");
// var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "-1" } ] };
// editSalesBillNoColorSize(json);
//
// tapMenu("销售开单", "按汇总", "按退货汇总");
//
// }
function test170400() {
    // 全局设置开单模式：18整单折扣+代收
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 6 },
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按挂单");
    query();
    tapFirstText(getScrollView(), "序号", 20);
    delay();

    tapButton(window, "打 印");
    tapButtonAndAlert("none", "打印(客户用)");
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "无法打印"));
    tapButton(window, RETURN);

    return ret;
}
function test170406() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f = new TField("货品", TF, 0, "305,jkk");
    var fields = [ f ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapButtonAndAlert(RETURN, OK);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "货品编码和ID不匹配，请从下拉列表选择并不要手工修改，如要修改，点删除按钮 "));

    return ret;
}
function test170409() {
    // tapMenu("销售订货", "新增订货+");
    // var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ] };
    // editSalesBillNoColorSize(json);
    //    
    // tapMenu("货品管理", "货品查询");
    // var Keys = [ "款号名称" ];
    // var Fields = queryGoodsFields(Keys);
    // changeTFieldValue(Fields["款号名称"], "3035");
    // query(Fields);
    // tapFirstText(getScrollView(), "序号", 15);
    //
    // tapButtonAndAlert("停 用", OK);
    // tapPrompt();
    //
    // tapRefresh();
    //
    // tapMenu("销售开单", "按订货开单");
    // var keys = { "日期从" : getDay(-60), "日期到" : getToday(), "款号" : "3035" };
    // var fields = salesBillOrderFields(keys);
    // query(fields);
    // tapFirstText(getScrollView(), "序号", 14);
    // var a = getTextFieldValue(getScrollView(), 0);
    // var ret = isEqual("3035_" + getToday() + ",jkk", a);
    // delay();
    // tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    tapButton(window, CLEAR);
    var Keys = [ "款号名称" ];
    var Fields = queryGoodsFields(Keys);
    changeTFieldValue(Fields["款号名称"], "3035");
    // changeTFieldValue(Fields["是否停用"], "是");
    query(Fields);
    tapFirstText();

    tapButtonAndAlert("启 用", OK);
    tapPrompt();

    tapRefresh();

    return ret;
}
function test170410() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "K300", "数量" : "1" } ],
        "代收" : { "物流商" : "ht", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "ht");
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    var table1 = getTableView(window, -1);
    var cells = table1.cells();
    tap(cells[0]);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);
    delay(2);
    tapButtonAndAlert(RETURN, OK);

    tapMenu("销售开单", "更多.", "代收收款查询");
    var keys = { "门店" : "常青店", "日期从" : getToday(), "日期到" : getToday() };
    var fields = salesCollectionFields(keys);
    query(fields);
    var qr1 = getQR();
    var a1 = qr1.data[0]["日期"];
    var a2 = qr1.data[0]["门店"];
    var a3 = qr1.data[0]["金额"];
    var ret2 = isAnd(isEqual(getToday("yy"), a1), isEqual("常青店", a2), isEqual(
            "250", a3));

    tapFirstText();

    var a = getTextFieldValue(getScrollView(), 0);
    var a1 = getTextFieldValue(getScrollView(), 1);
    var a2 = getTextFieldValue(getScrollView(), 2);

    var ret = isAnd(isEqual(getToday(), a), isEqual("常青店", a1), isEqual("250",
            a2));
    delay();
    tapButton(window, RETURN);

    return ret;
}
