<template>
  <view class="book-con">
    <view class="address-header">
      <view class="address-header-title">通讯录</view>
      <view class="address-header-search">
        <v-search :value="value" shape="round" background="rgba(0,0,0,0)" placeholder="请输入搜索关键词" />
      </view>
    </view>

    <view class="address-content">
      <view class="phone-content">
        <view class="phone-list" v-for="item in phoneList" :key="item.title">
          <view class="phone-list-left">
            <view class="phone-list-name">{{item.name}}</view>
            <view class="phone-list-no">{{item.phone}}</view>
          </view>
          <!-- <text class="phone-list-right">{{item.desc}}</text> -->
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'phone-list',
    data() {
      return {
        value: '',
        phoneList: [{
            name: '张三',
            phone: 18888888888
          },
          {
            name: '张四',
            phone: 18888888888
          },
          {
            name: '张五',
            phone: 18888888888
          },
          {
            name: '张六',
            phone: 18888888888
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .book-con {
    height: 100%;
  }

  .address-header {
    width: 100%;
    // .px2rem(height, 100);
    // .px2rem(padding-left, 16);
    height: 208.3333rpx;
    padding-left: 33.3333rpx;
    background-image: linear-gradient(-139deg, #4e88f8 0%, #67a4ff 100%);

    .address-header-title {
      // .px2rem(height, 55);
      display: flex;
      align-items: center;
      height: 114.5833rpx;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
    }
  }

  .phone-list {
    width: 100%;
    height: 64px;
    padding: 20.8333rpx 33.3333rpx;
    border-bottom: 1px solid #f0f0f0;

    .phone-list-name {
      margin-bottom: 10.4166rpx;
      font-size: 33.3333rpx;
      line-height: 45.8333rpx;
      color: rgba(0, 0, 0, .85);
    }

    .phone-list-no {
      font-size: 25rpx;
      color: rgba(0, 0, 0, .45);
      line-height: 33.3333rpx;
    }
  }
</style>
