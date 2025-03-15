import Link from "next/link";
import { ArrowLeft, Calendar, FolderIcon, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// Sample data - in a real app this would come from a database or API
const notes = {
  "1": {
    id: "1",
    title: "Reunión con cliente",
    content:
      "Discutir propuesta de diseño para el nuevo sitio web. Preparar mockups y estimación de costos. Revisar referencias de proyectos similares.",
    category: "Trabajo",
    date: "2023-05-15",
  },
  "2": {
    id: "2",
    title: "Proyecto web",
    content:
      "Revisar avances del sprint actual. Verificar tareas pendientes y bloqueos del equipo.",
    category: "Trabajo",
    date: "2023-05-10",
  },
  "3": {
    id: "3",
    title: "Compras",
    content:
      "Lista de supermercado para la semana. Revisar ofertas y cupones disponibles.",
    category: "Personal",
    date: "2023-05-12",
  },
  "4": {
    id: "4",
    title: "App de notas",
    content:
      "Desarrollo de JG-NOTES. Planificar funcionalidades y diseño de la interfaz.",
    category: "Proyectos",
    date: "2023-05-14",
  },
};

const subNotes = {
  "1": [
    {
      id: "1",
      title: "Preparar presentación",
      content: "Slides con propuesta visual y ejemplos de trabajos anteriores",
    },
    {
      id: "2",
      title: "Presupuesto",
      content: "Actualizar costos del proyecto según los nuevos requerimientos",
    },
    {
      id: "3",
      title: "Agenda",
      content:
        "Confirmar fecha y hora con el cliente, preparar sala de reuniones",
    },
  ],
  "2": [
    {
      id: "4",
      title: "Correcciones",
      content: "Ajustar responsive design en la página de productos",
    },
    {
      id: "5",
      title: "Testing",
      content: "Realizar pruebas en diferentes navegadores y dispositivos",
    },
  ],
  "3": [
    { id: "6", title: "Frutas", content: "Manzanas, plátanos, uvas, fresas" },
    { id: "7", title: "Lácteos", content: "Leche, yogur, queso" },
    { id: "8", title: "Carnes", content: "Pollo, carne molida, pescado" },
    {
      id: "9",
      title: "Limpieza",
      content: "Detergente, papel higiénico, jabón",
    },
  ],
  "4": [
    {
      id: "10",
      title: "Diseño UI",
      content: "Crear mockups en Figma para la interfaz principal",
    },
    {
      id: "11",
      title: "Backend",
      content: "Configurar base de datos y API para gestionar notas",
    },
    {
      id: "12",
      title: "Funcionalidades",
      content: "Lista de características principales y opcionales",
    },
  ],
};
// Añade esta función al archivo app/categories/[id]/page.tsx
export async function generateStaticParams() {
  // Devuelve un array con todos los posibles valores de 'id'
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
}

export default function NotePage({ params }: { params: { id: string } }) {
  const note = notes[params.id as keyof typeof notes];
  const noteSubNotes = subNotes[params.id as keyof typeof subNotes] || [];

  if (!note) {
    return (
      <div className="container mx-auto px-4 py-8">Nota no encontrada</div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/notes">
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a notas
        </Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="bg-primary/5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <CardTitle className="text-2xl">{note.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm">
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary flex items-center gap-1"
                  >
                    <FolderIcon className="h-3 w-3" />
                    {note.category}
                  </Badge>
                  <Separator orientation="vertical" className="h-4" />
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {note.date}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="whitespace-pre-line">{note.content}</p>
            </CardContent>
          </Card>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
              Sub-notas
            </h2>
            <Button size="sm" className="gap-1">
              <PlusCircle className="h-4 w-4" />
              Añadir
            </Button>
          </div>

          <div className="space-y-4">
            {noteSubNotes.map((subNote) => (
              <Card
                key={subNote.id}
                className="border-l-4 border-l-primary overflow-hidden"
              >
                <CardHeader className="bg-primary/5 py-3">
                  <CardTitle className="text-base">{subNote.title}</CardTitle>
                </CardHeader>
                <CardContent className="py-3">
                  <CardDescription className="text-sm text-foreground">
                    {subNote.content}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}

            {noteSubNotes.length === 0 && (
              <div className="text-center py-8 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-muted-foreground">
                  No hay sub-notas para esta nota
                </p>
                <Button variant="outline" className="mt-4">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Crear primera sub-nota
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
