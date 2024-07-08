import '../styles/BlogComponent.scss'


const BlogComponent = ({imgsrc, Name}) => {
  return (
    <div className="card">
      <div className="img">
        <img src={imgsrc} alt="" />
      </div>
      <h2>{Name}</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, saepe!</p>
      <a href="" >Read More &#8594;</a>
    </div>
  )
}

export default BlogComponent