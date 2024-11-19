import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Purchase() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const product = queryParams.get('product');
  const price = queryParams.get('price');
  const description = queryParams.get('description');
  const features = queryParams.get('features')?.split(',');

  const handleCheckout = () => {
    navigate(`/checkout?product=${product}&price=${price}&description=${description}&features=${features.join(',')}`);
  };

  return (
    <div className="relative flex flex-col items-start justify-start text-white mt-10">
      <div className="hero-background" />
      <div className="w-full h-full relative z-10 pt-10 text-left backdrop-blur-2xl rounded-3xl p-5">
        <h1 className="text-4xl">Compra els nostres productes</h1>
        <p className="mt-6 text-xl text-center">
          Estàs a punt de comprar el producte: <strong>{product}</strong> per <strong>{price}€</strong>.
        </p>
        <p className="mt-4 text-lg text-center">
          <strong>Descripció:</strong> {description}
        </p>
        <ul className="mt-4 text-lg text-center">
          <strong>Característiques:</strong>
          {features?.map((feature, index) => (
            <li key={index}>✔️ {feature}</li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col items-center justify-center text-center">
          <button className="px-4 py-2 bg-blue-600 rounded-lg text-white" onClick={handleCheckout}>Confirmar Compra</button>
        </div>
      </div>
    </div>
  );
}