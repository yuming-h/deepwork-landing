import Image from "next/image";
import Link from "next/link";

export default function PaymentSuccess() {
  return (
    <html lang="en">
      <head>
        <title>Payment Successful - DeepWork</title>
        <meta name="description" content="Your payment was successful" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
            <div className="mb-6">
              <Image
                src="/circle-check.svg"
                alt="Payment Successful"
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Payment Successful!
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Thank you for your purchase. Your subscription is now active.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  What&apos;s Next?
                </h3>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 text-left">
                  <li>• Check your email for a confirmation receipt</li>
                  <li>
                    • Return to the DeepWork app to access premium features
                  </li>
                  <li>• Your 7-day free trial begins now</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-blue-800 dark:text-blue-200 font-medium">
                  You can now close this window and return to the DeepWork app
                  to start using your subscription.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Need help? Contact us at{" "}
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
