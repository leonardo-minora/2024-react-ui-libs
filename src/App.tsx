import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Separator } from "./components/ui/separator";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./components/ui/carousel";

import carEletricImg from "./assets/react.svg";
import carDriverImg from "./assets/react.svg";

export const App = () => {
	return (
		<main>
			<div>
				<Carousel>
					<CarouselContent>
						<CarouselItem>
							<div>
								<img src={carDriverImg} alt="Contrate um motorista de carro" />
							</div>
						</CarouselItem>
						<CarouselItem>
							<div>
								<img src={carEletricImg} alt="Alugue um carro elétrico" />
							</div>
						</CarouselItem>
					</CarouselContent>
					<CarouselNext />
					<CarouselPrevious />
				</Carousel>
			</div>
			<section>
				<Card>
					<CardHeader>
						<CardTitle>
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
						<Button>Entrar</Button>
						<div>
							<Separator />
							<span>ou</span>
							<Separator />
						</div>
						<Button variant="outline">
							<GitHubLogoIcon/>
							Entrar com o GitHub
						</Button>
					</CardContent>
					<CardFooter>
						<p>
							Ao entrar em nossa plataforma você concorda com nossos Termos de
							uso e Política de privacidade.
						</p>
					</CardFooter>
				</Card>
			</section>
		</main>
	);
};
