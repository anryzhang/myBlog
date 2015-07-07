/**
 * Created by anry on 2015/7/7.
 */
(function($){
    $(function () {
        $(document).on('click', '#btn',function (event) {
            $('#results').empty();
            $.getJSON('http://www.filltext.com/?rows=5&fname={firstName}&callback=?',
                function (data) {
                    $.each(data, function (index,item) {
                        $('#results').append(item.fname + '<hr />')
                    });
                });

        });
    });
})(Zepto);