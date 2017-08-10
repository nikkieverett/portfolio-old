const path = require('path');
const express = require('express');
// const medium = require('medium-sdk')

const app = express();

const port = process.env.PORT || 5003;

app.use(express.static(path.resolve(__dirname, 'public')));

// const client = new medium.MediumClient({
//   clientId: 'fe1c9ea40dfc',
//   clientSecret: 'e86e5e5c7d62e2c16b303585bc3b7aa5705f3f67'
// });
//
// const redirectURL = 'https://easypresso.herokuapp.com/callback/medium';
//
//
// const url = client.getAuthorizationUrl('secretState', redirectURL, [
//   medium.Scope.BASIC_PROFILE, medium.Scope.PUBLISH_POST
// ]);
// console.log(url);
//
// // (Send the user to the authorization URL to obtain an authorization code.)
//
// client.exchangeAuthorizationCode('YOUR_AUTHORIZATION_CODE', redirectURL, function (err, token) {
//   client.getUser(function (err, user) {
//     console.log(user);
//     client.createPost({
//       userId: user.id,
//       title: 'A new post',
//       contentFormat: medium.PostContentFormat.HTML,
//       content: '<h1>A New Post</h1><p>This is my new post.</p>',
//       publishStatus: medium.PostPublishStatus.DRAFT
//     }, function (err, post) {
//       console.log(token, user, post);
//     });
//   });
// });

app.listen(port, function(){
  console.log('listening on port ', port);
});
