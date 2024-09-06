var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome){
    $('#iframeAudio').remove()
}
else {
    $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
}

ocument.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
  }
  );
  document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}
$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        return false;
    }
});

  var audio = document.getElementById("MP4/eem.mp3");
  audio.volume = 0.02;
  
function copyToClipboard() {
  var copyText = "bc1qp87g25xlz7uh640ssd4shpfls0s443p2as2fnu"; // Replace with the text you want to copy
  navigator.clipboard.writeText(copyText)
    .then(() => {
      console.log('Text copied to clipboard');
    })
    .catch(err => {
      console.error('Unable to copy text: ', err);
    });
}
function copyToClipboard() {
  var copyText = "bc1qp87g25xlz7uh640ssd4shpfls0s443p2as2fnu"; // Replace with the text you want to copy
  navigator.clipboard.writeText(copyText)
    .then(() => {
      console.log('Text copied to clipboard');
      showbtcc(); // Call showbtcc() after the text is successfully copied
    })
    .catch(err => {
      console.error('Unable to copy text: ', err);
    });
}

function showbtcc() {
  var sb = document.getElementById("btcc");

  // This is where the class name will be added & removed to activate the CSS
  sb.classList.add("show");

  setTimeout(() => {
    sb.classList.remove("show");
  }, 3000);
}
$(document).ready(function(e) {
    var refresher = setInterval("update_content();",30000); // 30 seconds
})

function update_content() {
  $.ajax({
    type: "GET",
    url: "dray.lol", // Ensure this path is correct
    cache: false,
  })
  .done(function(page_html) {
    // On successful AJAX request
    alert("LOADED");

    // Replace content of a specific container with fetched content
    $("#contentContainer").html(page_html);
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    // On AJAX request failure
    console.error("Error fetching content:", errorThrown);
    alert("Failed to load content.");
  });
}
