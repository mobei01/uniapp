<template>
	<view class="con">
		<view class="my-header">
		  <view class="my-header-title"><text>我的</text></view>
			<view class="my-header-content">
				<view class="my-header-name">您好，张三</view>
        <view>
          <view class="my-header-address">某某办公室/某某处室</view>
          <view class="my-header-email">zhangsan@csxxmail.cn</view>
				</view>
			</view>
		</view>

    <view class="my-content">
      <view class="zr-list" v-for="item in myInfoList" :key="item.title">
        <text class="zr-list-left">{{item.title}}</text>
        <text class="zr-list-right">{{item.desc}}</text>
      </view>
    </view>

    <view class="login-out">
      <u-button type="primary">安全退出</u-button>
    </view>
	</view>
</template>

<script>	
	export default {
		name:'my',
		components:{
		},
		data:() => {
			return {
				myInfoList: [
          {
            title: '电话',
            desc: '138 8888 8888'
          },
          {
            title: '邮箱',
            desc: 'zhangsan@csxxmail.cn'
          },
          {
            title: '所属机构',
            desc: '某某办公室/某某处室'
          },
          {
            title: '当前版本',
            desc: 'V1.0.1'
          }
        ]
			}
		},
		methods:{
		}
	}
</script>

<style lang="scss" scoped>
	.con{
		width: 100%;
		height: 100%;
		background-color: #EFF2F5;
	}
  .my-header {
    width: 100%;
    height: 400rpx;
    background-image: linear-gradient(-139deg, #4e88f8 0%, #67a4ff 100%);

    .my-header-title {
      padding: 33.3333rpx 0 33.3333rpx 29.1666rpx;
      font-size: 41.6666rpx;
      color: #fff;
      line-height: 58.3333rpx;
    }

    .my-header-content {
      width: 691.6666rpx;
      height: 268.75rpx;
      background-color: #fff;
      border-radius: 20.8333rpx;
      margin: auto;
    }

    .my-header-name {
      height: 120.8333rpx;
      padding-left: 118.75rpx;
      font-size: 16px;
      line-height: 118.75rpx;
      border-bottom: 1px solid #f0f0f0;
      color: rgba(0,0,0,.85);
      font-weight: bold;
    }

    .my-header-address, .my-header-email {
      margin-left: 22.9166rpx;
      font-size: 14px;
      color: rgba(0,0,0,.65);
      line-height: 45.8333rpx;
    }
    .my-header-address {
      margin: 22.9166rpx 0 8.3333rpx 22.9166rpx;
    }
    .my-header-email {
      margin-bottom: 22.9166rpx;
    }
  }
  
  .my-content {
    width: 691.6666rpx;
    // height: 364.5833rpx;
    margin: auto;
    margin-top: 25rpx;
    padding: 0 12.5rpx;
    border-radius: 20.8333rpx;
    background: #fff;
    box-shadow: 0 3px 14px 2px rgba(29,83,130,.21);
    .zr-list {
      height: 87.5rpx;
      border-bottom: 1px solid #f0f0f0;
      display: flex;
      align-items: center;
      padding: 0 6.25rpx;
    }
    .zr-list-right {
      margin-left: auto;
    }
  }

  .login-out {
    width: 691.6666rpx;
    height: 91.6666rpx;
    margin: auto;
    margin-top: 66.6666rpx;
  }
</style>
