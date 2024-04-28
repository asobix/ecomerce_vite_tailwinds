/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useContext } from "react"
import { ShoppingCartContext } from "@/Context"
import { PlusIcon } from "@heroicons/react/24/solid"
const Card = ({price, title, images, description, category: {name}}) => {
  const {setCount, count, openProductDetail,setProductToShow} = useContext(ShoppingCartContext)

  const showProducts = (productDetail = {price, title, images, description, category: {name}}) => {
    openProductDetail()
    setProductToShow(productDetail)
  }
  return (
    <div 
    className="bg-white cursor-pointer w-56 h-60 rounded-lg"
    onClick={() => showProducts({price, title, images, description, category: {name}})}
    >
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{name}</span>
            <img className="w-full h-full object-cover rounded-lg" src={images[0]} alt={title} />
            <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
            onClick={(event)=> {
              event.stopPropagation();
              setCount(count + 1)
            }}>
              <PlusIcon className='size-6 text-black'/>
              </div>
            <p className="flex justify-between">
                <span className="text-sm font-light">{title}</span>
                <span className="text-lg font-medium">${price}</span>
            </p>
        </figure>
    </div>
  )
}

export default Card