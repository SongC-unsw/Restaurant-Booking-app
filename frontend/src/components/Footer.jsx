export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>📍 123 Restaurant Street</li>
              <li>📞 (555) 123-4567</li>
              <li>✉️ info@restaurant.com</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/menu" className="hover:text-gray-300">
                  Menu
                </a>
              </li>
              <li>
                <a href="/reservations" className="hover:text-gray-300">
                  Reservations
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Foodtopia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
