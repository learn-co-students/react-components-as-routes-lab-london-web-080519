import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


export default [
    {
        path: '/',
        title: 'Home',
        component: Home
    },
    {
        path: '/actors',
        title: 'Actors',
        component: Actors
    },
    {
        path: '/directors',
        title: 'Directors',
        component: Directors
    },
    {
        path: '/movies',
        title: 'Movies',
        component: Movies
    },

]