// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Rajendra Bisoi" />

            <div className='header__content'>
                <h1>Hi, I am Rajendra Bisoi</h1>
                <br></br>
                <p>Fullstack web3 Developer</p>
                <br></br>
                <a href="mailto: rajendrabisoi23@gmail.com" className='button' >Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;
