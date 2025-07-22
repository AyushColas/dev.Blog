import { useLocation } from "react-router-dom";
import DevBackground from "../Components/DevBackground";
import Footer from "../Components/Footer";
import { useMemo } from "react";
import LoginForm from "../Components/LoginForm";
import RegisterForm from "../Components/RegisterForm";


const LoginPage = () => {

    const location = useLocation();

    const isLogin = useMemo(()=> {
        const params =  new URLSearchParams(location.search);
        return params.get("mode") == "login";
    }, [location.search]);

    return(
        <div>
        <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-primary gap-6">
            <DevBackground className="z-0"/>
            <div className="w-full max-w-md text-primary p-6 rounded-xl shadow-md z-10">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    {isLogin?"Welcome Back":"Create Account"}
                </h2>
                    {isLogin?<LoginForm />:<RegisterForm />}
            </div>
        </div>
            <Footer />
        </div>
    );
};

export default LoginPage;