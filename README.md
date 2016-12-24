# Piwik AjaxOptOut Plugin

## Description

Piwik supports an opt out iframe, wich may supports your needs. But in some cases it is
more handy to realize opt out / opt in via ajax requests and with no iframes. May due to
security reasons.

I had such an project and implemented this nice small plugin wich offers you three new API URLs:

1. your.piwik/index.php?module=API&method=AjaxOptOut.isTracked  
    You will get an Response whether the current user get's tracked or not.
1. index.php?module=API&method=AjaxOptOut.doIgnore  
    Piwik will set the ignore cookie for the current user.
1. index.php?module=API&method=AjaxOptOut.doTrack
    Piwik will remove the ignore cookie for the current user.

You have to use JSONP Requests, as of the AJAX requests needs to manipulate the cookies.
In my current project I use jQuery thatfor, but I plan to provite an Angular-Module in
the near future. Send me an E-Mail if you are interested.