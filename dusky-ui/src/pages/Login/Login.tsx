import { Button, Checkbox, Text } from "../../components";
import { Input } from "./Form/Input";
import { Header } from "./Header";

export function Login() {
  return (
    <div className={
      " h-screen flex flex-col items-center justify-center "
    }>
      <Header />

      <form className='flex flex-col items-stretch mt-10 w-full max-w-sm gap-4'>
        <Input type="email" label="Endereço de e-mail" placeholder="Digite seu e-mail"/>

        <Input type="password" label="Sua senha" placeholder="******"/>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  )
}
