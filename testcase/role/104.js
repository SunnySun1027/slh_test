//luxingxin <52619481 at qq.com> 20160113

function testShopkeeper004All() {
    run("【往来管理-客户查询】客户查询->消费明细_权限验证", "test110002_1");
    run("【往来管理】店长查看客户门店帐", "test110031_110032");

    run("【销售订货—按批次查】更多-查看修改日志", "test160011_1");
    
    run("【统计分析—综合汇总】不同角色能查看到的门店", "test190100_2");
    
}