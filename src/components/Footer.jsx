import linkedinIcon from '../assets/link.svg';
import instagramIcon from '../assets/instagram.svg';
import githubIcon from '../assets/github.svg';

function Header() {
    return (
        <footer className="bg-[#2C3E50] text-white p-6 font-bold text-[20px]">
            <h4 className="text-center mb-4">&copy; 2024 por María Camila Gómez Blanquicett. Derechos Reservados.</h4>
            <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="Linkedin social network icon" width="30" height="31" className="hover:opacity-75" />
                </a>
                <a href="https://www.instagram.com/mcamigomez/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram social network icon" width="30" height="31" className="hover:opacity-75" />
                </a>
                <a href="https://github.com/mcamilagomez" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub social network icon" width="30" height="31" className="hover:opacity-75" />
                </a>
            </div>
        </footer>
    );
}

export default Header;
