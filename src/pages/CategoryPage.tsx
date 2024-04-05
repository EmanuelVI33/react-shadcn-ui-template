import { useCategory } from "@/hooks/use-category"

export default function CategoryPage() {
  const { createCategory } = useCategory();

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1>
          Contenido de la categoria
        </h1>
  
        
      </div>
    </section>
  )
}
