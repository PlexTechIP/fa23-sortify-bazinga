import './index.css';
import react, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    return (
        <div className='search-container'>
            <form className='search-form'>
                <input className='search-input' type='text' placeholder='Search'/>
                <button className='search-button' type='submit'>
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </form>
        </div>
    )

}
export default SearchBar;