import CardServices from "./CardServices";
import { ReactNode } from "react";

type ServicesProps = {
  children: ReactNode;
};

function Services ({ children }: ServicesProps) {
    return(
        <div className="grid md:grid-cols-3 gap-12 py-10">
            {children}
        </div>
    )
}

export default Services;