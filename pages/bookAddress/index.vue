<template>
  <view class="book-con">
    <view class="address-header">
      <view class="address-header-title">通讯录</view>
      <view class="address-header-search">
        <v-search :value="value" shape="round" background="rgba(0,0,0,0)" placeholder="请输入搜索关键词" />
      </view>
    </view>

    <view class="address-content">
      <view class="depart-content">
        <view class="zr-list" v-for="item in departList" :key="item.title" @click="goPhoneList">
          <p class="zr-list-left">{{item.name}}</p>
          <!-- <text class="zr-list-right">{{item.desc}}</text> -->
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'book-address',
    data() {
      return {
        value: '',
        phoneList: [],
        departList: [{
            id: 123456,
            name: '市办公厅',
            children: []
          },
          {
            id: 123457,
            name: '天心区办公厅'
          },
          {
            id: 123458,
            name: '开福区办公厅'
          },
          {
            id: 123459,
            name: '岳麓区办公厅'
          },
          {
            id: 123460,
            name: '雨花区办公厅'
          },
          {
            id: 123461,
            name: '芙蓉区办公厅'
          },
          {
            id: 123462,
            name: 'xx办公厅'
          },
          {
            id: 123463,
            name: 'xx办公厅'
          },
          {
            id: 123464,
            name: 'xx办公厅'
          }
        ]
      }
    },
    methods: {
      goPhoneList() {
        uni.navigateTo({
          url: '/pages/bookAddress/phoneList'
        })
      }
    }
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

    // .address-header-search {
    //   // .px2rem(height, 45);
    //   display: flex;
    //   align-items: center;
    //   input {
    //     // .px2rem(width, 332);
    //     // .px2rem(height, 28);
    //     background: #fff;
    //     border-radius: 10px;
    //   }
    //   input::placeholder {
    //     font-size: 14px;
    //     // sx2rem(line-height, 22);
    //   }
    // }
  }

  .zr-list {
    height: 89.5833rpx;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    padding: 0 33.3333rpx;
  }

  .zr-list-right {
    margin-left: auto;
  }
</style>
