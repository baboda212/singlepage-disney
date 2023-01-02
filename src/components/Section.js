
export default function Section(props) {
    console.log(props)
    const bgStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/${props.bg})`
    }
  return (
    <section 
        style= {bgStyle} 
        id={props.id}>
        <div className="title-group">
            <h1>{props.title}</h1>
            <img 
            src={`${process.env.PUBLIC_URL}/images/${props.logo}`} 
            alt="타이틀이미지"
            />
        </div>
        <div className="sns">
        <p>
            <a href={props.iurl}>{props.isns}</a>
            <a href={props.furl}>{props.fsns}</a>
            <a href={props.yurl}>{props.ysns}</a>
        </p>
        </div>
    </section>
  )
}
