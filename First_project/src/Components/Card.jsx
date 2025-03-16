export const Card=(props)=>{
    // console.log(props)
    const {restaurant}=props
    const {image,resturant_name,cuisine,rating}=restaurant
    return (
      <>
      <div className="card">
        <img src={image} alt="burger king"  style={{height:"200px",width:"250px"}}/>
        <h3 style={{fontSize:"25px"}}>{resturant_name}</h3>
        <h5 style={{fontSize:"22px"}}>{cuisine}</h5>
        <p>Rating {rating} stars</p>
      </div>
      </>
    )
  }