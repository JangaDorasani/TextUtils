import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Translate() {
    const [to, setTo] = useState("");
    const [from, setFrom] = useState("en");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [options, setOptions] = useState([]);

    const translate = () => {
        const encodedParams = new URLSearchParams();
        encodedParams.set('from', from);
        encodedParams.set('to', to);
        encodedParams.set('text', input);

        const options = {
            method: 'POST',
            url: 'https://google-translate113.p.rapidapi.com/api/v1/translator/text',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '3acc8af070msh8b94b04fc7bc30fp11713fjsnbd3740637ef8',
                'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
            },
            data: encodedParams,
        };

        axios.request(options)
            .then(res => {
                setOutput(res.data.data.translation);
            })
            .catch(error => {
                console.error(error);
                setOutput("Error: Translation failed.");
            });
    };

    useEffect(() => {
        axios.get('https://libretranslate.com/languages', {
            headers: { 'accept': 'application/json' }
        }).then(res => {
            setOptions(res.data);
        });
    }, []);

    return (
        <>
            <div>
                <div>
                    FROM:
                    <select value={from} onChange={(e) => setFrom(e.target.value)}>
                        {options.map(opt => <option key={opt.code} value={opt.code}>{opt.name}</option>)}
                    </select>
                    TO:
                    <select value={to} onChange={(e) => setTo(e.target.value)}>
                        {options.map(opt => <option key={opt.code} value={opt.code}>{opt.name}</option>)}
                    </select>
                </div>
            </div>
            <div>
                <textarea cols="50" rows="8" value={input} onChange={(e) => setInput(e.target.value)}></textarea>
            </div>
            <div>
                <button onClick={translate}>Translate</button>
            </div>
            <div>
                <textarea cols="50" rows="8" value={output} readOnly></textarea>
            </div>
        </>
    );
}
