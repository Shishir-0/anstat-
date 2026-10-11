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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("idle"); // 'idle' | 'network_success' | 'client_prepared' | 'network_error'

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

  const mailtoUrl = `mailto:connect@anstat.co.in?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=connect@anstat.co.in&su=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const whatsappText = `Hello ANSTAT team, I would like to discuss a project:\n\n*Name:* ${formData.name}\n*Company:* ${formData.company || "N/A"}\n*Division:* ${formData.division}\n*Timeline:* ${formData.timeline}\n*Budget:* ${formData.budget}\n*Project Details:* ${formData.description}`;

  const whatsappUrl = `https://wa.me/919019731057?text=${encodeURIComponent(whatsappText)}`;

  const handleCopySummary = () => {
    const textToCopy = `To: connect@anstat.co.in\nSubject: ${emailSubject}\n\n${emailBody}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDispatchEmail = () => {
    window.location.href = mailtoUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            recipient: "connect@anstat.co.in",
            subject: emailSubject,
          }),
        });

        if (response.ok) {
          setSubmissionStatus("network_success");
          setSubmitted(true);
          setIsSubmitting(false);
          return;
        } else {
          setSubmissionStatus("network_error");
          setSubmitted(true);
          setIsSubmitting(false);
          return;
        }
      } catch {
        setSubmissionStatus("network_error");
        setSubmitted(true);
        setIsSubmitting(false);
        return;
      }
    }

    // Default static deployment workflow: compile and present verified dispatch actions
    setSubmissionStatus("client_prepared");
    setSubmitted(true);
    setIsSubmitting(false);
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
                {submissionStatus === "network_success"
                  ? "Enquiry Delivered Successfully"
                  : submissionStatus === "network_error"
                  ? "Direct Server Relay Unavailable"
                  : "Project Summary Prepared"}
              </h3>
              <p className="text-sm sm:text-base text-[#435149] max-w-lg mx-auto mb-6">
                {submissionStatus === "network_success" ? (
                  <>Thank you, <strong>{formData.name}</strong>. Your project details have been successfully transmitted to our engineering desk at <strong>connect@anstat.co.in</strong>.</>
                ) : submissionStatus === "network_error" ? (
                  <>We couldn't reach the automated server relay, but your details are completely preserved below. Please click <strong>Open in Web Gmail</strong> or <strong>Dispatch via Email App</strong> to deliver your enquiry directly to <strong>connect@anstat.co.in</strong>.</>
                ) : (
                  <>Thank you, <strong>{formData.name}</strong>. Your enquiry details have been compiled for direct dispatch to <strong>connect@anstat.co.in</strong>.</>
                )}
              </p>

              {/* Summary Card */}
              <div className="bg-white border border-[#E1E9E2] rounded-2xl p-5 mb-8 max-w-xl mx-auto text-left shadow-xs text-xs sm:text-sm space-y-2">
                <div className="flex justify-between border-b border-[#E1E9E2] pb-2 font-medium">
                  <span className="text-[#68766E]">Recipient Desk:</span>
                  <span className="font-bold text-[#16804A]">connect@anstat.co.in</span>
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
                  className="px-4 py-2 bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 font-bold rounded-xl text-xs flex items-center gap-2 transition-colors shadow-2xs"
                >
                  <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="px-4 py-2 bg-white border border-[#E1E9E2] text-[#18372A] hover:bg-[#F4F7F4] font-semibold rounded-xl text-xs flex items-center gap-2 transition-colors shadow-2xs"
                >
                  {copied ? (
                    <>
                      <svg className="w-3.5 h-3.5 text-[#16804A]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#16804A] font-bold">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5 text-[#68766E]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 2a1 1 0 000 2h4a1 1 0 100-2H8z" />
                        <path d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" />
                      </svg>
                      <span>Copy Details</span>
                    </>
                  )}
                </button>

                <a
                  href="tel:+919019731057"
                  className="px-4 py-2 bg-white border border-[#E1E9E2] text-[#18372A] hover:bg-[#F4F7F4] font-semibold rounded-xl text-xs flex items-center gap-2 transition-colors shadow-2xs"
                >
                  <svg className="w-3.5 h-3.5 text-[#16804A]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
                  </svg>
                  <span>Call +91 90197 31057</span>
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
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:w-auto text-sm py-3.5 px-8 shadow-sm flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Project Details</span>
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-xs text-[#68766E] text-center sm:text-right">
                  Direct dispatch to: <strong>connect@anstat.co.in</strong>. No spam, ever.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
