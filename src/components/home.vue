<template>
  <el-container class="container">
    <!-- 头部 -->
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <img src="@/assets/logo.png" alt>
        </el-col>
        <el-col :span="19" class="middle">
          <h2>电商后台管理系统</h2>
        </el-col>
        <el-col :span="1" class="right">
          <a href>退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside class="aside" width="200px">
        <el-menu default-active="2" unique-opened>
          <!-- 第一个 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-location"></i>
                用户列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 第二个 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <i class="el-icon-location"></i>
                角色列表
              </el-menu-item>
              <el-menu-item index="2-2">
                <i class="el-icon-location"></i>
                权限列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 第三个 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">
                <i class="el-icon-location"></i>
                商品列表
              </el-menu-item>
              <el-menu-item index="3-2">
                <i class="el-icon-location"></i>
                分类参数
              </el-menu-item>
              <el-menu-item index="3-3">
                <i class="el-icon-location"></i>
                商品分类
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 第四个 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">
                <i class="el-icon-location"></i>
                订单列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 第五个 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">
                <i class="el-icon-location"></i>
                数据报表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主栏 -->
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {}
};
</script>

<style>
.container {
  height: 100%;
  background-color: #b3c0d1;
}
.main {
  background-color: antiquewhite;
}
.aside {
  background-color: #fff;
}
.middle {
  /* width: 100%; */
  text-align: center;
}
.right a {
  display: inline-block;
  margin-top: 22px;
  height: 100%;
  line-height: center;
}
</style>
