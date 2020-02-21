document.getElementById("shareHubPage").onchange = (function() {
  var contentToShare = document.getElementById("contentToShare").value;

  //Twitter
  var tweetThatButton = document.getElementById("tweetThatButton");

  tweetThatButton.onclick = (function() {
    tweetThatButton.href = "https://twitter.com/intent/tweet?text=" + contentToShare;
  });

  //Facebook
  var facebookThatButton = document.getElementById("facebookThatButton");

  facebookThatButton.onclick = (function() {
    facebookThatButton.href = "https://www.facebook.com/sharer/sharer.php?u=" + contentToShare;
  });


});
