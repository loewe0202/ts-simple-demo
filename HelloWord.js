"use strict";
var XiaoJieJie = /** @class */ (function () {
    function XiaoJieJie(name, age) {
        this.name = name;
        this.age = age;
    }
    XiaoJieJie.prototype.say = function () {
        console.log('小哥哥好');
    };
    return XiaoJieJie;
}());
var jiejie = new XiaoJieJie('范冰冰', 18);
console.log(jiejie);
jiejie.say();
var XiaoJieJie2 = /** @class */ (function () {
    function XiaoJieJie2(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    XiaoJieJie2.prototype.sayHello = function () {
        console.log('小哥哥好');
    };
    XiaoJieJie2.prototype.sayLove = function () {
        console.log('我爱你');
    };
    return XiaoJieJie2;
}());
var jiejie2 = new XiaoJieJie2('女', '热巴', 22);
console.log(jiejie2.sex);
// console.log(jiejie2.name)   //报错
// console.log(jiejie2.age)    //报错
jiejie2.sayHello();
var myhusband = { sex: '男', interest: '看书、作家务', maiBaoBao: true };
console.log(myhusband);
var mySearch = function (source, subString) {
    var flag = source.search(subString);
    return (flag != -1);
};
console.log(mySearch('高、富、帅、德', '胖')); //false
var shuaiGe;
(function (shuaiGe) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = '刘德华';
        }
        Dehua.prototype.talk = function () {
            console.log('我是帅哥刘德华');
        };
        return Dehua;
    }());
    shuaiGe.Dehua = Dehua;
})(shuaiGe || (shuaiGe = {}));
var bajie;
(function (bajie) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = '马德华';
        }
        Dehua.prototype.talk = function () {
            console.log('我是二师兄马德华');
        };
        return Dehua;
    }());
    bajie.Dehua = Dehua;
})(bajie || (bajie = {}));
var dehua1 = new shuaiGe.Dehua();
var dehua2 = new bajie.Dehua();
dehua1.talk();
