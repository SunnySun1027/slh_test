//LuXingXin <52619481 at qq.com> 20151127

//均色均码省代模式
function testBasicSetUpAll() {
    // 客户
    run("小王", "setXiaoWang");
    run("赵本山", "setZhaoBenShan");
    run("上级客户1", "setCustomer001");
    run("下级客户1", "setCustomer002");
    run("李四", "setCustomer003");
    run("李响", "setCustomer004");
    run("李天", "setCustomer005");
    run("李六", "setCustomer006");
    run("韩红", "setCustomer007");
    run("综合汇总1", "setCustomer008");
    // 厂商
    run("Vell", "setProvider001");
    run("Adidas公司", "setProvider002");
    run("Rt", "setProvider003");
    run("联想", "setProvider004");

    run("特步生产商", "setProvider005");//适用价：零批价
    run("新百伦生产商", "setProvider006");//适用价：打包价
    // 类别
    run("登山服", "setGoodsType001");
    run("鞋", "setGoodsType002");
    run("铅笔裤", "setGoodsType003");

    run("夹克", "setGoodsType004");
    run("跑步鞋", "setGoodsType005");
    run("围巾", "setGoodsType006");
    // 品牌
    run("1010pp", "setGoodsBrand001");
    run("Adidas", "setGoodsBrand002");

    run("特步", "setGoodsBrand003");
    run("新百伦", "setGoodsBrand004");
    // 品牌折扣
    run("1010pp折扣", "setGoodsBrandDiscount001");
    // 物流商
    run("天天物流", "setLogistics001");
    run("顺丰快递", "setLogistics002");
    run("圆通速递", "setLogistics003");
    run("汇通快递", "setLogistics004");
    // 款号
    run("3035", "setGoods001");
    run("4562", "setGoods002");
    run("k300", "setGoods003");
    run("k200", "setGoods004");
    run("8989", "setGoods005");
    run("plczcs1", "setGoods006");
    run("plczcs2", "setGoods007");
    run("plczcs3", "setGoods008");

    run("颜色尺码模式", "setGoodsColorParams");
    run("x001", "setGoods009");
    run("x003", "setGoods010");
    run("nb001", "setGoods011");
    run("nb003", "setGoods012");

    run("均色均码模式", "setGoodsNoColorParams");

}

function subTime(day1, day2) {
    var arr1 = day1.split("-");
    var arr2 = day2.split("-");
    var date1 = new Date(arr1[0], arr1[1], arr1[2]);
    var date2 = new Date(arr2[0], arr2[1], arr2[2]);
    var ret = (date1 - date2) / (24 * 60 * 60 * 1000);
    logDebug("ret=" + ret);
    return ret;
}

function changeMarketTime(day2) {
    var i, day, arr1;
    var day1 = getTextFieldValue(getScrollView(), 5);
    var num = subTime(day1, day2);
    var num1 = Math.round(num / 30);
    var arr = day1.split("-");

    // 第一次点击减量或增量按钮，有时会按另外一个按钮
    if (num1 > 0) {
        window.scrollViews()[0].switches()[0].setValue(1);
        tapButton(getScrollView(), "减量");
        day = getTextFieldValue(getScrollView(), 5);
        arr1 = day.split("-");
        logDebug("arr1[1]=" + arr1[1]);
        if (arr[1] == "12") {
            if (arr1[1] == "1") {
                tapButton(getScrollView(), "减量");
                tapButton(getScrollView(), "减量");
            }
        } else {
            if (arr1[1] != Number(arr[1]) - 1) {
                tapButton(getScrollView(), "减量");
                tapButton(getScrollView(), "减量");
            }
        }
        for (i = 1; i < num1; i++) {
            tapButton(getScrollView(), "减量");

        }
        window.scrollViews()[0].switches()[0].setValue(0);

    }

    if (num1 < 0) {
        window.scrollViews()[0].switches()[0].setValue(1);
        tapButton(getScrollView(), "增量");
        day = getTextFieldValue(getScrollView(), 5);
        arr1 = day.split("-");
        logDebug("arr1[1]=" + arr1[1]);
        if (arr[1] == "1") {
            if (arr1[1] == "12") {
                tapButton(getScrollView(), "增量");
                tapButton(getScrollView(), "增量");
            }
        } else {
            if (arr1[1] == Number(arr[1]) - 1) {
                tapButton(getScrollView(), "增量");
                tapButton(getScrollView(), "增量");
            }
        }
        for (i = Number(num1) + 1; i < 0; i++) {
            tapButton(getScrollView(), "增量");

        }
        window.scrollViews()[0].switches()[0].setValue(0);
    }

    day1 = getTextFieldValue(getScrollView(), 5);
    num = subTime(day1, day2);

    if (num > 0) {
        for (i = 0; i < num; i++) {
            tapButton(getScrollView(), "减量");
        }
    }

    if (num < 0) {
        for (i = num; i < 0; i++) {
            tapButton(getScrollView(), "增量");
        }
    }

    // var ret = false;
    // day = getTextFieldValue(getScrollView(), 5);
    // if (day == day2) {
    // ret = true;
    // }
    // return ret;
}

/**
 * 新增/修改客户
 */
function editCustomerBasicSetUp(name, keys) {
    tapMenu("往来管理", "客户查询");
    var f = new TField("客户", TF, 0, name);
    var fields = [ f ];
    query(fields);

    var ret = isIn(alertMsg, "查询必须从列表中选择");
    delay();
    if (ret == false) {
        tapFirstText();
        var fields = editCustomerFields(keys);
        setTFieldsValue(getScrollView(), fields);
        tapButton(window, EDIT_SAVE);
    } else {
        addCustomer(keys);
    }

    query();
    var qr = getQR();
    var ret1 = isEqual(name, qr.data[0]["名称"]);
    return ret1;
}

/**
 * 小王
 */
function setXiaoWang() {
    var keys = { "名称" : "小王", "门店" : "常青店", "店员" : "000", "上级客户" : "",
        "客户类别" : "零批客户", "允许退货" : "是", "适用价格" : "零批价", "拿货折扣" : "1",
        "信用额度" : "0", "欠款报警" : "0" };
    var ret = editCustomerBasicSetUp("小王", keys);
    return ret;
}

/**
 * 赵本山
 */
function setZhaoBenShan() {
    var keys = { "名称" : "赵本山", "手机" : "13922211121", "门店" : "常青店",
        "生日" : "2015-03-06", "店员" : "000", "上级客户" : "", "客户类别" : "VIP客户",
        "允许退货" : "是", "适用价格" : "大客户价", "拿货折扣" : "0.6", "信用额度" : "0",
        "欠款报警" : "0" };
    var ret = editCustomerBasicSetUp("赵本山", keys);
    return ret;
}

/**
 * 上级客户1
 */
function setCustomer001() {
    var keys = { "名称" : "上级客户1", "门店" : "常青店", "店员" : "000",
        "生日" : "2000-12-30", "客户类别" : "零批客户", "允许退货" : "是", "适用价格" : "零批价",
        "信用额度" : "0", "欠款报警" : "0" };
    var ret = editCustomerBasicSetUp("上级客户1", keys);
    return ret;
}

/**
 * 下级客户1
 */
function setCustomer002() {
    var keys = { "名称" : "下级客户1", "门店" : "常青店", "店员" : "000", "上级客户" : "sjkh1",
        "客户类别" : "零批客户", "允许退货" : "是", "适用价格" : "零批价", "信用额度" : "0",
        "欠款报警" : "0" };
    var ret = editCustomerBasicSetUp("下级客户1", keys);
    return ret;
}
/**
 * 李四
 */
function setCustomer003() {
    var keys = { "名称" : "李四", "手机" : "52148899635963", "门店" : "常青店",
        "上级客户" : "", "店员" : "000", "客户类别" : "零批客户", "允许退货" : "是",
        "适用价格" : "打包价", "地址" : "杭州东灵", "拿货折扣" : "0.76", "信用额度" : "0",
        "欠款报警" : "0" };
    var ret = editCustomerBasicSetUp("李四", keys);
    return ret;
}
/**
 * 李响
 */
function setCustomer004() {
    var keys = { "名称" : "李响", "手机" : "13844115460", "门店" : "常青店", "上级客户" : "",
        "客户类别" : "零批客户", "允许退货" : "是", "适用价格" : "打包价", "拿货折扣" : "0.5",
        "信用额度" : "0", "欠款报警" : "0" };
    var ret = editCustomerBasicSetUp("李响", keys);
    return ret;
}
/**
 * 李天
 */
function setCustomer005() {
    var keys = { "名称" : "李天", "手机" : "13911112224", "微信" : "13911112224",
        "上级客户" : "", "门店" : "常青店", "生日" : "2000-12-30", "店员" : "002,",
        "客户类别" : "零批客户", "允许退货" : "否", "适用价格" : "零批价", "传真号" : "13911112224",
        "备注" : "客户备注", "地址" : "浙江省杭州市上城区", "拿货折扣" : "0.5", "信用额度" : "500",
        "欠款报警" : "0" };
    var ret = editCustomerBasicSetUp("李天", keys);
    return ret;
}
/**
 * 李六
 */
function setCustomer006() {
    var keys = { "名称" : "李六", "手机" : "13836272323", "门店" : "中洲店", "上级客户" : "",
        "客户类别" : "零批客户", "允许退货" : "是", "地址" : "杭州", "拿货折扣" : "1", "信用额度" : "0",
        "欠款报警" : "0" };
    var ret = editCustomerBasicSetUp("李六", keys);
    return ret;
}
/**
 * 韩红
 */
function setCustomer007() {
    var keys = { "名称" : "韩红", "手机" : "13822221113", "微信" : "13822221113",
        "门店" : "中洲店", "生日" : "2000-12-30", "店员" : "002,", "上级客户" : "",
        "客户类别" : "打包客户", "允许退货" : "是", "适用价格" : "打包价", "传真号" : "13822221113",
        "拿货折扣" : "0.5", "信用额度" : "500", "欠款报警" : "0" };
    var ret = editCustomerBasicSetUp("韩红", keys);
    return ret;
}
/**
 * 综合汇总1
 */
function setCustomer008() {
    var keys = { "名称" : "综合汇总1", "门店" : "常青店", "适用价格" : "零批价" };
    var ret = editCustomerBasicSetUp("综合汇总1", keys);
    return ret;
}

/**
 * 新增/修改厂商
 */
function editProviderBasicSetUp(name, keys) {
    tapMenu("往来管理", "厂商查询");
    var f = new TField("厂商", TF, 0, name);
    var fields = [ f ];
    query(fields);

    var ret = isIn(alertMsg, "查询必须从列表中选择");
    delay();
    if (ret == false) {
        tapFirstText();
        fields = editCustomerProviderFields(keys);
        setTFieldsValue(getScrollView(), fields);
        tapButton(window, EDIT_SAVE);
    } else {
        tapMenu("往来管理", "新增厂商+");
        fields = editCustomerProviderFields(keys);
        setTFieldsValue(getScrollView(), fields);
        tapButton(window, SAVE);
        tapButton(window, RETURN);
    }

    query();
    var qr = getQR();
    var ret1 = isEqual(name, qr.data[0]["名称"]);
    return ret1;
}

function setProvider001() {
    var keys = { "名称" : "Vell", "适用价格" : "进货价" };
    var ret = editProviderBasicSetUp("Vell", keys);
    return ret;
}

function setProvider002() {
    var keys = { "名称" : "Adidas公司", "适用价格" : "进货价" };
    var ret = editProviderBasicSetUp("Adidas公司", keys);
    return ret;
}
function setProvider003() {
    var keys = { "名称" : "Rt", "适用价格" : "进货价" };
    var ret = editProviderBasicSetUp("Rt", keys);
    return ret;
}
function setProvider004() {
    var keys = { "名称" : "联想", "适用价格" : "进货价" };
    var ret = editProviderBasicSetUp("联想", keys);
    return ret;
}
function setProvider005() {
    var keys = { "名称" : "特步生产商", "适用价格" : "零批价" };
    var ret = editProviderBasicSetUp("特步生产商", keys);
    return ret;
}
function setProvider006() {
    var keys = { "名称" : "新百伦生产商", "适用价格" : "打包价" };
    var ret = editProviderBasicSetUp("新百伦生产商", keys);
    return ret;
}

function basicSetUpByType(name, keys) {
    tapMenu("货品管理", "基本设置", "货品类别");
    var fields = goodsTypeFields(keys);
    query(fields);

    var qr = getQR();
    if (qr.total == 0) {
        tapMenu("货品管理", "基本设置", "新增类别+");
        fields = editGoodsTypeFields(keys);
        setTFieldsValue(getScrollView(), fields);
        tapButton(window, SAVE);
        tapButton(window, RETURN);
    }
    if (qr.total > 0) {
        if (isEqual("是", qr.data[0]["是否停用"])) {
            tapFirstText();
            tapButtonAndAlert(START);
        }
    }

    tapButton(window, QUERY);
    qr = getQR();
    var ret = isAnd(isEqual(name, qr.data[0]["名称"]), isEqual("否",
            qr.data[0]["是否停用"]));
    return ret;
}

function setGoodsType001() {
    var keys = { "名称" : "登山服" };
    var ret = basicSetUpByType("登山服", keys);
    return ret;
}

function setGoodsType002() {
    var keys = { "名称" : "鞋" };
    var ret = basicSetUpByType("鞋", keys);
    return ret;
}
function setGoodsType003() {
    var keys = { "名称" : "铅笔裤" };
    var ret = basicSetUpByType("铅笔裤", keys);
    return ret;
}
function setGoodsType004() {
    var keys = { "名称" : "夹克" };
    var ret = basicSetUpByType("夹克", keys);
    return ret;
}
function setGoodsType005() {
    var keys = { "名称" : "跑步鞋" };
    var ret = basicSetUpByType("跑步鞋", keys);
    return ret;
}
function setGoodsType006() {
    var keys = { "名称" : "围巾" };
    var ret = basicSetUpByType("围巾", keys);
    return ret;
}
function basicSetUpByBrand(name, keys) {
    tapMenu("货品管理", "基本设置", "所有品牌");
    var fields = goodsBrandFields(keys);
    query(fields);

    var qr = getQR();
    if (qr.total == 0) {
        tapMenu("货品管理", "基本设置", "新增品牌+");
        fields = editGoodsTypeFields(keys);
        setTFieldsValue(getScrollView(), fields);
        tapButton(window, SAVE);
        tapButton(window, RETURN);
    }
    if (qr.total > 0) {
        tapFirstText();
        tapButtonAndAlert(START);
        tapPrompt();
    }

    var qkeys = { "名称" : name, "是否停用" : "否" };
    fields = goodsBrandFields(qkeys);
    query(fields);
    qr = getQR();
    var ret = isEqual(name, qr.data[0]["名称"]);
    return ret;
}

function setGoodsBrand001() {
    var keys = { "名称" : "1010pp" };
    var ret = basicSetUpByBrand("1010pp", keys);
    return ret;
}

function setGoodsBrand002() {
    var keys = { "名称" : "Adidas" };
    var ret = basicSetUpByBrand("Adidas", keys);
    return ret;
}
function setGoodsBrand003() {
    var keys = { "名称" : "特步" };
    var ret = basicSetUpByBrand("特步", keys);
    return ret;
}
function setGoodsBrand004() {
    var keys = { "名称" : "新百伦" };
    var ret = basicSetUpByBrand("新百伦", keys);
    return ret;
}

function basicSetUpByBrandDiscount(name, keys) {
    tapMenu("货品管理", "基本设置", "所有品牌折扣");
    var qKeys = { "品牌" : name };
    var qFields = goodsBrandDiscountFields(qKeys);
    query(qFields);

    var qr = getQR();
    if (qr.total == 0) {
        tapMenu("货品管理", "基本设置", "新增品牌折扣+");
    }
    if (qr.total > 0) {
        tapFirstText();
    }
    var fields = editGoodsBrandDiscountFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButtonAndAlert(SAVE);
    delay();
    tapReturn();

    query(qFields);
    qr = getQR();
    var ret = isEqual(name, qr.data[0]["品牌"]);
    return ret;
}

function setGoodsBrandDiscount001() {
    var keys = { "品牌" : "1010pp", "进货价折扣" : "0.5", "零批价" : "1", "打包价" : "0.9",
        "大客户价" : "0.8", "Vip价格" : "0.7" };
    var ret = basicSetUpByBrandDiscount("1010pp", keys);
    return ret;
}

function setLogisticsBasicSetUp(name, keys) {
    tapMenu("往来管理", "更多.", "物流商查询");
    var qKeys = { "名称" : name };
    var qFields = queryCustomerLogisticsFields(qKeys);
    query(qFields);

    var qr = getQR();
    if (qr.total == 0) {
        tapMenu("货品管理", "基本设置", "新增物流商+");
    }
    if (qr.total > 0) {
        tapFirstText();
    }
    var fields = editCustomerLogisticsFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    query(qFields);
    qr = getQR();
    var ret = isEqual(name, qr.data[0]["名称"]);
    return ret;

}

function setLogistics001() {
    var keys = { "名称" : "天天物流", "店员" : "000", "电话" : "13833331112",
        "门店" : "常青店" };
    var ret = setLogisticsBasicSetUp("天天物流", keys);
    return ret;
}

function setLogistics002() {
    var keys = { "名称" : "顺丰快递", "店员" : "000", "门店" : "常青店" };
    var ret = setLogisticsBasicSetUp("顺丰快递", keys);
    return ret;
}
function setLogistics003() {
    var keys = { "名称" : "圆通速递", "门店" : "常青店" };
    var ret = setLogisticsBasicSetUp("圆通速递", keys);
    return ret;
}
function setLogistics004() {
    var keys = { "名称" : "汇通快递", "门店" : "常青店" };
    var ret = setLogisticsBasicSetUp("汇通快递", keys);
    return ret;
}

/**
 * 新增/修改货品 day2 上架日期
 * @color "yes":颜色尺码模式
 */
function editGoodsBasicSetUp(code, name, keys, day2, color) {
    tapMenu("货品管理", "货品查询");
    var qKeys = { "款号名称" : code + name };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);
    var qr = getQR();

    var colorSizeStartIndex;
    if (isDefined(color) && color == "yes") {
        colorSizeStartIndex = 4;
    } else {
        colorSizeStartIndex = 0;
    }

    delay();
    var fields = editGoodsFields(keys, false, colorSizeStartIndex, 0);
    if (qr.total == "1") {
        tapFirstText();
        if (isDefined(day2)) {
            changeMarketTime(day2);
        }
        setTFieldsValue(getScrollView(), fields);
        tapButtonAndAlert(EDIT_SAVE);
    }
    if (qr.total == "0") {
        tapMenu("货品管理", "新增货品+");
        if (isDefined(day2)) {
            changeMarketTime(day2);
        }
        setTFieldsValue(getScrollView(), fields);
        saveAndAlertOk();
        delay();
        tapReturn();
    }

    query(qFields);
    var qr = getQR();
    var ret1 = isAnd(isEqual(code, qr.data[0]["款号"]), isEqual(name,
            qr.data[0]["名称"]));
    return ret1;
}

// "上架日期" : "2015-10-13",
function setGoods001() {
    var keys = { "款号" : "3035", "名称" : "jkk", "品牌" : "Adidas", "吊牌价" : "200",
        "进货价" : "100", "零批价" : "200", "打包价" : "180", "大客户价" : "160",
        "Vip价格" : "140", "产品折扣" : "1", "季节" : "春季", "类别" : "登山服",
        "厂商" : "Vell", "计量单位" : "件", "仓位" : "默认", "最小库存" : "0", "最大库存" : "0" };
    var ret = editGoodsBasicSetUp("3035", "jkk", keys, "2015-10-13");
    return ret;
}

// "上架日期" : "2014-03-14",
function setGoods002() {
    var keys = { "款号" : "4562", "名称" : "Story", "品牌" : "1010pp", "吊牌价" : "200",
        "进货价" : "100", "零批价" : "200", "打包价" : "180", "大客户价" : "160",
        "Vip价格" : "140", "产品折扣" : "0.9", "季节" : "春季", "类别" : "鞋", "厂商" : "Rt",
        "计量单位" : "件", "仓位" : "默认", "最小库存" : "0", "最大库存" : "0" };
    var ret = editGoodsBasicSetUp("4562", "Story", keys, "2014-03-14");
    return ret;
}

// "上架日期" : "2015-10-13",
function setGoods003() {
    var keys = { "款号" : "k300", "名称" : "铅笔裤", "品牌" : "Adidas", "吊牌价" : "300",
        "进货价" : "200", "零批价" : "300", "打包价" : "300", "大客户价" : "0",
        "Vip价格" : "0", "产品折扣" : "1", "季节" : "春季", "厂商" : "Rt", "计量单位" : "件",
        "仓位" : "默认", "最小库存" : "0", "最大库存" : "0" };
    var ret = editGoodsBasicSetUp("k300", "铅笔裤", keys, "2015-10-13");
    return ret;
}
// "上架日期" : "2015-10-13",
function setGoods004() {
    var keys = { "款号" : "k200", "名称" : "范范", "吊牌价" : "200", "进货价" : "150",
        "零批价" : "200", "打包价" : "170", "大客户价" : "0", "Vip价格" : "0",
        "产品折扣" : "1", "季节" : "春季", "厂商" : "Rt", "计量单位" : "件", "仓位" : "默认",
        "最小库存" : "0", "最大库存" : "0" };
    var ret = editGoodsBasicSetUp("k200", "范范", keys, "2015-10-13");
    return ret;
}
// "上架日期" : "2015-03-17",
function setGoods005() {
    var keys = { "款号" : "8989", "名称" : "我们", "吊牌价" : "0", "进货价" : "0",
        "零批价" : "417", "打包价" : "416", "大客户价" : "416", "Vip价格" : "416",
        "产品折扣" : "0.985", "季节" : "春季", "厂商" : "Rt", "计量单位" : "件", "仓位" : "默认",
        "最小库存" : "0", "最大库存" : "0" };
    var ret = editGoodsBasicSetUp("8989", "我们", keys, "2015-03-17");
    return ret;
}
function setGoods006() {
    var keys = { "款号" : "plczcs1", "名称" : "批量操作测试1" };
    var ret = editGoodsBasicSetUp("plczcs1", "批量操作测试1", keys);
    return ret;
}
function setGoods007() {
    var keys = { "款号" : "plczcs2", "名称" : "批量操作测试2" };
    var ret = editGoodsBasicSetUp("plczcs2", "批量操作测试2", keys);
    return ret;
}
function setGoods008() {
    var keys = { "款号" : "plczcs3", "名称" : "批量操作测试3" };
    var ret = editGoodsBasicSetUp("plczcs3", "批量操作测试3", keys);
    return ret;
}

function setGoods009() {
    var keys = { "款号" : "x001", "名称" : "特步夹克", "品牌" : "特步", "颜色" : "0,1,",
        "尺码" : "3,4,5,", "吊牌价" : "500", "进货价" : "150", "零批价" : "490",
        "打包价" : "440", "大客户价" : "390", "Vip价格" : "190", "产品折扣" : "0.8",
        "季节" : "春季", "类别" : "夹克", "厂商" : "特步生产商", "计量单位" : "件", "仓位" : "A座六层",
        "最小库存" : "0", "最大库存" : "0" };
    var ret = editGoodsBasicSetUp("x001", "特步夹克", keys, "2015-03-04", "yes");
    return ret;
}
function setGoods010() {
    var keys = { "款号" : "x003", "名称" : "特步登山服", "品牌" : "特步", "颜色" : "0,1,2",
        "尺码" : "3,4,5", "吊牌价" : "0", "进货价" : "100", "零批价" : "390",
        "打包价" : "370", "大客户价" : "350", "Vip价格" : "190", "产品折扣" : "0.8",
        "季节" : "春季", "类别" : "登山服", "厂商" : "特步生产商", "计量单位" : "件", "仓位" : "A座六层",
        "最小库存" : "0", "最大库存" : "0", "经办人" : "005" };
    var ret = editGoodsBasicSetUp("x003", "特步夹克", keys, "2015-03-09", "yes");
    return ret;
}
function setGoods011() {
    var keys = { "款号" : "nb001", "名称" : "新百伦运动鞋", "品牌" : "新百伦",
        "颜色" : "0,1,2,3,", "尺码" : "6,7,8,9", "吊牌价" : "400", "进货价" : "100",
        "零批价" : "390", "打包价" : "370", "大客户价" : "350", "Vip价格" : "190",
        "产品折扣" : "0.8", "季节" : "春季", "类别" : "跑步鞋", "厂商" : "新百伦生产商",
        "计量单位" : "件", "仓位" : "A座六层", "最小库存" : "0", "最大库存" : "0", "经办人" : "001" };
    var ret = editGoodsBasicSetUp("nb001", "新百伦运动鞋", keys, "2015-02-12", "yes");
    return ret;
}
function setGoods012() {
    var keys = { "款号" : "nb003", "名称" : "新百伦围巾", "品牌" : "新百伦", "颜色" : "0,1,2",
        "尺码" : "1,3,4", "吊牌价" : "400", "进货价" : "120", "零批价" : "430",
        "打包价" : "390", "大客户价" : "350", "Vip价格" : "190", "产品折扣" : "0.8",
        "季节" : "春季", "类别" : "围巾", "厂商" : "新百伦生产商", "计量单位" : "件", "仓位" : "A座六层",
        "最小库存" : "0", "最大库存" : "0", "经办人" : "001" }
    var ret = editGoodsBasicSetUp("nb003", "新百伦围巾", keys, "2015-02-13", "yes");
    return ret;
}