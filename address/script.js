document.addEventListener("DOMContentLoaded", function() {
    function sendToTelegram(address) {
      
      const message = `New order received:\n\nName: ${address.name}\nPhone: ${address.phone}\nAddress: ${address.address}\nPIN Code: ${address.pincode}\nState: ${address.state}\nCity: ${address.city}`;
      const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
      fetch(telegramUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to send message to Telegram bot');
        }
        return response.json();
      })
      .then(data => {
        console.log('Message sent successfully:', data);
      })
      .catch(error => {
        console.error('Error sending message to Telegram bot:', error);
      });
    }
  
    function saveAddressToLocalStorage(address) {
      localStorage.setItem("address", JSON.stringify(address));
    }
  
    function validateForm() {
      let name = document.getElementById("name").value;
      let phone = document.getElementById("phone").value;
      let address = document.getElementById("address").value;
      let pincode = document.getElementById("pincode").value;
      let state = document.getElementById("state").value;
      let city = document.getElementById("city").value;
  
      if (name.trim() === "" || phone.trim() === "" || address.trim() === "" || pincode.trim() === "" || state.trim() === "" || city.trim() === "") {
        alert("Please fill in all fields.");
        return false;
      }
  
      return true;
    }
  
    document.querySelector("form").addEventListener("submit", function(event) {
      event.preventDefault();
  
      if (validateForm()) {
        let address = {
          name: document.getElementById("name").value,
          phone: document.getElementById("phone").value,
          address: document.getElementById("address").value,
          pincode: document.getElementById("pincode").value,
          state: document.getElementById("state").value,
          city: document.getElementById("city").value
        };
  
        sendToTelegram(address);
        saveAddressToLocalStorage(address);
        window.location.href = "payment.html";
      }
    });
  });
  