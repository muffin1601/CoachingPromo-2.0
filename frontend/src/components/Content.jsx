import React, { useState } from 'react';
import '../styles/Content.css';

const Content = () => {
    const [activeTab, setActiveTab] = useState('products');
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "Can I place a bulk order for promotional t-shirts?",
            answer: "Yes! We offer special discounts on bulk and repeat orders. As a leading promotional t-shirt manufacturer in Gurgaon, we can tailor pricing based on your quantity requirements."
        },
        {
            question: "Do you deliver promotional t-shirts across India?",
            answer: "Absolutely! We provide fast delivery for promotional t-shirts in Delhi, Gurgaon, and Okhla, typically within 5-7 business days."
        },
        {
            question: "Can I provide my own design for promotional t-shirts in Delhi, Gurgaon, or Okhla?",
            answer: "Yes, you can provide your own design files. Our design team will also help optimize your artwork for the best results on your chosen products."
        },
        {
            question: "Can I provide my own design for my promotional t-shirts?",
            answer: "Yes, you can provide your own design files. Our design team also helps optimize your artwork for the best results on t-shirts and other promotional products."
        },
        {
            question: "Do you offer eco-friendly promotional bags?",
            answer: "Yes! We offer eco-friendly bags made from recycled materials and other sustainable products. Customers in Delhi, Gurgaon, and Okhla can explore our full range of green alternatives."
        },
        {
            question: "What is the minimum order quantity for promotional products?",
            answer: "Minimum order quantities vary by product. For most items, the MOQ is 50 pieces. For smaller orders, we can accommodate with a slight surcharge, catering to both promotional t-shirts and bags."
        },
        {
            question: "How long does production take for promotional items?",
            answer: "Production typically takes 7-10 business days after design approval, plus shipping time. Rush services are available for an additional fee, whether it’s t-shirts or bags."
        },
        {
            question: "Do you provide design services for promotional products?",
            answer: "Yes! Our in-house design team offers free consultation to help create or refine your branding for optimal results on t-shirts, bags, and other promotional items."
        },
        {
            question: "What logo file formats are accepted for printing?",
            answer: "We prefer vector files (AI, EPS, SVG) for the best quality, but can also work with high-resolution PNG, JPG, and PSD files for promotional t-shirts and other products."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept bank transfers, credit/debit cards, UPI, and multiple other payment options. Corporate accounts are also supported for promotional t-shirts, bags, and other products."
        }
    ];

    return (
        <div className="content-wrapper">
            <header className="content-header">
                <h1 className="content-header-title">Premium Branded Merchandise for Coaching Institutes</h1>
            </header>

            <nav className="content-tabs">
                <button
                    className={`content-tab-btn ${activeTab === 'products' ? 'active' : ''}`}
                    onClick={() => setActiveTab('products')}
                >
                    Products
                </button>
                <button
                    className={`content-tab-btn ${activeTab === 'faq' ? 'active' : ''}`}
                    onClick={() => setActiveTab('faq')}
                >
                    FAQs
                </button>
                <button
                    className={`content-tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
                    onClick={() => setActiveTab('contact')}
                >
                    Contact
                </button>
            </nav>

            <main className="content-main">
                {activeTab === 'products' && (
                    <section className="content-products-section">
                        <h2 className="content-products-title">🛍️ Wide Range of Custom Promotional Products</h2>
                        <p className="content-products-description">
                            We offer a premium selection of branded merchandise and corporate gifts specifically for coaching institutes:
                        </p>

                        <div className="content-products-grid">
                            <div className="content-product-card">
                                <div className="content-product-icon">👕</div>
                                <h3 className="content-product-heading">Promotional T-shirts & Shirts</h3>
                                <p className="content-product-text">For staff, trainers, and events</p>
                            </div>

                            <div className="content-product-card">
                                <div className="content-product-icon">🎒</div>
                                <h3 className="content-product-heading">Promotional Bags</h3>
                                <p className="content-product-text">Backpacks, tote bags, and messenger bags with bulk logo printing</p>
                            </div>

                            <div className="content-product-card">
                                <div className="content-product-icon">☕</div>
                                <h3 className="content-product-heading">Promotional Mugs & Water Bottles</h3>
                                <p className="content-product-text">Ideal for events and daily use</p>
                            </div>

                            <div className="content-product-card">
                                <div className="content-product-icon">📓</div>
                                <h3 className="content-product-heading">Promotional Notebooks</h3>
                                <p className="content-product-text">Branded stationery sets for students</p>
                            </div>

                            <div className="content-product-card">
                                <div className="content-product-icon">🖊️</div>
                                <h3 className="content-product-heading">Promotional Pens</h3>
                                <p className="content-product-text">Budget-friendly giveaways</p>
                            </div>

                            <div className="content-product-card">
                                <div className="content-product-icon">🏷️</div>
                                <h3 className="content-product-heading">Event Accessories</h3>
                                <p className="content-product-text">Lanyards, badges, and ID cards</p>
                            </div>
                        </div>
                        <p className="content-quality-note">
                            All products ensure premium quality, durability, and vibrant logo branding.
                        </p>
                    </section>
                )}

                {activeTab === 'faq' && (
                    <section className="content-faq-section">
                        <h2 className="content-faq-title">❓ Frequently Asked Questions</h2>
                        <div className="content-faq-list">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`content-faq-item ${activeFaq === index ? 'active' : ''}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    <div className="content-faq-question">
                                        <h3 className="content-faq-question-text">{faq.question}</h3>
                                        <span className="content-faq-toggle">{activeFaq === index ? '−' : '+'}</span>
                                    </div>
                                    {activeFaq === index && (
                                        <div className="content-faq-answer">
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {activeTab === 'contact' && (
                    <section className="content-contact-section">
                        <h2 className="content-contact-title">📞 Get Started Today</h2>
                        <p className="content-contact-description">
                            Give your coaching institute a professional edge with branded merchandise and corporate gifting solutions that students and staff will love.
                        </p>

                        <div className="content-contact-options">
                            <div className="content-contact-card">
                                <h3 className="content-contact-card-title">📧 Email Us</h3>
                                <p className="content-contact-card-text">sales@coachingpromo.in</p>
                            </div>

                            <div className="content-contact-card">
                                <h3 className="content-contact-card-title">📞 Call Us</h3>
                                <p className="content-contact-card-text">+91 8750 708222</p>
                            </div>
                        </div>

                        <div className="content-social-section">
                            <h3 className="content-social-title">Follow Us on Social Media</h3>
                            <div className="content-social-icons">
                                {/* Facebook */}
                                <a href="https://www.facebook.com/profile.php?id=61578398193650" target="_blank" rel="noopener noreferrer" className="content-social-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                    <span>Facebook</span>
                                </a>

                                {/* Instagram */}
                                <a href="https://www.instagram.com/coachingpromo.in/" target="_blank" rel="noopener noreferrer" className="content-social-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                    <span>Instagram</span>
                                </a>

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/mycoaching-promo-a0b4ba380/" target="_blank" rel="noopener noreferrer" className="content-social-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    <span>LinkedIn</span>
                                </a>

                                {/* WhatsApp */}
                                <a href="https://wa.me/+918750708222" target="_blank" rel="noopener noreferrer" className="content-social-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488" />
                                    </svg>
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                        </div>

                        <div className="content-guarantee">
                            <p>We guarantee quality products, on-time delivery, and complete satisfaction with your branded merchandise!</p>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};

export default Content;
