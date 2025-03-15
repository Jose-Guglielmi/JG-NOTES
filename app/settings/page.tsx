"use client"

import { useState } from "react"
import { Moon, Sun, Laptop, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import { useAccentColor } from "@/components/theme-provider"
import { Badge } from "@/components/ui/badge"

export default function SettingsPage() {
  const { setTheme, theme } = useTheme()
  const { accentColor, setAccentColor } = useAccentColor()
  const [fontSize, setFontSize] = useState("medium")

  const colors = [
    { name: "Azul", value: "blue", class: "bg-blue-500" },
    { name: "Verde", value: "green", class: "bg-green-500" },
    { name: "Púrpura", value: "purple", class: "bg-purple-500" },
    { name: "Naranja", value: "orange", class: "bg-orange-500" },
    { name: "Rosa", value: "pink", class: "bg-pink-500" },
    { name: "Rojo", value: "red", class: "bg-red-500" },
    { name: "Amarillo", value: "yellow", class: "bg-yellow-500" },
    { name: "Turquesa", value: "teal", class: "bg-teal-500" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold">Configuración</h1>
        <p className="text-muted-foreground">Personaliza JG-NOTES a tu gusto</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-primary" />
              Apariencia
            </CardTitle>
            <CardDescription>Personaliza el aspecto visual de JG-NOTES</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <Label>Tema</Label>
              <div className="flex gap-2">
                <Button
                  variant={theme === "light" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setTheme("light")}
                  title="Tema claro"
                >
                  <Sun className="h-5 w-5" />
                  <span className="sr-only">Tema claro</span>
                </Button>
                <Button
                  variant={theme === "dark" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setTheme("dark")}
                  title="Tema oscuro"
                >
                  <Moon className="h-5 w-5" />
                  <span className="sr-only">Tema oscuro</span>
                </Button>
                <Button
                  variant={theme === "system" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setTheme("system")}
                  title="Tema del sistema"
                >
                  <Laptop className="h-5 w-5" />
                  <span className="sr-only">Tema del sistema</span>
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Tamaño de texto</Label>
              <Tabs value={fontSize} onValueChange={setFontSize}>
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="small">Pequeño</TabsTrigger>
                  <TabsTrigger value="medium">Mediano</TabsTrigger>
                  <TabsTrigger value="large">Grande</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                Color de acento
                <Badge variant="outline" className="ml-2 bg-primary/10 text-primary">
                  {colors.find((c) => c.value === accentColor)?.name || "Azul"}
                </Badge>
              </Label>
              <div className="flex flex-wrap gap-3">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setAccentColor(color.value as any)}
                    className={`h-10 w-10 rounded-full cursor-pointer transition-all ${
                      accentColor === color.value ? "ring-2 ring-offset-2 ring-primary scale-110" : "hover:scale-105"
                    }`}
                    title={color.name}
                  >
                    <span className={`h-full w-full rounded-full ${color.class} block`} />
                    <span className="sr-only">{color.name}</span>
                  </button>
                ))}
              </div>
              <div className="mt-4 p-4 rounded-md bg-primary/10 border border-primary/20">
                <p className="text-sm text-primary font-medium">
                  ¡Prueba los diferentes colores para personalizar tu experiencia!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-primary">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Preferencias
            </CardTitle>
            <CardDescription>Configura el comportamiento de la aplicación</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <Label>Vista predeterminada</Label>
              <Tabs defaultValue="categories">
                <TabsList className="grid grid-cols-2">
                  <TabsTrigger value="categories">Categorías</TabsTrigger>
                  <TabsTrigger value="notes">Notas</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="space-y-2">
              <Label>Ordenar notas por</Label>
              <Tabs defaultValue="date">
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="date">Fecha</TabsTrigger>
                  <TabsTrigger value="title">Título</TabsTrigger>
                  <TabsTrigger value="category">Categoría</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="space-y-2">
              <Label>Notificaciones</Label>
              <Tabs defaultValue="all">
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="all">Todas</TabsTrigger>
                  <TabsTrigger value="important">Importantes</TabsTrigger>
                  <TabsTrigger value="none">Ninguna</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="p-4 rounded-md bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20">
              <h3 className="font-medium text-primary mb-2">Consejo</h3>
              <p className="text-sm">
                Personaliza JG-NOTES según tus preferencias para una experiencia más agradable. ¡Prueba diferentes
                combinaciones de colores y ajustes!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 max-w-4xl">
        <Card className="overflow-hidden border-primary/20">
          <div className="bg-gradient-to-r from-primary to-primary/60 p-6 text-primary-foreground">
            <h2 className="text-xl font-bold mb-2">Vista previa de colores</h2>
            <p>Así se verán los elementos con el color de acento seleccionado</p>
          </div>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4">
                <Button>Botón primario</Button>
                <div className="flex gap-2">
                  <Badge>Etiqueta</Badge>
                  <Badge variant="outline">Contorno</Badge>
                </div>
                <div className="h-4 w-full bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-2/3"></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 border rounded-md bg-primary/5 border-primary/20">
                  <p className="text-sm font-medium text-primary">Mensaje informativo</p>
                </div>
                <Tabs defaultValue="tab1">
                  <TabsList>
                    <TabsTrigger value="tab1">Pestaña 1</TabsTrigger>
                    <TabsTrigger value="tab2">Pestaña 2</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

