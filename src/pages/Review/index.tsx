import styles from './AboutUs.module.css'
import Navbar from '../../components/navbar/Navbar';
import Rating from '../../components/rating/Rating';
import Footer from '../../components/footer/Footer';

export default function Review() {

    return (
        <div>
            <Navbar></Navbar>
            <Rating userRating={2}></Rating>   
            <Footer></Footer>
        </div>
    )

}