
import { useEffect, useState } from "react";
import "./ContactList.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function ContactList() {
  const navigate = useNavigate();
  const navigateToBack = () => {
    navigate("/");
  }
  const [searchtext, setSearchText] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  const [contactList, setContactList] = useState([]);

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
      else if (singleContact.contactList.includes(searchtext)) {
        console.log('singleContact:', singleContact);
        return singleContact;
      }

    });
    console.log('filteredList:', filteredList);
    setFilteredList(filteredList);

  }

  return (
    <div>
      <div>
        <button onClick={navigateToBack} className="backButton">Add New Contact</button>
      </div>
      <div>

        <input type="text" value={searchtext} onChange={handleToSearchText} placeholder="Search" className="searchBar" />
        <button onClick={handleToSearch} className="search">Search</button>
      </div>
      <div className="contactCards">
        {filteredList.map((singleContact) => (
          // console.log(singleContact);
          <div className="innerContactCard" >
            <div> {"Name" + " : " + singleContact.name}</div>
            {singleContact.contactList.map((singleNumber, index) => (
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


