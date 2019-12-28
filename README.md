# Acsjs
AJAX load js&amp;css
利用 ajax 加载 js 和css ,显示加载进度 , 严格按照加载的顺序先后加载到页面

## Usage
简单传入四个参数即可使用，依次是加载前事件，加载完毕事件，加载中事件
```javascript
var files = [
	'//cdn.bootcss.com/highcharts/7.2.0/highcharts.js?cs=ss',
	'test.css'
];
ajaxLoadJs(files, () => {
	loading.open();
}, () => {
	console.log("加载完毕");
}, (data) => {
	console.log(data);
});
```
