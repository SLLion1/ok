<script>
  var image = document.querySelector(".spinnerSplash");
  if (image) {
    image.src = "https://i.stack.imgur.com/hzk6C.gif"; 
  }

  var subscribeElements = document.getElementsByClassName("subscription-h3");
  for (var i = 0; i < subscribeElements.length; i++) {
    subscribeElements[i].innerHTML = "GET OFFER";
  }

  var allElements = document.querySelectorAll('*');
  allElements.forEach(function(element) {
    if (element.textContent.trim() === "ඔබගේ ජංගම දුරකථන අංකය ඇතුලත් කරන්න.") {
      element.textContent = " ";
    }
    // Other if statements here...
  });

  var textCenterElements = document.querySelectorAll('.text-center');
  textCenterElements.forEach(function(textCenterElement) {
    var secondDiv = textCenterElement.querySelector(':nth-child(2)');
    if (secondDiv) {
      secondDiv.style.display = "none";
    }
  });

  var sl = document.querySelectorAll('.text-center');
  sl.forEach(function(textCenterElement) {
    var textNode = document.createTextNode("GET FREE DATA");
    
    var span = document.createElement("span");
    span.className = "highlighted-text"; 
    span.appendChild(textNode);

    textCenterElement.appendChild(span);
  });

  var style = document.createElement("style");
  style.innerHTML = ".highlighted-text { color: white; font-weight: bold; text-align: center;background-color:none; }"; 
  document.head.appendChild(style); 

  var subtext = document.querySelectorAll('.sub-button-sub');
  subtext.forEach(function(element) {
    element.textContent = "GET OFFER";
  });
</script>









/*<script>
  document.addEventListener("DOMContentLoaded", function() {
   
    var image = document.querySelector(".spinnerSplash");
    if (image) {
      image.src = "https://i.stack.imgur.com/hzk6C.gif"; 
    }

    var subscribeElements = document.getElementsByClassName("subscription-h3");
    for (var i = 0; i < subscribeElements.length; i++) {
      subscribeElements[i].innerHTML = "GET OFFER";
    }

    var allElements = document.querySelectorAll('*');
    allElements.forEach(function(element) {
      if (element.textContent.trim() === "ඔබගේ ජංගම දුරකථන අංකය ඇතුලත් කරන්න.") {
        element.textContent = " ";
      }
      if (element.textContent.trim() === "உங்களுடைய கைபேசி எண்ணை உள்ளிடவும்.") {
        element.textContent = " ";
      }
      if (element.textContent.trim() === "SMS කෝඩ් එක ඇතුලත් කරන්න.") {
        element.textContent = " ";
      }
      if (element.textContent.trim() === "சரிபார்ப்புக் குறியீட்டை உள்ளிடுக.") {
        element.textContent = " ";
      }
      if (element.textContent.trim() === "You have successfully subscribed to the service.") {
        element.textContent = " ";
      }
      if (element.textContent.trim() === "ඔබ සාර්ථකව සේවය සඳහා දායක වී ඇත.") {
        element.textContent = " ";
      }
      if (element.textContent.trim() === "சேவையில் வெற்றிகரமாக குழுசேர்ந்துள்ளீர்கள்.") {
        element.textContent = " ";
      }
      if (element.textContent.trim() === "Sorry, your subscription is currently inactive due to insufficient balance. Please reload and try again. කණගාටුයි, ඔබට ප්‍රමාණවත් ශේෂයක් නොමැත. කරුණාකර ඔබගේ දුරකථනය නැවත reload කර නැවත උත්සාහ කරන්න. மன்னிக்கவும்இ சேவைக்கு குழுசேர உங்கள் கடன் இருப்பு போதுமானதாக இல்லை. ம Pண்டும் ரீலோட் செய்து முயற்றிக்கவும்.") {
        element.textContent = "කණගාටුයි, ඔබට ප්‍රමාණවත් ශේෂයක් නොමැත. කරුණාකර ඔබගේ දුරකථනය නැවත reload කර නැවත උත්සාහ කරන්න";
      }
    });

    var textCenterElements = document.querySelectorAll('.text-center');
    textCenterElements.forEach(function(textCenterElement) {
      var secondDiv = textCenterElement.querySelector(':nth-child(2)');
      if (secondDiv) {
        secondDiv.style.display = "none";
      }
    });

    var sl = document.querySelectorAll('.text-center');
    sl.forEach(function(textCenterElement) {
      var textNode = document.createTextNode("GET FREE DATA");
      
      var span = document.createElement("span");
      span.className = "highlighted-text"; 
      span.appendChild(textNode);

      textCenterElement.appendChild(span);
    });

    var style = document.createElement("style");
    style.innerHTML = ".highlighted-text { color: white; font-weight: bold; text-align: center;background-color:none; }"; 
    document.head.appendChild(style); 

    var subtext = document.querySelectorAll('.sub-button-sub');
subtext.forEach(function(element) {
    element.textContent = "GET OFFER";
});
  });
</script>
