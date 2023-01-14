import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Navbar, Loading, ChatCard } from "../../components"
import { Notfound } from "../../pages"
import "./profile.css"
const Profile = () => {
  const { userId } = useParams()
  const [chatIds, setChatIds] = useState([])
  const [chatRecords, setChatRecords] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACK_HOST}/api/owner/${userId}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        } else {
          throw new Error(response.status)
        }
      })
      .then((data) => {
        console.log(data)
        setChatIds(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setError(true)
        setLoading(false)
        setChatIds({ error: "failed" })
      })
  }, [])

  useEffect(() => {
    chatIds.map((chatId, index) => {
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
          // setData(data)
          setChatRecords((chatRecords) => [...chatRecords, data])
        })
        .catch((error) => {
          console.log(error)
          // setData({ error: "failed" })
        })
    })
  }, [chatIds])

  return (
    <>
      <Navbar />
      {loading ? (
        <Loading />
      ) : error ? (
        <Notfound />
      ) : (
        <main className="profile section__padding section__margin">
          <h1>Prfile user name</h1>
          <div>Details (id...)</div>
          {/* {chatIds.map((item, index) => {
            return <div key={index}>{item}</div>
          })} */}
          <div className="chat-list">
            <div className="chat-list-group">
              {chatRecords.map((item, index) => {
                // return <div key={index}>{item.title}</div>
                return (
                  <ChatCard
                    key={index}
                    title={item.title}
                    tags={item.tags}
                    handleClick={() => {
                      //   console.log(item)
                      window.location = `/chat/${item.id}`
                    }}
                  />
                )
              })}
            </div>
          </div>
        </main>
      )}
    </>
  )
}

export default Profile
