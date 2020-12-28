<template>
  <view class="home-layout">
    <div class="header">
      <div class="header-title">
        <p>长沙协同办公</p>
      </div>
    </div>
    <view>
      <v-button @click="scanDocInfo()">本地文档预览</v-button>
      <v-button @click="editorDocInfo()">本地文档编辑</v-button>
      <v-button @click="downFileInfo(false)">远程文档预览</v-button>
      <v-button @click="downFileInfo(true)">远程文档编辑</v-button>
      <v-button>测试按钮</v-button>
    </view>
  </view>
</template>

<script>
  const wpsTool = uni.requireNativePlugin("CL-WPSTool");
  export default {
    components: {},
    data() {
      return {}
    },
    onLoad() {},
    onReady() {},
    methods: {
      //预览文档
      scanDocInfo() {
        let filePath = plus.io.convertLocalFileSystemURL("/static/TestExcel.xls");
        wpsTool.wpsOpenFile(filePath, result => {
          console.log(result + "aaa");
        })

      },
      editorDocInfo() {
        let filePath = plus.io.convertLocalFileSystemURL("/static/TestExcel.xls");
        let saveRootPath = plus.io.convertLocalFileSystemURL("_downloads/")
        let options = {
          filePath: filePath, //文件路径 必填
          saveRootPath: saveRootPath, //文件保存路径 必填
          userName: "修改人" //必填，用于记录编辑信息
        };

        wpsTool.wpsEditorFile(options, result => {

          console.log(result);
          const {
            code,
            msg
          } = result;
          if (code == 1) {
            //成功;
            let newPath = result.path; //该路径为绝对路径;
            console.log(newPath);
            //将绝对路径转相对路径;用于上传到服务器的;
            let relativepath = plus.io.convertAbsoluteFileSystem(newPath); //为平台的相对路径，可以用于上传到服务器;
            console.log(relativepath);
          } else {
            //失败情况;
          }
          //如果想将文件进行上传;需将绝对路径转成相对路径;
        })
      },
      openDocInfo(filePath, isEditor) {
        if (isEditor) {
          wpsTool.wpsOpenFile(filePath, result => {
            console.log(result + "aaa");
          })
        } else {
          let saveRootPath = plus.io.convertLocalFileSystemURL("_downloads/")
          let options = {
            filePath: filePath, //文件路径 必填
            saveRootPath: saveRootPath, //文件保存路径 必填
            userName: "修改人" //必填，用于记录编辑信息
          };

          wpsTool.wpsEditorFile(options, result => {
            console.log(result);
            const {
              code,
              msg
            } = result;
            if (code == 1) {
              //成功;
              let newPath = result.path; //该路径为绝对路径;
              console.log(newPath);
              //将绝对路径转相对路径;
              let relativepath = plus.io.convertAbsoluteFileSystem(newPath); //为平台的相对路径，可以用于上传到服务器;
              console.log(relativepath);
            } else {
              //失败情况;							 
            }
            //如果想将文件进行上传;需将绝对路径转成相对路径;
          })
        }
      },
      //文件下载
      downFileInfo(state) {
        uni.downloadFile({
          url: "http://192.168.50.164/TestDoc.doc",
          success: (res) => {
            if (res.statusCode === 200) {
              const {
                tempFilePath
              } = res;
              let filePath = plus.io.convertLocalFileSystemURL(tempFilePath);
              this.openDocInfo(filePath, state);
            }
          },
          fail: (e) => {
            console.log(e);
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .view-pager-con {
    height: 100%;
    width: 100%;
  }

  .home-layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
</style>
