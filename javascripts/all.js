/*!
 * minimal sharer - v1.0.0 (2013-07-12)
 *
 * @author creasty
 * @url http://github.com/creasty/minimal-sharer
 * @copyright 2013 creasty
 * @license MIT
 */
(function(){var t,e,n;t=jQuery,e={twitter:{link:"https://twitter.com/intent/tweet?text={%title}&url={%url}&via={%twitter}",click:"toolbar=0, status=0, width=650, height=360"},facebook:{count:"http://graph.facebook.com/{%url}",link:"http://www.facebook.com/sharer.php?u={%url}",filter:function(t){return t.shares},click:"toolbar=0, status=0, width=600, height=300"},gplus:{count:"?service=gplus&id={%url}",link:"https://plusone.google.com/_/+1/confirm?hl={%lang}&url={%url}",dataType:"text",click:"toolbar=0, status=0, width=480, height=500"},hatena:{count:"http://api.b.st-hatena.com/entry.count?url={%url}&callback=?",link:"http://b.hatena.ne.jp/entry/{url}"},pinterest:{count:"http://api.pinterest.com/v1/urls/count.json?url={%url}&callback=?",link:"http://pinterest.com/pin/create/button/?url={%url}&media={%image}&description={%description}",filter:function(t){return t.count}},linkedin:{count:"?service=linkedin&id={%url}",link:"http://www.linkedin.com/shareArticle?mini=true&url={%url}&title={%title}&source={%site}",click:"toolbar=0, status=0, width=600, height=400",filter:function(t){return t.count}},stumble:{count:"?service=stumble&id={%url}",link:"http://www.stumbleupon.com/submit?url={%url}&title={%title}",filter:function(t){return t.result.views}},tumblr:{link:"http://www.tumblr.com/share?v=3&u={%url}&t={%title}&s="},mail:{link:"mailto:?body={%title} {%url}"},evernote:{init:function(){return window.Evernote?void 0:t("head").append('<script src="http://static.evernote.com/noteit.js" async="async"></script>')},click:function(t,e){var n;if(window.Evernote)return Evernote.doClip({providerName:e.site,url:e.url,title:e.title,contentId:null!=(n=e.contentId)?n:"main"})}}},n={meta:null,init:function(){var e,n,i,r,l,c,u,o,a;if(!this.meta)return e=t("meta"),this.meta={url:null!=(n=null!=(i=e.filter("[property=og\\:url]").attr("content"))?i:e.filter("[name=canonical]").attr("content"))?n:window.location.href,title:null!=(r=e.filter("[property=og\\:title]").attr("content"))?r:document.title,site:null!=(l=e.filter("[property=og\\:site_name]").attr("content"))?l:"",image:null!=(c=e.filter("[property=og\\:image]").attr("content"))?c:"",lang:null!=(u=t("html").attr("lang"))?u:"ja",twitter:null!=(o=null!=(a=e.filter("[name=twitter\\:site]").attr("content"))?a.replace(/^\@/,""):void 0)?o:""}},bind:function(t,e){return t.replace(/\{(%)?(\w+)\}/g,function(t,n,i){var r,l;return r=null!=(l=e[i])?l:"",n?encodeURIComponent(r):r})},getCount:function(e,n){var i;return t.ajax({dataType:null!=(i=e.service.dataType)?i:"json",url:this.bind(e.service.count,n),success:function(t){return e.$btn.addClass("has-counter"),e.service.filter&&(t=e.service.filter(t)),e.$counter.text(t||"0").show()},error:function(){return e.$counter.hide()}})},click:function(e,n){var i=this;return e.$link.click(function(r){return e.$counter&&e.$counter.text(parseInt(e.$counter.text(),10)+1),t.isFunction(e.service.click)?(r.preventDefault(),e.service.click(e,n)):e.service.click?(r.preventDefault(),window.open(i.bind(e.service.link,n),null,e.service.click)):void 0})},create:function(n,i){var r,l,c,u,o,a,s;o=i.buttons,s=[];for(c in o)l=o[c],r={service:e[c]},r.service&&l&&(r.$btn=t('<li class="'+c+'"><a href="#" class="link">'+l+"</a></li>").appendTo(n),r.$link=r.$btn.children(".link"),"?"===(null!=(a=r.service.count)?a.charAt(0):void 0)&&(r.service.count=i.script?i.script+r.service.count:null),"function"==typeof(u=r.service).init&&u.init(r,i),r.service.count&&(r.$counter=t('<span class="counter">0</span>').hide().appendTo(r.$btn),this.getCount(r,i)),r.service.link&&(r.$link.attr("href",this.bind(r.service.link,i)),r.$link.attr("target",r.service.link.match(/^https?:/i)?"_blank":"_self")),s.push(this.click(r,i)));return s}},t.fn.minimalSharer=function(e){return e.buttons?(n.init(),e=t.extend({},n.meta,e),this.each(function(){return n.create(t(this),e)})):this},t.minimalSharer={extend:function(n){return t.extend(e,n)}}}).call(this);
$(document).ready(function () {
    var t = 0.5,
        e = 520,
        n = 0;
    setInterval(function () {
        n >= e && (n = 0),
            n += t,
            $('.js-meat-on-rails').css('background-position', n + 'px 0px')
    }, 1)
});