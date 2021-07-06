import {Link} from 'react-router-dom';


const Home = () => {
    return(
        <div id="home">
            <h1> Welcome to Jess's Boutique!</h1>
            <img className="item-image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elfa-closet-1570213713.jpg?crop=1.00xw:0.752xh;0.00160xw,0.216xh&resize=1200:*" />
            {/* adding link to items page for shop */}
            <Link to="/items">Shop New Arrivals</Link>
        </div>
    )
}

export default Home;