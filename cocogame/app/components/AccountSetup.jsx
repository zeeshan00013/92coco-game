import React from "react";

const AccountSetup = () => {
  return (
    <section className="px-4 py-10 text-white max-w-5xl mx-auto w-full">
      <h2 className="text-3xl font-bold mb-6 text-[#f0c059c5]">
        Account Setup Walkthrough
      </h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2 text-[#f0c059c5]">
          Registration Process
        </h3>
        <ul className="list-disc list-inside space-y-2 text-white">
          <li>
            Launch app and select <strong>“New Registration”</strong>
          </li>
          <li>Verify with Pakistani mobile number (+92 format)</li>
          <li>Create a hack-proof password (mix letters, numbers, symbols)</li>
          <li>Complete two-factor authentication via SMS</li>
          <li className="text-red-600 font-medium">
            Security Note: Never share verification codes with third parties
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2 text-[#f0c059c5]">
          Phone Binding
        </h3>
        <ul className="list-disc list-inside space-y-2 text-white">
          <li>Access profile settings post-login</li>
          <li>
            Select <strong>“Link Mobile Number”</strong>
          </li>
          <li>Input active Pakistani cellular number</li>
          <li>Validate with real-time OTP confirmation</li>
          <li className="text-green-600 font-medium">
            Benefit: Enables faster transactions and account recovery
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mb-6 mt-12 text-[#f0c059c5]">
        Financial Transactions
      </h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2 text-[#f0c059c5]">
          Instant Deposits
        </h3>
        <ul className="list-disc list-inside space-y-2 text-white">
          <li>Navigate to in-app Wallet section</li>
          <li>
            Choose from trusted partners: <strong>JazzCash</strong> or{" "}
            <strong>EasyPaisa</strong>
          </li>
          <li>Input amount (minimum ₨500)</li>
          <li>Authorize via mobile wallet PIN</li>
          <li className="text-blue-600 font-medium">
            Processing Time: 98% of deposits complete within 90 seconds
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-2 text-[#f0c059c5]">
          Withdrawal Process
        </h3>
        <ul className="list-disc list-inside space-y-2 text-white">
          <li>Access withdrawal dashboard</li>
          <li>Select pre-verified payout method</li>
          <li>Enter amount (₨1000 minimum)</li>
          <li>Submit biometric confirmation</li>
          <li className="text-blue-600 font-medium">
            Average Processing: 24–48 hours for bank transfers
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AccountSetup;
