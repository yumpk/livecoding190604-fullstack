import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const email_form = e.target[0].value;
    const content_form = e.target[1].value;

    axios
      .post("http://localhost:5050/answer", {
        email: email_form,
        content: content_form
      })
      .then(({ data }) => {
        console.log(`Yay! ${data}`);
      })
      .catch(err => {
        console.log(`Nay! ${err}`);
      });
  }

  render() {
    return (
      <div className="App">
        <main>
          <h1>I iz Fullstack Dev ! \o/</h1>
          <form
            onSubmit={e => {
              this.handleSubmit(e);
            }}
          >
            <input type="text" id="email_field" placeholder="email" />
            <textarea id="content_field" placeholder="content" />
            <input type="submit" value="Answer" />
          </form>
        </main>
      </div>
    );
  }
}

export default App;
