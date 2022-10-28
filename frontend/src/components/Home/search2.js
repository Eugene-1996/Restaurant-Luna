import React from 'react'
import { Input } from './home.styles';
import { Form } from './home.styles';
import { Button } from './home.styles';
import { FontButton } from './home.styles';
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";




const SearchBar = (props) => {

        let localToken = JSON.parse(localStorage.getItem("luna-auth"))
        const [input, setInput] = useState();
        const form = useRef(null)

        const post = "POST"
        const header = new Headers({
          "Authorization": `Bearer ${localToken}`,
          "content-type": "application/json",
        })
      
        const body = JSON.stringify({
            "search": `${input}`,
          })

        const postconfig = {
          method: post,
          headers: header,
          body: body,
        }

// This handleChange does not let the browser block 1/2, block because of value={this.state.headersearch} 
// this.setState will set the state to the new value introduced in input.


// You always need this preventDefault, to avoid the browser to make show url and make get request alone.
// Here you will put your call to your DATABASE

const handleSubmit = (event) => {
    event.preventDefault();
    form.current.reset();
    fetch("https://team3luna.propulsion-learn.ch/api/search/", postconfig)
      .then(response => response.json())
      .then((data) => props.poop(data))
      .catch(error => console.log(error))
  }
    
    return(
    <Form onSubmit={handleSubmit} id="headersearch" ref={form}>
        <label htmlFor="headersearch"></label>
        <Input 
            // value will take the current state and block browser, onChange will execute function above 
            // and preventDefault will unblock the browser part1/2.
            onChange={(e) => setInput(e.target.value)}
            type="text"
            form="headersearch"
            placeholder="Search Restaurant..."
            name="headersearch" 
            
        />
        <Button form="headersearch" type="submit">
            <FontButton>
                Search
            </FontButton>
        </Button>
    </Form>
);
    
}

export default SearchBar;
