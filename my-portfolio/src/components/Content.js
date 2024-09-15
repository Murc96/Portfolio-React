import React, { useEffect, useRef } from 'react';
import HomeContent from './HomeContent';
import ProjectsContent from './ProjectsContent';
import ContactContent from './ContactContent';
import './Content.css';

function Content({ currentPage, loadContent }) {
  const contentRef = useRef(null);

  useEffect(() => {
    const contentDiv = contentRef.current;
    contentDiv.classList.remove('show');
    contentDiv.classList.add('hidden');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          entry.target.classList.remove('hidden');
        }
      });
    });

    observer.observe(contentDiv);

    return () => {
      observer.unobserve(contentDiv);
    };
  }, [currentPage]);

  return (
    <div className="content hidden" id="content" ref={contentRef}>
      {currentPage === 'home' && <HomeContent loadContent={loadContent} />}
      {currentPage === 'projects' && <ProjectsContent />}
      {currentPage === 'contact' && <ContactContent />}
    </div>
  );
}

export default Content;