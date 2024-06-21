---
title: ChatPGT
date: 2023-03-24 18:35:32
toc: true #是否启用内容索引
categories:
   - 学习娱乐
tags:
   - ChatGPT
---

这里会放置一些可用且免费的语言大模型，咱会不定期检查，删除不可用的并更新可用的。

国产大爆发，考虑到大部分用户难以链接外网，所以仅放置免费的国产大模型

排名根据[SuperCLUE](https://github.com/CLUEbenchmark/SuperCLUE?tab=readme-ov-file)  [2024.4月份数据](https://www.cluebenchmarks.com/superclue_2404)设置，上此页面者均为第一梯队大模型

token价格为调用api的价格，网页使用均免费。(最高价即为参与排名的模型价格)

更新时间：2024-6-21

<div class="post-body">
   <div id="links">
      <style>
         .tag {
           display: inline-block;
           float: left;  
           padding: 0.2em 0.6em; 
           border-radius: 1em;
           background-color: #0fa37f; /* 添加绿色底色 */
           font-size: 0.8em;
           color: #fff;  /* 白色字体 */
           margin: 0.2em 0.5em 0.2em 0; /* 上0.2em 右0.5em 下0.2em 左0 */ 
         }
         .tagj {
           display: inline-block;
           float: left;  
           padding: 0.2em 0.6em; 
           border-radius: 1em;
           background-color: #FF8C00; /* 添加绿色底色 */
           font-size: 0.8em;
           color: #fff;  /* 白色字体 */
           margin: 0.2em 0.5em 0.2em 0; /* 上0.2em 右0.5em 下0.2em 左0 */ 
         }
         .tagx {
           display: inline-block;
           float: left;  
           padding: 0.2em 0.6em; 
           border-radius: 1em;
           background-color: #f07c82; /* 添加绿色底色 */
           font-size: 0.8em;
           color: #fff;  /* 白色字体 */
           margin: 0.2em 0.5em 0.2em 0; /* 上0.2em 右0.5em 下0.2em 左0 */ 
         }
         .tagxx {
           display: inline-block;
           float: left;  
           padding: 0.2em 0.6em; 
           border-radius: 1em;
           background-color: #eea2a4; /* 添加绿色底色 */
           font-size: 0.8em;
           color: #fff;  /* 白色字体 */
           margin: 0.2em 0.5em 0.2em 0; /* 上0.2em 右0.5em 下0.2em 左0 */ 
         }
         .clearfix::after {
           content: "";
           clear: both;
           display: table; 
         }
         .special {/* 灰色标签 */
           background-color: #d9d9d9;
           color: #fff; 
         }  
         .links-content{
         margin-top:1rem;
         }
         .link-navigation::after {
         content: " ";
         display: block;
         clear: both;
         }
         .card {
         width: 45%;
         font-size: 1rem;
         padding: 10px 20px;
         border-radius: 10px;
         transition-duration: 0.15s;
         margin-bottom: 1rem;
         display:flex;
         }
         .card:nth-child(odd) {
         float: left;
         }
         .card:nth-child(even) {
         float: right;
         }
         .card:hover {
         transform: scale(1.1);
         box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
         }
         .card a {
         border:none;
         }
         .card .ava {/* 头像 */
         width: 3rem!important;
         height: 3rem!important;
         margin:0!important;
         margin-right: 1em!important;
            border-radius: 50%;
            /* 圆角↑  */
            box-shadow: 0 0 4px 3px #e4e4e4;
         }
         .card .card-header {/* 灰色块 */
         font-style: italic;
         overflow: hidden;
         width: 100%;         /*border-radius:50px;*/
         }
         .card .card-header a {
         font-style: normal;
         color: #2bbc8a;
         font-weight: bold;
         text-decoration: none;
         }
         .card .card-name a {
         font-style: normal;
         color: #2bbc8a;
         font-weight: bold;
         text-decoration: none;
         }
         .card .card-header a:hover {
         color: #d480aa;
         text-decoration: none;
         }
         .card .card-header .info {
         font-style:normal;
         color:#a3a3a3;
         font-size:14px;
         min-width: 0;
         overflow: hidden;
         white-space: nowrap;
         }
      </style>
      <div class="links-content">
         <div class="link-navigation">
            <!--<div class="card" style="width: 100%;">
                <div style="float: left">
                    <img class="ava" src="https://ca.slack-edge.com/T052WH244T0-U052NKA4PL7-fa274978c0ca-48" />
                    <div class="card-name" style="display: inline-block;"> 
                        <a href="https://evelynall.github.io/2023/04/14/ChatGPT平替/">Claude-ChatGPT平替(无限制、无需翻墙，约等于GPT 3.5)</a>
                    </div>
                </div>
                <div class="clearfix">
                     <div class="tag">无限制</div> 
                     <div class="tag">连续对话</div>  
                     <div class="tag">下载对话</div>
                     <div class="tag">多个对话</div> 
                </div>
            </div>-->
          <div class="card">
                <div style="float: left">
                    <img class="ava" src="https://cdn.baichuan-ai.com/build/_next/static/media/logo.ce66885d.png" />
                    <div class="card-name" style="display: inline-block;"> 
                        <a href="https://ying.baichuan-ai.com/chat?from=home">百小应-百川智能</a>
                    </div>
                </div>
                <div class="clearfix">
                     <div class="tag">搜索</div> 
                     <div class="tag">读图</div> 
                     <div class="tag">文档</div> 
                     <div class="tagx">绘图</div>
                     <div class="tagj">8-12/百万token</div> 
                </div>
            </div>
            <div class="card">
                <div style="float: left">
                    <img class="ava" src="https://open.bigmodel.cn//img/icons/favicon-32x32.png" />
                    <div class="card-name" style="display: inline-block;"> 
                        <a href="https://chatglm.cn/main/alltoolsdetail">智谱清言-智谱AI</a>
                    </div>
                </div>
                <div class="clearfix">
                     <div class="tag">搜索</div> 
                     <div class="tagx">读图</div> 
                     <div class="tag">文档</div>
                     <div class="tag">绘图</div>
                     <div class="tagj">10-0.1/百万token</div>
                </div>
            </div>
            <div class="card">
                <div style="float: left">
                    <img class="ava" src="https://img.alicdn.com/imgextra/i4/O1CN01FOwagl1XBpyVA2QVy_!!6000000002886-2-tps-512-512.png" />
                    <div class="card-name" style="display: inline-block;"> 
                        <a href="https://tongyi.aliyun.com/qianwen/">通义千问-阿里</a>
                    </div>
                </div>
                <div class="clearfix">
                     <div class="tag">搜索</div> 
                     <div class="tag">读图</div> 
                     <div class="tag">文档</div>
                     <div class="tag">绘图</div>
                     <div class="tagj">12-2/百万token</div>
                </div>
            </div>
                        <div class="card">
                <div style="float: left">
                    <img class="ava" src="https://yuanbao.tencent.com/favicon.ico" />
                    <div class="card-name" style="display: inline-block;"> 
                        <a href="https://yuanbao.tencent.com/chat">腾讯元宝-腾讯</a>
                    </div>
                </div>
                <div class="clearfix">
                     <div class="tag">搜索</div> 
                     <div class="tag">读图</div> 
                     <div class="tag">文档</div>
                     <div class="tag">绘图</div>
                     <div class="tagj">100-5/百万token</div>
                     <div class="tagj">部分免费api</div>
                </div>
            </div>
            <div class="card">
                <div style="float: left">
                    <img class="ava" src="https://nlp-eb.cdn.bcebos.com/logo/favicon.ico" />
                    <div class="card-name" style="display: inline-block;"> 
                        <a href="https://yiyan.baidu.com/">文心一言-百度</a>
                    </div>
                </div>
                <div class="clearfix">
                     <div class="tag">搜索</div> 
                     <div class="tag">读图</div> 
                     <div class="tag">文档</div>
                     <div class="tag">绘图</div>
                     <div class="tagj">120-8/百万token</div>
                     <div class="tagj">部分免费api</div>
                </div>
            </div>
            <div class="card">
                <div style="float: left">
                    <img class="ava" src="https://statics.moonshot.cn/kimi-chat/favicon.ico" />
                    <div class="card-name" style="display: inline-block;"> 
                        <a href="https://kimi.moonshot.cn/">Kimi-月之暗面</a>
                    </div>
                </div>
                <div class="clearfix">
                     <div class="tagj">读链接</div>
                     <div class="tagj">网页总结</div>
                     <div class="tag">搜索</div> 
                     <div class="tag">读图</div> 
                     <div class="tag">文档</div>
                     <div class="tagx">绘图</div>
                     <div class="tagj">60-12/百万token</div>
                </div>
            </div>
            <div class="card">
                <div style="float: left">
                    <img class="ava" src="https://hailuoai.com//assets/logo/favicon.png" />
                    <div class="card-name" style="display: inline-block;"> 
                        <a href="https://hailuoai.com/">海螺ai-MiniMax</a>
                    </div>
                </div>
                <div class="clearfix">
                     <div class="tagj">免登录</div>
                     <div class="tagj">语音交互</div>
                     <div class="tag">搜索</div> 
                     <div class="tag">读图</div> 
                     <div class="tag">文档</div>
                     <div class="tagx">绘图</div>
                     <div class="tagj">60-5/百万token</div>
                </div>
            </div>
         </div>
      </div>
   </div>
</div>