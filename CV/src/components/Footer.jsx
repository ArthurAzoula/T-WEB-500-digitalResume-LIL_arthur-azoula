import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
    return (
        <footer className="bg-chamoisee text-champagne py-8">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-4">Restons en contact</h2>
                <p className="text-lg mb-4">
                    Vous pouvez me contacter à tout moment par e-mail à{" "}
                    <a
                        href="mailto:arthur2504azoula@gmail.com"
                        className="text-soft-mint-green hover:underline"
                    >
                        arthur2504azoula@gmail.com
                    </a>
                </p>
                <div className="flex justify-center space-x-4">
                    <SocialIcon
                        network="facebook"
                        bgColor="#1877f2"
                        url="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                    <SocialIcon
                        network="twitter"
                        bgColor="#1da1f2"
                        url="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                    <SocialIcon
                        network="linkedin"
                        bgColor="#0077b5"
                        url="https://www.linkedin.com/in/arthur-azoula"
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                    <SocialIcon
                        network="github"
                        bgColor="#333333"
                        url="https://github.com/azoulux"
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                    <SocialIcon
                        network="instagram"
                        bgColor="#e4405f"
                        url="https://www.instagram.com/arthur_azl"
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                    <SocialIcon
                        network="discord"
                        bgColor="#5865f2"
                        url="https://discord.gg/"
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                </div>
                <div className="mt-6">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"
                        alt="Drapeau français"
                        className="w-8 h-auto inline-block"
                    />
                    <p className="text-lg text-gray-400 inline-block ml-2">
                        Langue: Français
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
