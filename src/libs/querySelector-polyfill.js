/**
 * Polyfills the querySelector and querySelectorAll methods.
 * @see https://gist.github.com/Fusselwurm/4673695
 */
(function () {
    var style;
    var select = function (selector, maxCount) {
        var all = document.all,
            l = all.length,
            i,
            resultSet = [];

        style.addRule(selector, "foo:bar");
        for (i = 0; i < l; i += 1) {
            if (all[i].currentStyle.foo === "bar") {
                resultSet.push(all[i]);
                if (resultSet.length > maxCount) {
                    break;
                }
            }
        }
        style.removeRule(0);
        return resultSet;
    };
    if (document.querySelectorAll || document.querySelector) {
        return;
    }
    style = document.createStyleSheet();

    document.querySelectorAll = document.body.querySelectorAll = function (selector) {
        return select(selector, Infinity);
    };
    document.querySelector = document.body.querySelector = function (selector) {
        return select(selector, 1)[0] || null;
    };
}());
