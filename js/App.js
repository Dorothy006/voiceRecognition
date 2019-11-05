import React, { Component } from "react";
import SpeechRecognition from "react-speech-recognition";
import ReactAudioPlayer from "react-audio-player";


class Dictaphone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // auto: false
    };
  };

  render() {
    const {
      transcript,
      resetTranscript,
      startListening,
      stopListening,
      browserSupportsSpeechRecognition
    } = this.props;

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    return (
      <div>
        <div id="voiceType">
          <div>
            <label>Non-native Speaker:</label>
            <br />
            <ReactAudioPlayer src="/files/Non-nativeSpeaker2.m4a" controls onPlay={startListening} onEnded={stopListening}/>
          </div>
          <div>
            <label>Native Speaker:</label>
            <br />
            <ReactAudioPlayer src="/files/nativeSpeaker1.m4a" controls onPlay={startListening} onEnded={stopListening} />
          </div>
          <div>
            <label>Recording:</label><br/><br/>
            <button onClick={startListening }>Click to Start</button>
            <button onClick={stopListening }>Click to Stop</button><br/><br/>
          </div>
        </div>
        <div>
          <button onClick={resetTranscript}>Reset the Text</button>
          <p>
            <span>{transcript}</span>
          </p>
        </div>
      </div>
    );
  }
}

const options = {
  autoStart: false,
  // continuous: false
}

export default SpeechRecognition(options)(Dictaphone)




