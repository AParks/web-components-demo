(function() {
    if ('registerElement' in document
        && 'import' in document.createElement('link')
        && 'content' in document.createElement('template')) {
      // platform is good!
      lazyLoadShadowDOM();
    } else {
      // polyfill the platform!
      var e = document.createElement('script');
      e.type = 'text/javascript';
      e.src = 'https://rawgit.com/webcomponents/webcomponentsjs/master/webcomponents.js';
      e.onload = 'lazyLoadShadowDOM';
      document.body.appendChild(e);
    }
    
    function lazyLoadShadowDOM() {
      // create shadow DOM on the <p> element above
      var shadow = document.querySelector('#namespacedPlugin').createShadowRoot();
      
      // plugin HTML
      var template = document.querySelector('.plugin-template');
      shadow.appendChild(document.importNode(template.content, true)); // can also use shadow.innerHTML

     // import app styles
      var style = document.createElement('style');
        style.textContent = "@import 'stylesheets/stylesheet.css'";
        shadow.insertBefore(style, shadow.childNodes[0]);
    }
})();
