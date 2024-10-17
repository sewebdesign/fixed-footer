(function (global) {
  function fixedFooter(options) {
    const defaults = {
      disableMobileFixedFooter: false
    };

    const settings = { ...defaults, ...options };

    const footer = document.querySelector('#footer-sections');

    function isMobile() {
      return window.innerWidth <= 767;
    }

    function fixFooter() {
      const footerHeight = footer.offsetHeight;
      const windowHeight = window.innerHeight;
      console.log('window height is: ' + windowHeight + '. footer height is:' + footerHeight);

      if (settings.disableMobileFixedFooter && isMobile()) {
        footer.classList.remove('fixed-footer');
      } else {
        footer.classList.toggle('fixed-footer', footerHeight <= windowHeight);
      }
    }

    function debounce(func, wait) {
      let timeout;
      return function () {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
      };
    }

    fixFooter();

    window.addEventListener('resize', debounce(fixFooter, 100));
  }

  global.fixedFooter = fixedFooter;
})(window);
