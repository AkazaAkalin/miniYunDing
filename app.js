//app.js
App({
  onLaunch: function () {
  },
  globalData: {
    userInfo: null,
    fetters: ['全部', '腥红之月', '天神', '灵魂莲华幽夜', '灵魂莲华明昼', '永恒森林', '三国猛将', '福星', '月神', '浪人', '御剑仙', '忍者', '天煞', '枭雄'],
    characters: ['全部', '神盾使', '魔法师', '神射手', '夜影', '刺客', '耀光使', '决斗大师', '宗师', '猎人', '重装战士', '秘术师', '斗士' ],
    roles: [
      {name:'Elis', cost: 1, fetter: ['Keeper'], character: ['XINGHONG'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small60003.jpg',chineseName:'伊利斯', zhiye:['神盾使'],jiban:['腥红之月']},
      {name:'TwistedFate', cost:1, fetter: ['Mega'], character:['XINGHONG'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small4010.jpg',chineseName:'崔斯特', zhiye:['魔法师'],jiban:['腥红之月']},
      {name:'pike', cost: 2, fetter: ['ASSASSIN'], character:['XINGHONG'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small555009.jpg',chineseName:'派克', zhiye:['刺客'],jiban:['腥红之月']},
      {name:'Evelyn', cost:3 , fetter:['SHADE'], character: ['XINGHONG'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small28005.jpg',chineseName:'伊芙琳', zhiye:['夜影'],jiban:['腥红之月']},
      {name:'kalista', cost: 3, fetter:['DUELIST'], character: ['XINGHONG'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small429001.jpg',chineseName:'卡莉斯塔', zhiye:['决斗大师'],jiban:['腥红之月']},
      {name:'jin', cost: 4, fetter:['SHARPSHOOTER'], character: ['XINGHONG'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small202002.jpg',chineseName:'烬', zhiye:['神射手'],jiban:['腥红之月']},
      {name:'Aatrox', cost: 4, fetter:['VANGUARD'], character: ['XINGHONG'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small266007.jpg',chineseName:'亚托克斯', zhiye:['重装战士'],jiban:['腥红之月']},
      {name:'Zilean', cost: 5, fetter:['MYSTIC'], character: ['XINGHONG'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small26005.jpg',chineseName:'基兰', zhiye:['秘术师'],jiban:['腥红之月']},
      {name:'Jax', cost: 2, fetter:['DUELIST'], character: ['TIANSHEN'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small24013.jpg',chineseName:'贾克斯', zhiye:['决斗大师'],jiban:['天神']},
      {name:'Wukong', cost: 1, fetter:['VANGUARD'], character: ['TIANSHEN'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small62005.jpg',chineseName:'悟空', zhiye:['重装战士'],jiban:['天神']},
      {name:'Irelia', cost: 3, fetter:['ADEPT'], character: ['TIANSHEN', 'YUJIAN'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small39006.jpg',chineseName:'艾瑞莉娅', zhiye:['宗师'],jiban:['天神']},
      {name:'Lux', cost:3 , fetter:['DAZZLER'], character: ['TIANSHEN'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small99008.jpg',chineseName:'拉克丝', zhiye:['耀光使'],jiban:['天神']},
      {name:'Warwick', cost: 4, fetter:['BRAWLER','Hunter'], character: ['TIANSHEN'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small19010.jpg',chineseName:'沃里克', zhiye:['斗士','猎人'],jiban:['天神']},
      {name:'Leesin', cost: 5, fetter:['DUELIST'], character: ['TIANSHEN'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small64011.jpg',chineseName:'李青', zhiye:['决斗大师'],jiban:['天神']},
      {name:'Vaynee', cost: 1, fetter:['SHARPSHOOTER'], character: ['YOUYE'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small67014.jpg',chineseName:'薇恩', zhiye:['神射手'],jiban:['灵魂莲华幽夜']},
      {name:'Thresh', cost: 2, fetter:['VANGUARD'], character: ['YOUYE'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small412017.jpg',chineseName:'锤石', zhiye:['重装'],jiban:['灵魂莲华幽夜']},
      {name:'Revan', cost: 4, fetter: ['Keeper'], character: ['YOUYE'],
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small92023.jpg',chineseName:'瑞文', zhiye:['神盾使'],jiban:['灵魂莲华幽夜']},
      {name:'Cassiopeia', cost: 3, fetter:['DAZZLER','MYSTIC'], character: ['YOUYE'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small69009.jpg',chineseName:'卡西奥佩娅', zhiye:['耀光使','秘术师'],jiban:['灵魂莲华幽夜']},
      {name:'Lilya', cost: 5, fetter: ['Mega'], character: ['YOUYE'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small876001.jpg',chineseName:'莉莉娅', zhiye:['魔法师'],jiban:['灵魂莲华幽夜']},
      {name:'Nami', cost:1, fetter: ['Mega'], character: ['YUJIAN'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small267015.jpg',chineseName:'娜美', zhiye:['魔法师'],jiban:['玉剑仙']},
      {name:'Fiona', cost: 1, fetter:['DUELIST'], character: ['YUJIAN'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small114022.jpg',chineseName:'菲欧娜', zhiye:['决斗大师'],jiban:['玉剑仙']},
      {name:'Janna', cost: 2, fetter:['MYSTIC'], character: ['YUJIAN'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small40008.jpg',chineseName:'迦娜', zhiye:['秘术师'],jiban:['玉剑仙']},
      {name:'Morgana', cost: 4, fetter:['DAZZLER'], character: ['YUJIAN'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small25017.jpg',chineseName:'莫甘娜', zhiye:['耀光使'],jiban:['玉剑仙']},
      {name:'Talen', cost: 4, fetter:['ASSASSIN'], character: ['YUJIAN'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small91012.jpg',chineseName:'泰隆', zhiye:['刺客'],jiban:['玉剑仙']},
      {name:'Maokea', cost: 1, fetter:['BRAWLER'], character: ['DELUYI'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small57000.jpg',chineseName:'茂凯', zhiye:['斗士'],jiban:['永恒之森']},
      {name:'Hecarim', cost: 2, fetter:['VANGUARD'], character: ['DELUYI'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small120005.jpg',chineseName:'赫卡里姆', zhiye:['重装战士'],jiban:['永恒之森']},
      {name:'Lulu', cost: 2, fetter: ['Mega'], character: ['DELUYI'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small117000.jpg',chineseName:'露露', zhiye:['魔法师'],jiban:['永恒之森']},
      {name:'Vega', cost: 3, fetter: ['Mega'], character: ['DELUYI'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small45004.jpg',chineseName:'维嘉', zhiye:['魔法师'],jiban:['永恒之森']},
      {name:'Nunu', cost: 3, fetter:['BRAWLER'], character: ['DELUYI'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small20001.jpg',chineseName:'努努', zhiye:['斗士'],jiban:['永恒之森']},
      {name:'Ashe', cost: 4, fetter:['HUNTER'], character: ['DELUYI'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small22002.jpg',chineseName:'艾希', zhiye:['猎人'],jiban:['永恒之森']},
      {name:'Ezreal', cost: 5, fetter:['DAZZLER'], character: ['DELUYI'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small81001.jpg',chineseName:'伊泽瑞尔', zhiye:['耀光使'],jiban:['永恒之森']},
      {name:'Yasuo', cost: 1, fetter:['DUELIST'], character: ['GUER'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small157036.jpg',chineseName:'亚索', zhiye:['决斗大师'],jiban:['浪人']},
      {name:'Yongen', cost: 5, fetter:['ADEPT'], character: ['GUER'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small777000.jpg',chineseName:'永恩', zhiye:['宗师'],jiban:['浪人']},
      {name:'Tam', cost: 1, fetter:['BRAWLER'], character: ['FUXING'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small223003.jpg',chineseName:'塔姆', zhiye:['斗士'],jiban:['福星']},
      {name:'Annie', cost:2, fetter:['Mega'], character: ['FUXING'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small1008.jpg',chineseName:'安妮', zhiye:['魔法师'],jiban:['福星']},
      {name:'Jinx', cost: 3, fetter:['SHARPSHOOTER'], character: ['FUXING'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small222002.jpg',chineseName:'金克斯', zhiye:['神射手'],jiban:['福星']},
      {name:'Catalina', cost: 3, fetter:['ASSASSIN'], character: ['FUXING','SANGUO'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small55008.jpg',chineseName:'卡特琳娜', zhiye:['刺客'],jiban:['福星','三国猛将']},
      {name:'Sejuani', cost: 4, fetter:['VANGUARD'], character: ['FUXING'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small113008.jpg',chineseName:'瑟庄妮', zhiye:['重装战士'],jiban:['福星']},
      {name:'Lissandra', cost: 1, fetter:['DAZZLER'], character: ['YUESHEN'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small127004.jpg',chineseName:'丽桑卓', zhiye:['耀光使'],jiban:['月神']},
      {name:'Diana', cost: 1, fetter:['ASSASSIN'], character: ['YUESHEN'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small131000.jpg',chineseName:'戴安娜', zhiye:['刺客'],jiban:['月神']},
      {name:'Sellars', cost: 2, fetter:['BRAWLER'], character: ['YUESHEN'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small517001.jpg',chineseName:'塞拉斯', zhiye:['斗士'],jiban:['月神']},
      {name:'Ephalus', cost: 2, fetter:['HUNTER'], character: ['YUESHEN'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small523000.jpg',chineseName:'厄斐琉斯', zhiye:['猎人'],jiban:['月神']},
      {name:'Zed', cost: 2, fetter:['SHADE'], character: ['NINJA'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small238000.jpg',chineseName:'劫', zhiye:['夜影'],jiban:['忍者']},
      {name:'Akali', cost: 3, fetter:['ASSASSIN'], character: ['NINJA'],
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small84000.jpg',chineseName:'阿卡丽', zhiye:['刺客'],jiban:['忍者']},
      {name:'Kennan', cost:3, fetter:['Keeper'], character: ['NINJA'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small85000.jpg',chineseName:'凯南', zhiye:['神盾使'],jiban:['忍者']},
      {name:'Shen', cost: 4, fetter:['ADEPT'], character: ['NINJA'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small98000.jpg',chineseName:'慎', zhiye:['宗师'],jiban:['忍者']},
      {name:'Timor', cost: 2, fetter:['SHARPSHOOTER'], character: ['MINGZHOU'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small17025.jpg',chineseName:'提莫', zhiye:['神射手'],jiban:['灵魂莲华明昼']},
      {name:'Umi', cost: 3, fetter:['MYSTIC'], character: ['MINGZHOU'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small350000.jpg',chineseName:'悠米', zhiye:['秘术师'],jiban:['灵魂莲华明昼']},
      {name:'Kindred', cost: 3, fetter:['HUNTER'], character: ['MINGZHOU'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small203003.jpg',chineseName:'千珏', zhiye:['猎人'],jiban:['灵魂莲华明昼']},
      {name:'Ari', cost: 4, fetter: ['Mega'], character: ['MINGZHOU'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small103027.jpg',chineseName:'阿狸', zhiye:['魔法师'],jiban:['灵魂莲华明昼']},
      {name:'Nidalee', cost: 1, fetter:['SHARPSHOOTER'], character: ['SANGUO'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small76007.jpg',chineseName:'奈德丽', zhiye:['神射手'],jiban:['三国猛将']},
      {name:'Garen', cost: 1, fetter:['VANGUARD'], character: ['SANGUO'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small86011.jpg',chineseName:'盖伦', zhiye:['重装战士'],jiban:['三国猛将']},
      {name:'Jarvan', cost:2, fetter:['Keeper'], character: ['SANGUO'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small59005.jpg',chineseName:'嘉文', zhiye:['神盾使'],jiban:['三国猛将']},
      {name:'Vi', cost: 3, fetter:['BRAWLER'], character: ['SANGUO'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small254005.jpg',chineseName:'蔚', zhiye:['斗士'],jiban:['三国猛将']},
      {name:'ZhaoXin', cost: 3, fetter:['DUELIST'], character: ['SANGUO'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small5005.jpg',chineseName:'赵信', zhiye:['决斗大师'],jiban:['三国猛将']},
      {name:'Azir', cost: 5, fetter:['Keeper'], character: ['SANGUO','XIAOXIONG'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small268004.jpg',chineseName:'阿兹尔', zhiye:['神盾使'],jiban:['三国猛将','枭雄']},
      {name:'Serti', cost: 5, fetter:['BRAWLER'], character: ['BAWANG'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small875000.jpg',chineseName:'瑟提', zhiye:['斗士'],jiban:['霸王']},
      {name:'Kaiyin', cost: 5, fetter:['SHADE'], character: ['TIANSHA'], 
      icon:'https://game.gtimg.cn/images/lol/act/img/skin/small141002.jpg',chineseName:'凯隐', zhiye:['夜影'],jiban:['天煞']},
    ],
    descriptions : {
            YUJIAN: { desc: '玉剑仙获得额外法力回复。', 
            count: '(2)50%额外法力回复。(4)75%额外法力回复。　(6)100%额外法力回复。'},
      NINJA: { desc:'忍者会获得额外的攻击力和法术强度，只会在登场1或4名不同的忍者生效',
          count:'(1)额外45攻击力和法术强度，(4)额外90攻击力和法术强度' },
      Keeper: { desc: '战斗开始时,神盾使为自身和附近的所有友军护盾 持续8秒。神盾使会额外增加50%护盾',
            count: '(2)每位125护盾。(4)每位175护盾。(6)每位250护盾。'},
      TIANSHEN: { desc: '在攻击6次或生命值跌到50%以下后天神会飞升。获得25%伤害减免并造成额外的真实伤害。', count: '　(2)20%额外真实伤害。(4)40%额外真实伤害。(6)65%额外真实伤害。(8)100%额外真实伤害。'},
      Mega: { desc: '魔法师羁绊触发后可以双重施放。并且拥有调整后的法术强度数值。',
          count: '(3)法术强度调整为70%。(6)法术强度调整为100%。(9) 法术强度调整为150%。'},
      DUELIST: {  desc: '固有：决斗大师的移动速度更快。并且他们每次攻击叠加一层攻速效果 至多7层。',
              count: '(2)每层10%额外攻击速度。(4)每层20%额外攻击速度。(6)每层40%额外攻击速度。(8)每层100%额外攻击速度。'},
      SHADE: {desc: '固有：战斗开始时，会传送到敌方后排。每攻击3次就会潜行状态，且下次普攻造成额外魔法伤害。',count: '(2)100额外魔法伤害。(3)200额外魔法伤害。(4)300额外魔法伤害。'},
      BAWANG: {desc: '(1)腕豪生命值首次低于40%时，会去做仰卧起坐。',
      count: '每下动作回复15%生命值，并增加20%攻击速度。如果回复到满血，则会让自身可以造成真实伤害。如果他所有友军都阵亡了，他会提前返回战斗。'},
      TIANSHA: {desc: '固有：参战3次后，可以选择转换为其它形态。',
      count: ''},
      XINGHONG: { desc: '己方队伍失去50%总生命值时召唤加里奥英雄登场。',
              count: '(3)召唤暴君加里奥。(6)召唤魔王加里奥。(9)召唤至尊魔神加里奥。'},
      SANGUO: { desc: '每打赢一场战斗 加成提升10% 最多叠加5次。',
            count: '(3)额外200生命值、20法术强度。(6)额外400生命值、40法术强度。(9)额外700生命值、70法术强度。'},
      MINGZHOU: { desc: '明昼首次施放技能，可以为所有友军增加攻击速度。',
      count: '　(2)相当于35%法力消耗。(4)相当于90%法力消耗。'},
      YUESHEN: { desc: '(3)战斗开始时，星级最低的月神提升1个星级，持续至战斗结束。星级相同则选择装备最多的那一个。',count: ''},
      FUXING: {desc: '(3)在赢得对抗玩家的战斗后，获得战利品法球。',
      count: ''},
      DELUYI: { desc: '每2秒永恒之森英雄会成长 最多叠加5次。',
            count: '(3)每层额外20双抗、5攻击力和法强。(6)每层额外35双抗、10攻击力和法强。(9)每层额外60双抗、25攻击力和法强。'},
      BRAWLER: { desc: '斗士获得额外生命值。',
              count: '(2)400额外生命值。(4)700额外生命值。(6)900额外生命值。'},
      MYSTIC: { desc: '所有友军额外增加魔法抗性。',
            count: '(2)额外40魔法抗性。(4)额外100魔法抗性。'},
      DAZZLER: {desc: '耀光使的技能会减少目标50%的攻击力。',count: '(2)持续5秒(4)持续10秒。'},
      SHARPSHOOTER: { desc: '神射手的攻击和技能会弹射到。目标附近的敌人，弹射造成调整过的伤害。',
                  count: '(2)弹射30%伤害的1次弹射。(4)弹射65%伤害的2次弹射。(6)弹射70%伤害的3次弹射。'},
      VANGUARD: { desc: '重装战士获得额外的护甲。',
              count: '(2)100额外护甲。(4)200额外护甲。(6)500额外护甲。'},
      ADEPT: {  desc: '战斗开始时，宗师们所有敌人攻击速度降低50%。', count: '(2)持续3秒。(3)持续5秒。(4)持续8秒。'},
      ASSASSIN: { desc: '固有：战斗开始前，刺客会跳到敌方后排。剌客的技能可以暴击。',
              count: '(2)额外10%暴击几率; 10%暴击伤害。(4)额外25%暴击几率; 25%暴击伤害。(6)额外40%暴击几率; 40%暴击伤害。'},
      HUNTER: { desc: '每过3秒，猎人会一起攻击最残血的敌人。',
            count: '(2)100%额外伤害。(3)150%额外伤害。(4)200%额外伤害。(5)250%额外伤害。'},
      YOUYE: { desc: '所有友军增加法术强度。',
          count: '(2)20%法术强度。(4)20%法术强度 夜幽英雄翻倍。(6)50%法术强度 夜幽英雄翻倍'},
      GUER: { desc: '战斗开始时，浪人周围没有任何友军可触发', 
          count: '(1)最大生命值的50%护盾，(2)最大生命值的50%护盾，100%生命偷取'},
      XIAOXIONG: { desc: '固有：会部署两个可独立移动的士兵。士兵会一起施放技能，主人阵亡后急速损失生命值。'
      }
    }
  }
})