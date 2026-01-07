export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-xl font-bold mb-4">
            Haven City Church
          </h3>
          <p>A place to belong, believe, and become.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Service Times</h4>
          <p>Sundays: 9:00 AM & 11:00 AM</p>
          <p>Wednesdays: 6:30 PM</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p>123 Faith Avenue, Cityville</p>
          <p>hello@havencity.org</p>
        </div>
      </div>
      <div className="text-center mt-8 pt-8 border-t border-slate-800 text-sm">
        © {new Date().getFullYear()} Haven City Church. All rights reserved.
      </div>
    </footer>
  );
}
