import { useCategory } from "@/hooks/category/use-category"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

function TableCategory() {
    const { categories = [], isLoading, isError } = useCategory();

    if (isLoading) {
        return <h1>Error al cargar</h1>;
    }

    if (isError) {
        return 'Error al obtener los datos'
    }

    return (
        <Table>
            <TableCaption>Lista de categorías</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Código</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Descripción</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {categories && categories.map((category) => {
                    const { id, name, description } = category;

                    return (
                        <TableRow key={id}>
                            <TableCell className="font-medium">{id}</TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell>{description}</TableCell>
                        </TableRow>
                    );
                }
                )}
            </TableBody>
        </Table>
    )
}

export default TableCategory
