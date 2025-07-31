import { ReactNode } from "react"

type ContactProps = {
  children: ReactNode;
};

function Contact ({children}: ContactProps) {
    return(
        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {children}
        </div>
    )
}

export default Contact;