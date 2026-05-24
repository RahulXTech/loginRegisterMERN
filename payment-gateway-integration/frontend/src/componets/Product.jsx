import React from "react";
import axios from "axios";

const Product = ({data})=> {
  const handleClick = async(amount)=>{
    const {data : keyData} = await axios.get("/api/v1/getKey")
    const key = keyData.key;
    console.log(key);
    
    const {data : orderData} = await axios.post("/api/v1/payment/process",{
      amount
    })
    const order = orderData.order;
    console.log(order); 

     // Open Razorpay Checkout
      const options = {
        key: key, // Replace with your Razorpay key_id
        amount: amount, // Amount is in currency subunits.
        currency: 'INR',
        name: 'Acme Corp',
        description: 'Test Transaction',
        order_id: order.id, // This is the order_id created in the backend
        callback_url: '/api/v1/paymentVerification', // Your success URL
        prefill: {
          name: 'Gaurav Kumar',
          email: 'gaurav.kumar@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#F37254'
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();

  }
  return (
    <div className="flex flex-wrap justify-center gap-6 p-5">
      {data.map((e, index) => (
        <div
          key={index}
          className="group w-full max-w-xs overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
        >
          {/* Image */}
          <div className="relative h-60 w-full">
            <img
              className="h-full w-full object-cover"
              src={e.image}
              alt={e.name}
            />
          </div>
          {/* Details */}
          <div className="p-5">
            <h5 className="text-md font-bold text-slate-900">
              {e.title}
            </h5>
            <div className="mt-3">
              <span className="text-2xl font-bold">
                ₹{e.price}
              </span>
            </div>
            <button
            onClick={()=> handleClick(e.price)}
            className="cursor-pointer mt-5 w-full rounded-md bg-slate-900 px-5 py-2 text-white hover:bg-gray-700">
              Buy now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Product;