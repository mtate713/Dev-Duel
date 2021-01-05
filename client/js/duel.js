/* eslint-disable no-undef */
$('form').submit(() => {
  console.log($('form input[name=username-left]').val())
  console.log($('form input[name=username-right]').val())
  const usernameLeft = $('form input[name=username-left]').val();
  const usernameRight = $('form input[name=username-right]').val()
  console.log(`examining ${usernameLeft} and ${usernameRight}`)

  fetch(`${USERS_URL}?username=${usernameLeft}&username=${usernameRight}`)
  .then(response => response.json()) 
  .then(data => {
      console.log(`Got data for ${usernameLeft}`);
      console.log(`Got data for ${usernameRight}`);
      //console.log(data);
      let duelLeft = data[0];
      let duelRight = data[1];

      $(".left .username").html(duelLeft.username);
      $(".left .full-name").html(duelLeft.name);
      $(".left .location").html(duelLeft.location);
      $(".left .email").html(duelLeft.email);
      $(".left .bio").html(duelLeft.bio);
      $(".left .avatar").attr("src", duelLeft["avatar-url"]);
      $(".left .titles").html(duelLeft["titles"].toString());
      $(".left .favorite-language").html(duelLeft["favorite-language"]);
      $(".left .total-stars").html(duelLeft["total-stars"]);
      $(".left .most-starred").html(duelLeft["highest-starred"]);
      $(".left .public-repos").html(duelLeft["public-repos"]);
      $(".left .perfect-repos").html(duelLeft["perfect-repo"]);
      $(".left .followers").html(duelLeft.followers);
      $(".left .following").html(duelLeft.following);
      
      $(".right .username").html(duelRight.username);
      $(".right .full-name").html(duelRight.name);
      $(".right .location").html(duelRight.location);
      $(".right .email").html(duelRight.email);
      $(".right .bio").html(duelRight.bio);
      $(".right .avatar").attr("src", duelRight["avatar-url"]);
      $(".right .titles").html(duelRight["titles"].toString());
      $(".right .favorite-language").html(duelRight["favorite-language"]);
      $(".right .total-stars").html(duelRight["total-stars"]);
      $(".right .most-starred").html(duelRight["highest-starred"]);
      $(".right .public-repos").html(duelRight["public-repos"]);
      $(".right .perfect-repos").html(duelRight["perfect-repo"]);
      $(".right .followers").html(duelRight.followers);
      $(".right .following").html(duelRight.following);
      
      $('.duel-container').removeClass('hide') // Display '.user-results' element

      $('.duel-results .vs').html(duelLeft.username + ' VS ' + duelRight.username)
      let winner = duel(duelLeft, duelRight);

      if (winner == "Tie") {
        $('.duel-results .winner').html("TIE!")
      }
      else {
        $('.duel-results .winner').html("WINNER: " + winner.username + "!")
      }


    })
    .catch(err => {
      console.log(`Error getting data for ${usernameLeft} and ${usernameRight}`)
      console.log(err)
      $('.duel-error').removeClass('hide') 
      $('.duel-error .error').html(err)
    
    })
     
  return false 
})

function duel(duelerLeft, duelerRight) {
  let leftTotal = 0;
  let rightTotal = 0;

  if (duelerLeft["total-stars"] > duelerRight["total-stars"]) {
    leftTotal += 1
  }
  else if (duelerLeft["total-stars"] == duelerRight["total-stars"]) {
    leftTotal += 1;
    rightTotal += 1;
  }
  else {
    rightTotal += 1;
  }
  
  if (duelerLeft["highest-starred"] > duelerRight["highest-starred"]) {
    leftTotal += 1
  }
  else if (duelerLeft["highest-starred"] == duelerRight["highest-starred"]) {
    leftTotal += 1;
    rightTotal += 1;
  }
  else {
    rightTotal += 1;
  }

  if (duelerLeft["public-repos"] > duelerRight["public-repos"]) {
    leftTotal += 1
  }
  else if (duelerLeft["public-repos"] == duelerRight["public-repos"]) {
    leftTotal += 1;
    rightTotal += 1;
  }
  else {
    rightTotal += 1;
  }

  if (duelerLeft["perfect-repo"] > duelerRight["perfect-repo"]) {
    leftTotal += 1
  }
  else if (duelerLeft["perfect-repo"] == duelerRight["perfect-repo"]) {
    leftTotal += 1;
    rightTotal += 1;
  }
  else {
    rightTotal += 1;
  }

  if (duelerLeft.followers > duelerRight.followers) {
    leftTotal += 1
  }
  else if (duelerLeft.followers == duelerRight.followers) {
    leftTotal += 1;
    rightTotal += 1;
  }
  else {
    rightTotal += 1;
  }

  if (leftTotal > rightTotal) {
    return duelerLeft
  }
  else if (leftTotal == rightTotal) {
    return "Tie"
  }
  else {
    return duelerRight
  }
}

function validateForm() {
  let x = $('form input[name=username-left]').val();
  let y = $('form input[name=username-right]').val()
  if (x == "" || y == "") {
    alert("Both usernames must be filled out.");
    return false;
  }
} 

