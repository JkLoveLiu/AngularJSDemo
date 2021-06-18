AngularJS的小项目

仿中国农业银行App制作而成。部分界面借鉴了中国银行的app。

可以用 5+app 打包成Android可执行文件

一个期末作业，非常粗糙（上交以后应该不会继续完善了）

```
目录说明
|-- AngularJSDemo
		|-- index.html					// 入口文件
		|-- css							// 样式类文件
		|	|-- icon						// 单色图标
		|	|	|--								// icon相关文件
		|	|-- icon-color					// 彩色图标
		|	|	|--								// 彩色icon相关文件
		|	|-- home.css					// home页样式文件
		|	|-- index.css					// 主页的样式文件
		|	|-- myInfo.css					// 我的页的样式文件
		|	|-- myInfo_aboutMy.css			// 我的页=>关于我的样式文件
		|	|-- myInfo_account.css			// 我的页=>我的账户样式文件
		|	|-- myInfo_IONotes.css			// 我的页=>收支记录样式文件
		|-- data						// json数据存放位置
		|	|-- data.json					// 其他数据地址
		|	|-- TransactionData.json		// 交易记录地址
		|-- html						// html文件地址
		|-- |-- js							// js配置地址
		|-- |-- |-- controllerJS.js				// 控制器的js文件
		|-- |-- |-- directiveJS.js				// 自定义指令的js文件
		|-- |-- |-- routerConfigJS.js			// ionic路由js文件
		|-- |-- templateHtml				// 自定义指令的模板地址
		|-- |-- |-- headerDiv.html				// 首页头部模板
		|-- |-- |-- homeContentBody.html		// 首页内容中部模板
		|-- |-- |-- headerDiv.html				// 首页内容底部模板
		|-- img							// 图片存放位置
		|-- lib							// 引用文件地址
		|-- |-- ionic						// ionic存放位置
		|-- unpackage					// 5+app不会打包的文件夹
		|-- manifest.json				// 5+app打包需要的json文件
		|-- README.md					// 介绍文件
```