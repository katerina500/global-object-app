import React, {useState} from "react";
import { Button } from '@mui/material';
import "./Open.css";


const Open = () => {

    const[name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
      };
    
      const handleClick = () => {
        setName("");
      };



    return (
      <div className="open-form">
        <input className="input-open"
            value={name} 
            placeholder="  Поле ввода для URL" 
            onChange={handleChange}>
            </input>
            <Button className="btn-open" href="http://www.example.com"
            onClick={handleClick}>
            Открыть страницу
            </Button>
      </div>
    )
}

export default Open;