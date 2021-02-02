<template>
  <div id="components-layout-demo-basic">


    <a-layout>
      <a-layout-header>
        <a-row>
          <a-col :span="4">
            <a-button style="border:none;color:deepskyblue;font-size: 20px;font-weight: bold">登陆页设置</a-button>
            <a-popover placement="bottomLeft">
              <template slot="content">

              </template>
              <template slot="title">
                <span>模板</span>
              </template>
              <a-button>选择模板</a-button>
            </a-popover>
          </a-col>
          <a-col :span="2" :offset="14">
            <a-button type="primary" @click="LoginConfigReset()">
              恢复默认
            </a-button>
          </a-col>
          <a-col :span="4" >
            <a-button type="primary">
              保存
            </a-button>
            <a-button>
              取消
            </a-button>
          </a-col>
        </a-row>
      </a-layout-header>

      <a-layout>
        <a-layout-content :style="mainStyle" @click="loginConfigchange()">
              <!--  logo-->
              <div class="logoBox" :style="logoStyle" @mousedown.stop="move">
                <img :src="logoUrl" alt=""
                style="width: 100%;border-radius: 50%;">
              </div>
              <!-- 登陆-->
              <div :style="loginStyle" ref="parentNode">
                <div class="loginForm"  ref="sonNode" :style="loginFormStyle" @click.stop="typeConfigChange()" @mousedown.stop="move">
                  <template>
                    <a-form layout="vertical"  >
                      <a-form-item>
                        <div style="background-color: purple;width: 70px;height:70px;border-radius: 50%;margin:0 auto;">
                          <img src="./1.jpg" alt="头像" style="width: 100%;border-radius: 50%;">
                        </div>
                      </a-form-item>
                      <a-form-item>
                        <a-input placeholder="Username" style="width:200px;border-radius: 25px;padding-bottom:0px;" disabled>
                          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                        </a-input>
                      </a-form-item>
                      <a-form-item >
                        <a-input type="password" placeholder="Password" style="width:200px;border-radius: 25px;padding-bottom:0px;" disabled>
                          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
                        </a-input>
                      </a-form-item>
                      <a-form-item>
                        <a-button type="primary" html-type="submit" :style="loginButtonStyle">
                          登陆
                        </a-button>
                      </a-form-item>
                    </a-form>
                  </template>
                </div>
              </div>
        </a-layout-content>
        <a-layout-sider style="min-width: 280px;">
          <template>
            <div>
              <a-tabs default-active-key="1" @change="callback">
                <a-tab-pane key="1" tab="属性设置">
                  <div class="table1" v-if="isShow === '0'" style="max-height:580px;width: 100%;overflow:auto">
                    <a-row>
                      <a-divider :orientation="orientationType" :style="titleStyleConfig">背景颜色</a-divider>
                      <a-col :span="4">
                        <template>
                          <colorPicker v-model="form.color" v-on:change="mainStyleChange" style="border: 1px solid;"  />
                        </template>
                      </a-col>
                      <a-col :span="20">

                      </a-col>
                      <a-col :span="24">
                        <a-divider :orientation="orientationType" :style="titleStyleConfig"></a-divider>
                        logo 图片建议不要超过 300*300
                        <a-divider :orientation="orientationType" :style="titleStyleConfig">LOGO</a-divider>
                        <a-input ref="userNameInput" v-model="logoUrlConfig.url" allowClear placeholder="LOGO地址" size="small" style="width:200px;">

                        </a-input>
                      </a-col>
                      <a-col :span="24">
                        <a-divider  style="font-size: 10px;">登录页背景图片(建议尺寸1920*1080)</a-divider>
                      </a-col>
                      <a-col :span="12">
                        <a-button>
                          在线图片
                        </a-button>

                      </a-col>
                      <a-col :span="24">
                        <div style="padding: 10px 16px">
                          <template>
                            <div class="clearfix">
                              <a-upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                list-type="picture-card"
                                :file-list="fileList"
                                @preview="handlePreview"
                                @change="handleChange"
                              >
                                <div v-if="fileList.length < 6">
                                  <a-icon type="plus" />
                                  <div class="ant-upload-text">
                                    Upload
                                  </div>
                                </div>
                              </a-upload>
                              <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                                <img alt="example" style="width: 100%" :src="previewImage" />
                              </a-modal>
                            </div>
                          </template>
                        </div>

                      </a-col>
                      <a-col :span="24">
                        <a-divider >背景图片显示方式</a-divider>
                        <template>
                          <div>
                            <a-radio-group :options="backgroundOptions" v-model="form.value1" @change="backgroundChange" />
                          </div>
                        </template>
                      </a-col>
                      <a-col :span="24">
                        <a-divider >切换速度</a-divider>
                        <template>
                          <div>
                            <a-radio-group :options="showOptions" :default-value="form.value2" @change="onChange2" />
                          </div>
                        </template>
                      </a-col>
                    </a-row>
                  </div>
                  <div class="table2" v-if="isShow === '1'" style="height: 500px;">
                    <a-row>
                      <a-divider :orientation="orientationType" :style="titleStyleConfig">登陆框背景色</a-divider>
                      <a-col :span="4">
                        <template>
                          <colorPicker v-model="loginFormStyleConfig.backgroundColor"  style="border: 1px solid;" />
                        </template>
                      </a-col>
                      <a-col :span="20">

                      </a-col>
                      <a-divider :orientation="orientationType" :style="titleStyleConfig">登陆框按钮色</a-divider>
                      <a-col :span="4">
                        <template>
                          <colorPicker v-model="loginButtonStyleConfig.backgroundColor"  style="border: 1px solid;"/>
                        </template>
                      </a-col>
                      <a-col :span="20">

                      </a-col>
                      <a-col :span="12">
<!--                        <zm-color-picker v-model="colorValue"-->
<!--                                         @change="handleChange"-->
<!--                                         @active-change="handleActiveChange"-->
<!--                                         show-alpha="true"-->
<!--                        ></zm-color-picker>-->
                      </a-col>
                      <a-col :span="12">

                      </a-col>

                    </a-row>
                  </div>

                </a-tab-pane>
                <a-tab-pane key="2" tab="基本信息" force-render>
                  <a-row>
                    <a-col :span="24">
                      <a-divider :orientation="orientationType" :style="titleStyleConfig">模板名称</a-divider>
                    </a-col>
                    <a-col :span="24">
                      <a-input ref="userNameInput1" v-model="form.userName1" placeholder="模板名称" size="small" style="width:200px;">
                        <a-tooltip slot="suffix" title="Extra information">
                        </a-tooltip>
                      </a-input>
                    </a-col>
                    <a-col :span="24">
                      <a-divider :orientation="orientationType" :style="titleStyleConfig">模板描述</a-divider>
                    </a-col>
                    <a-col :span="24">
                      <div style="padding: 0 20px">
                        <a-textarea
                          placeholder="清输入模板描述"
                          :auto-size="{ minRows: 2, maxRows: 6 }"
                        />
                      </div>
                      <div style="margin: 24px 0" />
                    </a-col>
                    <a-col :span="24">
                      <a-divider :orientation="orientationType" :style="titleStyleConfig">排序号</a-divider>
                    </a-col>
                    <a-col :span="24">
                      <a-input ref="userNameInput2" v-model="form.userName2" placeholder="排序号" size="small" style="width:200px;">
                        <a-tooltip slot="suffix" title="Extra information">
                        </a-tooltip>
                      </a-input>
                    </a-col>
                    <a-col :span="24">
                      <a-divider :orientation="orientationType" :style="titleStyleConfig">文件路径</a-divider>
                    </a-col>
                    <a-col :span="24">
                      <a-input ref="userNameInput3" v-model="form.userName3" placeholder="文件路径" size="small" style="width:200px;">
                        <a-tooltip slot="suffix" title="Extra information">
                        </a-tooltip>
                      </a-input>
                    </a-col>
                    <a-col :span="24">
                      <a-divider :orientation="orientationType" :style="titleStyleConfig">系统标题名称</a-divider>
                    </a-col>
                    <a-col :span="24">
                      <a-input ref="userNameInput4" v-model="form.userName4" placeholder="系统标题名称" size="small" style="width:200px;">
                        <a-tooltip slot="suffix" title="Extra information">
                        </a-tooltip>
                      </a-input>
                    </a-col>
                    <a-col :span="24">
                      （以下设置对本单位所有模板生效)
                      <template>
                        <a-checkbox-group @change="orgChange">
                          <a-row>
                            <a-col :span="20">
                              <a-checkbox value="0">
                                登录页显示二维码
                              </a-checkbox>
                            </a-col>
                            <a-col :span="17">
                              <a-checkbox value="1">
                                显示系统版本
                              </a-checkbox>
                            </a-col>
                            <a-col :span="20">
                              <a-checkbox value="2">
                                底部显示备案信息
                              </a-checkbox>
                            </a-col>
                          </a-row>
                        </a-checkbox-group>
                      </template>
                    </a-col>
                  </a-row>
                </a-tab-pane>
              </a-tabs>
            </div>
          </template>
        </a-layout-sider>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>
<script>

  const backgroundOptions = [
    { label: '原图居中', value: '0' },
    { label: '原图居左', value: '1' },
    { label: '等比缩放', value: '2' },
    { label: '全屏拉伸', value: '3' },
  ];
  const showOptions = ['快速', '中速', '慢速'];
  function getBase64(file) {
    debugger
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  export default {
    components: {

    },
    computed: {
      loginStyle (){//登陆 背景
        const bg = {
          backgroundImage:'url('+ this.loginStyleConfig.image +')',
          backgroundRepeat: this.loginStyleConfig.backgroundRepeat,
          backgroundSize: this.loginStyleConfig.backgroundSize,
          backgroundPosition: this.loginStyleConfig.backgroundPosition,
          backgroundColor: this.loginStyleConfig.backgroundColor,
          width: this.loginStyleConfig.width,
          height: this.loginStyleConfig.height,
          margin:this.loginStyleConfig.margin,
        }
        switch (this.backgroundType) {
          case "0":
            bg['backgroundPosition'] = 'center';
            bg['backgroundSize'] = '';
            break;
          case "1":
            bg['backgroundPosition'] = 'left';
            bg['backgroundSize'] = '';
            break;
          case "2":
            bg['backgroundSize'] = '100% 100%';
            break;
          case "3":
            bg['backgroundSize'] = 'cover';
            break;
          default: '';
        }
        return bg
      },
      mainStyle() {
        const bg = {
          backgroundColor: this.mainStyleConfig.backgroundColor,
          height: this.mainStyleConfig.height
        }
        return bg
      },
      loginFormStyle() {//登陆 form表单样式
        const bg = {
          position: this.loginFormStyleConfig.position,
          top:this.loginFormStyleConfig.positionX,
          left: this.loginFormStyleConfig.positionY,
          backgroundColor: this.loginFormStyleConfig.backgroundColor,
          padding:this.loginFormStyleConfig.padding,
          width:this.loginFormStyleConfig.width,
          height: this.loginFormStyleConfig.height,
          borderRadius: this.loginFormStyleConfig.backgroundColor,
        }
        return bg
      },
      loginButtonStyle() {//登陆 按钮样式
        const bg = {
          width:this.loginButtonStyleConfig.width,
          borderRadius: this.loginButtonStyleConfig.borderRadius,
          backgroundColor: this.loginButtonStyleConfig.backgroundColor,
        }
        return bg
      },
      logoStyle() {//logo 样式
        const bg = {
          width: this.logoStyleConfig.width,
          height: this.logoStyleConfig.height,
          borderRadius: this.logoStyleConfig.borderRadius,
          position: this.logoStyleConfig.position,
          left: this.logoStyleConfig.left,
          top: this.logoStyleConfig.top,
        }
        return bg
      },
      logoUrl() {
        const url = {
          logoUrl: this.logoUrlConfig.url
        }
        return url.logoUrl
      },
    },
    data() {
      return {
        baseImage: 'https://img.tukuppt.com/bg_grid/00/03/73/zyoG66FKeA.jpg!/fh/350',
        backgroundOptions,//tab页 背景图片切换 配置
        showOptions,//tab页 切换速度配置
        backgroundType: '',
        isShow: '0',
        colorValue: '',
        orientationType: 'left',
        previewVisible: false,
        previewImage: '',
        fileList: [
          {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://img.tukuppt.com/bg_grid/00/13/23/4e2KxRRsIO.jpg!/fh/350',
          },
          {
            uid: '-2',
            name: 'image.png',
            status: 'done',
            url: 'https://img.tukuppt.com/bg_grid/00/05/07/Ty8y0T38xD.jpg!/fh/350',
          },
          {
            uid: '-3',
            name: 'image.png',
            status: 'done',
            url: 'https://img.tukuppt.com/bg_grid/00/06/51/eQQgRngDKS.jpg!/fh/350',
          },
          {
            uid: '-4',
            name: 'image.png',
            status: 'done',
            url: 'https://img.tukuppt.com/bg_grid/00/03/55/wgzuYXpROv.jpg!/fh/350',
          },
          {
            uid: '-5',
            name: 'image.png',
            status: 'error',
          },
        ],
        form: {//tab页 input 绑定值
          userName: '',
          userName1: '',
          userName2: '',
          userName3: '',
          userName4: '',
          value1: '',
          value2: '',
          color: '',
          color1: '',
          color2: '',
        },
        titleStyleConfig: { //divider 配置
          color: ''
        },
        mainStyleConfig: {//main 配置
          backgroundColor: '#f0f0f0',
          height: '640px'
        },
        logoUrlConfig: {
          url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3213337945,382317460&fm=26&gp=0.jpg'
        },
        logoStyleConfig: {//logo 配置
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          position: 'absolute',
          left: '224px',
          top: '121px',
        },
        loginStyleConfig: {//登陆 背景配置
          image: 'https://img.tukuppt.com/bg_grid/00/03/48/m6kyttJOVT.jpg!/fh/350',
          backgroundRepeat: 'no-repeat',
          backgroundPosition:'',
          backgroundSize: '100% 100%',
          backgroundColor: '',
          width: '1260px',
          height: '100%',
          margin:'0 auto',
        },
        loginFormStyleConfig: {//登陆 表单配置
          position: 'absolute',
          positionX: '212px',
          positionY: '561px',
          backgroundColor:'rgb(255,255,255,0.2)',
          padding:'15px 20px',
          width:'300px',
          height:'300px',
          borderRadius: '5px',
        },
        loginButtonStyleConfig: {//登陆 按钮配置
          width:'200px',
          borderRadius: '25px',
          backgroundColor: '#FF005A',
        },
      }
    },
    watch:{
      colorValue(value){
        console.log(value)
      }
    },
    mounted() {

    },
    methods: {
      move(e){
        let odiv = e.currentTarget;        //获取事件绑定目标元素
        console.log(odiv);
        //算出鼠标相对元素的位置
        let disX = e.clientX - odiv.offsetLeft;
        let disY = e.clientY - odiv.offsetTop;
        document.onmousemove = (e)=>{       //鼠标按下并移动的事件
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = e.clientX - disX;
          let top = e.clientY - disY;

          // // 获取父元素 自元素 的宽高
          // let {
          //   offsetHeight: parentNodeHeight,
          //   offsetWidth: parentNodeWidth,
          // } = this.$refs.parentNode;
          // let {
          //   offsetHeight: sonNodeHeight,
          //   offsetWidth: sonNodeWidth,
          // } = this.$refs.sonNode;
          //
          // // 左上角(left)
          // if (left < 0) {
          //   left = 0;
          // }
          // if (top < 0) {
          //   top = 0;
          // }
          // // 左下角
          // if (top > parentNodeHeight - sonNodeHeight) {
          //   top = parentNodeHeight - sonNodeHeight;
          // }
          // if (left > parentNodeHeight - sonNodeWidth) {
          //   left = parentNodeHeight - sonNodeWidth;
          // }




          //绑定元素位置到positionX和positionY上面
          this.loginFormStyleConfig.positionX = top;
          this.loginFormStyleConfig.positionY = left;

          //移动当前元素
          odiv.style.left = left + 'px';
          odiv.style.top = top + 'px';
        };
        document.onmouseup = (e) => {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      },
      handleChange(data){
        console.log(data)
      },
      handleActiveChange(data){
        console.log(data)
      },
      typeConfigChange() {//切换 属性设置 显示\隐藏
          this.isShow = '1';
      },
      loginConfigchange() {//切换 登陆框背景按钮配置 显示隐藏
        this.isShow = '0';
      },
      LoginConfigReset() {//登陆 配置 重置 恢复默认
        let routeData = this.$router.resolve({
          path: "/pcPreview",
          // query: { id: 2 },
        });

        // localStorage.setItem(2, JSON.stringify(this.curList));

        window.open(routeData.href, "_blank");
      },
      mainStyleChange(color) {//main 背景 颜色 事件
          console.log(color);
          this.mainStyleConfig.backgroundColor = color;
      },
      // LoginStyleChange(color) {//登陆 背景 颜色 事件
      //     this.loginFormStyleConfig.backgroundColor = color;
      // },
      // LoginButtonColorChange(color) {//登陆 按钮 颜色 事件
      //   this.loginButtonStyleConfig.backgroundColor = color;
      // },
      orgChange(checkedValues) {//tab页 基本信息 以下设置对本单位所有模板生效
        console.log('checked = ', checkedValues);
      },
      backgroundChange(e) {//tab页 背景图片显示方式切换
        this.backgroundType = e.target.value;
        },
      onChange2(e) {

      },
      callback(val){

      },
      handleCancel() {
        this.previewVisible = false;
      },
      async handlePreview(file) {
        debugger
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
        this.previewImage = file.url || file.preview;
        this.previewVisible = true;
      },
      handleChange({ fileList }) {
        debugger
        this.fileList = fileList;
      },
    },

  }
</script>
<style>
  #components-layout-demo-basic {
    text-align: center;
  }
  #components-layout-demo-basic .ant-layout-header,
  #components-layout-demo-basic .ant-layout-footer {
    background: #fff;
    color: #fff;
  }
  #components-layout-demo-basic .ant-layout-footer {
    line-height: 1.5;
  }
  #components-layout-demo-basic .ant-layout-sider {
    background: #fff;
    color: #fff;
    line-height: 120px;
  }
  #components-layout-demo-basic .ant-layout-content {
    background: #fff;
    color: #fff;
    min-height: 120px;
    line-height: 120px;
  }
  #components-layout-demo-basic > .ant-layout {
    margin-bottom: 48px;
  }
  #components-layout-demo-basic > .ant-layout:last-child {
    margin: 0;
  }
  .loginForm .ant-input {
    border-radius: 25px;
  }
  .loginForm {
    border: 1px solid rgb(255,255,255,0) ;
  }
  .loginForm:hover {
    border: 1px dashed red;
    box-sizing: border-box;
    cursor: move;
  }
  .logoBox>img:hover {
    opacity: 0.8;
    cursor: move;
  }

  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>
