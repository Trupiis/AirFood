import { ReactNode } from "react";

type CardServicesProps = {
  children: ReactNode;
};

function CardServices ({ children }: CardServicesProps) {
    return(
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#A66915] shadow-md flex items-center justify-center">
                <div className="w-8 h-6 border-2 border-[#A66915] rounded-sm" />
              </div>
              {children}
            </div>
    )
}

export default CardServices;
