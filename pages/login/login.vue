<template>
  <view style="height: 100%">
    <!-- #ifndef MP -->
    <uni-status-bar></uni-status-bar>
    <view>
      <view
        class="iconfont icon-guanbi flex align-center justify-center font-lg"
        style="width: 100rpx; height: 100rpx"
        hover-class="bg-light"
        @click="back"
      ></view>
    </view>
    <!-- #endif -->
    <view class="flex flex-column align-center justify-center">
      <image
        v-if="status"
        src="/static/common/7.png"
        style="width: 300rpx; height: 300rpx; background: rgb(255, 255, 255)"
      ></image>
      <image
        v-else
        src="/static/common/3.png"
        style="width: 300rpx; height: 300rpx; background: rgb(255, 255, 255)"
      ></image>
    </view>
    <view
      class="text-center"
      style="font-size: 45rpx; color: rgb(248, 127, 151)"
      >{{ status ? '验证码登录' : '账号密码登录' }}</view
    >

    <view class="px-2" style="width: 80%; margin: 0 auto">
      <template v-if="!status">
        <!-- <view
          class="mb-2 pl-2"
          style="
            background: white;
            box-shadow: 0px 0px 10rpx #c2c2c2;
            border-radius: 20rpx;
            display: flex;
            align-items: center;
          "
        >
          <icon class="iconfont icon-zhanghao"></icon>
          <input
            type="text"
            v-model="username"
            placeholder="昵称/手机号/邮箱"
            class="p-2"
          />
        </view> -->

        <!-- <view
          class="mb-2 pl-2 flex align-stretch"
          style="
            background: white;
            box-shadow: 0px 0px 10rpx #c2c2c2;
            border-radius: 20rpx;
            display: flex;
            align-items: center;
          "
        >
          <icon class="iconfont icon-mima"></icon>
          <input
            type="text"
            v-model="password"
            placeholder="请输入密码"
            class="p-2 flex-1"
          /> -->
        <!-- <view
            class="
              
              flex
              align-center
              justify-center
              font
              text-muted
            "
            style="width: 130rpx"
            >忘记密码？</view
          > -->
        <!-- </view> -->
        <view>
          <u-row customStyle="margin-bottom: 10px" justify="center">
            <u-col span="12">
              <u--input
                v-model="username"
                placeholder="昵称/手机号/邮箱"
                prefixIcon="account-fill"
                prefixIconStyle="font-size: 22px;color: #909399"
              ></u--input>
            </u-col>
          </u-row>
          <u-row customStyle="margin-bottom: 10px" justify="center">
            <u-col span="12">
              <u--input
                v-model="password"
                placeholder="请输入密码"
                prefixIcon="lock-fill"
                prefixIconStyle="font-size: 22px;color: #909399"
              ></u--input>
            </u-col>
          </u-row>
        </view>
      </template>

      <template v-else>
        <!-- 手机号 -->
        <view
          v-if="registFlag"
          class="mb-2 flex align-stretch"
          style="
            background: white;
            box-shadow: 0px 0px 10rpx #c2c2c2;
            border-radius: 20rpx;
            display: flex;
            align-items: center;
          "
        >
          <view class="flex align-center justify-center font px-2">+86</view>
          <input
            type="text"
            v-model="phone"
            placeholder="请输入注册手机号"
            class="p-2 flex-1"
          />
        </view>
        <!-- 邮箱 -->
        <view
          v-if="!registFlag"
          class="mb-2 pl-2"
          style="
            background: white;
            box-shadow: 0px 0px 10rpx #c2c2c2;
            border-radius: 20rpx;
            display: flex;
            align-items: center;
          "
        >
          <icon class="iconfont icon-youxiang"></icon>
          <input
            type="text"
            v-model="email"
            placeholder="请输入注册邮箱"
            class="p-2"
          />
        </view>
        <view class="mb-2 flex align-stretch">
          <input
            type="text"
            v-model="code"
            placeholder="请输入验证码"
            class="p-2 flex-1"
            style="
              background: white;
              box-shadow: 0px 0px 10rpx #c2c2c2;
              border-radius: 20rpx;
              display: flex;
              align-items: center;
            "
          />
          <view
            class="flex align-center justify-center font-sm text-white ml-1"
            :class="codeTime > 0 ? 'bg-main-disabled' : 'bg-main'"
            style="width: 170rpx; border-radius: 20rpx"
            @click="getCode"
            >{{ codeTime > 0 ? codeTime + ' s' : '获取验证码' }}</view
          >
        </view>
      </template>
    </view>

    <view class="py-2 px-3">
      <!-- <button
        class="text-white"
        style="border-radius: 50rpx; border: 0; width: 80%"
        type="primary"
        :disabled="disabled"
        :class="disabled ? 'bg-main-disabled' : 'bg-main'"
        @click="submit"
        :loading="loading"
      >
        {{ loading ? '登录中...' : '登录' }}
      </button> -->
      <u-button
      style="border-radius: 50rpx; border: 0; width: 80%"
      @click="submit"
        :loading="loading"
        color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
        >{{ loading ? '登录中...' : '登录' }}</u-button
      >
    </view>

    <view class="flex align-center justify-center pt-2 pb-4">
      <view class="text-primary font-sm" @click="changeStatus">
        {{ status ? '账号密码登录' : '验证码登陆' }}
      </view>
      <text class="text-muted mx-2">|</text>
      <view v-if="!status" class="text-primary font-sm">登录遇到问题</view>
      <view
        v-if="status"
        class="text-primary font-sm"
        @click="registFlag = !registFlag"
        >{{ registFlag ? '前往邮箱注册' : '前往手机号注册' }}</view
      >
    </view>

    <view class="flex align-center justify-center">
      <view
        style="height: 1rpx; background-color: #dddddd; width: 100rpx"
      ></view>
      <view class="mx-2 text-muted">其他登录方式</view>
      <view
        style="height: 1rpx; background-color: #dddddd; width: 100rpx"
      ></view>
    </view>

    <other-login back></other-login>

    <!-- <view class="flex align-center justify-center text-muted">
			注册即代表同意<text class="text-primary">《xxx社区协议》</text>
		</view> -->
  </view>
</template>

<script>
import uniStatusBar from '@/components/uni-ui/uni-status-bar/uni-status-bar.vue'
import otherLogin from '@/components/common/other-login.vue'
export default {
  components: {
    uniStatusBar,
    otherLogin,
  },
  data() {
    return {
      status: false,
      username: '',
      password: '',
      phone: '',
      email: '',
      code: '',
      codeTime: 0,
      loading: false,
      registFlag: true,
    }
  },
  onLoad() {},
  computed: {
    disabled() {
      if (
        (this.username === '' || this.password === '') &&
        (this.phone === '' || this.code === '') &&
        (this.email === '' || this.code === '')
      ) {
        return true
      }
      return false
    },
  },
  methods: {
    back() {
      uni.navigateBack({
        delta: 1,
      })
    },
    // 初始化表单
    initForm() {
      this.username = ''
      this.password = ''
      this.phone = ''
      this.code = ''
    },
    // 切换登录方式
    changeStatus() {
      // 初始化表单
      this.initForm()
      this.status = !this.status
    },
    // 获取验证码
    getCode() {
      // 防止重复获取
      if (this.codeTime > 0) {
        return
      }
      if (this.registFlag) {
        console.log('手机注册')
        // 验证手机号
        if (!this.validate()) return
        // 请求数据-手机
        this.$H
          .post(
            '/user/sendcode',
            {
              phone: this.phone,
            },
            {
              native: true,
            }
          )
          .then((res) => {
            uni.showToast({
              title: res.data.msg,
              icon: 'none',
            })
            // 倒计时
            this.codeTime = 60
            let timer = setInterval(() => {
              if (this.codeTime >= 1) {
                this.codeTime--
              } else {
                this.codeTime = 0
                clearInterval(timer)
              }
            }, 1000)
          })
      } else {
        // 验证手机号
        console.log('发送邮箱')
        // 验证邮箱
        if (!this.validateE()) return
        // 请求数据-手机
        this.$H
          .post(
            '/user/sendEmail',
            {
              email: this.email,
            },
            {
              native: true,
            }
          )
          .then((res) => {
            uni.showToast({
              title: res.data.data.msg,
              icon: 'none',
            })
            // 倒计时
            this.codeTime = 60
            let timer = setInterval(() => {
              if (this.codeTime >= 1) {
                this.codeTime--
              } else {
                this.codeTime = 0
                clearInterval(timer)
              }
            }, 1000)
          })
      }
    },
    // 表单验证(手机)
    validate() {
      //手机号正则
      var mPattern = /^1[34578]\d{9}$/
      if (!mPattern.test(this.phone)) {
        uni.showToast({
          title: '手机号格式不正确',
          icon: 'none',
        })
        return false
      }
      // ...更多验证
      return true
    }, // 表单验证(邮箱)
    validateE() {
      //邮箱正则
      var mPattern =
        /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/
      if (!mPattern.test(this.email)) {
        uni.showToast({
          title: '邮箱格式不正确',
          icon: 'none',
        })
        return false
      }
      // ...更多验证
      return true
    },
    // 提交
    submit() {
      // 表单验证
      let url = ''
      let data = ''
      if (this.status) {
        if (this.registFlag) {
          // 手机验证码登录
          if (!this.validate()) return
          url = '/user/phonelogin'
          data = {
            phone: this.phone,
            code: this.code,
          }
        } else {
          if (!this.validateE()) return
          url = '/user/emailLogin'
          data = {
            email: this.email,
            code_email: this.code,
          }
          console.log('邮箱登录')
        }
      } else {
        // 账号密码登录
        url = '/user/login'
        data = {
          username: this.username,
          password: this.password,
        }
      }
      // 提交后端
      this.loading = true
      this.$H
        .post(url, data)
        .then((res) => {
          this.loading = false
          console.log(res)
          this.$U.user_id = res.id
          // 修改vuex的state,持久化存储
          this.$store.commit('login', res)
          // 开启socket
          this.$store.dispatch('openSocket')
          // 提示和跳转
          uni.navigateBack({
            delta: 1,
          })
          uni.showToast({
            title: '登录成功',
            icon: 'none',
          })
        })
        .catch((err) => {
          // 登录失败
          this.loading = false
        })
    },
  },
}
</script>

<style></style>
