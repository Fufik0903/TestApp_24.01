import img from '../../assets/architecture/single-photos/2.jpg'
import '../../secondMainStyle.css'

function Mvd(){
    return(
        <div className={'full-size-photo'}>
            <a className={'back'} href={'/Architecture'}>&#129044;</a>
            <img src={img}/>
        </div>
    )
}
export default Mvd