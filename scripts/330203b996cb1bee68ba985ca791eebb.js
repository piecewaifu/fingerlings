(function () {
    var _id = "330203b996cb1bee68ba985ca791eebb"; while (document.getElementById("timer" + _id)) _id = _id + "0"; document.write("<div id='timer" + _id + "' style='min-width:222px;height:54px;'></div>");
    var _t = document.createElement("script"); _t.src = "scripts/timer.min.js"; var _f = function (_k) {
        var l = new MegaTimer(_id, {
            "view": [1, 1, 1, 1], "type": {
                "currentType": "3", "params":
                    { "weekdays": [0, 0, 1, 0, 0, 1, 0], "usertime": false, "time": "09:00", "tz": -180, "hours": "72", "minutes": "0" }
            }, "design": {
                "type": "circle", "params": {
                    "width": "4", "radius": "22", "line": "gradient", "line-color": ["#ff9900", "#00ff00"],
                    "background": "gradient", "background-color": ["#00ffff", "#4a86e8"], "direction": "direct", "number-font-family": {
                        "family": "Open Sans", "link":
                            "<link href='https://fonts.googleapis.com/css?family=Open+Sans&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    }, "number-font-size": "19", "number-font-color": "#ffffff", "separator-margin": "0", "separator-on": false, "separator-text": ":", "text-on": true,
                    "text-font-family": { "family": "Open Sans", "link": "<link href='https://fonts.googleapis.com/css?family=Open+Sans&subset=latin,cyrillic' rel='stylesheet' type='text/css'>" },
                    "text-font-size": "9", "text-font-color": "#ffffff"
                }
            }, "designId": 8, "theme": "black", "width": 222, "height": 54
        }); if (_k != null) l.run();
    }; _t.onload = _f; _t.onreadystatechange = function () { if (_t.readyState == "loaded") _f(1); }; var _h = document.head || document.getElementsByTagName("head")[0]; _h.appendChild(_t);
}).call(this);