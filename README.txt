Web3 Music Player:

Usage: 
    To run, please navigate to the /web3-music-appl directory in terminal (cd ./web3-music-appl)
    Next, run "npm install" to install any necessary dependencies
    Finally, run "npm start" and navigate to local host 3000 in your browser.

Credentials:
    You will need to create a metamask wallet to access the application.
    To do this, you can navigate to metamask.io in your browser, go to the download page, and install the extension via the chrome store.
    After installing, you should be brought to a page where you can set up a meta mask wallet.
    Finally, once you return to our home page, you should be able to click "Login" and accept from within the extension to access the site.

A couple notes:
    - After initially starting the application, particularly the player, may need a few moments to load as uploading and downloading date from
    the blockchain is rather slow. Photos and audio files should be available for consumption in a short amount of time.
    - If any errors occur when trying to run the application, you may need to wait a few moments after "npm install", restart your IDE, or manually
    install certain dependencies. We have found that reoccurring suspects are "sanity/client" and "react-bootstrap".
    - Note that the main player is listed under the "MusicPlayer" tab. The button player was an experiment we opted to leave in the codebase for the moment.
    - If you would like to experiment with "purchasing songs", you can do the following to obtain cryptocurrency for your wallet:
          1. Open your metamask extension.
          2. Click on the Network at the top (Should say "Ethereum Mainnet" by default.)
          3. Select "show/hide test networks" if only one network is showing.
          4. Once the settings open, tick the toggle that says "show test networks" to "ON"
          5. Click the network dropdown again, and select Rinkeby Test Network.
          6. navigate to rinkebyfaucet.com, copy your wallet address from the metamask extension, and paste it into the box, then hit "Send me ETH".
          7. Within a few moments, you should be able to see "0.1 ETH" in your metamask wallet!
