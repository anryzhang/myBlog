/**
 * Created by anry on 2016/2/9.
 */
//function timeout(ms){
//    return new Promise((resolve)=>{
//            setTimeout(resolve,ms);
//        });
//}
//timeout(100).then(()=>{
//    console.log('done');
//});

var getJson = function(url){
    var promise = new Promise(function(resolve,reject){
        var client = new XMLHttpRequest();
        client.open('get',url);
        client.onreadystatechange = handler;
        client.responseType = 'json';
        client.setRequestHeader('Accept','application/json');
        client.send();

        function handler(){
            if(this.readyState === this.DONE){
                if(this.status === 200){
                    resolve(this.response);
                }else{
                    reject(this);
                }
            }
        }

    });
    return promise;
};

getJson('package.json').then(function(json){
    console.log(json);
    console.log(json.main);
    return json.dependencies;
},function(error){
    console.log(error);
}).then(function(dep){
    console.log(dep);
})
