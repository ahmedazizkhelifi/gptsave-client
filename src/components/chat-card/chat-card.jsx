import React from "react"
import "./chat-card.css"
import { Tag } from "../"
// import { ImageWithLoading, LikeDislikeButton } from "../"
const ChatCard = ({
  handleClick,
  id,
  title,
  tags,
  likes,
  dislikes,
  imgSrc
}) => {
  return (
    <div className="card">
      {/* <div className="card_image">
        <ImageWithLoading src={imgSrc} alt={title} />
      </div> */}
      <div className="card-content">
        <div>
          {tags.map((tag, index) => (
            // <Tag
            //   style={{ marginLeft: 10 }}
            //   key={index}
            //   tag={tag}
            //   tagType="three"
            // />
            <span key={index} style={{ marginRight: 10 }}>
              {tag}
            </span>
          ))}
          <h3>{title}</h3>
          {/* <LikeDislikeButton likes={likes} dislikes={dislikes} /> */}
        </div>
        <p onClick={() => handleClick(id)}>View Chat</p>
      </div>
    </div>
  )
}
export default ChatCard
