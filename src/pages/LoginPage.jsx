import loginImage from '../assets/loginpage.png';
import logo from '../assets/logo.svg';
import rect from '../assets/rect-bottom.svg';
import rect2 from '../assets/Rectangle2.svg';
import rect3 from '../assets/Rectangle3.svg';
import Login from '../components/Login';

const LoginPage = () => {
    return (
        <div className="grid grid-cols-2">
            {/* Login form section */}
            <div className="h-screen">
                <div className="flex items-center justify-center h-full">
                    <Login />
                </div>
            </div>
            {/* Info section */}
            <div className="h-screen bg-[#0022D2] relative overflow-hidden">
                {/* Info image */}
                <img
                    className="w-[45%] absolute -bottom-3 right-0 z-50"
                    src={loginImage}
                    alt=""
                />
                {/* rect image */}
                <div>
                    <img
                        className="absolute top-0 -left-14 w-[45%]"
                        src={rect2}
                        alt=""
                    />
                </div>
                <div>
                    <img
                        className="absolute -top-0 -left-5 w-[50%]"
                        src={rect3}
                        alt=""
                    />
                </div>
                <div>
                    <img
                        className="absolute bottom-4 -left-24 w-[45%]"
                        src={rect}
                        alt=""
                    />
                </div>
                {/* Text infos */}
                <div className="h-[50vh] flex flex-col justify-between">
                    <div className="flex items-center justify-end px-10 pt-10">
                        <img className="w-32" src={logo} alt="" />
                    </div>
                    <div className="self-end px-10 text-right text-white">
                        <h2 className="mb-8 text-4xl">
                            Automate your message service
                        </h2>
                        <p className="text-sm w-[60%] float-right font-light">
                            Make your tasks easy with Loopmee by an automated
                            integration along with your contacts
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
