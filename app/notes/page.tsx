"use client"

import { useState } from "react"
import Link from "next/link"
import { StickyNoteIcon as NoteIcon, PlusCircle, FolderIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data - in a real app this would come from a database or API
const allNotes = [
  {
    id: "1",
    title: "Reunión con cliente",
    content: "Discutir propuesta de diseño",
    category: "Trabajo",
    date: "2023-05-15",
  },
  { id: "2", title: "Proyecto web", content: "Revisar avances del sprint", category: "Trabajo", date: "2023-05-10" },
  { id: "3", title: "Compras", content: "Lista de supermercado", category: "Personal", date: "2023-05-12" },
  { id: "4", title: "App de notas", content: "Desarrollo de JG-NOTES", category: "Proyectos", date: "2023-05-14" },
  { id: "5", title: "Negocio", content: "Ideas para emprendimiento", category: "Ideas", date: "2023-05-11" },
  { id: "6", title: "Cumpleaños", content: "Ideas para regalo de Ana", category: "Personal", date: "2023-05-08" },
  { id: "7", title: "Vacaciones", content: "Planificar viaje de verano", category: "Personal", date: "2023-04-25" },
  { id: "8", title: "Sitio web personal", content: "Actualizar portfolio", category: "Proyectos", date: "2023-05-01" },
]

// Extract unique categories
const categories = ["Todas", ...Array.from(new Set(allNotes.map((note) => note.category)))]

export default function NotesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todas")

  // Filter notes based on selected category
  const filteredNotes =
    selectedCategory === "Todas" ? allNotes : allNotes.filter((note) => note.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold">Todas las notas</h1>
        <p className="text-muted-foreground">Visualiza y gestiona todas tus notas en un solo lugar</p>
      </div>

      <div className="bg-gradient-to-r from-primary/20 to-transparent rounded-lg p-4 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="relative flex-1">
            <div className="flex items-center gap-2">
              <FolderIcon className="h-5 w-5 text-primary" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona una categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nueva nota
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <Link key={note.id} href={`/notes/${note.id}`}>
              <Card className="h-full transition-all hover:shadow-md cursor-pointer border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <NoteIcon className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{note.title}</CardTitle>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      {note.category}
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{note.date}</div>
                  <CardDescription className="line-clamp-2 mt-2">{note.content}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No hay notas en esta categoría</p>
            <Button variant="outline" className="mt-4">
              <PlusCircle className="mr-2 h-4 w-4" />
              Crear primera nota
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

