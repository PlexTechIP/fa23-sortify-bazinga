import './index.css'
import SearchBar from '../SearchBar/index'
import Recommended from '../Recommended'

const ControlCenter = ({recommended}:{recommended: Array<String>}) => {
    const arr = ['Kanye', 'is', 'the', 'goat', 'and', "there's", 'no', 'debate']
    return (
        <div className='backdrop'>
            <div className='row1'>
                <SearchBar/>
                <button className='sortify-button'>Sortify</button>
            </div>
            <div className='row2'>
                <Recommended favs={arr}/>
            </div>
        </div>
        

    );
}
export default ControlCenter;