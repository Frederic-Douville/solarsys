import { Link } from 'react-router-dom';
import { ReactComponent as GithubIcon } from '../../assets/icones/github-brands.svg';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-ctn">
                <div className="footer-links-ctn">
                    <ul className="footer-list">
                        <li className="footer-elem">
                            <Link to="/credits" className="footer-link">
                                Crédits
                            </Link>
                        </li>
                        <li className="footer-elem">
                            <a
                                className="footer-link"
                                href="https://api.le-systeme-solaire.net/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                API
                            </a>
                        </li>
                        <li className="footer-elem">
                            <a
                                className="footer-link"
                                href="https://frederic-douville.github.io/Portfolio/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Portfolio
                            </a>
                        </li>
                        <li className="footer-elem">
                            <a
                                className="footer-link"
                                href="https://github.com/Frederic-Douville"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <GithubIcon className="footer-github-icon" />
                            </a>
                        </li>
                    </ul>
                </div>
                <span className="footer-copyright">
                    &#169; 2023 Frédéric Douville
                </span>
            </div>
        </div>
    );
}

export default Footer;
