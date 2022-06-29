import React from "react";

const Card = () =>{
	return (
        <div class="card " style={{width: "325px"}}>
        <div className="card text-center">
        <img src="http://via.placeholder.com/500x325/" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-primary">Find out more</a>
        </div>
      </div>
      </div>
        )
}

export default Card;