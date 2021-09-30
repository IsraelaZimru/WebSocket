import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row, Container } from 'react-bootstrap'
import Messages from './components/Messages'
import AddNewMsg from './components/AddNewMsg'
import './App.css';

function App() {
  const [tweets, setTweets] = useState([
    { name: "lala", data: "papa" },
    { name: "nana", data: "rara" }
  ])

  const addTweet = (msg) => {
    setTweets(prev => ([...prev, msg]))
  }

  return <div className="p-3">
    <h1 className="display-1 text-center mb-4"> Welcome to PinkChat</h1>
    <section className="borders">
      <Container id="forum">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1> Group Chat</h1>
          </Col>
        </Row>

        <Row className="p-3">
          <Col md={5}>
            <Messages msgs={tweets} />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="borders">
      <Container id="add-msg">
        <Row className="p-3">
          <Col>
            <AddNewMsg updateList={addTweet} />
          </Col>
        </Row>
      </Container>
    </section>

  </div>;
}

export default App;
