function LoadingPage (){

    return (
      <div className="columns">

      <div className="column is-4">
        <div className="card">
          <div className="card-content skeleton-block">
            |||||||||||||||||||||||||||
            |||||||||||||||||||||||||||
            |||||||||||||||||||||||||||
          </div>
          <footer className="level">
                    <a className="level-item button is-skeleton">done</a>
                    <a className="level-item button is-skeleton">delete</a>
                </footer>
        </div>
      </div>
      <div className="column is-4">
        <div className="card">
          <div className="card-content skeleton-block">
            |||||||||||||||||||||||||||
            |||||||||||||||||||||||||||
            |||||||||||||||||||||||||||
          </div>
          <footer className="level">
                    <a className="level-item button is-skeleton">done</a>
                    <a className="level-item button is-skeleton">delete</a>
                </footer>
        </div>
      </div>
      <div className="column is-4">
                <div className="card mb-4">
                <div className="card-content skeleton-block">
            |||||||||||||||||||||||||||
            |||||||||||||||||||||||||||
            |||||||||||||||||||||||||||
                </div>
                <footer className="level">
                    <a className="level-item card-footer-item is-skeleton">Done</a>
                    <a className="level-item card-footer-item is-skeleton">Delete</a>
                </footer>
                </div>
                </div>
      
      </div>
    )
  }


export default LoadingPage;
