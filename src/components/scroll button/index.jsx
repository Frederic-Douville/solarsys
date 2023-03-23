import { ReactComponent as ArrowUp } from '../../assets/icones/arrow-up-solid.svg';

function ScrollTopButton() {
    const scrollUp = () =>
        document.getElementById('header').scrollIntoView(true);
    return (
        <div className="scrollTop-button" onClick={scrollUp}>
            <ArrowUp className="scrollTop-button-icon" />
        </div>
    );
}

export default ScrollTopButton;
