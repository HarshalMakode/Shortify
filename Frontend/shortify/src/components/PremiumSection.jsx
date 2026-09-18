function PremiumSection() {
  return (
    <section className="w-full max-w-3xl flex flex-col items-center bg-white py-5 rounded-2xl border border-mist-300 shadow-lg p-10 gap-5">

      <span className="text-2xl font-bold text-gray-600">
        Want More? Try Premium Features!
      </span>

      <span className="flex flex-col items-center text-center">
        <span>
          Custom short links, powerful dashboard, detailed analytics,
          API, UTM builder, QR codes,
        </span>

        <span>
          browser extension, app integrations and support. Start Free
        </span>
      </span>

      <button className="bg-blue-400 font-semibold text-white py-3 px-5 rounded">
        Create Account
      </button>

    </section>
  );
}

export default PremiumSection;