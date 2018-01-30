<template>
    <div class="header">
    <Menu mode="horizontal" :theme="theme1" active-name="1">
        <div class="header-nav">         
            <a class="header-nav-logo">         
                <img src="https://file.iviewui.com/dist/fe8d29da1225d943e30f9ee1bddce78f.png" style="height: 100%;"/>
            </a>
            
            <div class="header-nav-list">               
                <MenuItem name="1">
                    <Icon type="ios-pulse-strong"></Icon>
                    营销管理
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-people"></Icon>
                    用户管理
                </MenuItem>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
                <MenuItem name="4">
                    <Icon type="settings"></Icon>
                    综合设置
                </MenuItem>
                <div class="topbars">
                    <div>
                        <Tooltip :content="value > 0 ? '有' + value + '条未读消息' : '无未读消息'" placement="bottom">
                            <Badge :count="value" dot>
                                <Icon type="ios-bell" :size="17"></Icon>
                            </Badge>
                        </Tooltip>
                    </div>
                    <div>
                        <Dropdown transfer trigger="click" >
                            <Icon type="android-person" :size="17"></Icon>
                            <!-- <Avatar style="background-color: #87d068" size="small" icon="person" /> -->
                            <a href="javascript:void(0)">
                                <Icon type="arrow-down-b"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem name="ownSpace">个人中心</DropdownItem>
                                <DropdownItem name="loginout" divided>退出登录</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    </Menu>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light'
            }
        }
    }
</script>

<style lang="css">
.header {
    width: 100%;top: 0;right: 0;z-index: 1000;position: fixed;
}
.header .ivu-menu-horizontal{
        height: 65px;
        line-height: 65px;
}
.header-nav {
    width: 95%;margin: 0 auto;height: 65px;
}
.header-nav-logo{
    float:left;
    height: 50px;
    margin-top: 8px;
}
.header-nav-list{
    float:right;height:inherit;
}
.topbars {
    position: relative;
    display: inline-block;
    vertical-align: middle;
}
.topbars div{
    float: left;
    margin: 0px 5px;
}
</style>
