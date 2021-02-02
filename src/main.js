// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import router from './router'
import 'ant-design-vue/dist/antd.css'

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import vcolorpicker from 'vcolorpicker'

import ZmColorPicker from 'zm-color-picker';
import "zm-color-picker/lib/zm-color-picker.css";

Vue.use(ZmColorPicker);
Vue.use(vcolorpicker)
Vue.use(VXETable)

Vue.use(Antd)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
