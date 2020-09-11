// components/fate/fate.js
Component({

  properties: {
    roles:{
      type:Array
    }
  },
  data: {
    showFate: false
  },

  methods: {
    show() {
      this.setData({showFate: true})
    },
    hide() {
      this.setData({showFate: false})
    },
    setFate(e) {
      let { item } = e.currentTarget.dataset
      this.triggerEvent('setFate', item)
    }
  }
})
