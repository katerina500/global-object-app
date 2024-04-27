import React, {useState, useEffect} from "react";
import './Home.css';

const Home = () => {

    const[time, setTime] = useState(new Date());
    const[x, setX] = useState(1);
    const[y, setY] = useState(1);
    const[userAgent, setUserAgent] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
  }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const timeString = `${hours}:${minutes}:${seconds}`;

    const handlerSetMouseMove = (event) => {
        setX();
        setY();
    }

    useEffect(() => {
        document.body.addEventListener('mousemove', (event) => {
            setX(window.event.clientX);
        });
    }, [])

    useEffect(() => {
      document.body.addEventListener('mousemove', (event) => {
          setY(window.event.clientY);
      });
  }, [])

    useEffect(() => {
        const userAgent = window.navigator.userAgent;
        setUserAgent(userAgent);
    }, [])

  return (
    <div className="home" onMouseMove={(event) => handlerSetMouseMove(event)}>
        <h1>Приветствую!</h1>
        <div className="time">Время - {timeString} </div>
        <div className="user">User Agent - {userAgent}</div>
        <div className="mouse">
            Координаты мыши (Х) - {x} (Y) - {y}
        </div>
    </div>
  )

}

export default Home;