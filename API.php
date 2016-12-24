<?php
/**
 * Piwik - free/libre analytics platform
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

namespace Piwik\Plugins\AjaxOptOut;

use Piwik\DataTable;
use Piwik\DataTable\Row;
use Piwik\Tracker\IgnoreCookie;

/**
 * API for plugin AjaxOptOut
 *
 * @method static \Piwik\Plugins\AjaxOptOut\API getInstance()
 */
class API extends \Piwik\Plugin\API {


    /**
     * This method will return whether the user is tracked or not.
     *
     * Call: index.php?module=API&method=AjaxOptOut.isTracked
     *
     * @return int
     */
    public function isTracked () {
        $ret = !IgnoreCookie::isIgnoreCookieFound();

        return $ret;
    }


    /**
     * Sets the ignore cookie, so the user is not tracked through piwik any longer.
     *
     * Call: index.php?module=API&method=AjaxOptOut.doIgnore
     *
     * @return void
     */
    public function doIgnore () {
        IgnoreCookie::setIgnoreCookie();
    }


    /**
     * removes the ignore cookie, so the user is tracked through piwik from now on.
     *
     * Call: index.php?module=API&method=AjaxOptOut.doTrack
     *
     * @return void
     */
    public function doTrack () {
        IgnoreCookie::getIgnoreCookie()->delete();
    }


}
