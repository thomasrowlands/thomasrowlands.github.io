const showInformation = () => {
  document.getElementsByClassName('landing')[0].style.display = 'none';
  document.getElementsByClassName('information')[0].style.display = 'flex';
}

const showLanding = () => {
  document.getElementsByClassName('information')[0].style.display = 'none';
  document.getElementsByClassName('landing')[0].style.display = 'flex';
}