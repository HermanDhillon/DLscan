# DLscan

The working application can be used at: [http://dlscan.netlify.com](http://dlscan.netlify.com)

## About This Project

A simple application that allows users to use their webcams to scan thier driver license and then view information extracted from it in a minimalistic user interface. It works by scanning the PDF417 barcode found on the back of a USA issued driver license. The PDF417 barcode contains all info that can be seen on the front of the license/id card.

The scan will only display Full name, Address, issue and expiration dates, but more extracted information can be found in your browsers console inside a JS object. This hidden information is raw and unparsed.

## Installation and Setup Instructions to Run Locally

Clone this repository. You will need `node` and `npm` installed on your machine.

Installation:

    `npm install`

To run dev Server:

    `npm run dev`

To Visit App:

    `localhost:5173/`

The react app can also be built to a "/dist" directory.

To build App:

    `npm run build`

To Visit App:

    `npm preview`

    then

    Your CLI will display the local url with port that the app can be viewed on.

## Project Architecture

1 tier

## Technologies

### Vite

- **What?:** Vite is a local development server that uses Rollup and esbuild internally for bundling of Vue and React apps.
- **Why?:** Vite is a personal preference of mine, it allows me to quickly set up a react app in just a few CLI commands. Furthermore it comes with an easy to run dev server which helps tremendously when developing.

### React

- **What?:** An open source Javascript library/framework for building user interfaces based on components.
- **Why?:** This application was simple enough that it could have been built in pure Javascript/HTML/CSS. So why did I decide to add an extra dependency and build step?

### Tailwind

- **What?:**
- **Why?:**

### Libraries

## Obstacles

barcode recognition

webcam specs

mobile

laptop

desktop

## Assumptions

camera

usa license

2019 barcode
