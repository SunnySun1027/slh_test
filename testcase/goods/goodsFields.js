//LuXingXin <52619481 at qq.com> 20150911

//当前库存
function testQueryGoodsStockFields() {
    var keys = [ "code", "name", "shop", "provider", "color", "size", "brand",
            "season", "market1", "market2", "stop" ];
    var fields = queryGoodsStockFields(keys);
    setTFieldsValue(window, fields);
    // debugElements(window);
    var showFields = queryGoodsStockFields(keys, true);
    return checkShowFields(window, showFields);
}
/**
 * 当前库存 门店2为门店后面的。。。按钮输入
 * @param keys
 * @param show
 * @returns
 */
function queryGoodsStockFields(keys, show) {
    show = show || false;
    var idx = getValueFromCacheF1("getQueryBtnIndex");// 第一个...按钮下标
    return getTFields("queryGoodsStockField", window, keys, show, idx);
}

function queryGoodsStockField(key, show, idx) {
    var f;
    switch (key) {
    case "code":
    case "款号":
        f = new TField("款号_60", TF_AC, 0, "b", -1, 0);
        break;
    case "name":
    case "款号名称":
        f = new TField("款号名称_65", TF, 1, "a");
        break;
    case "shop":
    case "门店":
        f = new TField("门店_201", TF, 2, "常青店", -1, 0);// 实际为TF_AC
        break;
    case "门店2":
        var f = new TField("门店_60", BTN_SC, idx, "常青店", -1, 0);
        if (show) {
            f.type = TF;
            f.index = 2;
        }
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商_70", TF_AC, 3, "a", -1, 0);
        break;
    case "color":
    case "颜色":
        f = new TField("颜色_75", TF, 4, "花色", -1, 0);// TF_SC
        break;
    case "颜色2":
        var f = new TField("颜色_75", BTN_SC, idx + 1, "花色", -1, 0);
        if (show) {
            f.type = TF;
            f.index = 4;
        }
        break;
    case "size":
    case "尺码":
        f = new TField("尺码_80", TF_SC, 5, "XL");
        break;
    case "season":
    case "季节":
        f = new TField("季节_90", TF_SC, 6, "春季");
        break;
    case "stop":
    case "是否停用":
        f = new TField("是否停用_95", TF_SC, 7, "否");
        break;
    case "market1":
    case "上架从":
        f = new TField("上架从_205", TF_DT, 8, getToday());
        break;
    case "market2":
    case "到":
    case "上架到":
        f = new TField("到_206", TF_DT, 9, getToday());
        break;
    case "brand":
    case "品牌":
        f = new TField("品牌_208", TF_AC, 10, "1010pp", -1, 0);
        if (show) {
            f.value = "1010pp";
        }
        break;
    case "品牌2":
        var f = new TField("品牌_208", BTN_SC, idx + 2, "1010pp", -1, 0);
        if (show) {
            f.type = TF;
            f.index = 10;
        }
        break;
    case "type":
    case "类别":
        f = new TField("类别_8", TF_TYPE, 11, "登山服");
        break;
    default:
        logDebug("未知key＝" + key);
        break;
    }
    return f;
}

// 款号库存
function testQueryGoodsCodeStockFields() {
    var keys = [ "code", "name", "shop", "provider", "season", "market1",
            "market2" ];
    var fields = queryGoodsCodeStockFields(keys);
    setTFieldsValue(window, fields);
    var showFields = queryGoodsCodeStockFields(keys, true);
    return checkShowFields(window, showFields);
}

function queryGoodsCodeStockFields(keys, show) {
    return getTFields("queryGoodsCodeStockField", window, keys, show);
}

function queryGoodsCodeStockField(key, show) {
    var f;
    switch (key) {
    case "code":
    case "款号":
        f = new TField("款号_30", TF_AC, 0, "a", -1, 0);
        break;
    case "name":
    case "款号名称":
        f = new TField("款号名称_203", TF, 1, "a");
        break;
    case "shop":
    case "门店":
        f = new TField("门店_201", TF, 2, "仓库店", -1, 0);// 实际为TF_AC
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商_204", TF_AC, 3, "a", -1, 0);
        break;
    case "season":
    case "季节":
        f = new TField("季节_207", TF_SC, 4, "春季新");
        break;
    case "market1":
    case "上架从":
        f = new TField("上架从_205", TF_DT, 5, getDay());
        break;
    case "market2":
    case "到":
    case "上架到":
        f = new TField("到_206", TF_DT, 6, getDay());
        break;
    case "stop":
    case "是否停用":
        f = new TField("是否停用_95", TF_SC, 7, "否");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 库存分布
function testQueryGoodsDistributionFields() {
    var keys = [ "type", "provider" ];
    var fields = queryGoodsDistributionFields(keys);
    setTFieldsValue(window, fields);
    var showFields = queryGoodsDistributionFields(keys, true);
    return checkShowFields(window, showFields);
}

function queryGoodsDistributionFields(keys, show) {
    return getTFields("queryGoodsDistributionField", window, keys, show);
}

function queryGoodsDistributionField(key, show) {
    var f;
    switch (key) {
    case "type":
    case "类别":
        f = new TField("类别_5", TF_TYPE, 0, "登山服");
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商_6", TF_AC, 1, "a", -1, 0);
        break;
    case "stop":
    case "是否停用":
        f = new TField("是否停用_15", TF_SC, 2, "否");
        break;
    case "season":
    case "季节":
        f = new TField("季节_207", TF_SC, 3, "春季");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 库存分布二级界面
function testQueryGoodsDistributionDetFields() {
    var keys = [ "code" ];
    var fields = queryGoodsDistributionDetFields(keys);
    setTFieldsValue(getScrollView(-1, 0), fields);
    var showFields = queryGoodsDistributionDetFields(keys, true);
    return checkShowFields(getScrollView(-1, 0), showFields);
}
//
function queryGoodsDistributionDetFields(keys, show) {
    return getTFields("queryGoodsDistributionDetField", getScrollView(-1, 0),
            keys, show);
}

function queryGoodsDistributionDetField(key, show) {
    var f;
    switch (key) {
    case "code":
    case "款号":
        f = new TField("款号", TF_AC, 0, "3035", -1, 0);
        if (show) {
            f.value = "3035,jkk,200元,Adidas"
        }
        break;
    case "name":
    case "款号名称":
        f = new TField("款号名称", TF, 1, "jkk");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 货品进销存
function testQueryGoodsInOutFields() {
    var keys = [ "shop", "code", "name", "provider", "market1", "market2",
            "season", "brand" ];
    var fields = queryGoodsInOutFields(keys);
    setTFieldsValue(window, fields);
    var showFields = queryGoodsInOutFields(keys, true);
    return checkShowFields(window, showFields);
}
/**
 * 货品进销存
 * @param keys
 * @param show
 * @returns
 */
function queryGoodsInOutFields(keys, show) {
    return getTFields("queryGoodsInOutField", window, keys, show);
}
function queryGoodsInOutField(key, show) {
    var idx = 0;
    if (ipadVer < 7.21) {
        idx = -1;
    }
    var f;
    switch (key) {
    case "shop":
    case "门店":
        f = new TField("门店_201", TF, 0, "仓库店", -1, 0);// 实际为TF_AC
        break;
    case "code":
    case "款号":
        f = new TField("款号_202", TF_AC, 1, "a", -1, 0);
        if (show) {
            f.value = "5880,kha,210元";
        }
        break;
    case "name":
    case "款号名称":
        f = new TField("款号名称_203", TF, 2, "a");
        break;
    case "season":
    case "季节":
        f = new TField("季节_207", TF_SC, 3, "春季");
        break;
    case "provider":
    case "厂商":
        f = new TField("厂商_204", TF_AC, 4, "a", -1, 0);
        if (show) {
            f.value = "Adidas";
        }
        break;
    case "isStop":
    case "是否停用":
        f = new TField("是否停用_15", TF_SC, 5, "否", -1, 0);
        break;
    case "market1":
    case "上架从":
        f = new TField("上架从_205", TF_DT, 6 + idx, getToday());
        break;
    case "market2":
    case "到":
    case "上架到":
        f = new TField("到_206", TF_DT, 7 + idx, getToday());
        break;
    case "brand":
    case "品牌":
        f = new TField("品牌_210", TF_AC, 8 + idx, "1010pp", -1, 0);
        if (show) {
            f.value = "1010pp";
        }
        break;
    case "type":
    case "类别":
        f = new TField("类别_9", TF_TYPE, 9 + idx, "登山服", -1);
        break;
    case "staff":
    case "经办人":
        f = new TField("经办人_223", TF_AC, 10 + idx, "000", -1, 0);
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 货品查询
function testQueryGoodsFields() {
    var keys = [ "provider", "name", "brand", "market1", "market2", "color",
            "staff", "stop", "type", "season" ];
    var fields = queryGoodsFields(keys);
    setTFieldsValue(window, fields);
    var showFields = queryGoodsFields(keys, true);
    return checkShowFields(window, showFields);
}
/**
 * 货品查询
 * @param keys
 * @param show
 * @returns
 */
function queryGoodsFields(keys, show) {
    return getTFields("queryGoodsField", window, keys, show);
}

function queryGoodsField(key, show) {
    var i = 0;
    if (ipadVer < 7.21) {
        i = -1;
    }
    var f;
    switch (key) {
    case "provider":
    case "厂商":
        f = new TField("厂商_6", TF_AC, 0, "a", -1, 0);
        break;
    case "name":
    case "款号名称":
        f = new TField("款号名称_7", TF, 1, "a");
        break;

    case "market1":
    case "上架从":
        f = new TField("上架从_11", TF_DT, 2, getToday());
        break;
    case "market2":
    case "到":
    case "上架到":
        f = new TField("到_3", TF_DT, 3, getToday());
        break;
    case "color":
    case "颜色":
        f = new TField("颜色_50", TF, 4, "花色", -1, 0);// 实际为TF_AC
        break;
    case "hasPicture":
    case "是否有图":
        f = new TField("是否有图_4", TF_SC, 5, "是");
        break;
    case "staff":
    case "经办人":
        f = new TField("经办人_17", TF_AC, 6 + i, "000", -1, 0);
        if (show) {
            f.value = "000,管理员";
        }
        break;
    case "brand":
    case "品牌":
        f = new TField("品牌_209", TF_AC, 7 + i, "1010pp", -1, 0);
        break;
    case "stop":
    case "是否停用":
        f = new TField("是否停用_15", TF_SC, 8 + i, "否");
        break;
    case "type":
    case "类别":
        f = new TField("类别_5", TF_TYPE, 9 + i, "登山服");
        break;
    case "season":
    case "季节":
        f = new TField("季节_20", TF_SC, 10 + i, "春季");
        break;
    default:
        logDebug("未知key＝" + key);
        break;
    }
    return f;
}

// 新增货品
function testEditGoodsFields() {
    var keys = [ "code", "name", "brand", "color", "size", "market", "tag",
            "purchase-price", "retail", "pack", "vip", "discount", "season",
            "type", "provider", "measure", "warehouse", "min", "max", "staff",
            "barcode", "remarks" ];
    var fields = editGoodsFields(keys);
    setTFieldsValue(getScrollView(), fields);
    var showFields = editGoodsFields(keys, true);
    return checkShowFields(getScrollView(), showFields);
}
/**
 * 新增货品界面
 * @param keys
 * @param show
 */
function editGoodsFields(keys, show) {
    if (isUndefined(show)) {
        show = false;
    }
    var tests = getEditGoodsElements();
    return getGoodsTFields(keys, show, tests);// getTFields
}
function getGoodsTFields(keys, show, texts) {
    if (isUndefined(keys)) {
        return {};
    }
    var ret = {};

    for ( var i in keys) {
        var key = i;
        if (isArray(keys)) {
            key = keys[i];
        }

        var f = editGoodsField(key, show, texts);
        if (isObject(keys)) {
            var a1 = keys[i];
            if (isArray(a1)) {
                changeTFieldValue(f, getArray1(a1, 0), getArray1(a1, 1),
                        getArray1(a1, 2), getArray1(a1, 3));
            } else {
                changeTFieldValue(f, a1);
            }
        }
        logDebug("getTFields i=" + i + "  type=" + f.type + " index=" + f.index);
        ret[key] = f;
    }

    return ret;
}
function getEditGoodsElements() {
    // target.pushTimeout(2);
    // delay();// 等待界面加载
    var view = getScrollView();
    var e = getElements(view);
    // target.popTimeout();
    return e;
}
/**
 * 获取新增货品界面下标
 * @param texts
 * @param value
 * @returns {Array}
 */
function getEditGoodsIndex(value) {
    var idx = new Array(2), tfNum = -1, btnNum = -1;
    for (var i = 0, length = texts.length; i < length; i++) {
        var e = texts[i];
        if (isUIATextField(e)) {
            tfNum++;
        }
        if (isUIAButton(e)) {
            btnNum++;
        }
        if (isUIAStaticText(e) && e.value() == value) {
            idx[0] = tfNum + 1;
            idx[1] = btnNum + 1;
            break;
        }
    }
    return idx;
}
/**
 * 获取吊牌价的TF下标，有2个重合的TF，取后面一个
 * @param idx
 * @returns
 */
function getEditGoodsIndex2(value) {
    // var obj1 = getScrollView().textFields()[idx];
    // var y1 = getY(obj1);
    // var obj2 = getScrollView().textFields()[idx + 1];
    // var y2 = getY(obj2);
    // logDebug('新增货品界面 getEditGoodsIndex2 y1 = '+y1+' y2 = '+y2+' idx = ' + idx);
    var idx = -1;
    // return Math.abs(y1 - y2 < 1) ? idx++ : idx;
    var view = getScrollView();
    var tfs = getTextFields(view);
    for (var i = 0,length=tfs.length; i < length; i++) {
     if (tfs[i].value()==value) {
       idx=i;
       break;
     }
    }
    return idx;
}
function editGoodsField(key, show, texts) {
    if (isUndefined(key)) {
        return;
    }
    var f, idx = [],i;
    switch (key) {
    case "code":
    case "款号":
        f = new TField("款号", TF, 0, "a");
        break;
    case "name":
    case "名称":
        f = new TField("名称", TF, 1, "a");
        break;
    case "brand":
    case "品牌":
        f = new TField("品牌", TF_AC, 2, "1010pp", -1, 0);// BTN_SC,0
        if (show) {
            f.type = TF;
            f.index = 2;
        }
        break;
    case "color":
    case "颜色":
        f = new TField("颜色", BTN_MC, 2, [ 0, 1 ]);
        if (show) {
            f.type = TF;
            f.index = 3;
            f.value = "花色,黑色";
        }
        break;
    case "size":
    case "尺码":
        f = new TField("尺码", BTN_MC, 4, [ 0, 1 ]);
        if (show) {
            f.type = TF;
            f.index = 4;
            f.value = "S,M";
        }
        break;
    case "库存录入":
        idx = getEditGoodsIndex(texts, "库存录入");
        f = new TField("库存录入", BTN, idx[1] + 1, "");// index为新增+按钮
        if (show) {
            f.type = TV;
            f.index = 0;
            f.value = "均色,均码,9件;";
        }
        break;
    // tapButton(getScrollView(), "减量");也许要点击3次才能变成昨天
    case "marketdate":
    case "上架日期":
        var addIdx = getButtonIndex(getScrollView(), "增量");
        f = new TField("上架日期", BTN, addIdx, getToday());
        if (show) {
            f.type = TF;
            f.index = 5;
        }
        break;
    case "tag":
    case "吊牌价":
        // idx = getEditGoodsIndex(texts, "吊牌价");
        idx = getEditGoodsIndex2("吊牌价");// 可能有2个重合的TF
        f = new TField("吊牌价", TF, i, "200");
        break;
    case "purchase-price":
    case "进货价":
        idx = getEditGoodsIndex(texts, "进货价");
        i = getEditGoodsIndex2(idx[0]);// 可能有2个重合的TF
        f = new TField("进货价", TF, i, "100");
        break;
    case "retail":
    case "零批价":
        idx = getEditGoodsIndex(texts, "零批价");
        i = getEditGoodsIndex2(idx[0]);// 可能有2个重合的TF
        f = new TField("零批价", TF, i, "200");
        break;
    case "pack":
    case "打包价":
        idx = getEditGoodsIndex(texts, "打包价");
        f = new TField("打包价", TF, idx[0], "180");
        break;
    case "customerPrice":
    case "大客户价":
        idx = getEditGoodsIndex(texts, "大客户价");
        f = new TField("大客户价", TF, idx[0], "160");
        break;
    case "vip":
    case "Vip价格":
        idx = getEditGoodsIndex(texts, "Vip价格");
        f = new TField("Vip价格", TF, idx[0], "140");
        break;
    case "discount":
    case "产品折扣":
        idx = getEditGoodsIndex(texts, "产品折扣");
        f = new TField("产品折扣", TF, idx[0], "0.888");
        break;
    case "season":
    case "季节":
        idx = getEditGoodsIndex(texts, "季节");
        f = new TField("季节", BTN_SC, idx[1], "夏季");
        if (show) {
            f.type = TF;
            f.index = idx[0];
        }
        break;
    case "type":
    case "类别":
        idx = getEditGoodsIndex(texts, "类别");
        f = new TField("类别", BTN_TYPE, idx[1], "登山服");//UIAPickerWheel
        if (show) {
            f.type = TF;
            f.index = idx[0];
        }
        break;
    case "provider":
    case "厂商":
        idx = getEditGoodsIndex(texts, "厂商");
        f = new TField("厂商", TF_AC, idx[0], "a", -1, 0);
        if (show) {
            f.value = "Vell";
        }
        break;
    case "suplPrice":
    case "厂商价格":
        idx = getEditGoodsIndex(texts, "厂商价格");
        f = new TField("厂商价格", BTN, idx[1] + 1, "");// index为新增+按钮
        if (show) {
            f.type = TV;
            f.index = 1;// 新增界面
            if (gMenu2 == "货品查询") {
                f.index = 0;// 修改界面
            }
            f.value = "Rt:50;";
        }
        break;
    case "useLastPrice":
    case "启用上次价":
        idx = getEditGoodsIndex(texts, "启用上次价");
        f = new TField("启用上次价", BTN_SC, idx[1], "否");
        if (show) {
            f.type = TF;
            f.index = idx[0];
        }
        break;
    case "measure":
    case "计量单位":
        idx = getEditGoodsIndex(texts, "计量单位");
        f = new TField("计量单位", BTN_SC, idx[1], "双");
        if (show) {
            f.type = TF;
            f.index = idx[0];
        }
        break;
    case "warehouse":
    case "仓位":
        idx = getEditGoodsIndex(texts, "仓位");
        f = new TField("仓位", BTN_SC, idx[1], "默认");
        if (show) {
            f.type = TF;
            f.index = idx[0];
        }
        break;
    case "min":
    case "最小库存":
        idx = getEditGoodsIndex(texts, "最小库存");
        f = new TField("最小库存", TF, idx[0], "1");
        break;
    case "max":
    case "最大库存":
        idx = getEditGoodsIndex(texts, "最大库存");
        f = new TField("最大库存", TF, idx[0], "200");
        break;
    case "staff":
    case "经办人":
        idx = getEditGoodsIndex(texts, "经办人");
        f = new TField("经办人", TF_AC, idx[0], "000", -1, 0);
        if (show) {
            f.value = "000,总经理";
        }
        break;
    // 这个不考虑与客户是否允许退货的组合情况
    case "allowReturn":
    case "允许退货":
        idx = getEditGoodsIndex(texts, "允许退货");
        f = new TField("允许退货", BTN_SC, idx[1], "否");
        if (show) {
            f.type = TF;
            f.index = idx[0];
        }
        break;
    case "isProcess":
    case "是否加工款":
        idx = getEditGoodsIndex(texts, "是否加工款");
        f = new TField("是否加工款", BTN_SC, idx[1], "否");
        if (show) {
            f.type = TF;
            f.index = idx[0];
        }
        break;
    case "processPrice":
    case "加工价":
        idx = getEditGoodsIndex(texts, "加工价");
        f = new TField("加工价", TF, idx[0], "100");
        break;
    case "shop":
    case "门店":
        idx = getEditGoodsIndex(texts, "门店");
        f = new TField("门店", BTN_SC, idx[1], "常青店");
        if (show) {
            f.type = TF;
            f.index = idx[0];
        }
        break;
    case "boxNum":
    case "装箱数":
        idx = getEditGoodsIndex(texts, "装箱数");
        f = new TField("装箱数", TF, idx[0], "6");
        break;
    case "material":
    case "面料":
        idx = getEditGoodsIndex(texts, "面料");
        f = new TField("面料", TF, idx[0], "纯棉");
        break;
    case "operativeNorm":
    case "执行标准":
        idx = getEditGoodsIndex(texts, "执行标准");
        f = new TField("执行标准", BTN_SC, idx[1], "执行标准A");
        if (show) {
            f.type = TF;
            f.index = idx[0];
        }
        break;
    case "safeType":
    case "安全类别":
        idx = getEditGoodsIndex(texts, "安全类别");
        f = new TField("安全类别", BTN_SC, idx[1], "安全类别A");
        if (show) {
            f.type = TF;
            f.index = idx[0];
        }
        break;
    case "level":
    case "等级":
        idx = getEditGoodsIndex(texts, "等级");
        f = new TField("等级", BTN_SC, idx[1], "一等品");
        if (show) {
            f.type = TF;
            f.index = idx[0];
        }
        break;
    case " washingInstructions":
    case "洗涤说明":
        idx = getEditGoodsIndex(texts, "洗涤说明");
        f = new TField("洗涤说明", BTN_MC, idx[1], "可以机洗,适宜手洗");
        if (show) {
            f.type = TF;
            f.index = idx[0];
        }
        break;
    case "barcode":
    case "条码":
        idx = getEditGoodsIndex(texts, "条码");
        f = new TField("条码", TF, idx[0], "555555");
        break;
    case "remarks":
    case "备注":
        idx = getEditGoodsIndex(texts, "备注");
        f = new TField("备注", TF, idx[0], "123");
        break;
    case "picture":
    case "图像":
        idx = getEditGoodsIndex(texts, "图像");
        f = new TField("图像", TF, idx[0], "");
        break;
    default:
        logDebug("未知key＝" + key);
        break;
    }
    return f;
}
// 批量调价
function testGoodsPricingFields() {
    var keys = [ "plus-minus", "multiplication" ];
    var fields = goodsPricingFields(keys);
    setTFieldsValue(getScrollView(1), fields);
    var showFields = goodsPricingFields(keys, true);
    return checkShowFields(getScrollView(1), showFields);
}
function goodsPricingFields(keys, show) {
    return getTFields("goodsPricingField", getScrollView(-1, 0), keys, show);
}
function goodsPricingField(key, show) {
    var f;
    switch (key) {
    case "retail":
    case "零批价":
        f = new TField("零批价", TF, 0, "200");
        break;
    case "pack":
    case "打包价":
        f = new TField("打包价", TF, 1, "180");
        break;
    case "customerPrice":
    case "大客户价":
        f = new TField("大客户价", TF, 2, "180");
        break;
    case "vip":
    case "Vip价格":
        f = new TField("Vip价格", TF, 3, "150");
        break;
    case "plus-minus":
    case "统一加减":
        f = new TField("统一加减", TF, 4, "1");
        break;
    case "multiplication":
    case "统一乘":
        f = new TField("统一乘", TF, 5, "0.8");
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}

// 价格名称
function testGoodsPriceNameFields() {
    var keys = [ "name", "use", "ratio" ];
    var fields = goodsPriceNameFields(keys);
    setTFieldsValue(getScrollView(), fields);
    var showFields = goodsPriceNameFields(keys, true);
    return checkShowFields(getScrollView(), showFields);
}
function goodsPriceNameFields(keys, show) {
    return getTFields("goodsPriceNameField", getScrollView(-1), keys, show);
}
function goodsPriceNameField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称", TF, 0, "a");
        break;
    case "use":
    case "是否适用":
        f = new TField("是否适用", BTN_SC, 0, "是");
        if (show) {
            f.type = TF;
            f.index = 1;
        }
        break;
    case "ratio":
    case "比例":
        f = new TField("比例 ", TF, 2, "1.3");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 货品类别
function testGoodsTypeFields() {
    var keys = [ "name" ];
    var fields = goodsTypeFields(keys);
    setTFieldsValue(window, fields);
    var showFields = goodsTypeFields(keys, true);
    return checkShowFields(window, showFields);
}

function goodsTypeFields(keys, show) {
    return getTFields("goodsTypeField", window, keys, show);
}
function goodsTypeField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称_1", TF, 0, "qqq");
        break;
    case "stop":
    case "是否停用":
        f = new TField("是否停用_4", TF_SC, 1, "否");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 新增类别
function editGoodsTypeFields(keys, show) {
    return getTFields("editGoodsTypeField", getScrollView(-1), keys, show);
}
function editGoodsTypeField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称", TF, 0, "qqq");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 所有颜色
function testGoodsColorFields() {
    var fields = goodsColorFields("name");
    setTFieldsValue(window, fields);
    return true;
}

function goodsColorFields(keys, show) {
    return getTFields("goodsColorField", window, keys, show);
}
function goodsColorField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称_15", TF, 0, "q");
        break;
    default:
        logDebug("未知key＝" + key);
        break;
    }
    return f;
}

// 新增颜色
function testEditGoodsColorFields() {
    var keys = [ "type", "code", "name" ];
    var fields = editGoodsColorFields(keys);
    setTFieldsValue(getScrollView(), fields);
    var showFields = editGoodsColorFields(keys, true);
    return checkShowFields(getScrollView(), showFields);
}

function editGoodsColorFields(keys, show) {
    return getTFields("editGoodsColorField", getScrollView(-1), keys, show);
}
function editGoodsColorField(key, show) {
    var f;
    switch (key) {
    case "type":
    case "颜色类别":
        f = new TField("颜色类别", BTN_SC, 0, "中");
        if (show) {
            f.type = TF;
            f.index = 0;
        }
        break;
    case "code":
    case "编码":
        f = new TField("编码", TF, 1, "123");
        break;
    case "name":
    case "名称":
        f = new TField("名称", TF, 2, "qqq");
        break;
    // 颜色值
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 所有尺码
function testGoodsSizeFields() {
    var fields = goodsSizeFields("size-group", "name");
    setTFieldsValue(window, fields);
    return true;
}

function goodsSizeFields(keys, show) {
    return getTFields("goodsSizeField", window, keys, show);
}
function goodsSizeField(key, show) {
    var f;
    switch (key) {
    case "size-group":
    case "尺码组":
        f = new TField("尺码组_7", TF_SC, 0, "童装尺码组1");
        break;
    case "name":
    case "名称":
        f = new TField("名称_15", TF, 1, "q");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

/**
 * 新增配码
 * @param size 对应尺码
 * @param num 对应数量
 */
function ts100095Field(size, num) {
    var fields = [];
    fields.push(new TField("对应尺码", BTN_SC, 0, size, "in"));
    fields.push(new TField("对应数量", TF, 1, num));
    setTFieldsValue(getScrollView(-1), fields);
    tapNaviRightButton();
    tapAlertButton(OK);
}

// 新增尺码
function testEditGoodsSizeFields() {
    var keys = [ "type", "code", "name", "sequence", "number" ];
    var fields = editGoodsSizeFields(keys);
    setTFieldsValue(getScrollView(), fields);
    var showFields = editGoodsSizeFields(keys, true);
    return checkShowFields(getScrollView(), showFields);
}

function editGoodsSizeFields(keys, show) {
    return getTFields("editGoodsSizeField", getScrollView(-1), keys, show);
}
function editGoodsSizeField(key, show) {
    var f;
    switch (key) {
    case "type":
    case "尺码类别":
        f = new TField("尺码类别", BTN_SC, 0, "童装尺码组1");
        if (show) {
            f.type = TF;
            f.index = 0;
        }
        break;
    case "code":
    case "编码":
        f = new TField("编码", TF, 1, "123");
        break;
    case "name":
    case "名称":
        f = new TField("名称", TF, 2, "qqq");
        break;
    case "sequence":
    case "显示顺序":
        f = new TField("显示顺序", TF, 3, "10");
        break;
    case "number":
    case "对应件数":
        f = new TField("对应件数", TF, 4, "12");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 所有品牌
function testGoodsBrandFields() {
    var keys = [ "name" ];
    var fields = goodsBrandFields(keys);
    setTFieldsValue(window, fields);
    var showFields = goodsBrandFields(keys, true);
    return checkShowFields(window, showFields);
}

function goodsBrandFields(keys, show) {
    return getTFields("goodsBrandField", window, keys, show);
}
function goodsBrandField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称_135", TF, 0, "a");
        break;
    case "stop":
    case "是否停用":
        f = new TField("是否停用_160", TF_SC, 1, "是");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 新增品牌
function testEditGoodsBrandFields() {
    var keys = [ "name" ];
    var fields = editGoodsBrandFields(keys);
    setTFieldsValue(getScrollView(), fields);
    var showFields = editGoodsBrandFields(keys, true);
    return checkShowFields(getScrollView(), showFields);
}

function editGoodsBrandFields(keys, show) {
    return getTFields("editGoodsBrandField", getScrollView(-1), keys, show);
}
function editGoodsBrandField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称", TF, 0, "a");
        break;
    case "stop":
    case "是否停用":
        f = new TField("是否停用", TF_SC, 1, "否");
        break;
    default:
        logWarn("未知key＝" + key);
        break;
    }
    return f;
}

// 所有尺码组
function testGoodsSizeidsFields() {
    var keys = [ "name" ];
    var fields = goodsSizeidsFields(keys);
    setTFieldsValue(window, fields);
    var showFields = goodsSizeidsFields(keys, true);
    return checkShowFields(window, showFields);
}

function goodsSizeidsFields(keys, show) {
    return getTFields("goodsSizeidsField", window, keys, show);
}
function goodsSizeidsField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称_15", TF, 0, "a");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 新增尺码组 ，颜色组
function testEditGoodsSizeidsFields() {
    var keys = [ "name" ];
    var fields = editGoodsSizeidsFields(keys);
    setTFieldsValue(getScrollView(), fields);
    var showFields = editGoodsSizeidsFields(keys, true);
    return checkShowFields(getScrollView(), showFields);
}

function editGoodsSizeidsFields(keys, show) {
    return getTFields("editGoodsSizeidsField", getScrollView(-1), keys, show);
}
function editGoodsSizeidsField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称", TF, 0, "a");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 所有品牌折扣
function testGoodsBrandDiscountFields() {
    var keys = [ "brand" ];
    var fields = goodsBrandDiscountFields(keys);
    setTFieldsValue(window, fields);
    var showFields = editGoodsSizeidsFields(keys, true);
    return checkShowFields(window, showFields);
}

function goodsBrandDiscountFields(keys, show) {
    return getTFields("goodsBrandDiscountField", window, keys, show);
}
function goodsBrandDiscountField(key, show) {
    var f;
    switch (key) {
    case "brand":
    case "品牌":
        f = new TField("品牌_2", TF_AC, 0, "1010pp", -1, 0);
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 新增品牌折扣
function testEditGoodsBrandDiscountFields() {
    var keys = [ "brand", "discount", "retail", "pack", "vip" ];
    var fields = editGoodsBrandDiscountFields(keys);
    setTFieldsValue(getScrollView(), fields);
    var showFields = editGoodsBrandDiscountFields(keys, true);
    return checkShowFields(getScrollView(), showFields);
}

function editGoodsBrandDiscountFields(keys, show) {
    return getTFields("editGoodsBrandDiscountField", getScrollView(-1), keys,
            show);
}
function editGoodsBrandDiscountField(key, show) {
    var f;
    switch (key) {
    case "brand":
    case "品牌":
        f = new TField("品牌", BTN_SC, 0, "1010pp");
        if (show) {
            f.type = TF;
            f.index = 0;
        }
        break;
    case "discount":
    case "进货价折扣":
        f = new TField("进货价折扣", TF, 1, "1");
        break;
    case "retail":
    case "零批价":
        f = new TField("零批价", TF, 2, "0.5");
        break;
    case "pack":
    case "打包价":
        f = new TField("打包价", TF, 3, "0.4");
        break;
    case "super":
    case "大客户价":
        f = new TField("大客户价", TF, 4, "0.4");
        break;
    case "vip":
    case "Vip价格":
        f = new TField("Vip价格", TF, 5, "0.3");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}

// 客户上货
function testGoodsCustomerFields() {
    var keys = [ "code" ];
    var fields = goodsCustomerFields(keys);
    setTFieldsValue(window, fields);
    var showFields = goodsCustomerFields(keys, true);
    return checkShowFields(window, showFields);
}

function goodsCustomerFields(keys, show) {
    return getTFields("goodsCustomerField", window, keys, show);
}
function goodsCustomerField(key, show) {
    var f;
    switch (key) {
    case "code":
    case "款号":
        f = new TField("款号", TF_AC, 0, "a", -1, 0);
        if (show) {
            f.value = "5880,kha,210元";
        }
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
// 款号管理
function goodsStyleManagerFields(keys, show) {
    return getTFields("goodsStyleManagerField", window, keys, show);
}
function goodsStyleManagerField(key, show) {
    var f;
    switch (key) {
    case "款号":
        f = new TField("款号", TF_AC, 0, "3035", -1, 0);
        break;
    case "厂商":
        f = new TField("厂商", TF_AC, 1, "rt", -1, 0);
        break;
    case "品牌":
        f = new TField("品牌", TF_AC, 2, "1010pp", -1, 0);
        break;
    case "类别":
        f = new TField("类别", BTN_SC, 0, "登山服", -1, 0, "collectionView");// 值显示在导航栏上
        break;
    case "季节":
        f = new TField("季节", BTN_SC, 1, "春季", -1, 0, "collectionView");// 值显示在导航栏上
        break;
    default:
        logWarn("位置key=" + key);
    }
    return f;
}
// 库存调整单
function goodsStockAdjustmentFields(keys, show) {
    return getTFields("goodsStockAdjustmentField", window, keys, show);
}
function goodsStockAdjustmentField(key, show) {
    var f;
    switch (key) {
    case "day1":
    case "日期从":
        f = new TField("日期从_400", TF_DT, 0, getToday());
        break;
    case "day2":
    case "日期到":
        f = new TField("到_405", TF_DT, 1, getToday());
        break;
    case "shop":
    case "门店":
        f = new TField("门店_435", TF, 2, "常青店", -1, 0);// BTN_SC
        break;
    case "batch1":
    case "批次从":
        f = new TField("批次从_540", TF, 3, "1");
        break;
    case "batch2":
    case "批次到":
        f = new TField("到_541", TF, 4, "10000");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
// 仓位列表
function goodsStoreListFields(keys, show) {
    return getTFields("goodsStoreListField", window, keys, show);
}
function goodsStoreListField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称_135", TF, 0, "q");
        break;
    default:
        logDebug("未知key＝" + key);
        break;
    }
    return f;
}
// 超储统计，缺货统计
function goodsStatisticFields(keys, show) {
    return getTFields("goodsStatisticField", window, keys, show);
}
function goodsStatisticField(key, show) {
    var f;
    switch (key) {
    case "code":
    case "款号":
        f = new TField("款号_421", TF_AC, 0, "a", -1, 0);
        if (show) {
            f.value = "5880,kha,210元";
        }
        break;
    case "name":
    case "款号名称":
        f = new TField("款号名称_22", TF, 1, "a");
        break;
    case "market1":
    case "上架从":
        f = new TField("上架从_414", TF_DT, 2, getToday());
        break;
    case "market2":
    case "到":
        f = new TField("到_411", TF_DT, 3, getToday());
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
// 所有颜色组
function goodsColoridsFields(keys, show) {
    return getTFields("goodsColoridsField", window, keys, show);
}
function goodsColoridsField(key, show) {
    var f;
    switch (key) {
    case "name":
    case "名称":
        f = new TField("名称_6", TF, 0, "a");
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
// 挂版查询
function goodsHangQueryFields(keys, show) {
    return getTFields("goodsHangQueryField", window, keys, show);
}
function goodsHangQueryField(key, show) {
    var f;
    switch (key) {
    case "code":
    case "款号":
        f = new TField("款号_202", TF_AC, 0, "a", -1, 0);
        break;
    case "name":
    case "名称":
        f = new TField("名称_13", TF, 1, "a");
        break;
    case "market1":
    case "上架从":
        f = new TField("上架从_205", TF_DT, 2, getToday());
        break;
    case "market2":
    case "到":
        f = new TField("到_206", TF_DT, 3, getToday());
        break;
    case "厂商":
        f = new TField("厂商_70", TF_AC, 4, "a", -1, 0);
        break;
    case "类别":
        f = new TField("类别_5", TF_TYPE, 5, "a");
        break;
    case "品牌":
        f = new TField("品牌_208", TF_AC, 6, "a", -1, 0);
        break;
    case "门店":
        f = new TField("门店_14", TF, 7, "常青店", -1, 0);// 实际为TF_AC
        break;
    case "仓库":
        f = new TField("仓库_1", TF, 8, "常青店", -1, 0);// 实际为TF_AC
        break;
    default:
        logWarn("未知key＝" + key);
    }
    return f;
}
function getColorSort(type) {
    var f;
    switch (type) {
    case "花色":
        f = "01";
        break;
    case "黑色":
        f = "02";
        break;
    case "白色":
        f = "03";
        break;
    case "均色":
        f = "04";
        break;
    default:
        logWarn("未知颜色＝" + type);
        f = "99";
    }
    return f;
}
function getGoodSort(type) {
    var f;
    switch (type) {
    case "agc001":
        f = "01";
        break;
    case "agc002":
        f = "02";
        break;
    case "agc004":
        f = "03";
        break;
    case "agc003":
        f = "04";
        break;
    default:
        logWarn("未知款号＝" + type);
        f = "99";
    }
    return f;
}
function getSizeSort(type) {
    var f;
    switch (type) {
    case "S":
        f = "01";
        break;
    case "M":
        f = "02";
        break;
    case "L":
        f = "03";
        break;
    case "XL":
        f = "04";
        break;
    case "2XL":
        f = "05";
        break;
    case "3XL":
        f = "06";
        break;
    case "4XL":
        f = "07";
        break;
    default:
        logWarn("未知尺码＝" + type);
        f = "99";
        break;
    }
    return f;
}
function getShopSort(type) {
    var f;
    switch (type) {
    case "仓库店":
        f = "01";
        break;
    case "常青店":
        f = "02";
        break;
    case "文一店":
        f = "03";
        break;
    case "中洲店":
        f = "04";
        break;
    default:
        logWarn("未知门店＝" + type);
        f = "99";
        break;
    }
    return f;
}
