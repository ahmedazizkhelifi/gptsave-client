import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Navbar, Loading, Tag } from "../../components"
import { Notfound } from "../../pages"
import "./chat.css"
import "./global-chat.css"
const Chat = () => {
  const { chatId } = useParams()
  const [data, setData] = useState(null)
  const [content, setContent] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // request a page
    fetch(`http://localhost:3010/api/chat/${chatId}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        } else {
          throw new Error(response.status)
        }
      })
      .then((data) => {
        console.log(data)
        setData(data)
      })
      .catch((error) => {
        console.log(error)
        setData({ error: "failed" })
      })
    fetch(`https://gptsave.blob.core.windows.net/newcontainer/${chatId}.html`)
      .then((response) => {
        if (response.status === 200) {
          return response.text()
        } else {
          throw new Error(response.status)
        }
      })
      .then((data) => {
        setContent(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Navbar />
      <div className="chat section__margin section__padding">
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
          <>
            <h2>{data?.title ?? "Loading ..."}</h2>
            <p>
              By: <strong>{data?.owner}</strong>
            </p>
            {data?.tags?.map((tag, index) => (
              // <span key={index} className="tag">
              //   {tag}
              // </span>
              <Tag
                style={{ marginLeft: 10 }}
                key={index}
                tag={tag}
                tagType="three"
              />
            ))}
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </>
        )}
      </div>
    </>
  )
}

export default Chat
