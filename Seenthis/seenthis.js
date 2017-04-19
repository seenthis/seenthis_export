var MyPreprocessor = function() {};

MyPreprocessor.prototype = {
run: function(arguments) {
    var titre=document.title;
    
    var txt='';
    if (window.getSelection){
        txt=window.getSelection();
    }
    else if (document.getSelection) {
        txt=document.getSelection();
    }
    else if (document.selection) {
        txt=document.selection.createRange().text;
    }
    
    
    
    var logo='';
    var ogImage=document.querySelector('meta[property=\'og:image\']');
    if(ogImage){
        logo=ogImage.getAttribute('content');
    }
    var url=document.location+'';
    var canonicalUrl=document.querySelector('link[rel=\'canonical\']');
    if(canonicalUrl){
        url=canonicalUrl.href;
    } else {
        var ogUrl=document.querySelector('meta[property=\'og:url\']');
        if(ogUrl){
            url=ogUrl.getAttribute('content');
        }
    }
    document.location.href ='https://seenthis.net/#ajouter='+encodeURIComponent(titre)+'&url_site='+encodeURIComponent(url.replace('%2520','+'))+'&logo='+encodeURIComponent(logo.replace('%2520','+'))+'&extrait='+encodeURIComponent(txt);

}
};

var ExtensionPreprocessingJS = new MyPreprocessor;
