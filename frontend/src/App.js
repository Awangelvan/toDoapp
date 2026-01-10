import Navbar from "./components/navbar";
import UserData from "./components/userData";
import Add from "./page/add";

function App() {
  return (
    <div className="App is-flex-column is-centered justity-content-center">
      <header>
        <Navbar />
      </header>
      <main className="hero is-half">
        <UserData/>
      </main>
      <footer className="footer ">
        <Add />
      </footer>
    </div>
  );
}

export default App;
