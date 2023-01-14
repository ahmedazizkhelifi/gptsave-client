import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Navbar, Loading, Tag, SEO } from "../../components"
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
    fetch(`${process.env.REACT_APP_BACK_HOST}/api/chat/${chatId}`)
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
      <SEO title={data?.title ?? "Loading ..."} />
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
            {data?.owner && (
              <p>
                By:{" "}
                <strong>
                  <a
                    href={`/profile/${data?.owner}`}
                    // target="_blank"
                    rel="noopener noreferrer">
                    {data?.owner}
                  </a>
                </strong>
              </p>
            )}
            {data?.tags?.map((tag, index) => (
              <Tag
                style={{ marginLeft: 10 }}
                key={index}
                tag={tag}
                tagType="three"
              />
            ))}
            <div
              className="chat__content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </>
        )}
      </div>
    </>
  )
}

export default Chat
