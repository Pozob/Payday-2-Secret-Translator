# Payday 2 Secret Translator

## Usage

A live version of this project can be found at http://pd2translator.pozob.de/

Match the Symbols on the Tablet in the Game to the ones on the Website.

If you start reading from left to right; from bottom to top use the Reverse Filter Option.

The Site will automatically filter out the Texts, that dont match the inputed Text. The Title is the Name of a Achievement, that you need to obtain in the Game.

Clicking on a Achievement, will put it on your Todo List. Using the green Download Button in the middle, you can download a Textfile containing the Achievements on your Todo List.

## Docker

If you would like to host this app yourself, just build the Image using the Dockerfile and run it while mapping the **internal Port 5000** to your external machine.

An Example can be found here:

#### Build

> docker build -t pd2secrettranslator .

#### Run

> docker run -p 80:5000 pd2secrettranslator
