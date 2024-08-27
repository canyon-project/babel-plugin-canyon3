if (window.isDocumentAddVisibilitychangeWriteCanyonToLocal) {
} else {
  window.isDocumentAddVisibilitychangeWriteCanyonToLocal = true
  if (window.document && window.document.addEventListener) {
    if (window.writeCanyonToLocal) {
      window.manualWriteCanyonToLocal = function () {
        window.writeCanyonToLocal(JSON.stringify({
          coverage: window.__coverage__,
          canyon: window.__canyon__
        }))
      }
    }
    window.document.addEventListener('visibilitychange', function () {
      if (window.document.visibilityState === 'hidden') {
        if (window.writeCanyonToLocal) {
          window.writeCanyonToLocal(JSON.stringify({
            coverage: window.__coverage__,
            canyon: window.__canyon__
          }))
        }
      }
    });
  }
}
