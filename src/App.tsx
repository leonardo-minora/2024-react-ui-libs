import { PlusCircle, Search, SquareCheckBig, SquareX } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "./components/ui/table";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./components/ui/dialog";
import { Label } from "./components/ui/label";

export const App = () => {
	return (
		<div className="p-6 max-x-4xl mx-auto space-y-4">
			<h1 className="text-3xl font-bold">Produtos</h1>
			<div className="flex items-center justify-between gap-2">
				<form className="flex items-center justify-between">
					<Input name="id" placeholder="ID do produto" />
					<Input name="name" placeholder="Nome do produto" />
					<Button type="submit" variant="link">
						<Search className="w-4 h-4 mr-2" />
						Filtrar resultado
					</Button>
				</form>
				<Dialog>
					<DialogTrigger asChild>
						<Button>
							<PlusCircle className="w-3 h-3 mr-2" />
							Novo produto
						</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Novo produto</DialogTitle>
							<DialogDescription>
								Criar um novo produto no sistema
							</DialogDescription>
						</DialogHeader>
						<form className="space-y-6">
							<div className="grid grid-cols-4 items-center text-right gap-3">
								<Label htmlFor="name">Produto</Label>
								<Input className="col-span-3" id="name" />
							</div>
							<div className="grid grid-cols-4 items-center text-right gap-3">
								<Label htmlFor="price">Preço</Label>
								<Input className="col-span-3" id="price" />
							</div>
							<DialogFooter>
								<DialogClose asChild>
									<Button variant="outline">
										<SquareX />
										Cancelar
									</Button>
								</DialogClose>
								<Button type="submit">
									<SquareCheckBig />
									Salvar
								</Button>
							</DialogFooter>
						</form>
					</DialogContent>
				</Dialog>
			</div>
			<div className="border rounded-lg p-2">
				<Table>
					<TableHeader>
						<TableHead>ID</TableHead>
						<TableHead>Produto</TableHead>
						<TableHead>Preço</TableHead>
					</TableHeader>
					<TableBody>
						{Array.from({ length: 10 }).map((_, index) => {
							return (
								<TableRow key={index}>
									<TableCell>wqkbmuu58</TableCell>
									<TableCell>Produto {index}</TableCell>
									<TableCell>R$ 192,00</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};
