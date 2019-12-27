import React from "react";

function App() {
  return (
    <div className="App">
      <p>Hi Honey</p>
      <StravaSummary
        url={
          "https://www.strava.com/athletes/15694523/activity-summary/28a495984c9dd510b11b3fcfa08f1eedda333e62/"
        }
      />
    </div>
  );
}

function StravaSummary(props) {
  const { url } = props;
  return (
    <iframe
      title="Strava"
      height="160"
      width="300"
      frameBorder="0"
      allowtransparency="true"
      scrolling="no"
      sandbox=""
      src={url}
    />
  );
}

export default App;
