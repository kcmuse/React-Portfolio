import React from 'react';

export default function Footer(){
    return(
        <div className="container">
        <footer className="footer-main bg-dark fixed-bottom">
            <a href="https://github.com/kcmuse" target="_blank" rel="noreferrer" ><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon"/></a>
            <a href="https://www.linkedin.com/in/kcmuse/" target="_blank" rel="noreferrer" ><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
            <a href="mailto: kcmusedev@gmail.com" target="_blank" rel="noreferrer" ><img src="https://img.icons8.com/color/48/000000/email.png" alt="Email" className="icon"/></a>
            <a href="https://docs.google.com/document/d/1IYR-OKOZbrtQ2RlRZ14laa6hMhc0awVmq1gUBAKnZJs/edit?usp=sharing" download target="_blank" rel="noreferrer" ><img src="https://img.icons8.com/color/48/000000/pdf.png"/></a>
        </footer>
        </div>
    )
}