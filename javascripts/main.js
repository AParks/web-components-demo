(function() {
    if ('registerElement' in document
        && 'import' in document.createElement('link')
        && 'content' in document.createElement('template')) {
      // platform is good!
      window.onload = function() {
          createShadowRoot();
        
      };
    } else {
      // polyfill the platform!
      var script = "<script type='text/javascript' src='bower_components/webcomponentsjs/webcomponents.js'></script>";
      document.write(script);
      window.addEventListener('WebComponentsReady', function(e) {
          // imports are loaded and elements have been registered
          console.log('Components are ready');
          createShadowRoot();
      });
    }
    
    function createShadowRoot() {
        
         customElements.define('namespaced-plugin', class extends HTMLElement {
            constructor() {
              super(); // always call super() first in the ctor.
              let shadowRoot = this.attachShadow({mode: 'open'});
              const t = document.querySelector('#namespaced-plugin-template');
              const instance = t.content.cloneNode(true);
              shadowRoot.appendChild(instance);
            }
        });
    }
    
})();
