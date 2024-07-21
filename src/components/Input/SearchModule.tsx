import {useState} from "react";
import {IconButton, InputAdornment, TextField} from "@mui/material";


interface SearchModuleProps{
    onSearch: (query: string) => void;
}
const SearchModule: React.FC<SearchModuleProps> = ({onSearch}) => {

    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = () =>{
        onSearch(searchQuery);
    }
    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter'){
            handleSearch()
        }
    }
    return (
        <TextField
        label='Поиск'
        variant='outlined'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        inputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton onClick={handleSearch}>

                    </IconButton>
                </InputAdornment>
            )
        }}

        />
    );
};

export default SearchModule;