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
document.querySelectorAll('.forum-ad_top').forEach(e => e.style.display = 'none');

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

// Hide right side exclude chat room
document.querySelectorAll( '#BH-slave' ).forEach(parent => {
  parent.childNodes.forEach(child => {
    if (child.id === 'chatRoom') return;
    if (child.style) {
      child.style.display = 'none'
    }
  })
});

// Users thumbnail
document.querySelectorAll( '.reply-avatar' ).forEach( e => e.style.display = 'none' );

// Hide users thumbnails after loading commends
document.querySelectorAll( '.c-reply__head.nocontent' ).forEach(parent => {
  parent.childNodes.forEach(e => {
    if (e.id && e.id.indexOf('showoldCommend') > -1) {
      let commendListId = ''
      let firstCommendId = ''
      parent.parentNode.childNodes.forEach(e => {
        if (e.id && e.id.indexOf('Commendlist') > -1) {
          commendListId = e.id
          firstCommendId = e.firstChild.id
        }
      })
      e.addEventListener('click', () => {
        const intervalId = setInterval(() => {
          const commendList = document.querySelector(`#${commendListId}`)
          const firstCommend = document.querySelector(`#${firstCommendId}`)
          if (commendList.firstChild !== firstCommend ) {
            commendList.querySelectorAll( '.reply-avatar' ).forEach( e => e.style.display = 'none' );
            clearInterval(intervalId)
          }
        }, 1000)
      })
    }
  })
});

// Hide article image & create a show button on it
document.querySelectorAll('.photoswipe-image').forEach(photoswipeImage => {
  let parent = photoswipeImage.parentElement.parentElement
  if (parent.classList.value.includes('c-article__content')) parent = photoswipeImage.parentElement
  const showButton = document.createElement('button', {type: 'button'})
  showButton.innerText = 'Show Image'
  parent.insertBefore(showButton, parent.firstChild)
  photoswipeImage.style.display = 'none'
  let isShow = false
  showButton.addEventListener('click', () => {
    photoswipeImage.style.display = isShow ? 'none' : 'inline-block'
    showButton.innerText = isShow ? 'Show Image' : 'Hide Image'
    isShow = !isShow
  })
})