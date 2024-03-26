let errors = document.querySelector(".error");
let audio=new Audio('./news-ting-6832.mp3');
// ==========async and awit function using
// immediate invoke function========

(async () => {

  // create and show the Notification .
  function showNotification() {
    const getNotification = new Notification(
      "Hi ,Developer How can help you?",
      {
        body: "simple notification api in javascript.",
        icon: "./favicon.ico",
        data: "hello",
        dir:'rtl'
      }
    
    );
    // console.log( getNotification);
// console.log(getNotification)
    // ========close the notification
    setTimeout(() => {
      getNotification.close();
    }, 5 * 1000);

    //======= goto next url of website
    getNotification.addEventListener("click", (e) => {
      e.preventDefault();
      window.open("http://localhost:5500/NotificationAPI/", "_self");
    });
    audio.play();
  }

  // show error message============
  const sError = () => {
    errors.textContent =
      "Please enable the notification for new updated  because you block the notification.";
  };
  // Check permission================
  let granted = false;
  if (Notification.permission === "granted") {
    granted = true;
    
  } else if (Notification.permission !== "denied") {
    let permissions = await Notification.requestPermission();
    // alert('Allow notification for new update message.')
    granted = permissions == "granted" ? true : false;
  }
  // ==========show notification and console.error();
  granted ? showNotification() : sError();

})();
