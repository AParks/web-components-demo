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
      shadow.innerHTML = '<head><script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script></head><style>/*.red { color: purple }*/ </style><p class="red">Here is some new text with the \'red\' class in the shadow DOM.</p>';

     // import app styles
      var style = document.createElement('style');
        style.textContent = "@import 'stylesheets/stylesheet.css'";
        shadow.insertBefore(style, shadow.childNodes[0]);
    }
})();
