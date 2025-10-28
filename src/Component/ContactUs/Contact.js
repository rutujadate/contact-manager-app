import { useState } from "react";
import "./Contact.css";
import ContactList from "../ContactList/ContactList";
import axios from "axios";
export default function Contact() {
    const [name, setName] = useState('');
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [number3, setNumber3] = useState('');

    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleNumber1Change(event) {
        setNumber1(event.target.value);
    }
    function handleNumber2Change(event) {
        setNumber2(event.target.value);
    }
    function handleNumber3Change(event) {
        setNumber3(event.target.value);
    }
    function handleToSave() {
        let contactObj = {name: name,contactList: [number1, number2, number3]};
        console.log(contactObj);
        axios.post("http://localhost:4200/ContactList",contactObj)
        .then((Response)=>{
            console.log(Response.data);
        })

    }
    return (
        <div className="outerBody">
            <div className="innerBox">
                <div className="innerBoxHeader">Add New Contact</div>
                <div>
                    <div className="label"><label>Name</label></div>
                    <div>
                        <input type="text" value={name} onChange={handleNameChange} />
                    </div>
                </div>
                <div>
                    <div className="label"><label>Number1</label></div>
                    <div>
                        <input type="text" value={number1} onChange={handleNumber1Change} />
                    </div>
                </div>
                <div>
                    <div className="label"><label>Number2</label></div>
                    <div>
                        <input type="text" value={number2} onChange={handleNumber2Change} />
                    </div>
                </div>
                <div>
                    <div className="label"><label>Number3</label></div>
                    <div>
                        <input type="text" value={number3} onChange={handleNumber3Change} />
                    </div>
                </div>
                <div className="button">
                    <button onClick={handleToSave}>Save</button>
                    <button>Cancel</button>
                </div>
            </div>

        </div>
    );
}