import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
<body>
    <header>
        <h1>Portfolio</h1>
        <nav>
            <ul>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contactMe">Contact me</a></li>
                <li><a href=#work>Work</a></li>
                <li><a href=#aboutMe>About Me</a></li>
            </ul>
        </nav>
    </header>
    <section class="topPhoto">
        <img src="./images/Indian.jpg">
        <h1>Justice F.</h1>
        </img>
    </section>
    <main>
        <div id="aboutMe">
            <h2>About Me</h2>
                    <p>Hello, my name is Justice, a student in the UCF Coding bootcamp. I'm from Wichita, KS, currently living in Winter Haven, FL. I am learning to become a full stack developer. My overall goal is to be a computer engineer, and I believe a full stack developer is a great step towards that direciton. My biggest hobby aside from computers and coding, is soccer. I love the unity the sport brings, and it has helped me tremendously with being a team player, not only within the sport, but with group projects outside of it as well.</p>
        </div>        
        <div id="projects">
            <h2>Work</h2>
            <aside id="work"> 
                <figure id="project1">
                    <a href="https://justfog36.github.io/challenge1hariseon/">
                    <img src="./images/Horiseon.PNG">
                    </a>
                    <figcaption>Hariseon Refactor</figcaption>
                </figure>
                <figure id="project2">
                    <a href="https://brianqtaylor.github.io/Verbal-Alchemist/">
                        <img src="./images/Verbal_Alchemist.PNG" alt="placeholder image">
                        <figcaption>Verbal Alchemist</figcaption>
                    </a>
                </figure>
                <figure id="project3">
                    <a href="https://changethisline.com">
                        <img src="./images/placeholder.png" alt="placeholder image">
                        <figcaption>PROJECT 3</figcaption>
                    </a>
                </figure>
                <figure id="project4">
                    <a href="https://changethisline.com">
                        <img src="./images/placeholder.png" alt="placeholder image">
                        <figcaption>PROJECT 4</figcaption>
                    </a>
                </figure>
                <figure id="project5">
                    <a href="https://changethisline.com">
                        <img src="./images/placeholder.png" alt="placeholder image">
                        <figcaption>PROJECT 5</figcaption>
                    </a>
                </figure>
            </aside >
        </div>
        <footer id="contactMe">
            <h2>Contact Me</h2>
            <ul>
                <li>(316)804-0115</li>
                <li>jfogle36@gmail.com</li>
                <li><a href="https://github.com/JustFog36">GitHub</a></li>
            </ul>
        </footer>
    </main>
</body>
    </>
  )
}

export default App