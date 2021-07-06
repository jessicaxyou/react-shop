
// if image is clicked, flip image to imgURL2

const ProductBack = ({imageTwo, id}) => {
    return(
        <div>
            <img className="item-image" src={imageTwo} alt={id} />
        </div>
    )
}

export default ProductBack;