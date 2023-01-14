import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Navbar, Loading, ChatCard, SEO } from "../../components"
import { Notfound } from "../../pages"
import { useJwt } from "react-jwt"
import Cookies from "js-cookie"

import "./profile.css"
const Profile = () => {
  var { userId } = useParams()
  const [chatIds, setChatIds] = useState([])
  const [chatRecords, setChatRecords] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [name, setName] = useState("Loading ...")

  const { decodedToken, isExpired } = useJwt(Cookies.get("token"))
  useEffect(() => {
    fetch(`${process.env.REACT_APP_DB_HOST}/api/owner/${userId}`)
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

    fetch(`${process.env.REACT_APP_AUTH_HOST}/auth/user/${userId}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        } else {
          throw new Error(response.status)
        }
      })
      .then((data) => {
        console.log(data)
        setName(data?.item?.name)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setError(true)
        setLoading(false)
        setChatIds({ error: "failed" })
      })
  }, [userId])
  useEffect(() => {
    if (!userId) {
      if (decodedToken && !isExpired) {
        setName(decodedToken.name)
        console.log(decodedToken)
        window.location.href = `/profile/${decodedToken.userId}`
      } else {
        window.location.href = `/login`
      }
      //  userId = "id-aziz"
    }
  }, [userId, decodedToken, isExpired])

  useEffect(() => {
    chatIds.map((chatId, index) => {
      fetch(`${process.env.REACT_APP_DB_HOST}/api/chat/${chatId}`)
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
      <SEO title={name ?? "Loading ..."} />
      <Navbar />
      {loading ? (
        <Loading />
      ) : error ? (
        <Notfound />
      ) : (
        <main className="profile section__padding section__margin">
          <h1>{name}</h1>
          {chatRecords.length === 0 ? (
            <div className="chat-no-items">No items to show</div>
          ) : (
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
          )}
        </main>
      )}
    </>
  )
}

export default Profile
