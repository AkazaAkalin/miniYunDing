// components/toast.js
const app = getApp()
Component({
  properties: {
    toastCount: {
      type: Number,
    },
    toastFetter: {
      type: String,
      observer: function(e) {
        let desc = ''
        switch (e) {
          case '忍者' : 
          desc = app.globalData.descriptions['NINJA'].desc + app.globalData.descriptions['NINJA'].count
          break; case '浪人' : 
          desc = app.globalData.descriptions['GUER'].desc + app.globalData.descriptions['GUER'].count
          break;case '月神' : 
          desc = app.globalData.descriptions['YUESHEN'].desc + app.globalData.descriptions['YUESHEN'].count
          break;case '福星' : 
          desc = app.globalData.descriptions['FUXING'].desc + app.globalData.descriptions['FUXING'].count
          break;case '灵魂莲华明昼' : 
          desc = app.globalData.descriptions['MINGZHOU'].desc + app.globalData.descriptions['MINGZHOU'].count
          break;case '灵魂莲华幽夜' : 
          desc = app.globalData.descriptions['YOUYE'].desc + app.globalData.descriptions['YOUYE'].count
          break;case '玉剑仙' : 
          desc = app.globalData.descriptions['YUJIAN'].desc + app.globalData.descriptions['YUJIAN'].count
          break;case '天神' : 
          desc = app.globalData.descriptions['TIANSHEN'].desc + app.globalData.descriptions['TIANSHEN'].count
          break;case '腥红之月' : 
          desc = app.globalData.descriptions['XINGHONG'].desc + app.globalData.descriptions['XINGHONG'].count
          break;case '永恒之森' : 
          desc = app.globalData.descriptions['DELUYI'].desc + app.globalData.descriptions['DELUYI'].count
          break;case '三国猛将' : 
          desc = app.globalData.descriptions['SANGUO'].desc + app.globalData.descriptions['SANGUO'].count
          break;case '霸王' : 
          desc = app.globalData.descriptions['BAWANG'].desc + app.globalData.descriptions['BAWANG'].count
          break;case '天煞' : 
          desc = app.globalData.descriptions['TIANSHA'].desc + app.globalData.descriptions['TIANSHA'].count
          break;case '秘术师' : 
          desc = app.globalData.descriptions['MYSTIC'].desc + app.globalData.descriptions['MYSTIC'].count
          break;case '斗士' : 
          desc = app.globalData.descriptions['BRAWLER'].desc + app.globalData.descriptions['BRAWLER'].count
          break;case '重装战士' : 
          desc = app.globalData.descriptions['VANGUARD'].desc + app.globalData.descriptions['VANGUARD'].count
          break;case '刺客' : 
          desc = app.globalData.descriptions['ASSASSIN'].desc + app.globalData.descriptions['ASSASSIN'].count
          break;case '魔法师' : 
          desc = app.globalData.descriptions['Mega'].desc + app.globalData.descriptions['Mega'].count
          break;case '耀光使' : 
          desc = app.globalData.descriptions['DAZZLER'].desc + app.globalData.descriptions['DAZZLER'].count
          break;case '宗师' : 
          desc = app.globalData.descriptions['ADEPT'].desc + app.globalData.descriptions['宗师'].count
          break;case '夜影' : 
          desc = app.globalData.descriptions['SHADE'].desc + app.globalData.descriptions['SHADE'].count
          break;case '猎人' : 
          desc = app.globalData.descriptions['HUNTER'].desc + app.globalData.descriptions['HUNTER'].count
          break;case '神射手' : 
          desc = app.globalData.descriptions['SHARPSHOOTER'].desc + app.globalData.descriptions['SHARPSHOOTER'].count
          break;case '神盾使' : 
          desc = app.globalData.descriptions['Keeper'].desc + app.globalData.descriptions['Keeper'].count
          break;case '决斗大师' : 
          desc = app.globalData.descriptions['DUELIST'].desc + app.globalData.descriptions['DUELIST'].count
          break;case '枭雄' : 
          desc = app.globalData.descriptions['XIAOXIONG'].desc + app.globalData.descriptions['XIAOXIONG'].count
          break;
        }
        this.setData({desc})
      }
    }
  },
  data: {
    toastData: {
      text: 'index',
      showToast: false
    }
  },
  methods: {
    close(e) {
      this.setData({
        'toastData.showToast': false
      })
    },
    show() {
      this.setData({
        'toastData.showToast': true
      })
    }
  }
})
