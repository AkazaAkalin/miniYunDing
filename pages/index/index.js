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
    teamFetters: [],
  },
  onLoad: function () {
  },
  selectTab(e) {
    let select = e.currentTarget.dataset.index
    this.setData({ select })
  },
  addRoles(e) {
    let role = e.currentTarget.dataset.item
    let myroles = this.data.myroles
    let count = 0 
    myroles.forEach(item => { item.name === role.name && count++ })
    if(count < 2 && myroles.length < 10) {
      myroles.push(role)
      myroles.forEach((item, index) => { item.index = index })
    } else if (myroles.length >= 10) {
      wx.showToast({
        title: '只能选择10个英雄哦',
        icon: 'none'
      })
    } else {
      wx.showToast({
        title: '同英雄只能选择两个',
        icon: 'none'
      })
    }
    this.handleFetters(myroles)
    this.setData({ myroles })
  },
  deleteRoles(e) {
    let role = e.currentTarget.dataset.item
    let myroles = this.data.myroles
    let deleteindex = role.index
    myroles.forEach((item, index) => {
      if(role.index == item.index)
      deleteindex = index
    })
    myroles.splice(deleteindex, 1)
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
    var uniqueRoles = [],  obj = {}
    myroles.forEach(val => {
        if (obj.hasOwnProperty(val.name)) {
          obj[val.name]++
        } else {
          obj[val.name] = 1
          uniqueRoles.push({...val})
        }
    })
    let fetters = uniqueRoles.reduce((total, item) => {
      if(item.isFate) {
        if (item.jiban.length < 2) {
          if(item.jiban in total) {
            total[item.jiban] += 2
          } else {
            total[item.jiban] = 2
          }
        } else {
          item.jiban.forEach(item => {
            if(item in total) {
              total[item] += 2
            } else {
              total[item] = 2
            }
          })
        }
      } else {
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
      }
      return total
    },{}) 
    let characters =  uniqueRoles.reduce((total, item) => {
      if(item.isFate) {
        if (item.zhiye.length < 2) {
          if(item.zhiye in total) {
            total[item.zhiye] += 2
          } else {
            total[item.zhiye] = 2
          }
        } else {
          item.zhiye.forEach(item => {
            if(item in total) {
              total[item] += 2
            } else {
              total[item] = 2
            }
          })
        }
      } else {
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
      }
      return total
    },{}) 
    let teamFetters = { ...fetters, ...characters }
    this.setData({ teamFetters })
  },
  showFetter(e) {
    let {index, item} = e.currentTarget.dataset
    let toast = this.selectComponent('#toast')
    toast.show()
    this.setData({toastFetter:index, toastCount: item})
  },
  showFatedialog() {
    this.selectComponent('#fate').show()
  },
  setFate(e) {
    console.log(e.detail)
    let index = e.detail.index
    let myroles = this.data.myroles
    myroles.forEach(item => {
      if(item.index == index) {
        item.isFate = true
        
      } else {
        item.isFate = false
      }
    })
    this.handleFetters(myroles)
    this.setData({myroles})
    this.selectComponent('#fate').hide()
  }
})
