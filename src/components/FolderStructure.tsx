import React from 'react';

interface FolderStructureProps {
  flickerRate: number;
}

const FolderStructure: React.FC<FolderStructureProps> = ({ flickerRate }) => {
  return (
    <ul className="folder-structure mt-4 neon-glow" style={{ animation: `flicker ${flickerRate}s infinite` }}>
      <li>
        daniel_marz/
        <ul>
          <li className="relative before:border-l ml-4 before:mr-4 before:border-b before:absolute before:-top-[3px] before:-left-3 before:w-3 before:h-4 border-white">
            about/
            <ul className="relative before:border-l ml-4 before:mr-4 before:border-b before:absolute before:-top-[3px] before:-left-3 before:w-3 before:h-4 border-white">
              <li> <a href="/about"> <p>about.html </p> </a> </li>
            </ul>
            {/* <ul className="relative before:border-l ml-4 before:mr-4 before:border-b before:absolute before:-top-[3px] before:-left-3 before:w-3 before:h-4 border-white">
              <li> <a href="/about"> <p>cause_areas.html </p> </a> </li>
            </ul> */}
          </li>
          <li className="relative before:border-l ml-4 before:mr-4 before:border-b before:absolute before:-top-[60px] before:-left-3 before:w-3 before:h-[73px] border-white">
            writing/
            <ul className="relative before:border-l ml-4 before:mr-4 before:border-b before:absolute before:-top-[3px] before:-left-3 before:w-3 before:h-4 border-white">
              <li><a href="https://hackmd.io/@dmarz" target="_blank" rel="noopener noreferrer">🔗 hackMd</a></li>
            </ul>
            <ul className="relative before:border-l ml-4 before:mr-4 before:border-b before:absolute before:-top-[3px] before:-left-3 before:w-3 before:h-4 border-white">
              <li><a href="https://github.com/dmarzzz" target="_blank" rel="noopener noreferrer">🔗 github</a></li>
            </ul>
            {/* <ul className="relative before:border-l ml-4 before:mr-4 before:border-b before:absolute before:-top-[3px] before:-left-3 before:w-3 before:h-4 border-white">
              <li><a href="https://github.com/dmarzzz" target="_blank" rel="noopener noreferrer"> personal.html </a></li>
            </ul> */}
          </li>
          {/* <li className="relative before:border-l ml-4 before:mr-4 before:border-b before:absolute before:-top-[83px] before:-left-3 before:w-3 before:h-[95px] border-white">
          <a href="https://en.wikipedia.org/wiki/Fl%C3%A2neur">flânerie/</a>
            <ul className="relative before:border-l ml-4 before:mr-4 before:border-b before:absolute before:-top-[3px] before:-left-3 before:w-3 before:h-4 border-white">
              <li><a href="/books" target="_blank" rel="noopener noreferrer">books.html </a></li>
            </ul>
            <ul className="relative before:border-l ml-4 before:mr-4 before:border-b before:absolute before:-top-[3px] before:-left-3 before:w-3 before:h-4 border-white">
              <li><a href="/movies" target="_blank" rel="noopener noreferrer">movies.html </a></li>
            </ul>
            <ul className="relative before:border-l ml-4 before:mr-4 before:border-b before:absolute before:-top-[3px] before:-left-3 before:w-3 before:h-4 border-white">
              <li><a href="/movies" target="_blank" rel="noopener noreferrer">packs.html </a></li>
            </ul>
          </li> */}
        </ul>
      </li>
    </ul>
  );
}

export default FolderStructure;
