(function() {
    if ('registerElement' in document
        && 'import' in document.createElement('link')
        && 'content' in document.createElement('template')) {
      // platform is good!
      window.onload = function() {
          createShadowRoot();
          // import app styles
          var style = document.createElement('style');
          style.textContent = "@import 'stylesheets/stylesheet.css'";
          shadow.insertBefore(style, shadow.childNodes[0]);
        
      };
    } else {
      // polyfill the platform!
      var script = "<script type='text/javascript' src='bower_components/webcomponentsjs/webcomponents.js'></script>";
      document.write(script);
      window.addEventListener('WebComponentsReady', function(e) {
          // imports are loaded and elements have been registered
          console.log('Components are ready');
          var shadowRoot = createShadowRoot();
          
          // prevent plugin css from overwriting app-level css
          // note: this doesnt prevent the opposite direction - app styles leaking into shadow dom
          WebComponents.ShadowCSS.shimStyling( shadowRoot, '#namespacedPlugin' );
      });
    }
    
    function createShadowRoot() {
      // create shadow DOM on the <p> element above
      var shadow = document.querySelector('#namespacedPlugin').createShadowRoot();
      
      // plugin HTML
      var template = document.querySelector('.plugin-template');
      shadow.appendChild(document.importNode(template.content, true)); // can also use shadow.innerHTML
      
      return shadow;
    }
    
})();
