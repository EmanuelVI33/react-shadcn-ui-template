import { useCategory } from "@/hooks/use-category"

function TableCategory() {
    const { categories, isLoading, isError } = useCategory();

    if (isLoading) {
        return <h1>Error al cargar</h1>;
    }

    if (isError) {
        return 'Error al obtener los datos'
    }

    console.log(categories);

    return (
        <div>
            {/* <p>{categories}</p> */}
        </div>
    )
}

export default TableCategory
