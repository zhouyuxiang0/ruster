<template>
    <div id="side">
        <main>
            <div id="title">
                <span style="font-size: 1.8rem;">Rust</span>
                <span style="font-size: 1.2rem;">中文社区</span>
            </div>
            <div id="line"></div>
            <p style="color:green;"><strong>QQ群 : 570065685</strong></p>
            <p><span style="color:#7B463D;font-weight:bold;">支持Ruster：</span>这是社区项目,每月需要费用云服务器托管,请给予捐助,谢谢！联系<span style="color:#7B463D;font-weight:bold;">krircc@aliyun.com</span></p>
            <p><a href="/a/help"><strong>捐助链接</strong></a></p>
            <p>本站<a href="https://github.com/rustlang-cn/ruster" target="_blank"><strong>源码</strong></a>开源.</p>
        </main>
    </div>
</template>

<script>
/* eslint-disable */
import URLprefix from '../../config'
export default {
  name: 'side'
}
</script>

<style scoped>
main{
    background-color: #ffffff;
    box-shadow: 0 0 3px rgba(0,0,0,0.1), 0 -1px 1px rgba(0,0,0,0.1);
}
main a {
    color: #0541af;
}
main #title {
    padding-top: 0.3rem;
    color: #7B463D; 
    font-weight:bold;
}
main #line {
    border: 1px solid #acc;
}
main p, main #title {
    margin: 0 auto;
    width: 10rem;
}
</style>
