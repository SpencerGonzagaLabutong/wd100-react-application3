const GridCard = (props) => {
    return ( 
        <>
        <div className='col-md-4'>
            <div className='card'>
                <div className="product">
                <img src={props.img} className='card-img-top img-fluid' alt="" ></img>
                </div>
                
                <div className='card-body bg-dark'> 
                    <h5 className='card-title text-white'>{props.title}</h5>
                    <h6 className="card-subtitle text-white">{props.price}</h6>
                    <p className='card-text text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque, vel iste similique ullam, quisquam blanditiis accusamus in dolorum quam ipsa assumenda.</p>
                    <a href="#" className='btn btn-secondary'>learn more</a>
                </div>

            </div>
        </div>
        </>
     );
}
 
export default GridCard;

