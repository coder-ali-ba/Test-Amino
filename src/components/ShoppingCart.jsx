import React from "react";

function ShoppingCart() {
  return (
    <div className="fixed bottom-6 right-6">
      <div className="relative">
        <span className="absolute -top-1 -left-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          0
        </span>

        <button className="bg-[#091afa] w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-[#1f5672] transition">
          🛒
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
