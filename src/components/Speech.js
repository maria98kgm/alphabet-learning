import React, { useState } from 'react';
import { useSpeechSynthesis } from "react-speech-kit";


const  Speech = () => {
  const [value, setValue] = useState('');
  const { speak } = useSpeechSynthesis();

  return ( 
    <div className="container">
      <textarea
        style={{fontSize: 30, letterSpacing: 1.5, wordSpacing: '0.5em'}}
        rows="9"
        className="form-control"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button className="btn btn-primary btn-lg btn-block" onClick={() => speak({ text: value })}>Speak</button>
    </div>
  );
}

export default Speech;