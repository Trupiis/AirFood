import { ReactNode } from "react";

type CardContactProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

function CardContact({ icon, title, children }: CardContactProps) {
  return (
    <div className="text-center">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 shadow-md border-[#8E9371] flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-4 text-gray-800">{title}</h3>
      <div className="text-gray-800 font-medium space-y-1">{children}</div>
    </div>
  );
}

export default CardContact;
