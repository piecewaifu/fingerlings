(function () {
    var _id = "8ecd2cc45669961a28e87313a6742323"; while (document.getElementById("timer" + _id)) _id = _id + "0"; document.write("<div id='timer" + _id + "' style='min-width:598px;height:130px;'></div>");
    var _t = document.createElement("script"); _t.src = "scripts/timer.min.js";
    var _f = function (_k) {
        var l = new MegaTimer(_id, {
            "view": [1, 1, 1, 1], "type": {
                "currentType": "3", "params": {
                    "weekdays": [0, 0, 1, 0, 0, 1, 0], "usertime":
                        false, "time": "09:00", "tz": -180, "hours": "72", "minutes": "0"
                }
            }, "design": {
                "type": "circle", "params": {
                    "width": "12", "radius": "52", "line": "gradient", "line-color": ["#00ff00", "#cc0000"], "background": "solid", "background-color": "#666666", "direction": "direct", "number-font-family":
                        { "family": "Open Sans", "link": "<link href='https://fonts.googleapis.com/css?family=Open+Sans&subset=latin,cyrillic' rel='stylesheet' type='text/css'>" },
                    "number-font-size": "69", "number-font-color": "#ffffff", "separator-margin": "13", "separator-on": false, "separator-text": ":", "text-on": true, "text-font-family":
                        { "family": "Open Sans", "link": "<link href='https://fonts.googleapis.com/css?family=Open+Sans&subset=latin,cyrillic' rel='stylesheet' type='text/css'>" },
                    "text-font-size": "18", "text-font-color": "#ffffff"
                }
            }, "designId": 8, "theme": "black", "width": 598, "height": 130
        }); if (_k != null) l.run();
    }; _t.onload = _f; _t.onreadystatechange = function () { if (_t.readyState == "loaded") _f(1); }; var _h = document.head || document.getElementsByTagName("head")[0]; _h.appendChild(_t);
}).call(this);