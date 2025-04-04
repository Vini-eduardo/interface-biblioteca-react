import estilo from './Welcome.module.css';
import TabelaAluno from '../Tabelas/TabelaAluno/TabelaAluno';
import TabelaLivro from '../Tabelas/TabelaLivro/TabelaLivro';
import TabelaEmprestimo from '../Tabelas/TabelaEmprestimo/TabelaEmprestimo';


function Welcome() {


    return (
        <main className={estilo.principal}>
            <TabelaAluno/>
            <TabelaLivro/>
            <TabelaEmprestimo/>
        </main>
    )
}

export default Welcome