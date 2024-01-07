import { useState } from 'react';

import styles from './App.module.scss';
import TextfieldComp from './Textfield';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <TextfieldComp width={'10'} />
        </>
    );
}

export default App;
