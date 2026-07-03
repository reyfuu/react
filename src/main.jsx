// const h1 = document.createElement('h1');
// h1.textContent = 'Hello, TypeScript!';
// h1.className='greeting';
// document.body.appendChild(h1);

import { createRoot } from 'react-dom/client';
import { Fragment} from 'react';
const root = createRoot(document.getElementById('root') );

root.render(
    <Page />
);

function Header() {
    return (
        <header>
            <img src="/Logo.png" className="logo" alt="Vite logo" />
            <nav>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

function Main() {
    return (
        <main>
            <h1>Reason i am excited about React</h1>
            <ol>
                <li>It is a popular library, so I will be able to collaborate with other developers and learn from them.</li>
                <li>React is a library that is used by many companies, so learning it will increase my job opportunities.</li>
                <li>React has a strong community and a lot of resources, so I will be able to find help when I need it.</li>
            </ol>
        </main>
    );
}

function Footer() {
    return (
        <footer>
            <small>© 2026 Reyfuu development. All rights reserved.</small>
        </footer>
    );
}

function Page() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>    
        );
}