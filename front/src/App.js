import { useState, useEffect } from 'react';
import { io } from 'socket.io-client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row, Container } from 'react-bootstrap'
import Messages from './components/Messages'
import AddNewMsg from './components/AddNewMsg'
import './App.css';

const socket = io.connect('http://localhost:5000') // I need to put it in context/global veriable


function App() {

  const [tweets, setTweets] = useState([
    // { name: "lala", data: "papa" },
    // { name: "nana", data: "rara" }
  ])

  useEffect(() => {
    socket.on('message', ([data]) => {
      console.log(data);
      setTweets(prev => [...prev, data])
    })
  }, [])



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
            <Messages msgs={tweets} socket={socket} />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="borders">
      <Container id="add-msg">
        <Row className="p-3">
          <Col>
            <AddNewMsg updateList={addTweet} socket={socket} />
          </Col>
        </Row>
      </Container>
    </section>

  </div>;
}

export default App;
