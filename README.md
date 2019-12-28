# Acsjs
AJAX load js&amp;css
Use ajax to load JS and CSS, display the loading progress, and load them into HTML in the order of loading.

## Usage
Pass in four parameters to use, which are file list (array), event before loading, event after loading, event during loading
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
