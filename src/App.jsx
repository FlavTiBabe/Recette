import React from 'react';
import Recipe from './components/Recipe';
import recettes from './recettes';

function App() {
  console.log(recettes)
  return (
    <div>
      {recettes.length > 0 && recettes.map((item)=> <Recipe {...item}></Recipe>
      )}
    </div>
  );
}

export default App;
