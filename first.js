const http = require('http');
const cheerio = require('cheerio');

var add = function(time){
	return new Promise(function(resolve,reject){
		setTimeout(function() {
var urls = ['http://dy-public.oss-cn-shenzhen.aliyuncs.com/interviewTestData/1.txt',
'http://dy-public.oss-cn-shenzhen.aliyuncs.com/interviewTestData/2.txt',
'http://dy-public.oss-cn-shenzhen.aliyuncs.com/interviewTestData/3.txt',
'http://dy-public.oss-cn-shenzhen.aliyuncs.com/interviewTestData/4.txt',
'http://dy-public.oss-cn-shenzhen.aliyuncs.com/interviewTestData/5.txt',
'http://dy-public.oss-cn-shenzhen.aliyuncs.com/interviewTestData/6.txt',
'http://dy-public.oss-cn-shenzhen.aliyuncs.com/interviewTestData/7.txt',
'http://dy-public.oss-cn-shenzhen.aliyuncs.com/interviewTestData/8.txt',
'http://dy-public.oss-cn-shenzhen.aliyuncs.com/interviewTestData/9.txt',
'http://dy-public.oss-cn-shenzhen.aliyuncs.com/interviewTestData/10.txt'];

for(var i=0;i<urls.length;i++){
    http.get(urls[i],function(res){
	var html = '';
	var sum =0;
	res.on('data',function(data){
	html+=data;
				     });
	res.on('end',function(){
	var $ = cheerio.load(html);
	var count = $('#data>def').text().trim();
		sum+=count;
				});
 				   });
				}//for循环结束
		
		resolve(sum);
					},time);
						    })
};

async function start(){
	let result = await add(2000);
	console.log(result);
};

start();