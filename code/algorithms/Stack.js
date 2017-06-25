/**
 * Created by ziyu on 2013/6/25.
 */
function Stack() {
    var items = [];
    this.push = function (ele) {
        items.push(ele)
    }
    this.pop = function () {
        return items.pop();
    }
    this.peek = function () {
        // return items[items.length - 1];
        return items[this.size() - 1];
    }
    this.isEmpty = function () {
        return items.length ? false : true;
    }
    this.clear = function () {
        items = [];
    }
    this.size = function () {
        return items.length;
    }
    this.print = function () {
        console.log(items.toString());
    }
    this.items = function () {
        return items;
    };
}