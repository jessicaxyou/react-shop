
// take in props of props to display on product front
const ProductFront = ({image, id, flipImage}) => {


    return(
        <div>
            <img onClick={flipImage} className="item-image" src={image} alt={id} />
        </div>

    )
}

export default ProductFront;