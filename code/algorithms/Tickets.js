/**
 * Created by ziyu on 2017/6/25.
 */

function Queue() {
    var items = [];

    this.enqueue = function (ele) {
        items.push(ele);
    }

    this.dequeue = function () {
        return items.shift();
    }

    this.front = function () {
        return items[0];
    }
    this.isEmpty = function () {
        return items.length == 0;
    }
    this.size = function () {
        return items.length;
    }
    this.print = function () {
        console.log(items.toString());
    }
    this.items = function () {
        return items;
    }

}