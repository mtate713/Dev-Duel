/* eslint-disable no-undef */
$('form').submit(() => {
  const username = $('form input').val()
  console.log(`examining ${username}`)

  fetch(`${USER_URL}/${username}`)
    .then(response => response.json()) 
    .then(data => {
      console.log(`Got data for ${username}`)
      //console.log(data)
      $(".username").html(data.username);
      $(".full-name").html(data.name);
      $(".location").html(data.location);
      $(".email").html(data.email);
      $(".bio").html(data.bio);
      $(".avatar").attr("src", data["avatar-url"]);
      $(".titles").html(data["titles"].toString());
      $(".favorite-language").html(data["favorite-language"]);
      $(".total-stars").html(data["total-stars"]);
      $(".most-starred").html(data["highest-starred"]);
      $(".public-repos").html(data["public-repos"]);
      $(".perfect-repos").html(data["perfect-repo"]);
      $(".followers").html(data.followers);
      $(".following").html(data.following);

      $('.user-results').removeClass('hide') 
    })
    .catch(err => {
      console.log(`Error getting data for ${username}`)
      console.log(err)
      $('.user-error').removeClass('hide') 
      $('.user-error .error').html(err)
    })

  return false 
})

function validateForm() {
  var x = $('form input').val();
  if (x == "") {
    alert("Username must be filled out");
    return false;
  }
} 
