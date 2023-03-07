import './search-box.styles.css';

const SearchBox = ({className, placeholder, onChangeHandler}) => {

    return (
        <div className="App">
            <input 
                 className={`search-box ${className} `}
                type='search' 
                placeholder={placeholder} 
                onChange={onChangeHandler} 
            />
        </div>
    )
    
}

export default SearchBox;