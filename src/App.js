import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import Home from './components/Home';
import DescriptionCard from './components/DescriptionCard';

function App() {
  const [tab, setTab] = useState( [
    { title:"Orgueil et préjugés", description:"Mrs. Bennet veut marier ses filles afin de leur assurer un avenir serein. L'arrivée de nouveaux voisins, Mr. Bingley et son ami Mr. Darcy, plonge Jane et Elisabeth dans des affaires de coeur tumultueuses.", posterURL:"https://fr.web.img6.acsta.net/medias/nmedia/18/35/99/80/18461215.jpg",video:"https://www.youtube.com/embed/LzjSgLUwPag", rating:"2",id: Math.random() },
    { title:"Harry Potter a l'ecole", description:"Un jour de juillet, peu avant son onzième anniversaire, Harry reçoit une lettre de Poudlard, l'école de magie et de sorcellerie, l'invitant à s'y présenter pour la rentrée des classes.", posterURL:"https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg", rating:"4",id: Math.random() },
    { title:"La Guerre des Mondes", description:"Quelques minutes après que son ex-femme et l'époux de cette dernière lui ont confié la garde des enfants, un puissant orage éclate. Ray assiste alors à un spectacle qui bouleversera à jamais sa vie...", posterURL:"https://fr.web.img6.acsta.net/pictures/19/10/11/17/18/4361049.jpg", rating:"2",id: Math.random() },
    { title:"Les Huit Salopards", description:"Quelques années après la guerre de Sécession, le cocher O. B. Jackson conduit dans sa diligence le chasseur de primes John Ruth et sa prisonnière, Daisy Domergue, jusqu'à Red Rock. Ils rencontrent sur la route le major Marquis Warren,", posterURL:"https://fr.web.img5.acsta.net/pictures/15/10/09/16/46/255916.jpg", rating:"3",id: Math.random() },
    { title:"Le Loup de Wall Street", description:"Sa licence de courtier en poche, et les narines déjà pleines de cocaïne, Jordan Belfort est prêt à conquérir Wall Street. Ce jour d'octobre, un krach, le plus important depuis 1929, vient piétiner ses rêves de grandeur.", posterURL:"https://fr.web.img6.acsta.net/pictures/210/604/21060483_20131125114549726.jpg", rating:"1",id: Math.random() },
    { title:"Et Dieu créa la femme", description:"Juliette, belle et sensuelle, fait chavirer les cœurs dans le petit port traditionnel de Saint-Tropez. Trois hommes se disputent l'amour de cette orpheline de 18 ans dont la soif de liberté est grande et qui redoute les lendemains.", posterURL:"https://loucinefil.com/wp-content/uploads/2021/07/et-dieu-crea-la-femme.jpg", rating:"5",id: Math.random() },
    { title:"Dune", description:"Dans un futur lointain de l'humanité, le Duc Leto Atréides reçoit de l’Empereur Shaddam IV le fief de la très profitable et très dangereuse planète désertique Arrakis. Également connue sous le nom de « Dune », cette planète est la seule source de la substance la plus précieuse de l'Imperium,", posterURL:"https://fr.web.img6.acsta.net/pictures/21/08/10/12/20/4633954.jpg", rating:"5",id: Math.random() },
    { title:"The Batman", description:"Dans sa deuxième année de lutte contre le crime, le milliardaire et justicier masqué Batman explore la corruption qui sévit à Gotham et notamment comment elle pourrait être liée à sa propre famille, les Wayne, à qui il doit toute sa fortune. ", posterURL:"https://fr.web.img5.acsta.net/pictures/22/02/16/17/42/3125788.jpg", rating:"4",id: Math.random() },
    { title:"Spider-Man ", description:"Avec l'identité de Spiderman désormais révélée, celui-ci est démasqué et n'est plus en mesure de séparer sa vie normale en tant que Peter Parker des enjeux élevés d'être un superhéros. ", posterURL:"https://fr.web.img4.acsta.net/pictures/21/11/16/10/01/4860598.jpg", rating:"5",id: Math.random() },
    { title:"Matrix 4 ", description:"Pour savoir si sa réalité est une construction physique ou mentale, M. Anderson, alias Neo, devra choisir de suivre une fois de plus le lapin blanc. ", posterURL:"https://fr.web.img4.acsta.net/pictures/21/11/17/17/24/3336846.jpg", rating:"2",id: Math.random(),video:"https://www.youtube.com/watch?v=84TouqfIsiI&t=32s" }
    // { title:"", description:"", posterURL:"", rating:"5",id: Math.random() },

])
 return (
  <div >  
    <NavBar/>
    <Routes>
      
            <Route path='/' element={<Home/>}/>
            <Route path='/cards' element={<MovieList tab={tab} setTab={setTab}/>}/>
            <Route path='/cards/:id' element={<DescriptionCard tab={tab}/>}/>
            
    </Routes>
    
  
  </div>
  );
}
export default App;
