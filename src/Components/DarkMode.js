import React,{useState} from 'react'

export default function DarkMode() {
  const [mode,setMode]=useState({
    color:"black",
    backgroundColor:"white"
  })
  const [btnText,setBtnText]=useState("DarkMode")
  const toggleMode=()=>{
    if(mode.color === "black" )
      {
        setMode({
          color:"White",
          backgroundColor:"black"
        })
        setBtnText("LightMode")
      }
      else{
        setMode({
          color:"black",
          backgroundColor:"white"
        })
        setBtnText("DarkMode")
      }
  }
  return (
    <div style={mode}>
      <div className="container"> is not uncommon for grade school students to learn that a proper paragraph entails at least five sentences. This isn’t necessarily true, though. A single paragraph can range from one sentence to five, ten, or even more. Single-sentence paragraphs are especially common in journalistic writing. But what makes a paragraph, well, a paragraph, is that it revolves around a central idea before moving on to the next.Paragraphs range in size depending on the complexity of the topic. And although this isn’t one-size-fits-all advice, writing guides often recommend shorter paragraphs over longer ones. A break between paragraphs can serve as a small pause, or rest, for the reader. Learning how to break a paragraph strategically even if you’re not done writing about the main point takes practice. If you can take the main point of the paragraph and break it into smaller points, do that(like how we broke this section about paragraph size into two paragraphs).
      </div>
<button type="button" onClick={toggleMode} className="btn btn-primary">{btnText}</button>
    </div>
  )
}
