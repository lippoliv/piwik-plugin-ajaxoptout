# AjaxOptOut Plugin

## Description

Matomo supports an opt out iframe, which may supports your needs. But in some cases it is more handy to realize opt out
/ opt in via ajax requests and with no iframes. May due to security reasons.

I had such a project and implemented this nice small plugin which offers you three new API URLs:

1. `your.piwik/index.php?module=API&method=AjaxOptOut.isTracked`  
   You will get an Response whether the current user get's tracked or not.
1. `your.piwik/index.php?module=API&method=AjaxOptOut.doIgnore`  
   Piwik will set the ignore cookie for the current user.
1. `your.piwik/index.php?module=API&method=AjaxOptOut.doTrack`  
   Piwik will remove the ignore cookie for the current user.

You have to use JSONP Requests, as of the AJAX requests needs to manipulate the cookies.

This plugin is for free, feel free to spend me a coffee and send me your feedback. Further information you can find in
Matomo marketplace.

[More Informatione here](https://lw-scm.de/lipperts-web/piwik-ajax-opt-out/-/blob/master/README.md)

## Demo

There is a Demo available for you to mention how to use it in your Project.

### jQuery

1. Set the correct Matomo Url in `demo/jquery/index.html` (update the Row `var piwikUrl = 'http://piwik.lc/';`).
1. Open the `index.html` via an running WebServer in your favorit Browser
1. Use the Buttons to toggle the tracking state
1. In parallel, watch the Tracking-Status in Matomo Backend or the Matomo Tracking iFrame

## ToDo-List

1. Implement jQuery Module
1. Share jQuery Module via npm
1. Implement AngularJS Module
1. Share AngularJS Module via npm
1. Implement Angular Module
1. Share Angular Module via npm
1. Implement TypeScript Definition
1. Share TypeScript Definition via @types-Repository
