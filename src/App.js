import "./styles.css";



 function App() {
  return (
    <div >
      
      <section className="playlist">
      <h1 className="App">PLAYLIST SONG SPORTIFY</h1>
        <div className="login">
          <form>
          <img className="img" src="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b" alt="" />
            <br/>
            <div>
                <label>Title:</label>
                <select name="title" id="title">
                <option >Select</option>
                <option value="song1">Somebody To Love</option>
                <option value="song2">Doing All Right</option>
                <option value="song3">Killer Queen</option>
                <option value="song4">I Want To Break Free</option>
                </select>

            </div>
            <div>
                <label>Artist:</label>
                <select name="artist" id="artist">
                <option >Select</option>
                <option value="queen">Queen</option>
                </select>
            </div>
            <br />
            <div>
                <button id="get-btn" class="tombol">Select</button>
            </div>
           
          </form>
        </div>



        <div className="queue">
          <div className="queue-cover">
            <img src="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b" alt="" />
            <i className="fas fa-pause"></i>
          </div>
          <p className="name">Bohemian Rhapsody (The Original Soundtrack)/
            Queen</p>
        </div>
        <br />
        <div className="queue">
          <div className="queue-cover">
            <img src="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b" alt="" />
            <i className="fas fa-pause"></i>
          </div>
          <p className="name">
            Bohemian Rhapsody (The Original Soundtrack)/
            Queen
          </p>
          <p >Queen</p>
        </div>
        <br />
        <div className="queue">
          <div className="queue-cover">
            <img src="https://i.scdn.co/image/ab67616d00004851e8b066f70c206551210d902b" alt="" />
            <i className="fas fa-pause"></i>
          </div>
          <p className="name">Bohemian Rhapsody (The Original Soundtrack)/
            Queen</p>
        </div>
         </section>
    </div>
  );
}
export default App;