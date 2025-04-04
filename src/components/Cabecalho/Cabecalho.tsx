import estilo from './Cabecalho.module.css'
import logotipo from '../../assets/logotipo.png'
import { APP_ROUTES } from '../../appConfig';

function Cabecalho() {
    return (
        <header className={estilo.cabecalho}>
            <a href={APP_ROUTES.ROUTE_HOME}
             className={estilo.imgLogo}>
                <img src={logotipo} alt="logotipo"></img>
            </a>
            <a href={APP_ROUTES.ROUTE_LOGIN}>login</a>
            <a href={APP_ROUTES.ROUTE_LIVRO}>Livro</a>
            <a href={APP_ROUTES.ROUTE_EMPRESTIMO}>Empréstimos</a>
            <a href={APP_ROUTES.ROUTE_ALUNO}>Aluno</a>
        </header>
    );
}

export default Cabecalho;