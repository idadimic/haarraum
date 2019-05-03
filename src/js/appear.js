const menuTag = document.querySelectorAll('.menu-full nav a')
  
  menuTag.forEach((menuTag, index) => {
    const delay = index * 100
    menuTag.style.transitionDelay = delay + "ms"
  })