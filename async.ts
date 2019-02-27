import http = require('http');
import cheerio = require('cheerio');


const remote_get =function(url: string) {
const promise = new Promise<superagent.Response>(function(resolve,reject){
	http.get(url)
		.end(function(err,res){
			if(!err){
				resolve(res);
			}else{
				console.log(err);
				reject(err);
			}
		});
	});
	return promise;
}

let result =0;
let count=11;
let sum=0;

async function crawl(){
	for(let nums=1;nums<11;nums++){
	let res = await remote_get('http://dy-public.oss-cn-shenzhen.aliyuncs.com/interviewTestData/'+nums+'.txt');
	var a =res.text;
	a =a.replace((/\s/g,"");
        let bluefile = a.match(/\d+(\\.\\d+){0}/);
	 if(bluefile!=null){
            result+=parseInt(bluefile[0]);
        }  
    }
    console.log("结果"+result);
}

crawl();
