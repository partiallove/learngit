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
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px',
            backgroundImage:'url('+ (image_Name ? image_Name : baseImage) +')'
          }"
        >
          <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 6 }" :data-source="data" >
            <a-list-item slot="renderItem" slot-scope="item, index" v-on:[eventName]="handleClick(item.clickType,index,item.image)" style="cursor: pointer;">
              <a-card class="logoDiv" style="text-align:center;width: 150px;height: 80px;">
<!--                <div :style="item.type">{{item.content}}</div>-->
<!--                <div style="font-size:20px">{{item.title}}</div>-->
                <img :src="item.image" alt="" width="100%" height="100%">
              </a-card>
            </a-list-item>
          </a-list>

          <div v-for="(item ,index) in data" :key="index" style="width: 150px;height: 80px;float:left;padding:10px;margin:10px;border:1px solid #f0f0f0;">
            <img :src="item.image" alt="" width="100%" height="100%">
          </div>


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
      type:[{'color':'#00A0F0'},{'font-size':'40px'}],
      clickType: 'add',
      image:'https://img.tukuppt.com/bg_grid/00/13/23/4e2KxRRsIO.jpg!/fh/350',
    },
    {
      title: '岗位',
      content:'1',
      type: [{'color':'#00C2F8'},{'font-size':'40px'}],
      clickType: 'del',
      image:'https://img.tukuppt.com/bg_grid/00/05/07/Ty8y0T38xD.jpg!/fh/350',
    },
    {
      title: '职务级别',
      content:'1',
      type: [{'color':'#00D6AD'},{'font-size':'40px'}],
      clickType: 'edit',
      image:'https://img.tukuppt.com/bg_grid/00/06/51/eQQgRngDKS.jpg!/fh/350',
    },
    {
      title: '人员',
      content:'1',
      type: [{'color':'#FF9E22'},{'font-size':'40px'}],
      clickType: 'save',
      image:'https://img.tukuppt.com/bg_grid/00/03/55/wgzuYXpROv.jpg!/fh/350',
    },
  ];
  export default {
    data() {
      return {
        image_Name: '',
        baseImage: 'https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg',
        collapsed: false,
        data,
        isShow: 0,
        eventName: 'click'
      };
    },
    methods:{
      handleClick(type,index,url){
        this.image_Name = url
        console.log(url);
        // this[type](index,url);
      },
      add(index,url){
        console.log('新增');
        console.log(url)
      },
      save(index,url){
        console.log('保存')
        console.log(url)
      },
      edit(index,url){
        console.log('编辑')
        console.log(url)
      },
      del(index,url){
        console.log('删除')
        console.log(url)
      },
      orgChange(val) {
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
