/**
 * Created by DELL on 2014/11/25.
 */
/*中介模式*/
var mediator = (function(){
    var topics = {};
    var subscribe = function(topic,fn){
        if(!topics[topic]){
            topics[topic] = [];
        }
        topics[topic].push({
            context:this,
            callback:fn
        });
        return this;
    };
    var publish = function(topic){
        var args;
        if(!topics[topic]){
            return false;
        }
        args = Array.prototype.slice.call(arguments,1);
        for(var i = 0; i< topics[topic].length;i++){
            var subscription = topics[topic][i];
            subscription.callback.apply(subscription.context,args);
        }
        return this;
    };
    return {
        Publish:publish,
        Subscribe: subscribe,
        installTo: function(obj){
            obj.subscribe = subscribe;
            ob.publish = publish;
        }
    }

})();