import Image from "next/image";
import Link from "next/link";

export default function PaymentCancel() {
  return (
    <html lang="en">
      <head>
        <title>Payment Cancelled - DeepWork</title>
        <meta name="description" content="Your payment was cancelled" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
            <div className="mb-6">
              <Image
                src="/x-circle.svg"
                alt="Payment Cancelled"
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Payment Cancelled
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Your payment was cancelled. No charges were made to your
                account.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                  What happened?
                </h3>
                <p className="text-sm text-amber-700 dark:text-amber-300 text-left">
                  Your payment process was interrupted or cancelled. This could
                  be due to:
                </p>
                <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 text-left mt-2">
                  <li>• Clicking the back button during checkout</li>
                  <li>• Payment method issues</li>
                  <li>• Choosing to cancel the transaction</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-blue-800 dark:text-blue-200 font-medium">
                  You can close this window and try the payment process again
                  from within the DeepWork app.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Having trouble? Contact us at{" "}
                <Link
                  href="/contact"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
                >
                  support
                </Link>
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
