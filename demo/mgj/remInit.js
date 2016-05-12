/**
 * Created by ziyu on 16/5/11.
 */
var MOGU_DEV = 0;
!function () {
    function e() {
        var e = document.documentElement.clientWidth;
        e > 750 && (e = 750), document.documentElement.style.setProperty("font-size", e / 7.5 + "px", "important")
    }

    var t = null;
    window.addEventListener("resize", function () {
        clearTimeout(t), t = setTimeout(e, 300)
    }, !1), e(), window.__trace__headendt = +new Date, function () {
        function e() {
            "interactive" == document.readyState ? window.__trace__domready = +new Date : "complete" == document.readyState && (window.__trace__ladingendt = +new Date)
        }

        window.__trace__domready = null, window.__trace__ladingendt = null, document.readyState && (e(), document.onreadystatechange = e)
    }()
}(window);

