var piwikAjaxOptOutIsTracked = true;

/**
 * Activate tracking for the user.
 *
 * @author Oliver Lippert <oliver@lipperts-web.de>
 */
function piwikAjaxOptOutTrack () {
    $.ajax({
        url:      piwikUrl + "index.php?module=API&method=AjaxOptOut.doTrack&format=json",
        jsonp:    "callback",
        dataType: "jsonp",
        success:  function (d) {
            piwikAjaxOptOutIsTracked = true;
            updateText();
        }
    });
}

/**
 * Deactivate tracking for the user.
 *
 * @author Oliver Lippert <oliver@lipperts-web.de>
 */
function piwikAjaxOptOutUntrack () {
    $.ajax({
        url:      piwikUrl + "index.php?module=API&method=AjaxOptOut.doIgnore&format=json",
        jsonp:    "callback",
        dataType: "jsonp",
        success:  function (d) {
            piwikAjaxOptOutIsTracked = false;
            updateText();
        }
    });
}

/**
 * Update status text by tracking status.
 *
 * @author Oliver Lippert <oliver@lipperts-web.de>
 */
function updateText () {
    if (piwikAjaxOptOutIsTracked === true) {
        $('#status span')
            .hide();
    } else {
        $('#status span')
            .show();
    }
}

$(document)
    .ready(function () {
        // Add listener for the "do track" button.
        $('#piwikAjaxOptOutTrack')
            .click(function (e) {
                e.preventDefault();
                e.stopPropagation();

                piwikAjaxOptOutTrack();
            });

        // Add listener for the "do not track" button.
        $('#piwikAjaxOptOutUntrack')
            .click(function (e) {
                e.preventDefault();
                e.stopPropagation();

                piwikAjaxOptOutUntrack();
            });

        // Retrieve initial status from piwik installation.
        $.ajax({
            url:      piwikUrl + "index.php?module=API&method=AjaxOptOut.isTracked&format=json",
            jsonp:    "callback",
            dataType: "jsonp",
            success:  function (d) {
                piwikAjaxOptOutIsTracked = d.value;
                updateText();
            }
        });
    });