import React from "react";
import Star from "./Star";



export default function App(){
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (601) 331-8634",
    email: "some.randomEmail@gmail.com",
    isFavorite: false
  })


  function toggleFavorite(){
    setContact(function (prevContact){
      return ({
        ...prevContact,
        isFavorite: !prevContact.isFavorite
      })
    })
  }
//in <Star we gave {toggleFavorite} a variable called handleClick and passed it 
//to the child component Star.js where the onClick can be used in the <img> tag
//because the onClick method cannot be used in tags we create such as <Star />
//here in the parent App.js. 
  return(
    <main>
      <article>
        <img src="" alt="" />
        <div>
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
          <h2 className="card-name">{contact.firstName} {contact.lastName}</h2>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>
      </article>
    </main>
  )












}