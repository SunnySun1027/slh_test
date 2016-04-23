//LuXingXin <52619481 at qq.com> 20150928

/**
 * 均色均码 省代价格模式 价格模式2 不支持自动生成款号
 */
function setGoodsParams001() {
    colorSize = "no";// 均色均码模式
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "货品建款的价格模式" };
    o = { "新值" : "1", "数值" : [ "省代价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单时是否显示当前库存" };
    o = { "新值" : "1", "数值" : [ "显示库存" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "自动生成款号" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "新增界面格式" };
    o = { "新值" : "0", "数值" : [ "老模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单是否显示尺码头部的界面" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "调拨是否启用密码验证" };
    o = { "新值" : "0", "数值" : [ "不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // 门店调拨是否可以填写价格改为默认，否则修改无效
    qo = { "备注" : "库存核算价格" };// 零批价
    o = { "新值" : "1", "数值" : [ "库存按销价1核算", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "调拨核算价格" };
    o = { "新值" : "3", "数值" : [ "调拨按销价3核算", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单是否合并重复的款号" };
    o = { "新值" : "0", "数值" : [ "不合并", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "单据是否允许修改客户或厂商" };
    o = { "新值" : "0", "数值" : [ "不允许", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "单价小数位" };
    o = { "新值" : "2", "数值" : [ "货品单价精确到分", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "账户余额允许为负" };
    o = { "新值" : "0", "数值" : [ "默认允许", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否允许修改已发货的订单" };
    o = { "新值" : "0", "数值" : [ "默认不允许", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否显示颜色尺码字样" };
    o = { "新值" : "1", "数值" : [ "默认显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否允许跨门店核销" };
    o = { "新值" : "1", "数值" : [ "允许跨门核销", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "颜色尺码下,开单是否显示上次单价" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否启用上次成交价作为本次开单单价" };
    o = { "新值" : "0", "数值" : [ "默认不启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "财务中货品成本价的核算方法" };
    o = { "新值" : "0", "数值" : [ "按最新进货价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "采购入库模式" };
    o = { "新值" : "2", "数值" : [ "默认复杂模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否启用自定义键盘" };
    o = { "新值" : "0", "数值" : [ "不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "门店库存是否允许跨门店查询" };
    o = { "新值" : "1", "数值" : [ "默认门店可自由查询各自库存" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "按订货开单是否按当前库存数自动填写发货数" };
    o = { "新值" : "0", "数值" : [ "默认不填写" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "仓管是否可以根据吊牌价生成价格" };
    o = { "新值" : "0", "数值" : [ "默认不支持" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "门店调拨是否可以填写价格" };
    o = { "新值" : "0", "数值" : [ "默认只有数量", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否启用加工价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "默认显示零批价或打包价" };
    o = { "新值" : "1", "数值" : [ "默认零批价" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}

/**
 * 中洲店总经理登陆，为常青店准备数据
 */
function testGoodsPrepare001() {
    // 库存调整单，test100007验证
    tapMenu("货品管理", "当前库存");
    // 找那些带g的自动生成的货品，这些一般不会带有在途数
    var keys = { "款号名称" : "g" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var r = getRandomInt(100) + 1;
    addGoodsStockAdjustment(r);

    // test100001_3
    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "200", "接收店" : "常青店",
        "明细" : [ { "货品" : "4562", "数量" : "50" } ] };
    editShopOutDecruitIn(json, colorSize);

    tapMenu("门店调出", "批量调出+");
    json = { "调出人" : "200", "接收店" : "常青店",
        "明细" : [ { "货品" : "4562", "数量" : "50" } ] };
    editShopOutDecruitIn(json, colorSize);

    // 使3035在中洲店有库存，主要是防止帐套清理之后 相关查询用例的运行
    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "未付" : "yes" };
    editSalesBillNoColorSize(json);

    getMenu_profit();
    return json;
}

/**
 * 翻页/排序/汇总/条件查询/清除/数据
 */
function testGoods001() {
    // 需要先跑testGoods001Prepare
    // run("【货品管理-更多-库存调整单】门店相互查看调整单", "test100107");

    run("【货品管理-当前库存】当前库存_翻页/排序/汇总", "test100001_1");
    run("【货品管理-当前库存】当前库存_条件查询_清除按钮", "test100001_2");
    run("【货品管理-款号库存】款号库存_翻页/排序/汇总", "test100005_1");
    run("【货品管理-款号库存】款号库存_条件查询_清除按钮_下拉框", "test100005_2");
    run("【货品管理-库存分布】库存分布", "ts100006");
    run("【货品管理-库存分布】库存分布_汇总", "test100006_1");// 都不支持排序
    run("【货品管理-货品进销存】货品进销存_翻页/排序/汇总", "test100008_1")
    run("【货品管理-货品进销存】货品进销存", "test100008");
    // run("【货品管理-货品查询】修改货品信息", "test100010_100011_100013");
    run("【货品管理-货品查询】翻页_排序", "test100010_100011_100013_1");

    // run("【货品管理-基本设置】价格名称", "test10_price");
    run("【货品管理-基本设置】货品类别", "test10_type");
    run("【货品管理-基本设置】所有颜色", "test10_color");
    run("【货品管理-基本设置】所有尺码", "test10_size");
    run("【货品管理-基本设置】所有品牌", "test10_brand");
    run("【货品管理-基本设置】所有尺码组", "test10_size_group");
    run("【货品管理-基本设置】所有品牌折扣", "test10_discount");// 适用价格不能排序

    run("【货品管理-更多-仓位列表】查询_清除", "test100068_100069");
    run("【货品管理-更多-超储统计】翻页/排序/查询条件单项查询/组合查询/清除/底部数据统计",
            "test100075_100076_100077_100078");
    run("【货品管理-更多-缺货统计】翻页/排序/查询条件单项查询/组合查询/清除/底部数据统计",
            "test100082_100083_100084_100085_100093");
    // run("【货品管理-更多-库存调整单】条件查询_清除按钮", "test100104_100105");
    // run("【货品管理-更多-库存调整单】翻页/排序/汇总", "test100106");

}

function testGoods002() {
    // 均色均码 开单模式2 省代模式
    // run("【货品管理-当前库存】当前库存_单据类型_上架天数_累计销_单价_核算金额", "test100001_3");
    // run("【货品管理-当前库存】单价和金额值正确性/库存分布中的价值检查", "test100101_100118");
    run("【货品管理-款号库存】款号库存_详细", "test100005_3");
    run("【货品管理】品牌查询条件可以自动完成", "test100060");
    run(" 当前库存、款号库存、库存分布 检查底部数据汇总", "test100123");
    run("【货品管理-当前库存】库存调整", "test100090");
    run("【货品管理-库存分布】停用的类型在库存分布里不出现", "test100007");
    run("【货品管理-货品进销存】库存显示的门店情况", "test100009");
    run("【货品管理-货品进销存】特殊货品不能显示", "test100129");
    run("【货品管理-当前库存】上架天数检查", "test100116");
    // run("【货品管理-货品进销存】对快速新增货品做开单操作,然后在进销存界面检查累计销", "test100114");
    run("【货品管理-新增货品】均色均码模式+省代价格模式+不自动生成款号：输入必填项信息+品牌+吊牌价", "test100033");
    // run("【货品管理-新增货品】均色均码模式+省代价格模式+不自动生成款号：输入所有项信息+品牌+吊牌价", "test100034");
    run("【货品管理-货品查询】款号新增/修改界面，建款时可以使用首字母自动完成的方式来选择品牌", "test100015_100017");
    run("【货品管理-货品查询/新增货品】最大库存 = > < 最小库存", "test100038_100039_100040");
    run("【货品管理-货品查询】货品条形码关联/不关联颜色尺码+款号输中文", "test100102_100103");
    // run("【货品管理】货品管理-货品查询，显示条码功能", "test100058");
    run("【货品查询】查询条件“是否停用 ”需要默认为“否", "test100124");
    run("【货品管理-新增货品】显示条码/重设条码", "test100042_100045");
    run("【货品管理-新增货品】最小库存或最大库存输入框输入特殊字符", "test100092");
    run("【货品管理-批量调价】单选", "test100047_100048_100049_100050_100051_100052");
    // run("【货品管理-批量调价】多选", "test100047_100048_100049_100050_100051_100052All");
    run("【货品管理-批量操作】批量操作", "test100053");
    // run("【货品管理-批量操作】批量停用-重复停用提示,当天停用", "test100054_1");
    run(" 新增品牌特殊符号校验", "test100111");
    // run("【货品管理-更多-仓位列表】保存修改", "test100070");
    run("【货品管理-更多-新增仓位】新增仓位,修改页面返回", "test100073_100074");
    run("【货品管理-更多-超储统计】最大库存为0不计入超储统计/库存>最大库存/库存=最大库存",
            "test100079_100080_100081");
    run("【货品管理-更多-缺货统计】最小库存为0不计入缺货统计", "test100086");
    // run("【货品管理-更多-缺货统计】库存<最小库存/库存=最小库存/最小库存<库存<最大库存",
    // "test100087_100088_100089");
    // 开单模式5
    // run("【当前库存/款号库存/货品进销存/货品查询】模糊查询/下拉列表验证",
    // "test10_fuzzyQueryAndDropDownListCheck");

}

function testGoods002Color() {
    // 颜色尺码
    run(" 颜色尺码模式", "setGoodsColorParams");
    run("【货品管理-新增货品】颜色尺码模式+省代价格模式+不自动生成款号：输入所有项信息", "test100029");
    run("【货品管理-新增货品】颜色尺码模式+省代价格模式+不自动生成款号：输入必填项+品牌+吊牌价", "test100031");

    run(" 均色均码模式", "setGoodsNoColorParams");

    // 跳过部分
    // run("【货品管理-当前库存】进货价（总额、单据、小计 ）权限控制", "test100004");//未完成
    // run("【货品管理-新增货品】快速新增货品属性，新增货品选择新增的属性", "test100035");//先跳过

}

function setGoodsParams002() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "货品建款的价格模式" };
    o = { "新值" : "0", "数值" : [ "默认价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "自动生成款号" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "支持，开单是否显示尺码头部的界面" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}

function testGoods003() {
    // 均色均码
    run("【货品管理-新增货品】均色均码模式+默认价格模式+不自动生成款号：输入必填项信息", "test100025");
    run("【货品管理-新增货品】均色均码模式+默认价格模式+不自动生成款号：输入所有项信息", "test100046");
    // 颜色尺码
    run("颜色尺码模式", "setGoodsColorParams");
    run("【货品管理-新增货品】颜色尺码模式+默认价格模式+不自动生成款号：只输入必填项信息", "test100023");
    run("【货品管理-新增货品】颜色尺码模式+默认价格模式+不自动生成款号：输入所有项信息", "test100024");
    run(" 均色均码模式", "setGoodsNoColorParams");
}

function setPaymethod2() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    return ret;
}

function setGoodsColorParams() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    tapRefresh();
    return ret;
}

function setGoodsNoColorParams() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    tapRefresh();
    return ret;
}

function setTagprice_invperson_0() {
    var qo, o, ret = true;
    qo = { "备注" : "仓管是否可以根据吊牌价生成价格" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "货品建款的价格模式" };
    o = { "新值" : "1", "数值" : [ "省代价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}

function setTagprice_invperson_1() {
    var qo, o, ret = true;
    qo = { "备注" : "仓管是否可以根据吊牌价生成价格" };
    o = { "新值" : "1", "数值" : [ "支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "货品建款的价格模式" };
    o = { "新值" : "1", "数值" : [ "省代价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}

function test100107() {
    tapMenu("货品管理", "当前库存");
    // 找那些带g的自动生成的货品，这些一般不会带有在途数
    var keys = { "款号名称" : "g" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var code = qr.data[0]["款号"];
    var name = qr.data[0]["名称"];
    var shop = qr.data[0]["仓库/门店"];
    var stock = qr.data[0]["库存"];

    tapMenu("货品管理", "更多", "库存调整单");
    query();
    qr = getQR();
    var ret = isAnd(isEqual(shop, qr.data[0]["门店"]), isEqual(getToday("yy"),
            qr.data[0]["日期"]), isEqual(code, qr.data[0]["款号"]), isEqual(name,
            qr.data[0]["名称"]), isEqual(stock, qr.data[0]["调整后数量"]));
    return ret;
}

// 翻页_排序_汇总
function test100001_1() {
    tapMenu("货品管理", "当前库存");
    query();
    // 翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("仓库/门店");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("库存", IS_NUM);
    ret = ret && sortByTitle("在途数", IS_NUM);
    ret = ret && sortByTitle("品牌");
    ret = ret && sortByTitle("上架天数", IS_NUM);
    ret = ret && sortByTitle("累计销", IS_NUM);
    ret = ret && sortByTitle("单价", IS_NUM);
    ret = ret && sortByTitle("核算金额", IS_NUM);

    var arr = [ "库存", "在途数", "累计销", "核算金额" ];
    ret = ret && isEqualCounts(arr);
    return ret;
}

// 条件查询，清除按钮
function test100001_2() {
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : "3035", "数量" : "30" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "3035", "款号名称" : "jkk", "门店" : "常青店", "厂商" : "Vell",
        "颜色" : "均色", "尺码" : "均码", "品牌" : "Adidas", "季节" : "春季",
        "上架从" : "2015-01-01", "到" : getToday(), "是否停用" : "否" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var exp = { "厂商" : "Vell", "仓库/门店" : "常青店", "款号" : "3035", "名称" : "jkk",
        "颜色" : "均色", "尺码" : "均码", "品牌" : "Adidas" };
    var ret = isAnd(isEqualObject(exp, qr.data[0]), isEqual(qr.data[0]["库存"],
            qr.counts["库存"]), isEqual(qr.data[0]["在途数"], qr.counts["在途数"]),
            isEqual(qr.data[0]["核算金额"], qr.counts["核算金额"]), isEqual(
                    qr.data[0]["累计销"], qr.counts["累计销"]));

    tapButton(window, CLEAR);
    // 是否停用清除不了
    for (var i = 0; i < 11; i++) {
        if (i == 7) {
            ret = ret && isEqual("否", getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        }
    }

    return ret;
}

// 单据类型判定
function test100001_3() {
    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "4562", "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var stock = Number(qr.data[0]["库存"]);
    var num1 = Number(qr.data[0]["在途数"]);
    var num2 = Number(qr.data[0]["累计销"]);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "rt", "明细" : [ { "货品" : "4562", "数量" : "12" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("采购入库", "批量入库+");
    json = { "店员" : "000", "明细" : [ { "货品" : "4562", "数量" : "18" } ] };
    editPurchaseBatch(json, colorSize);

    tapMenu("销售开单", "开  单+");
    json = { "客户" : "xw", "明细" : [ { "货品" : "4562", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("门店调出", "批量调出+");
    json = { "调出人" : "000", "接收店" : "中洲店",
        "明细" : [ { "货品" : "4562", "数量" : "10" } ] };
    editShopOutDecruitIn(json, colorSize);

    // 调入数据准备中的4562 50件
    tapMenu("门店调入", "在途调拨");
    query();
    tapFirstText();
    editShopInFlitting();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var stock1 = Number(qr.data[0]["库存"]);
    var price = Number(qr.data[0]["单价"]);
    var market = subTime(getToday(), "2014-03-14");// 上架天数
    // 核算金额==库存+在途
    var ret1 = isAnd(isEqual(market, qr.data[0]["上架天数"]), isEqual(num1 - 50,
            qr.data[0]["在途数"]), isEqual(num2 + 5, qr.data[0]["累计销"]), isEqual(
            "200", price), isEqual(add(stock1, qr.data[0]["在途数"]) * price,
            qr.data[0]["核算金额"]));

    tapFirstText();
    delay();
    var stVaule = [ "4562", "Story" ];
    // 验证明细界面左上角的款号与款号名称
    var ret2 = isHasStaticTexts(getScrollView(-1, 0), stVaule);

    var i, j;
    qr = getQR2(getScrollView(-1, 0), "批次", "操作人");
    var actual = {};
    for (i = 0; i < 5; i++) {
        var name = qr.data[i]["名称"];
        actual[name] = qr.data[i]["数量"];
    }
    var sum = 0;
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum += Number(qr.data[i]["数量"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(getScrollView(-1, 0), "批次", "操作人");
        }
    }

    tapNaviButton("历史库存");
    qr = getQResult2(getScrollView(-1, 0), "操作日期", "数量");
    var stock2 = qr.data[0]["数量"];
    tapNaviLeftButton();
    tapNaviLeftButton();
    delay();
    ret2 = isAnd(ret2, isHasStaticTexts(getScrollView(-1, 0), stVaule));
    var exp = { "调拨入库" : 50, "调拨出库" : -10, "销售出货" : -5, "采购进货" : 18,
        "采购进货" : 12 };
    var ret3 = isAnd(isEqualObject(exp, actual), isEqual(stock1, stock2),
            isEqual(stock1, sum));

    return isAnd(ret1, ret2, ret3);
}

function test100101_100118() {
    // 3035的进货价 100
    var qo, o, ret = true;
    qo = { "备注" : "库存核算价格" };
    o = { "新值" : "0", "数值" : [ "库存按进货价核算", "in" ] };
    setGlobalParam(qo, o);
    ret = isAnd(ret, test100101Field(100, "yes"));

    // 打包价 180
    qo = { "备注" : "库存核算价格" };
    o = { "新值" : "2", "数值" : [ "库存按销价2核算", "in" ] };
    setGlobalParam(qo, o);
    ret = isAnd(ret, test100101Field(180));

    // 大客户价 160
    qo = { "备注" : "库存核算价格" };
    o = { "新值" : "3", "数值" : [ "库存按销价3核算", "in" ] };
    setGlobalParam(qo, o);
    ret = isAnd(ret, test100101Field(160));

    // Vip价格 140
    qo = { "备注" : "库存核算价格" };
    o = { "新值" : "4", "数值" : [ "库存按销价4核算", "in" ] };
    setGlobalParam(qo, o);
    ret = isAnd(ret, test100101Field(140));

    // 零批价 200
    qo = { "备注" : "库存核算价格" };
    o = { "新值" : "1", "数值" : [ "库存按销价1核算", "in" ] };
    setGlobalParam(qo, o);
    ret = isAnd(ret, test100101Field(200));

    return ret;
}

function test100101Field(p1, first) {
    tapMenu("货品管理", "当前库存");
    if (isDefined(first)) {
        tapButton(window, CLEAR);
        var keys = { "款号" : "3035" };
        var fields = queryGoodsStockFields(keys);
        setTFieldsValue(window, fields);
    }

    tapButton(window, QUERY);
    var qr = getQR();
    var stock = add(qr.data[0]["库存"], qr.data[0]["在途数"]);
    var price = Number(qr.data[0]["单价"]);
    var sum = qr.data[0]["核算金额"];
    var ret = isAnd(isEqual(p1, price), isEqual(stock * price, sum));

    tapMenu("货品管理", "库存分布");
    if (isDefined(first)) {
        tapButton(window, CLEAR);
        keys = { "类别" : "登山服", "厂商" : "vell" };
        fields = queryGoodsDistributionFields(keys);
        setTFieldsValue(window, fields);
    }

    tapButton(window, QUERY);
    qr = getQR();
    stock = Number(qr.data[0]["库存"]);
    sum = qr.data[0]["价值"];
    ret = isAnd(ret, isEqual(stock * p1, sum));

    return ret;
}

/**
 * 名称模糊查询 款号下拉列表验证
 * @param n1为款号的下标
 * @param n2为名称的下标
 */
function testGoods002Field(n1, n2) {
    var i, j;
    var ret = false;
    var f = new TField("款号", TF_AC, n1, "303", -1);
    var cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "3035,jkk,200元,1,Adidas")) {
            ret = true;
            break;
        }
    }
    delay();
    tapKeyboardHide();
    tapButton(window, CLEAR);

    f = new TField("款号名称", TF, n2, "303");
    var fields = [ f ];
    query(fields);
    var qr = getQR();
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            if (!isIn(qr.data[i]["名称"], "303")) {
                ret = false;
                break;
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    return ret;
}

/**
 * 款号名称模糊查询 款号下拉列表验证产品折扣
 */
function test10_fuzzyQueryAndDropDownListCheck() {
    var qo = { "备注" : "开单模式" };
    var o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    var ok = setGlobalParam(qo, o);
    if (ok) {
        tapMenu("货品管理", "当前库存");
        var ret1 = isAnd(dropDownListCheck(0, "456",
                "4562,Story,200元,0.9,1010pp"), fuzzyQueryCheckField(1, "款号",
                "3", "名称"));

        tapMenu("货品管理", "款号库存");
        var ret2 = isAnd(dropDownListCheck(0, "456",
                "4562,Story,200元,0.9,1010pp"), fuzzyQueryCheckField(1, "款号",
                "3", "名称"));

        tapMenu("货品管理", "货品进销存");
        var ret3 = isAnd(dropDownListCheck(1, "456",
                "4562,Story,200元,0.9,1010pp"), fuzzyQueryCheckField(2, "款号",
                "3", "名称"));

        tapMenu("货品管理", "货品查询");
        var ret4 = fuzzyQueryCheckField(1, "款号", "z", "名称");
    }
    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));
    return isAnd(ok, ret1, ret2, ret3, ret4);
}

// function test100004() {
// tapMenu("采购入库", "新增入库+");
// var json = { "客户" : "rt", "明细" : [ { "货品" : "3035", "数量" : "12" } ] };
// editSalesBillNoColorSize(json);
//    
// tapMenu("货品管理", "当前库存");
// var keys = { "款号":"3035" };
// var fields = queryGoodsStockFields(keys);
// query(fields);
// tapFirstText();
//
// var qr = getQResult2(getScrollView(-1, 0), "批次", "操作人");
//
// }

// 翻页_排序_汇总
function test100005_1() {
    tapMenu("货品管理", "款号库存");
    query();
    // 翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("仓库/门店");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("库存", IS_NUM);
    ret = ret && sortByTitle("上架日期", IS_DATE2);
    if (ipadVer >= 7.01) {
        ret = ret && sortByTitle("累计进", IS_NUM);
    } else {
        ret = ret && sortByTitle("累计进");
    }
    ret = ret && sortByTitle("在途数", IS_NUM);

    query();
    var qr = getQR();
    var sum1 = 0;// 库存
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["库存"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = isAnd(ret, isEqual(sum1, qr.counts["库存"]));
    return ret;
}

// 条件查询，清除按钮
function test100005_2() {
    tapMenu("货品管理", "款号库存");
    var keys = { "款号" : "3035", "款号名称" : "jkk", "门店" : "常青店", "厂商" : "Vell",
        "季节" : "春季", "上架从" : "2015-01-01", "到" : getToday(), "是否停用" : "否" }
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var exp = { "厂商" : "Vell", "仓库/门店" : "常青店", "款号" : "3035", "名称" : "jkk",
        "上架日期" : "15-10-13" };
    var ret = isAnd(isEqualObject(exp, qr.data[0]), isEqual(qr.data[0]["库存"],
            qr.counts["库存"]));

    tapButton(window, CLEAR);
    // 是否停用清除不了
    for (var i = 0; i < 8; i++) {
        if (i != 7) {
            ret = ret && isEqual("", getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("否", getTextFieldValue(window, i));
        }
    }

    return ret;
}

// 均色均码
function test100005_3() {
    var r = getTimestamp(8);
    var num = getRandomInt(100) + 1;
    var code = "g" + r;
    tapMenu("货品管理", "新增货品+");
    // 改成昨天上架
    tapButton(getScrollView(), "减量");
    var day = getTextFieldValue(getScrollView(), 5);// 上架日期
    if (day != getDay(-1)) {
        tapButton(getScrollView(), "减量");
        tapButton(getScrollView(), "减量");
    }
    var keys = { "款号" : code, "名称" : "货品" + r, "进货价" : "200", "厂商" : "Vell" }
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : code, "数量" : num } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "款号库存");
    keys = { "款号" : code, "门店" : "常青店" };
    var fields = queryGoodsCodeStockFields(keys);
    query(fields);
    var qr = getQR();
    var exp = { "厂商" : "Vell", "仓库/门店" : "常青店", "款号" : code, "名称" : "货品" + r,
        "库存" : num, "上架日期" : getDay(-1, "yy"), "累计进" : num, "在途数" : 0 };
    var ret = isEqualObject(exp, qr.data[0]);

    tapFirstText();
    qr = getQR2(getScrollView(-1, 0), "颜色", "库存");
    ret = isAnd(isEqual(num, qr.data[0]["库存"]),
            isEqual("均色", qr.data[0]["颜色"]), isEqual("均码", qr.data[0]["尺码"]));
    tapNaviLeftButton();

    tapMenu("货品管理", "货品查询");
    query();
    tapFirstText();
    tapButtonAndAlert(STOP);
    tapPrompt();

    tapMenu("货品管理", "款号库存");
    keys = { "款号" : code, "是否停用" : "是" };
    fields = queryGoodsCodeStockFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    exp["款号"] = code + "_" + getToday();
    ret = isAnd(ret, isEqualObject(exp, qr.data[0]));

    return ret;
}

function ts100006() {
    var det = addPOrderBillDet();
    var code = det["明细"][0]["货品"];
    tapMenu("货品管理", "库存分布");
    var i, j;
    var keys = { "类别" : "登山服", "厂商" : "vell", "是否停用" : "否" };
    var fields = queryGoodsDistributionFields(keys);
    query(fields);
    var qr = getQR();
    var jo1 = qr.data[0];// 这里查询结果应该唯一
    var data1 = getDetTS100006(code);
    var ret = isAnd(isEqual("登山服", jo1["名称"]), isEqualCounts());

    tapMenu("采购入库", "新增入库+");
    var jo = { "客户" : "vell" };
    var json = mixObject(jo, det);
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "库存分布");
    tapButton(window, QUERY);
    qr = getQR();
    var jo2 = qr.data[0];
    var actual = subObject(jo2, jo1);
    // 库存按销价1计算--零批价200
    var exp = { "库存" : 30, "价值" : 6000, "常青店" : 30 };
    var de1 = { "序号" : 0, "名称" : "登山服", "库存" : 0, "价值" : 0, "常青店" : 0,
        "中洲店" : 0 };
    var expected = mixObject(de1, exp);
    var data2 = getDetTS100006(code, "no");

    tapFirstText(getScrollView(-1, 0), "名称");
    qr = getQR2(getScrollView(-1, 0), "名称", "中洲店");
    var sum = {};
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum = addObject(qr.data[i], sum);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR2(view, "名称", "中洲店");
        }
    }
    tapNaviLeftButton();
    tapNaviLeftButton();
    ret = isAnd(ret, isEqualObject(expected, actual),
            isEqualObject2(data2, sum), isEqualObject(exp, subObject(data2,
                    data1)));

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)), isEqual("否", getTextFieldValue(
            window, 2)));

    return ret;
}

function getDetTS100006(code, close) {
    tapFirstText();
    var keys = { "款号" : code };
    var fields = queryGoodsDistributionDetFields(keys);
    var view = getScrollView(-1, 0);
    setTFieldsValue(view, fields);
    tapButton(view, QUERY);

    var qr = getQR2(view, "名称", "中洲店");
    // 查询结果唯一
    var data = qr.data[0];

    if (isUndefined(close)) {
        tapNaviLeftButton();
    }

    return data;
}

function test100006_1() {
    tapMenu("货品管理", "库存分布");
    query();
    var ret = goPageCheck();

    if (ipadVer >= 7.01) {
        ret = ret && sortByTitle("名称");
        ret = ret && sortByTitle("库存", IS_NUM);
        ret = ret && sortByTitle("价值", IS_NUM);
    }
    // ret = ret && sortByTitle("仓库店", IS_NUM);
    // ret = ret && sortByTitle("常青店", IS_NUM);
    // ret = ret && sortByTitle("文一店", IS_NUM);
    // ret = ret && sortByTitle("中洲店", IS_NUM);

    // 这里 仓库店与文一店不一定有数据，所以不一定有汇总值
    var arr = [ "库存", "价值", "常青店", "中洲店" ];
    ret = ret && isEqualCounts(arr);
    return ret;
}

function test100007() {
    tapMenu("货品管理", "基本设置", "货品类别");
    var keys = { "名称" : "登山服" };
    var fields = goodsTypeFields(keys);
    query(fields);
    delay();
    tapFirstText();
    tapButtonAndAlert(STOP, OK);

    tapMenu("货品管理", "库存分布");
    query();
    var qr = getQR();
    var i, ret = true;
    for (i = 0; i < qr.curPageTotal; i++) {
        if (qr.data[i]["名称"] == "登山服") {
            ret = false;
            break;
        }
    }

    tap(getTextField(window, 0));
    var texts = getStaticTexts(getPopView());
    for (i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isIn("登山服", v)) {
            ret = false;
            break;
        }
    }
    window.popover().dismiss();
    tapKeyboardHide();

    tapMenu("货品管理", "基本设置", "货品类别");
    query(fields);
    delay();
    tapFirstText();
    tapButtonAndAlert(START, OK);

    return ret;
}

function test100008_1() {
    tapMenu("货品管理", "货品进销存");
    query();

    var ret = goPageCheck();

    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("在途数", IS_NUM);
    ret = ret && sortByTitle("库存", IS_NUM);
    ret = ret && sortByTitle("累计进", IS_NUM);
    ret = ret && sortByTitle("累计销", IS_NUM);
    ret = ret && sortByTitle("上架日期", IS_DATE2);

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;// 库存，在途数，核算金额
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["在途数"]);
            sum2 += Number(qr.data[i]["库存"]);
            sum3 += Number(qr.data[i]["累计进"]);
            sum4 += Number(qr.data[i]["累计销"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = isAnd(ret, isEqual(sum1, qr.counts["在途数"]), isEqual(sum2,
            qr.counts["库存"]), isEqual(sum3, qr.counts["累计进"]), isEqual(sum4,
            qr.counts["累计销"]));
    return ret;
}

// 下拉框，条件查询，点击详细，清除按钮
// 点击详细与数据验证做到100009
function test100008() {
    tapMenu("货品管理", "货品进销存");
    var keys = { "门店" : "常青店", "款号" : "3035", "款号名称" : "jkk", "厂商" : "Vell",
        "上架从" : "2015-01-01", "到" : getToday(), "季节" : "春季", "品牌" : "Adidas" };
    var fields = queryGoodsInOutFields(keys);
    query(fields);
    var qr = getQR();
    var exp = { "厂商" : "Vell", "款号" : "3035", "名称" : "jkk", "上架日期" : "15-10-13" };
    var ret = isEqualObject(exp, qr.data[0]);
    // var a = add(qr.data[0]["在途数"], qr.data[0]["库存"]);
    // delay();
    //
    // tapFirstText(getScrollView(), "序号", 9);
    // var oStockNum = getColorSizeStockNum();
    // // 开单时是否显示当前库存 设置为显示
    // var b = Number(oStockNum["均色-均码-常青店"]);
    // // +Number(oStockNum["均色-均码-中洲店"])+Number(oStockNum["均色-均码-仓库店"])
    // ret = isAnd(ret, isEqual(a, b));
    // tapNaviLeftButton();

    tapButton(window, CLEAR);
    for (var i = 0; i < 8; i++) {
        ret = ret && isEqual("", getTextFieldValue(window, i));
    }

    return ret;
}

function test100009() {
    tapMenu("货品管理", "货品进销存");
    var keys = { "款号" : "3035" };
    var fields = queryGoodsInOutFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual("3035", qr.data[0]["款号"]);
    var a = Number(qr.data[0]["在途数"]) + Number(qr.data[0]["库存"]);

    tapFirstText();
    var b1 = 0, b2 = 0, b3 = 0;
    var oStockNum = getColorSizeStockNum();
    if (isDefined(oStockNum["均色-均码-中洲店"])) {
        b1 = Number(oStockNum["均色-均码-中洲店"]);
    }
    if (isDefined(oStockNum["均色-均码-仓库店"])) {
        b2 = Number(oStockNum["均色-均码-仓库店"]);
    }
    if (isDefined(oStockNum["均色-均码-文一店"])) {
        b3 = Number(oStockNum["均色-均码-文一店"]);
    }
    var b = Number(oStockNum["均色-均码-常青店"]) + b1 + b2 + b3;
    ret = isAnd(ret, isEqual(a, b));
    tapNaviLeftButton();

    keys = { "门店" : "常青店" };
    fields = queryGoodsInOutFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    a = add(qr.data[0]["在途数"], qr.data[0]["库存"]);

    tapFirstText();
    oStockNum = getColorSizeStockNum();
    b = Number(oStockNum["均色-均码-常青店"]);
    ret = isAnd(ret, isEqual(a, b), isUndefined(oStockNum["均色-均码-中洲店"]),
            isUndefined(oStockNum["均色-均码-仓库店"]),
            isUndefined(oStockNum["均色-均码-文一店"]));
    tapNaviLeftButton();

    return ret;
}

function test100114() {
    var r = "g" + getTimestamp(6);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw" };
    editSalesBillCustomer(json);
    var o = { "款号" : r, "名称" : r, "进货价" : 100, "零批价" : 200 };
    editSalesBillAddGoods(o);
    var f3 = new TField("数量", TF, 10, 10);
    setTFieldsValue(getScrollView(), [ f3 ]);
    editSalesBillSave(json);

    tapMenu("货品管理", "货品进销存");
    var keys = { "款号" : r };
    var fields = queryGoodsInOutFields(keys);
    query(fields);
    var qr = getQR();
    var exp = { "款号" : r, "名称" : r, "在途数" : 0, "库存" : -10, "累计进" : 0,
        "累计销" : 10, "上架日期" : getToday("yy") };
    return isEqualObject(exp, qr.data[0]);
}

// 照片无法验证
function test100010_100011_100013() {
    var qo, o, ok = true;
    // 开启这个参数，新增货品界面的门店才能修改保存成功
    qo = { "备注" : "款号是否按门店区分" };
    o = { "新值" : "1", "数值" : [ "门店只能选择自己的款号", "in" ] };
    ok = isAnd(ok, setGlobalParam(qo, o));

    var r = getTimestamp(8);
    var keys = { "款号" : "g" + r, "名称" : "n" + r };
    addGoods(keys, colorSize);

    tapMenu("货品管理", "货品查询");
    var qKeys = { "款号名称" : r };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);
    var qr = getQR();
    var ret = isEqualObject(keys, qr.data[0]);

    tapFirstText();
    var fields = editGoodsFields(keys, true);
    ret = isAnd(ret, checkShowFields(getScrollView(-1), fields));

    // 改成昨天上架
    tapButton(getScrollView(), "减量");
    var day = getTextFieldValue(getScrollView(), 5);// 上架日期
    if (day == getDay(1)) {
        tapButton(getScrollView(), "减量");
        tapButton(getScrollView(), "减量");
    }
    // 修改除了条码图片外所有内容
    var color = "均色";
    var keys1 = [ "款号", "名称", "品牌", "吊牌价", "进货价", "零批价", "打包价", "大客户价",
            "Vip价格", "产品折扣", "季节", "类别", "厂商", "计量单位", "仓位", "最小库存", "最大库存",
            "经办人", "是否加工款", "加工价", "门店", "条码", "备注" ];
    if (colorSize == "yes") {
        keys1.push("颜色", "尺码");
        color = "花色";
    }
    var fields = editGoodsFields(keys1, false);
    changeTFieldValue(fields["款号"], "g" + r + "a");
    changeTFieldValue(fields["名称"], "n" + r + "a");
    changeTFieldValue(fields["仓位"], "A座六层");
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("修改保存", OK);
    delay();
    tapReturn();// 防止未自动返回

    tapMenu("货品管理", "货品查询");
    qKeys = { "厂商" : "adida", "款号名称" : "g" + r + "a", "品牌" : "1010pp",
        "上架从" : getDay(-1), "到" : getToday(), "颜色" : color, "经办人" : "000",
        "是否停用" : "否", "类别" : "登山服", "季节" : "夏季" };
    qFields = queryGoodsFields(qKeys);
    query(qFields);
    qr = getQR();
    delay();
    var expected = { "厂商" : "Adida公司", "类别" : "登山服", "款号" : "g" + r + "a",
        "名称" : "n" + r + "a", "进货价" : "100", "零批价" : "200", "打包价" : "180",
        "品牌" : "1010pp", "总库存" : "0", "备注" : "123", "建档人" : "总经理" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected),
            isEqual("1", qr.total), isEqual("1", qr.totalPageNo));

    tapFirstText();
    ret = isAnd(ret, checkShowFields(getScrollView(-1), fields));
    tapButton(window, RETURN);

    tapButton(window, CLEAR);
    for (var i = 0; i < 10; i++) {
        if (i != 7) {
            // 是否停用无法删除
            ret = ret && isEqual("", getTextFieldValue(window, i));
        } else {
            ret = ret && isEqual("否", getTextFieldValue(window, i));
        }
    }

    qo = { "备注" : "款号是否按门店区分" };
    o = { "新值" : "0", "数值" : [ "默认不区分" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    return ret;
}

// 翻页，排序
function test100010_100011_100013_1() {
    tapMenu("货品管理", "货品查询");
    query();
    var ret = goPageCheck();

    ret = ret && sortByTitle("厂商");
    ret = ret && sortByTitle("类别");
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("进货价", IS_NUM);
    ret = ret && sortByTitle("零批价", IS_NUM);
    ret = ret && sortByTitle("打包价", IS_NUM);
    ret = ret && sortByTitle("品牌");
    ret = ret && sortByTitle("总库存", IS_NUM);
    ret = ret && sortByTitle("备注");
    ret = ret && sortByTitle("商陆宝可见");
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("建档人");

    return ret;
}

function test100014() {
    // 文本框自动向上滚动在新增修改货品时会检测
    return true;
}

function test100016() {
    // 文本框自动向上滚动在新增修改货品时会检测
    return true;
}

function test100015_100017() {
    tapMenu("货品管理", "新增货品+");
    var ret = test100015_100017Field();

    tapMenu("货品管理", "货品查询");
    query();
    tapFirstText();
    ret = ret && test100015_100017Field();

    return ret;
}

function test100015_100017Field() {
    var ret = true;
    var i, v, cell;
    var f = new TField("品牌", TF_AC, 2, "pp", -1);
    var cells = getTableViewCells(getScrollView(), f);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if ((!isIn(v, "pp")) && (!isIn(v, "Pp")) && (!isIn(v, "pP"))
                && (!isIn(v, "PP")) && (!isIn(v, "品牌"))) {
            ret = false;
            break;
        }
    }
    tapKeyboardHide();
    tapButton(window, RETURN);
    return ret;
}

function test100019() {
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = { "款号" : r, "名称" : r, "品牌" : "1010pp", "吊牌价" : "200" };
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);

    var ret = isEqual(100, getTextFieldValue(getScrollView(), 8))
            && isEqual(200, getTextFieldValue(getScrollView(), 9))
            && isEqual(180, getTextFieldValue(getScrollView(), 10))
            && isEqual(160, getTextFieldValue(getScrollView(), 11))
            && isEqual(140, getTextFieldValue(getScrollView(), 12));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    keys = { "款号名称" : r };
    fields = queryGoodsFields(qKeys);
    query(fields);
    var qr = getQR();
    ret = isAnd(ret, isEqual(100, qr.data[0]["进货价"]));

    return ret;
}

// 全局参数 仓管员是否可以根据吊牌价生成价格 为 支持,部分客户需要
// 省代模式
// 仓管员002登录
function test100020() {
    var r = getTimestamp(8);
    var keys = { "款号" : r, "名称" : r, "品牌" : "1010pp", "吊牌价" : "200" };
    addGoods(keys, colorSize);

    tapMenu("货品管理", "货品查询");
    query();
    tapFirstText(getScrollView(), TITLE_SEQ, 15);

    var ret = isEqual(200, getTextFieldValue(getScrollView(), 9))
            && isEqual(180, getTextFieldValue(getScrollView(), 10))
            && isEqual(160, getTextFieldValue(getScrollView(), 11))
            && isEqual(140, getTextFieldValue(getScrollView(), 12));
    delay();
    tapButton(window, RETURN);

    return ret;

}

// 全局参数 仓管员是否可以根据吊牌价生成价格 为 支持,部分客户需要
// 省代模式
// 开单员005登录
function test100022() {
    var r = getTimestamp(8);
    tapMenu("货品管理", "新增货品+");
    var keys = { "款号" : r, "名称" : r, "品牌" : "1010pp", "吊牌价" : "200" };
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);

    var ret = isEqual("", getTextFieldValue(getScrollView(), 9))
            && isEqual("", getTextFieldValue(getScrollView(), 10))
            && isEqual("", getTextFieldValue(getScrollView(), 11))
            && isEqual("", getTextFieldValue(getScrollView(), 12));
    delay();
    tapButton(window, RETURN);

    return ret;
}

// 全局参数 仓管员是否可以根据吊牌价生成价格 为 不支持
// 省代模式
// 仓管员002登录
function test100021() {
    tapMenu("货品管理", "新增货品+");
    var keys = [ "款号", "名称", "品牌", "吊牌价" ];
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);

    var ret = isEqual("", getTextFieldValue(getScrollView(), 9))
            && isEqual("", getTextFieldValue(getScrollView(), 10))
            && isEqual("", getTextFieldValue(getScrollView(), 11))
            && isEqual("", getTextFieldValue(getScrollView(), 12));
    delay();
    tapButton(window, RETURN);

    return ret;
}

function test100025() {
    var r = getTimestamp(8);
    var keys = { "款号" : "g" + r, "名称" : "货品" + r, "品牌" : "1010pp",
        "进货价" : "100", "产品折扣" : "0.85", "季节" : "夏季", "类别" : "登山服", "厂商" : "a",
        "计量单位" : "双", "仓位" : "默认", "最小库存" : "0", "最大库存" : "1000",
        "经办人" : "000", "是否加工款" : "是", "加工价" : 150, "门店" : "常青店", "备注" : "123" };
    addGoods(keys, colorSize, "yes");

    var expected = new Array("g" + r, "货品" + r, "1010pp", "", "", getToday(),
            100, 130, 120, 160, 150, 0.85, "夏季", "登山服", "Adida公司", "双", "默认",
            0, 1000, "000,总经理", "是", 150, "常青店", "", 123);

    var ret = test100033Field(expected);

    return ret;
}

function test100046() {
    var r = getTimestamp(8);
    var keys = { "款号" : "g" + r, "名称" : "货品" + r, "品牌" : "1010pp",
        "进货价" : "100" };
    addGoods(keys, colorSize, "yes");

    var expected = new Array("g" + r, "货品" + r, "1010pp", "", "", getToday(),
            100, 130, 120, 160, 150, 1, "春季", "", "", "件", "默认", "0", "0", "",
            "否", 0, "常青店", "", "");
    var ret = test100033Field(expected);

    return ret;
}

function test100033() {
    var qo, o, ret = true;
    var r = getTimestamp(8);
    var keys = { "款号" : "g" + r, "名称" : "货品" + r, "品牌" : "1010pp",
        "吊牌价" : "200" };
    addGoods(keys);
    var price = { "进货价" : "100", "零批价" : "200", "打包价" : "180", "大客户价" : "160",
        "Vip价格" : "140" };
    keys = mixObject(keys, price);
    var fields = editGoodsFields(keys, true);

    tapMenu2("货品查询");
    var qKeys = { "款号名称" : expected[1] };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);
    tapFirstText();
    var ret = checkShowFields(getScrollView(), fields);
    tapReturn();
    return ret;
}

function test100034() {
    var qo, o, ret = true;
    qo = { "备注" : "款号是否按门店区分" };
    o = { "新值" : "1", "数值" : [ "门店只能选择自己的款号", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = getTimestamp(8);
    var keys = { "款号" : "g" + r, "名称" : "货品" + r, "品牌" : "1010pp",
        "吊牌价" : "200", "产品折扣" : "0.85", "季节" : "夏季", "类别" : "登山服", "厂商" : "a",
        "计量单位" : "双", "仓位" : "默认", "最小库存" : "0", "最大库存" : "1000",
        "经办人" : "000", "是否加工款" : "是", "加工价" : 150, "门店" : "常青店", "条码" : "111",
        "备注" : "123" };
    addGoods(keys);

    // var f = editGoodsFields(keys);
    var expected = new Array("g" + r, "货品" + r, "1010pp", "", "", getToday(),
            200, 100, 200, 180, 160, 140, 0.85, "夏季", "登山服", "Adida公司", "双",
            "默认", 0, 1000, "000,总经理", "是", 150, "常青店", "111", 123);
    ret = isAnd(ret, test100033Field(expected));

    qo = { "备注" : "款号是否按门店区分" };
    o = { "新值" : "0", "数值" : [ "默认不区分", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    return ret;
}

function test100023() {
    var r = getTimestamp(8);
    var keys = { "款号" : "g" + r, "名称" : "货品" + r, "颜色" : "0,1", "尺码" : "0",
        "进货价" : "100" };
    addGoods(keys, colorSize, "yes");

    var expected = new Array("g" + r, "货品" + r, "", "花色,黑色,", "s,", getToday(),
            100, 130, 120, 160, 150, 1, "春季", "", "", "件", "默认", "0", "0", "",
            "否", 0, "常青店", "", "");

    var ret = test100033Field(expected);

    return ret;
}

function test100024() {
    var r = getTimestamp(8);
    var keys = { "款号" : "g" + r, "名称" : "货品" + r, "品牌" : "1010pp",
        "颜色" : "0,1", "尺码" : "0", "进货价" : "100", "产品折扣" : "0.85", "季节" : "夏季",
        "类别" : "登山服", "厂商" : "a", "计量单位" : "双", "仓位" : "默认", "最小库存" : "0",
        "最大库存" : "1000", "经办人" : "000", "是否加工款" : "是", "加工价" : 150,
        "门店" : "常青店", "备注" : "123" };
    addGoods(keys, colorSize, "yes");

    var expected = new Array("g" + r, "货品" + r, "1010pp", "花色,黑色,", "s,",
            getToday(), 100, 130, 120, 160, 150, 0.85, "夏季", "登山服", "Adida公司",
            "双", "默认", 0, 1000, "000,总经理", "是", 150, "常青店", "", 123);

    var ret = test100033Field(expected);

    return ret;
}

function test100029() {
    var r = getTimestamp(8);
    var keys = { "款号" : "g" + r, "名称" : "货品" + r, "品牌" : "1010pp",
        "颜色" : "0,1", "尺码" : "0", "吊牌价" : "200", "产品折扣" : "0.85", "季节" : "夏季",
        "类别" : "登山服", "厂商" : "a", "计量单位" : "双", "仓位" : "默认", "最小库存" : "0",
        "最大库存" : "1000", "经办人" : "000", "是否加工款" : "是", "加工价" : 150,
        "门店" : "常青店", "备注" : "123" };
    addGoods(keys, colorSize);

    var expected = new Array("g" + r, "货品" + r, "1010pp", "花色,黑色,", "s,",
            getToday(), 200, 100, 200, 180, 160, 140, 0.85, "夏季", "登山服",
            "Adida公司", "双", "默认", "0", "1000", "000,总经理", "是", 150, "常青店", "",
            "123");

    var ret = test100033Field(expected);

    return ret;
}

function test100031() {
    var r = getTimestamp(8);
    var keys = { "款号" : "g" + r, "名称" : "货品" + r, "品牌" : "1010pp",
        "颜色" : "0,1", "尺码" : "0", "吊牌价" : "200" };
    addGoods(keys, colorSize);

    var expected = new Array("g" + r, "货品" + r, "1010pp", "花色,黑色,", "s,",
            getToday(), 200, 100, 200, 180, 160, 140, 1, "春季", "", "", "件",
            "默认", "0", "0", "", "否", 0, "常青店", "", "");

    var ret = test100033Field(expected);

    return ret;
}

function test100035() {
    // tapMenu("货品管理", "新增货品+");
    // var r = getTimestamp(8);
    // var keys = [ "款号", "名称"];
    // var fields = editGoodsFields(keys, false);
    // changeTFieldValue(fields["款号"], r);
    // changeTFieldValue(fields["名称"], r);
    // setTFieldsValue(getScrollView(), fields);

    // tapButton(getScrollView(),1);
    // var g0 = new TField("品牌名称", TF, 0, "pp"+r);
    // fields = [ g0 ];
    // setTFieldsValue(getPopView(), fields);
    // tapButton(getPop(), OK);
    // tapButton(getPop(), CLOSE);

    // tapButton(getScrollView(), 3);
    // var g0 = new TField("颜色组", BTN_SC, "选 择", "中");
    // var g1 = new TField("品牌名称", TF, 1, "Color"+r); ,g1
    // var fields = [ g0 ];
    // setTFieldsValue(getPopView(), fields);
    // tapButton(getPop(), OK);
    // tapButton(getPop(), CLOSE);

    // saveAndAlertOk();
    // tapPrompt();
    // delay();
    // tapButton(window, RETURN);

}

function test100038_100039_100040() {
    // 最小库存=最大库存
    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var keys = [ "最小库存", "最大库存" ];
    var fields = editGoodsFields(keys, false);
    changeTFieldValue(fields["最小库存"], 90);
    changeTFieldValue(fields["最大库存"], 90);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("修改保存");

    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var ret1 = isEqual(90, getTextFieldValue(getScrollView(), 19))
            && isEqual(90, getTextFieldValue(getScrollView(), 20));

    // 最小库存<最大库存
    changeTFieldValue(fields["最大库存"], 95);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("修改保存");

    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var ret2 = isEqual(90, getTextFieldValue(getScrollView(), 19))
            && isEqual(95, getTextFieldValue(getScrollView(), 20));

    // 最小库存>最大库存
    changeTFieldValue(fields["最大库存"], 80);
    setTFieldsValue(getScrollView(), fields);
    var ret3 = false;
    tapButtonAndAlert("修改保存");
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "操作失败")) {
        ret3 = true;
    }
    delay();
    tapButton(window, RETURN);

    // logDebug("ret1=" + ret1 + " ret2=" + ret2 + " ret3=" + ret3);
    return ret1 && ret2 && ret3;
}

function test100102_100103() {
    var qo, o, ret = true;
    qo = { "备注" : "货品条形码关联颜色尺码" };
    o = { "新值" : "0", "数值" : [ "默认不关联", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("货品管理", "货品查询");
    query();
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    var code = getTextFieldValue(getScrollView(), 0);
    var keys = { "款号" : "款号" + code };
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("修改保存", OK);
    delay();

    var qr = getQR();
    var ret = isEqual(qr.data[0]["款号"], "款号" + code);

    qo = { "备注" : "货品条形码关联颜色尺码" };
    o = { "新值" : "1", "数值" : [ "关联颜色尺码", "in" ] };
    setGlobalParam(qo, o);

    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    tapButtonAndAlert("修改保存", OK);
    delay();
    tapPrompt();
    ret = ret && isIn(alertMsg, "该款号包括了中文");
    tapButton(window, RETURN);

    return ret;

}

// 显示条码，重设条码有疑问未点
function test100042_100045() {
    tapMenu("货品管理", "新增货品+");
    tapButton(window, "显示条码");
    var cond = tapNaviLeftButton();
    waitUntil(cond, 5);

    var view = getScrollView();
    var f = new TField("品牌", TF_AC, 2, "y", -1);
    var ret1 = testCheckCustomerDropDownListField(f, view);
    f = new TField("厂商", TF_AC, 16, "yu", -1);
    ret1 = isAnd(ret1, testCheckCustomerDropDownListField(f, view));
    f = new TField("店员", TF_AC, 21, "y", -1);
    ret1 = isAnd(ret1, testCheckCustomerDropDownListField(f, view));
    tapReturn();

    tapMenu("货品管理", "货品查询");
    query();
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    tapButton(window, "重设条码");
    var f = new TField("品牌", TF_AC, 2, "y", -1);
    var ret2 = testCheckCustomerDropDownListField(f, view);
    f = new TField("厂商", TF_AC, 16, "yu", -1);
    ret2 = isAnd(ret2, testCheckCustomerDropDownListField(f, view));
    f = new TField("店员", TF_AC, 21, "y", -1);
    ret2 = isAnd(ret2, testCheckCustomerDropDownListField(f, view));
    delay();
    tapButton(window, RETURN);
    if (getButton(window, RETURN).isVisible()) {
        tapPrompt();
        tapButton(window, RETURN);
    }

    return isAnd(ret1, ret2);

}

// 品牌，厂商，经办人下拉框验证
function test100042_100045Field() {
    var ret = true;
    var i, v, cell, cells;

    var f0 = new TField("品牌", TF_AC, 2, "x", -1);
    cells = getTableViewCells(getScrollView(), f0);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isEqual("小薛", v)) {
            ret = false;
            break;
        }
        if (isEqual("雪儿服装", v)) {
            ret = false;
            break;
        }
    }
    tapKeyboardHide();
    delay();

    var f1 = new TField("厂商", TF_AC, 16, "x", -1);
    cells = getTableViewCells(getScrollView(), f1);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isEqual("香奈儿", v)) {
            ret = false;
            break;
        }
        if (isEqual("小薛", v)) {
            ret = false;
            break;
        }
    }
    tapKeyboardHide();
    delay();

    var f2 = new TField("经办人", TF_AC, 21, "y", -1);
    cells = getTableViewCells(getScrollView(), f2);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isEqual("yun厂商", v)) {
            ret = false;
            break;
        }
        if (isEqual("圆梦", v)) {
            ret = false;
            break;
        }
    }
    tapKeyboardHide();

    return ret;

}

function test100092() {
    tapMenu("货品管理", "新增货品+");
    var keys = { "款号" : "goods", "名称" : "goods" }
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);

    keys = { "最小库存" : "a" };
    var ret = test100092Field(keys);

    keys = { "最小库存" : "!" };
    ret = ret && test100092Field(keys);

    tap(window.scrollViews()[0].textFields()[19]);
    var ok = tap(window.scrollViews()[0].textFields()[19].buttons()["清除文本"]);
    if (!ok) {
        tap(window.scrollViews()[0].textFields()[19].buttons()["Clear text"]);
    }

    keys = { "最大库存" : "a" };
    ret = ret && test100092Field(keys);

    keys = { "最大库存" : "!" };
    ret = ret && test100092Field(keys);

    tapReturn();

    return ret;
}

function test100092Field(keys) {
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "填入的值必须是数字");

    return ret;
}

function test100054_1() {
    var r = "g" + getTimestamp(8);
    var ret = false;
    var keys = { "款号" : r, "名称" : r };
    addGoods(keys, colorSize);

    tapMenu("货品管理", "货品查询");
    var qKeys = { "款号名称" : r };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量操作");
    delay();
    runAndAlert("test10_tapBatchStop", OK);

    // 新增相同款号, 名称不同
    keys = { "款号" : r, "名称" : "a" + r };
    addGoods(keys, colorSize);

    tapMenu("货品管理", "货品查询");
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量操作");
    delay();
    runAndAlert("test10_tapBatchStop", OK);
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "操作失败")) {
        ret = true;
    }
    tapNaviLeftButton();

    return ret;

}

function test100054_2() {
    // 前几天停用款号xxf002，批量停用含有款号xxf002，一天只能跑一次
    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称" ];
    var fields = editGoodsFields(keys, false);
    changeTFieldValue(fields["款号"], "xxf002");
    changeTFieldValue(fields["名称"], "xxf002" + r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapReturn();

    tapMenu("货品管理", "货品查询");
    query();
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量操作");
    delay();
    tapButton(getScrollView(-1, 0), "批量停用");
    tapButtonAndAlert("none", OK);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "是否停用" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["是否停用"], "是");
    query(qFields);
    var qr = getQR();
    var ret = isIn(qr.data[0]["款号"], "xxf002");

    // 防止影响其他用例
    changeTFieldValue(qFields["是否停用"], "否");
    query(qFields);

    return ret;
}

function test100111() {
    tapMenu("货品管理", "基本设置", "新增品牌+");
    var keys1 = { "名称" : "'" };
    var ret = test100111Field(keys1);
    var keys2 = { "名称" : "," };
    ret = ret && test100111Field(keys2);
    var keys3 = { "名称" : "&" };
    ret = ret && test100111Field(keys3);
    tapReturn();

    tapMenu("货品管理", "基本设置", "所有品牌");
    tapFirstText();
    ret = ret && test100111Field(keys1);
    ret = ret && test100111Field(keys2);
    ret = ret && test100111Field(keys3);
    tapReturn();

    tapMenu("货品管理", "新增货品+");
    tapButton(getScrollView(), 1);
    var f = new TField("品牌名称", TF, 0, "'");
    setTFieldsValue(getPopView(), [ f ]);
    tapButton(getPop(), OK);
    tapPrompt();
    ret = ret && isIn(alertMsg, "不能有非法符号");

    f = new TField("品牌名称", TF, 0, "&");
    setTFieldsValue(getPopView(), [ f ]);
    tapButton(getPop(), OK);
    tapPrompt();
    ret = ret && isIn(alertMsg, "不能有非法符号");

    f = new TField("品牌名称", TF, 0, ",");
    setTFieldsValue(getPopView(), [ f ]);
    tapButton(getPop(), OK);
    tapPrompt();
    ret = ret && isIn(alertMsg, "不能有非法符号");
    tapButton(getPop(), CLOSE);
    tapReturn();

    return ret;
}

function test100111Field(keys) {
    var fields = editGoodsBrandFields(keys);
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    var ret = isIn(alertMsg, "不能有非法符号");

    return ret;
}

// 均色均码的只有一条记录
function test100058() {
    var r = "g" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : r };
    addGoods(keys, colorSize);

    tapMenu("货品管理", "货品查询");
    query();
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    tapButton(window, "显示条码");
    var qr = getQRtable1();
    // getTableViews(),"序号","条码"
    var expected = { "序号" : "1", "款号" : r, "名称" : r, "颜色" : "均色", "尺码" : "均码" };
    var ret = isEqualQRData1Object(qr, expected);
    tapNaviLeftButton();
    tapButton(window, RETURN);

    return ret;
}

function test100124() {
    // 检查货品管理-当前库存、款号库存、库存分布、货品查询界面的查询条件 “是否停用”
    // 点到相应界面，查询条件 “是否停用”的内容就会刷新变成默认值“否”
    tapMenu("货品管理", "当前库存");
    var keys = { "是否停用" : "是" };
    var f = queryGoodsStockFields(keys);
    setTFieldsValue(window, f);
    tapMenu2("款号库存");
    tapMenu2("当前库存");
    var ret = isEqual("否", getTextFieldValue(window, f["是否停用"].index));

    tapMenu2("款号库存");
    f = queryGoodsCodeStockFields(keys);
    setTFieldsValue(window, f);
    tapMenu2("当前库存");
    tapMenu2("款号库存");
    ret = isAnd(ret, isEqual("否", getTextFieldValue(window, f["是否停用"].index)));

    tapMenu2("库存分布");
    f = queryGoodsDistributionFields(keys);
    setTFieldsValue(window, f);
    tapMenu2("当前库存");
    tapMenu2("库存分布");
    ret = isAnd(ret, isEqual("否", getTextFieldValue(window, f["是否停用"].index)));

    tapMenu2("货品查询");
    f = queryGoodsFields(keys);
    setTFieldsValue(window, f);
    tapMenu2("当前库存");
    tapMenu2("货品查询");
    ret = isAnd(ret, isEqual("否", getTextFieldValue(window, f["是否停用"].index)));
    return ret;
}

function ts100129() {
    tapMenu("货品管理", "货品进销存");
    var keys = { "款号名称" : "打包价" };
    var fields = queryGoodsInOutFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual(0, qr.data.length);

    keys = { "款号名称" : "抹零" };
    fields = queryGoodsInOutFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length));
    return ret;
}

function testGoodsPriceChangeField(keys, expected, All) {
    tapMenu("货品管理", "批量调价");
    var fields = goodsPricingFields(keys);
    delay();
    setTFieldsValue(getScrollView(-1, 0), fields);
    tapButton(getScrollView(-1, 0), "确 定");

    var qr = getQR();
    var ret = isAqualNum(expected, qr.data[0]["零批价"], 0.99)
            && isAqualNum(expected, qr.data[0]["打包价"], 0.99);
    if (All == undefined) {
        ret = ret && isEqual("100", qr.data[0]["进货价"]);
    }
    // isUndefined
    tapFirstText(getScrollView(), TITLE_SEQ, 15);
    ret = ret
            && isEqual("200", getTextFieldValue(getScrollView(), 7))
            && isEqual("100", getTextFieldValue(getScrollView(), 8))
            && isAqualNum(expected, getTextFieldValue(getScrollView(), 9), 0.99)
            && isAqualNum(expected, getTextFieldValue(getScrollView(), 10),
                    0.99)
            && isAqualNum(expected, getTextFieldValue(getScrollView(), 11),
                    0.99)
            && isAqualNum(expected, getTextFieldValue(getScrollView(), 12),
                    0.99);

    tapButton(window, RETURN);
    return ret;
}

function test100047_100048_100049_100050_100051_100052() {
    tapMenu("货品管理", "货品查询");
    var r = getRandomInt(1000) + 1;

    var qKeys = { "款号名称" : "tjcs1" }; // 调价测试1
    var qFields = queryGoodsFields(qKeys);
    query(qFields);

    // 输入查询条件，修改
    tapChoose(getScrollView(), [ 0 ]);
    var keys = { "零批价" : r, "打包价" : r, "大客户价" : r, "Vip价格" : r };
    var ret = testGoodsPriceChangeField(keys, r);

    // 统一加
    tapChoose(getScrollView(), [ 0 ]);
    keys = { "统一加减" : "200" };
    ret = ret && testGoodsPriceChangeField(keys, r + 200);

    // 统一减，结果为正
    tapChoose(getScrollView(), [ 0 ]);
    keys = { "统一加减" : "-200" };
    ret = ret && testGoodsPriceChangeField(keys, r);

    // 统一减，结果为负
    tapChoose(getScrollView(), [ 0 ]);
    tapMenu("货品管理", "批量调价");
    keys = { "统一加减" : "-10000" };
    var fields = goodsPricingFields(keys);
    delay();
    setTFieldsValue(getScrollView(-1, 0), fields);
    tapButton(getScrollView(-1, 0), "确 定");
    var ret1 = false;
    tap(app.alert().buttons()["确 定"]);
    if (isIn(alertMsg, "该操作会导致价格负数")) {
        ret1 = true;
    }
    tapNaviLeftButton();
    delay();

    // 统一乘 正值
    // tapChoose(getScrollView(), [ 0 ]);
    keys = { "统一乘" : "0.5" };
    ret = ret && testGoodsPriceChangeField(keys, r * 0.5);

    // // 统一乘 负值
    // tapChoose(getScrollView(), [ 0 ]);
    // tapMenu("货品管理", "批量调价");
    // var keys5 = [ "统一乘" ];
    // var fields5 = goodsPricingFields(keys5);
    // changeTFieldValue(fields5["统一乘"], "-1");
    // setTFieldsValue(getScrollView(-1,0), fields5);
    // tapButton(getScrollView(-1,0), "确 定");
    // tapNaviLeftButton();
    // var ret5 = false;
    // if (isIn(alertMsg, "该操作会导致价格负数")) {
    // tapPrompt();
    // ret5 = true;
    // }

    return ret && ret1;
}

function test100047_100048_100049_100050_100051_100052All() {
    tapMenu("货品管理", "货品查询");
    var r = getRandomInt(1000) + 1;
    var i, j, l, p;

    var qKeys = { "款号名称" : "plczcs" };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);

    // 修改零批价，打包价，vip价格
    tapButton(window, ALL);
    var keys = { "零批价" : r, "打包价" : r, "大客户价" : r, "Vip价格" : r };
    var ret = testGoodsPriceChangeField(keys, r, "All");
    var qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        l = qr.data[i]["零批价"];
        p = qr.data[i]["打包价"];
        if ((l != r) || (p != r)) {
            ret = false;
        }
    }

    // 统一加
    tapButton(window, ALL);
    keys = { "统一加减" : "200" };
    ret = ret && testGoodsPriceChangeField(keys, r + 200, "All");
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        l = qr.data[i]["零批价"];
        p = qr.data[i]["打包价"];
        if ((l != r + 200) || (p != r + 200)) {
            ret = false;
        }
    }
    delay();

    // 统一减，结果为正
    tapButton(window, ALL);
    keys = { "统一加减" : "-200" };
    ret = ret && testGoodsPriceChangeField(keys, r, "All");
    qr = getQR();
    // debugQResult(qr2);
    for (i = 0; i < qr.curPageTotal; i++) {
        l = qr.data[i]["零批价"];
        p = qr.data[i]["打包价"];
        if ((l != r) || (p != r)) {
            ret = false;
        }
    }
    delay();

    // 统一减，结果为负
    tapButton(window, ALL);
    tapMenu("货品管理", "批量调价");
    keys = { "统一加减" : "-10000" };
    var fields = goodsPricingFields(keys);
    delay();
    setTFieldsValue(getScrollView(-1, 0), fields);
    tapButton(getScrollView(-1, 0), "确 定");
    var ret1 = false;
    tap(app.alert().buttons()["确 定"]);
    if (isIn(alertMsg, "该操作会导致价格负数")) {
        ret1 = true;
    }
    tapNaviLeftButton();
    delay();

    // 统一乘 正值
    // tapButton(window, ALL);
    tapMenu("货品管理", "批量调价");
    keys = { "统一乘" : "0.5" };
    ret = ret && testGoodsPriceChangeField(keys, r * 0.5, "All");
    qr = getQR();
    for (i = 0; i < qr.curPageTotal; i++) {
        l = qr.data[i]["零批价"];
        p = qr.data[i]["打包价"];
        var diff1 = Math.abs(l - r * 0.5);
        var diff2 = Math.abs(p - r * 0.5);
        // logDebug("diff1="+diff1+" diff2="+diff2);
        if ((diff1 > 1) || (diff2 > 1)) {
            ret = false;
        }
    }

    // // 统一乘 负值
    // tapButton(window,ALL);
    // tapMenu("货品管理", "批量调价");
    // var keys5 = [ "统一乘" ];
    // var fields5 = goodsPricingFields(keys5);
    // changeTFieldValue(fields5["统一乘"], "-1");
    // setTFieldsValue(getScrollView(1), fields5);
    // tapButton(getScrollView(1), "确 定");
    // tapNaviLeftButton();
    // var ret5 = false;
    // if (isIn(alertMsg, "该操作会导致价格负数")) {
    // tapPrompt();
    // ret5 = true;
    // }

    logDebug("ret=" + ret + "   ret1=" + ret1);
    return ret && ret1;
}

function test100053() {
    tapMenu("货品管理", "货品查询");
    // 批量操作测试1，2，3
    var qKeys = { "款号名称" : "plczcs", "是否停用" : "否" };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);
    // delay();
    tapChoose(getScrollView(), [ 0, 1, 2 ]);
    tapMenu("货品管理", "批量操作");
    delay();
    runAndAlert("test10_tapBatchStop", OK);

    qKeys = { "款号名称" : "plczcs", "是否停用" : "是" };
    qFields = queryGoodsFields(qKeys);
    query(qFields);
    var qr = getQR();
    var ret = isInQRDataAllByTitle(qr, "名称", "批量操作测试")
            && isEqual("3", qr.total);

    tapChoose(getScrollView(), [ 0, 1, 2 ]);
    tapMenu("货品管理", "批量操作");
    delay();
    runAndAlert("test10_tapBatchStart", OK);

    qKeys = { "款号名称" : "plczcs", "是否停用" : "否" };
    qFields = queryGoodsFields(qKeys);
    query(qFields);
    qr = getQR();
    ret = ret && isInQRDataAllByTitle(qr, "名称", "批量操作测试")
            && isEqual("3", qr.total);

    return ret;
}

function test10_tapBatchStop() {
    tapButton(getScrollView(-1, 0), "批量停用");
}
function test10_tapBatchStart() {
    tapButton(getScrollView(-1, 0), "批量启用");
}

function test100060() {
    var i, f, cells, cell, v;
    var ret1 = false, ret4 = false, ret5 = false;
    var ret2 = false;

    tapMenu("货品管理", "当前库存");
    f = new TField("品牌", TF_AC, 10, "z", -1);
    cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isEqual("真维斯", v)) {
            ret1 = true;
            break;
        }
    }
    tapButton(window, CLEAR);

    var keys = { "品牌" : "zws" };
    var fields = queryGoodsStockFields(keys);
    setTFieldsValue(window, fields);
    ret2 = isEqual("真维斯", getTextFieldValue(window, 10));
    delay();
    tapButton(window, CLEAR);

    // fields = queryGoodsStockFields(keys);
    // fields["品牌"].p3 = { "键盘" : "简体拼音", "拼音" : [ "zhen" ], "汉字" : [ "真" ] };
    // setTFieldsValue(window, fields);
    // var ret3 = isEqual("真维斯", getTextFieldValue(window, 10));
    // tapButton(window, CLEAR);

    //
    tapMenu("货品管理", "货品查询");
    f = new TField("品牌", TF_AC, 6, "z", -1);
    cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isEqual("真维斯", v)) {
            ret4 = true;
            break;
        }
    }
    tapButton(window, CLEAR);

    keys = { "品牌" : "zws" };
    fields = queryGoodsFields(keys);
    setTFieldsValue(window, fields);
    ret2 = ret2 && isEqual("真维斯", getTextFieldValue(window, 6));
    delay();
    tapButton(window, CLEAR);

    // fields = queryGoodsFields(keys);
    // fields["品牌"].p3 = { "键盘" : "简体拼音", "拼音" : [ "zhen" ], "汉字" : [ "真" ] };
    // setTFieldsValue(window, fields);
    // ret3 = ret3 && isEqual("真维斯", getTextFieldValue(window, 6));
    // tapButton(window, CLEAR);

    //
    tapMenu("货品管理", "货品进销存");
    f = new TField("品牌", TF_AC, 7, "z", -1);
    cells = getTableViewCells(window, f);
    for (i = 0; i < cells.length; i++) {
        cell = cells[i];
        v = cell.name();
        if (isEqual("真维斯", v)) {
            ret5 = true;
            break;
        }
    }
    tapButton(window, CLEAR);

    keys = { "品牌" : "zws" };
    fields = queryGoodsInOutFields(keys);
    setTFieldsValue(window, fields);
    ret2 = ret2 && isEqual("真维斯", getTextFieldValue(window, 7));
    delay();
    tapButton(window, CLEAR);

    // fields = queryGoodsInOutFields(keys);
    // fields["品牌"].p3 = { "键盘" : "简体拼音", "拼音" : [ "zhen" ], "汉字" : [ "真" ] };
    // setTFieldsValue(window, fields);
    // ret3 = ret3 && isEqual("真维斯", getTextFieldValue(window, 7));
    // tapButton(window, CLEAR);

    logDebug("ret1=" + ret1 + "   ret2=" + ret2 + "   ret4=" + ret4
            + "   ret5=" + ret5);
    return ret1 && ret2 && ret4 && ret5;// &ret3
}

function test100073_100074() {
    tapMenu("货品管理", "更多", "新增仓位+");
    saveAndAlertOk();
    tapButtonAndAlert("none", OK, true);
    var ret = isIn(alertMsg, "名称不能为空");

    var f0 = new TField("名称", TF, 0, "AB");
    var fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapButtonAndAlert("none", OK, true);
    ret = isAnd(ret, isIn(alertMsg, "相同记录已存在"));

    var r = "cw123" + getTimestamp(15);
    f0 = new TField("名称", TF, 0, r);
    fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapReturn();

    tapButton(window, CLEAR);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var qr = getQR();
    var data1 = qr.data[0];
    ret = isAnd(ret, isEqual(r, qr.data[0]["名称"]));

    tapFirstText();
    ret = isAnd(ret, isEqual(r, getTextFieldValue(getScrollView(), 0)));
    tapReturn();
    ret = isAnd(ret, isEqualObject(data1, qr.data[0]));

    return ret;

}

function test100068_100069() {
    tapMenu("货品管理", "更多", "新增仓位+");
    var r = "cw" + getTimestamp(6);
    var f0 = new TField("名称", TF, 0, r);
    var fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "更多", "仓位列表");
    query();
    var ret = goPageCheck();

    ret = ret && sortByTitle("名称");

    query(fields);
    var qr = getQR();
    ret = ret && isEqual(r, qr.data[0]["名称"]);

    query();
    ret = ret && isEqual("", getTextFieldValue(window, 0));

    return ret;
}

function test100070() {
    tapMenu("货品管理", "更多", "新增仓位+");
    var r = "cw" + getTimestamp(6);
    var f0 = new TField("名称", TF, 0, r);
    var fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "更多", "仓位列表");
    tapButton(window, CLEAR);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    delay();
    tapFirstText(getScrollView(), "序号", 2);

    clearTField(getScrollView(), f0);
    tapButtonAndAlert("保存修改");
    tapButtonAndAlert("none", OK, true);

    tapKeyboardHide();
    delay();
    tapPrompt();
    var ret1 = isIn(alertMsg, "名称不能为空");

    f0 = new TField("名称", TF, 0, "AB");
    fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("保存修改");
    tapButtonAndAlert("none", OK, true);
    var ret2 = isIn(alertMsg, "相同记录已存在");

    var r1 = r + "edit";
    f0 = new TField("名称", TF, 0, r1);
    fields = [ f0 ];
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert("保存修改");
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "更多", "仓位列表");
    tapButton(window, CLEAR);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    var qr = getQR();
    var ret3 = isEqual(r1, qr.data[0]["名称"]);

    logDebug("ret1=" + ret1 + "   ret2=" + ret2 + "   ret3" + ret3);
    return ret1 && ret2 && ret3;

}

function test100079_100080_100081() {
    var r = "cc" + getTimestamp(6);
    tapMenu("采购入库", "新增入库+");
    var f0 = new TField("厂商", TF_AC, 0, "vell");
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    tapButton(window, "新增货品+");
    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g2 = new TField("进货价", TF, 2, 100);
    fields = [ g0, g1, g2 ];
    setTFieldsValue(getPopOrView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var g3 = new TField("数量", TF, 11, 100);
    fields = [ g3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    // 修改最大库存为0
    tapMenu("货品管理", "货品查询");
    query();
    tapFirstText(getScrollView(), "序号", 15);
    var keys = { "最大库存" : "0" };
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(EDIT_SAVE);
    tapPrompt();
    delay();

    tapMenu("货品管理", "更多", "超储统计");
    var keys = { "款号" : r };
    var fields = goodsStatisticFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual(0, qr.data.length);

    // 修改最大库存为100
    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), "序号", 15);
    keys = [ "最大库存" ];
    fields = editGoodsFields(keys, false);
    changeTFieldValue(fields["最大库存"], 100);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(EDIT_SAVE);
    tapPrompt();
    delay();

    tapMenu("货品管理", "更多", "超储统计");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length));

    // 修改最大库存为10
    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), "序号", 15);
    keys = [ "最大库存" ];
    fields = editGoodsFields(keys, false);
    changeTFieldValue(fields["最大库存"], 10);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(EDIT_SAVE);
    tapPrompt();
    delay();

    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "000", "接收店" : "中洲店",
        "明细" : [ { "货品" : r, "数量" : "15" } ] };
    editShopOutDecruitIn(json, colorSize);

    tapMenu("货品管理", "更多", "超储统计");
    tapButton(window, QUERY);
    qr = getQR();
    var expected = { "款号" : r, "名称" : r, "上架日期" : getToday("yy"),
        "现有库存" : "85", "最大库存" : "10", "超储数" : "75" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    return ret;
}

function test100086() {
    var r = "cc" + getTimestamp(6);
    tapMenu("采购入库", "新增入库+");
    var f0 = new TField("厂商", TF_AC, 0, "vell");
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    tapButton(window, "新增货品+");
    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g2 = new TField("进货价", TF, 2, 100);
    fields = [ g0, g1, g2 ];
    setTFieldsValue(getPopOrView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var g3 = new TField("数量", TF, 11, -10);
    fields = [ g3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    tapMenu("货品管理", "更多", "缺货统计");
    var keys = { "款号" : r };
    var fields = goodsStatisticFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual(0, qr.data.length);

    return ret;

}

function test100087_100088_100089() {
    var r = "cc" + getTimestamp(6);
    tapMenu("采购入库", "新增入库+");
    var f0 = new TField("厂商", TF_AC, 0, "vell");
    var fields = [ f0 ];
    setTFieldsValue(window, fields);

    tapButton(window, "新增货品+");
    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g2 = new TField("进货价", TF, 2, 100);
    fields = [ g0, g1, g2 ];
    setTFieldsValue(getPopOrView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var g3 = new TField("数量", TF, 11, 100);
    fields = [ g3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapButton(window, RETURN);

    // 库存=最小库存
    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), "序号", 15);
    var keys = { "最小库存" : 100, "最大库存" : 200 };
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(EDIT_SAVE);
    tapPrompt();
    delay();

    tapMenu("货品管理", "更多", "缺货统计");
    var keys = { "款号" : r };
    var fields = goodsStatisticFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual(0, qr.data.length);

    // 最小库存<库存<最大库存
    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), "序号", 15);
    keys = { "最小库存" : 90, "最大库存" : 120 };
    fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(EDIT_SAVE);
    tapPrompt();
    delay();

    tapMenu("货品管理", "更多", "缺货统计");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(0, qr.data.length));

    // 库存<最小库存
    tapMenu("货品管理", "货品查询");
    tapFirstText(getScrollView(), "序号", 15);
    keys = { "最小库存" : 120, "最大库存" : 200 };
    fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(EDIT_SAVE);
    tapPrompt();
    delay();

    tapMenu("门店调出", "批量调出+");
    var json = { "调出人" : "000", "接收店" : "中洲店",
        "明细" : [ { "货品" : r, "数量" : "15" } ] };
    editShopOutDecruitIn(json, colorSize);

    tapMenu("货品管理", "更多", "缺货统计");
    tapButton(window, QUERY);
    var qr = getQR();
    var expected = { "款号" : r, "名称" : r, "上架日期" : getToday("yy"),
        "现有库存" : "85", "最小库存" : "120", "缺货数" : "35" };
    ret = isAnd(ret, isEqualQRData1Object(qr, expected));

    return ret;
}

function test100075_100076_100077_100078() {
    var r = "cc" + getTimestamp(6);
    var max = getRandomInt(9) + 1;
    var stock = getRandomInt(50) + 50;
    tapMenu("货品管理", "新增货品+");
    var keys = { "款号" : r, "名称" : r, "最大库存" : max };
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay(2);
    tapButton(window, RETURN);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : stock } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "更多", "超储统计");
    var i, j;
    var sum1 = 0, sum2 = 0, sum3 = 0;
    query();
    var ret = goPageCheck();
    // 默认按超储数降序排序
    ret = ret && compareQR("超储数", IS_NUM, "desc");

    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("上架日期", IS_DATE2);
    ret = ret && sortByTitle("现有库存", IS_NUM);
    ret = ret && sortByTitle("最大库存", IS_NUM);
    ret = ret && sortByTitle("超储数", IS_NUM);

    var qr = getQR();
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum1 = sum1 + Number(qr.data[i]["现有库存"]);
            sum2 = sum2 + Number(qr.data[i]["最大库存"]);
            sum3 = sum3 + Number(qr.data[i]["超储数"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = ret && isEqual(qr.counts["现有库存"], sum1)
            && isEqual(qr.counts["最大库存"], sum2)
            && isEqual(qr.counts["超储数"], sum3);

    var keys = { "款号" : r, "款号名称" : r, "上架从" : getToday(), "到" : getToday() };
    var fields = goodsStatisticFields(keys);
    query(fields);
    qr = getQR();
    ret = ret && isEqual(r, qr.data[0]["款号"]) && isEqual(r, qr.data[0]["名称"])
            && isEqual(getToday("yy"), qr.data[0]["上架日期"])
            && isEqual(stock, qr.data[0]["现有库存"])
            && isEqual(max, qr.data[0]["最大库存"])
            && isEqual(sub(stock, max), qr.data[0]["超储数"])
            && isEqual("1", qr.total) && isEqual("1", qr.totalPageNo);

    tapButton(window, CLEAR);
    ret = ret && isEqual("", getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3));

    return ret;
}

function test100082_100083_100084_100085_100093() {
    var r = "cc" + getTimestamp(6);
    var min = getRandomInt(50) + 50;
    var stock = getRandomInt(min);
    if (stock == 0) {
        stock = 1;
    }

    tapMenu("货品管理", "新增货品+");
    var keys = { "款号" : r, "名称" : r, "最小库存" : min, "最大库存" : "1000" };
    addGoods(keys, colorSize);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : stock } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "更多", "缺货统计");
    var i, j;
    var sum1 = 0, sum2 = 0, sum3 = 0;
    query();

    var ret = goPageCheck();
    // 默认按缺货数降序排序
    ret = ret && compareQR("缺货数", IS_NUM, "desc");

    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("上架日期", IS_DATE2);
    ret = ret && sortByTitle("现有库存", IS_NUM);
    ret = ret && sortByTitle("最小库存", IS_NUM);
    ret = ret && sortByTitle("缺货数", IS_NUM);

    var qr = getQR();
    for (j = 1; j <= qr.totalPageNo; j++) {
        for (i = 0; i < qr.curPageTotal; i++) {
            sum1 = sum1 + Number(qr.data[i]["现有库存"]);
            sum2 = sum2 + Number(qr.data[i]["最小库存"]);
            sum3 = sum3 + Number(qr.data[i]["缺货数"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = ret && isEqual(qr.counts["现有库存"], sum1)
            && isEqual(qr.counts["最小库存"], sum2)
            && isEqual(qr.counts["缺货数"], sum3);

    var keys = { "款号" : r, "款号名称" : r, "上架从" : getToday(), "到" : getToday() };
    var fields = goodsStatisticFields(keys);
    query(fields);
    qr = getQR();
    ret = ret && isEqual(r, qr.data[0]["款号"]) && isEqual(r, qr.data[0]["名称"])
            && isEqual(getToday("yy"), qr.data[0]["上架日期"])
            && isEqual(stock, qr.data[0]["现有库存"])
            && isEqual(min, qr.data[0]["最小库存"])
            && isEqual(sub(min, stock), qr.data[0]["缺货数"])
            && isEqual("1", qr.total) && isEqual("1", qr.totalPageNo);

    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : -stock } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "更多", "缺货统计");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(r, qr.data[0]["款号"])
            && isEqual(r, qr.data[0]["名称"]), isEqual(getToday("yy"),
            qr.data[0]["上架日期"]), isEqual("0", qr.data[0]["现有库存"]), isEqual(min,
            qr.data[0]["最小库存"]), isEqual(sub(min, qr.data[0]["现有库存"]),
            qr.data[0]["缺货数"]));

    tapMenu("采购入库", "新增入库+");
    json = { "客户" : "vell", "明细" : [ { "货品" : r, "数量" : -stock } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "更多", "缺货统计");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(r, qr.data[0]["款号"]),
            isEqual(r, qr.data[0]["名称"]), isEqual(getToday("yy"),
                    qr.data[0]["上架日期"]), isEqual(-stock, qr.data[0]["现有库存"]),
            isEqual(min, qr.data[0]["最小库存"]), isEqual(sub(min,
                    qr.data[0]["现有库存"]), qr.data[0]["缺货数"]));

    tapButton(window, CLEAR);
    ret = ret && isEqual("", getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3));

    return ret;
}

function test10_price() {
    tapMenu("货品管理", "基本设置", "价格名称");
    var ret = true;
    var qr = getQR();
    // debugElementTree(window);
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("启用");
    // delay();
    ret = ret
            && sortByTitle("进货价比例", IS_NUM, window, getScrollView(), TITLE_SEQ,
                    4);
    // 第一次跑也许会报错
    // if (ret == false) {
    // ret = true;
    // ret = ret && sortByTitle("名称");
    // ret = ret && sortByTitle("启用");
    // delay();
    // ret = ret && sortByTitle("进货价比例", IS_NUM);
    // }

    return ret;
}

function test10_type() {
    tapMenu("货品管理", "基本设置", "货品类别");
    query();
    var ret = goPageCheck();

    var qr = getQR();
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("是否停用");

    var keys = { "名称" : "毛衣" };
    var fields = goodsTypeFields(keys);
    query(fields);
    qr = getQR();
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (!isIn(qr.data[i]["名称"], "毛衣")) {
                ret = false;
                break;
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    tapButton(window, CLEAR);
    ret = ret && isEqual("", getTextFieldValue(window, 0));

    return ret;
}

function test10_color() {
    tapMenu("货品管理", "基本设置", "所有颜色");
    query();
    var ret = goPageCheck();

    var qr = getQR();
    ret = ret && sortByTitle("类别");
    ret = ret && sortByTitle("编码");
    ret = ret && sortByTitle("名称");

    var keys = { "名称" : "红" };
    var fields = goodsColorFields(keys);
    query(fields);
    qr = getQR();
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (!isIn(qr.data[i]["名称"], "红")) {
                ret = false;
                break;
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    tapButton(window, CLEAR);
    ret = ret && isEqual("", getTextFieldValue(window, 0));

    return ret;

}

function test10_size() {
    tapMenu("货品管理", "基本设置", "所有尺码");
    query();
    var ret = goPageCheck();

    var qr = getQR();
    ret = ret && sortByTitle("类别");
    ret = ret && sortByTitle("名称");

    var keys = { "尺码组" : "衣服尺码", "名称" : "x" };
    var fields = goodsSizeFields(keys);
    query(fields);
    qr = getQR();
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (!(isIn(qr.data[i]["名称"], "x") || isIn(qr.data[i]["名称"], "X"))) {
                ret = false;
                break;
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    tapButton(window, CLEAR);
    ret = ret && isEqual("", getTextFieldValue(window, 0))
            && isEqual("", getTextFieldValue(window, 1));

    return ret;

}

function test100095() {
    tapMenu("货品管理", "基本设置", "所有尺码");
    query();
    tapFirstText();

}

function test10_brand() {
    tapMenu("货品管理", "基本设置", "所有品牌");
    query();
    var ret = goPageCheck();

    var qr = getQR();
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("操作日期");// , IS_OPTIME没有年份无法判断

    var keys = { "名称" : "品牌" };
    var fields = goodsBrandFields(keys);
    query(fields);
    qr = getQR();
    var ret1 = checkQResult(qr, "名称", "品牌", "in");

    keys = { "名称" : "1010pp" };
    fields = goodsBrandFields(keys);
    query(fields);
    tapFirstText();
    tapButtonAndAlert(STOP);

    keys = { "名称" : "1010pp", "是否停用" : "是" };
    fields = goodsBrandFields(keys);
    query(fields);
    qr = getQR();
    var ret2 = isAnd(isEqual("1010pp", qr.data[0]["名称"]),
            isEqual("1", qr.total), isEqual("1", qr.totalPageNo));

    tapFirstText();
    tapButtonAndAlert(START);

    keys = { "名称" : "1010pp", "是否停用" : "否" };
    fields = goodsBrandFields(keys);
    query(fields);
    qr = getQR();
    ret2 = isAnd(ret2, isEqual("1010pp", qr.data[0]["名称"]), isEqual("1",
            qr.total), isEqual("1", qr.totalPageNo));

    tapButton(window, CLEAR);
    ret2 = isAnd(ret2, isEqual("", getTextFieldValue(window, 0)), isEqual("",
            getTextFieldValue(window, 1)));

    return isAnd(ret, ret1, ret2);
}

function test10_size_group() {
    tapMenu("货品管理", "基本设置", "所有尺码组");
    query();
    var ret = goPageCheck();

    var qr = getQR();
    ret = ret && sortByTitle("名称");

    var keys = { "名称" : "尺码" };
    var fields = goodsSizeidsFields(keys);
    query(fields);
    qr = getQR();
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            if (!isIn(qr.data[i]["名称"], "尺码")) {
                ret = false;
                break;
            }
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }

    tapButton(window, CLEAR);
    ret = ret && isEqual("", getTextFieldValue(window, 0));

    return ret;
}

function test10_discount() {
    tapMenu("货品管理", "基本设置", "所有品牌折扣");
    query();
    var ret = goPageCheck();

    var qr = getQR();
    ret = ret && sortByTitle("操作日期", IS_OPTIME);
    ret = ret && sortByTitle("品牌");
    ret = ret && sortByTitle("进货价折扣", IS_NUM);
    ret = ret && sortByTitle("零批价");// , IS_NUM
    ret = ret && sortByTitle("打包价");// , IS_NUM
    ret = ret && sortByTitle("大客户价");// , IS_NUM
    ret = ret && sortByTitle("Vip价格");// , IS_NUM
    logDebug("ret=" + ret);

    var keys = { "品牌" : "1010pp" };
    var fields = goodsBrandDiscountFields(keys);
    query(fields);
    qr = getQR();
    ret = isAnd(ret, isEqual("1010pp", qr.data[0]["品牌"]));

    tapButton(window, CLEAR);
    ret = isAnd(ret, isEqual("", getTextFieldValue(window, 0)));

    return ret;
}

function ts100090() {
    var r = getTimestamp(6);
    var code = "g" + r;
    var color = "均色", size = "均码";
    var keys = { "款号" : code, "名称" : "货品" + r, "进货价" : "200" };
    var det = { "明细" : [ { "货品" : r, "数量" : "50" } ] };
    if (colorSize != "no") {
        keys["颜色"] = 0;
        keys["均码"] = 0;
        color = "花色";
        size = "S";
        det = { "明细" : [ { "货品" : r, "数量" : [ 50 ] } ] };
    }
    addGoods(keys, colorSize);

    tapMenu("采购入库", "新增入库+");
    var jo = { "客户" : "vell" };
    var json = mixObject(jo, det);
    editSalesBill(json, colorSize);

    tapMenu("货品管理", "当前库存");
    keys = { "款号" : code };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var stock = qr.data[0]["库存"];

    tapFirstText();
    tapNaviButton("库存调整");
    var stockIndex = getIndex100090();
    var ret = isEqual(code, getTextFieldValue(window, stockIndex - 4))// 款号
            && isEqual(stock, getTextFieldValue(window, stockIndex - 3))// 当前库存
            && isEqual(color, getTextFieldValue(window, stockIndex - 2))// 颜色
            && isEqual(size, getTextFieldValue(window, stockIndex - 1));// 尺码

    runAndAlert("test100090Field", OK)
    delay();
    ret = isAnd(ret, isIn(alertMsg, "调整后库存不能为空或必须数字"));
    tapPrompt();

    keys = "a";
    setValue100090(keys);
    runAndAlert("test100090Field", OK);
    delay();
    ret = isAnd(ret, isIn(alertMsg, "请输入数字来调整"));
    tapPrompt();

    keys = "!";
    setValue100090(keys);
    runAndAlert("test100090Field", OK);
    delay();
    ret = isAnd(ret, isIn(alertMsg, "请输入数字来调整"));
    tapPrompt();

    keys = "-50";
    setValue100090(keys);
    runAndAlert("test100090Field", OK);// 保存确定后会自动回到二级页面
    delay();
    var qr = getQR2(getScrollView(-1, 0), "批次", "操作人");
    ret = isAnd(ret, isEqual("调整入库", qr.data[0]["名称"]), isEqual("-100",
            qr.data[0]["数量"]));

    tapNaviButton("库存调整");
    ret = isAnd(ret, isEqual("-50", getTextFieldValue(window, stockIndex - 3)));// 当前库存

    keys = "0";
    setValue100090(keys);
    runAndAlert("test100090Field", OK);
    delay();
    qr = getQR2(getScrollView(-1, 0), "批次", "操作人");
    ret = isAnd(ret, isEqual("调整入库", qr.data[0]["名称"]), isEqual("50",
            qr.data[0]["数量"]));

    tapNaviButton("库存调整");
    ret = isAnd(ret, isEqual("0", getTextFieldValue(window, stockIndex - 3)));// 当前库存

    keys = "25";
    setValue100090(keys);
    runAndAlert("test100090Field", OK);
    delay();
    qr = getQR2(getScrollView(-1, 0), "批次", "操作人");
    ret = isAnd(ret, isEqual("调整入库", qr.data[0]["名称"]), isEqual("25",
            qr.data[0]["数量"]));

    tapNaviLeftButton();
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual("25", qr.data[0]["库存"]));

    // tapMenu("门店调出", "批量调出+");
    // var jo = { "调出人" : "000", "接收店" : "中洲店" };
    // var det = editShopOutDet();
    // var json = mixObject(jo, det);
    // editShopOutDecruitIn(json, colorSize);
    return ret;
}

function test100090Field() {
    tapNaviRightButton();
}

function setValue100090(r) {
    // 设置库存调整的值，这里的文本框下标是接货品管理-当前库存查询条件的下标
    var index = getIndex100090();

    var f = new TField("调整后库存", TF, index, r);
    setTFieldsValue(window, [ f ]);
}

function getIndex100090() {
    var index;
    if (ipadVer >= 7.01) {
        index = 16;
    } else {
        index = 15;
    }
    return index;
}

function test100104_100105() {
    tapMenu("货品管理", "当前库存");
    var keys = { "款号名称" : "g" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    // 库存调整
    var r = getRandomInt(100) + 1;
    addGoodsStockAdjustment(r);

    tapMenu("货品管理", "更多", "库存调整单");
    query();
    var qr = getQR();
    var batch = Number(qr.data[0]["批次"]);
    var shop = qr.data[0]["门店"];

    tapMenu("货品管理", "当前库存");
    query();
    var arr = new Array();
    var qr = getQR();
    arr[0] = qr.data[0]["款号"];
    arr[1] = qr.data[0]["名称"];
    arr[2] = qr.data[0]["颜色"];
    arr[3] = qr.data[0]["尺码"];
    arr[4] = qr.data[0]["库存"];// 调整前数量

    r = getRandomInt(100) + 1;// 调整后数量
    addGoodsStockAdjustment(r);

    tapMenu("货品管理", "更多", "库存调整单");
    var keys = { "门店" : shop, "批次从" : batch, "批次到" : batch + 1 };
    var fields = goodsStockAdjustmentFields(keys);
    query(fields);
    qr = getQR();
    var ret = isAnd(isEqual(batch + 1, qr.data[0]["批次"]), isEqual(shop,
            qr.data[0]["门店"]), isEqual(getToday("yy"), qr.data[0]["日期"]),
            isEqual(arr[0], qr.data[0]["款号"]),
            isEqual(arr[1], qr.data[0]["名称"]),
            isEqual(arr[2], qr.data[0]["颜色"]),
            isEqual(arr[3], qr.data[0]["尺码"]), isEqual(arr[4],
                    qr.data[0]["调整前数量"]), isEqual(r, qr.data[0]["调整后数量"]),
            isEqual(sub(r, arr[4]), qr.data[0]["调整数量"]));

    tapButton(window, CLEAR);
    ret = ret && isEqual(getToday(), getTextFieldValue(window, 0))
            && isEqual(getToday(), getTextFieldValue(window, 1))
            && isEqual("", getTextFieldValue(window, 2))
            && isEqual("", getTextFieldValue(window, 3))
            && isEqual("", getTextFieldValue(window, 4));

    return ret;
}

// 翻页_排序_汇总
function test100106() {
    tapMenu("货品管理", "更多", "库存调整单");
    var keys = { "日期从" : getDay(-30) };
    var fields = goodsStockAdjustmentFields(keys);
    query(fields);
    // 翻页
    var ret = goPageCheck();

    ret = ret && sortByTitle("批次", IS_NUM);
    ret = ret && sortByTitle("门店");
    ret = ret && sortByTitle("日期", IS_DATE2);
    ret = ret && sortByTitle("款号");
    ret = ret && sortByTitle("名称");
    ret = ret && sortByTitle("颜色");
    ret = ret && sortByTitle("尺码");
    ret = ret && sortByTitle("调整前数量", IS_NUM);
    ret = ret && sortByTitle("调整后数量", IS_NUM);
    ret = ret && sortByTitle("调整数量", IS_NUM);

    query();
    var qr = getQR();
    var sum1 = 0, sum2 = 0, sum3 = 0;// 库存，在途数，核算金额
    for (var j = 1; j <= qr.totalPageNo; j++) {
        for (var i = 0; i < qr.curPageTotal; i++) {
            sum1 += Number(qr.data[i]["调整前数量"]);
            sum2 += Number(qr.data[i]["调整后数量"]);
            sum3 += Number(qr.data[i]["调整数量"]);
        }
        if (j < qr.totalPageNo) {
            scrollNextPage();
            qr = getQR();
        }
    }
    ret = isAnd(ret, isEqual(sum1, qr.counts["调整前数量"]), isEqual(sum2,
            qr.counts["调整后数量"]), isEqual(sum3, qr.counts["调整数量"]));
    return ret;
}

function test100116() {
    var r = getTimestamp(6);
    var code = "g" + r;
    var keys = { "款号" : code, "名称" : "货品" + r, "进货价" : "200" };
    addGoods(keys, colorSize);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "vell", "明细" : [ { "货品" : code, "数量" : 10 } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : code };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isEqual(1, qr.data[0]["上架天数"]);

    tapMenu("货品管理", "货品查询");
    query();
    tapFirstText();
    tapButton(getScrollView(), "减量");
    var day = getTextFieldValue(getScrollView(), 5);
    if (day == getDay(1)) {
        tapButton(getScrollView(), "减量");
        tapButton(getScrollView(), "减量");
    }
    tapButtonAndAlert(EDIT_SAVE, OK);

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(1, qr.data[0]["上架天数"]));
    return ret;
}

// 1.门店库存是否允许跨门店查询 设置为 默认门店可自由查询各自库存
// 2.后台PAD店长权限里勾上货品进销存
function test100120() {
    tapMenu("货品管理", "货品进销存");
    query();
    var qr = getQR();
    var counts = qr.counts;

    var keys = { "门店" : "常青店" };
    var fields = queryGoodsInOutFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    var ret = isEqualObject(counts, qr.counts);

    keys = { "门店" : "中洲店" };
    fields = queryGoodsInOutFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, QUERY);
    qr = getQR();
    ret = isAnd(ret, isEqual(qr.data.length, 0));
    return ret;
}

function test100123() {
    var keys = { "是否停用" : "是" };
    var ret = test100123Field(keys);

    keys = { "是否停用" : "否" };
    ret = isAnd(ret, test100123Field(keys));

    // tapMenu2("当前库存");
    // keys=

    return ret;
}

function test100123Field(keys) {
    tapMenu("货品管理", "当前库存")
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var stock1 = qr.counts["库存"];

    tapMenu2("款号库存");
    fields = queryGoodsCodeStockFields(keys);
    query(fields);
    qr = getQR();
    var stock2 = qr.counts["库存"];

    tapMenu2("库存分布");
    fields = queryGoodsDistributionFields(keys);
    query(fields);
    qr = getQR();
    var stock3 = qr.counts["库存"];

    return isAnd(isEqual(stock1, stock2), isEqual(stock1, stock3));
}
