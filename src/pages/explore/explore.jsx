import React, { useState, useEffect } from "react"
import "./explore.css"
import { Navbar, ChatCard, SEO } from "../../components"
const Explore = () => {
  const [offset, setOffset] = useState(0)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_DB_HOST}/api/chats/${offset}`)
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
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setError(true)
        setLoading(false)
        //setChatIds({ error: "failed" })
      })
  }, [offset])
  return (
    <>
      <Navbar />
      <SEO title="Explore | GPTSave" />

      <div className="explore section__margin section__padding">
        <h1>Latest chats</h1>
        <div className="chat-list">
          <div className="chat-list-group">
            {data.map((item, index) => {
              // return <div key={index}>{item.title}</div>
              return (
                <ChatCard
                  key={index}
                  title={item.title || "No title :c"}
                  tags={item.tags || []}
                  handleClick={() => {
                    //   console.log(item)
                    window.location = `/chat/${item.id}`
                  }}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Explore
