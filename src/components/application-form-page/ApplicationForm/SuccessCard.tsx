import { FC } from "react";
import { CheckCircle } from "lucide-react";

const SuccessCard: FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[300px]">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center space-y-4 border border-green-100">
        <div className="flex justify-center">
          <CheckCircle className="text-green-500 w-16 h-16" strokeWidth={1.5} />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">Дякуємо вам!</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Вашу заявку успішно надіслано. <br />
          Ми зв'яжемося з вами найближчим часом.
        </p>
        <div className="inline-block bg-green-50 text-green-600 text-xs font-medium px-4 py-1.5 rounded-full">
          ✓ Надіслано успішно
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;
