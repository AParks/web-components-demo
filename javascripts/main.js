(function() {
    if ('registerElement' in document
        && 'import' in document.createElement('link')
        && 'content' in document.createElement('template')) {
      // platform is good!
    } else {
      // polyfill the platform!
      var e = document.createElement('script');
      e.type = 'text/javascript';
      e.src = 'https://rawgit.com/webcomponents/webcomponentsjs/master/webcomponents.js';
      document.body.appendChild(e);
    }
})();
