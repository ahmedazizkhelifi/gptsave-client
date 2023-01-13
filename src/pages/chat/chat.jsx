import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Navbar, Loading } from "../../components"
import { Notfound } from "../../pages"
import "./chat.css"
import "./global-chat.css"
const Chat = () => {
  const { chatId } = useParams()
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // request a page

    fetch(`https://gptsave.blob.core.windows.net/newcontainer/${chatId}.html`)
      .then((response) => {
        if (response.status === 200) {
          return response.text()
        } else {
          throw new Error(response.status)
        }
      })
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setError(true)
        setLoading(false)
      })
  }, [chatId])

  return (
    <>
      <Navbar />
      <div className="chat section__margin section__padding">
        <h1>chat {chatId}</h1>
        {/* 
        owner:
        likes dislikes
        comment
        tags
        */}
        {loading ? (
          <Loading />
        ) : error ? (
          <Notfound />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: data }} />
        )}
      </div>
    </>
  )
}

export default Chat
