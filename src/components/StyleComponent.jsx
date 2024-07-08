import '../styles/StyleComponent.scss'


const StyleComponent = ({imgsrc, Name}) => {
  return (
    <div className="card">
        <div className="img">
            <img src={imgsrc} alt="" />
        </div>
        <h2>{Name}</h2>
    </div>
  )
}

export default StyleComponent