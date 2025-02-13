import React from "react";

function Welcome() {
  return (
    <div className="welcome-container">
      <h1>Welcome to the Cat Profile App!</h1>
      <p>
        Explore a variety of cats, learn more about each one, add your own furry feline friends.
      </p>
      <div className="overview">
        <h2>What you can do:</h2>
        <ul>
          <li>Browse a collection of amazing cats!</li>
          <li>Show some love to your favorites!</li>
          <li>Add new cats to the collection!</li>
        </ul>
      </div>
    </div>
  )
}

export default Welcome;