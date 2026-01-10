import TodoCard from "../components/todocard.js";
import Add from "../components/add.js"

const Home = () => {
  return (
    <>

      <section className="section">
        <div className="container">

          <h1 className="title has-text-centered">
            My Todo List
          </h1>

          {/* Add Todo */}
          <Add />
          
          {/* Todo List */}
          <div className="columns is-multiline">
            <TodoCard/>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;
