import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
    return (
        <main style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
            <UserProfile name="Alex" age={25} bio="Loves exploring new cultures and cuisines." />
            <UserProfile name="Sara" age={30} bio="A passionate photographer and travel blogger." />
        </main>
    );
}

export default MainContent;

