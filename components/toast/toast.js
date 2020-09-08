// components/toast.js
Component({
  properties: {
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
