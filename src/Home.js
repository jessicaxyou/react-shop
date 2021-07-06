import {Link} from 'react-router-dom';


const Home = () => {
    return(
        <div id="home">
            <h1> Welcome to Jess's Boutique!</h1>
            {/* adding link to items page for shop */}
            <Link to="/items">Shop New Arrivals</Link>
        </div>
    )
}

export default Home;