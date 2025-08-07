import FacebookIcon from "../icons/facebook"     
import InstagramIcon from "../icons/instagram"
import MailIcon from "../icons/mail"


function Footer () {
    return(
        <footer className="bg-[#2a2a2a] py-8">
        <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
        <span className="text-white text-xl font-light font-playfair">FOODWING</span>
        </div>
        
        <p className="text-gray-400 text-sm">Derechos reservados - 2025</p>
        
        <div className="flex items-center justify-center space-x-4">
        <FacebookIcon className="size-8 text-white"/>
        <InstagramIcon className="size-6"/>
        <MailIcon className="size-7"/>
        </div>
        </div>
        </div>
        </footer>
    )
}

export default Footer;