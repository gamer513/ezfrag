(function($){skel.breakpoints({desktop:'(min-width: 737px)',tablet:'(min-width: 737px) and (max-width: 1200px)',mobile:'(max-width: 736px)'}).viewport({breakpoints:{tablet:{width:1080}}});$(function(){var $window=$(window),$body=$('body');$body.addClass('is-loading');$window.on('load',function(){$body.removeClass('is-loading');});$('form').placeholder();$('#nav > ul').dropotron({offsetY:-22,mode:'fade',noOpenerFade:true,speed:300,detach:false});skel.on('+mobile -mobile',function(){$.prioritize('.important\\28 mobile\\29',skel.breakpoint('mobile').active);});$('<div id="titleBar">'+
'<a href="#navPanel" class="toggle"></a>'+
'<span class="title">'+$('#logo').html()+'</span>'+
'</div>').appendTo($body);$('<div id="navPanel">'+
'<nav>'+
$('#nav').navList()+
'</nav>'+
'</div>').appendTo($body).panel({delay:500,hideOnClick:true,hideOnSwipe:true,resetScroll:true,resetForms:true,side:'left',target:$body,visibleClass:'navPanel-visible'});if(skel.vars.os=='wp'&&skel.vars.osVersion<10)
$('#titleBar, #navPanel, #page-wrapper').css('transition','none');});})(jQuery);