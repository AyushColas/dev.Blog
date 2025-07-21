import DevBackground from "../Components/DevBackground";

const LandingPage = () => {
    return(
        <div className="min-h-screen flex items-center justify-center bg-primary text-primary">
            <DevBackground />
                <span className="text-8xl z-10 font-bold animate-typing">
                    dev.Blog
                </span>
        </div>
    );
};

export default LandingPage;