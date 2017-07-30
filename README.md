# Piwik AjaxOptOut Plugin

## Description

Piwik supports an opt out iframe, wich may supports your needs. But in some cases it is
more handy to realize opt out / opt in via ajax requests and with no iframes. May due to
security reasons.

I had such an project and implemented this nice small plugin wich offers you three new API URLs:

1. `your.piwik/index.php?module=API&method=AjaxOptOut.isTracked`  
    You will get an Response whether the current user get's tracked or not.
1. `your.piwik/index.php?module=API&method=AjaxOptOut.doIgnore`  
    Piwik will set the ignore cookie for the current user.
1. `your.piwik/index.php?module=API&method=AjaxOptOut.doTrack`  
    Piwik will remove the ignore cookie for the current user.

You have to use JSONP Requests, as of the AJAX requests needs to manipulate the cookies.

[More Informatione here](https://github.com/lippoliv/piwik-plugin-ajaxoptout/blob/master/README.md)

## Demo

There is a Demo available for you to mention how to use it in your Project.

### jQuery

1. Set the correct PIWIK Url in `demo/jquery/index.html` (update the Row `var piwikUrl = 'http://piwik.lc/';`).
1. Open the `index.html` via an running WebServer in your favorit Browser
1. Use the Buttons to toggle the tracking state
1. In parallel, watch the Tracking-Status in Piwik Backend or the Piwik Tracking iFrame

## Donate

Feel free to Send me something if you like the Plugin. This way you help me invest more time.

**Thank you.**

### Crypto Currency Adresses

BTC: 1LcUQwNEvtjfs5EYbqMMmxCNSqaHKumn9M  
ETH: 0x01F606620a0a94F4002e748DBEf9d746F5886Ef9

### PayPal.me

https://paypal.me/lippertsweb

## ToDo-List

1. Implement jQuery Module
1. Share jQuery Module via npm
1. Implement AngularJS Module
1. Share AngularJS Module via npm
1. Implement Angular Module
1. Share Angular Module via npm
1. Implement TypeScript Definition
1. Share TypeScript Definition via @types-Repository
