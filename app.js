//app.js
App({
  onLaunch: function () {
  },
  globalData: {
    userInfo: null,
    fetters: ['全部', '猩红之月', '天神', '灵魂莲华夜幽', '灵魂莲花昼明', '永恒森林', '三国猛将', '福星', '月神', '浪人', '御剑仙', '忍者', '天煞', '枭雄'],
    characters: ['全部', '神盾使', '魔法师', '神射手', '夜影', '刺客', '耀光使', '决斗大师', '宗师', '猎人', '重装战士', '秘术师', '斗士' ],
    roles: [
      {name:'Elis', cost: 1, fetter: ['Keeper'], character: ['XINGHONG'], 
      icon:'',chineseName:'伊利斯', zhiye:['神盾使'],jiban:['猩红之月']},
      {name:'TwistedFate', cost:1, fetter: ['Mega'], character:['XINGHONG'], 
      icon:'',chineseName:'崔斯特', zhiye:['魔法师'],jiban:['猩红之月']},
      {name:'pike', cost: 2, fetter: ['ASSASSIN'], character:['XINGHONG'], 
      icon:'',chineseName:'派克', zhiye:['刺客'],jiban:['猩红之月']},
      {name:'Evelyn', cost:3 , fetter:['SHADE'], character: ['XINGHONG'], 
      icon:'',chineseName:'伊芙琳', zhiye:['夜影'],jiban:['猩红之月']},
      {name:'kalista', cost: 3, fetter:['DUELIST'], character: ['XINGHONG'], 
      icon:'',chineseName:'卡莉斯塔', zhiye:['决斗大师'],jiban:['猩红之月']},
      {name:'jin', cost: 4, fetter:['SHARPSHOOTER'], character: ['XINGHONG'], 
      icon:'',chineseName:'烬', zhiye:['神射手'],jiban:['猩红之月']},
      {name:'Aatrox', cost: 4, fetter:['VANGUARD'], character: ['XINGHONG'], 
      icon:'',chineseName:'亚托克斯', zhiye:['重装战士'],jiban:['猩红之月']},
      {name:'Zilean', cost: 5, fetter:['MYSTIC'], character: ['XINGHONG'], 
      icon:'',chineseName:'基兰', zhiye:['秘术师'],jiban:['猩红之月']},
      {name:'Jax', cost: 2, fetter:['DUELIST'], character: ['TIANSHEN'], 
      icon:'',chineseName:'贾克斯', zhiye:['决斗大师'],jiban:['天神']},
      {name:'Wukong', cost: 1, fetter:['VANGUARD'], character: ['TIANSHEN'], 
      icon:'',chineseName:'悟空', zhiye:['重装战士'],jiban:['天神']},
      {name:'Irelia', cost: 3, fetter:['ADEPT'], character: ['TIANSHEN', 'YUJIAN'], 
      icon:'',chineseName:'艾瑞莉娅', zhiye:['宗师'],jiban:['天神']},
      {name:'Lux', cost:3 , fetter:['DAZZLER'], character: ['TIANSHEN'], 
      icon:'',chineseName:'拉克丝', zhiye:['耀光使'],jiban:['天神']},
      {name:'Warwick', cost: 4, fetter:['BRAWLER','Hunter'], character: ['TIANSHEN'], 
      icon:'',chineseName:'沃里克', zhiye:['斗士','猎人'],jiban:['天神']},
      {name:'Leesin', cost: 5, fetter:['DUELIST'], character: ['TIANSHEN'], 
      icon:'',chineseName:'李青', zhiye:['决斗大师'],jiban:['天神']},
      {name:'Vaynee', cost: 1, fetter:['SHARPSHOOTER'], character: ['YEYOU'], 
      icon:'',chineseName:'薇恩', zhiye:['神射手'],jiban:['灵魂莲华夜幽']},
      {name:'Thresh', cost: 2, fetter:['VANGUARD'], character: ['YEYOU'], 
      icon:'',chineseName:'锤石', zhiye:['重装'],jiban:['灵魂莲华夜幽']},
      {name:'Revan', cost: 4, fetter: ['Keeper'], character: ['YEYOU'],
      icon:'',chineseName:'瑞文', zhiye:['神盾使'],jiban:['灵魂莲华夜幽']},
      {name:'Cassiopeia', cost: 3, fetter:['DAZZLER','MYSTIC'], character: ['YEYOU'], 
      icon:'',chineseName:'卡西奥佩娅', zhiye:['耀光使','秘术师'],jiban:['灵魂莲华夜幽']},
      {name:'Lilya', cost: 5, fetter: ['Mega'], character: ['YEYOU'], 
      icon:'',chineseName:'莉莉娅', zhiye:['魔法师'],jiban:['灵魂莲华夜幽']},
      {name:'Nami', cost:1, fetter: ['Mega'], character: ['YUJIAN'], 
      icon:'',chineseName:'娜美', zhiye:['魔法师'],jiban:['御剑仙']},
      {name:'Fiona', cost: 1, fetter:['DUELIST'], character: ['YUJIAN'], 
      icon:'',chineseName:'菲欧娜', zhiye:['决斗大师'],jiban:['御剑仙']},
      {name:'Janna', cost: 2, fetter:['MYSTIC'], character: ['YUJIAN'], 
      icon:'',chineseName:'迦娜', zhiye:['秘术师'],jiban:['御剑仙']},
      {name:'Morgana', cost: 4, fetter:['DAZZLER'], character: ['YUJIAN'], 
      icon:'',chineseName:'莫甘娜', zhiye:['耀光使'],jiban:['御剑仙']},
      {name:'Talen', cost: 4, fetter:['ASSASSIN'], character: ['YUJIAN'], 
      icon:'',chineseName:'泰隆', zhiye:['刺客'],jiban:['御剑仙']},
      {name:'Maokea', cost: 1, fetter:['BRAWLER'], character: ['DELUYI'], 
      icon:'',chineseName:'茂凯', zhiye:['斗士'],jiban:['永恒森林']},
      {name:'Hecarim', cost: 2, fetter:['VANGUARD'], character: ['DELUYI'], 
      icon:'',chineseName:'赫卡里姆', zhiye:['重装战士'],jiban:['永恒森林']},
      {name:'Lulu', cost: 2, fetter: ['Mega'], character: ['DELUYI'], 
      icon:'',chineseName:'露露', zhiye:['魔法师'],jiban:['永恒森林']},
      {name:'Vega', cost: 3, fetter: ['Mega'], character: ['DELUYI'], 
      icon:'',chineseName:'维嘉', zhiye:['魔法师'],jiban:['永恒森林']},
      {name:'Nunu', cost: 3, fetter:['BRAWLER'], character: ['DELUYI'], 
      icon:'',chineseName:'努努', zhiye:['斗士'],jiban:['永恒森林']},
      {name:'Ashe', cost: 4, fetter:['HUNTER'], character: ['DELUYI'], 
      icon:'',chineseName:'艾希', zhiye:['猎人'],jiban:['永恒森林']},
      {name:'Ezreal', cost: 5, fetter:['DAZZLER'], character: ['DELUYI'], 
      icon:'',chineseName:'伊泽瑞尔', zhiye:['耀光使'],jiban:['永恒森林']},
      {name:'Yasuo', cost: 1, fetter:['DUELIST'], character: ['GUER'], 
      icon:'',chineseName:'亚索', zhiye:['决斗大师'],jiban:['浪人']},
      {name:'Yongen', cost: 5, fetter:['ADEPT'], character: ['GUER'], 
      icon:'',chineseName:'永恩', zhiye:['宗师'],jiban:['浪人']},
      {name:'Tam', cost: 1, fetter:['BRAWLER'], character: ['FUXING'], 
      icon:'',chineseName:'塔姆', zhiye:['斗士'],jiban:['福星']},
      {name:'Annie', cost:2, fetter:['Mega'], character: ['FUXING'], 
      icon:'',chineseName:'安妮', zhiye:['魔法师'],jiban:['福星']},
      {name:'Jinx', cost: 3, fetter:['SHARPSHOOTER'], character: ['FUXING'], 
      icon:'',chineseName:'金克斯', zhiye:['神射手'],jiban:['福星']},
      {name:'Catalina', cost: 3, fetter:['ASSASSIN'], character: ['FUXING','SANGUO'], 
      icon:'',chineseName:'卡特琳娜', zhiye:['刺客'],jiban:['福星','三国猛将']},
      {name:'Sejuani', cost: 4, fetter:['VANGUARD'], character: ['FUXING'], 
      icon:'',chineseName:'瑟庄妮', zhiye:['重装战士'],jiban:['福星']},
      {name:'Lissandra', cost: 1, fetter:['DAZZLER'], character: ['YUESHEN'], 
      icon:'',chineseName:'丽桑卓', zhiye:['耀光使'],jiban:['月神']},
      {name:'Diana', cost: 1, fetter:['ASSASSIN'], character: ['YUESHEN'], 
      icon:'',chineseName:'戴安娜', zhiye:['刺客'],jiban:['月神']},
      {name:'Sellars', cost: 2, fetter:['BRAWLER'], character: ['YUESHEN'], 
      icon:'',chineseName:'塞拉斯', zhiye:['斗士'],jiban:['月神']},
      {name:'Ephalus', cost: 2, fetter:['HUNTER'], character: ['YUESHEN'], 
      icon:'',chineseName:'厄斐琉斯', zhiye:['猎人'],jiban:['月神']},
      {name:'Zed', cost: 2, fetter:['SHADE'], character: ['NINJA'], 
      icon:'',chineseName:'劫', zhiye:['夜影'],jiban:['忍者']},
      {name:'Akali', cost: 3, fetter:['ASSASSIN'], character: ['NINJA'],
      icon:'',chineseName:'阿卡丽', zhiye:['刺客'],jiban:['忍者']},
      {name:'Kennan', cost:3, fetter:['Keeper'], character: ['NINJA'], 
      icon:'',chineseName:'凯南', zhiye:['神盾使'],jiban:['忍者']},
      {name:'Shen', cost: 4, fetter:['ADEPT'], character: ['NINJA'], 
      icon:'',chineseName:'慎', zhiye:['宗师'],jiban:['忍者']},
      {name:'Timor', cost: 2, fetter:['SHARPSHOOTER'], character: ['ZHOUMING'], 
      icon:'',chineseName:'提莫', zhiye:['神射手'],jiban:['灵魂莲花昼明']},
      {name:'Umi', cost: 3, fetter:['MYSTIC'], character: ['ZHOUMING'], 
      icon:'',chineseName:'悠米', zhiye:['秘术师'],jiban:['灵魂莲花昼明']},
      {name:'Kindred', cost: 3, fetter:['HUNTER'], character: ['ZHOUMING'], 
      icon:'',chineseName:'千珏', zhiye:['猎人'],jiban:['灵魂莲花昼明']},
      {name:'Ari', cost: 4, fetter: ['Mega'], character: ['ZHOUMING'], 
      icon:'',chineseName:'阿狸', zhiye:['魔法师'],jiban:['灵魂莲花昼明']},
      {name:'Nidalee', cost: 1, fetter:['SHARPSHOOTER'], character: ['SANGUO'], 
      icon:'',chineseName:'奈德丽', zhiye:['神射手'],jiban:['三国猛将']},
      {name:'Garen', cost: 1, fetter:['VANGUARD'], character: ['SANGUO'], 
      icon:'',chineseName:'盖伦', zhiye:['重装战士'],jiban:['三国猛将']},
      {name:'Jarvan', cost:2, fetter:['Keeper'], character: ['SANGUO'], 
      icon:'',chineseName:'嘉文', zhiye:['神盾使'],jiban:['三国猛将']},
      {name:'Vi', cost: 3, fetter:['BRAWLER'], character: ['SANGUO'], 
      icon:'',chineseName:'蔚', zhiye:['斗士'],jiban:['三国猛将']},
      {name:'ZhaoXin', cost: 3, fetter:['DUELIST'], character: ['SANGUO'], 
      icon:'',chineseName:'赵信', zhiye:['决斗大师'],jiban:['三国猛将']},
      {name:'Azir', cost: 5, fetter:['Keeper'], character: ['SANGUO','XIAOXIONG'], 
      icon:'',chineseName:'阿兹尔', zhiye:['神盾使'],jiban:['三国猛将','枭雄']},
      {name:'Serti', cost: 5, fetter:['BRAWLER'], character: ['BAWANG'], 
      icon:'',chineseName:'瑟提', zhiye:['斗士'],jiban:['霸王']},
      {name:'Kaiyin', cost: 5, fetter:['SHADE'], character: ['TIANSHA'], 
      icon:'',chineseName:'凯隐', zhiye:['夜影'],jiban:['天煞']},
    ]
  }
})