import me from "../assets/me.png";
import "../styles/components/Home.scss";

function Home() {
    return (
        <div className="home">
            <div className="home__title">
                Dizzied<span>bliss</span>
            </div>
            <div className="home__description">
                Drowned in the <span>Dizzied Venv </span>of
                <span> a Blissed Stack</span>
            </div>
            <div className="home__image">
                <img src={me} alt="dizziedbliss" />
            </div>
            <div className="home__box--wrapper">
                <div className="home__box">
                    <svg
                        className="home__box__svg--back"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 932 366"
                        fill="none"
                    >
                        <path
                            d="M845.706 1L930.241 364.5H61.8467L1.18066 1H845.706Z"
                            fill="none"
                            stroke="#9E00CE"
                            stroke-width="3"
                        />
                    </svg>
                    <svg
                        className="home__box__svg--front"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 932 366"
                        fill="none"
                    >
                        <path
                            d="M845.706 1L930.241 364.5H61.8467L1.18066 1H845.706Z"
                            fill="black"
                            stroke="#9E00CE"
                            stroke-width="3"
                        />
                        <foreignObject x="0%" y="0%" width="100%" height="100%">
                            <div className="home__content">
                                Hey, I'm Max!! <br />
                                Thanks for making your time to finally visit my
                                portfolio.
                                <br />
                                <br />
                                Please drink water n swipe belowww
                            </div>
                        </foreignObject>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Home;
