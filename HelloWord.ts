class XiaoJieJie {
    name: string;
    age: number;
    constructor (name: string, age: number) {
        this.name = name
        this.age = age
    }
    say (): void {
        console.log('小哥哥好')
    }
}
let jiejie: XiaoJieJie = new XiaoJieJie('范冰冰', 18)
console.log(jiejie)
jiejie.say()

class XiaoJieJie2 {
    public sex: string
    protected name: string
    private age: number
    public constructor (sex: string, name: string, age: number) {
        this.sex = sex
        this.name = name
        this.age = age
    }
    public sayHello () {
        console.log('小哥哥好')
    }
    protected sayLove () {
        console.log('我爱你')
    }
}

var jiejie2: XiaoJieJie2 = new XiaoJieJie2('女', '热巴', 22)

console.log(jiejie2.sex)
// console.log(jiejie2.name)   //报错
// console.log(jiejie2.age)    //报错
jiejie2.sayHello()
// jiejie2.sayLove()    //报错

interface Husband {
    sex: string
    interest: string
    maiBaoBao?: Boolean
}
let myhusband: Husband = { sex: '男', interest: '看书、作家务', maiBaoBao: true }
console.log(myhusband)

interface SearchMan {
    (source: string, subString: string): boolean
}

let mySearch: SearchMan = (source: string, subString: string): boolean => {
    let flag = source.search(subString)
    return (flag != -1)
}

console.log(mySearch('高、富、帅、德', '胖')) //false


namespace shuaiGe {
    export class Dehua {
        public name: string = '刘德华'
        talk () {
            console.log('我是帅哥刘德华')
        }
    }
}

namespace bajie {
    export class Dehua {
        public name: string = '马德华'
        talk () {
            console.log('我是二师兄马德华')
        }
    }
}

let dehua1: shuaiGe.Dehua = new shuaiGe.Dehua()
let dehua2: shuaiGe.Dehua = new bajie.Dehua()
dehua1.talk()