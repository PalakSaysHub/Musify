require('dotenv').config();
const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
const port = 8888;
const spotifyApi = new SpotifyWebApi({
    clientId: process.env.52d14f1bda384cc5bd1c93461b8c7184,
    clientSecret: process.env.3af6046720db4ddb98b35dc519c72e72,
    redirectUri: process.env.https://musify.com/dashboard"
});
spotifyApi.clientCredentialsGrant()
    .then(data => {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);
        spotifyApi.setAccessToken(data.body['access_token']);
    })
    .catch(err => {
        console.log('Something went wrong when retrieving an access token', err);
    
    
  });
app.get('/search/:trackName', (req, res) => {
    const trackName = req.params.trackName;
    spotifyApi.searchTracks(trackName)
        .then(data => {
            res.json(data.body);
        })
        .catch(err => {
            console.error('Error searching for track:', err);
            res.status(500).send('Error searching for track');
        });
});
app.listen(4070, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

