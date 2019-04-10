/*  back button */
document.addEventListener("backbutton", onBackKeyDown, false);
function onBackKeyDown() {
  var lastPage = localStorage.getItem('lastPage'),
    currentPage = localStorage.getItem('currentPage');
  if (lastPage == 'true') navigator.app.exitApp();
  if (currentPage == 'home') localStorage.setItem('lastPage', 'true');

  app.router.back();
}