//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例

#import "all.js"


// 总经理
function test000All() {
	debug = true;
// var ok = login("000","000000");
// if( ok ) {
// testParamAll();
// testBasicSetUpAll();
// testWanLaiCustomerAll();
// testGoodsGoodsAll();
// testPurchaseAll();
//	testPurchase002();  
// testPurchase001();
// testPurchaseOrder001();
// testPurchaseOrderAll();
// testShopInAll();
// testShopIn001();
// testShopOutAll();
// testShopOut001();
// testSalesOrderAll();
// testCheckAll();
// testCheck001();
// testSalesNoColorSizeAll();
// testSalesNoColorSizeElseAll();
// testSalesNoColorSizeElse001();
//	run("【销售开单－开单】客户输入检查【字母】/客户输入检查【汉字】", "test170040_170041");
//	run("【销售开单－开单】客户输入检查【字母】/客户输入检查【汉字】", "test170044");
//	testSalesColorSizeAll();
//	testSalesColorSize001();
//	testSalesColorSize002();

//	  run("【销售开单－开单】收款方式汇总检查-组合", "testCs170051");//
//    run("【销售开单－开单】核销（客户余款）", "testCs170054");//
//    run("【销售开单－开单】核销（客户欠款）", "testCs170055");//
//    run("【销售开单－开单】点击开单界面其它按钮后再去点核销按钮", "testCs170057");//
	
//	run("【销售开单－开单】客户新增（不选择适用价格检查）", "testCs170063");
//    run("【销售开单-开单】检查核销", "testCs170065_1");
//    run("【销售开单-开单】检查核销", "testCs170065_2");
    run("【销售开单-开单】检查核销", "testCs170065_3");//
//    run("【销售开单-开单】检查核销", "testCs170065_4");
//    run("【销售开单-开单】检查核销", "testCs170065_5");
    
//	    testStatisticPictureAll();
//	     testSystem001();
// logout();

}


function setSales001Params() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("均色均码/开单模式2", "setIgnorecolorsize_1Params");
        logout();
    }
}
function test000SalesNoColorSizeElse001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesNoColorSizeElse001();
        
        logout();
    }
}
function test000Check001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testCheck001();
        
        logout();
    }
}
// 采购入库
 function test000Purchase001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
         testPurchase001();
        
        logout();
    }
 }
// 销售开单
 function test000SalesNoColorSizeElse001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesNoColorSizeElse001();
        
        logout();
    }
 }
// 盘点管理
 function test000Check001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testCheck001();
        
        logout();
    }
 }
function test001All() {
    var p1 = {"角色":"财务员","门店":"常青店"};
    var ok = login("001","000000",p1);
    if( ok ) {
// testCheckMenuAll();
        logout();
    }
}

function test004All() {
    var p1 = {"角色":"店长"};
  var ok = login("004","000000",p1);
  if( ok ) {
// testCheckMenuAll();
     logout();
  }
}