
import { useState } from 'react';
import './App.scss';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import Languages from './components/Languages/Languages';
import Skills from './components/Skills/Skills';
import Volunteer from './components/Volunteer/Volunteer';
import { CV } from './cv/CV';

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {

  const [showEducation, setShowEducation] = useState (true);

  return (
    <div className="App">
      <Hero hero={hero}/>
      <About about={hero.aboutMe} />
      <div className='btn-container'>
        <button onClick={() => setShowEducation(true)}>Education</button>
        <button onClick={() => setShowEducation(false)}>Experience</button>
      </div>
      <div>
        {showEducation ?
          <Education education={education} /> :
        <Experience experience={experience} />}
      </div>
      <Languages languages={languages}/>
      <Skills skills={habilities} />
      <Volunteer volunteer={volunteer} />
      
    </div>
  );
}

export default App;
