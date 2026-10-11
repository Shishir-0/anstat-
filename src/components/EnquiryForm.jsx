import { useState } from "react";
import { motion } from "framer-motion";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    division: "ANSTAT Technology",
    timeline: "1 - 3 Months",
    budget: "₹1,00,000 - ₹5,00,000",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please provide your full name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please provide your business email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please provide a valid email address.";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Please briefly describe your project or objectives.";
    } else if (formData.description.trim().length < 15) {
      newErrors.description = "Please provide at least 15 characters describing what you're trying to solve.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const emailSubject = `Project Enquiry: ${formData.division} - ${formData.company || formData.name}`;
  const emailBody = `Name: ${formData.name}
Company: ${formData.company || "N/A"}
Email: ${formData.email}
Phone: ${formData.phone || "N/A"}
Division: ${formData.division}
Timeline: ${formData.timeline}
Budget: ${formData.budget}

Project Description:
${formData.description}`;

  const mailtoUrl = `mailto:prasadshishir1@gmail.com?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=prasadshishir1@gmail.com&su=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const whatsappText = `Hello ANSTAT team, I would like to discuss a project:\n\n*Name:* ${formData.name}\n*Company:* ${formData.company || "N/A"}\n*Division:* ${formData.division}\n*Timeline:* ${formData.timeline}\n*Budget:* ${formData.budget}\n*Project Details:* ${formData.description}`;

  const whatsappUrl = `https://wa.me/919019731057?text=${encodeURIComponent(whatsappText)}`;

  const handleCopySummary = () => {
    const textToCopy = `To: prasadshishir1@gmail.com\nSubject: ${emailSubject}\n\n${emailBody}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDispatchEmail = () => {
    // Attempt standard mailto protocol
    window.location.href = mailtoUrl;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    try {
      window.location.href = mailtoUrl;
    } catch {
      // safe fallback
    }
  };

  return (
    <section id="enquiry" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E1E9E2]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="badge-emerald mb-3">Project Enquiries</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#18372A] tracking-tight mb-4">
            Discuss Your Project
          </h2>
          <p className="text-base sm:text-lg text-[#435149] max-w-2xl mx-auto">
            Tell us what you are building, improving, or trying to solve.
            Our engineering and growth team will help define a practical next step.
          </p>
        </div>

        <div className="bg-[#F4F7F4]/70 border border-[#E1E9E2] rounded-3xl p-6 sm:p-10 md:p-12 shadow-xs">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
              role="status"
              aria-live="polite"
            >
              <div className="w-16 h-16 bg-[#E8F3EB] text-[#16804A] border border-[#C4DFC9] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#18372A] mb-3">
                Project Summary Prepared
              </h3>
              <p className="text-sm sm:text-base text-[#435149] max-w-lg mx-auto mb-6">
                Thank you, <strong>{formData.name}</strong>. Your enquiry details have been compiled for direct dispatch to <strong>prasadshishir1@gmail.com</strong>.
              </p>

              {/* Summary Card */}
              <div className="bg-white border border-[#E1E9E2] rounded-2xl p-5 mb-8 max-w-xl mx-auto text-left shadow-xs text-xs sm:text-sm space-y-2">
                <div className="flex justify-between border-b border-[#E1E9E2] pb-2 font-medium">
                  <span className="text-[#68766E]">Recipient:</span>
                  <span className="font-bold text-[#16804A]">prasadshishir1@gmail.com</span>
                </div>
                <div className="flex justify-between border-b border-[#E1E9E2] pb-2 font-medium">
                  <span className="text-[#68766E]">Subject:</span>
                  <span className="font-semibold text-[#18372A] text-right truncate max-w-[280px]">{emailSubject}</span>
                </div>
                <div className="flex justify-between text-[#435149] pt-1">
                  <span className="text-[#68766E]">Division:</span>
                  <span>{formData.division}</span>
                </div>
                <div className="flex justify-between text-[#435149]">
                  <span className="text-[#68766E]">Timeline / Budget:</span>
                  <span>{formData.timeline} &bull; {formData.budget}</span>
                </div>
              </div>

              {/* Multi-channel dispatch buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6 max-w-xl mx-auto">
                <a
                  href={mailtoUrl}
                  onClick={handleDispatchEmail}
                  className="btn-primary w-full sm:w-auto text-sm py-3.5 px-6 shadow-sm flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                  <span>Dispatch via Email App</span>
                </a>

                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full sm:w-auto text-sm py-3.5 px-6 border-[#C4DFC9] bg-white hover:bg-[#E8F3EB] text-[#18372A] flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 text-[#EA4335]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.49l8.073-5.997C21.69 2.28 24 3.434 24 5.457z"/>
                  </svg>
                  <span>Open in Web Gmail</span>
                </a>
              </div>

              {/* Secondary actions: WhatsApp, Copy, Phone */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>💬 Chat on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="px-4 py-2 bg-white border border-[#E1E9E2] text-[#18372A] hover:bg-[#F4F7F4] font-semibold rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>{copied ? "✓ Copied to Clipboard!" : "📋 Copy Details"}</span>
                </button>

                <a
                  href="tel:+919019731057"
                  className="px-4 py-2 bg-white border border-[#E1E9E2] text-[#18372A] hover:bg-[#F4F7F4] font-semibold rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>📞 Call +91 90197 31057</span>
                </a>
              </div>

              <div className="pt-6 border-t border-[#E1E9E2] text-xs text-[#68766E]">
                <span>Want to edit details or submit another inquiry? </span>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-[#16804A] font-bold underline hover:text-[#12693C]"
                >
                  Edit inquiry form
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold uppercase tracking-wider text-[#18372A] mb-2"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Kumar"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full bg-white border ${
                      errors.name ? "border-red-500" : "border-[#E1E9E2]"
                    } rounded-xl px-4 py-3 text-sm text-[#18372A] placeholder-[#68766E]/60 focus:border-[#16804A] focus:ring-1 focus:ring-[#16804A] focus:outline-none transition-colors`}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-red-600 mt-1.5 font-medium" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-bold uppercase tracking-wider text-[#18372A] mb-2"
                  >
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Acme Innovations"
                    className="w-full bg-white border border-[#E1E9E2] rounded-xl px-4 py-3 text-sm text-[#18372A] placeholder-[#68766E]/60 focus:border-[#16804A] focus:ring-1 focus:ring-[#16804A] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-[#18372A] mb-2"
                  >
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ramesh@company.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full bg-white border ${
                      errors.email ? "border-red-500" : "border-[#E1E9E2]"
                    } rounded-xl px-4 py-3 text-sm text-[#18372A] placeholder-[#68766E]/60 focus:border-[#16804A] focus:ring-1 focus:ring-[#16804A] focus:outline-none transition-colors`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-600 mt-1.5 font-medium" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold uppercase tracking-wider text-[#18372A] mb-2"
                  >
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-white border border-[#E1E9E2] rounded-xl px-4 py-3 text-sm text-[#18372A] placeholder-[#68766E]/60 focus:border-[#16804A] focus:ring-1 focus:ring-[#16804A] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Division of Interest */}
                <div>
                  <label
                    htmlFor="division"
                    className="block text-xs font-bold uppercase tracking-wider text-[#18372A] mb-2"
                  >
                    Division of Interest
                  </label>
                  <select
                    id="division"
                    name="division"
                    value={formData.division}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#E1E9E2] rounded-xl px-4 py-3 text-sm text-[#18372A] focus:border-[#16804A] focus:ring-1 focus:ring-[#16804A] focus:outline-none transition-colors"
                  >
                    <option value="ANSTAT Technology">ANSTAT Technology</option>
                    <option value="ANSTAT AI">ANSTAT AI</option>
                    <option value="ANSTAT Growth & Media">ANSTAT Growth & Media</option>
                    <option value="ANSTAT Business Solutions">ANSTAT Business Solutions</option>
                    <option value="Integrated / Multiple Divisions">Integrated / Multiple Divisions</option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-xs font-bold uppercase tracking-wider text-[#18372A] mb-2"
                  >
                    Expected Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#E1E9E2] rounded-xl px-4 py-3 text-sm text-[#18372A] focus:border-[#16804A] focus:ring-1 focus:ring-[#16804A] focus:outline-none transition-colors"
                  >
                    <option value="Immediate (< 1 Month)">Immediate (&lt; 1 Month)</option>
                    <option value="1 - 3 Months">1 - 3 Months</option>
                    <option value="3 - 6 Months">3 - 6 Months</option>
                    <option value="Exploratory / Planning">Exploratory / Planning</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-xs font-bold uppercase tracking-wider text-[#18372A] mb-2"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#E1E9E2] rounded-xl px-4 py-3 text-sm text-[#18372A] focus:border-[#16804A] focus:ring-1 focus:ring-[#16804A] focus:outline-none transition-colors"
                  >
                    <option value="₹50,000 - ₹1,50,000">₹50,000 - ₹1,50,000</option>
                    <option value="₹1,50,000 - ₹5,00,000">₹1,50,000 - ₹5,00,000</option>
                    <option value="₹5,00,000 - ₹15,00,000">₹5,00,000 - ₹15,00,000</option>
                    <option value="₹15,00,000+ / Custom Enterprise">₹15,00,000+ / Enterprise</option>
                  </select>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-xs font-bold uppercase tracking-wider text-[#18372A] mb-2"
                >
                  Project Description & Objectives <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe what you want to build, the current bottlenecks, or your commercial target..."
                  aria-invalid={!!errors.description}
                  aria-describedby={errors.description ? "description-error" : undefined}
                  className={`w-full bg-white border ${
                    errors.description ? "border-red-500" : "border-[#E1E9E2]"
                  } rounded-xl px-4 py-3 text-sm text-[#18372A] placeholder-[#68766E]/60 focus:border-[#16804A] focus:ring-1 focus:ring-[#16804A] focus:outline-none transition-colors`}
                />
                {errors.description && (
                  <p id="description-error" className="text-xs text-red-600 mt-1.5 font-medium" role="alert">
                    {errors.description}
                  </p>
                )}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto text-sm py-3.5 px-8 shadow-sm"
                >
                  <span>Submit Project Details</span>
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <p className="text-xs text-[#68766E] text-center sm:text-right">
                  Direct dispatch to: <strong>prasadshishir1@gmail.com</strong>. No spam, ever.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
