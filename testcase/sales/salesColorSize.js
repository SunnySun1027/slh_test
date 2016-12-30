//Zhangy <2397655091 at qq.com> 20151217

function testSalesColorSizeAll() {
    run("【销售开单－开单】未付按钮", "testCs170047");
    run("【销售开单－开单】客户新增（不选择适用价格检查）", "testCs170247");
    run("【销售开单－开单】客户新增（适用价格检查）", "testCs170248");
    run("【销售开单－开单】结余文本框检查", "testCs170046");
    run("【销售开单－开单】刷卡按钮", "testCs170048");
    run("【销售开单－开单】汇款按钮", "testCs170049");
    run("【销售开单－开单】收款方式汇总检查-单一", "testCs170050");
    run("【销售开单－开单】收款方式汇总检查-组合", "testCs170051");
    run("【销售开单－开单】核销（客户余款）", "testCs170054_1");
    run("【销售开单－开单】核销（客户余款）", "testCs170054_2");
    run("【销售开单－开单】核销（客户欠款）", "testCs170055");
    run("【销售开单－开单】点击开单界面其它按钮后再去点核销按钮", "testCs170057");
    run("【销售开单－开单】核销后检查本单已核销", "testCs170058");
    run("【销售开单－开单】核销后检查所有已核销", "testCs170059");
    run("【销售开单】客户或供应商信息不允许修改", "testCs170063");
    run("【销售开单-开单】检查核销", "testCs170065_1");
    run("【销售开单-开单】检查核销", "testCs170065_2");
    run("【销售开单-开单】检查核销", "testCs170065_3");
    run("【销售开单-开单】检查核销", "testCs170065_4");
    run("【销售开单-开单】检查核销", "testCs170065_5");
    run("【销售开单－开单】款号价格为负数时检查", "testCs170072")
    run("【销售开单-开单】开单模式-代收模式2", "testCs170090");
    run("【销售开单－开单】收款方式选择代收", "testCs170091_170092");
    run("【销售开单－开单】代收模式2", "testCs170093");
    run("【销售开单－开单】保存代收单后再去修改界面查看代收信息", "testCs170094");
    // run("【销售开单－开单】整单备注和明细备注", "testCs170095");//
    run("【销售开单－开单】退货时备注显示", "testCs170096");
    // run("【销售开单－开单】退货时明细备注框操作", "testCs170097");//
    // run("【销售开单－开单】上次成交价界面显示备注信息", "testCs170104");//
    // run("【销售开单－开单】异地发货－－配货员可查看内容", "testCs170119");//
    // run("【销售开单－开单】开单的同时订货", "testCs170125");// 需重新登录
    // run("【销售开单－开单】特殊货品", "testCs170128");// 需重新登录
    run("【销售开单－开单】新增货品", "testCs170129");
    run("【销售开单－开单】连续新增货品", "testCs170131");
    // run("【销售开单－开单】新增货品后再输入别的款号", "testCs170132");//
    run("【销售开单－开单】开单保存后再增删款号", "testCs170133");
    run("【销售开单－开单】销售开单允许修改和作废的天数 [*不能用总经理帐号测]", "testCs170136");
    run("【销售开单－开单】作废", "testCs170137");
    run("【销售开单－开单】待作废", "testCs170138");
    run("【销售开单－开单】复制-粘贴", "testCs170139");
    // run("【销售开单－开单】收款（新增界面）", "testCs170163");//
    // run("【销售开单－开单】收款（修改界面）", "testCs170164");//
    run("【销售开单－开单】查看修改日志(修改记录)", "testCs170166");
    run("【销售开单－开单】查看修改日志（核销记录）", "testCs170167");
    run("【销售开单－开单】挂单保存", "testCs170169");
    run("【销售开单－开单】挂单修改界面新增删除操作", "testCs170170");
    run("【销售开单－开单】挂单转销售单", "testCs170171");
    run("【销售开单－开单】二次挂单功能检查", "testCs170173");
    run("【销售开单－开单】查看修改日志(修改记录)", "testCs170174");
    run("【销售开单－开单】对正常销售单执行挂单操作", "testCs170175");
    run("【销售开单－开单】挂单修改界面修改客户和付款方式", "testCs170176");
    run("【销售开单－开单】更多-所有挂单 功能检查", "testCs170177");
    run("【销售开单－开单】设置已配货", "testCs170180");
    run("【销售开单－核销】物流单核销不能销售单里的修改日志", "testCs170251");

}
function testSalesColorSize001() {
    run("【销售开单-开单】客户不允许退货", "testCs170181");
    run("【销售开单-开单】开单模式-快速标记代收", "testCs170070");
    run("【销售开单－开单】快速标记代收（代收设置为否）", "testCs170071");
    run("【销售开单－开单】客户退货数量限制－填写客户", "testCs170073");
    run("【销售开单－开单】客户退货数量－不填客户", "testCs170075");
    run("【销售开单－开单】单价小数位精确到元对保存打印的影响", "testCs170076");
    run("【销售开单-开单】开单模式-客户折扣", "testCs170083");
    run("【销售开单-开单】开单模式-产品折扣", "testCs170084");
    run("【销售开单-开单】开单模式-整单折扣", "testCs170085");
    run("【销售开单-开单】开单模式-童装模式", "testCs170087");
    run("【销售开单－开单】查看上次成交价", "testCs170105");
    run("【销售开单－开单】使用上次成交价", "testCs170107");
    run("【销售开单－开单】开单时不允许负库存", "testCs170116");
    run("【销售开单－开单】开单时允许负库存", "testCs170117");
    run("【销售开单－开单】库存不足时开单修改界面不能打印", "testCs170118");
    run("【销售开单-开单】客户不允许退货", "testCs170181");

    run("【销售开单-开单】总计四舍五入", "testCs170191");
    run("【销售开单-开单】开单员销售价允许改高，不允许改低 【使用开单员角色】", "testCs170192");
    run("【销售开单】开单提示和标记行的更新 6.58", "testCs170195");
    run("【销售开单】开单后是否显示打印确认窗口-显示", "testCs170199");
    run("【销售开单】开单后是否显示打印确认窗口-不显示", "testCs170200");
    run("【销售开单】单据打印后不允许修改--不限制", "testCs170236");
    // run("【销售开单】单据打印后不允许修改--明细不允许修改", "testCs170237");//
    // run("【销售开单】单据打印后不允许修改--都不允许修改", "testCs170238");//
    run("【销售开单】单价输入负数检查", "testCs170239");
    run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "testCs170240");
    run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "testCs170241");
    // run("【销售开单】不同门店不同价格在销售开单和图片选款界面的数值检查", "testCs170242");//
    // run("【销售开单】不同门店不同价格时销售开单-按明细查界面检查差额值", "testCs170244");//
    run("【销售开单】开单货品列表是否显示品牌信息", "testCs170245");
    run("【销售开单－开单】款号合并", "testCs170101");
    run("【销售开单－开单】款号合并（既拿货又退货", "testCs170102");

}
// 窜码发货
function testSalesColorSize002() {
    run("【销售开单-开单】1.1窜码发货，库存总数为正", "test170651");
    run("【销售开单-开单】1.2窜码发货，修改时超过总库存时", "test170652");
    run("【销售开单-开单】1.3窜码发货，开单时超过总库存时", "test170653");
    run("【销售开单-开单】2.1窜码发货，库存总数为正", "test170654");
    run("【销售开单-开单】2.2窜码发货，开单时超过总库存时", "test170655");
    run("【销售开单-开单】3.窜码发货，库存总数为0", "test170656");
    run("【销售开单-开单】4.窜码发货，库存总数为负", "test170657");
    run("【销售开单-开单】5.窜码发货，不计算其他门店的数据", "test170658");
    run("【销售开单-开单】7.窜码发货，允许修改采购进货单的数量", "test170660");
}
// 颜色尺码模式特有用例
function testSalesColorSize003() {
    run("【销售开单-按批次查】童装模式+代收进入修改界面查看代收单", "test170442_170425");// 童装只能颜色尺码下
    run("【销售开单-开单】颜色尺码下款号的颜色为3个汉字时,通过获取未保存添加款号", "test170626");
    run("【销售开单-开单】颜色尺码下，快速新增货品", "test170715");
    run("【销售开单-开单】颜色尺码下，快速新增货品", "test170715_1");
    run("【销售开单-开单】颜色尺码下，快速新增货品", "test170715_2");
    run("【销售开单-开单】颜色尺码下，快速新增货品，必填项为空检查", "test170716");
    run("【销售开单-开单】颜色尺码下，快速新增货品，价格输入字母", "test170717");
    run("【销售开单－开单】 未拿货款号做退货时提醒--不输客户名称+颜色尺码", "test170203");
    run("【销售开单】补货退货验证+允许继续输入+颜色尺码", "test170207");
    run("【销售开单】补货退货验证+不允许继续输入+颜色尺码", "test170208");
    run("【销售开单－开单】开单时显示当前库存", "test170112_170113");
    run("【销售开单－开单】开单是否显示所有门店库存", "test170114_170115");
    run("【销售开单-开单】颜色尺码模式，折扣模式下不允许修改折扣", "test170733");
    run("【销售开单-开单】款号对应的颜色被停用后，开单明细录入界面检查提示", "test170408");
    run("【销售开单-开单】开单按颜色尺码提醒已存在的重复记录-按颜色尺码提醒", "test170702");// 步骤5,SLH-11004
    run("【销售开单-开单】开单按颜色尺码提醒已存在的重复记录-按款号提醒", "test170703");// 步骤5,SLH-11004
    run("【销售开单-开单】开单按颜色尺码提醒已存在的重复记录-都不提醒，保留原样", "test170704");
    // run("【销售开单-开单】开单按颜色尺码提醒已存在的重复记录-都不提醒，保留原样", "test170704_1");
    // run("【销售开单-开单】开单按颜色尺码提醒已存在的重复记录-都不提醒，保留原样", "test170704_2");
    // run("【销售开单-开单】开单按颜色尺码提醒已存在的重复记录-都不提醒，保留原样", "test170704_3");
    // run("【销售开单-开单】开单按颜色尺码提醒已存在的重复记录-都不提醒，保留原样", "test170704_4");
    // run("【销售开单-开单】开单按颜色尺码提醒已存在的重复记录-都不提醒，保留原样", "test170704_5");
    // run("【销售开单-开单】童装模式手数需要四位数", "test170719");//童装开单模式生效需重新登录
}
function testSalesColorSize004() {
    run("【销售开单-开单】积分跨门店共享", "testCs170183");
    run("【销售开单-开单】积分是否跨门店共享 －不开启", "testCs170184");
    run("【销售开单-开单】积分是否跨门店共享 －开启", "testCs170185");//
}
function testSalesColorSize005() {
    // 完全一样
    run("【销售开单－开单】客户输入检查【字母】/客户输入检查【汉字】", "test170040_170041");
    run("【销售开单－开单】客户新增按钮", "test170043");
    run("【销售开单－开单】客户停用后检查刷新情况", "test170044");
    run("【销售开单－开单】客户输入框清除功能", "test170045");
    run("【销售开单－开单】按门店区分客户--区分", "test170249");
    run("【销售开单－开单】按门店区分客户--不区分", "test170250");
    run("【销售开单－开单】客户停用后检查刷新情况", "test170052");
    run("【销售开单－开单】客户输入框清除功能", "test170053");
    run("【销售开单－开单】客户切换后点核销", "test170056");
    run("【销售开单－开单】连续核销后核销界面检查", "test170062");
    run("【销售开单－开单】积分兑换", "test170186");
    run("【销售开单－开单】积分兑换后再次检查剩余积分", "test170187");
    run("【销售开单-开单】积分兑换后的金额在综合收支表和收支流水的正确性和正负值检查", "test170188");
    run("【销售开单－开单】兑换记录", "test170189");
    run("【销售开单－开单】 未拿货款号做退货时提醒--输入客户名称+颜色尺码", "test170228");
    run("【销售开单】收款操作时如果存在待作废单子,需要提醒", "test170246");
    run("【销售开单－开单】按门店区分客户--区分", "test170249");
    run("【销售开单－开单】按门店区分客户--不区分", "test170250");
    // run("【销售开单－开单】按门店区分客户--店长权限", "test170464");//(店长权限)
}
function setNoColorSize_2Params() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "显示颜色尺码" };
    o = { "新值" : "1", "数值" : [ "默认显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单是否显示尺码头部的界面" };
    o = { "新值" : "0", "数值" : [ "默认不支持" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "默认显示价格类型" };
    o = { "新值" : "1", "数值" : [ "默认零批价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售允许单价为0" };
    o = { "新值" : "0", "数值" : [ "默认退货和销售价格不能为零", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否允许修改已发货的订单" };
    o = { "新值" : "1", "数值" : [ "允许修改已发货的订单", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单时同时订货" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "进货入库" };
    o = { "新值" : "0", "数值" : [ "不更新", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "询问打印" };
    o = { "新值" : "1", "数值" : [ "询问打印" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单是否显示多种小票格式打印的界面" };
    o = { "新值" : "1", "数值" : [ "部分客户需要", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "刷新窗口" };
    o = { "新值" : "1", "数值" : [ "默认刷新", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "价格刷新" };
    o = { "新值" : "1", "数值" : [ "默认支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "现金" };
    o = { "新值" : "1", "数值" : [ "自动汇总现金栏", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单未付单子" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单货品列表是否显示品牌信息" };
    o = { "新值" : "1", "数值" : [ "部分客户需要", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "款号是否按门店区分" };
    o = { "新值" : "0", "数值" : [ "默认不区分", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "区分客户" };
    o = { "新值" : "0", "数值" : [ "默认不区分" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "0", "数值" : [ "允许负库存", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "发货数" };
    o = { "新值" : "0", "数值" : [ "默认不填写" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "信用额度" };
    o = { "新值" : "0", "数值" : [ "不启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "积分是否跨门店共享" };
    o = { "新值" : "1", "数值" : [ "共享" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "加工价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单时同时订货" };
    o = { "新值" : "0", "数值" : [ "默认不启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "退货数" };
    o = { "新值" : "0", "数值" : [ "默认不开启", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "单价小数位" };
    o = { "新值" : "3", "数值" : [ "货品单价精确到厘", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "允许折扣大于1" };
    o = { "新值" : "1", "数值" : [ "允许折扣大于1", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否检查折扣" };
    o = { "新值" : "2", "数值" : [ "折扣无限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "折扣后单价的核算模式" };
    o = { "新值" : "0", "数值" : [ "保留精确小数", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "总计是否需要四舍五入" };
    o = { "新值" : "1", "数值" : [ "需要" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "单据是否允许修改客户或厂商" };
    o = { "新值" : "1", "数值" : [ "允许" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否允许修改单据日期" };
    o = { "新值" : "0", "数值" : [ "默认不限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单是否合并重复的款号" };
    o = { "新值" : "0", "数值" : [ "不合并", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单是否门店过滤人员" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "价格模式" };
    o = { "新值" : "0", "数值" : [ "统一的价格体系", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "建款" };
    o = { "新值" : "1", "数值" : [ "省代价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "允许改高" };
    o = { "新值" : "0", "数值" : [ "不检查", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "修改单价" };
    o = { "新值" : "1", "数值" : [ "都可修改单价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "补货退货" };
    o = { "新值" : "0", "数值" : [ "不验证", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单补货退货时验证时,是否允许继续输入" };
    o = { "新值" : "1", "数值" : [ "可以继续输入", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "未拿货款号做退货" };
    o = { "新值" : "0", "数值" : [ "不提醒", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "自动生成款号" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "打印后不允许修改" };
    o = { "新值" : "0", "数值" : [ "不限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "新增界面格式" };
    o = { "新值" : "0", "数值" : [ "老模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "采购入库模式" };
    o = { "新值" : "2", "数值" : [ "默认复杂模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "调拨是否启用密码验证" };
    o = { "新值" : "0", "数值" : [ "不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否启用自定义键盘" };
    o = { "新值" : "0", "数值" : [ "不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否启用积分功能" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售单已配货的单子" };
    o = { "新值" : "0", "数值" : [ "不限制" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单价不能低于指定的价格类型" };
    o = { "新值" : "-1", "数值" : [ "不限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "颜色尺码模式下开单" };
    o = { "新值" : "0", "数值" : [ "默认按颜色尺码提醒", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // qo = { "备注" : "跨门店核销" };
    // o = { "新值" : "0", "数值" : [ "默认不允许" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单界面，保存后显示是否打印确认窗口" };
    o = { "新值" : "1", "数值" : [ "默认显示", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    qo = { "备注" : "童装模式是否批发零售分开(按组按件分开)" };
    o = { "新值" : "1", "数值" : [ "默认分开", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    return ret;
}
function testCs170047() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x001", "数量" : [ 5, 6 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapButton(window, "未付");
    delay();

    var totalMoney = getTextFieldValue(window, 3);

    var ret = isAnd(isEqual("", getTextFieldValue(window, 2)), isEqual("-4840",
            getTextFieldValue(window, 14)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    ret = ret && isEqual(totalMoney, -qr.data[0]["未结"]);

    return ret;
}
function testCs170247() {
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, r1);
    var g2 = new TField("店员", TF_AC, 2, "000,", -1, 0);
    var g4 = new TField("地址", TF, 4, r);
    var fields = [ g0, g1, g2, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    // tapFirstText();
    var qr = getQR();
    var a = qr.data[0]["名称"];
    var a1 = qr.data[0]["手机"];
    var a2 = qr.data[0]["操作人"];
    var a3 = qr.data[0]["地址"];
    var ret = isAnd(isEqual(r, a), isEqual(r1, a1), isIn(a2, "总经理"), isEqual(r,
            a3));

    tapButton(window, RETURN);

    tapMenu("销售开单", "开  单+");
    var json = { "店员" : "000", "明细" : [ { "货品" : "x001", "数量" : [ 10, 20 ] } ],
        "备注" : "aaa888" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var b = getTextFieldValue(getScrollView(-1), 4);
    var b1 = getTextFieldValue(getScrollView(-1), 11);
    var ret1 = isAnd(isEqual("490", b), isEqual("490", b1));
    tapReturn();

    tapMenu("货品管理", "货品查询");
    var qKeys = { "款号名称" : "x001" };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);
    var qr = getQR();
    var actual = qr.data[0]["零批价"];

    var ret2 = isAnd(isEqual(b, actual), isEqual(b, actual));

    return ret && ret1 && ret2;
}
function testCs170248() {
    var i, v;
    var p = "进货价 零批价 打包价 大客户价 Vip价格";

    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, r1);
    var g2 = new TField("店员", TF_AC, 2, "000,", -1, 0);
    var g3 = new TField("适用价格", BTN_SC, 0, "零批价", "", -1);
    var g4 = new TField("地址", TF, 4, r);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    var qr = getQR();

    var a = qr.data[0]["名称"];
    var a1 = qr.data[0]["手机"];
    var a2 = qr.data[0]["操作人"];
    var a3 = qr.data[0]["地址"];
    var ret = isAnd(isEqual(r, a), isEqual(r1, a1), isIn(a2, "总经理"), isEqual(r,
            a3));

    tapNaviRightButton();

    tapMenu("销售开单", "开  单+");
    var json = { "店员" : "000", "明细" : [ { "货品" : "x003", "数量" : [ 20, 50 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var b = getTextFieldValue(getScrollView(-1), 4);
    var b1 = getTextFieldValue(getScrollView(-1), 11);
    var ret1 = isAnd(isEqual("390", b), isEqual("390", b1));
    tapReturn();

    tapMenu("货品管理", "货品查询");
    var qKeys = { "款号名称" : "x003" };
    var qFields = queryGoodsFields(qKeys);
    query(qFields);
    var qr = getQR();
    var actual = qr.data[0]["零批价"];
    query();

    var ret2 = isAnd(isEqual(b, actual), isEqual(b, actual));

    return ret && ret1 && ret2;
}
function testCs170046() {
    // 有欠款的客户
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh1" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "x003", "数量" : [ 2, 5 ] } ], "现金" : "0" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var keys = { "客户" : r };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    var k0 = getTextFieldValue(window, 1);

    var texts = getStaticTexts(window);
    // debugElementTree(window);
    var index = getArrayIndexIn(texts, "欠款");
    var value = getStaticTextValue(window, index);

    var ret = isAnd(isEqual("欠款", value), isEqual("2730", k0));

    // 有余款的客户
    tapMenu("销售开单", "开 单+");
    tapButton(window, "新增+");
    var r = "anewkh2" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "x003", "数量" : [ 2, 5 ] } ], "现金" : "5000" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开 单+");
    var keys1 = { "客户" : r };
    var fields1 = editSalesBillFields(keys1);
    setTFieldsValue(window, fields1);
    var k1 = getTextFieldValue(window, 1);

    texts = getStaticTexts(window);
    index = getArrayIndexIn(texts, "余款");
    var value1 = getStaticTextValue(window, index);

    var ret1 = isAnd(isEqual("余款", value1), isEqual("2270", k1));

    // 无欠款无余款
    tapMenu("销售开单", "开 单+");
    tapButton(window, "新增+");
    var r = "anewkh3" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    // tapMenu("销售开单", "开 单+");
    var json = { "明细" : [ { "货品" : "x003", "数量" : [ 2, 5 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开 单+");
    var keys2 = { "客户" : r };
    var fields2 = editSalesBillFields(keys2);
    setTFieldsValue(window, fields2);

    texts = getStaticTexts(window);
    index = getArrayIndexIn(texts, "余款");
    var value2 = getStaticTextValue(window, index);

    var ret2 = isAnd(isEqual("余款", value2), isEqual("0", getTextFieldValue(
            window, 1)));

    logDebug("value=" + value + "value1=" + value1 + "value2=" + value2);
    return ret && ret1 && ret2;
}
function testCs170048() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 2, 3, 4 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);
    var totalMoney = getTextFieldValue(window, 3);
    var ret = isEqual(getTextFieldValue(window, 2),
            getTextFieldValue(window, 3));

    target.frontMostApp().mainWindow().staticTexts()["刷卡"].tap();

    ret = ret && isEqual(totalMoney, getTextFieldValue(window, 7));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var a = qr.data[0]["刷卡"];
    ret = ret && isEqual(totalMoney, qr.data[0]["刷卡"]);

    logDebug("ret=" + ret);
    return ret;
}
function testCs170049() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 2, 3, 4 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var totalMoney = getTextFieldValue(window, 3);
    var ret = isEqual(getTextFieldValue(window, 2),
            getTextFieldValue(window, 3));

    target.frontMostApp().mainWindow().staticTexts()["汇款"].tap();

    ret = ret && isEqual(totalMoney, getTextFieldValue(window, 13));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var a = qr.data[0]["汇款"];
    ret = ret && isEqual(totalMoney, qr.data[0]["汇款"]);

    logDebug("ret=" + ret);
    return ret;
}
function testCs170050() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "x001", "数量" : [ 5, 3 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var totalMoney = getTextFieldValue(window, 2);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var a = qr.data[0]["现金"];
    var ret = isAnd(isEqual(totalMoney, qr.data[0]["现金"]), isEqual("0",
            qr.data[0]["刷卡"]), isEqual("0", qr.data[0]["汇款"]));

    query();
    tapFirstText();

    var json1 = { "明细" : [ { "货品" : "x003", "数量" : [ 1, 2 ] } ] };
    editSalesBillDetColorSize(json1);

    var totalMoney1 = getTextFieldValue(window, 2);
    ret = ret
            && isEqual(add(getTextFieldValue(getScrollView(-1), 19),
                    getTextFieldValue(getScrollView(-1), 26)), sub(totalMoney1,
                    totalMoney));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var a = qr.data[0]["现金"];
    ret = ret
            && isAnd(isEqual(totalMoney1, qr.data[0]["现金"]), isEqual("0",
                    qr.data[0]["刷卡"]), isEqual("0", qr.data[0]["汇款"]));

    logDebug("ret=" + ret);
    return ret;
}
function testCs170051() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1",
        "明细" : [ { "货品" : "x003", "数量" : [ 2, 3, 4, 5 ] } ], "现金" : "900",
        "刷卡" : [ 500, "交" ], "汇款" : [ 100, "建" ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();

    var qr = getQR();
    var xj = qr.data[0]["现金"];
    var sk = qr.data[0]["刷卡"];
    var hk = qr.data[0]["汇款"];

    var ret = isAnd(isEqual("900", xj), isEqual("500", sk), isEqual("100", hk));

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var k1 = getTextFieldValue(window, 2);
    json = { "明细" : [ { "货品" : "x003", "数量" : [ 2, 3, 4, 5 ] },
            { "货品" : "x001", "数量" : [ 2, 3, 4, 5 ] } ] };
    editSalesBillDetColorSize(json);

    var ret1 = isAnd(isEqual("17780", getTextFieldValue(window, 2)), isEqual(
            "0", getTextFieldValue(window, 7)), isEqual("0", getTextFieldValue(
            window, 13)));

    tapButtonAndAlert(SAVE, OK);
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    ret = ret
            && isAnd(isEqual("17780", qr.data[0]["现金"]), isEqual("0",
                    qr.data[0]["刷卡"]), isEqual("0", qr.data[0]["汇款"]));

    return ret && ret1;
}
function testCs170054_1() {
    // 核销（客户余款）
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "x003", "数量" : [ 1, 2 ] } ], "现金" : "1600" };
    editSalesBillColorSize(json);

    // 总计金额大于抵扣金额
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 5 ],
        "明细" : [ { "货品" : "x001", "数量" : [ 2, 3, 2, 3, 5 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var totalMoney = getTextFieldValue(window, 3);
    var dikou = getTextFieldValue(window, 6);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "余款");
    var index1 = getArrayIndexIn(texts, "抵扣");
    var value = getStaticTextValue(window, index);
    var value1 = getStaticTextValue(window, index1);

    var ret = isAnd(isEqual("余款", value), isEqual("抵扣", value1), isEqual("430",
            getTextFieldValue(window, 1)), isEqual("430", getTextFieldValue(
            window, 6)), isEqual(getTextFieldValue(window, 2), sub(
            getTextFieldValue(window, 12), getTextFieldValue(window, 6))));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret1 = isAnd(isEqual(add(totalMoney, dikou), qr.data[0]["金额"]),
            isEqual(totalMoney, qr.data[0]["现金"]), isEqual(-dikou,
                    qr.data[0]["还款/抵扣"]));

    return ret && ret1;
}
function testCs170054_2() {
    // 核销（客户余款）
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "x001", "数量" : [ 1, 1 ] } ], "现金" : "6000" };
    editSalesBillColorSize(json);

    // 总计金额小于抵扣金额
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 5 ],
        "明细" : [ { "货品" : "x003", "数量" : [ 0, 1, 2, 1 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var k1 = getTextFieldValue(window, 1);
    var k2 = getTextFieldValue(window, 6);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "余款");
    var index1 = getArrayIndexIn(texts, "抵扣");
    var value = getStaticTextValue(window, index);
    var value1 = getStaticTextValue(window, index1);

    var ret = isAnd(isEqual("余款", value), isEqual("抵扣", value1), isEqual(
            "5020", k1), isEqual("5020", k2), isEqual("", getTextFieldValue(
            window, 2)));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var qr = getQR();
    var ret1 = isAnd(isEqual(qr.data[0]["金额"], -qr.data[0]["还款/抵扣"]), isEqual(
            "0", qr.data[0]["现金"]));

    return ret && ret1;
}
function testCs170055() {
    // 核销（客户欠款）
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "x001", "数量" : [ 5, 4, 8, 8, 10 ] } ],
        "现金" : "0" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 5 ], "特殊货品" : { "抹零" : 100 } };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var qr = getQR();
    var ret = isEqual(-100, qr.data[0]["金额"])
            && isEqual("17050", qr.data[0]["现金"]);

    return ret;
}
function testCs170057() {
    tapMenu("销售开单", "开  单+");
    var keys = { "客户" : "lx" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o = { "特殊货品" : { "抹零" : 9, "打包费" : 10 } };
    editSalesBillSpecial(o);
    tapButton(window, "核销");
    tapNaviLeftButton();

    var a = getStaticTextValue(getScrollView(-1, 0), 0);
    tapNaviLeftButton();
    if (a = "下级客户1 其他店总欠: 0.0") {
        var ret = true;
    }

    var json = { "明细" : [ { "货品" : "x003", "数量" : [ 2, 3, 4, 5 ] },
            { "货品" : "x001", "数量" : [ 2, 3, 4, 5 ] } ] };
    editSalesBillDetColorSize(json);
    tapButton(window, "核销");
    tapNaviLeftButton();

    var b = getStaticTextValue(getScrollView(-1, 0), 0);
    tapNaviLeftButton();
    if (b = "下级客户1 其他店总欠: 0.0") {
        var ret1 = true;
    }

    tapMenu("销售开单", "更多.", "查 询");
    var g0 = new TField("款号名称＊", TF, 0, "x001");
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapButton(window, "核销");
    tapNaviLeftButton();
    var c = getStaticTextValue(getScrollView(-1, 0), 0);
    tapNaviLeftButton();
    if (c = "下级客户1 其他店总欠: 0.0") {
        var ret2 = true;
    }

    tapMenu("销售开单", "更多.", "查补货");
    tapButton(window, "核销");
    tapNaviLeftButton();
    var d = getStaticTextValue(getScrollView(-1, 0), 0);
    tapNaviLeftButton();
    if (d = "下级客户1 其他店总欠: 0.0") {
        var ret3 = true;
    }

    tapMenu("销售开单", "更多.", "查看修改日志");
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapButton(window, "核销");
    tapNaviLeftButton();
    var e = getStaticTextValue(getScrollView(-1, 0), 0);
    tapNaviLeftButton();
    if (e = "下级客户1 其他店总欠: 0.0") {
        var ret4 = true;
    }

    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapButton(window, "核销");
    tapNaviLeftButton();
    var f = getStaticTextValue(getScrollView(-1, 0), 0);
    tapNaviLeftButton();
    var bt5 = app.navigationBar().leftButton();
    if (bt5 = isUIAButton) {
        var ret5 = true;
    }

    tapButton(window, CLEAR);
    tapButton(window, "核销");
    tapNaviLeftButton();
    var h = getStaticTextValue(getScrollView(-1, 0), 0);
    tapNaviLeftButton();
    var bt6 = app.navigationBar().leftButton();
    if (bt6 = isUIAButton) {
        var ret6 = true;
    }

    var keys = { "店员" : "000" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    tapNaviLeftButton();
    var i = getStaticTextValue(getScrollView(-1, 0), 0);
    tapNaviLeftButton();
    var bt7 = app.navigationBar().leftButton();
    if (bt7 = isUIAButton) {
        var ret7 = true;
    }

    tapButton(window, CLEAR);
    tapButton(window, "核销");
    tapNaviLeftButton();
    var j = getStaticTextValue(getScrollView(-1, 0), 0);
    tapNaviLeftButton();
    var bt8 = app.navigationBar().leftButton();
    if (bt8 = isUIAButton) {
        var ret8 = true;
    }

    var f21 = new TField("货品", TF_AC, 21, "x001", -1, 0);
    var fields = [ f21 ];
    setTFieldsValue(getScrollView(-1), fields);
    tapButton(window, "核销");
    tapNaviLeftButton();
    var bt9 = app.navigationBar().leftButton();
    if (bt9 = isUIAButton) {
        var ret9 = true;
    }
    tapReturn();

    logDebug("ret＝" + ret + "ret1＝" + ret1 + "ret2＝" + ret2 + "ret3＝" + ret3
            + "ret4＝" + ret4 + "ret5＝" + ret5 + "ret6＝" + ret6 + "ret7＝" + ret7
            + "ret8＝" + ret8 + "ret9＝" + ret9);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7 && ret8
            && ret9;
}
function testCs170058() {
    // 有余款单客户
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "x001", "数量" : [ 5, 5 ] } ],
        "现金" : "1000000" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 5 ],
        "明细" : [ { "货品" : "nb001", "数量" : [ 8, 8, 8 ] } ], "现金" : "0" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : r };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();

    tapButton(window, "核销");
    tapNaviRightButton();
    // 本单已核销

    var qr = getQResult2(getScrollView(-1, 0), "日期", "金额");
    var a1 = qr.data[0]["日期"];
    var a3 = qr.data[0]["店员"];
    var a4 = qr.data[0]["数量"];
    var a5 = qr.data[0]["金额"];

    tapNaviLeftButton();
    tapNaviLeftButton();
    tapReturn();

    var ret1 = isEqual(getToday("yy"), a1);
    var ret2 = isEqual("总经理", a3);
    var ret3 = isEqual("10", a4);
    var ret4 = isEqual("4900", a5);

    return ret1 && ret2 && ret3 && ret4;
}
function testCs170059() {
    // 有欠款单客户
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r,
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 1, 1, 1, 1, 1 ] } ], "现金" : "0" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 3 ],
        "明细" : [ { "货品" : "x003", "数量" : [ 5, 1 ] } ], "现金" : "0" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : r };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();

    tapButton(window, "核销");
    tapButton(app.navigationBar(), "所有已核销");
    // 所有已核销
    var qr = getQR2(getScrollView(-1, 0), "日期", "金额");
    // debugQResult(qr);

    var a1 = qr.data[0]["日期"];
    var a3 = qr.data[0]["店员"];
    var a4 = qr.data[0]["数量"];
    var a5 = qr.data[0]["金额"];

    tapNaviLeftButton();
    tapNaviLeftButton();
    tapReturn();

    var ret = isAnd(isEqual(getToday("yy"), a1), isEqual("总经理", a3), isEqual(
            "6", a4), isEqual("2340", a5));

    return ret;
}
function testCs170063() {
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "ls", "明细" : [ { "货品" : "x003", "数量" : [5,8,8,8,8,1]
    // } ] };
    // editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();

    var keys = { "客户" : "lx" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    tapButtonAndAlert(SAVE, "刷新价格");
    delay();
    if (isIn(alertMsg, "客户/厂商重新做了选择，是否需要重新刷新明细价格等信息")) {
        var ret = true;
    }
    tapButtonAndAlert("none", OK, true);

    tapButtonAndAlert(SAVE, OK);
    if (isIn(alertMsg, "请仔细核对收款方式和金额,确定保存吗?")) {
        var ret1 = true;
    }
    tapButtonAndAlert("none", OK, true);

    if (isIn(alertMsg, "客户或供应商信息不允许修改")) {
        var ret2 = true;
    }
    tapPrompt();
    tapReturn();

    // logDebug("ret=" + ret);
    return ret && ret1 && ret2;
    logDebug(" ret=" + ret + ", ret1=" + ret1);
    // return ret && ret1;
}
function testCs170065_1() {
    // 核销欠款，不输入款号
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r,
        "明细" : [ { "货品" : "nb001", "数量" : [ 5, 6, 6, 6 ] } ], "未付" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 5 ], "未付" : "yes" };
    saveAndAlertOk();
    tapPrompt();
    delay();

    if (isIn(alertMsg, "空单，无法保存")) {
        var ret = true;
    }

    tapButtonAndAlert(RETURN, OK);

    logDebug("ret=" + ret);
    return ret;
}
function testCs170065_2() {
    // 核销欠款，输入款号
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb001", "数量" : [ 5, 5, 5 ] } ],
        "未付" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb001", "数量" : [ 1, 1, 1 ] } ],
        "核销" : [ 5 ], "未付" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : r };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();
    var ret = isAnd(isIn(getTextFieldValue(getScrollView(-1), 0), "Nb001"),
            isEqual("1", getTextFieldValue(getScrollView(-1), 3)), isIn(
                    getTextFieldValue(getScrollView(-1), 7), "Nb001"), isEqual(
                    "1", getTextFieldValue(getScrollView(-1), 10)), isIn(
                    getTextFieldValue(getScrollView(), 14), "Nb001"), isEqual(
                    "1", getTextFieldValue(getScrollView(), 17)));

    tapReturn();

    logDebug("ret=" + ret);
    return ret;
}
function testCs170065_3() {
    // 核销余款，余款小于货品金额
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "nb003", "数量" : [ 3, 5, 3 ] } ],
        "现金" : "6000" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r,
        "明细" : [ { "货品" : "nb003", "数量" : [ 8, 8, 1, 5 ] } ], "未付" : "yes",
        "核销" : [ 5 ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("9460", qr.data[0]["金额"]), isEqual("0",
            qr.data[0]["现金"]), isEqual("-8190", qr.data[0]["未结"]));

    return ret;
}
function testCs170065_4() {
    // 核销余款，余款大于货品金额
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb003", "数量" : [ 5, 3, 4 ] } ],
        "现金" : "4000" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb003", "数量" : [ 5, 1 ] } ],
        "未付" : "yes", "核销" : [ 5 ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("2580", qr.data[0]["金额"]), isEqual("0",
            qr.data[0]["现金"]), isEqual("-3740", qr.data[0]["未结"]));

    return ret;
}
function testCs170065_5() {
    // 核销欠款，输入抹零，点未付，保存
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb001", "数量" : [ 5, 2, 1 ] } ],
        "未付" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 5 ], "特殊货品" : { "抹零" : 100 }, "未付" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("-100", qr.data[0]["金额"]), isEqual(0,
            qr.data[0]["现金"]), isEqual("-3020", qr.data[0]["未结"]));

    return ret;
}
function testCs170070() {
    // 设置开单模式为9-快速标记标记代收的开单模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "9", "数值" : [ "快速标记代收的开单模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x001", "数量" : [ 5, 1, 2 ] } ],
        "未付" : "yes", "代收" : "是" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh1" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isAnd(isEqual(3920, qr.data[0]["金额"]), isEqual(-3920,
            qr.data[0]["未结"]), isEqual("是", qr.data[0]["代收"]));

    return ret && ret1;
}
function testCs170071() {
    // 设置开单模式为9-快速标记标记代收的开单模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "9", "数值" : [ "快速标记代收的开单模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x003", "数量" : [ 2, 1, 2 ] } ],
        "未付" : "yes", "代收" : "否" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh1" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isAnd(isEqual("1950", qr.data[0]["金额"]), isEqual("-1950",
            qr.data[0]["未结"]), isEqual("否", qr.data[0]["代收"]));

    return ret && ret1;
}
function testCs170072() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x001", "数量" : [ 8, 8 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("单价", TF, 4, "-100");
    var f12 = new TField("单价", TF, 12, "-100");
    var fields = [ f4, f12 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapPrompt();

    // tapButtonAndAlert("none", OK, true);
    var ret1 = false;
    if (isIn(alertMsg, "[第1行] 单价或金额不能为负数")) {
        ret1 = true;
    }
    tapReturn();

    logDebug(", ret1" + ret1);

    return ret1;
}
function testCs170073() {
    // 开启参数 开单保存开启退货数和上次购买数的比对验证
    var qo, o, ret = true;
    qo = { "备注" : "退货数" };
    o = { "新值" : "1", "数值" : [ "1,开启,会减慢开单速度", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "hh", "明细" : [ { "货品" : "x003", "数量" : [ -9 ] } ] };
    editSalesBillColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    if (isIn(alertMsg1, "退货数量高于拿货")) {
        var ret = true;
    }
    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);

    return ret;
}
function testCs170075() {
    var qo, o, ret = true;
    qo = { "备注" : "退货数" };
    o = { "新值" : "1", "数值" : [ "1,开启,会减慢开单速度", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "nb003", "数量" : [ 6, 6, 6 ] },
                { "货品" : "x001", "数量" : [ -5, -5 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();
    var ret = isAnd(isIn(getTextFieldValue(getScrollView(), 0), "Nb003"),
            isEqual("6", getTextFieldValue(getScrollView(), 3)), isIn(
                    getTextFieldValue(getScrollView(), 8), "Nb003"), isEqual(
                    "6", getTextFieldValue(getScrollView(), 11)), isIn(
                    getTextFieldValue(getScrollView(), 16), "Nb003"), isEqual(
                    "6", getTextFieldValue(getScrollView(), 19)), isIn(
                    getTextFieldValue(getScrollView(), 24), "X001"), isEqual(
                    "-5", getTextFieldValue(getScrollView(), 27)), isIn(
                    getTextFieldValue(getScrollView(), 32), "X001"), isEqual(
                    "-5", getTextFieldValue(getScrollView(), 35)));

    tapReturn();
    return ret;
}
function testCs170076() {
    // 设置 单价小数位 精确到元
    var qo, o, ret = true;
    qo = { "备注" : "单价小数位" };
    o = { "新值" : "0", "数值" : [ "货品单价精确到元", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "x003", "数量" : [ 1, 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("单价", TF, 4, "300.188");
    var f12 = new TField("单价", TF, 12, "300.188");
    var fields = [ f4, f12 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    if (isIn(alertMsg, "请仔细核对收款方式和金额,确定保存吗?")) {
        var ret = true;
    }
    tapButtonAndAlert("none", OK, true);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "[第1行] 单价小数位超出了限制")) {
        var ret1 = true;
    }

    tapReturn();
    logDebug(" ret=" + ret + " ret1=" + ret1);
    return ret && ret1;
}
function testCs170083() {
    // 开启参数，开单模式-客户折扣
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "nb001", "数量" : [ 3, 3, 19 ] } ], "onlytest" : "yes",
        "goodsFieldIndex" : -4 };
    editSalesBillColorSize(json);

    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);
    var ret = isAnd(isEqual("7030", k2), isEqual("7030", k3));

    tapReturn();

    return ret;
}
function testCs170084() {
    // 开启参数，开单模式-产品折扣
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "x003", "数量" : [ 2, 3, 4 ] } ],
        "onlytest" : "yes", "goodsFieldIndex" : -4 };
    editSalesBillColorSize(json);

    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);
    var ret = isAnd(isEqual("2808", k2), isEqual("2808", k3));

    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret1 = isAnd(isEqual("2620", qr.data[0]["金额"]), isEqual("2620",
            qr.data[0]["现金"]), isEqual("0", qr.data[0]["未结"]));

    return ret && ret1;
}
function testCs170085() {
    // 设置开单模式为整单折扣模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "7", "数值" : [ "整单折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 4, 8, 11 ] } ],
        "onlytest" : "yes", "goodsFieldIndex" : -3 };
    editSalesBillColorSize(json);

    var f10 = new TField("折扣", TF, 10, "0.588");
    var fields = [ f10 ];
    setTFieldsValue(window, fields);

    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);
    var ret = isAnd(isEqual("6209.28", k2), isEqual("6209.28", k3));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret1 = isAnd(isEqual("6209.28", qr.data[0]["金额"]), isEqual("6209.28",
            qr.data[0]["现金"]), isEqual("0", qr.data[0]["未结"]));

    return ret && ret1;
}
function testCs170087() {
    // 在颜色尺码模式下，设置开单模式为8童装模式并且批发与零售不分开（本地设置），实行按组开单
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "8", "数值" : [ "适用于童装", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "童装模式是否批发零售分开" };
    o = { "新值" : "0", "数值" : [ "0", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x001", "数量" : [ 0, 1 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["数量"];
    var ret = isEqual("1", a);

    logDebug("ret=" + ret);
    return ret;

}
function testCs170090() {
    // 开单模式-代收模式2
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 4, 3, 0, 0, 1 ] } ],
        "代收" : { "物流商" : "yt", "运单号" : "1234" } };
    editSalesBillColorSize(json);

    var money = json["代收"]["代收金额"];
    var ret = isEqual("3330", money);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["代收"];
    var ret1 = isEqual("3330", a);

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function testCs170091_170092() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x001", "数量" : [ 1, 1, 8 ] } ],
        "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a" } };
    editSalesBillColorSize(json);

    var money = json["代收"]["代收金额"];
    var ret = isEqual("4400", money);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    // fields["客户"].p3={"键盘":"简体拼音", "拼音":["li","si"],"汉字":["李","四"]};
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["代收"]
    var ret1 = isEqual("4400", a);
    // logDebug("代收=" +a+"代收金额"+money);
    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;

}
function testCs170093() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapStaticText(window, "代收");
    tapButton(window, "新增");
    var r = "kd" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("电话", TF, 1, r1);
    var g2 = new TField("地址", TF, 2, r);
    var g3 = new TField("账户", TF, 3, r1);
    var fields = [ g0, g1, g2, g3 ];
    setTFieldsValue(getPopOrView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var a = getTextFieldValue(window, -4);
    var ret = isEqual(r, a);

    tapNaviRightButton();
    logDebug("物流商=" + a);

    tapMenu("往来管理", "更多.", "物流商查询");
    var keys = [ "名称" ];
    var fields = queryCustomerLogisticsFields(keys);
    changeTFieldValue(fields["名称"], r);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["名称"];
    var ret1 = isEqual(r, a);

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;

}
function testCs170094() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 6, 9, 8 ] } ],
        "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a" } };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();

    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];
    var ydh = json["代收"]["运单号"];
    var bz = json["代收"]["备注"];

    tapFirstText();

    var ret = isAnd(isEqual("8880", money), isEqual("圆通速递", wls), isEqual(
            "123", ydh), isEqual("a", bz));

    tapReturn();

    return ret;
}
function testCs170095() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "nb001", "数量" : [ 2, 3 ] },
                { "货品" : "nb003", "数量" : [ 5, 6 ] } ], "备注" : "zdbz",
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f6 = new TField("备注", TF, 6, "mxbz");
    var f13 = new TField("备注", TF, 13, "mxbz1");
    var f20 = new TField("备注", TF, 20, "mxbz2");
    var f27 = new TField("备注", TF, 27, "mxbz3");
    var fields = [ f6, f13, f20, f27 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    tapFirstText(getScrollView(), "序号", 20);
    var b1 = getTextFieldValue(window, 10);
    var b6 = getTextFieldValue(getScrollView(), 6);
    var b13 = getTextFieldValue(getScrollView(), 13);
    delay();
    tapButton(window, RETURN);
    var ret = isAnd(isEqual("zdbz", b1), isEqual("mxbz", b6), isEqual("mxbz1",
            b13));

    logDebug("整单备注=" + b1 + "明细备注=" + b6 + "明细备注1=" + b13);
    // logDebug("ret=" + ret);
    return ret;
}
function testCs170096() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x001", "数量" : [ 2, -1 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    var ret = isEqual("(2; -1)", qr.data[0]["备注"]);

    return ret;
}
function testCs170097() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "nb001", "数量" : [ -1, 2 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var ret, ret1, ret2, ret3, ret4, ret5, ret6 = false;
    tap(getTextField(getScrollView(), 6));
    var texts = getStaticTexts(getPopView());
    for (var i = 0; i < texts.length; i++) {
        var v = texts[i].name();
        if (isEqual("退货", v)) {
            ret = true;
        }
        if (isEqual("赠品", v)) {
            ret1 = true;
        }
        if (isEqual("代卖", v)) {
            ret2 = true;
        }
        if (isEqual("次品", v)) {
            ret3 = true;
        }
        if (isEqual("代保管", v)) {
            ret4 = true;
        }
        if (isEqual("换色", v)) {
            ret5 = true;
        }
        if (isEqual("换码", v)) {
            ret6 = true;
        }
    }
    target.frontMostApp().mainWindow().popover().scrollViews()[0].staticTexts()["退货"]
            .tapWithOptions({ tapOffset : { x : 0.23, y : 0.60 } });

    var f13 = new TField("备注", TF, 13, "mxbz1");
    var fields = [ f13 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    var ret7 = isAnd(isEqual("退货", getTextFieldValue(getScrollView(), 6)),
            isEqual("mxbz1", getTextFieldValue(getScrollView(), 13)));

    tapReturn();

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3
            + "ret4=" + ret4 + "ret5=" + ret5 + "ret6=" + ret6 + "ret7=" + ret7);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7;
}
function testCs170101() {
    // 颜色尺码模式下，开启款号合并功能：销售开单是否合并重复的款号
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 2 ] },
                { "货品" : "x001", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var a = getTextFieldValue(getScrollView(), 3);

    var ret = isEqual("2", a);
    delay();

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    logDebug("a=" + a);
    return ret;
}
function testCs170102() {
    // 颜色尺码模式下，开启款号合并功能：销售开单是否合并重复的款号（既拿货又退货）
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 2, 2 ] },
                { "货品" : "x001", "数量" : [ -1, 1 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var a = getTextFieldValue(getScrollView(), 3);

    var ret = isEqual("2", a);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    logDebug("ret=" + ret);
    return ret;
}
function testCs170104() {
    // 上次成交价界面显示备注信息
    // var qo, o, ret = true;
    // qo = { "备注" : "成交价" };
    // o = { "新值" : "1", "数值" : [ "启用", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 3, 4, 5 ] } ], "备注" : "zdbz",
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f6 = new TField("备注", TF, 6, "mxbz");
    var f13 = new TField("备注", TF, 13, "mxbz1");
    var f20 = new TField("备注", TF, 20, "mxbz2");
    var f27 = new TField("备注", TF, 27, "mxbz3");
    var fields = [ f6, f13, f20, f27 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();
    // debugElementTree(window);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x0", "表格行包含" : "特步夹克" } ] };
    editSalesBillCustomer(json);
    editSalesBillDetTapCell(json);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "备注:");
    var text = getStaticTextValue(window, index);

    tapButton(window, "更 多");
    var qr = getQResult2(getScrollView(-1, 0), "门店", "备注");
    var a = qr.data[0]["款号"];
    var b = qr.data[0]["备注"];

    var ret = isAnd(isEqual("X001", a), isEqual("mxbz3", b), isIn("备注: mxbz",
            text));
    tapNaviLeftButton();
    tapNaviLeftButton();
    tapNaviLeftButton();
    tapReturn();

    logDebug("备注=" + text);
    return ret;
}
function testCs170105() {
    // 开启参数 颜色尺码下，开单显示上次单价
    var qo, o, ret = true;
    qo = { "备注" : "上次" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 1, 3 ], "备注" : "mxbz" } ],
        "备注" : "zdbz", "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var r = 1 + getRandomInt(1000);
    var f4 = new TField("单价", TF, 4, r);
    var f11 = new TField("单价", TF, 11, r);
    var f18 = new TField("单价", TF, 18, r);
    var fields = [ f4, f11, f18 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x00", "表格行包含" : "特步夹克" } ] };
    editSalesBillCustomer(json);
    editSalesBillDetTapCell(json);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "备注:");
    var tip = getStaticTextValue(window, index);
    var num = getStaticTextValue(window, index - 1);
    var date = getStaticTextValue(window, index - 2);

    tapButton(window, "更 多");
    var qr = getQResult2(getScrollView(-1, 0), "批次", "备注");
    var a = qr.data[0]["日期"];
    var b = qr.data[0]["数量"];
    var c = qr.data[0]["单价"];
    var z = qr.data[0]["折扣"];

    var ret = isAnd(isEqual(getToday(""), a), isEqual("3", b), isEqual(r, c),
            isEqual("1", z), isAqualOptime("日期: " + getOpTime(), date, 1),
            isEqual("数量: 1 价格: " + r + " 折扣: 1", num));
    tapNaviLeftButton();
    tapNaviLeftButton();
    tapNaviLeftButton();
    tapReturn();

    logDebug("num=" + num + "date=" + date);
    return ret;
}
function testCs170107() {
    // 开启参数 是否启用上次成交价作为本次开单单价
    var qo, o, ret = true;
    qo = { "备注" : "上次" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var qo, o, ret = true;
    qo = { "备注" : "成交价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 4, 5 ], "备注" : "mxbz" } ],
        "备注" : "zdbz", "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("单价", TF, 4, "317");
    var f11 = new TField("单价", TF, 11, "317");
    var f18 = new TField("单价", TF, 18, "317");
    var fields = [ f4, f11, f18 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButtonAndAlert(RETURN, OK);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x00", "表格行包含" : "特步登山服" } ] };
    editSalesBillCustomer(json);
    editSalesBillDetTapCell(json);

    tapButton(window, "更 多");
    var qr = getQResult2(getScrollView(-1, 0), "批次", "备注");
    var c = qr.data[0]["单价"];

    var ret = isEqual("317", c);
    tapNaviLeftButton();
    tapNaviLeftButton();
    tapNaviLeftButton();
    delay();
    tapButtonAndAlert(RETURN, OK);
    // delay();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "x003", "数量" : [ 2, 2, 4 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);
    var c1 = getTextFieldValue(getScrollView(), 4);
    var ret1 = isEqual("317", c1);
    delay();
    tapReturn();

    var qo, o, ret = true;
    qo = { "备注" : "上次" };
    o = { "新值" : "0", "数值" : [ "不显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var qo, o, ret = true;
    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    query();

    logDebug("c=" + c + "c1=" + c1);
    return ret && ret1;
}

function testCs170116() {
    // 设置是否允许负库存为 “检查，必须先入库再出库”
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "1", "数值" : [ "必须先入库再出库", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkhao" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : "货品" + r, "品牌" : "0309pp", "颜色" : "0,1,2,3",
        "尺码" : "6,7,8,9", "吊牌价" : "400", "进货价" : "100", "零批价" : "390",
        "打包价" : "370", "大客户价" : "350", "Vip价格" : "190", };
    addGoods(keys, "yes");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : r, "数量" : [ 2, 3, 4, 5, 6, 7 ] } ] };
    editSalesBillColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = isAnd(isIn(alertMsg1, "操作失败"), isIn(alertMsg1, "库存不足"));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function testCs170117() {
    // 设置是否允许负库存为 “不检查，允许负库存”
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "0", "数值" : [ "允许负库存", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    var r = "khao" + getTimestamp(8);

    var keys = { "款号" : r, "名称" : "货品" + r, "品牌" : "0309pp", "颜色" : "0,1,2,3",
        "尺码" : "6,7,8,9", "吊牌价" : "400", "进货价" : "100", "零批价" : "390",
        "打包价" : "370", "大客户价" : "350", "Vip价格" : "190", };
    addGoods(keys, "yes");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : [ 2, 9 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("货品管理", "款号库存");
    var keys = [ "款号" ];
    var fields = queryGoodsCodeStockFields(keys);
    changeTFieldValue(fields["款号"], r);
    query(fields);
    var qr = getQR();
    var ret = isEqual("-11", qr.data[0]["库存"]);

    tapMenu("货品管理", "当前库存");
    query();
    var keys = { "款号" : r, "门店" : "常青店", "颜色" : "花色", "尺码" : "X1" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];
    var ret1 = isEqual("-2", qr.data[0]["库存"]);

    return ret && ret1;
}
function testCs170118() {
    // 设置是否允许负库存为 “检查，必须先入库再出库”
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "1", "数值" : [ "必须先入库再出库", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = { "款号" : r, "名称" : "货品" + r, "品牌" : "0309pp", "颜色" : "0,1,2,3",
        "尺码" : "6,7,8,9", "吊牌价" : "400", "进货价" : "100", "零批价" : "390",
        "打包价" : "370", "大客户价" : "350", "Vip价格" : "190", };
    addGoods(keys, "yes");

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : r, "数量" : [ 2, 2, 3, 4 ] } ] };
    editSalesBillColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = isAnd(isIn(alertMsg1, "操作失败"), isIn(alertMsg1, "库存不足"));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function testCs170119() {
    // 常青店 先开启异地仓库，再设置异地发货开单模式
    // var qo, o, ret = true;
    // qo = { "备注" : "支持异地仓库" };
    // o = { "新值" : "1", "数值" : [ "启用" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));
    //
    // qo = { "备注" : "开单模式" };
    // o = { "新值" : "15", "数值" : [ "异地发货开单模式", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));
    //
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "ls",
    // "明细" : [ { "货品" : "x003", "数量" : [ 1, 3, 6, 9 ] } ], "发货" : "仓库店" };
    // editSalesBillColorSize(json);

    // 仓库店配货员107登陆
    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["开单门店"];
    var b = qr.data[0]["发货门店"];
    var c = qr.data[0]["日期"];
    var d = qr.data[0]["数量"];
    var ret = isAnd(isEqual("常青店", a), isEqual("仓库店", b), isEqual(getToday(""),
            c), isEqual("19", d));

    // qo = { "备注" : "开单模式" };
    // o = { "新值" : "2", "数值" : [ "代收", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));
    // query();

    logDebug("ret=" + ret);
    return ret;

}
function testCs170125() {
    // 开启参数 销售开单的同时订货功能，必需退出重新登陆
    var qo, o, ret = true;
    qo = { "备注" : "销售开单时同时订货" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 3, 4, 5, 8, 11 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("订货数", TF, 4, "2");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按订货开单");
    var keys = { "客户" : "ls" };
    var fields1 = salesBillOrderFields(keys);
    query(fields1);
    var qr = getQR();
    var a = qr.data[0]["订货数"];
    var ret = false;
    if (a == "2") {
        ret = true;
    }

    qo = { "备注" : "销售开单时同时订货" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret);
    return ret;
}
function testCs170128() {
    // 设置参数 销售开单同时订货为不启用
    // var qo, o, ret = true;
    // qo = { "备注" : "销售开单时同时订货" };
    // o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));
    //    
    // tapRefresh();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 2, 6, 7, 4, 8 ] } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 10 }, "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);
    var ret = false;
    if (k2 == "9991" && k3 == "9991") {
        ret = true;
    }

    saveAndAlertOk();
    tapReturn();

    // logDebug("k2=" + k2+"k3=" + k3);
    logDebug("ret=" + ret);
    return ret;
}
function testCs170129() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "0", "数值" : [ "", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkhao" + getTimestamp(3);
    var r1 = "1" + getTimestamp(3);
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g3 = new TField("零批价", TF, 7, r1);
    var g4 = new TField("打包价", TF, 8, r1);
    var fields = [ g0, g1, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var f4 = new TField("数量", TF, 10, "2");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    var ret = isAnd(isIn(getTextFieldValue(getScrollView(), 0), r), isEqual(
            "均色", getTextFieldValue(getScrollView(), 1)), isEqual("均码",
            getTextFieldValue(getScrollView(), 2)));
    tapReturn();

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    var qr = getQR();
    var ret1 = isAnd(isEqual(r, qr.data[0]["款号"]), isEqual(r, qr.data[0]["名称"]));

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function testCs170131() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var r = "anewkhao" + getTimestamp(3);
    var c = "1" + getTimestamp(3);
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g3 = new TField("零批价", TF, 7, c);
    var g4 = new TField("打包价", TF, 8, c);
    var fields = [ g0, g1, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    delay();

    var f10 = new TField("数量", TF, 10, "2");
    var fields = [ f10 ];
    setTFieldsValue(getScrollView(), fields);

    tapButton(window, "新增货品");
    var r1 = "anewkhao1" + getTimestamp(3);
    var c1 = "2" + getTimestamp(3);
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r1);
    var g1 = new TField("名称", TF, 1, r1);
    var g3 = new TField("零批价", TF, 3, c1);
    var g4 = new TField("打包价", TF, 4, c1);
    var fields = [ g0, g1, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    delay();

    var f17 = new TField("数量", TF, 17, "3");
    var fields = [ f17 ];
    setTFieldsValue(getScrollView(), fields);

    var k7 = getTextFieldValue(getScrollView(), 7);
    var k14 = getTextFieldValue(getScrollView(), 14);
    var ret = isAnd(isIn(k7, r), isIn(k14, r1));

    saveAndAlertOk();
    tapPrompt();

    tapReturn();

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    var qr = getQR();
    var a = qr.data[0]["款号"];
    var b = qr.data[0]["名称"];

    var ret1 = isAnd(isEqual(r, a), isEqual(r, b));

    tapMenu("货品管理", "货品查询");
    var qKeys1 = [ "款号名称" ];
    var qFields1 = queryGoodsFields(qKeys1);
    changeTFieldValue(qFields1["款号名称"], r1);
    query(qFields1);
    var qr = getQR();
    var a1 = qr.data[0]["款号"];
    var b1 = qr.data[0]["名称"];

    var ret2 = isAnd(isEqual(r1, a1), isEqual(r1, b1));

    logDebug("款号=" + a + "名称=" + b);
    // logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2;
}
function testCs170132() {
    tapMenu("销售开单", "开  单+");
    // var json = { "客户" : "ls", "店员" : "000", "onlytest" : "yes" };
    // editSalesBillColorSize(json);

    var r = "anewkhao" + getTimestamp(3);
    var c = "1" + getTimestamp(3);
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g3 = new TField("零批价", TF, 3, c);
    var g4 = new TField("打包价", TF, 4, c);
    var fields = [ g0, g1, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    delay();

    var f11 = new TField("数量", TF, 10, "2");
    var fields = [ f11 ];
    setTFieldsValue(getScrollView(), fields);

    var json = { "明细" : [ { "货品" : "x003", "数量" : [ 2, 3 ] } ] };
    editSalesBillDetColorSize(json);

    // var f24 = new TField("货品", TF_AC, 24, "nb001", -1, 0);
    // var f27 = new TField("数量", TF, 27, "4");
    // var fields = [ f24, f27 ];
    // setTFieldsValue(getScrollView(), fields);

    tapButtonAndAlert(SAVE, OK);
    tapReturn();

    // tapMenu("销售开单", "按批次查");
    // query();
    // tapFirstText();
    //
    // var ret = isAnd(isIn(getTextFieldValue(getScrollView(), 0), r), isEqual(
    // "均色", getTextFieldValue(getScrollView(), 1)), isEqual("均码",
    // getTextFieldValue(getScrollView(), 2)));
    // tapReturn();
    //
    // tapMenu("货品管理", "货品查询");
    // var qKeys = [ "款号名称" ];
    // var qFields = queryGoodsFields(qKeys);
    // changeTFieldValue(qFields["款号名称"], r);
    // query(qFields);
    // var qr = getQR();
    // var a = qr.data[0]["款号"];
    // var b = qr.data[0]["名称"];
    //
    // var ret1 = isAnd(isEqual(r, a), isEqual(r, b));
    //
    // return ret && ret1;
}
function testCs170133() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 2 ] },
                { "货品" : "x003", "数量" : [ 1, 3 ] },
                { "货品" : "nb001", "数量" : [ 1, 4 ] },
                { "货品" : "nb003", "数量" : [ 1, 5 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    tapButton(getScrollView(), 3);

    var json = { "明细" : [ { "货品" : "x003", "数量" : [ 2, 3, 4, 5 ] } ] };
    editSalesBillDetColorSize(json);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "保存成功"));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function testCs170136() {
    // 设置销售开单允许修改和作废的天数N,不能用总经理账号测试，使用店长货开单员登陆，常青店长004登陆，3天
    // var qo, o, ret = true;
    // qo = { "备注" : "销售开单允许作废和修改天数" };
    // o = { "新值" : "1", "数值" : [ "启用", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 4, 5, 6, 7 ] } ] };
    json["日期"] = getDay(-3);
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var f0 = new TField("客户", TF_AC, 0, "ls", -1, 0);
    var f2 = new TField("日期从", TF_DT, 2, getDay(-3));
    var f3 = new TField("到", TF_DT, 3, getDay(-3));
    var fields = [ f0, f2, f3 ];
    setTFieldsValue(window, fields);
    query(fields);
    tapFirstText();

    tapButtonAndAlert("作 废", OK);

    saveAndAlertOk();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "操作失败：只能作废或修改 3 天内的单据"));

    tapReturn();

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function testCs170137() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 3, 5, 7, 9 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    tapButtonAndAlert("作 废", OK);

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "作废");
    query(fields1);
    var qr = getQR();
    var a = qr.data[0]["配货"];
    var b = qr.data[0]["日期"];

    var ret = isAnd(isEqual("否", a), isEqual(getToday(""), b));

    logDebug("ret" + ret);

    return ret;
}
function testCs170138() {
    var qo, o, ret = true;
    qo = { "备注" : "待作废" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "nb001", "数量" : [ 1, 1, 1, 2, 2, ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    tapButtonAndAlert("待作废", OK);
    tapButtonAndAlert(OK);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "作废成功"));
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "待作废");
    query(fields1);
    var qr = getQR();
    var a = qr.data[0]["配货"];
    var b = qr.data[0]["日期"];

    var ret1 = isAnd(isEqual("否", a), isEqual(getToday(""), b));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret + " ret1" + ret1);
    return ret && ret1;
}
function testCs170139() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "nb001", "数量" : [ 1, 1, 2, 2, 3, 3, 4, 5 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    tapButtonAndAlert("复 制", OK);

    tapMenu("销售开单", "开  单+");
    tapButtonAndAlert("粘 贴", OK);

    var k0 = getTextFieldValue(getScrollView(), 0);
    var k1 = getTextFieldValue(getScrollView(), 1);
    var k2 = getTextFieldValue(getScrollView(), 2);
    var k3 = getTextFieldValue(getScrollView(), 3);

    var f0 = getTextFieldValue(window, 0);
    var f5 = getTextFieldValue(window, 5);

    delay();
    tapButtonAndAlert(RETURN, OK);

    var ret = isAnd(isIn(k0, "Nb001"), isEqual("黑色", k1), isEqual("X1", k2),
            isEqual("1", k3), isEqual("李四", f0), isIn(f5, "总经理"));

    logDebug("ret" + ret);

    return ret;
}
function testCs170163() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "nb003", "数量" : [ 10, 10, 10, 20 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "更多.", "收 款");
    tapButtonAndAlert(OK);
    delay();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "收款不能在新增模式下操作，只能在修改模式中操作"));
    delay(2);
    tapButtonAndAlert(RETURN, OK);

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;

}
function testCs170164() {
    // 一天一般只能收款一次
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "nb001", "数量" : [ 1, 2, 5, 6 ] } ] };
    json["日期"] = getDay(-10);
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "待作废");
    query(fields1);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    tapMenu("销售开单", "更多.", "收 款");
    tapButtonAndAlert(OK);
    delay(3);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "收款成功"));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function testCs170166() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 2, 3, 4, 5, 6, 6 ] } ] };
    json["日期"] = getDay(-1);
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    tapButtonAndAlert("打 印", "打印(客户用)");
    delay();

    tapFirstText();
    tapMenu("销售开单", "更多.", "查看修改日志");
    var texts = getStaticTexts(getPopOrView());
    debugElementTree(getPopOrView());
    var index = getArrayIndexIn(texts, "最后打印时间");
    var date = getStaticTextValue(getPopOrView(), index + 1);

    var ret = isEqual(getOpTime(), date);

    tapButton(getPop(), OK);
    tapReturn();

    // logDebug("date==" + date);
    logDebug(" ret" + ret);
    return ret;
}
function testCs170167() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 3, 4, 3, 3, 3, 8 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapButton(window, "未付");
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json1 = { "客户" : "ls", "核销" : [ 5 ] };
    editSalesBillNoColorSize(json1);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var pc = qr.data[0]["批次"];

    var f7 = new TField("批次从", TF, 7, pc - 1);
    var f8 = new TField("到", TF, 8, pc - 1);
    var fields = [ f7, f8 ];
    setTFieldsValue(window, fields);
    query(fields);
    tapFirstText();

    tapMenu("销售开单", "更多.", "查看修改日志");
    var texts = getStaticTexts(getPopOrView());
    var index = getArrayIndexIn(texts, "最后打印时间");
    var a = getStaticTextValue(getPopOrView(), index - 7);
    var b = getStaticTextValue(getPopOrView(), index - 5);
    var c = getStaticTextValue(getPopOrView(), index + 3);
    var d = getStaticTextValue(getPopOrView(), index + 5);

    var ret = isAnd(isEqual("总经理", a), isEqual(getOpTime(), c), isEqual(pc, d));
    var ret1 = isAqualOptime(getOpTime(), b, 1);

    tapButton(getPop(), OK);
    tapReturn();

    logDebug(" ret" + ret);
    return ret;
}
function testCs170169() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 2, 3 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "挂单");
    query(fields1);
    var qr = getQR();
    var a = qr.data[0]["批次"];
    var b = qr.data[0]["日期"];

    var ret = isAnd(isEqual("0", a), isEqual(getToday(""), b));

    logDebug("ret" + ret);

    return ret;
}
function testCs170170() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "nb003", "数量" : [ 2, 2, 2, 2 ] },
                { "货品" : "nb001", "数量" : [ 2, 2, 2, 2 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "挂单");
    query(fields1);

    tapFirstText();
    tapButton(getScrollView(), 3);

    json = { "明细" : [ { "货品" : "x003", "数量" : [ 2, 3, 4, 5 ] } ] };
    editSalesBillDetColorSize(json);

    saveAndAlertOk();
    tapButtonAndAlert("打 印", "取 消");
    delay();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "保存成功"));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function testCs170171() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 1, 2, 3, 4 ] },
                { "货品" : "x003", "数量" : [ 1, 1, 2, 3, 4 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "挂单");
    query(fields1);

    tapFirstText();
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "保存成功"));

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var a = qr.data[0]["客户"];
    var b = qr.data[0]["日期"];

    var ret1 = isAnd(isEqual("李四", a), isEqual(getToday(""), b));

    logDebug(" ret" + ret + " ret1" + ret1);
    return ret && ret1;
}
function testCs170173() {
    // 全局参数，不显示待作废按钮
    var qo, o, ret = true;
    qo = { "备注" : "待作废" };
    o = { "新值" : "0", "数值" : [ "默认不显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 8, 8, 0, 1, 8 ] },
                { "货品" : "x003", "数量" : [ 2, 8, 0, 1, 5 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay(3);
    tapReturn();

    tapMenu("销售开单", "按挂单");
    tapFirstText();

    json = { "明细" : [ { "货品" : "nb001", "数量" : [ 2, 3, 4, 5 ] } ] };
    editSalesBillDetColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay(2);
    tapReturn();

    tapMenu("销售开单", "按挂单");
    var qr = getQR();
    var a = qr.data[0]["客户"];
    var b = qr.data[0]["日期"];
    var c = qr.data[0]["金额"];

    var ret = isAnd(isEqual("李四", a), isEqual(getToday(""), b), isEqual(
            "22100", c));

    logDebug(" ret" + ret);
    return ret;
}
function testCs170174() {
    // 开单模式选择代收模式2
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 2, 2, 2, 3, 1, 9 ] },
                { "货品" : "nb001", "数量" : [ 5, 6, 2, 3, 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay(3);
    tapReturn();

    tapMenu("销售开单", "按挂单");
    tapFirstText();

    json = { "明细" : [ { "货品" : "nb001", "数量" : [ 7, 0, 9 ] } ] };
    editSalesBillDetColorSize(json);

    var json = { "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapButtonAndAlert("none", "打印(客户用)");
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var qr = getQR();
    var a = qr.data[0]["客户"];
    var b = qr.data[0]["日期"];
    var c = qr.data[0]["代收"];

    var ret = isAnd(isEqual("李四", a), isEqual(getToday(""), b), isEqual(
            "20570", c));

    logDebug(" ret" + ret);
    return ret;
}
function testCs170175() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 2, 3, 1, 0, 0, 8 ] },
                { "货品" : "x003", "数量" : [ 7, 3, 5, 1, 0, 8 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();
    delay();

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapButtonAndAlert("none", OK, true);
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "本单不允许执行挂单操作"));

    delay();
    tapReturn();

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function testCs170176() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "nb001", "数量" : [ 8, 1, 2, 1 ] },
                { "货品" : "nb003", "数量" : [ 8, 5, 2, 9, 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay(2);
    tapReturn();

    tapMenu("销售开单", "按挂单");
    tapFirstText();

    var json1 = { "客户" : "lx", "店员" : "2003", "刷卡" : [ 596, "交" ], "备注" : "bz" };
    editSalesBillNoColorSize(json1);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "保存成功，是否打印"));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function testCs170177() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 3, 4, 5, 6, 7 ] },
                { "货品" : "x003", "数量" : [ 8, 7, 6, 5, 6, 7 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay(2);
    tapReturn();

    tapMenu("销售开单", "开  单+");
    tapMenu("销售开单", "更多.", "所有挂单");
    delay();
    var qr = getQRtable1();

    // debugQResult(qr);
    loadHangBill(0);

    var a = getTextFieldValue(getScrollView(), 0);
    var b = getTextFieldValue(getScrollView(), 35);
    var c = getTextFieldValue(getScrollView(), 42);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    var ret = isAnd(isIn(a, "X001"), isIn(b, "X001"), isIn(c, "X003"));

    logDebug(" ret" + ret);
    return ret;
}
function testCs170180() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 2, 3, 3, 3, 1 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    tapMenu("销售开单", "更多.", "设置已配货");
    tapPrompt();

    delay();
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "配货成功"));

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["配货"];

    var ret1 = isEqual("是", a);

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret + " ret1" + ret1);
    return ret && ret1;
}
function testCs170181() {
    var r = "anewkh" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "允许退货" : "否" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : r,
        "明细" : [ { "货品" : "x001", "数量" : [ 5, 3 ] },
                { "货品" : "x001", "数量" : [ -1, -3 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var ret = isIn(alertMsg, "不允许退货");
    tapPrompt();
    tapReturn();

    logDebug("alertMsg=" + alertMsg + " ret=" + ret);
    return ret;
}
function testCs170183() {
    // 全局设置:开启 积分跨门店共享功能;
    // 常青店总经理000登陆

    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "ls");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["当前积分"];

    // 中洲店总经理200登陆
    delay();
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x001", "数量" : [ 1, 9, 7 ] } ] };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    var keys1 = [ "customer" ];
    var fields1 = queryCustomerFields(keys1);
    changeTFieldValue(fields1["customer"], "ls");
    query(fields1);
    var qr1 = getQR();
    var b = qr1.data[0]["当前积分"];

    var ret = false;
    if (sub(b, a) == "180") {
        ret = true;
    }
    logDebug(" a=" + a + " b=" + b);
    return ret;
}
function testCs170184() {
    // 全局设置:不开启 积分跨门店共享功能;
    // 常青店总经理000登陆
    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "ls");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["当前积分"];

    // 中洲店总经理200登陆
    delay();
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 6, 7, 8 ] } ] };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    var keys1 = [ "customer" ];
    var fields1 = queryCustomerFields(keys1);
    changeTFieldValue(fields1["customer"], "ls");
    query(fields1);
    var qr1 = getQR();
    var b = qr1.data[0]["当前积分"];

    var ret = false;
    if (sub(b, a) != "180" && b) {
        ret = true;
    }
    logDebug(" a=" + a + " b=" + b);
    return ret;
}
function testCs170185() {
    // 1销售开单时是否按门店区分客户-不区分；2全局设置:开启 积分跨门店共享功能;
    // var qo, o, ret = true;
    // qo = { "备注" : "积分是否跨门店共享" };
    // o = { "新值" : "1", "数值" : [ "共享" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));
    //    
    // qo = { "备注" : "区分" };
    // o = { "新值" : "0", "数值" : [ "默认不区分" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "ls");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["当前积分"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    tapButton(window, "核销");
    var b = getStaticTextValue(getScrollView(1), 1);
    tapNaviLeftButton();
    tapReturn();

    var ret = isIn(b, a);
    logDebug(" a=" + a + " b=" + b);
    return ret;
}
function testCs170191() {
    // 全局设置：开启 “总计是否四舍五入”
    var qo, o, ret = true;
    qo = { "备注" : "总计是否需要四舍五入" };
    o = { "新值" : "1", "数值" : [ "需要" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 1.11, 1, 0 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var a = getTextFieldValue(window, 12);
    var ret = isEqual("1034", a);

    saveAndAlertOk();
    tapButtonAndAlert("none", "取 消");
    delay();
    tapReturn();

    logDebug(" a=" + a + "ret=" + ret);
    return ret;
}
function testCs170192() {
    // 1开单员005，开单员销售价允许改高，不允许改低；2、开启销售开单修改单价－都可修改,3,关闭去上次价
    // var qo, o, ret = true;
    // qo = { "备注" : "销售价格允许改高不允许改低" };
    // o = { "新值" : "1", "数值" : [ " 销售价不能低于零批价", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));
    //
    // qo = { "备注" : "是否启用上次成交价作为本次开单单价" };
    // o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "明细" : [ { "货品" : "x003", "数量" : [ 1, 3, 4 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("单价", TF, 4, "88");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "价格输入错误"));

    logDebug("ret=" + ret);
    return ret;
}
function testCs170195() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "nb001", "数量" : [ 1, 3, 4 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("单价", TF, 4, "-180");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "单价或金额不能为负数"));

    logDebug("ret=" + ret);
    return ret;
}
function testCs170199() {
    // 本地设置-开单界面，保存后是否显示打印确认窗口-设为1，显示
    var qo, o, ret = true;
    qo = { "备注" : "开单界面，保存后显示是否打印确认窗口" };
    o = { "新值" : "1", "数值" : [ "默认显示", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 12, 2, 3, 4, 6 ] } ] };
    editSalesBillColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "是否打印"));

    logDebug("ret=" + ret);
    return ret;

}
function testCs170200() {
    // 本地设置-开单界面，保存后是否显示打印确认窗口-设为0，不显示
    var qo, o, ret = true;
    qo = { "备注" : "开单界面，保存后显示是否打印确认窗口" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 2, 3, 4, 6 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    saveAndAlertOk();
    var ret1 = tapPrompt();

    tapReturn();

    logDebug("ret1=" + ret1);
    return !ret1;
}
function test170Cs213() {
    // 后台参数 退货期限(天数),销售开单退货时验证是否已经超出期限 设为一个不为0的时间,比如10天
    var qo, o, ret = true;
    qo = { "备注" : "销售开单退货时验证时,是否允许继续输入" };
    o = { "新值" : "1", "数值" : [ "可以继续输入", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkh" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : [ 8 ] } ],
        "日期" : getDay(-11) };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : r, "日期从" : getDay(-11), "日期到" : getDay(-11),
        "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    var ret = isEqual(r, getTextFieldValue(window, 0));

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : [ -8 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var ret1 = isEqual("", getTextFieldValue(getScrollView(), 3))

    saveAndAlertOk();
    tapPrompt();

    ret1 = isAnd(ret1, isIn(alertMsg, "保存成功"));

    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    tapFirstText();
    var ret = isAnd(isEqual(r, getTextFieldValue(window, 0)), isEqual(-8,
            qr.data[0]["数量"]), isEqual("3035,jkk", getTextFieldValue(
            getScrollView(), 0)), isEqual(-8, getTextFieldValue(
            getScrollView(), 3)));

    tapReturn();

    return ret && ret1;
}
function testCs170214() {
    var qo, o, ret = true;
    qo = { "备注" : "销售开单退货时验证时,是否允许继续输入" };
    o = { "新值" : "0", "数值" : [ "不能输入", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkh" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : [ 8 ] } ],
        "日期" : getDay(-11) };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : r, "日期从" : getDay(-11), "日期到" : getDay(-11),
        "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    var ret = isEqual(r, getTextFieldValue(window, 0));

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035" } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f3 = new TField("数量", TF, 3, -2);
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    var ret1 = isEqual("", getTextFieldValue(getScrollView(), 3));

    ret1 = isAnd(ret1, isIn(alertMsg, "操作提醒，该款已经超出了退货期限10天 ，首次拿货日期= ["
            + getDay(-11) + "] [3035,jkk]"));

    tapReturn();

    return ret && ret1;
}
function testCs170236() {
    // 全局设置里设置 单据打印后不允许修改 为 不限制;开单员(非总经理)005登陆
    var qo, o, ret = true;
    qo = { "备注" : "单据打印后不允许修改" };
    o = { "新值" : "0", "数值" : [ "不限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 2, 3, 4, 5, 6 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    saveAndAlertOk();
    tapButtonAndAlert("none", "打印(客户用)");
    tapButton(window, RETURN);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls", "门店" : "常青店" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    var f3 = new TField("数量", TF, 3, "3");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "保存成功"));

    logDebug("ret=" + ret);
    return ret;
}
function testCs170237() {
    // 全局设置里设置 单据打印后不允许修改 为 明细不允许修改;开单员005登陆
    // var qo, o, ret = true;
    // qo = { "备注" : "单据打印后不允许修改" };
    // o = { "新值" : "1", "数值" : [ "明细不允许修改", "in" ], "授权码" : [] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 2, 2, 3, 4, 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    saveAndAlertOk();
    tapButtonAndAlert("none", "打印(客户用)");
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls", "门店" : "常青店" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    var f3 = new TField("数量", TF, 3, "1");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "不能修改"));

    logDebug("ret=" + ret);
    return ret;
}
function testCs170238() {
    // 全局设置里设置 单据打印后不允许修改 为 都不允许修改
    // var qo, o, ret = true;
    // qo = { "备注" : "单据打印后不允许修改" };
    // o = { "新值" : "2", "数值" : [ "都不允许修改", "in" ], "授权码" : [] };
    // ret = isAnd(ret, setGlobalParam(qo, o));
    //    
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ 1, 2, 3, 4, 5, 5 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    saveAndAlertOk();
    tapButtonAndAlert("none", "打印(客户用)");
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls", "门店" : "常青店" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    var f3 = new TField("数量", TF, 3, "0");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "不能修改"));

    tapButtonAndAlert(RETURN, OK);

    logDebug("ret=" + ret);
    return ret;
}
function testCs170239() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x003", "数量" : [ 1, 2, 3, 4, 5 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("单价", TF, 4, "-100");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButtonAndAlert(RETURN, OK);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "单价或金额不能为负数"));

    logDebug("ret=" + ret);
    return ret;
}
function testCs170240() {
    // 设置全局参数 开单是否门店过滤人中为 支持,开启后店员只显示本门店人员
    var qo, o, ret = true;
    qo = { "备注" : "开单是否门店过滤人员" };
    o = { "新值" : "1", "数值" : [ "开启后店员只显示本门店人员", "in" ], "授权码" : [] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x001", "数量" : [ 2, 3, 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("店员", TF_AC, 4, "1");
    var fields = [ f4 ];
    setTFieldsValue(window, fields);

    var ret = false;
    var f = new TField("店员", TF_AC, 4, "1", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        debugElementTree(cell);
        var v = cell.name();
        if (isEqual("101,财务员", v)) {
            ret = true;
            break;
        }
    }
    tapNaviLeftButton();
    tapReturn();

    logDebug("ret=" + ret);
    return !ret;
}
function testCs170241() {
    // 设置全局参数 开单是否门店过滤人中为 默认不支持
    var qo, o, ret = true;
    qo = { "备注" : "开单是否门店过滤人员" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 9, 3, 1, 8 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("店员", TF_AC, 4, "1");
    var fields = [ f4 ];
    setTFieldsValue(window, fields);

    var ret = false;
    var f = new TField("店员", TF_AC, 5, "1", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        debugElementTree(cell);
        var v = cell.name();
        if (isEqual("101,财务员", v)) {
            ret = true;
            break;
        }
    }
    tapNaviLeftButton();
    tapReturn();

    logDebug("ret=" + ret);
    return ret;
}
function testCs170242() {
    // 开启全局参数 价格模式 为不同门店不同价格
    var qo, o, ret = true;
    qo = { "备注" : "价格模式" };
    o = { "新值" : "1", "数值" : [ "不同门店不同的价格体系", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    runAndAlert("test210020Clear", OK);
    delay(5);
    tapPrompt();

    // 常青店总经理000登陆
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "nb001", "数量" : [ 0, 5, 11, 2, 2 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var a = getTextFieldValue(getScrollView(), 4);
    var ret = isEqual("180", a);

    // 仓库店总经理100登陆
    tapMenu("销售开单", "开 单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "nb001", "数量" : [ 9, 3, 1, 8 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var b = getTextFieldValue(getScrollView(), 4);

    var ret1 = isEqual("250", b);
    //    
    qo = { "备注" : "价格模式" };
    o = { "新值" : "0", "数值" : [ " 统一的价格体系", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    runAndAlert("test210020Clear", OK);
    delay(5);
    tapPrompt();

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function testCs170244() {
    // 开启全局参数 价格模式 为不同门店不同价格
    var qo, o, ret = true;
    qo = { "备注" : "货品建款的价格模式" };
    o = { "新值" : "0", "数值" : [ "默认价格模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "价格模式" };
    o = { "新值" : "1", "数值" : [ "不同门店不同的价格体系", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    runAndAlert("test210020Clear", OK);
    delay(5);
    tapPrompt();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "nb003", "数量" : [ 2, 2, 2, 2 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按明细查");
    var keys = { "款号" : "nb003", "客户" : "ls", "门店" : "常青店" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["差额"];

    var ret = isEqual("0", a);

    qo = { "备注" : "价格模式" };
    o = { "新值" : "0", "数值" : [ " 统一的价格体系", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    runAndAlert("test210020Clear", OK);
    delay(5);
    tapPrompt();

    logDebug("ret=" + ret);
    return ret;
}
function testCs170245() {
    // 设置全局参数 开单 货品列表是否显示品牌信息 为 支持,部分客户需要
    var qo, o, ret = true;
    qo = { "备注" : "开单货品列表是否销售品牌信息" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    runAndAlert("test210020Clear", OK);
    delay(5);
    tapPrompt();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "nb003", "数量" : [ 3, 3, 3, 4 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var ret = false;
    var f = new TField("货品", TF_AC, 0, "x00", -1);
    var cells = getTableViewCells(getScrollView(), f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        debugElementTree(cell);
        var v = cell.name();
        if (isIn(v, "Ck公司")) {
            ret = true;
            break;
        }
    }
    delay();
    tapNaviLeftButton();
    tapReturn();

    logDebug("ret=" + ret);
    return ret;
}
function testCs170247() {
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, r1);
    var g2 = new TField("店员", TF_AC, 2, "000,", -1, 0);
    var g4 = new TField("地址", TF, 4, r);
    var fields = [ g0, g1, g2, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 1);
    var a1 = getTextFieldValue(getScrollView(), 3);
    var a2 = getTextFieldValue(getScrollView(), 7);
    var a3 = getTextFieldValue(getScrollView(), 14);
    var a4 = getTextFieldValue(getScrollView(), 17);
    var ret = isAnd(isEqual(r, a), isEqual(r1, a1), isIn(a2, "总经理"), isEqual(
            "", a3), isEqual(r, a4));

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "x001", "数量" : [ 2, 1, 2, 3 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var b = getTextFieldValue(getScrollView(), 4);
    var ret1 = isEqual("490", b);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : r, "明细" : [ { "货品" : "x001", "数量" : [ 2, 1, 2, 3 ] } ],
        "onlytest" : "yes", "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    var c = getTextFieldValue(getScrollView(), 4);

    var ret2 = isEqual("490", c);
    tapReturn();

    logDebug("ret=" + ret + "ret1" + ret1 + "ret2" + ret2);
    return ret && ret1 && ret2;
}
function testCs170248() {
    var i, v;
    var p = "进货价 零批价 打包价 大客户价 Vip价格";

    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, r1);
    var g2 = new TField("店员", TF_AC, 2, "000,", -1, 0);
    var g3 = new TField("适用价格", BTN_SC, 0, "零批价", "", -1);
    var g4 = new TField("地址", TF, 4, r);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 1);
    var a1 = getTextFieldValue(getScrollView(), 3);
    var a2 = getTextFieldValue(getScrollView(), 7);
    var a3 = getTextFieldValue(getScrollView(), 14);
    var a4 = getTextFieldValue(getScrollView(), 17);
    var ret = isAnd(isEqual(r, a), isEqual(r1, a1), isIn(a2, "总经理"), isEqual(
            "零批价", a3), isEqual(r, a4));

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r,
        "明细" : [ { "货品" : "x003", "数量" : [ 4, 5, 6, 7, 0, 8 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var b = getTextFieldValue(getScrollView(), 4);
    var ret1 = isEqual("390", b);
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : r,
        "明细" : [ { "货品" : "x003", "数量" : [ 4, 5, 6, 7, 0, 8 ] } ],
        "onlytest" : "yes", "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    var c = getTextFieldValue(getScrollView(), 4);
    delay();
    var ret2 = isEqual("390", c);
    tapReturn();

    logDebug("ret=" + ret + "ret1" + ret1 + "ret2" + ret2);
    return ret && ret1 && ret2;
}
function testCs170251() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx",
        "明细" : [ { "货品" : "x003", "数量" : [ 0, 2, 2, 3, 6 ] } ],
        "代收" : { "物流商" : "tt", "运单号" : "123", "备注" : "a", "代收金额" : "200" } };
    editSalesBillColorSize(json);

    tapMenu("销售开单", LogisticsVerify);
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

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "lx", "门店" : "常青店" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    tapMenu("销售开单", "更多.", "查看修改日志");
    var texts = getStaticTexts(getPopOrView());
    var index = getArrayIndexIn(texts, "最后打印时间");
    var a = getStaticTextValue(getPopOrView(), index - 7);
    var b = getStaticTextValue(getPopOrView(), index - 5);
    var c = getStaticTextValue(getPopOrView(), index + 3);
    var d = getStaticTextValue(getPopOrView(), index + 5);

    var ret = isAnd(isEqual("总经理", a), isEqual("", c), isEqual("", d));
    var ret1 = isAqualOptime(getOpTime(), b);

    tapButton(getPop(), "关 闭");
    tapReturn();

    logDebug(" ret" + ret);
    return ret;
}
function test170112_170113() {
    // 颜色尺码模式下，开启参数 开单时是否显示当前库存
    var qo, o, ret = true;
    qo = { "备注" : "开单时是否显示当前库存" };
    o = { "新值" : "1", "数值" : [ "显示库存" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "所有门店" };
    o = { "新值" : "1", "数值" : [ "显示所有门店库存" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "当前库存");
    query();
    var keys = { "款号" : "x003", "门店" : "常青店", "颜色" : "黄色", "尺码" : "L" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "x003" } ], "关闭明细" : "no" };
    editSalesBillDetColorSize(json);
    var oStockNum = getColorSizeStockNum();
    tapNaviLeftButton();
    var n = oStockNum["黄色-L-常青店"];
    var ret1 = isAnd(isEqual(a, n), !isEqual(0, a));
    tapReturn();

    qo = { "备注" : "开单时是否显示当前库存" };
    o = { "新值" : "0", "数值" : [ "不显示库存", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "x003" } ], "关闭明细" : "no" };
    editSalesBillDetColorSize(json);
    var oStockNum = getColorSizeStockNum();
    tapNaviLeftButton();
    var n1 = oStockNum["黄色-L-常青店"];
    var ret2 = isEqual(undefined, n1);
    tapReturn();

    logDebug(" a=" + a + ", ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170114_170115() {
    var qo, o, ret = true;
    qo = { "备注" : "开单时是否显示当前库存" };
    o = { "新值" : "1", "数值" : [ "显示库存" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "所有门店" };
    o = { "新值" : "1", "数值" : [ "显示所有门店库存" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // 款号3035在各个门店都有库存
    tapMenu("货品管理", "当前库存");
    query();
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    var qKeys = [ "门店" ];
    var qFields = queryGoodsStockFields(qKeys);
    changeTFieldValue(qFields["门店"], "仓库店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    var qr1 = getQR();
    var a1 = qr1.data[0]["库存"];

    changeTFieldValue(qFields["门店"], "中洲店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    var qr2 = getQR();
    var a2 = qr2.data[0]["库存"];

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035" } ], "关闭明细" : "no" };
    editSalesBillDetColorSize(json);
    var oStockNum = getColorSizeStockNum();
    tapNaviLeftButton();
    var n = oStockNum["均色-均码-常青店"];
    var n1 = oStockNum["均色-均码-仓库店"];
    var n2 = oStockNum["均色-均码-中洲店"];
    tapReturn();
    var ret1 = isAnd(isEqual(a, n), isEqual(a1, n1), isEqual(a2, n2));

    qo = { "备注" : "所有门店" };
    o = { "新值" : "0", "数值" : [ "默认显示本门店的库存", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035" } ], "关闭明细" : "no" };
    editSalesBillDetColorSize(json);
    var oStockNum = getColorSizeStockNum();
    tapNaviLeftButton();
    var n = oStockNum["均色-均码"];
    var ret2 = isEqual(a, n);
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170203() {
    var qo, o, ret = true;
    qo = { "备注" : "销售开单时逐条进行退货数大于拿货数验证" };
    o = { "新值" : "1", "数值" : [ "提醒，交互好，但耗流量，谨慎开启", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "0", "数值" : [ "允许负库存", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "x001", "数量" : [ 0, -1 ] } ] };
    editSalesBillDetColorSize(json);
    saveAndAlertOk();
    tapPrompt();
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isIn(alertMsg1, "往来单位为空不允许有欠款或余额");
    tapButton(getScrollView(-1), 0);
    tapButton(getScrollView(-1), 1);

    json = { "明细" : [ { "货品" : "x001", "数量" : [ 1, 1 ] } ], "不返回" : "yes" };
    editSalesBillColorSize(json);
    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret2 = isIn(alertMsg1, "保存成功") || isIn(alertMsg2, "保存成功");

    json = { "客户" : "ls", "特殊货品" : { "抹零" : 19, "打包费" : 30 } };
    editSalesBillColorSize(json);
    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    alertMsg2 = getArray1(alertMsgs, -2);
    var ret3 = !isIn(alertMsg1, "操作提醒") || !isIn(alertMsg2, "操作提醒");

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170207() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单是否逐条进行补货退货时验证" };
    o = { "新值" : "1", "数值" : [ "会减慢开单速度", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单补货退货时验证时,是否允许继续输入" };
    o = { "新值" : "1", "数值" : [ "可以继续输入", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkh" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb001", "数量" : [ 8 ] } ],
        "不返回" : "yes" };
    editSalesBillColorSize(json);

    json = { "客户" : r, "明细" : [ { "货品" : "nb001", "数量" : [ 2 ] } ],
        "不返回" : "yes" };
    editSalesBillColorSize(json);

    json = { "客户" : r };
    editSalesBillCustomer(json);

    json = { "特殊货品" : { "抹零" : 4, "打包费" : 200 } };
    editSalesBillSpecial(json);

    json = { "明细" : [ { "货品" : "nb001", "数量" : [ -2 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var kh = qr.data[0]["客户"];
    var je = qr.data[0]["金额"];
    var sl = qr.data[0]["数量"];
    var opt = qr.data[0]["操作日期"];

    tapFirstText();
    var qr = getQRDet();
    var ret2 = true;
    for (var i = 0; i < 3; i++) {
        var obj = qr.data[i]["货品"];
        if (isIn(obj, "Nb001")) {
            ret2 = isAnd(ret2, isEqual(-2, qr.data[i]["数量"]));
        }
        var obj1 = qr.data[i]["货品"];
        if (isIn(obj1, "00000,抹零")) {
            ret2 = isAnd(ret2, isEqual(-1, qr.data[i]["数量"]), isEqual(4,
                    qr.data[i]["单价"]));
        }
        var obj2 = qr.data[i]["货品"];
        if (isIn(obj2, "00001,打包费")) {
            ret2 = isAnd(ret2, isEqual(1, qr.data[i]["数量"]), isEqual(200,
                    qr.data[i]["单价"]));
        }
    }
    tapReturn();

    qo = { "备注" : "销售开单是否逐条进行补货退货时验证" };
    o = { "新值" : "0", "数值" : [ "不验证", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret + ", ret2=" + ret2);
    return ret && ret2;
}
function test170208() {
    var qo, o, ret = true;
    qo = { "备注" : "销售开单是否逐条进行补货退货时验证" };
    o = { "新值" : "1", "数值" : [ "会减慢开单速度", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单补货退货时验证时,是否允许继续输入" };
    o = { "新值" : "0", "数值" : [ "不能输入", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewkh" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "允许退货" : "是" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(-1), fields);
    tapButton(window, SAVE);
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "nb001", "数量" : [ 8 ] } ],
        "不返回" : "yes" };
    editSalesBillColorSize(json);

    json = { "客户" : r, "明细" : [ { "货品" : "nb001", "数量" : [ 2 ] } ],
        "不返回" : "yes" };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    json = { "客户" : r };
    editSalesBillCustomer(json);

    json = { "特殊货品" : { "打包费" : 300, "免单" : 8 } };
    editSalesBillSpecial(json);

    json = { "明细" : [ { "货品" : "nb001", "数量" : [ -2 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);

    tapPrompt();
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret3 = isAnd(isIn(alertMsg1, "该款属于补货不能退货"), isIn(alertMsg1,
            "Nb001,新百伦运动鞋"));

    tapButton(getScrollView(-1), 2);
    json = { "明细" : [ { "货品" : "nb001", "数量" : [ 3 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    var remitTFindex = getEditSalesTFindex2("客户", "汇款");
    var money = getTextFieldValue(window, remitTFindex - 1);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var kh = qr.data[0]["客户"];
    var je = qr.data[0]["金额"];
    var sl = qr.data[0]["数量"];
    var opt = qr.data[0]["操作日期"];

    tapFirstText();
    var qr = getQRDet();
    var ret1 = true;
    for (var i = 0; i < 3; i++) {
        var obj = qr.data[i]["货品"];
        if (isIn(obj, "Nb001")) {
            ret1 = isAnd(ret1, isEqual(3, qr.data[i]["数量"]));
        }
        var obj1 = qr.data[i]["货品"];
        if (isIn(obj1, "00002,免单")) {
            ret1 = isAnd(ret1, isEqual(-1, qr.data[i]["数量"]), isEqual(8,
                    qr.data[i]["单价"]));
        }
        var obj2 = qr.data[i]["货品"];
        if (isIn(obj2, "00001,打包费")) {
            ret1 = isAnd(ret1, isEqual(1, qr.data[i]["数量"]), isEqual(300,
                    qr.data[i]["单价"]));
        }
    }
    tapReturn();
    var ret2 = isAnd(isEqual(je, money), isEqual(r, kh), isEqual(3, sl),
            isAqualOptime(getOpTime(), opt));

    qo = { "备注" : "销售开单是否逐条进行补货退货时验证" };
    o = { "新值" : "0", "数值" : [ "不验证", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170442_170425() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "10", "数值" : [ "童装+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "童装是否按组开单" };
    o = { "新值" : "0", "数值" : [ "按件开单", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    var r = randomWord(false, 8);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "tz002", "数量" : [ 0, 0, 0, 0, 0, 0, 1 ] } ],
        "代收" : { "物流商" : "tt", "运单号" : r, "备注" : r } };
    editSalesBillColorSize(json);
    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];
    var ydh = json["代收"]["运单号"];
    var bz = json["代收"]["备注"];

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    tapStaticText(window, "代收");
    ret = isAnd(ret, isEqual(wls, getTextFieldValue(window, -4)), isEqual(ydh,
            getTextFieldValue(window, -3)), isEqual(bz, getTextFieldValue(
            window, -2)), isEqual(money, getTextFieldValue(window, -1)));
    tapNaviLeftButton();
    tapReturn();

    tapMenu("销售开单", "物流单");
    var keys = { "物流商" : "天天物流", "运单号" : r };
    var fields = salesQueryLogisticsFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isAnd(isEqual(getToday("yy"), qr.data[0]["日期"]), isEqual("天天物流",
            qr.data[0]["物流商"]), isEqual(r, qr.data[0]["运单号"]), isEqual(r,
            qr.data[0]["物流备注"]));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170408() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "基本设置", "所有颜色");
    var keys = { "名称" : "黄色" };
    conditionQuery(keys);
    tapFirstText();
    tapButtonAndAlert(STOP, OK);

    tapMenu("货品管理", "基本设置", "所有颜色");
    var keys = { "名称" : "淡黄" };
    conditionQuery(keys);
    tapFirstText();
    tapButtonAndAlert(STOP, OK);

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "x003", "数量" : [] } ] };
    editSalesBillDetColorSize(json);

    tapPrompt();
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret1 = isIn(alertMsg1, "颜色为空或停用") || isIn(alertMsg2, "颜色为空或停用");
    tapNaviLeftButton();
    tapReturn();

    tapMenu("货品管理", "基本设置", "所有颜色");
    tapButton(window, QUERY);
    tapFirstText();
    tapButtonAndAlert(START, OK);

    tapMenu("货品管理", "基本设置", "所有颜色");
    var keys = { "名称" : "黄色" };
    conditionQuery(keys);
    tapFirstText();
    tapButtonAndAlert(START, OK);

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170626() {
    // 检查销售开单、销售订货、采购入库、采购订货、门店调出、盘点管理的开单、复制粘贴、取未保存
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var qr = getQRDet();
    var ret1 = isEqual("铁锈红", qr.data[0]["颜色"]);
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", 1 ] } ],
        "goodsFieldIndex" : -2, "onlytest" : "yes" };
    editSalesBillColorSize(json);
    qr = getQRDet();
    var ret2 = isEqual("铁锈红", qr.data[0]["颜色"]);
    tapReturn();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "rt",
        "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", 1 ] } ],
        "goodsFieldIndex" : -2, "onlytest" : "yes" };
    editSalesBillColorSize(json);
    qr = getQRDet();
    var ret3 = isEqual("铁锈红", qr.data[0]["颜色"]);
    tapReturn();

    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "rt",
        "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", 1 ] } ],
        "goodsFieldIndex" : -2, "onlytest" : "yes" };
    editSalesBillColorSize(json);
    qr = getQRDet();
    var ret4 = isEqual("铁锈红", qr.data[0]["颜色"]);
    tapReturn();

    tapMenu("门店调出", "批量调出+");
    var json = { "客户" : "000",
        "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", 1 ] } ],
        "goodsFieldIndex" : -2, "onlytest" : "yes" };
    editSalesBillColorSize(json);
    qr = getQRDet();
    var ret5 = isEqual("铁锈红", qr.data[0]["颜色"]);
    tapReturn();

    tapMenu("盘点管理", "新增盘点+");
    var json = { "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", 1 ] } ],
        "goodsFieldIndex" : -2, "onlytest" : "yes" };
    editSalesBillColorSize(json);
    qr = getQRDet();
    var ret6 = isEqual("铁锈红", qr.data[0]["颜色"]);
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    var keys = [ "门店" ];
    var fields = queryCheckBatchFields(keys);
    changeTFieldValue(fields["门店"], "常青店");
    query(fields);
    tapFirstText();
    tapButton(window, "整单复制");
    delay();

    tapMenu("盘点管理", "新增盘点+");
    tapButton(window, "整单粘贴");
    saveAndAlertOk();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    tapButton(window, QUERY);
    tapFirstText();
    qr = getQRDet();
    ret6 = isAnd(ret6, isEqual("铁锈红", qr.data[0]["颜色"]));
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6;
}
function test170651() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "0", "数值" : [ "允许负库存", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = testSalesCuanMaPrepare();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : r, "数量" : [ 20 ] } ],
        "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : [ 0, 10 ] } ] };
    editSalesBillColorSize(json);

    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "2", "数值" : [ "适用窜码销售情况", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : r, "门店" : "常青店", "颜色" : "红色", "尺码" : "M" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var k = qr.data[0]["库存"];

    var qKeys = [ "尺码" ];
    var qFields = queryGoodsStockFields(qKeys);
    changeTFieldValue(qFields["尺码"], "S");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k1 = qr.data[0]["库存"];
    var ret1 = isAnd(isEqual("-10", k), isEqual(20, k1));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : [ 0, 1 ] } ],
        "onlytets" : "ye" };
    editSalesBillColorSize(json);

    saveAndAlertOk();
    tapPrompt();
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret2 = isIn(alertMsg1, "保存成功");
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var kc1 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "M");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var kc = qr.data[0]["库存"];
    ret1 = isAnd(ret1, isEqual("-11", kc), isEqual(20, kc1));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : r, "数量" : [ 0, 1 ] } ],
        "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    saveAndAlertOk();
    tapPrompt();
    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret3 = isIn(alertMsg1, "保存成功") || isIn(alertMsg2, "保存成功");

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var kc2 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "S");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var kc3 = qr.data[0]["库存"];
    ret3 = isAnd(ret3, isEqual("-12", kc2), isEqual(20, kc3));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : r, "数量" : [ 0, -1 ] } ],
        "goodsFieldIndex" : -2, "onlytest" : "yes" };
    editSalesBillColorSize(json);

    saveAndAlertOk();
    tapPrompt();
    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret4 = isIn(alertMsg1, "保存成功") || isIn(alertMsg2, "保存成功");
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var kc5 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "M");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var kc4 = qr.data[0]["库存"];
    ret4 = isAnd(ret4, isEqual("-13", kc4), isEqual(20, kc5));

    tapMenu("门店调出", "批量调出+");
    var json = { "客户" : "000", "明细" : [ { "货品" : r, "数量" : [ 0, 2 ] } ],
        "goodsFieldIndex" : -2, "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f1 = new TField("接收店", TF_SC, 1, "中洲店");
    var fields = [ f1 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    var ret5 = isIn(alertMsg, "保存成功");
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var kc6 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "S");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var kc7 = qr.data[0]["库存"];
    ret5 = isAnd(ret5, isEqual("-15", kc6), isEqual(20, kc7));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test170652() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "0", "数值" : [ "允许负库存", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = testSalesCuanMaPrepare();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : r, "数量" : [ 0, 20 ] } ],
        "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : [ 10 ] } ] };
    editSalesBillColorSize(json);

    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "2", "数值" : [ "适用窜码销售情况", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : r, "门店" : "常青店", "颜色" : "红色", "尺码" : "S" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var k = qr.data[0]["库存"];

    var qKeys = [ "尺码" ];
    var qFields = queryGoodsStockFields(qKeys);
    changeTFieldValue(qFields["尺码"], "M");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k1 = qr.data[0]["库存"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : [ 1 ] } ] };
    editSalesBillColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1), alertMsg2 = getArray1(alertMsgs,
            -2), alertMsg3 = getArray1(alertMsgs, -3);
    var ret1 = isIn(alertMsg1, "保存成功") || isIn(alertMsg2, "保存成功")
            || isIn(alertMsg3, "保存成功");

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    var f3 = new TField("数量", TF, 3, add(add(k, k1), 1));
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(-1), fields);
    editSalesBillSave({});
    alertMsg1 = getArray1(alertMsgs, -1);
    alertMsg2 = getArray1(alertMsgs, -2);
    var ret2 = isAnd(isIn(alertMsg1, "[常青店]中[" + r + "," + "货品" + r), isIn(
            alertMsg1, "库存不足"), isIn(alertMsg1, "1件"))
            || isAnd(isIn(alertMsg2, "[常青店]中[" + r + "," + "货品" + r), isIn(
                    alertMsg2, "库存不足"), isIn(alertMsg2, "1件"));

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k3 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "S");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k2 = qr.data[0]["库存"];
    var ret3 = isAnd(isEqual("-11", k2), isEqual(20, k3));

    // 采购退货/门店调出/紧急模式上传 都要测一遍
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : r, "数量" : [ -1 ] } ],
        "goodsFieldIndex" : -2, "onlytest" : "yes" };
    editSalesBillColorSize(json);
    editSalesBillSave({});
    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret4 = isIn(alertMsg1, "保存成功") || isIn(alertMsg2, "保存成功");

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();
    var f3 = new TField("数量", TF, 3, -add(add(k2, k3), 1));
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(-1), fields);
    editSalesBillSave({});
    alertMsg1 = getArray1(alertMsgs, -1);
    alertMsg2 = getArray1(alertMsgs, -2);
    ret4 = isAnd(ret4, isIn(alertMsg1, "差1件") || isIn(alertMsg2, "差1件"));

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k4 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "M");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k5 = qr.data[0]["库存"];
    ret4 = isAnd(ret4, isEqual("-12", k4), isEqual(20, k5));

    tapMenu("门店调出", "批量调出+");
    var json = { "客户" : "000", "明细" : [ { "货品" : r, "数量" : [ 2 ] } ],
        "goodsFieldIndex" : -2, "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f1 = new TField("接收店", TF_SC, 1, "中洲店");
    var fields = [ f1 ];
    setTFieldsValue(window, fields);
    editSalesBillSave({});
    alertMsg1 = getArray1(alertMsgs, -1);
    alertMsg2 = getArray1(alertMsgs, -2);
    var ret5 = isIn(alertMsg1, "保存成功") || isIn(alertMsg2, "保存成功");

    tapMenu("门店调出", "按批次查");
    var keys = { "日期到" : getToday() };
    var fields = shopOutQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    var f3 = new TField("数量", TF, 3, add(add(k4, k5), 1));
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(-1), fields);
    editSalesBillSave({});
    alertMsg1 = getArray1(alertMsgs, -1);
    alertMsg2 = getArray1(alertMsgs, -2);
    ret5 = isAnd(ret5, isIn(alertMsg1, "差1件") || isIn(alertMsg2, "差1件"));

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k7 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "S");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k6 = qr.data[0]["库存"];
    ret5 = isAnd(ret5, isEqual("-14", k6), isEqual(20, k7));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : r, "数量" : [ 1 ] } ],
        "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    var o = [ { "数量" : [ add(add(k6, k7), 1) ] } ];
    editChangeSalesBillOrderNum(o, "no");
    saveAndAlertOk();
    tapPrompt();
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret6 = isAnd(isIn(alertMsg, "[常青店]中[" + r + "," + "货品" + r), isIn(
            alertMsg, "库存不足"), isIn(alertMsg, "1件"));

    o = [ { "数量" : [ 1 ] } ];
    editChangeSalesBillOrderNum(o);

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k8 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "M");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k9 = qr.data[0]["库存"];
    ret6 = isAnd(ret6, isEqual("-15", k8), isEqual(20, k9));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6;
}
function test170653() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "0", "数值" : [ "允许负库存", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = testSalesCuanMaPrepare();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : r, "数量" : [ 0, 20 ] } ],
        "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : [ 10 ] } ] };
    editSalesBillColorSize(json);

    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "2", "数值" : [ "适用窜码销售情况", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : r, "门店" : "常青店", "颜色" : "红色", "尺码" : "S" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var k = qr.data[0]["库存"];

    var qKeys = [ "尺码" ];
    var qFields = queryGoodsStockFields(qKeys);
    changeTFieldValue(qFields["尺码"], "M");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k1 = qr.data[0]["库存"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : r, "数量" : [ add(add(k, k1), 1) ] } ] };
    editSalesBillColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret1 = isIn(alertMsg1, "差1件") || isIn(alertMsg2, "差1件");
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k3 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "S");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k2 = qr.data[0]["库存"];

    var ret2 = isAnd(isEqual("-10", k2), isEqual(20, k3));
    // 按订货开单/采购退货/门店调出/紧急模式上传 都要测一遍
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : r, "数量" : [ add(add(k2, k3), 1) ] } ],
        "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    editSalesBillSave({});

    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    alertMsg2 = getArray1(alertMsgs, -2);
    var ret3 = isAnd(isIn(alertMsg1, "[常青店]中[" + r + "," + "货品" + r), isIn(
            alertMsg1, "库存不足"), isIn(alertMsg1, "1件"))
            || isAnd(isIn(alertMsg2, "[常青店]中[" + r + "," + "货品" + r), isIn(
                    alertMsg2, "库存不足"), isIn(alertMsg2, "1件"));

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k4 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "M");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k5 = qr.data[0]["库存"];
    ret3 = isAnd(ret3, isEqual("-10", k4), isEqual(20, k5));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt",
        "明细" : [ { "货品" : r, "数量" : [ -add(add(k4, k5), 1) ] } ],
        "goodsFieldIndex" : -2, "onlytest" : "yes" };
    editSalesBillColorSize(json);

    editSalesBillSave({});
    alertMsg1 = getArray1(alertMsgs, -1);
    alertMsg2 = getArray1(alertMsgs, -2);
    var ret4 = isIn(alertMsg1, "差1件") || isIn(alertMsg2, "差1件");

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k7 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "S");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k6 = qr.data[0]["库存"];
    ret4 = isAnd(ret4, isEqual("-10", k6), isEqual(20, k7));

    tapMenu("门店调出", "批量调出+");
    var json = { "客户" : "000",
        "明细" : [ { "货品" : r, "数量" : [ add(add(k6, k7), 1) ] } ],
        "goodsFieldIndex" : -2, "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f1 = new TField("接收店", TF_SC, 1, "中洲店");
    var fields = [ f1 ];
    setTFieldsValue(window, fields);

    editSalesBillSave({});
    alertMsg1 = getArray1(alertMsgs, -1);
    alertMsg2 = getArray1(alertMsgs, -2);
    var ret5 = isIn(alertMsg1, "差1件") || isIn(alertMsg2, "差1件");

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k8 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "M");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k9 = qr.data[0]["库存"];
    ret5 = isAnd(ret5, isEqual("-10", k8), isEqual(20, k9));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test170654() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "2", "数值" : [ "适用窜码销售情况", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = testSalesCuanMaPrepare();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : r, "数量" : [ 5, 10 ] } ],
        "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : r, "门店" : "常青店", "颜色" : "红色", "尺码" : "S" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var k = qr.data[0]["库存"];

    var qKeys = [ "尺码" ];
    var qFields = queryGoodsStockFields(qKeys);
    changeTFieldValue(qFields["尺码"], "M");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k1 = qr.data[0]["库存"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : [ add(k, 1) ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    saveAndAlertOk();
    tapPrompt();
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isIn(alertMsg1, "保存成功");
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k3 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "S");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k2 = qr.data[0]["库存"];
    var ret2 = isAnd(isEqual(-1, k2), isEqual(k1, k3));

    // 按订货开单/采购退货/门店调出/ 都要测一遍
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt",
        "明细" : [ { "货品" : r, "数量" : [ Number(-k2 * 2) ] } ],
        "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : r, "数量" : [ add(-k2, 1) ] } ],
        "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();

    tapFirstText();
    saveAndAlertOk();
    tapPrompt();
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret3 = isIn(alertMsg1, "保存成功");

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k4 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "M");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k5 = qr.data[0]["库存"];
    ret3 = isAnd(ret3, isEqual(-1, k4), isEqual(10, k5));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt",
        "明细" : [ { "货品" : r, "数量" : [ Number(-k4 * 2) ] } ],
        "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : r, "数量" : [ -add(-k4, 1) ] } ],
        "goodsFieldIndex" : -2, "onlytest" : "yes" };
    editSalesBillColorSize(json);

    saveAndAlertOk();
    tapPrompt();
    var ret4 = isAnd(isIn(alertMsg, "保存成功"));
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k7 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "S");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k6 = qr.data[0]["库存"];
    ret4 = isAnd(ret4, isEqual(-1, k6), isEqual(10, k7));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt",
        "明细" : [ { "货品" : r, "数量" : [ Number(-k6 * 2) ] } ],
        "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    tapMenu("门店调出", "批量调出+");
    var json = { "客户" : "000", "明细" : [ { "货品" : r, "数量" : [ add(-k6, 1) ] } ],
        "goodsFieldIndex" : -2, "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f1 = new TField("接收店", TF_SC, 1, "中洲店");
    var fields = [ f1 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    var ret5 = isIn(alertMsg, "保存成功");
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k8 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "M");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k9 = qr.data[0]["库存"];
    ret5 = isAnd(ret5, isEqual("-1", k8), isEqual(10, k9));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test170655() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "2", "数值" : [ "适用窜码销售情况", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = testSalesCuanMaPrepare();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : r, "数量" : [ 5, 10 ] } ],
        "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : r, "门店" : "常青店", "颜色" : "红色", "尺码" : "S" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var k = qr.data[0]["库存"];

    var qKeys = [ "尺码" ];
    var qFields = queryGoodsStockFields(qKeys);
    changeTFieldValue(qFields["尺码"], "M");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k1 = qr.data[0]["库存"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : r, "数量" : [ add(add(k, k1), 1) ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    saveAndAlertOk();
    tapPrompt();
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isIn(alertMsg1, "差1件");
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k3 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "S");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k2 = qr.data[0]["库存"];
    var ret2 = isAnd(isEqual(5, k2), isEqual(k1, k3));

    // 按订货开单/采购退货/门店调出/紧急模式上传 都要测一遍
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt",
        "明细" : [ { "货品" : r, "数量" : [ add(add(k2, k3), 1) ] } ],
        "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    saveAndAlertOk();
    tapPrompt();
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret3 = isIn(alertMsg1, "差1件");
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k4 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "M");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k5 = qr.data[0]["库存"];
    ret3 = isAnd(ret3, isEqual(k2, k4), isEqual(k3, k5));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt",
        "明细" : [ { "货品" : r, "数量" : [ -add(add(k4, k5), 1) ] } ],
        "goodsFieldIndex" : -2, "onlytest" : "yes" };
    editSalesBillColorSize(json);

    saveAndAlertOk();
    tapPrompt();
    var ret4 = isAnd(isIn(alertMsg, "差1件"));
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k7 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "S");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k6 = qr.data[0]["库存"];
    ret4 = isAnd(ret4, isEqual(k4, k6), isEqual(k5, k7));

    tapMenu("门店调出", "批量调出+");
    var json = { "客户" : "000",
        "明细" : [ { "货品" : r, "数量" : [ add(add(k6, k7), 1) ] } ],
        "goodsFieldIndex" : -2, "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f1 = new TField("接收店", TF_SC, 1, "中洲店");
    var fields = [ f1 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    var ret5 = isIn(alertMsg, "差1件");
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k8 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "M");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k9 = qr.data[0]["库存"];
    ret5 = isAnd(ret5, isEqual(k6, k8), isEqual(k7, k9));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test170656() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "0", "数值" : [ "允许负库存", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = testSalesCuanMaPrepare();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : r, "数量" : [ -5, 5 ] } ],
        "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "2", "数值" : [ "适用窜码销售情况", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : r, "门店" : "常青店", "颜色" : "红色", "尺码" : "S" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var k = qr.data[0]["库存"];

    var qKeys = [ "尺码" ];
    var qFields = queryGoodsStockFields(qKeys);
    changeTFieldValue(qFields["尺码"], "M");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k1 = qr.data[0]["库存"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : [ 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    saveAndAlertOk();
    tapPrompt();
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isIn(alertMsg1, "差1件");
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k3 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "S");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k2 = qr.data[0]["库存"];
    var ret2 = isAnd(isEqual(0, add(k3, k2)), isEqual(-5, k2));

    // 按订货开单/采购退货/门店调出/紧急模式上传 都要测一遍
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : r, "数量" : [ 1 ] } ],
        "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();

    tapFirstText();
    saveAndAlertOk();
    tapPrompt();
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret3 = isIn(alertMsg1, "差1件");
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k4 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "M");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k5 = qr.data[0]["库存"];
    ret3 = isAnd(ret3, isEqual(0, add(k5, k4)), isEqual(-5, k4));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : r, "数量" : [ -1 ] } ],
        "goodsFieldIndex" : -2, "onlytest" : "yes" };
    editSalesBillColorSize(json);

    saveAndAlertOk();
    tapPrompt();
    var ret4 = isAnd(isIn(alertMsg, "差1件"));
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k7 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "S");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k6 = qr.data[0]["库存"];
    ret4 = isAnd(ret4, isEqual(0, add(k7, k6)), isEqual(-5, k6));

    tapMenu("门店调出", "批量调出+");
    var json = { "客户" : "000", "明细" : [ { "货品" : r, "数量" : [ 1 ] } ],
        "goodsFieldIndex" : -2, "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f1 = new TField("接收店", TF_SC, 1, "中洲店");
    var fields = [ f1 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    var ret5 = isIn(alertMsg, "差1件");
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k8 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "M");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k9 = qr.data[0]["库存"];
    ret5 = isAnd(ret5, isEqual(0, add(k9, k8)), isEqual(-5, k8));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test170657() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "0", "数值" : [ "允许负库存", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = testSalesCuanMaPrepare();

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : r, "数量" : [ -10, 5 ] } ],
        "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "2", "数值" : [ "适用窜码销售情况", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : r, "门店" : "常青店", "颜色" : "红色", "尺码" : "S" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var k = qr.data[0]["库存"];

    var qKeys = [ "尺码" ];
    var qFields = queryGoodsStockFields(qKeys);
    changeTFieldValue(qFields["尺码"], "M");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k1 = qr.data[0]["库存"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : [ 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    saveAndAlertOk();
    tapPrompt();
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret1 = isIn(alertMsg1, "差6件");
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k3 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "S");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k2 = qr.data[0]["库存"];
    var ret2 = isAnd(isEqual(-5, add(k3, k2)), isEqual(-10, k2));

    // 按订货开单/采购退货/门店调出/紧急模式上传 都要测一遍
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : r, "数量" : [ 1 ] } ],
        "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    saveAndAlertOk();
    tapPrompt();
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret3 = isIn(alertMsg1, "差6件");
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k4 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "M");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k5 = qr.data[0]["库存"];
    ret3 = isAnd(ret3, isEqual(-5, add(k5, k4)), isEqual(-10, k4));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : r, "数量" : [ -1 ] } ],
        "goodsFieldIndex" : -2, "onlytest" : "yes" };
    editSalesBillColorSize(json);

    saveAndAlertOk();
    tapPrompt();
    var ret4 = isAnd(isIn(alertMsg, "差6件"));
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k7 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "S");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k6 = qr.data[0]["库存"];
    ret4 = isAnd(ret4, isEqual(-5, add(k7, k6)), isEqual(-10, k6));

    tapMenu("门店调出", "批量调出+");
    var json = { "客户" : "000", "明细" : [ { "货品" : r, "数量" : [ 1 ] } ],
        "goodsFieldIndex" : -2, "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f1 = new TField("接收店", TF_SC, 1, "中洲店");
    var fields = [ f1 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();
    var ret5 = isIn(alertMsg, "差6件");
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k8 = qr.data[0]["库存"];

    changeTFieldValue(qFields["尺码"], "M");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k9 = qr.data[0]["库存"];
    ret5 = isAnd(ret5, isEqual(-5, add(k9, k8)), isEqual(-10, k8));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test170658() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "2", "数值" : [ "适用窜码销售情况", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : "Aaa002", "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var k = qr.data[0]["库存"];

    var qKeys = [ "门店" ];
    var qFields = queryGoodsStockFields(qKeys);
    changeTFieldValue(qFields["门店"], "中洲店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k1 = qr.data[0]["库存"];

    if (k != 0) {
        tapMenu("采购入库", "新增入库+");
        var json = { "客户" : "Rt",
            "明细" : [ { "货品" : "Aaa002", "数量" : [ -k ] } ],
            "goodsFieldIndex" : -2 };
        editSalesBillColorSize(json);
    }

    tapMenu("货品管理", "当前库存");
    changeTFieldValue(qFields["门店"], "常青店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    k = qr.data[0]["库存"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "Aaa002", "数量" : [ 1 ] } ] };
    editSalesBillColorSize(json);
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret1 = isIn(alertMsg1, "差1件") || isIn(alertMsg2, "差1件");
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k2 = qr.data[0]["库存"];

    changeTFieldValue(qFields["门店"], "中洲店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k3 = qr.data[0]["库存"];
    var ret2 = isAnd(isEqual(0, k), !isEqual(0, k1), isEqual(0, k2), isEqual(
            k1, k3));

    // 按订货开单/采购退货/门店调出/紧急模式上传 都要测一遍
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "Aaa002", "数量" : [ 1 ] } ],
        "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    editSalesBillSave({});

    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    alertMsg2 = getArray1(alertMsgs, -2);
    var ret3 = isIn(alertMsg1, "差1件") || isIn(alertMsg2, "差1件");

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k5 = qr.data[0]["库存"];

    changeTFieldValue(qFields["门店"], "常青店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k4 = qr.data[0]["库存"];
    ret3 = isAnd(ret3, isEqual(0, k4), isEqual(k3, k5));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : "Aaa002", "数量" : [ -1 ] } ],
        "goodsFieldIndex" : -2, "onlytest" : "yes" };
    editSalesBillColorSize(json);

    editSalesBillSave({});
    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    alertMsg2 = getArray1(alertMsgs, -2);
    var ret4 = isIn(alertMsg1, "差1件") || isIn(alertMsg2, "差1件");

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k6 = qr.data[0]["库存"];

    changeTFieldValue(qFields["门店"], "中洲店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k7 = qr.data[0]["库存"];
    ret4 = isAnd(ret4, isEqual(0, k6), isEqual(k5, k7));

    tapMenu("门店调出", "批量调出+");
    var json = { "客户" : "000", "明细" : [ { "货品" : "Aaa002", "数量" : [ 1 ] } ],
        "goodsFieldIndex" : -2, "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f1 = new TField("接收店", TF_SC, 1, "中洲店");
    var fields = [ f1 ];
    setTFieldsValue(window, fields);

    editSalesBillSave({});
    debugArray(alertMsgs);
    alertMsg1 = getArray1(alertMsgs, -1);
    alertMsg2 = getArray1(alertMsgs, -2);
    var ret5 = isIn(alertMsg1, "差1件") || isIn(alertMsg2, "差1件");

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    qr = getQR();
    var k9 = qr.data[0]["库存"];

    changeTFieldValue(qFields["门店"], "常青店");
    setTFieldsValue(window, qFields);
    tapButton(window, QUERY);
    qr = getQR();
    var k8 = qr.data[0]["库存"];
    ret5 = isAnd(ret5, isEqual(0, k8), isEqual(k7, k9));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test170660() {
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "2", "数值" : [ "适用窜码销售情况", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "anewCuanMa" + getTimestamp(6);
    tapMenu("货品管理", "新增货品+");
    var keys = { "款号" : r, "名称" : "货品" + r, "颜色" : "红色,玫红", "尺码" : "M,S",
        "进货价" : 100 };
    var fields = editGoodsFields(keys, false);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    delay();
    var bt = app.mainWindow().buttons()[RETURN];
    if (!isUIAElementNil(bt) || bt.isVisible()) {
        tapReturn();
    }

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : r, "数量" : [ "", 10 ] } ],
        "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : [ "", 10 ] } ] };
    editSalesBillColorSize(json);

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();
    o = { "修改明细" : [ { "数量" : 8 } ] };
    editBillDet(o);
    tapStaticText(window, "刷卡");
    saveAndAlertOk();
    tapPrompt();
    var ret2 = isAnd(isIn(alertMsg, "库存不足"));
    tapReturn();

    tapMenu("货品管理", "当前库存");
    var keys = { "款号" : r, "门店" : "常青店", "尺码" : "M" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var k = qr.data[0]["库存"];
    var ret3 = isEqual(0, k);

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();
    o = { "修改明细" : [ { "数量" : 11 } ] };
    editBillDet(o);
    tapStaticText(window, "刷卡");
    saveAndAlertOk();
    tapPrompt();
    var ret4 = isAnd(isIn(alertMsg, "保存成功"));
    tapReturn();

    tapMenu("货品管理", "当前库存");
    tapButton(window, QUERY);
    var qr = getQR();
    var k1 = qr.data[0]["库存"];
    var ret5 = isEqual(1, k1);

    logDebug(" ret=" + ret + ", ret2=" + ret2 + ", ret3=" + ret3 + ", ret4="
            + ret4 + ", ret5=" + ret5);
    return ret && ret2 && ret3 && ret4 && ret5;
}
function test170702() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "颜色尺码模式下开单是否按颜色尺码提醒已存在的重复记录" };
    o = { "新值" : "0", "数值" : [ "默认按颜色尺码提醒", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "x001", "数量" : [ 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);
    var qr = getQRDet();
    var ret1 = isAnd(isIn(qr.data[0]["货品"], "X001"), isEqual("红色",
            qr.data[0]["颜色"]), isEqual("L", qr.data[0]["尺码"]), isEqual(1,
            qr.data[0]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret2 = isAnd(isIn(qr.data[0]["货品"], "X001"), isEqual("红色",
            qr.data[0]["颜色"]), isEqual("L", qr.data[0]["尺码"]), isEqual(1,
            qr.data[0]["数量"]), isIn(qr.data[1]["货品"], "X001"), isEqual("铁锈红",
            qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(1,
            qr.data[1]["数量"]));

    tapButton(getScrollView(-1), 1);
    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", -1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret3 = isAnd(isIn(qr.data[0]["货品"], "X001"), isEqual("红色",
            qr.data[0]["颜色"]), isEqual("L", qr.data[0]["尺码"]), isEqual(1,
            qr.data[0]["数量"]), isIn(qr.data[1]["货品"], "X001"), isEqual("铁锈红",
            qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(-1,
            qr.data[1]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret4 = isAnd(isIn(qr.data[0]["货品"], "X001"), isEqual("红色",
            qr.data[0]["颜色"]), isEqual("L", qr.data[0]["尺码"]), isEqual(1,
            qr.data[0]["数量"]), isIn(qr.data[1]["货品"], "X001"), isEqual("铁锈红",
            qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(-1,
            qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"), isEqual("红色",
            qr.data[2]["颜色"]), isEqual("XL", qr.data[2]["尺码"]), isEqual(1,
            qr.data[2]["数量"]));
    tapReturn();

    // json = { "明细" : [ { "货品" : "x001", "数量" : [ 1 ] } ], "关闭明细" : "no" };
    // editSalesBillDetColorSize(json);
    // var ret5 = isAnd(isIn(alertMsg, "相同颜色尺码已经存在"));

    //
    // logDebug(" ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3 + ",
    // ret4="
    // + ret4 + ", ret5=" + ret5);
    // return ret1 && ret2 && ret3 && ret4 && ret5;
    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170703() {
    var qo, o, ret = true;
    qo = { "备注" : "颜色尺码模式下开单是否按颜色尺码提醒已存在的重复记录" };
    o = { "新值" : "1", "数值" : [ "按款号提醒", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // var r = testSalesCompareCodePrepare();
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "x001", "数量" : [ 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);
    var qr = getQRDet();
    var ret1 = isAnd(isIn(qr.data[0]["货品"], "X001"), isEqual("红色",
            qr.data[0]["颜色"]), isEqual("L", qr.data[0]["尺码"]), isEqual(1,
            qr.data[0]["数量"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret2 = isAnd(isIn(qr.data[0]["货品"], "X001"), isEqual("红色",
            qr.data[0]["颜色"]), isEqual("L", qr.data[0]["尺码"]), isEqual(1,
            qr.data[0]["数量"]), isIn(qr.data[1]["货品"], "anewSame"), isEqual(
            "红色", qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(1,
            qr.data[1]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", 1 ] } ],
        "关闭明细" : "no" };
    editSalesBillDetColorSize(json);
    var ret3 = isAnd(isIn(alertMsg, "X001,特步夹克"));
    tapNaviLeftButton();
    qr = getQRDet();
    ret3 = isAnd(ret3, isEqual(2, qr.data.length));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", -1 ] } ],
        "关闭明细" : "no" };
    editSalesBillDetColorSize(json);
    var ret4 = isAnd(isIn(alertMsg, "X001,特步夹克"));
    tapNaviLeftButton();
    qr = getQRDet();
    ret4 = isAnd(ret4, isEqual(2, qr.data.length));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", 1 ] } ], "关闭明细" : "no" };
    editSalesBillDetColorSize(json);
    var ret5 = isAnd(isIn(alertMsg, "X001,特步夹克"));
    tapNaviLeftButton();
    qr = getQRDet();
    ret5 = isAnd(ret5, isEqual(2, qr.data.length));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ 1 ] } ], "关闭明细" : "no" };
    editSalesBillDetColorSize(json);
    var ret6 = isAnd(isIn(alertMsg, "X001,特步夹克"));
    tapNaviLeftButton();
    qr = getQRDet();
    ret6 = isAnd(ret6, isEqual(2, qr.data.length));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ "", 1 ] } ], "关闭明细" : "no" };
    editSalesBillDetColorSize(json);
    var ret7 = isAnd(isIn(alertMsg, "anewSame"));
    tapNaviLeftButton();
    qr = getQRDet();
    ret7 = isAnd(ret7, isEqual(2, qr.data.length));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ "", -1 ] } ], "关闭明细" : "no" };
    editSalesBillDetColorSize(json);
    var ret8 = isAnd(isIn(alertMsg, "anewSame"));
    tapNaviLeftButton();
    qr = getQRDet();
    ret8 = isAnd(ret8, isEqual(2, qr.data.length));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ 1 ] } ], "关闭明细" : "no" };
    editSalesBillDetColorSize(json);
    var ret9 = isAnd(isIn(alertMsg, "anewSame"));
    tapNaviLeftButton();
    qr = getQRDet();
    ret9 = isAnd(ret9, isEqual(2, qr.data.length));
    tapReturn();

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3 + ", ret4="
            + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6 + ", ret7=" + ret7
            + ", ret8=" + ret8 + ", ret9=" + ret9);
    return ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7 && ret8 && ret9;
}
function test170704() {
    var qo, o, ret = true;
    qo = { "备注" : "颜色尺码模式下开单是否按颜色尺码提醒已存在的重复记录" };
    o = { "新值" : "2", "数值" : [ "都不提醒", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // var r = testSalesCompareCodePrepare();
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "x001", "数量" : [ 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);
    var qr = getQRDet();
    var ret1 = isAnd(isIn(qr.data[0]["货品"], "X001"), isEqual("红色",
            qr.data[0]["颜色"]), isEqual("L", qr.data[0]["尺码"]), isEqual(1,
            qr.data[0]["数量"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret2 = isAnd(isIn(qr.data[0]["货品"], "X001"), isEqual("红色",
            qr.data[0]["颜色"]), isEqual("L", qr.data[0]["尺码"]), isEqual(1,
            qr.data[0]["数量"]), isIn(qr.data[1]["货品"], "anewSame"), isEqual(
            "红色", qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(1,
            qr.data[1]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret3 = isAnd(isEqual(3, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", -1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret4 = isAnd(isEqual(4, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret5 = isAnd(isEqual(5, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret6 = isAnd(isEqual(6, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ "", 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret7 = isAnd(isEqual(7, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ "", -1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret8 = isAnd(isEqual(8, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]), isIn(qr.data[7]["货品"], "anewSame"),
            isEqual("红色", qr.data[7]["颜色"]), isEqual("XL", qr.data[7]["尺码"]),
            isEqual(-1, qr.data[7]["数量"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret9 = isAnd(isEqual(9, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]), isIn(qr.data[7]["货品"], "anewSame"),
            isEqual("红色", qr.data[7]["颜色"]), isEqual("XL", qr.data[7]["尺码"]),
            isEqual(-1, qr.data[7]["数量"]), isIn(qr.data[8]["货品"], "anewSame"),
            isEqual("红色", qr.data[8]["颜色"]), isEqual("L", qr.data[8]["尺码"]),
            isEqual(1, qr.data[8]["数量"]));
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    qr = getQRDet();
    var ret10 = isAnd(isEqual(9, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]), isIn(qr.data[7]["货品"], "anewSame"),
            isEqual("红色", qr.data[7]["颜色"]), isEqual("XL", qr.data[7]["尺码"]),
            isEqual(-1, qr.data[7]["数量"]), isIn(qr.data[8]["货品"], "anewSame"),
            isEqual("红色", qr.data[8]["颜色"]), isEqual("L", qr.data[8]["尺码"]),
            isEqual(1, qr.data[8]["数量"]));
    tapReturn();

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3 + ", ret4="
            + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6 + ", ret7=" + ret7
            + ", ret8=" + ret8 + ", ret9=" + ret9 + ", ret10=" + ret10);
    return ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7 && ret8 && ret9
            && ret10;
}
function test170704_1() {
    // 采购入库
    var qo, o, ret = true;
    qo = { "备注" : "颜色尺码模式下开单是否按颜色尺码提醒已存在的重复记录" };
    o = { "新值" : "2", "数值" : [ "都不提醒", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // var r = testSalesCompareCodePrepare();
    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "rt", "明细" : [ { "货品" : "x001", "数量" : [ 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);
    var qr = getQRDet();
    var ret1 = isAnd(isIn(qr.data[0]["货品"], "X001"), isEqual("红色",
            qr.data[0]["颜色"]), isEqual("L", qr.data[0]["尺码"]), isEqual(1,
            qr.data[0]["数量"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret2 = isAnd(isIn(qr.data[0]["货品"], "X001"), isEqual("红色",
            qr.data[0]["颜色"]), isEqual("L", qr.data[0]["尺码"]), isEqual(1,
            qr.data[0]["数量"]), isIn(qr.data[1]["货品"], "anewSame"), isEqual(
            "红色", qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(1,
            qr.data[1]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret3 = isAnd(isEqual(3, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", -1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret4 = isAnd(isEqual(4, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret5 = isAnd(isEqual(5, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret6 = isAnd(isEqual(6, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ "", 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret7 = isAnd(isEqual(7, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ "", -1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret8 = isAnd(isEqual(8, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]), isIn(qr.data[7]["货品"], "anewSame"),
            isEqual("红色", qr.data[7]["颜色"]), isEqual("XL", qr.data[7]["尺码"]),
            isEqual(-1, qr.data[7]["数量"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret9 = isAnd(isEqual(9, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]), isIn(qr.data[7]["货品"], "anewSame"),
            isEqual("红色", qr.data[7]["颜色"]), isEqual("XL", qr.data[7]["尺码"]),
            isEqual(-1, qr.data[7]["数量"]), isIn(qr.data[8]["货品"], "anewSame"),
            isEqual("红色", qr.data[8]["颜色"]), isEqual("L", qr.data[8]["尺码"]),
            isEqual(1, qr.data[8]["数量"]));
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("采购入库", "按批次查");
    query();
    tapFirstText();
    qr = getQRDet();
    var ret10 = isAnd(isEqual(9, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]), isIn(qr.data[7]["货品"], "anewSame"),
            isEqual("红色", qr.data[7]["颜色"]), isEqual("XL", qr.data[7]["尺码"]),
            isEqual(-1, qr.data[7]["数量"]), isIn(qr.data[8]["货品"], "anewSame"),
            isEqual("红色", qr.data[8]["颜色"]), isEqual("L", qr.data[8]["尺码"]),
            isEqual(1, qr.data[8]["数量"]));
    tapReturn();

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3 + ", ret4="
            + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6 + ", ret7=" + ret7
            + ", ret8=" + ret8 + ", ret9=" + ret9 + ", ret10=" + ret10);
    return ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7 && ret8 && ret9
            && ret10;
}
function test170704_2() {
    // 采购订货
    var qo, o, ret = true;
    qo = { "备注" : "颜色尺码模式下开单是否按颜色尺码提醒已存在的重复记录" };
    o = { "新值" : "2", "数值" : [ "都不提醒", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // var r = testSalesCompareCodePrepare();
    tapMenu("采购订货", "新增订货+");
    var json = { "客户" : "rt", "明细" : [ { "货品" : "x001", "数量" : [ 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);
    var qr = getQRDet();
    var ret1 = isAnd(isIn(qr.data[0]["货品"], "X001"), isEqual("红色",
            qr.data[0]["颜色"]), isEqual("L", qr.data[0]["尺码"]), isEqual(1,
            qr.data[0]["订货数"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret2 = isAnd(isIn(qr.data[0]["货品"], "X001"), isEqual("红色",
            qr.data[0]["颜色"]), isEqual("L", qr.data[0]["尺码"]), isEqual(1,
            qr.data[0]["订货数"]), isIn(qr.data[1]["货品"], "anewSame"), isEqual(
            "红色", qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(1,
            qr.data[1]["订货数"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret3 = isAnd(isEqual(3, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["订货数"]),
            isIn(qr.data[1]["货品"], "anewSame"),
            isEqual("红色", qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]),
            isEqual(1, qr.data[1]["订货数"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["订货数"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", -1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret4 = isAnd(isEqual(4, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["订货数"]),
            isIn(qr.data[1]["货品"], "anewSame"),
            isEqual("红色", qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]),
            isEqual(1, qr.data[1]["订货数"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["订货数"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["订货数"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret5 = isAnd(isEqual(5, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["订货数"]),
            isIn(qr.data[1]["货品"], "anewSame"),
            isEqual("红色", qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]),
            isEqual(1, qr.data[1]["订货数"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["订货数"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["订货数"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["订货数"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret6 = isAnd(isEqual(6, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["订货数"]),
            isIn(qr.data[1]["货品"], "anewSame"),
            isEqual("红色", qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]),
            isEqual(1, qr.data[1]["订货数"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["订货数"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["订货数"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["订货数"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["订货数"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ "", 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret7 = isAnd(isEqual(7, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["订货数"]),
            isIn(qr.data[1]["货品"], "anewSame"),
            isEqual("红色", qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]),
            isEqual(1, qr.data[1]["订货数"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["订货数"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["订货数"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["订货数"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["订货数"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["订货数"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ "", -1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret8 = isAnd(isEqual(8, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["订货数"]),
            isIn(qr.data[1]["货品"], "anewSame"),
            isEqual("红色", qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]),
            isEqual(1, qr.data[1]["订货数"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["订货数"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["订货数"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["订货数"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["订货数"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["订货数"]), isIn(qr.data[7]["货品"], "anewSame"),
            isEqual("红色", qr.data[7]["颜色"]), isEqual("XL", qr.data[7]["尺码"]),
            isEqual(-1, qr.data[7]["订货数"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret9 = isAnd(isEqual(9, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["订货数"]),
            isIn(qr.data[1]["货品"], "anewSame"),
            isEqual("红色", qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]),
            isEqual(1, qr.data[1]["订货数"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["订货数"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["订货数"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["订货数"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["订货数"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["订货数"]), isIn(qr.data[7]["货品"], "anewSame"),
            isEqual("红色", qr.data[7]["颜色"]), isEqual("XL", qr.data[7]["尺码"]),
            isEqual(-1, qr.data[7]["订货数"]), isIn(qr.data[8]["货品"], "anewSame"),
            isEqual("红色", qr.data[8]["颜色"]), isEqual("L", qr.data[8]["尺码"]),
            isEqual(1, qr.data[8]["订货数"]));
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("采购订货", "按批次查");
    query();
    tapFirstText();
    qr = getQRDet();
    var ret10 = isAnd(isEqual(9, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["订货数"]),
            isIn(qr.data[1]["货品"], "anewSame"),
            isEqual("红色", qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]),
            isEqual(1, qr.data[1]["订货数"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["订货数"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["订货数"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["订货数"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["订货数"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["订货数"]), isIn(qr.data[7]["货品"], "anewSame"),
            isEqual("红色", qr.data[7]["颜色"]), isEqual("XL", qr.data[7]["尺码"]),
            isEqual(-1, qr.data[7]["订货数"]), isIn(qr.data[8]["货品"], "anewSame"),
            isEqual("红色", qr.data[8]["颜色"]), isEqual("L", qr.data[8]["尺码"]),
            isEqual(1, qr.data[8]["订货数"]));
    tapReturn();

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3 + ", ret4="
            + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6 + ", ret7=" + ret7
            + ", ret8=" + ret8 + ", ret9=" + ret9 + ", ret10=" + ret10);
    return ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7 && ret8 && ret9
            && ret10;
}
function test170704_3() {
    // 门店调出
    var qo, o, ret = true;
    qo = { "备注" : "颜色尺码模式下开单是否按颜色尺码提醒已存在的重复记录" };
    o = { "新值" : "2", "数值" : [ "都不提醒", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // var r = testSalesCompareCodePrepare();
    tapMenu("门店调出", "批量调出+");
    delay();
    var f0 = new TField("调出人", TF_AC, 0, "000", -1, 0);
    var f1 = new TField("接收店", TF_SC, 1, "中洲店");
    var fields = [ f0, f1 ];
    setTFieldsValue(window, fields);

    var json = { "明细" : [ { "货品" : "x001", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);
    var qr = getQRDet();
    var ret1 = isAnd(isIn(qr.data[0]["货品"], "X001"), isEqual("红色",
            qr.data[0]["颜色"]), isEqual("L", qr.data[0]["尺码"]), isEqual(1,
            qr.data[0]["数量"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret2 = isAnd(isIn(qr.data[0]["货品"], "X001"), isEqual("红色",
            qr.data[0]["颜色"]), isEqual("L", qr.data[0]["尺码"]), isEqual(1,
            qr.data[0]["数量"]), isIn(qr.data[1]["货品"], "anewSame"), isEqual(
            "红色", qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(1,
            qr.data[1]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret3 = isAnd(isEqual(3, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", -1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret4 = isAnd(isEqual(4, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret5 = isAnd(isEqual(5, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret6 = isAnd(isEqual(6, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ "", 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret7 = isAnd(isEqual(7, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ "", -1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret8 = isAnd(isEqual(8, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]), isIn(qr.data[7]["货品"], "anewSame"),
            isEqual("红色", qr.data[7]["颜色"]), isEqual("XL", qr.data[7]["尺码"]),
            isEqual(-1, qr.data[7]["数量"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret9 = isAnd(isEqual(9, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]), isIn(qr.data[7]["货品"], "anewSame"),
            isEqual("红色", qr.data[7]["颜色"]), isEqual("XL", qr.data[7]["尺码"]),
            isEqual(-1, qr.data[7]["数量"]), isIn(qr.data[8]["货品"], "anewSame"),
            isEqual("红色", qr.data[8]["颜色"]), isEqual("L", qr.data[8]["尺码"]),
            isEqual(1, qr.data[8]["数量"]));
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("门店调出", "按批次查");
    query();
    tapFirstText();
    qr = getQRDet();
    var ret10 = isAnd(isEqual(9, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]), isIn(qr.data[7]["货品"], "anewSame"),
            isEqual("红色", qr.data[7]["颜色"]), isEqual("XL", qr.data[7]["尺码"]),
            isEqual(-1, qr.data[7]["数量"]), isIn(qr.data[8]["货品"], "anewSame"),
            isEqual("红色", qr.data[8]["颜色"]), isEqual("L", qr.data[8]["尺码"]),
            isEqual(1, qr.data[8]["数量"]));
    tapReturn();

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3 + ", ret4="
            + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6 + ", ret7=" + ret7
            + ", ret8=" + ret8 + ", ret9=" + ret9 + ", ret10=" + ret10);
    return ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7 && ret8 && ret9
            && ret10;
}
function test170704_4() {
    // 销售订货-按订货开单
    var qo, o, ret = true;
    qo = { "备注" : "颜色尺码模式下开单是否按颜色尺码提醒已存在的重复记录" };
    o = { "新值" : "2", "数值" : [ "都不提醒", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // var r = testSalesCompareCodePrepare();
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "lt", "明细" : [ { "货品" : "x001", "数量" : [ 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);
    var qr = getQRDet();
    var ret1 = isAnd(isIn(qr.data[0]["货品"], "X001"), isEqual("红色",
            qr.data[0]["颜色"]), isEqual("L", qr.data[0]["尺码"]), isEqual(1,
            qr.data[0]["数量"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret2 = isAnd(isIn(qr.data[0]["货品"], "X001"), isEqual("红色",
            qr.data[0]["颜色"]), isEqual("L", qr.data[0]["尺码"]), isEqual(1,
            qr.data[0]["数量"]), isIn(qr.data[1]["货品"], "anewSame"), isEqual(
            "红色", qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(1,
            qr.data[1]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret3 = isAnd(isEqual(3, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret4 = isAnd(isEqual(4, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(1, qr.data[3]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret5 = isAnd(isEqual(5, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret6 = isAnd(isEqual(6, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ "", 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret7 = isAnd(isEqual(7, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ "", 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret8 = isAnd(isEqual(8, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]), isIn(qr.data[7]["货品"], "anewSame"),
            isEqual("红色", qr.data[7]["颜色"]), isEqual("XL", qr.data[7]["尺码"]),
            isEqual(1, qr.data[7]["数量"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret9 = isAnd(isEqual(9, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]), isIn(qr.data[7]["货品"], "anewSame"),
            isEqual("红色", qr.data[7]["颜色"]), isEqual("XL", qr.data[7]["尺码"]),
            isEqual(1, qr.data[7]["数量"]), isIn(qr.data[8]["货品"], "anewSame"),
            isEqual("红色", qr.data[8]["颜色"]), isEqual("L", qr.data[8]["尺码"]),
            isEqual(1, qr.data[8]["数量"]));
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售订货", "按批次查");
    query();
    tapFirstText();
    qr = getQRDet();
    var ret10 = isAnd(isEqual(9, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]), isIn(qr.data[7]["货品"], "anewSame"),
            isEqual("红色", qr.data[7]["颜色"]), isEqual("XL", qr.data[7]["尺码"]),
            isEqual(1, qr.data[7]["数量"]), isIn(qr.data[8]["货品"], "anewSame"),
            isEqual("红色", qr.data[8]["颜色"]), isEqual("L", qr.data[8]["尺码"]),
            isEqual(1, qr.data[8]["数量"]));
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    qr = getQRDet();
    var ret11 = isAnd(isEqual(9, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]), isIn(qr.data[7]["货品"], "anewSame"),
            isEqual("红色", qr.data[7]["颜色"]), isEqual("XL", qr.data[7]["尺码"]),
            isEqual(1, qr.data[7]["数量"]), isIn(qr.data[8]["货品"], "anewSame"),
            isEqual("红色", qr.data[8]["颜色"]), isEqual("L", qr.data[8]["尺码"]),
            isEqual(1, qr.data[8]["数量"]));
    saveAndAlertOk();
    tapPrompt();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    qr = getQRDet();
    var ret12 = isAnd(isEqual(9, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]), isIn(qr.data[7]["货品"], "anewSame"),
            isEqual("红色", qr.data[7]["颜色"]), isEqual("XL", qr.data[7]["尺码"]),
            isEqual(1, qr.data[7]["数量"]), isIn(qr.data[8]["货品"], "anewSame"),
            isEqual("红色", qr.data[8]["颜色"]), isEqual("L", qr.data[8]["尺码"]),
            isEqual(1, qr.data[8]["数量"]));
    tapReturn();

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3 + ", ret4="
            + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6 + ", ret7=" + ret7
            + ", ret8=" + ret8 + ", ret9=" + ret9 + ", ret10=" + ret10
            + ", ret11=" + ret11 + ", ret12=" + ret12);
    return ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7 && ret8 && ret9
            && ret10 && ret11 && ret12;
}
function test170704_5() {
    // 盘点管理
    var qo, o, ret = true;
    qo = { "备注" : "颜色尺码模式下开单是否按颜色尺码提醒已存在的重复记录" };
    o = { "新值" : "2", "数值" : [ "都不提醒", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    // var r = testSalesCompareCodePrepare();
    tapMenu("盘点管理", "新增盘点+");
    var json = { "明细" : [ { "货品" : "x001", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);
    var qr = getQRDet();
    var ret1 = isAnd(isIn(qr.data[0]["货品"], "X001"), isEqual("红色",
            qr.data[0]["颜色"]), isEqual("L", qr.data[0]["尺码"]), isEqual(1,
            qr.data[0]["数量"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret2 = isAnd(isIn(qr.data[0]["货品"], "X001"), isEqual("红色",
            qr.data[0]["颜色"]), isEqual("L", qr.data[0]["尺码"]), isEqual(1,
            qr.data[0]["数量"]), isIn(qr.data[1]["货品"], "anewSame"), isEqual(
            "红色", qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(1,
            qr.data[1]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret3 = isAnd(isEqual(3, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", "", "", -1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret4 = isAnd(isEqual(4, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ "", 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret5 = isAnd(isEqual(5, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]));

    json = { "明细" : [ { "货品" : "x001", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret6 = isAnd(isEqual(6, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ "", 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret7 = isAnd(isEqual(7, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ "", -1 ] } ],
        "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret8 = isAnd(isEqual(8, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]), isIn(qr.data[7]["货品"], "anewSame"),
            isEqual("红色", qr.data[7]["颜色"]), isEqual("XL", qr.data[7]["尺码"]),
            isEqual(-1, qr.data[7]["数量"]));

    json = { "明细" : [ { "货品" : "anewSame", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillDetColorSize(json);
    qr = getQRDet();
    var ret9 = isAnd(isEqual(9, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]), isIn(qr.data[7]["货品"], "anewSame"),
            isEqual("红色", qr.data[7]["颜色"]), isEqual("XL", qr.data[7]["尺码"]),
            isEqual(-1, qr.data[7]["数量"]), isIn(qr.data[8]["货品"], "anewSame"),
            isEqual("红色", qr.data[8]["颜色"]), isEqual("L", qr.data[8]["尺码"]),
            isEqual(1, qr.data[8]["数量"]));
    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("盘点管理", "按批次查");
    query();
    tapFirstText();
    qr = getQRDet();
    var ret10 = isAnd(isEqual(9, qr.data.length),
            isIn(qr.data[0]["货品"], "X001"), isEqual("红色", qr.data[0]["颜色"]),
            isEqual("L", qr.data[0]["尺码"]), isEqual(1, qr.data[0]["数量"]), isIn(
                    qr.data[1]["货品"], "anewSame"), isEqual("红色",
                    qr.data[1]["颜色"]), isEqual("L", qr.data[1]["尺码"]), isEqual(
                    1, qr.data[1]["数量"]), isIn(qr.data[2]["货品"], "X001"),
            isEqual("铁锈红", qr.data[2]["颜色"]), isEqual("L", qr.data[2]["尺码"]),
            isEqual(1, qr.data[2]["数量"]), isIn(qr.data[3]["货品"], "X001"),
            isEqual("铁锈红", qr.data[3]["颜色"]), isEqual("L", qr.data[3]["尺码"]),
            isEqual(-1, qr.data[3]["数量"]), isIn(qr.data[4]["货品"], "X001"),
            isEqual("红色", qr.data[4]["颜色"]), isEqual("XL", qr.data[4]["尺码"]),
            isEqual(1, qr.data[4]["数量"]), isIn(qr.data[5]["货品"], "X001"),
            isEqual("红色", qr.data[5]["颜色"]), isEqual("L", qr.data[5]["尺码"]),
            isEqual(1, qr.data[5]["数量"]), isIn(qr.data[6]["货品"], "anewSame"),
            isEqual("红色", qr.data[6]["颜色"]), isEqual("XL", qr.data[6]["尺码"]),
            isEqual(1, qr.data[6]["数量"]), isIn(qr.data[7]["货品"], "anewSame"),
            isEqual("红色", qr.data[7]["颜色"]), isEqual("XL", qr.data[7]["尺码"]),
            isEqual(-1, qr.data[7]["数量"]), isIn(qr.data[8]["货品"], "anewSame"),
            isEqual("红色", qr.data[8]["颜色"]), isEqual("L", qr.data[8]["尺码"]),
            isEqual(1, qr.data[8]["数量"]));
    tapReturn();

    logDebug(" ret1=" + ret1 + ", ret2=" + ret2 + ", ret3=" + ret3 + ", ret4="
            + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6 + ", ret7=" + ret7
            + ", ret8=" + ret8 + ", ret9=" + ret9 + ", ret10=" + ret10);
    return ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7 && ret8 && ret9
            && ret10;
}
function test170715() {
    colorSize = "yes";
    tapMenu("销售开单", "开  单+");
    var r = "anewkhao1" + randomWord(false, 6);
    var r1 = "1" + getRandomInt(100);
    var o = { "款号" : r, "名称" : r, "颜色" : "红色,玫红", "尺码" : "M,S", "进货价" : r1,
        "零批价" : r1, "打包价" : r1 };
    editQuickAddGoods(o);

    var qr = getQRDet();
    var ret = isEqual(0, qr.data.length);

    var json = { "客户" : "lt", "明细" : [ { "货品" : r, "数量" : [ 1 ] } ] };
    editSalesBillColorSize(json);

    qr = json["明细值"];
    var ret1 = isIn(qr.data[0]["货品"], r);

    tapMenu("销售开单", "按批次查");
    query();
    var qr1 = getQR();
    tapFirstText();
    qr = getQRDet();
    ret1 = isAnd(ret1, isAqualOptime(getOpTime(), qr1.data[0]["操作日期"]),
            isEqual(1, qr1.data[0]["数量"]), isIn(qr.data[0]["货品"], r), isEqual(
                    qr.data[0]["数量"], 1));
    tapReturn();

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    qr = getQR();

    tapFirstText();
    o = { "款号" : r, "名称" : r, "颜色" : "红色,玫红", "尺码" : "S,M", "进货价" : r1,
        "零批价" : r1, "打包价" : r1, "产品折扣" : 1, "计量单位" : "件", "仓位" : "默认",
        "最小库存" : "0", "最大库存" : "0", "允许退货" : "是", "门店" : "常青店", "装箱数" : "0" };
    fields = editGoodsFields(o, true);
    var ret2 = isAnd(isEqual(r, qr.data[0]["款号"]),
            isEqual(r, qr.data[0]["名称"]), checkShowFields(getScrollView(-1),
                    fields));
    tapReturn();

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170715_1() {
    colorSize = "yes";
    // 采购入库
    tapMenu("采购入库", "新增入库+");
    var r = "anewkh" + randomWord(false, 6);
    var r1 = "1" + getTimestamp(3);
    var o = { "款号" : r, "名称" : r, "颜色" : "红色,玫红", "尺码" : "M,S", "进货价" : r1,
        "零批价" : r1, "打包价" : r1 };
    editQuickAddGoods(o);

    var json = { "明细" : [ { "货品" : r, "数量" : [ 1 ] } ], "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    qr = json["明细值"];
    var ret1 = isIn(qr.data[0]["货品"], r);

    tapMenu("采购入库", "按批次查");
    query();
    var qr1 = getQR();
    tapFirstText();
    qr = getQRDet();
    ret1 = isAnd(ret1, isAqualOptime(getOpTime(), qr1.data[0]["操作日期"]),
            isEqual(1, qr1.data[0]["总数"]), isIn(qr.data[0]["货品"], r), isEqual(
                    qr.data[0]["数量"], 1));

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    qr = getQR();

    tapFirstText();
    o = { "款号" : r, "名称" : r, "颜色" : "红色,玫红", "尺码" : "S,M", "进货价" : r1,
        "零批价" : r1, "打包价" : r1, "产品折扣" : 1, "计量单位" : "件", "仓位" : "默认",
        "最小库存" : "0", "最大库存" : "0", "允许退货" : "是", "门店" : "常青店", "装箱数" : "0" };
    fields = editGoodsFields(o, true);
    var ret2 = isAnd(isEqual(r, qr.data[0]["款号"]),
            isEqual(r, qr.data[0]["名称"]), checkShowFields(getScrollView(-1),
                    fields));
    tapReturn();

    logDebug(", ret1=" + ret1 + ", ret2=" + ret2);
    return ret1 && ret2;
}
function test170715_2() {
    colorSize = "yes";
    // 采购订货
    tapMenu("采购订货", "新增订货+");
    var r = "anewkh" + randomWord(false, 6);
    var r1 = "1" + getTimestamp(3);
    var o = { "款号" : r, "名称" : r, "颜色" : "红色,玫红", "尺码" : "M,S", "进货价" : r1,
        "零批价" : r1, "打包价" : r1 };
    editQuickAddGoods(o);

    var o = { "客户" : "Rt" };
    editSalesBillCustomer(o);

    var json = { "明细" : [ { "货品" : r, "数量" : [ 1 ] } ], "goodsFieldIndex" : -2 };
    editSalesBillColorSize(json);

    qr = json["明细值"];
    var ret1 = isIn(qr.data[0]["货品"], r);

    tapMenu("采购订货", "按批次查");
    query();
    var qr1 = getQR();
    tapFirstText();
    qr = getQRDet();
    ret1 = isAnd(ret1, isAqualOptime(getOpTime(), qr1.data[0]["操作日期"]),
            isEqual(1, qr1.data[0]["总数"]), isIn(qr.data[0]["货品"], r), isEqual(
                    qr.data[0]["订货数"], 1));

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    qr = getQR();

    tapFirstText();
    o = { "款号" : r, "名称" : r, "颜色" : "红色,玫红", "尺码" : "S,M", "进货价" : r1,
        "零批价" : r1, "打包价" : r1, "产品折扣" : 1, "计量单位" : "件", "仓位" : "默认",
        "最小库存" : "0", "最大库存" : "0", "允许退货" : "是", "门店" : "常青店", "装箱数" : "0" };
    fields = editGoodsFields(o, true);
    var ret2 = isAnd(isEqual(r, qr.data[0]["款号"]),
            isEqual(r, qr.data[0]["名称"]), checkShowFields(getScrollView(-1),
                    fields));
    tapReturn();

    logDebug(", ret1=" + ret1 + ", ret2=" + ret2);
    return ret1 && ret2;
}
function test170716() {
    colorSize = "yes";
    tapMenu("销售开单", "开  单+");
    var r = "anewkhao1" + randomWord(false, 6);
    var r1 = "1" + getTimestamp(3);
    tapButton(window, GOODS);
    tapButton(getPop(), OK);
    tapPrompt();
    var ret = isIn(alertMsg, "款号或名称不能为空");

    var o = { "款号" : r };
    var fields = editQuickAddGoodsFields(o);
    setTFieldsValue(getPopView(), fields);
    delay();
    tapButton(getPop(), OK);
    tapPrompt();
    var ret1 = isIn(alertMsg, "款号或名称不能为空");

    o = { "名称" : r };
    var fields = editQuickAddGoodsFields(o);
    setTFieldsValue(getPopView(), fields);
    delay();
    tapButton(getPop(), OK);
    tapPrompt();
    var ret2 = isIn(alertMsg, "颜色或尺码不能为空");

    o = { "颜色" : "红色,玫红" };
    var fields = editQuickAddGoodsFields(o);
    setTFieldsValue(getPopView(), fields);
    delay();
    tapButton(getPop(), OK);
    tapPrompt();
    var ret2 = isIn(alertMsg, "颜色或尺码不能为空");

    o = { "尺码" : "S,M", "进货价" : r1, "零批价" : r1, "打包价" : r1 };
    var fields = editQuickAddGoodsFields(o);
    setTFieldsValue(getPopView(), fields);
    delay();
    tapButton(getPop(), OK);
    tapButton(getPop(), CLOSE);
    tapReturn();

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    var qr = getQR();
    tapFirstText();
    o = { "款号" : r, "名称" : r, "颜色" : "红色,玫红", "尺码" : "S,M", "进货价" : r1,
        "零批价" : r1, "打包价" : r1, "产品折扣" : 1, "计量单位" : "件", "仓位" : "默认",
        "最小库存" : "0", "最大库存" : "0", "允许退货" : "是", "门店" : "常青店", "装箱数" : "0" };
    fields = editGoodsFields(o, true);
    var ret3 = isAnd(isEqual(r, qr.data[0]["款号"]),
            isEqual(r, qr.data[0]["名称"]), checkShowFields(getScrollView(-1),
                    fields));
    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3);
    return ret && ret1 && ret2 && ret3;
}
function test170717() {
    colorSize = "yes";
    tapMenu("销售开单", "开  单+");
    var r = "anewkhao1" + randomWord(false, 8);
    var r1 = "1" + getTimestamp(3);
    var r2 = "a" + getTimestamp(3);
    tapButton(window, GOODS);
    var o = { "款号" : r, "名称" : r, "颜色" : "红色,玫红", "尺码" : "S,M", "进货价" : r1,
        "零批价" : r2 };
    var fields = editQuickAddGoodsFields(o);
    setTFieldsValue(getPopView(), fields);
    delay();
    tapButton(getPop(), OK);
    var ret = isAnd(isIn(alertMsg, "价格错误"), !isIn(alertMsg, "启用了价格验证"));
    tapButton(getPop(), CLOSE);
    tapReturn();

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    var qr = getQR();
    var ret1 = isEqual(0, qr.data.length);

    logDebug("ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170719() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码表", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "8", "数值" : [ "适用于童装", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "tz002", "数量" : [ 0, 0, 0, 0, 0, 0, 1000 ] } ] };
    editSalesBillColorSize(json);

    var qr = json["明细值"];
    var ret = isAnd(isEqual(1000, qr.data[6]["手数"]), isEqual(6000,
            qr.data[6]["数量"]));

    tapMenu("销售开单", "按批次查");
    query();
    qr = getQR();
    tapFirstText();
    var qr1 = getQRDet();
    tapReturn();

    var ret1 = isAnd(isEqual(6000, qr.data[0]["数量"]), isEqual(1000,
            qr1.data[6]["手数"]));

    logDebug(" ret=" + ret + ", ret1=" + ret1);
    return ret && ret1;
}
function test170733() {
    // 全局参数：非总经理开单时是否允许修改折扣：默认不允许，开单模式：客户折扣、产品折扣、童装+产品折扣，产品折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单时是否允许修改折扣" };
    o = { "新值" : "0", "数值" : [ "默认不允许", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "0.9" + getTimestamp(2);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x003", "数量" : [ 10 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var o = { "修改明细" : [ { "折扣" : r } ] };
    editBillDet(o);
    editSalesBillSave({});
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret1 = isIn(alertMsg1, "保存成功") || isIn(alertMsg1, "保存成功");

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x003", "数量" : [ 10 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);
    o = { "修改明细" : [ { "折扣" : r } ] };
    editBillDet(o);
    editSalesBillSave({});
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret2 = isIn(alertMsg1, "保存成功") || isIn(alertMsg1, "保存成功");

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    r = 0.9 + getTimestamp(2);
    o = { "修改明细" : [ { "折扣" : r } ] };
    editBillDet(o);
    editSalesBillSave({});
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret3 = isIn(alertMsg1, "保存成功") || isIn(alertMsg1, "保存成功");

    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x003", "数量" : [ 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);
    r = 0.9 + getTimestamp(2);
    o = { "修改明细" : [ { "折扣" : r } ] };
    editBillDet(o);
    editSalesBillSave({});
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret4 = isIn(alertMsg1, "保存成功") || isIn(alertMsg1, "保存成功");

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x003", "数量" : [ 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);
    r = 0.9 + getTimestamp(2);
    o = { "修改明细" : [ { "折扣" : r } ] };
    editBillDet(o);
    editSalesBillSave({});
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret5 = isIn(alertMsg1, "保存成功") || isIn(alertMsg1, "保存成功");

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    r = 0.9 + getTimestamp(2);
    o = { "修改明细" : [ { "折扣" : r } ] };
    editBillDet(o);
    editSalesBillSave({});

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret6 = isIn(alertMsg1, "保存成功") || isIn(alertMsg1, "保存成功");

    qo = { "备注" : "开单模式" };
    o = { "新值" : "19", "数值" : [ "产品折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x003", "数量" : [ 1, 0, 1 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);
    r = "0.9" + getTimestamp(2);
    o = { "修改明细" : [ { "折扣" : r } ] };
    editBillDet(o);
    editSalesBillSave({});
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret7 = isIn(alertMsg1, "保存成功") || isIn(alertMsg1, "保存成功");

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "x003", "数量" : [ 10 ] } ],
        "onlytest" : "yes" };
    editSalesBillColorSize(json);
    r = "0.9" + getTimestamp(2);
    o = { "修改明细" : [ { "折扣" : r } ] };
    editBillDet(o);
    editSalesBillSave({});
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret8 = isIn(alertMsg1, "保存成功") || isIn(alertMsg1, "保存成功");

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    r = 0.9 + getTimestamp(2);
    o = { "修改明细" : [ { "折扣" : r } ] };
    editBillDet(o);
    editSalesBillSave({});

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret9 = isIn(alertMsg1, "保存成功") || isIn(alertMsg1, "保存成功");

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6
            + ", ret7=" + ret7 + ", ret8=" + ret8 + ", ret9=" + ret9);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7 && ret8
            && ret9;
}
function test170735() {
    // 全局参数：非总经理开单时是否允许修改折扣：允许，开单模式：客户折扣、产品折扣、童装+产品折扣，产品折扣+代收
    var qo, o, ret = true;
    qo = { "备注" : "开单时是否允许修改折扣" };
    o = { "新值" : "1", "数值" : [ "允许" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = "0.9" + getTimestamp(2);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : [ 10 ], "折扣" : r } ] };
    editSalesBillColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret1 = isIn(alertMsg1, "保存成功") || isIn(alertMsg1, "保存成功");

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "k300", "数量" : [ 10 ], "折扣" : r } ] };
    editSalesBillColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret2 = isIn(alertMsg1, "保存成功") || isIn(alertMsg1, "保存成功");

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    o = { "修改明细" : [ { "折扣" : r } ] };
    editBillDet(o);
    editSalesBillSave({});
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret3 = isIn(alertMsg1, "保存成功") || isIn(alertMsg1, "保存成功");

    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : [ 1 ], "折扣" : r } ] };
    editSalesBillColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret4 = isIn(alertMsg1, "保存成功") || isIn(alertMsg1, "保存成功");

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "k300", "数量" : [ 1 ], "折扣" : r } ] };
    editSalesBillColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret5 = isIn(alertMsg1, "保存成功") || isIn(alertMsg1, "保存成功");

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    r = 0.9 + getTimestamp(2);
    var o = { "修改明细" : [ { "折扣" : r } ] };
    editBillDet(o);
    editSalesBillSave({});

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret6 = isIn(alertMsg1, "保存成功") || isIn(alertMsg1, "保存成功");

    qo = { "备注" : "开单模式" };
    o = { "新值" : "19", "数值" : [ "产品折扣+代收", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    r = "0.9" + getTimestamp(2);
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : [ 1, 0, 1 ], "折扣" : r } ] };
    editSalesBillColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret7 = isIn(alertMsg1, "保存成功") || isIn(alertMsg1, "保存成功");

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "k300", "数量" : [ 10 ], "折扣" : r } ] };
    editSalesBillColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret8 = isIn(alertMsg1, "保存成功") || isIn(alertMsg1, "保存成功");

    tapMenu("销售开单", "按订货开单");
    query();
    tapFirstText();
    r = 0.9 + getTimestamp(2);
    o = { "修改明细" : [ { "折扣" : r } ] };
    editBillDet(o);
    editSalesBillSave({});

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var alertMsg2 = getArray1(alertMsgs, -2);
    var ret9 = isIn(alertMsg1, "保存成功") || isIn(alertMsg1, "保存成功");

    logDebug(" ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6
            + ", ret7=" + ret7 + ", ret8=" + ret8 + ", ret9=" + ret9);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7 && ret8
            && ret9;
}
function test170749() {

}