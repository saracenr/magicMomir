# Magic the Gathering: Momir Server
Description of the Momir format: https://mtg.gamepedia.com/Momir
TLDR: Momir is a card game format that essentially requires access to large subset of every card ever
printed, at random.  It is only ever really capable of being played online.  

This program is a server to run on a Raspberry Pi with a thermal printer component in order to facilitate the 
ability to play the Momir format in real life.

## Getting Started

Run '''node app.js''' in order to start the server.  Then navigate to the host page and use the webpage to generate and print cards.

### Prerequisites
Dependencies:
* Express
* Multer
* Body-parse
* Request

Program:
Processing - a bitmap converter program

### Images

![Momir](\images\card.png)
