import React from 'react';
import logo from './logo.svg';
import DnD from './components/DragAndDrop/DnD';
import './App.css';
import NavMenu from './components/NavMenu/NavMenu'



let dragZones = [
  {category: "Fruits", items: 0},
  {category: "Legumes", items: 0},
  {category: "Personnage de manga", items: 0}
];

let element = [
  {title: "Peach", category: "Fruits", link: true},
  {title: "Banana", category: "Fruits", link: true},
  {title: "Leek", category: "Legumes", link: true},
  {title: "Naruto", category: "None", link: true},
  {title: "Gon", category: "Personnage de manga", link: true}
  ];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavMenu link="https://www.google.fr" name="header menu"/>
        <p>
          <DnD dragZones={dragZones} 
               element={element}/>
        </p>
      </header>
   </div>
  );
}

export default App;
