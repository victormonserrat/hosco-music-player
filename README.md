# Hosco music player

We like to listen to music at all hours. For this reason we need you to develop a web application to be able to assess 
the technical part while still enjoying our favourite artists.

You have to create an SPA that consists in a simple navigation between two pages with Angular, Vue or React+Redux.

On the first page we would see a search bar where you can enter the terms (whether artists, songs, albums, genres ...). 
The search results should be listed on the same page, showing the song title and artist, and more in detail, the album 
title, release date, cover thumbnail, song length, genre and price. It should offer the ability to sort the list over 
these last three fields.

Each result should navigate to a second page in which, with a similar design to current music players, allows us to see 
the cover detail, basic information about the song and the basic controls to listen the song, play and pause, and skip 
to the previous and next song in the list of search
results.

Furthermore, this detail page should have a button that allow us to share what we are listening in our favourite social 
networks.

Send the project in a zip file or upload it to Github/Gitlab. We will not value the level of completion as 
primary, but mainly the architecture and code styling, as well as the adopted solutions, the use of design patterns or 
best practices will be what determines a good result.

To implement this test you will need to use the iTunes Search API:
https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/

Here you will find a lot of documentation in addition to the necessary, so you can go directly to the sub-section 
called "Search Examples", and verify that you only need to use a call like 
“https://itunes.apple.com/search?term=michael+jackson” for a search of the legendary Michael Jackson songs.

You will not need to use any additional parameters in the call.

## Installation

* Install dependencies with your favourite package manager: `npm install` or `yarn`.
* Create a file named `.env` in the project root and copy the content of the `.env.dist` file. You can also customize 
parameters as you consider.
* Build the application with `(npm | yarn) build`.
* Open `/dist/index.html` with your default browser. You can also run the app locally with `(npm | yarn) start`.
* [Optional] Build the storybook with `(npm | yarn build:storybook)` and open `/build/storybook/index.html` or if you 
prefer running it locally with `(npm | yarn start:storybook)`.
