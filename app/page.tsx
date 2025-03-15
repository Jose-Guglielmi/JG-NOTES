import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { StickyNoteIcon as NoteIcon, Settings, FolderIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[80vh] max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
            JG-NOTES
          </h1>
          <p className="text-xl text-muted-foreground">Tu aplicación personal para organizar notas y pensamientos</p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="outline" className="bg-primary/10 text-primary">
              Organiza
            </Badge>
            <Badge variant="outline" className="bg-primary/10 text-primary">
              Crea
            </Badge>
            <Badge variant="outline" className="bg-primary/10 text-primary">
              Personaliza
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <Link href="/categories" className="w-full">
            <Card className="h-full transition-all hover:shadow-md border-l-4 border-l-primary">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2">
                  <FolderIcon className="h-5 w-5 text-primary" />
                  Categorías
                </CardTitle>
                <CardDescription>Explora y gestiona tus categorías</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Visualiza todas tus categorías y crea nuevas para organizar mejor tus notas.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Ver categorías
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link href="/notes" className="w-full">
            <Card className="h-full transition-all hover:shadow-md border-l-4 border-l-primary">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2">
                  <NoteIcon className="h-5 w-5 text-primary" />
                  Notas recientes
                </CardTitle>
                <CardDescription>Accede a tus notas más recientes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Visualiza y edita rápidamente las últimas notas que has creado o modificado.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Ver notas
                </Button>
              </CardFooter>
            </Card>
          </Link>
        </div>

        <div className="mt-8 w-full">
          <Card className="bg-gradient-to-r from-primary/20 to-transparent border border-primary/20">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium mb-1">Personaliza tu experiencia</h3>
                  <p className="text-sm text-muted-foreground">Configura JG-NOTES según tus preferencias</p>
                </div>
                <Link href="/settings">
                  <Button className="w-full sm:w-auto">
                    <Settings className="h-4 w-4 mr-2" />
                    Configuración
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

