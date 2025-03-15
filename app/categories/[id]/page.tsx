import Link from "next/link";
import {
  ArrowLeft,
  StickyNoteIcon as NoteIcon,
  PlusCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Sample data - in a real app this would come from a database or API
const categories = {
  "1": {
    id: "1",
    name: "Trabajo",
    description: "Notas relacionadas con el trabajo",
  },
  "2": { id: "2", name: "Personal", description: "Notas personales" },
  "3": {
    id: "3",
    name: "Proyectos",
    description: "Ideas y seguimiento de proyectos",
  },
  "4": { id: "4", name: "Ideas", description: "Inspiración y nuevas ideas" },
};

const notes = {
  "1": [
    {
      id: "1",
      title: "Reunión con cliente",
      content: "Discutir propuesta de diseño",
      date: "2023-05-15",
    },
    {
      id: "2",
      title: "Proyecto web",
      content: "Revisar avances del sprint",
      date: "2023-05-10",
    },
    {
      id: "3",
      title: "Entrevista",
      content: "Preparar preguntas para candidato",
      date: "2023-05-05",
    },
    {
      id: "4",
      title: "Presentación",
      content: "Finalizar slides para la presentación",
      date: "2023-04-28",
    },
    {
      id: "5",
      title: "Informe mensual",
      content: "Recopilar datos para el informe",
      date: "2023-04-20",
    },
  ],
  "2": [
    {
      id: "3",
      title: "Compras",
      content: "Lista de supermercado",
      date: "2023-05-12",
    },
    {
      id: "6",
      title: "Cumpleaños",
      content: "Ideas para regalo de Ana",
      date: "2023-05-08",
    },
    {
      id: "7",
      title: "Vacaciones",
      content: "Planificar viaje de verano",
      date: "2023-04-25",
    },
  ],
  "3": [
    {
      id: "4",
      title: "App de notas",
      content: "Desarrollo de JG-NOTES",
      date: "2023-05-14",
    },
    {
      id: "8",
      title: "Sitio web personal",
      content: "Actualizar portfolio",
      date: "2023-05-01",
    },
  ],
  "4": [
    {
      id: "5",
      title: "Negocio",
      content: "Ideas para emprendimiento",
      date: "2023-05-11",
    },
    {
      id: "9",
      title: "Artículo",
      content: "Esquema para blog post",
      date: "2023-05-07",
    },
    {
      id: "10",
      title: "Curso online",
      content: "Ideas para curso de programación",
      date: "2023-04-30",
    },
    {
      id: "11",
      title: "Podcast",
      content: "Temas para episodios futuros",
      date: "2023-04-22",
    },
  ],
};

// Añade esta función al archivo app/categories/[id]/page.tsx
export async function generateStaticParams() {
  // Devuelve un array con todos los posibles valores de 'id'
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = categories[params.id as keyof typeof categories];
  const categoryNotes = notes[params.id as keyof typeof notes] || [];

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8">Categoría no encontrada</div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/categories">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a categorías
          </Button>
        </Link>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">{category.name}</h1>
            <p className="text-muted-foreground mt-1">{category.description}</p>
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nueva nota
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryNotes.map((note) => (
          <Link key={note.id} href={`/notes/${note.id}`}>
            <Card className="h-full transition-all hover:shadow-md cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <NoteIcon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{note.title}</CardTitle>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {note.date}
                  </div>
                </div>
                <CardDescription className="line-clamp-2 mt-2">
                  {note.content}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}

        {categoryNotes.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">
              No hay notas en esta categoría
            </p>
            <Button variant="outline" className="mt-4">
              <PlusCircle className="mr-2 h-4 w-4" />
              Crear primera nota
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
