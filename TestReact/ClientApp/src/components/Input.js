import { useEffect, useState } from "react";

const Input = ({ logs, setLogs, setIsDark, isDark }) => {

    const [buttons, setButtons] = useState([])
    const [inputText, setInputText] = useState('')

    const handleButton = () => {
        const newLogs = [...logs]
        const newLog = {
            text: 'Button ' + (buttons.length + 1) + ' added',
            date: new Date().toLocaleString(),
            key: Date.now(),
        }
        newLogs.unshift(newLog)
        setLogs(newLogs)
        const newButton = buttons.length + 1
        const newButtons = [...buttons]
        newButtons.push(newButton)
        setButtons(newButtons)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const newLogs = [...logs]
        const newLog = {
            text: `Message Sent: ${inputText}`,
            date: new Date().toLocaleString(),
            key: Date.now(),
        }
        newLogs.unshift(newLog)
        setLogs(newLogs)
        setInputText('')
    }

    const handleTheme = () => {
        setIsDark(!isDark)
        const newLogs = [...logs]
        const newLog = {
            text: `Theme was set to ${isDark ? 'Dark' : 'Light'}`,
            date: new Date().toLocaleString(),
            key: Date.now(),
        }
        newLogs.unshift(newLog)
        setLogs(newLogs)
    }

    return (
        <div className='container-input'>
            <div className='themeButton'>
                <button onClick={() => handleTheme()}>Set {isDark ? 'Dark' : 'Light'} Theme</button>
            </div>
            <form className='textArea' onSubmit={(evt) => { handleSubmit(evt) }}>
                <textarea onChange={(evt) => setInputText(evt.target.value)} value={inputText} type='text'></textarea>
                <button style={{margin: '0'}} disabled={ inputText ? false : true} type='submit'>Send</button>
            </form>
            <div>
                <button onClick={(evt) => handleButton()}>add button {buttons.length + 1}</button>
            </div>
            {buttons.map((button, index) => {
                return (
                    <div key={index}>
                      <button>Button {button}</button>  
                    </div>
                    )
            })}
        </div>   
    );
}
export default Input