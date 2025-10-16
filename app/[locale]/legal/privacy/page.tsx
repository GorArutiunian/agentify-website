import { useTranslations } from 'next-intl'

export const metadata = {
  title: "Privacy Policy | Agentify",
  description: "Agentify's privacy policy. Learn how we collect, use, and protect your personal information and data."
};

export default function PrivacyPolicyPage() {
  const t = useTranslations('privacy')

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2D1B69] via-[#3D2A7A] to-[#2D1B69] text-white py-20">
        {/* Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#E93E8F]/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-[#FF6B9D]/15 transform rotate-45"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-[#2D1B69]/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-40 right-20 w-28 h-28 bg-[#E93E8F]/10 transform -rotate-12"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Privacy</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E93E8F] to-[#FF6B9D]">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="mt-6 text-sm text-gray-400">
              Last updated: {new Date().toISOString().slice(0,10)}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="prose prose-lg max-w-none">
                
                <h2 className="text-2xl font-bold text-[#2D1B69] mb-6">Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, phone number, company information, and payment details.
                </p>

                <h2 className="text-2xl font-bold text-[#2D1B69] mb-6">How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We use the information we collect to provide, maintain, and improve our AI automation services, process transactions, communicate with you, and ensure the security of our platform.
                </p>

                <h2 className="text-2xl font-bold text-[#2D1B69] mb-6">Information Sharing</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
                </p>

                <h2 className="text-2xl font-bold text-[#2D1B69] mb-6">Data Security</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure data storage, and regular security audits.
                </p>

                <h2 className="text-2xl font-bold text-[#2D1B69] mb-6">Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. Contact us to exercise these rights.
                </p>

                <h2 className="text-2xl font-bold text-[#2D1B69] mb-6">Cookies and Tracking</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We use cookies and similar technologies to enhance your experience, analyze usage patterns, and improve our services. You can control cookie settings through your browser preferences.
                </p>

                <h2 className="text-2xl font-bold text-[#2D1B69] mb-6">Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
                </p>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#E93E8F]/10 to-[#2D1B69]/10 rounded-xl border border-[#E93E8F]/20">
                  <h3 className="text-xl font-bold text-[#2D1B69] mb-4">Contact Us</h3>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about this privacy policy or our data practices, please contact us at:
                  </p>
                  <div className="mt-4">
                    <p className="text-gray-700">
                      <strong>Email:</strong> agentifyworks@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}