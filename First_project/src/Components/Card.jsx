export const Card=(props)=>{
    console.log(props)
    const {product}=props
    const {title,rating,thumbnail,category,price}=product
    return (
      <>
      <div className="card">
        <img src={thumbnail} alt="burger king"  style={{height:"200px",width:"250px"}}/>
        <h3 style={{fontSize:"25px"}}>{title}</h3>
        <h5>{price}</h5>
        <h5 style={{fontSize:"22px"}}>{category}</h5>
        <p>Rating {rating} stars</p>
      </div>
      </>
    )
  }