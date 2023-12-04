import React from 'react'

function Posts(props) {
  return (
    <>
      <div className="card" style={{width: "50%"}}>
  <img src={props.img} className="post-img" style={{width: "100%"}} alt="..." />
  <div className="card-body">
  <i className="fa-solid fa-star fa-2xs" style={{color: '#e90101'}}></i>
  <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
    <p className="card-text">{props.title}</p>
    <p><span className="bold"><b>From ${props.price}</b></span> / person</p>
  </div>
</div>
    </>
  )
}

export default Posts
