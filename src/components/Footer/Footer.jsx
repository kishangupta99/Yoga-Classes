import React from 'react';

// Data for the links to keep the component clean and easy to manage
const navigation = {
  about: [
    { name: 'Home', href: '#' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Events', href: '#' },
  ],
  blog: [
    { name: 'Nutrition', href: '#' },
    { name: 'Physical', href: '#' },
    { name: 'Mental Wellness', href: '#' },
    { name: 'Lifestyle', href: '#' },
  ],
  cities: [
    { name: 'Mumbai', href: '#' },
    { name: 'Bengaluru', href: '#' },
    { name: 'Pune', href: '#' },
    { name: 'Hyderabad', href: '#' },
    { name: 'Ahmedabad', href: '#' },
    { name: 'Thane', href: '#' },
    { name: 'Delhi', href: '#' },
    { name: 'Gurgaon', href: '#' },
    { name: 'Nagpur', href: '#' },
    { name: 'Chennai', href: '#' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: (props) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg> },
    { name: 'Instagram', href: '#', icon: (props) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-9.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" clipRule="evenodd" /></svg> },
    { name: 'LinkedIn', href: '#', icon: (props) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg> },
  ],
};

const Footer = () => {
  return (
    <footer className="text-white bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="px-6 pt-16 pb-8 mx-auto max-w-7xl sm:pt-24 lg:px-8 lg:pt-32">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-8">
          
          {/* Column 1: Company Info */}
          <div className="space-y-8 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
                {/* Your Logo SVG or <img> tag */}
                <svg className="w-auto h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8v-2h3V7h2v4h3v2h-3v4h-2z" fill="white"/></svg>
                <span className="text-2xl font-bold">Habuild</span>
            </div>
            <div className="space-y-4 text-sm leading-6 text-gray-300">
                <p className="font-semibold text-white">Address:</p>
                <p>Bothra Complex, Model Mill Square, Ganeshpeth Colony, Nagpur, Maharashtra 440018</p>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-300">
                <span className="font-semibold text-white">Phone:</span>
                <a href="tel:07126924545" className="border-b border-gray-500 hover:text-white hover:border-white">07126924545</a>
            </div>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 & 3: Links */}
          <div className="grid grid-cols-2 gap-8 mt-16 md:mt-0 lg:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                    <h3 className="text-sm font-semibold leading-6 text-white">About Us</h3>
                    <ul role="list" className="mt-6 space-y-4">
                        {navigation.about.map((item) => (
                        <li key={item.name}>
                            <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                            {item.name}
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-10 md:mt-0">
                    <h3 className="text-sm font-semibold leading-6 text-white">Blog</h3>
                    <ul role="list" className="mt-6 space-y-4">
                        {navigation.blog.map((item) => (
                        <li key={item.name}>
                            <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                            {item.name}
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Column 4: Popular Cities */}
            <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Popular cities</h3>
                <ul role="list" className="grid grid-cols-2 gap-4 mt-6">
                    {navigation.cities.map((item) => (
                    <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
          </div>

        </div>

        {/* Sub-Footer */}
        <div className="flex flex-col-reverse items-center pt-8 mt-16 border-t border-white/10 sm:mt-20 lg:mt-24 gap-y-4 sm:flex-row sm:justify-between">
          <p className="text-xs leading-5 text-gray-400">&copy; 2025 Yoga Healthtech Private Limited. All rights reserved.</p>
          <div className="flex text-sm text-gray-400 gap-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Refund Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;