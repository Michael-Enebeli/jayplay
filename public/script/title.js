
function updateTitle() {
    const path = window.location.pathname;
    let pageTitle = '';
  
    switch (path) {
      case '/':
        pageTitle = 'Jay Play | Home';
        break;
      case '/biography':
        pageTitle = 'Jay Play | Biography';
        break;
      case '/music':
        pageTitle = 'Jay Play | Music';
        break;
      case '/contact':
        pageTitle = 'Jay Play | Contact';
        break;
      default:
        pageTitle = 'Jay Play';
        break;
    }
  
    document.title = pageTitle;
  }
  
  updateTitle();
  window.addEventListener('popstate', updateTitle);
  window.addEventListener('hashchange', updateTitle);
  
  const originalPushState = history.pushState;
  history.pushState = function(state, title, url) {
    originalPushState.apply(this, arguments);
    updateTitle(); 
  };
  
  const originalReplaceState = history.replaceState;
  history.replaceState = function(state, title, url) {
    originalReplaceState.apply(this, arguments);
    updateTitle();
  };
  