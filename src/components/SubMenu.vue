<template>
    <div class="submenu">
    <Menu :theme="theme3" active-name="1" style="width:200px;" open-names="['1','2','3']">
        <Submenu name="1">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                数据概览
            </template>
            <MenuItem name="1-1">
                应用概览
            </MenuItem>
            <MenuItem name="1-2">
                用户趋势
            </MenuItem>
             <MenuItem name="1-3">
                渠道分析
            </MenuItem>
             <MenuItem name="1-4">
                流存分析
            </MenuItem>
        </Submenu>
        
        <Submenu name="2">
            <template slot="title">
                <Icon type="android-contact"></Icon>
                用户探索
            </template>
            <MenuItem name="2-1">
                用户画像
            </MenuItem>
            <MenuItem name="2-2">
                用户分群
            </MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-pie"></Icon>
                电商业务分析
            </template>
            <MenuItem name="3-1">
                交易分析
            </MenuItem>
            <MenuItem name="3-2">
                复购分析
            </MenuItem>
        </Submenu>
         <Submenu name="4">
            <template slot="title">
                <Icon type="cloud"></Icon>
                数据探索
            </template>
            <MenuItem name="4-1">
                数据探索
            </MenuItem>
        </Submenu>
    </Menu>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme3: 'light'
            }
        }
    }
</script>
<style lang="css">
.submenu .ivu-menu-submenu-title{
    font-size: 12px;
    font-weight: bold;
    padding: 16px 10px 16px 24px;
}
.submenu .ivu-menu-item{
     font-size: 12px;
}
</style>