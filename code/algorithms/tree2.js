/**
 * Created by ziyu on 2017/7/10.
 */

function Tree(){
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    var root = null;

    var insertNode = function (node,newNode) {
        if(newNode.key < node.key){
            if(node.left === null){
                node.left = newNode
            }else{
                insertNode(node.left,newNode);
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                insertNode(node.right,newNode);
            }
        }
    }
    
    this.insert = function (key) {
        var newNode = new Node(key);
        if(root === null){
            root = newNode;
        }else{
            insertNode(root,newNode);
        }
    }
    var searchNode = function (node,key) {
        if(node === null){
            return false;
        }
        if(key < node.key){
            return searchNode(node.left,key);
        }else if(key > node.key){
            return searchNode(node.right,key);
        }else{
            return true;
        }
    }
    this.search = function (key) {
        return searchNode(root,key);
    }
    var inOrderTraverseNode = function (node,cb) {
        if(node !== null){
            inOrderTraverseNode(node.left,cb);
            cb(node.key);
            inOrderTraverseNode(node.right,cb);
        }
    }
    //通过中序遍历方式
    this.inOrderTraverse = function (cb) {
        inOrderTraverseNode(root,cb);
    }
    function printNode(value) {
        console.log(value);
    }

    var preOrderTraverseNode = function (node,cb) {
        if(node !== null){
            cb(node.key);
            preOrderTraverseNode(node.left,cb);
            preOrderTraverseNode(node.right,cb);
        }
    }
    //通过先序遍历方式
    this.preOrderTraverse = function () {
        
    }
    var postOrderTraverseNode = function (node,cb) {
        if(node !== null){
            postOrderTraverseNode(node.left,cb);
            postOrderTraverseNode(node.right,cb);
            cb(node.key);
        }
    }
    //通过后序遍历方式 
    this.postOrderTraverse = function () {
        
    }
    var minNode = function (node) {
        if(node){
            while(node && node.left !== null){
                node  = node.left;
            }
            return node.key;
        }
        return null;

    }
    this.min = function () {
        return minNode(root);
    }
    var maxNode = function (node) {
        if(node){
            while (node && node.right !== null){
                node = node.right;
            }
            return node.key;
        }
        return null;
    }
    this.max = function () {
        return maxNode(root);
    }
    var findMinNode = function (node) {
        if(node){
            while(node && node.left !== null){
                node  = node.left;
            }
            return node;
        }
        return null;

    }
    var removeNode = function (node,key) {
        if(node === null){
            return null;
        }
        if(key < node.key){
            node.left = removeNode(node.left,key);
            return node;
        }else if(key > node.key){
            node.right = removeNode(node.right,key);
            return node;
        }else{
            //key == node.key
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }
            if(node.left === null){
                node = node.right;
                return node;
            }else if(node.right === null){
                node = node.left;
                return node;
            }

            var aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;

        }
    }
    this.remove = function (key) {
        root = removeNode(root,key);
    }
    
}

