/**
 * D之一族构造函数
 * */
class FamilyD {
    constructor() {
        this.middleName = 'D'
        this.say = function () {
            console.log(`${this.familyName} · ${this.middleName} · ${this.name} `)
        }
    }
}

/**
 * 卡普、龙、路飞构造函数
 * */
class Garp extends FamilyD {
    constructor(props) {
        super(props)
        this.familyName = 'Monkey'
        this.name = 'Gary'
    }
}

class Dragon extends Garp {
    constructor(props) {
        super(props)
        this.name = 'Dragon'
    }
}

class Luffy extends Dragon {
    constructor(props) {
        super(props)
        this.name = 'Luffy'
    }
}

/**
 * 实例化卡普、龙、路飞
 * */
let garp = new Garp()
let dragon = new Dragon()
let luffy = new Luffy()

/**
 * 执行D之一族say方法
 * */
garp.say() // Monkey · D · Gary
dragon.say() // Monkey · D · Dragon
luffy.say() // Monkey · D · Luffy
