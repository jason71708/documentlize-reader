
chrome.runtime.onInstalled.addListener(() => {
  let color = '#ccc'
  chrome.storage.sync.set({color})
})

// chrome.runtime.onInstalled.addListener((reason) => {
//   if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
//     chrome.tabs.create({
//       url: 'onboarding.html'
//     });
//   }
// });

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content-script.js']
  });
});
