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
        var proto = Object.create(HTMLElement.prototype);
        
        proto.createdCallback = function() {
          var t = document.querySelector('#namespaced-plugin-template');
          //var clone = document.importNode(t.content, true);
          var shadowRoot = this.createShadowRoot();
          
          shadowRoot.innerHTML = '<div ng-app=""><button ng-click="count = count + 1" ng-init="count=0"> ng-click, increment count</button>count: {{count}}</div>';
          
                        console.log('created');

            /*jQuery.ajax({
                url: "//ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js",
                dataType: 'script',
                success: callback,
                async: true
            });*/
          //shadowRoot.appendChild();
      
        };
        proto.attachedCallback = function() {
              var url = "//ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js";
              //shadowRoot.appendChild();
              var script = document.createElement('script');
              script.src = url;
              this.appendChild(script);
        };
        
        document.registerElement('namespaced-plugin', {prototype: proto});
    }
    
})();
