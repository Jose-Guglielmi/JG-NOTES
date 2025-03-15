import Link from "next/link"
import { FolderIcon, PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample data - in a real app this would come from a database or API
const categories = [
  { id: "1", name: "Trabajo", description: "Notas relacionadas con el trabajo", count: 5 },
  { id: "2", name: "Personal", description: "Notas personales", count: 3 },
  { id: "3", name: "Proyectos", description: "Ideas y seguimiento de proyectos", count: 2 },
  { id: "4", name: "Ideas", description: "Inspiración y nuevas ideas", count: 4 },
]

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold">Categorías</h1>
        <p className="text-muted-foreground">Organiza tus notas en categorías personalizadas</p>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div className="bg-primary/10 rounded-lg p-4 flex items-center gap-4 w-full">
          <div className="bg-primary rounded-full p-3 text-primary-foreground">
            <FolderIcon className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-medium">Gestiona tus categorías</h2>
            <p className="text-sm text-muted-foreground">
              Crea, edita y organiza tus categorías para mantener tus notas ordenadas
            </p>
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nueva categoría
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.id} href={`/categories/${category.id}`}>
            <Card className="h-full transition-all hover:shadow-md cursor-pointer border-l-4 border-l-primary">
              <CardHeader className="bg-primary/5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <FolderIcon className="h-5 w-5 text-primary" />
                    <CardTitle>{category.name}</CardTitle>
                  </div>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    {category.count} {category.count === 1 ? "nota" : "notas"}
                  </Badge>
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

