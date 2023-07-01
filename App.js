import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => (
    <h1 id="title" key="h1">
        Namaste React
    </h1>
);

// Composing Components

const HeaderComponent = () => (
    <div>
        <Title />
        <h1>Namaste React functional Component</h1>
        <h2>This is a H2 tag</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//async defer
root.render(<HeaderComponent />);
