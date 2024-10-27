import React from 'react';
import '../styles/main.css';

const CustomTerms = () => {
    return (
        <div className='container mx-auto px-4 py-8'>
            <h1 className="text-2xl font-bold mb-4 text-center">Terms & Conditions</h1>
            <p><strong>Last Updated:</strong> [Date]</p>

            <h2 className="text-xl font-semibold mt-6">1. Introduction</h2>
            <p>
                Welcome to [Company Name]! By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please do not use our website.
            </p>

            <h2 className="text-xl font-semibold mt-6">2. Services</h2>
            <p>
                [Company Name] offers various beauty and wellness services, including haircuts, nail polishing, manicures, pedicures, and spa treatments. All appointments, purchases, and interactions on this site are subject to these terms.
            </p>

            <h2 className="text-xl font-semibold mt-6">3. Appointments and Bookings</h2>
            <p>
                <strong>Booking Confirmation:</strong> All appointments are subject to availability. Once booked, you will receive a confirmation email.
            </p>
            <p>
                <strong>Rescheduling and Cancellations:</strong> You may reschedule or cancel your appointment up to [X hours] in advance. Late cancellations or no-shows may incur fees.
            </p>
            <p>
                <strong>Service Changes:</strong> Service modifications are not permitted within [X hours] of your appointment.
            </p>

            <h2 className="text-xl font-semibold mt-6">4. Payment and Fees</h2>
            <p>
                <strong>Pricing:</strong> Our services’ prices are listed on the website and may be updated without notice.
            </p>
            <p>
                <strong>Payment Methods:</strong> We accept payments via [accepted payment methods]. All payments must be made in full at the time of booking.
            </p>
            <p>
                <strong>Refunds:</strong> Refunds are not provided for completed services, but please contact us if you’re dissatisfied, and we will work to address your concerns.
            </p>

            <h2 className="text-xl font-semibold mt-6">5. Health and Safety</h2>
            <p>
                To ensure a safe experience, please inform us of any allergies or medical conditions when booking. We reserve the right to refuse service if we believe it may compromise the health and safety of the client or our staff.
            </p>

            <h2 className="text-xl font-semibold mt-6">6. Intellectual Property</h2>
            <p>
                All content, images, logos, and designs on this website are the property of [Company Name] and are protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works from our content without prior written consent.
            </p>

            <h2 className="text-xl font-semibold mt-6">7. Website Use</h2>
            <p>
                <strong>Accuracy of Information:</strong> We make every effort to provide accurate information, but we do not warrant that the website is free of errors.
            </p>
            <p>
                <strong>Prohibited Actions:</strong> You may not use this website for any unlawful purpose, including but not limited to distributing harmful software, collecting information about others without consent, or engaging in fraudulent activities.
            </p>

            <h2 className="text-xl font-semibold mt-6">8. Limitation of Liability</h2>
            <p>
                [Company Name] is not liable for any indirect, incidental, or consequential damages arising from your use of our website or services. Our maximum liability for any claim is limited to the amount you paid for the service in question.
            </p>

            <h2 className="text-xl font-semibold mt-6">9. Modifications to Terms</h2>
            <p>
                We may modify these Terms & Conditions at any time. Changes will be posted on this page, and it is your responsibility to review the terms periodically.
            </p>

            <h2 className="text-xl font-semibold mt-6">10. Contact Us</h2>
            <p>
                If you have any questions about these terms, please contact us at [contact email or phone number].
            </p>
        </div>
    );
};

export default CustomTerms;
