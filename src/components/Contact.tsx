import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Github, Linkedin,  Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
  'service_az9srb4',
  'template_pbc3lyh',
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
  },
  'FZE3tphUcZHwlonAE'
    );

    alert('Message sent successfully!');

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  } catch (error) {
    console.error(error);
    alert('Failed to send message.');
  }
};

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'Raghavsoni28115@gmail.com',
      link: 'mailto:Raghavsoni28115@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 8003389892',
      link: 'tel:+918003389892'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Jaipur,Rajasthan',
      link: 'https://www.google.com/maps/place/jaipur+rajasthan/data=!4m2!3m1!1s0x396c4adf4c57e281:0xce1c63a0cf22e09?sa=X&ved=1t:155783&ictx=111'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/raghavsoni039'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/raghav-soni-715a8b27a'
    },
    {
      icon: <Instagram size={24} />,
      name: 'Instagram',
      url: 'https://www.instagram.com/_.raghavsoni/'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#EAEAEA] mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-[#00C9A7] mx-auto mb-4"></div>
          <p className="text-[#B3B3B3] max-w-2xl mx-auto">
            Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-[#EAEAEA] mb-8">
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 bg-[#262626] rounded-lg hover:bg-[#333333] transition-colors duration-300 group"
                >
                  <div className="text-[#00C9A7] mr-4 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-[#EAEAEA] font-semibold">{info.title}</h4>
                    <p className="text-[#B3B3B3]">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-[#EAEAEA] mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-12 h-12 bg-[#262626] rounded-lg flex items-center justify-center text-[#00C9A7] hover:bg-[#00C9A7] hover:text-[#0D0D0D] transition-colors duration-300 hover:scale-110 transform"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#EAEAEA] font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#262626] border border-[#333333] rounded-lg text-[#EAEAEA] focus:border-[#00C9A7] focus:outline-none focus:ring-2 focus:ring-[#00C9A7]/20 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#EAEAEA] font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#262626] border border-[#333333] rounded-lg text-[#EAEAEA] focus:border-[#00C9A7] focus:outline-none focus:ring-2 focus:ring-[#00C9A7]/20 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-[#EAEAEA] font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#262626] border border-[#333333] rounded-lg text-[#EAEAEA] focus:border-[#00C9A7] focus:outline-none focus:ring-2 focus:ring-[#00C9A7]/20 transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[#EAEAEA] font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#262626] border border-[#333333] rounded-lg text-[#EAEAEA] focus:border-[#00C9A7] focus:outline-none focus:ring-2 focus:ring-[#00C9A7]/20 transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#00C9A7] text-[#0D0D0D] font-semibold py-3 px-6 rounded-lg hover:bg-[#00A085] transition-colors duration-300 flex items-center justify-center group"
              >
                Send Message
                <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;