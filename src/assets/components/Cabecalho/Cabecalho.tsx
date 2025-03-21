import estilo from './Cabecalho.module.css'
import logotipo from '../../logotipo.png'

function Cabecalho() {
    return (
        <header className={estilo.cabecalho}>
            <img src={logotipo} alt="logotipo"></img>
            <a href="#">login</a>
        </header>
    );
}

export default Cabecalho;