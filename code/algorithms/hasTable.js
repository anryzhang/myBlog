/**
 * Created by ziyu on 2017/6/30.
 */

function HashTable() {

    var table = [];
    var ValuePair = function (key,value) {
        this.key = key;
        this.value = value;
        this.toString = function () {
            return '[' + this.key + '-' + this.value + ']';
        }
    }
    var loseHashCode = function (key) {
        var hash = 0;
        for(var i = 0; i < key.length; i++){
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }
    this.put = function (key,value) {
        var position = loseHashCode(key);
        if(table[position] == undefined){
            table[position] =  new LinkedList();
        }
        table[position].append(new ValuePair(key,value));

        // table[position] = value;
    }
    this.remove = function (key) {
        // table[loseHashCode(key)] = undefined;
        var position = loseHashCode(key);
        if(table[position] !== undefined){
            var current = table[position].getHead();
            while (current.next){
                //遍历LinkedList实例时,如果链表中的current元素就是要找的元素,使用remove方法将其从链表中移除
                if(current.ele.key === key){
                    table[position].remove(current.ele);
                    //验证链表是否为空,
                    if(table[position].isEmpty()){
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            //检查是否为第一个或最后一个元素
            if(current.ele.key === key){
                table[position].remove(current.ele);
                if(table[position].isEmpty()){
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false;
    }
    this.get = function (key) {

        // return table[loseHashCode(key)];
        var position = loseHashCode(key);
        if(table[position] !== undefined){
            var current = table[position].getHead();
            while(current.next){
                if(current.ele.key === key){
                    return current.ele.value;
                }
                current = current.next;
            }
            if(current.ele.key === key){
                return current.ele.value;
            }
        }
        return undefined;
    }
    this.getTable = function () {
        return table;
    }

    this.print = function () {
        for(var i = 0; i<table.length; i++){
            if(table[i] !== undefined){
                console.log(i + ': ' + table[i].toS);
            }
        }
    }

}