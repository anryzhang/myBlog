/**
 * Created by ziyu on 16/3/27.
 */

import $ from 'jquery';
import './../../css/plugins/tabBox.scss'

//require('./../../css/plugins/tabBox.scss');

 const tabSelect = (ele) => {
    //     tabSelect();
    //     tab切换
    //     ele最外层节点
    //     eg:
    //     <div class='J_IT'>
    //         <ul class='J_tabNav tab-nav'>
    //            <li class='active'>tab1</li>
    //            <li>tab2</li>
    //         </ul>
    //         <div class='J_tabCont tab-content'>
    //             <div class='tab-pane active'>cont1</div>
    //             <div class='tab-pane'>cont2</div>
    //         </div>
    //     </div>
    let tabBox;
    if (typeof ele == 'object') {
        tabBox = ele
    } else if (typeof ele == 'string') {
        tabBox = $(ele)
    }
    let tabNav = tabBox.find('.J_tabNav').children(),
        tabCont = tabBox.find('.J_tabCont .tab-pane'),
        ACTIVE = 'active';
    $.each(tabNav, function (idx, ele) {
        $(ele).on('click', function (e) {
            e.preventDefault();
            $(this).addClass(ACTIVE).siblings().removeClass(ACTIVE);
            $(tabCont).eq(idx).addClass(ACTIVE).siblings('.tab-pane').removeClass(ACTIVE);
        });
    })
};

export default tabSelect;




