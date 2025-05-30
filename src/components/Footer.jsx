export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">© 2025 Mi Empresa. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-200">Instagram</a>
          <a href="#" className="hover:text-blue-200">Facebook</a>
          <a href="#" className="hover:text-blue-200">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
