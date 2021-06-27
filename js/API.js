// 扩展API加载完毕后调用onPlusReady回调函数
document.addEventListener("plusready", onPlusReady, false);
// 扩展API加载完毕，现在可以正常调用扩展API
// 处理点击事件
var _openw = null;
var as = 'pop-in'; // 默认窗口动画
/**
 * 打开新窗口
 * @param {String} id	加载的页面地址，也用作窗口标识
 * @param {String} t    页面的标题
 * @param {String} d	文档页面文件名称（doc目录下），不传入则使用页面的标题
 */
function clicked(id, t, d) {
	if (_openw) {
		return;
	} // 防止快速点击
	var ws = {
		scrollIndicator: 'none',
		scalable: false,
		popGesture: 'close',
		backButtonAutoControl: 'close',
		titleNView: {
			autoBackButton: true,
			backgroundColor: '#D74B28',
			titleColor: '#CCCCCC'
		}
	};
	t && (ws.titleNView.titleText = t, d || (d = t.toLowerCase()));
	d && (ws.titleNView.buttons = [{
		fontSrc: '_www/helloh5.ttf',
		text: '\ue301',
		fontSize: '22px',
		onclick: 'javascript:openDoc("/doc/' + d + '.html")'
	}]);
	_openw = plus.webview.create(id, id, ws);
	_openw.addEventListener('loaded', function() { //页面加载完成后才显示
		_openw && _openw.show(as, null, function() {
			_openw = null; //避免快速点击打开多个页面
		});
	}, false);
	_openw.addEventListener('hide', function() {
		_openw = null;
	}, false);
	_openw.addEventListener('close', function() { //页面关闭后可再次打开
		_openw = null;
	}, false);
}
// 打开隐私页
function openPrivacy() {
	if (!plus.runtime.isAgreePrivacy()) {
		plus.webview.create('privacy.html', 'privacy', {
			background: 'transparent',
			popGesture: 'none'
		}).show();
	}
}
// 打开关于页面
function openAbout() {
	if (_openw) {
		return;
	} // 防止快速点击
	_openw = plus.webview.create('about.html', 'about', {
		scrollIndicator: 'none',
		scalable: false,
		popGesture: 'close',
		backButtonAutoControl: 'close',
		titleNView: {
			autoBackButton: true,
			backgroundColor: '#D74B28',
			titleColor: '#CCCCCC',
			titleText: '关于',
			buttons: [{
				type: 'share',
				onclick: 'javascript:share()'
			}]
		}
	});
	_openw.addEventListener('close', function() {
		_openw = null;
	}, false);
	_openw.show('zoom-fade-out');
}
