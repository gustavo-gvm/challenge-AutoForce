const networks = document.querySelector('.header__networks-list');

const addYoutube = document.createElement('a');
addYoutube.setAttribute('href', 'https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ');
addYoutube.setAttribute('target', '_blank');

const addYoutubeIcon = document.createElement('i');
addYoutubeIcon.setAttribute('class', 'icon icon-youtube-header icon--small icon--hover-youtube');

addYoutube.append(addYoutubeIcon);

networks.append(addYoutube);