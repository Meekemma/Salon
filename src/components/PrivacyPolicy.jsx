import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className='container mx-auto px-4 py-8'>
            <h1 className="text-2xl font-bold mb-4 text-center">Privacy Policy</h1>
            <p><strong>Last Updated:</strong> [Date]</p>

            <h2 className="text-xl font-semibold mt-6">1. Introduction</h2>
            <p>
                Your privacy is very important to us. This Privacy Policy outlines the types of information we collect from visitors and users, how we use it, and the steps we take to protect your data.
            </p>

            <h2 className="text-xl font-semibold mt-6">2. Information We Collect</h2>
            <p>
                <strong>Personal Information:</strong> When you book an appointment, sign up for newsletters, or contact us, we collect personal information such as your name, email address, phone number, and appointment details.
            </p>
            <p>
                <strong>Payment Information:</strong> We use third-party payment processors to process payments securely. We do not store your credit card information on our servers.
            </p>
            <p>
                <strong>Automatically Collected Information:</strong> We may collect information about your device, browser type, IP address, and usage data when you visit our website to improve site functionality and user experience.
            </p>

            <h2 className="text-xl font-semibold mt-6">3. How We Use Your Information</h2>
            <p>
                We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-5">
                <li>To process bookings and provide our services.</li>
                <li>To communicate with you regarding your appointments, account, or inquiries.</li>
                <li>To send promotional emails, special offers, and updates about our services, which you can opt out of at any time.</li>
                <li>To analyze website usage and improve site functionality and user experience.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">4. Sharing Your Information</h2>
            <p>
                We do not sell, trade, or otherwise transfer your personal information to outside parties except:
            </p>
            <ul className="list-disc pl-5">
                <li><strong>Service Providers:</strong> We may share information with third-party service providers for payment processing, email distribution, and website management.</li>
                <li><strong>Legal Compliance:</strong> We may disclose information if required by law or to protect our legal rights.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">5. Data Security</h2>
            <p>
                We implement various security measures to protect your personal information, including encryption, access controls, and secure server environments. However, no system is entirely secure, and we cannot guarantee complete security of your data.
            </p>

            <h2 className="text-xl font-semibold mt-6">6. Cookies and Tracking Technologies</h2>
            <p>
                Our website uses cookies and similar tracking technologies to enhance your experience. Cookies help us remember your preferences and analyze website traffic. You can adjust your browser settings to disable cookies, though this may affect site functionality.
            </p>

            <h2 className="text-xl font-semibold mt-6">7. Your Rights</h2>
            <p>
                Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-5">
                <li><strong>Access:</strong> Request a copy of your personal data.</li>
                <li><strong>Correction:</strong> Correct any inaccuracies in your data.</li>
                <li><strong>Deletion:</strong> Request deletion of your data under certain circumstances.</li>
                <li><strong>Objection:</strong> Object to processing your data for marketing purposes.</li>
            </ul>
            <p>
                To exercise these rights, please contact us at [contact email].
            </p>

            <h2 className="text-xl font-semibold mt-6">8. Children’s Privacy</h2>
            <p>
                Our website and services are not intended for children under the age of 13, and we do not knowingly collect personal information from children. If we learn that we have collected data from a child, we will delete it promptly.
            </p>

            <h2 className="text-xl font-semibold mt-6">9. Changes to this Privacy Policy</h2>
            <p>
                We may update this Privacy Policy periodically. We encourage you to review it frequently to stay informed of any changes.
            </p>

            <h2 className="text-xl font-semibold mt-6">10. Contact Us</h2>
            <p>
                If you have any questions or concerns about our Privacy Policy, please contact us at [contact email or phone number].
            </p>
        </div>
    );
};

export default PrivacyPolicy;
