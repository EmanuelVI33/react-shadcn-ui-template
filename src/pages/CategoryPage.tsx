import { CreateOrEditCategory } from "@/components/category/CreateOrEdit";

export default function CategoryPage() {
  return (
    <section className="w-2/3 m-auto">
      <div className="flex justify-between my-4">
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
              Lista de Programas
          </h1>
          <CreateOrEditCategory />
      </div>
    </section>
  )
}
