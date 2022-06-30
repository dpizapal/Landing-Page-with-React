import React from "react";

const Card = (props) =>{
	return (
    <div className="px-3 pt-5 mt-5 ">        
    <div className="card " style={{width: "18rem"}}>
        <img src="http://via.placeholder.com/500x325/" className="card-img-top" alt="..."/>
            <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci quis ipsa eius autem optio?</p>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">Find out more</a>
            </div>
        </div>
    </div>
</div>
        )
}

export default Card;