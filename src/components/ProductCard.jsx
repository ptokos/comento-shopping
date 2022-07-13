const ProductCard = ({name, description, thumbnail})=> {
    return(   <div>
        <img
        width="200"
        scr={thumbnail}
        alt={name}
        />
        <div> {name} </div>
        <div>{description}</div>
        </div>)
};

export default ProductCard;