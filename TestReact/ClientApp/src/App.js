import React, { useEffect, useState } from 'react';
import Input from './components/Input'
import Output from './components/Output'

import './custom.css'

const App = () => {

    const [logs, setLogs] = useState([])
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        document.querySelector('#root').classList.toggle('dark')
    }, [isDark])

    return (
        <main>
            <div>
                <h1 className='title'>React Test</h1>
            </div>
            <div className={`container`}>
                <Input logs={logs} setLogs={setLogs} setIsDark={setIsDark} isDark={isDark} />
                <Output logs={logs} />
            </div>
        </main>
    );
}
export default App 