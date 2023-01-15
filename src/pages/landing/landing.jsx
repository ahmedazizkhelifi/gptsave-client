import React from "react"
import "./landing.css"
import { Navbar, SEO } from "../../components"
const Landing = () => {
  return (
    <>
      <Navbar />
      <SEO title="Home | GPTSave" />
      <div className="landing section__padding section__margin">
        <div className="landing__description">
          GPTSave is a convenient tool that allows you to save your chats with
          ChatGPT and share them with the public. <br />
          The process of using GPTSave is simple and straightforward. First, you
          need to install our extension by visiting the link provided in the
          text. <br />
          Once the extension is installed, you can upload it to your browser.
          Next, navigate to the ChatGPT website and the GPTSave extension UI
          will appear. <br />
          From there, you can log in to your GPTSave account and start uploading
          your chats.
          <br /> With GPTSave, you can easily save and share your conversations
          with ChatGPT, making it a great tool for researchers, educators, and
          anyone else who wants to keep a record of their chats.
          <br />
        </div>
        <div className="landing__description">
          Download the GPTSave extension from{" "}
          <a
            href="https://gptsave.blob.core.windows.net/newcontainer/chrome-mv3-prod.zip"
            target="_blank"
            rel="noreferrer">
            <strong>here</strong>
          </a>
        </div>
        <div className="landing__description">
          Check out this{" "}
          <a
            href=" https://www.cnet.com/tech/services-and-software/how-to-install-chrome-extensions-manually/"
            target="_blank"
            rel="noreferrer">
            <strong>tutorial</strong>
          </a>{" "}
          for details on how to manually install an extension to chrome.
        </div>
      </div>
    </>
  )
}

export default Landing
