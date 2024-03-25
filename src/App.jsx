import { useState } from "react";
import "./App.css";

const ValidateZipcode = () => {
  const [zipCode, setZipCode] = useState("");

  const clickHandler = () => {
    zipCode.length < 5
      ? alert("Invalid zipcode. Please enter 5 digits.")
      : alert("Valid zipcode.");
  };

  return (
    <div>
      <label htmlFor="zipcode">Enter your zipcode: </label>
      <input
        type="number"
        id="zipcode"
        onChange={(event) => setZipCode(event.target.value)}
      />
      <button onClick={clickHandler}>Validate Zipcode</button>
    </div>
  );
};

const CapitalzeName = () => {
  const [fullName, setFullName] = useState("");

  const clickHandler = () => {
    alert(
      fullName
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
        .join(" "),
    );
  };

  return (
    <div>
      <label htmlFor="fullname">Enter your full name: </label>
      <input
        id="fullname"
        onChange={(event) => setFullName(event.target.value)}
      />
      <button onClick={clickHandler}>Capitalize Name</button>
    </div>
  );
};

const SearchTerm = () => {
  const [searchTerm, setSearchTerm] = useState(" ");

  const showSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const clickHandler = () => {
    setSearchTerm("");
  };

  return (
    <div>
      <label htmlFor="searchinput">Enter search term: </label>
      <input id="searchinput" value={searchTerm} onChange={showSearchTerm} />
      <button onClick={clickHandler}>Reset Search Term</button>
      {searchTerm && <p>{searchTerm}</p>}
    </div>
  );
};

const AddressBar = () => {
  const [addressDetails, setAddressDetails] = useState("");
  const clickHandler = () => {
    setAddressDetails("");
  };
  return (
    <div>
      <label htmlFor="addressbar">Enter your address:</label>
      <input
        id="addressbar"
        value={addressDetails}
        onChange={(event) => setAddressDetails(event.target.value)}
      />
      <button onClick={clickHandler}>Reset Address</button>
      {addressDetails && <p>{addressDetails}</p>}
    </div>
  );
};

const ClearMessage = () => {
  const [message, setMessage] = useState("");

  const clickHandler = () => {
    setMessage("");
  };

  return (
    <div>
      <label htmlFor="message">Enter a message : </label>
      <input
        id="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button onClick={clickHandler}>Clear Message</button>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <ValidateZipcode />
      <br />
      <br />
      <CapitalzeName />
      <br />
      <br />
      <SearchTerm />
      <br />
      <br />
      <AddressBar />
      <br />
      <br />
      <ClearMessage />
    </main>
  );
}
