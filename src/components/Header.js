// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Rajendra Bisoi" />

            <div className='header__content'>
                <h1>Hi, Myself Rajendra Bisoi</h1>
                <br></br>
                <p>Blockchain Developer</p>
                <br></br>
                <a href="mailto: 12131501.edu@gmail.com" className='button' >Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;