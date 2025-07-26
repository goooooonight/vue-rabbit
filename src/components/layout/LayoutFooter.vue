<script setup></script>

<template>
  <footer>
    <!-- 底部服务 -->
    <div class="bg-white py-[40px]">
      <div class="xtx-container flex">
        <dl>
          <dt>客户服务</dt>
          <div class="dd-box">
            <dd><i class="iconfont icon-kefu"></i> 在线客服</dd>
            <dd><i class="iconfont icon-question"></i> 问题反馈</dd>
          </div>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <div class="dd-box">
            <dd><i class="iconfont icon-weixin"></i> 公众号</dd>
            <dd><i class="iconfont icon-weibo"></i> 微博</dd>
          </div>
        </dl>
        <dl>
          <dt>下载APP</dt>
          <div class="dd-box">
            <dd>
              <img src="/src/assets/images/qrcode.jpg" alt="" class="p-1.5" />
            </dd>
            <div
              class="w-[92px] flex flex-col items-center justify-center gap-1"
            >
              <span>扫描二维码</span>
              <span>立马下载APP</span>
              <el-button type="primary" size="default">下载页面</el-button>
            </div>
          </div>
        </dl>
        <dl>
          <dt>服务热线</dt>
          <dd class="hotline">
            <span class="block text-gray-500 text-2xl">400-0000-000</span>
            <small class="text-base">周一至周日 8:00-18:00</small>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 底部信息 -->
    <div class="footer-info h-[300px]">
      <div
        class="xtx-container h-[178px] flex justify-between px-[100px] py-[60px] border-b-2 border-b-gray-400"
      >
        <div class="slogan"><i class="iconfont icon-footer01"></i>价格亲民</div>
        <div class="slogan"><i class="iconfont icon-footer02"></i>物流快捷</div>
        <div class="slogan"><i class="iconfont icon-footer03"></i>品质新鲜</div>
      </div>
      <div class="mt-6">
        <ul
          class="mt-6 flex justify-center divide-solid divide-gray-400 divide-x-2"
        >
          <li>关于我们</li>
          <li>帮助中心</li>
          <li>售后服务</li>
          <li>配送与验收</li>
          <li>商务合作</li>
          <li>搜索推荐</li>
          <li>友情链接</li>
        </ul>
        <div class="mt-4 text-center copy-right">CopyRight@小兔鲜儿</div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
// 底部样式
footer {
  // 底部服务
  dl {
    height: 190px;
    color: #999;
    padding: 0 72px;
    border-right: 1px rgb(239, 239, 239) solid;
    &:first-child {
      padding-left: 25px;
    }
    &:last-child {
      border-right: none;
      padding-right: 0;
    }

    dt {
      font-size: 18px;
      text-align: center;
      margin-bottom: 36px;
    }
    .hotline {
      text-align: center;
      padding-top: 20px;
    }
    .dd-box {
      display: flex;
      gap: 10px;
      dd {
        width: 92px;
        height: 92px;
        border: 1px #e9e9e9 solid;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        i {
          font-size: 40px;
          color: #666666;
          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  // 底部信息
  .footer-info {
    background-color: #333;
    // 标签块
    .slogan {
      color: white;
      font-size: 30px;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      i {
        font-size: 50px;
      }
    }
    li {
      color: $infoTextColor;
      padding: 0 15px;
      &:hover {
        color: $xtxColor;
      }
      cursor: pointer;
    }
    // 版权信息
    .copy-right {
      color: $infoTextColor;
    }
  }
}
</style>
