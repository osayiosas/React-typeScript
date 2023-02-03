import React from 'react';
import './App.css';
import { Person, Country } from "./components/Person";


function App() {
  return (
    <div className="App">
      <Person
         name="Osayi"
        email="idiaigheosaigbovoosas@gmail.com"
        age={23}
        isMarried={false}
        friends={["Jona", "Osahon", "Jerry", "Bright"]}
        country={Country.Nigeria}

      />
    </div>
  );
}

export default App;
