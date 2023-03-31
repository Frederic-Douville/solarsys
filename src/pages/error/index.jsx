import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className="error-ctn">
            <span className="error-nbr">404</span>
            <span className="error-pitch">Cette page n'existe pas !</span>
            <Link to="/" className="error-link">
                Retour à l'accueil
            </Link>
        </div>
    );
}

export default Error;
