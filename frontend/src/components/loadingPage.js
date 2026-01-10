function LoadingPage (){

    return (
      <div>
        <div className="container is-flex-column is-half is-centered">
            <div className="column">
              <h1>Please Wait For a Moment</h1>
            </div>
            <div className="column">
                <button className="button is-link is-rounded is-loading"></button>
            </div>
            <div className="column">
                <p>sorry for the inconvenience</p>  
            </div>            
        </div>        
      </div>
    )
  }


export default LoadingPage;
