// External Link
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Footer from './components/footer/Footer';
import NavBar from './components/nabBar';
import { IMAGES } from './utils/images';
import About from './views/about';
import FAQ from './views/faq';
import MemberShip from './views/memberShip';
import Mint from './views/mint';
import RoadMap from './views/roadMap';
import Team from './views/team';


function App() {
  return (
    < >
     <NavBar/>
     <Mint/>
     <About/>
     <MemberShip/>
     <RoadMap/>
     <Team />
     <FAQ />
     <Footer />
    </>
  );
}

export default App;
