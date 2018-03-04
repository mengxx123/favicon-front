<template>
    <my-page title="favicon 制作 - 帮助" backable>
        <ui-article>
            <h2>favicon.ico 介绍</h2>
	        <ul>
				<li>所谓favicon，即Favorites Icon的缩写，顾名思义，便是其可以让浏览器的收藏夹中除显示相应的标题外，还以图标的方式区别不同的网站。当然，这不仅仅是Favicon的全部，根据浏览器的不同，Favicon显示也有所区别：在大多数主流浏览器如FireFox和Internet Explorer (5.5及以上版本)中，favicon不仅在收藏夹中显示，还会同时出现在地址栏上，这时用户可以拖曳favicon到桌面以建立到网站的快捷方式；除此之外，标签式浏览器甚至还有不少扩展的功能，如FireFox甚至支持动画格式的favicon等。</li>
				<li>favicon.ico图标是网站的缩略标志，可以显示在浏览器标签、地址栏左边和收藏夹，是展示网站个性的缩略logo标志，也可以说是网站头像，如果要让网站看起来更专业、更美、更有个性，favicon.ico是必不可少的，所以你在本站使用ICO图标转换工具就可以轻松达到你的要求。</li>
				<li>在我们的网站建设中，为网站打造一个契合网站主题的个性化标志则是必需的，这直接关系到能否成功地塑造网站的品牌。这从某些角度看仍在网站推广的范畴之内，而欲取得成功，不仅包括良好的页面设计、令人印象深刻的网站Logo，也包括favicon。</li>
				<li>从特定的技术角度看，favicon也并不只是仅仅让网站给人更专业的观感，也可以在一定程度上减轻服务器的流量带宽占用：一般为了提高网站的可用性，我们都会为自己的网站创建一个自定义的404错误文件，在这种情况下，如果网站没有相应的favicon.ico文件，每当有用户收藏网站/网页时， Web服务器都会调用这个自定义的404文件，并在网站的错误日志中记录。这显然是应该予以避免的。</li>
			</ul>

            <h2>favicon.ico 如何调用</h2>
            <p>在网页程序代码的head与/head之间加入下以代码:</p>
            <!-- 添加复制功能 -->
            <!-- <pre><code><head>
...
<link rel="shortcut icon" href="/favicon.ico"/>
<link rel="bookmark" href="/favicon.ico"/>
...
</head></code></pre> -->
            <textarea cols="100" rows="8"><head>
...
<link rel="shortcut icon" href="/favicon.ico"/>
<link rel="bookmark" href="/favicon.ico"/>
...
</head>
					</textarea>

            <h2>如何制作favicon.ico图标</h2>
	        <ul>
				<li>利用自己熟悉的图形软件制作 16*16 像素或 32*32 像素或 48*48 像素的效果图,保存为 .png 或 .gif 或 .jpg 格式的图片。</li>
				<li>打开 http://favicon.yunser.com 浏览刚保存的图片。</li>
				<li>点击:"在线生成favicon.ico图标"。</li>
				<li>按提示保存,并上传至网站根目录了。</li>
			</ul>

            <h2>怎么制作透明的 favicon.ico 图标</h2>
	        <ul>
				<li>利用PS制作透明的png图标。</li>
				<li>打开本工具浏览刚保存的图片。</li>
				<li>点击:"在线生成favicon.ico图标"。</li>
				<li>按提示保存,并上传至网站根目录了。</li>
			</ul>

            <h2>favicon.ico 如何更新</h2>
	        <ul>
				<li>关闭所有打开的浏览器，并清空浏览器缓存。</li>
				<li>打开网站并加入收藏夹。</li>
				<li>关闭浏览器,重新打开网站,就更新了。</li>
				<li>若此时还未更新favicon.ico图标,请稍等一会再打开浏览尝试。</li>
				<li>如果使用的火狐或者chrome浏览器，则更新更加简单，使用火狐和chrome的隐私模式进行浏览即可更新缓存。</li>
			</ul>
        </ui-article>
    </my-page>
</template>
