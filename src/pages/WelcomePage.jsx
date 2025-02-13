import React from "react";

function Welcome() {
  return (
    <div className="welcome-container">
      <h1>Welcome to the Pet Collection App!</h1>
      <p>
        Explore a variety of pets, learn more about each one, add your own furry (or feathery) friends.
      </p>

      <div className="overview">
        <h2>What you can do:</h2>
        <ul>
          <li>Browse a collection of amazing pets!</li>
          <li>Show some love to each pet!</li>
          <li>Add new pets to the collection!</li>
        </ul>
      </div>
    </div>
  )
}

export default Welcome;