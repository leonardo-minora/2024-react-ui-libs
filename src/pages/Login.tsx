import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import task_0_Img from "@/assets/task-0.svg";
import task_1_Img from "@/assets/task-1.svg";
import task_2_Img from "@/assets/task-2.svg";
import task_3_Img from "@/assets/task-3.svg";
import task_4_Img from "@/assets/task-4.svg";

export const LoginPage = () => {
	return (
		<main className="h-screen flex w-full">
			<div className="bg-primary-foreground w-full h-full flex items-center justify-center p-16">
				<Carousel className="w-full max-w-xl">
					<CarouselContent>
						<CarouselItem>
							<div className="flex aspect-square bg-background rounded p-8">
								<img src={task_0_Img} alt="Contrate um motorista de carro" />
							</div>
						</CarouselItem>
						<CarouselItem>
							<div className="flex aspect-square bg-background rounded p-8">
								<img src={task_1_Img} alt="Alugue um carro elétrico" />
							</div>
						</CarouselItem>
						<CarouselItem>
							<div className="flex aspect-square bg-background rounded p-8">
								<img src={task_2_Img} alt="Alugue um carro elétrico" />
							</div>
						</CarouselItem>
						<CarouselItem>
							<div className="flex aspect-square bg-background rounded p-8">
								<img src={task_3_Img} alt="Alugue um carro elétrico" />
							</div>
						</CarouselItem>
						<CarouselItem>
							<div className="flex aspect-square bg-background rounded p-8">
								<img src={task_4_Img} alt="Alugue um carro elétrico" />
							</div>
						</CarouselItem>
					</CarouselContent>
					<CarouselNext />
					<CarouselPrevious />
				</Carousel>
			</div>
			<section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
				<Card className="w-full max-w-md">
					<CardHeader>
						<CardTitle className="text-2xl font-bold tracking-tighter">
							Entre com sua conta
						</CardTitle>
						<CardDescription>
							Utilize seu email e senha ou o GitHub para entrar
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div>
							<Label htmlFor="email">E-Mail</Label>
							<Input id="email" placeholder="exemplo@email.com" type="email" />
						</div>
						<div className="mt-4">
							<Label htmlFor="password">Senha</Label>
							<Input
								id="password"
								placeholder="sua senha secreta"
								type="password"
							/>
						</div>
						<Button className="mt-6 w-full">Entrar</Button>
						<div className="flex items-center gap-6 mt-4">
							<Separator />
							<span className="text-xs text-muted-foreground">ou</span>
							<Separator />
						</div>
						<Button variant="outline" className="mt-4 w-full">
							<GitHubLogoIcon className="mr-2" />
							Entrar com o GitHub
						</Button>
					</CardContent>
					<CardFooter>
						<p className="text-muted-foreground text-center text-sm">
							Ao entrar em nossa plataforma você concorda com nossos Termos de
							uso e Política de privacidade.
						</p>
					</CardFooter>
				</Card>
			</section>
		</main>
	);
};
