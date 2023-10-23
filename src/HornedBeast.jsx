export default function HornedBeast(props) {

  return (
    <>
    <h2>{props.title}</h2>
    <img src={props.img_url} title={props.img_title} alt={props.img_alt}/>
    <p>{props.description}</p>
    </>
  )
}