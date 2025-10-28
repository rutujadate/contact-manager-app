
import { useEffect, useState } from "react";
import "./ContactList.css";
import axios from "axios";
export default function ContactList() {

     const [contactList, setContactList] = useState([
    { name: "Rutuja", number: [1234567890, 2345678901, 3456789012] },
    { name: "Shravani", number: [1234567890, 2345678901, 3456789012] },
    { name: "Apeksha", number: [1234567890, 2345678901, 3456789012] } ,
    { name: "Shreya", number: [1234567890, 2345678901, 3456789012] },
    { name: "Rutika", number: [1234567890, 2345678901, 3456789012] },
    { name: "Apurva", number: [1234567890, 2345678901, 3456789012] }
  ]);
  useEffect(()=>{
    axios.get("http://localhost:4200/ContactList")
    .then((Response)=>{
      console.log(Response.data);

    })

  },[])

  return (
    <div className="contactCards">
      {contactList.map((singleContact) => (
        // console.log(singleContact);
        <div className="innerContactCard" >
          <div> {"Name"+" : " + singleContact.name}</div>
          {singleContact.number.map((singleNumber,index) => (
            <div>
            <div> {"Number"+(index+1)+" : "+singleNumber}</div>
            </div>
          ))}
        </div>
      ))}
    </div>

    );
}


