import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound: React.FC = () => {
    return (
        <main className="container">
            <section className='instructions'>
                <h2>Looks like you have hit the wrong street <span role='img' aria-label='anxious'>😰</span></h2>
                <h4>Let me help you to get back <span role='img' aria-label='anxious'>😊</span></h4>
                <Link to='/'>Hold my Hand</Link>
            </section>
        </main>
    )
}

export default PageNotFound;