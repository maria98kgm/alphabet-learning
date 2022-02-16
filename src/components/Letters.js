import React from 'react';
import { useSpeechSynthesis } from "react-speech-kit";

const Letters = () => {
    const { speak } = useSpeechSynthesis();

    return (
        <div className='wrapper'>
            <div id="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'A' })} href='#' ><h1 className="text-center">Aa</h1></a>
                        </div>
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'B' })} href="#"><h1 className="text-center">Bb</h1></a>
                        </div>
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'C' })} href="#"><h1 className="text-center">Cc</h1></a>
                        </div>
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'D' })} href="#"><h1 className="text-center">Dd</h1></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'E' })} href="#"><h1 className="text-center">Ee</h1></a>
                        </div>
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'F' })} href="#"><h1 className="text-center">Ff</h1></a>
                        </div>
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'G' })} href="#"><h1 className="text-center">Gg</h1></a>
                        </div>
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'H' })} href="#"><h1 className="text-center">Hh</h1></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'I' })} href="#"><h1 className="text-center">Ii</h1></a>
                        </div>
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'J' })} href="#"><h1 className="text-center">Jj</h1></a>
                        </div>
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'K' })} href="#"><h1 className="text-center">Kk</h1></a>
                        </div>
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'L' })} href="#"><h1 className="text-center">Ll</h1></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'M' })} href="#"><h1 className="text-center">Mm</h1></a>
                        </div>
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'N' })} href="#"><h1 className="text-center">Nn</h1></a>
                        </div>
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'O' })} href="#"><h1 className="text-center">Oo</h1></a>
                        </div>
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'P' })} href="#"><h1 className="text-center">Pp</h1></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'Q' })} href="#"><h1 className="text-center">Qq</h1></a>
                        </div>
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'R' })} href="#"><h1 className="text-center">Rr</h1></a>
                        </div>
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'S' })} href="#"><h1 className="text-center">Ss</h1></a>
                        </div>
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'T' })} href="#"><h1 className="text-center">Tt</h1></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'U' })} href="#"><h1 className="text-center">Uu</h1></a>
                        </div>
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'V' })} href="#"><h1 className="text-center">Vv</h1></a>
                        </div>
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'W' })} href="#"><h1 className="text-center">Ww</h1></a>
                        </div>
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'X' })} href="#"><h1 className="text-center">Xx</h1></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'Y' })} href="#"><h1 className="text-center">Yy</h1></a>
                        </div>
                        <div className="col-sm-3">
                            <a onClick={() => speak({ text: 'Z' })} href="#"><h1 className="text-center">Zz</h1></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Letters;

