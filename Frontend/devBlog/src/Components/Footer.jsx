import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return(
        <footer className="py-12 px-4 bg-card relative border-t border-border pt-8 flex flex-col sm:flex-row sm:justify-between flex-wrap gap-4 justify-center items-center">
            <p className="text-sm text-muted-foreground pointer-events-none"> &copy; {new Date().getFullYear()} dev.Blog </p>
            <div className="flex flex-row gap-4 flex-nowrap">
            <a
                href='https://www.instagram.com/bhandara_detector_app/'
                target="_blank"
                aria-label= "Instagram"
                rel="noopener norefferer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
            ><Instagram size={16} className="text-primary h-6 w-6"/></a>
            <a
                href='mailto:ayushmishra2004op@gmail.com'
                target="_blank"
                aria-label="Gmail"
                rel="noopener norefferer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
            ><Mail size={16} className="text-primary h-6 w-6"/></a>
            <a
                href='https://www.linkedin.com/in/ayushmi/'
                target="_blank"
                aria-label="Linkedin"
                rel="noopener norefferer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
            ><Linkedin size={16} className="text-primary h-6 w-6"/></a>
            <a
                href='https://github.com/AyushColas'
                target="_blank"
                aria-label="Github"
                rel="noopener norefferer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
            ><Github size={16} className="text-primary h-6 w-6"/></a>
            </div>
            <p className="text-sm text-muted-foreground pointer-events-none"> Ayush Mishra</p>
        </footer>
    );
};

export default Footer;