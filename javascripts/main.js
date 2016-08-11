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
        
        // v1 of custom elements (still in development)
        /* customElements.define('namespaced-plugin', class extends HTMLElement {
            constructor() {
              super(); // always call super() first in the ctor.
              let shadowRoot = this.attachShadow({mode: 'open'});
              const t = document.querySelector('#namespaced-plugin-template');
              const instance = t.content.cloneNode(true);
              shadowRoot.appendChild(instance);
            }
        });*/
        var proto = Object.create(HTMLElement.prototype, {
          createdCallback: {
            value: function() {
              var t = document.querySelector('#namespaced-plugin-template');
              //var clone = document.importNode(t.content, true);
              var shadowRoot = this.createShadowRoot();
              
              shadowRoot.innerHTML = '<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script><div ng-app=""><button ng-click="count = count + 1" ng-init="count=0"> ng-click, increment count</button></div>';
              
              //shadowRoot.appendChild()
              
            }
          }
        });
        document.registerElement('namespaced-plugin', {prototype: proto});
    }
    
})();
