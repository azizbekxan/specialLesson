import './App.css'


import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../Tapp-filter/tapp-filter";
import AppInfo from "../tapp-info/tapp-info";
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movies-add-form/movies-add-form'

const App = () => {
    return (
    <div className='app font-monospace' >
        <div className='content' >
            <AppInfo />
            <div className='search-panel' >
                <SearchPanel />
                <AppFilter />
            </div>
            <MovieList />
            <MoviesAddForm />
        </div>
    </div>
 )
}

export default App;