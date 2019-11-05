# Summary of the application

### How to run the project
- clone the project
- run `npm install` and `npm start`, 
- go to chrome browser and enter `localhost:4000` to see the project


### My logic flow
- part1: recognize the given voice
    - display the voice and give user options to choose which file they want to play
    - when the voice file is playing, the convert text should display on the screen
- part2: can record user's speaking and at the same time, convert and display it on the screen

### Problem solving
- technology: react/go/python, I am more familiar with react, so I choose react(save time)
- method: google if there are some API or Libraries can be used to solve this problem
- search conclusion: there are many different ways(APIs)can convert speech to text, two package looks pretty cool, one is react-audio-player to play the voice, another one is react-speech-recognition to recognize voice

### step by step
- create a react project
- config issues
- install packages needed
- start coding
    - for recording: two button to start/stop the recording and display the text bellow, works well!(can use the reset button to ret the text below)
    - for recognition: when the voice is playing, let microphone to convert it to words, it doesn't work well, then I think the reason is that when the computer is playing something, it cannot record voice.(those two actions cannot happen as the same time, but why when we watch a video, it can display the subtitle at the same time? then I did a search, there is another way to make this come true by converting a voice file to get the text using google cloud speech API rather than the voice itself)

(since the time is limited(have to work...), I have no more time to try another methods,:( )



