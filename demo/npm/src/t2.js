/**
 * Created by ziyu on 16/3/4.
 */
const MyVisitor = {
    Identifier:{
        count:1,
        enter(){
            var self = this;
            console.log('entered');
            console.log(self.count);
            self.exit();
        },
        exit(){
            var self = this;
            console.log('exited');
            MyVisitor.Test.enter();
        }
    },
    Test:{
        ct:2,
        enter(){
            var self = this;
            console.log(self.ct);
        }
    }
};

MyVisitor.Identifier.enter();

function f(){
    console.log('outside');
}

(function(){
    if(false){
        function f(){
            console.log('inside');
        }
        f();
    }
    f();
})();