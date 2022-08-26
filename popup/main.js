const documentlizeButton = document.getElementById('documentlizeButton');

// chrome.storage.sync.get('color', ({ color }) => {
//   documentlizeButton.style.backgroundColor = color;
// });

documentlizeButton.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setDocumentalCSS,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setDocumentalCSS() {
  // chrome.storage.sync.get("color", ({ color }) => {
  //   document.body.style.backgroundColor = color;
  // });
  document.querySelector( '.TOP-bh' ).style.visibility = 'hidden';
  document.querySelector( '#BH-menu-path' ).style.visibility = 'hidden';
  document.querySelector( '#BH-menu-path' ).style.backgroundColor = '#fff';
  document.querySelector( '.BH-menuE' ).style.visibility = 'hidden';
  document.querySelector( '.c-fixed--header' ).style.visibility = 'hidden';
  document.querySelector( '#bh-banner' ).style.visibility = 'hidden';
  document.querySelectorAll( '.c-section__side' ).forEach( e => e.style.visibility = 'hidden' );
  document.querySelector( '#BH-slave' ).style.visibility = 'hidden';
}