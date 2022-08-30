// document.querySelectorAll( '#BH-top-data' ).forEach( e => e.style.background = '#eee' );
// document.querySelectorAll( '.TOP-bh' ).forEach( e => e.style.background = '#eee' );

// Change Website icon
let faviconLink = document.querySelector("link[rel~='icon']");
if (!faviconLink) {
  faviconLink = document.createElement('link');
  faviconLink.rel = 'icon';
  document.getElementsByTagName('head')[0].appendChild(faviconLink);
}
faviconLink.href = 'https://stackoverflow.com/favicon.ico';

// Change Website title
document.title = 'How the Question Mark (?) Operator Works in JavaScript'

// Hide Ad
setTimeout(() => {
  document.querySelectorAll('iframe').forEach(e => {
    if (e.id.indexOf('google_ads') > -1) {
      e.style.display = 'none'
    }
  })
}, 2000);

/**
 * B.php
 */

// Left side article thumbnail
document.querySelectorAll('.b-list__img').forEach(e => e.style.display = 'none');

/**
 * C.php
 */

// Left side
document.querySelectorAll('.c-section__side').forEach(e => e.style.display = 'none');

// Right side
document.querySelectorAll( '#BH-slave' ).forEach(e => e.style.display = 'none');

// Users thumbnail
document.querySelectorAll( '.reply-avatar' ).forEach( e => e.style.display = 'none' );

// Hide users thumbnails after loading commends
document.querySelectorAll( '.c-reply__head.nocontent' ).forEach(parent => {
  parent.childNodes.forEach(e => {
    if (e.id && e.id.indexOf('showoldCommend') > -1) {
      e.addEventListener('click', () => {
        setTimeout(() => {
          document.querySelectorAll( '.reply-avatar' ).forEach( e => e.style.display = 'none' );
        }, 1000)
      })
    }
  })
});

// document.querySelectorAll('.photoswipe-image').forEach(parent => {
//   const imageElement = parent.querySelector('.lazyloaded')
//   let showImage = false
//   if (imageElement) {
//     imageElement.style.display = 'none'
//   }
//   const imageButton = document.createElement('button', { type: 'button' })
//   imageButton.innerText = 'open'
//   imageButton.addEventListener('click', () => {
//     if (imageElement) {
//       imageElement.style.display = showImage ? 'none' : 'inline-block'
//     }
//     showImage = !showImage
//     imageButton.innerText = showImage ? 'close' : 'open'
//   })

//   parent.appendChild(imageButton)
// })
