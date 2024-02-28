
  // Set the time for the countdown (in minutes)
  var timeInMinutes = 13;
  var currentTime = Date.parse(new Date());
  var deadline = new Date(currentTime + timeInMinutes * 60 * 1000);

  function getTimeRemaining(endtime) {
    var total = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((total / 1000) % 60);
    var minutes = Math.floor((total / 1000 / 60) % 60);

    return {
      'total': total,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);

    function updateClock() {
      var t = getTimeRemaining(endtime);

      clock.innerHTML = ('0' + t.minutes).slice(-2) + ':' + ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
        // Redirect user after timer completes
        window.location.href = "https://example.com";
      }
    }

    updateClock(); // run function once at first to avoid delay
    var timeinterval = setInterval(updateClock, 1000);
  }

  initializeClock('countdown', deadline);

