/**
 * Created by DELL on 2014/11/24.
 */
var basketModule = (function(){
    var basket = [];
    function _doSomethingPrivate(){
        console.log(basket);
    }
    return{
        addItem:function(values){
            basket.push(values);
        },
        getItemCount:function(){
            return basket.length;
        },
        doSomething:_doSomethingPrivate,
        getTotal:function(){
            var itemCount = this.getItemCount(),
                total = 0;
            while(itemCount--){
                total += basket[itemCount].price;
            }
            return total;
        }
    }
})();