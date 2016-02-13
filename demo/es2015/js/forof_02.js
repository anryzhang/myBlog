/**
 * Created by ziyu on 2016/2/12.
 */

let items = [
    {
        id:100,
        name:'草莓'
    },
    {
        id:101,
        name:'柚子'
    },{
        id:1002,
        name:'李子'
    }
];

for(let item of items){
    let message = `ID:${item.id} name:${item.name}`;
    console.log(message);
}

console.log(`list total:${items.length}`);