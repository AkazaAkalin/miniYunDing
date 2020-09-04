//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    select: 2,
    roles: app.globalData.roles,
    fetters: app.globalData.fetters,
    characters: app.globalData.characters,
    currentFetter: '全部',
    currentFetterCharacter: '全部',
    myroles: [],
    teamFetters: []
  },
  onLoad: function () {
  },
  selectTab(e) {
    let select = e.currentTarget.dataset.index
    this.setData({ select })
  },
  addRoles(e) {
    let role = e.currentTarget.dataset.item
    let random = Math.random()
    role = {...role, random}
    let myroles = this.data.myroles
    let count = 0 
    myroles.forEach(item => { item.name === role.name && count++ })
    if(count < 2 && myroles.length < 10) {
      myroles.push(role)
    } else if (myroles.length >= 10) {
      console.log('只能选择10个英雄哦')
    } else {
      console.log('同英雄只能选择两个')
    }
    this.handleFetters(myroles)
    this.setData({ myroles })
  },
  deleteRoles(e) {
    let role = e.currentTarget.dataset.item
    let myroles = this.data.myroles
    let deleteindex = ''
    myroles.forEach((item, index) => {
      if(role.random == item.random)
      deleteindex = index
    })
    myroles.splice(deleteindex, 1)
    // console.log(myroles)
    this.handleFetters(myroles)
    this.setData({ myroles })
  },
  pickFetter(e) {
    let currentFetter = this.data.fetters[e.detail.value]
    let roles = app.globalData.roles
    if(e.detail.value != 0 && this.data.currentFetterCharacter != '全部') {
      roles = app.globalData.roles.filter(item => {
        return item.jiban == currentFetter && item.zhiye == this.data.currentFetterCharacter
      })
    } else if (e.detail.value != 0 && this.data.currentFetterCharacter == '全部') {
      roles = app.globalData.roles.filter(item => {
        return item.jiban == currentFetter
      })
    } else if (e.detail.value == 0 && this.data.currentFetterCharacter != '全部') {
      roles = app.globalData.roles.filter(item => {
        return item.zhiye == this.data.currentFetterCharacter
      })
    }
    this.setData({ currentFetter, roles })
  },
  pickCharacter(e) {
    let currentFetterCharacter = this.data.characters[e.detail.value]
    let roles = app.globalData.roles
    if(e.detail.value != 0 && this.data.currentFetter != '全部') {
      roles = app.globalData.roles.filter(item => {
        return item.zhiye == currentFetterCharacter && item.jiban == this.data.currentFetter
      }) 
    } else if (e.detail.value != 0 && this.data.currentFetter == '全部') {
      roles = app.globalData.roles.filter(item => {
        return item.zhiye == currentFetterCharacter
      }) 
    } else if (e.detail.value == 0 && this.data.currentFetter != '全部') {
      roles = app.globalData.roles.filter(item => {
        return item.jiban == this.data.currentFetter
      })
    }
    this.setData({ currentFetterCharacter, roles })
  },
  handleFetters(myroles) {
    var uniqueRoles = [],  obj = {},  index = 0;
    myroles.forEach(val => {
        if (obj.hasOwnProperty(val.name)) {
          uniqueRoles[obj[val.name]].random = uniqueRoles[obj[val.name]].random + ',' + val.timeStamp
        } else {
            obj[val.name] = index ++
            uniqueRoles.push({...val})
        }
    })
    let fetters = uniqueRoles.reduce((total, item) => {
      if (item.jiban.length < 2) {
        if(item.jiban in total) {
          total[item.jiban] ++
        } else {
          total[item.jiban] = 1
        }
      } else {
        item.jiban.forEach(item => {
          if(item in total) {
            total[item] ++
          } else {
            total[item] = 1
          }
        })
      }
      return total
    },{}) 
    let characters =  uniqueRoles.reduce((total, item) => {
      if (item.zhiye.length < 2) {
        if(item.zhiye in total) {
          total[item.zhiye] ++
        } else {
          total[item.zhiye] = 1
        }
      } else {
        item.zhiye.forEach(item => {
          if(item in total) {
            total[item] ++
          } else {
            total[item] = 1
          }
        })
      }
      return total
    },{}) 
    // console.log(fetters, characters)
    let teamFetters = {...fetters,...characters}
    console.log(teamFetters)
    this.setData({ teamFetters })
  },
})
