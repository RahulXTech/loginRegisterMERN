import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";

function PaymentSuccess() {

  const { search } = useLocation();

  const query = new URLSearchParams(search);

  const reference = query.get("reference");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        {/* Success Icon */}
        <div className="flex justify-center">
          <CheckCircle className="h-24 w-24 text-green-500" />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-center text-3xl font-bold text-gray-800">
          Payment Successful
        </h1>

        {/* Message */}
        <p className="mt-3 text-center text-gray-600">
          Thank you for your purchase.
          Your payment has been processed successfully.
        </p>

        {/* Payment Details */}
        <div className="mt-6 rounded-lg bg-gray-50 p-4">

          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">
              Status
            </span>

            <span className="font-semibold text-green-600">
              Success
            </span>
          </div>

          <div className="mt-3 flex justify-between">
            <span className="font-medium text-gray-600">
              Transaction ID
            </span>

            {reference && (
              <span className="text-sm text-gray-800">
                {reference}
              </span>
            )}

          </div>
        </div>

        {/* Button */}
        <Link
          to="/"
          className="mt-8 block w-full rounded-lg bg-slate-900 px-5 py-3 text-center text-white transition hover:bg-slate-700"
        >
          Continue Shopping
        </Link>

      </div>
    </div>
  );
}

export default PaymentSuccess;