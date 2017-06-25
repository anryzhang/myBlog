/**
 * Created by ziyu on 2017/6/25.
 */

function PriorityQueue() {
    var items = [];
    function QueueElement (ele,priority){
        this.ele = ele;
        this.priority = priority;
    }

    this.enqueue = function (ele,priority) {
        var queueEle = new QueueElement(ele,priority);
        if(this.isEmpty()){
            items.push(queueEle);
        }else{
            var added = false;
            for(var i = 0; i < this.size();i++){
                if(queueEle.priority < items[i].priority){
                    items.splice(i,0,queueEle);
                    added = true;
                    break;
                }
            }
            if(!added){
                items.push(queueEle);
            }
        }
    }

    this.isEmpty = function () {
        return items.length == 0;
    }
    this.size =  function () {
        return items.length;
    }

    this.items = function () {
        return items;
    }
    this.print = function () {
        console.log(items.toString());
    }

}