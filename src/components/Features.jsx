import { Icon } from '@iconify/react';

const features = [
  { icon: 'mdi:rocket', title: 'Rápido', description: 'Carga instantánea y navegación fluida.' },
  { icon: 'mdi:shield-check', title: 'Seguro', description: 'Tu información está protegida.' },
  { icon: 'mdi:account-group', title: 'Colaborativo', description: 'Trabajo en equipo en tiempo real.' },
  
  
];

export default function Features() {
  return (
    <section className="py-16 bg-white" id="features">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div key={i} className="text-center p-6 border rounded shadow hover:shadow-md transition">
              <Icon icon={item.icon} className="text-4xl text-blue-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
