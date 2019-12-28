# Acsjs
Use ajax to load JS and CSS, display the loading progress, and load them into HTML in the order of loading.

## Usage
Pass in four parameters to use, which are file list (array), event before loading, event after loading, event during loading.Please go to the console to check the **data** parameters
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

##License
The MIT License (MIT)

Copyright (c) 2013 River Twilight

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
