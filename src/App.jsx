import "./App.less";

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <div className="title">BUDGE-IT!!</div>
        <Navbar />
      </header>

      <section className="board">
        <div className="projected">
          <form>
            <div>Add category with expected budget</div>

            <div className="user-input category">
              <label>Category Name: </label>
              <input type="text" required />
            </div>

            <div className="user-input payment">
              <label>Amount: </label>
              <input type="text" value="0.00" required />
            </div>

            <button>Add Category</button>
          </form>
        </div>

        <div className="balance">
          <form>
            <div>Starting balance</div>

            <div className="user-input payment">
              <label>Amount: </label>
              <input type="text" value="0.00" required />
            </div>

            <button>Add Balance</button>
          </form>
        </div>

        <div className="payments">
          <form>
            <div>Add payment with type and date</div>

            <div className="user-input category">
              <label>Category Name: </label>
              <input type="text" required />
            </div>

            <div className="user-input date">
              <label>Date: </label>
              <input type="text" required />
            </div>

            <div className="user-input payment">
              <label>Amount: </label>
              <input type="text" value="0.00" required />
            </div>

            <button>Add Payment</button>
          </form>
        </div>

        <div className="income">
          <form>
            <div>Add income with type and date</div>

            <div className="user-input category">
              <label>Category Name: </label>
              <input type="text" required />
            </div>

            <div className="user-input date">
              <label>Date: </label>
              <input type="text" required />
            </div>

            <div className="user-input payment">
              <label>Amount: </label>
              <input type="text" value="0.00" required />
            </div>

            <button>Add Income</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
