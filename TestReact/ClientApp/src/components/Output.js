const Output = ({ logs }) => {

    return (
        <div className='container-output'>
            {logs.map(item => {
                return (
                    <div key={item.key} style={{ display: 'flex' }}>
                        <p className='output-date'>{item.date}</p>
                        <p className='output-text'>{item.text}</p>
                    </div>
                )
            })}
        </div>
    );
}
export default Output