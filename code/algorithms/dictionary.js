/**
 * Created by ziyu on 2017/6/30.
 */

function Dictionary(){
    var items = {};

    this.set = function (key,value) {

        items[key] = value;
    }
    this.remove = function (key) {
        if(this.has(key)){
            delete items[key];
            return true;
        }else{
            return false;
        }
    }
    this.has = function (key) {

        return key in items;
    }
    this.get =  function (key) {
        if(this.has(key)){
            return items[key]
        }else{
            return undefined;
        }
    }
    this.clear = function () {
        items = {};
    }

    this.size = function () {
        return this.keys().length;
    }
    this.keys = function () {

        return Object.keys(items);
    }
    this.values = function () {
        return Object.values(items);
    }
    this.getItmes = function () {
        return items;
    }
}