function Navbar (){
return(
<>
<div className="columns is-mobile mt-4 is-centered">
    <div className="column is-half">
        <table className="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>notsip</th>
                    <th className="home is-primary">home</th>
                    <th>schedule</th>
                    <th>completed</th>
                    <th><a href="/add">tambah</a></th>
                </tr>
            </thead>
        </table>
    </div>
</div>
</>
)}

export default Navbar;