import '../secondMainStyle.css'
import '../animation.css'


import img1 from '../assets/anticvariat/small/1.jpg'
import img2 from '../assets/anticvariat/small/2.jpg'
import img3 from '../assets/anticvariat/small/3.jpg'
import img4 from '../assets/anticvariat/small/4.jpg'
import img5 from '../assets/anticvariat/small/5.jpg'
import img6 from '../assets/anticvariat/small/6.jpg'
import img7 from '../assets/anticvariat/small/7.jpg'
import img8 from '../assets/anticvariat/small/8.jpg'
import img9 from '../assets/anticvariat/small/9.jpg'


import bigImg1 from '../assets/anticvariat/big/1.jpg'
import bigImg2 from '../assets/anticvariat/big/2.jpg'
import bigImg3 from '../assets/anticvariat/big/3.jpg'
import bigImg4 from '../assets/anticvariat/big/4.jpg'
import bigImg5 from '../assets/anticvariat/big/5.jpg'
import bigImg6 from '../assets/anticvariat/big/6.jpg'
import bigImg7 from '../assets/anticvariat/big/7.jpg'
import bigImg8 from '../assets/anticvariat/big/8.jpg'
import bigImg9 from '../assets/anticvariat/big/9.jpg'


import {useState} from "react";

function Anticvariat(){
    const [onNextPage, setOnNextPage] = useState(false)
    const [imageName, setImageName] = useState(null)
    const previewImage = (imageName) =>{
        setOnNextPage(true)
        setImageName(imageName)
    }
    const images = [
        [img1, bigImg1],
        [img2, bigImg2],
        [img3, bigImg3],
        [img4, bigImg4],
        [img5, bigImg5],
        [img6, bigImg6],
        [img7, bigImg7],
        [img8, bigImg8],
        [img9, bigImg9],
    ]
    const items = images.map((item) =>{
        return (
            <button className={'button-with-img animation2'} onClick={() => {previewImage(item[1])}}><img className={'gallery-image'} src={item[0]}/></button>
        )
    })


    return(
        !onNextPage ?
            <div className={'gallery'}>
                {items}
            </div>
            :
            <div className={'full-size-photo'}>
                <button className={'button'} onClick={() => {setOnNextPage(false)}}>&#129044;</button>
                <img className={'opacity'} src={imageName}/>
            </div>
    )
}
export default Anticvariat;