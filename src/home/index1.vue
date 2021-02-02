<template>
  <div>
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
          <a-menu-item key="1">
            <a-icon type="user" />
            <span>nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="video-camera" />
            <span>nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="upload" />
            <span>nav 3</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 6 }" :data-source="data" >
            <a-list-item slot="renderItem" slot-scope="item, index" @click.sync="handle(item.click)" style="cursor: pointer;">
              <a-card style="text-align:center">
                <div :style="item.type">{{item.content}}</div>
                <div style="font-size:20px">{{item.title}}</div>
              </a-card>
            </a-list-item>
          </a-list>


          <a-button  v-if="isShow === 0">
            <a-tag color="pink">
              部门
            </a-tag>
            Primary0
          </a-button>

          <a-button  v-if="isShow === 1">
            <a-tag color="red">
              岗位
            </a-tag>
            Primary1
          </a-button>

          <a-button  v-if="isShow === 2">
            <a-tag color="orange">
              职务级别
            </a-tag>
            Primary2
          </a-button>

          <a-button  v-if="isShow === 3">
            <a-tag color="green">
              人员
            </a-tag>
            Primary3
          </a-button>
        </a-layout-content>
      </a-layout>
    </a-layout>

  </div>
</template>
<script>
  const data = [
    {
      title: '部门',
      content:'1',
      type: [{'color':'#00A0F0'},{'font-size':'40px'}],

      click: 'ok()'
    },
    {
      title: '岗位',
      content:'1',
      type: [{'color':'#00C2F8'},{'font-size':'40px'}],
      click: 'ok()'
    },
    {
      title: '职务级别',
      content:'1',
      type: [{'color':'#00D6AD'},{'font-size':'40px'}],
      click: 'ok()'
    },
    {
      title: '人员',
      content:'1',
      type: [{'color':'#FF9E22'},{'font-size':'40px'}],
      click: 'ok()'
    },
  ];
  export default {
    data() {
      return {
        collapsed: false,
        data,
        isShow: 0,
      };
    },
    methods:{
      ok(){
          console.log('okk');
      },
      handle(val){

      },
      orgChange(val) {
        console.log(val)
        this.isShow = val;
      }
    }
  };
</script>
<style>
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
