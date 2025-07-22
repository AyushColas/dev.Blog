import DevBackground from "../Components/DevBackground";
import Footer from "../Components/Footer";

const LandingPage = () => {
    return(
        <div>
        <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-primary gap-6">
            <DevBackground />
        <div className="z-10">
            <span className="block text-6xl md:text-8xl font-bold animate-typing overflow-hidden whitespace-nowrap">
                    dev.Blog
            </span>
            <div className="flex gap-4 justify-center fade-in mt-4 md:mt-2">
                <a
                href="/login?mode=login"
                aria-label="Login"
                className="px-6 py-2 bg-primary text-primary-foreground fancy-button shadow"
                >
                    Login
                </a>
                <a
                href="/login?mode=register"
                aria-label="Register"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                    Register
                </a>
            </div>
        </div>
        </div>
         <Footer />
        </div>
    );
};

export default LandingPage;