import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

const services = [
  {
    title: "Automatización de Facturas",
    description: "Genera, envía y contabiliza facturas automáticamente usando IA.",
    badge: "IA"
  },
  {
    title: "Conciliación Bancaria",
    description: "Sincroniza y concilia tus movimientos bancarios de forma automática.",
    badge: "Automático"
  },
  {
    title: "Reportes Inteligentes",
    description: "Obtén reportes contables personalizados y análisis predictivo.",
    badge: "Análisis"
  },
  {
    title: "Gestión de Impuestos",
    description: "Calcula y presenta tus impuestos de manera eficiente y sin errores.",
    badge: "Precisión"
  }
];

export default function ServicesSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
      {services.map((service, idx) => (
        <Card key={idx}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {service.title}
              <Badge>{service.badge}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{service.description}</p>
            <Button className="mt-4" variant="outline">Ver más</Button>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
