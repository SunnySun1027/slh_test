//JinXinhua <79202792 at qq.com> 20150904
//测试套具，集合测试用例
//货品只要不使用两个尺码组，则颜色尺码和尺码头部模式通用  eg:agc001、002、004（都为衣服尺码）
//帐套autotest1(上下级)  autotest1Branch(分店) 
//7.27起添加accessibilityLabel
//nocol000~015 均色均码超长订单用 均色均码价格随便设置 
//kh000~015 颜色尺码/尺码表头超长订单用 kh000需要有16种以上颜色 尺码组全选择衣服尺码

#import "all.js"
#import "testcase/goods/editBill.js"

// #import "lib/Msg_EN.js"
// #import "/Users/xukeqiang/Documents/slh_test/suite1.js"
// #import "/Users/sunway/Documents/slh_test/suite1.js"
// #import "/Users/dlsoft_dev_4/Documents/slh_test/suite1.js"
// 总经理
function test000All() {
 colorSize = "head";
    debug = true;
// ipadVer = "7.27";//
 var caseName="测试用例";
// TITLE_SXE = getTitleSXE();//新综合汇总 列表标题
// testCheckMenuAll();//菜单检查，跑用例前先跑一遍

// run(caseName, "setSizeHeadParams_1");//
 run(caseName, "test220112");//
}   
function onlyTest(){
// UIATarget.localTarget().logElementTree();
// UIATarget.localTarget().deactivateAppForDuration(10);
// target.flickFromTo({ x:515, y:238 }, {x:515, y:197})
// delay();
   try{  
// var s1=getQRDet().stock;
// debugObject(s1[0]);
// test220110();
    
      return test220111();
// target.captureScreenWithName("test");
   }catch(e){
 UIATarget.localTarget().logElementTree();
      logWarn(e);
   }
// finally{

// }
 // debugObject(gCache,"gCache");
   return true;
}
//
function loginGoodsParams001(){
    var p1 = {"角色":"总经理","帐套":"autotest1"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("均色均码/省代价格模式/价格模式2", "setGoodsParams001");
       logout();
    }
}

// 基础数据的准备
function setBasicSetUpAll(){
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testBasicSetUpAll();
       logout();
    }
}

// 一些基本功能的验证 涉及所有模块
function testCollect(){
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
       run("一级界面,查询条件日期从，日期到验证", "testDeadlineCheck");
       logout();
    }  
}

// 新综合汇总接口
// 可用setGoods001Params
function loginSASynthesisParams(){
  var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      run("新综合汇总接口参数设置", "setSASynthesisParams");
     logout();
  }
}

function loginSASynthesisAll() {
  var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testSASynthesisAll();
     logout();
  }
}

// 中洲店总经理登陆，为常青店准备数据
function login200GoodsPrepare(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        UIALogger.logStart("数据准备");
        testGoodsPrepare001();
        UIALogger.logPass("数据准备完成");
       logout();
    }
  }

// 翻页/排序/汇总/条件查询/清除/下拉框/数据
function login000Goods001() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testGoods001();
     logout();
  }
}

// 均色均码 省代价格模式
function login000Goods002() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testGoods002();
     logout();
  }
}

function loginGoodsParams002(){
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        run("均色均码/默认价格模式", "setGoodsParams002");
       logout();
    }
}
// 默认价格模式
function login000Goods003() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testGoods003();
     logout();
  }
}
function login200Goods003() {
    var p1 = {"角色":"总经理"};
  var ok = login("200","000000",p1);
  if( ok ) {
      test200Goods003();
     logout();
  }
}


// 中洲店总经理登陆，为常青店准备数据
function login200CustomerPrepare(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        UIALogger.logStart("数据准备");
        testCustomerPrepare001();
        UIALogger.logPass("数据准备完成");
       logout();
    }
  }

// 翻页/排序/汇总/条件查询/清除/下拉框/数据
function login000Customer001() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testCustomer001();
     logout();
  }
}

//
function login000Customer002() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testCustomer002();
     logout();
  }
}

// 翻页/排序/汇总/条件查询/清除/下拉框/数据
function login000Purchase001() {
   var p1 = {"角色":"总经理"};
   var ok = login("000","000000",p1);
   if( ok ) {
        testPurchase001();      
       logout();
   }
}

// 中洲店总经理登陆，为常青店准备数据
function login200PurchasePrepare(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        UIALogger.logStart("数据准备");
        testPurchasePrepare002();
        UIALogger.logPass("数据准备完成");     
       logout();
    }
  }

//
function login000Purchase002() {
   var p1 = {"角色":"总经理"};
   var ok = login("000","000000",p1);
   if( ok ) {
       testPurchase002();    
       logout();
   }
}

// 翻页/排序/汇总/条件查询/清除/下拉框/数据
function  login000PurchaseOrder001() {
  var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testPurchaseOrder001();
      logout();
  }
}

function  login000PurchaseOrder002() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testPurchaseOrder002();
        logout();
    }
  }

// 中洲店总经理验证门店调出
function login200ShopOut001(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
// run("【往来管理-积分查询】数据验证", "test110036_2");
        testShopOut001();    
       logout();
    }   
}

function login200ShopOut003(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        testShopOut003();    
       logout();
    }   
}

// 常青店总经理验证门店调入
function login000ShopIn001(){
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testShopIn001();    
       logout();
    }   
}

// 中洲店总经理验证门店调出 调拨需要密码验证
function login200ShopOut002(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        UIALogger.logStart("设置参数");
        ok = testShopOutParams01();
        if (ok) {
            UIALogger.logPass("设置参数" + ",通过");
            testShopOut002();   
        } else {
            UIALogger.logFail("设置参数" + ",失败");
        }        
       logout();
    }
}

// 常青店总经理验证门店调入
function login000ShopIn002(){
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testShopIn002(); 
        UIALogger.logStart("设置参数");
        ok = testShopOutParams02();
        if (ok) {
            UIALogger.logPass("设置参数" + ",通过");
        } else {
            UIALogger.logFail("设置参数" + ",失败");
        }    
       logout();
    }   
}

// 中洲店总经理登陆，为常青店准备数据
function login200SalesOrderPrepare(){
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        UIALogger.logStart("数据准备");
        testSalesOrderPrepare();
        UIALogger.logPass("数据准备完成");
       logout();
    }
  }

// 翻页/排序/汇总/条件查询/清除/下拉框
function login000SalesOrder001() {
  var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
      testSalesOrder001();
      logout();
  }
}

function login000SalesOrder002() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSalesOrder002();
        logout();
    }
  }

// 统计分析 中洲店数据准备
function login200StatisticAnalysisPrepare() {
    var p1 = {"角色":"总经理"};
    var ok = login("200","000000",p1);
    if( ok ) {
        UIALogger.logStart("数据准备");
        testStatisticAnalysisPrepare();  
        UIALogger.logPass("数据准备完成");
        logout();
    }
 }
// 统计分析
function login000StatisticAnalysis001() {
   var p1 = {"角色":"总经理"};
   var ok = login("000","000000",p1);
   if( ok ) {
       testStatisticAnalysis001();   
       logout();
   }
}

// 统计分析
function login000SAProfit() {
   var p1 = {"角色":"总经理"};
   var ok = login("000","000000",p1);
   if( ok ) {
       textFin_price_base();   
       logout();
   }
}
// 统计图表
function login000StatisticPicture001() {
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testStatisticPictureAll(); 
        logout();
    }
 }
// 财务员
function loginTreasurer001() {
    var p1 = {"角色":"财务员"};
  var ok = login("001","000000",p1);
  if( ok ) {
      testTreasurer001All();
     logout();
  }
}
// 仓管员是否可以根据吊牌价生成价格 为 默认不需要
function loginStoreKeeper002_1(){
    var p1 = {"角色":"仓管员"};
    var ok = login("002","000000",p1);
    if( ok ) {
        testStoreKeeper002_1();
       logout();
    }   
}

// 店长登陆的一些用例
function loginShopkeeper004() {
    var p1 = {"角色":"店长"};
  var ok = login("004","000000",p1);
  if( ok ) {
      testShopkeeper004All();
     logout();
  }
}
function login004_000Prepare() {
    var p1 = {"角色":"店长"};
  var ok = login("004","000000",p1);
  if( ok ) {
     test004_000Prepare();
     logout();
  }
}
function login004_000() {
    var p1 = {"角色":"总经理"};
  var ok = login("000","000000",p1);
  if( ok ) {
     test004_000();
     logout();
  }
}
// 仓库店店长登陆验证 绑定仓库为文一店
function loginShopkeeper104() {
    var p1 = {"角色":"店长"};
  var ok = login("104","000000",p1);
  if( ok ) {
      test104();
     logout();
  }
}
// 开单员
function loginBillClerk005_1() {
 var p1 = {"角色":"开单员"};
var ok = login("005","000000",p1);
if( ok ) {
   testBillClerk005_1();
  logout();
 }
}

// 仓管员是否可以根据吊牌价生成价格 为 支持,部分客户需要
function loginGoodsParams003(){
    var p1 = {"角色":"总经理"};
    var ok = login("000","000000",p1);
    if( ok ) {
        setGoodsParams003();
       logout();
    }   
}

// 仓管员是否可以根据吊牌价生成价格 为 支持,部分客户需要
function loginStoreKeeper002_2(){
    var p1 = {"角色":"仓管员"};
    var ok = login("002","000000",p1);
    if( ok ) {
        testStoreKeeper002_2();
       logout();
    }   
}
function loginBillClerk005_2() {
    var p1 = {"角色":"开单员"};
   var ok = login("005","000000",p1);
   if( ok ) {
      testBillClerk005_2();
     logout();
    }
}
// 尺码表头 参数1+开单2+省代
function loginSizeHeadParams001(){
    var p1 = {"角色":"总经理","帐套":"autotest1"};
    var ok = login("000","000000",p1);
    if( ok ) {
        setSizeHeadParams_1();
      logout();
     }   
}
// 尺码表头 中洲店总经理登陆
function loginSizeHead001_shop2(){
    var p1 = {"角色":"总经理","帐套":"autotest1"};
    var ok = login("200","000000",p1);
    if( ok ) {
        testSizeHead001_shop2();
      logout();
     }   
}
// 尺码表头 常青店总经理登陆 得先跑中洲店的
function loginSizeHead001_shop1(){
    var p1 = {"角色":"总经理","帐套":"autotest1"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testSizeHead001_shop1();
      logout();
     }   
}
// 尺码表头 盘点部分，放到suite2跑
// function loginSizeHeadCheck(){
// var p1 = {"角色":"总经理"};
// var ok = login("000","000000",p1);
// if( ok ) {
// testSizeHeadCheck();
// logout();
// }
// }
// 客户分店
function loginCustBranch001(){
    var p1 = {"角色":"总经理","帐套":"autotest1Branch"};
    var ok = login("000","000000",p1);
    if( ok ) {
        testCustBranch001();
      logout();
     }   
}




// 检验开单时间
function testBillTimes(){
    var arr=[],msg;
    var jo = { "客户" : "xw" , "明细" : [ { "货品" : "3035", "数量" : 30 } ],"onlytest":"yes"};
    var gCache = {};
    var o1 = { "是否打印" : "打印(客户用)" };
    setValueToCache(ALERT_MSG_KEYS, o1);
    tapMenu1("销售开单");
    for(var i=0;i<20;i++){
        var t1 = getTimestamp();
        tapMenu2(ADDBILL);   
        editSalesBill(jo, colorSize); 
        var t=testSave();
        var t2=getTimestamp();
        msg="保存耗时"+t+"  开单耗时"+(t2-t1);
        arr.push(msg);
    }
    debugObject(arr);
    return true;
}
function testSave() {
    var t1 = getTimestamp();
    saveAndAlertOk();
    waitUntilAlertInvisible();
    tapKeyboardHide();
    tapReturn();
    var cond = "window.buttons()['按批次查'].isVisible()";
    waitUntil(cond);
    var t2=getTimestamp();
    return t2-t1;
}