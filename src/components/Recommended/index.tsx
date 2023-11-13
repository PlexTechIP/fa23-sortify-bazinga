import './index.css'

const Recommended = ({favs}:{favs: Array<String>}) => {
    return (
        <div className='recommend-container'>
            {favs.map((str, index) => (
                <button className='recommend-button' >{str}</button>
            ))}
        </div>
    )

}

export default Recommended;