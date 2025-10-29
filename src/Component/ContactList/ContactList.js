
import { useEffect, useState } from "react";
import "./ContactList.css";
import axios from "axios";
export default function ContactList() {

  const [searchtext, setSearchText] = useState('');
  const [filteredList, setFilteredList] = useState();

  const [contactList, setContactList] = useState([
    { name: "Rutuja", number: [1234567890, 2345678901, 3456789012] },
    { name: "Shravani", number: [1234567890, 2345678901, 3456789012] },
    { name: "Apeksha", number: [1234567890, 2345678901, 3456789012] },
    { name: "Shreya", number: [1234567890, 2345678901, 3456789012] },
    { name: "Rutika", number: [1234567890, 2345678901, 3456789012] },
    { name: "Apurva", number: [1234567890, 2345678901, 3456789012] }
  ]);

  useEffect(() => {
    axios.get("http://localhost:4200/ContactList")
      .then((response) => {
        // console.log(response.data);
        setContactList(response.data);
        setFilteredList(response.data);

      })
      .catch((error) => {
        console.error("Error fetching contact list:", error);
      });
  }, []);


  function handleToSearchText(event) {
    setSearchText(event.target.value)
  }
  

  function handleToSearch() {
    const filteredList = contactList.filter((singleContact) => {
      if (singleContact.name === searchtext) {
        console.log('singleContact:', singleContact);
        return singleContact;
      }
      else if (singleContact.ContactList.includes(searchtext)) {
        console.log('singleContact:', singleContact);
        return singleContact;
      }

    });
    console.log('filteredList:', filteredList);
    setFilteredList(filteredList);
    setContactList(contactList);
  }



  return (
    <div>
      <div>
        <button onClick={handleToSearch} className="search">Search</button>
        <input type="text" value={searchtext} onChange={handleToSearchText} placeholder="Search" className="searchBar" />

      </div>
      <div className="contactCards">
        {filteredList.map((singleContact) => (
          // console.log(singleContact);
          <div className="innerContactCard" >
            <div> {"Name" + " : " + singleContact.name}</div>
            {singleContact.number.map((singleNumber, index) => (
              <div>
                <div>{"Number" + (index + 1) + " : " + singleNumber}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>

  );
}


