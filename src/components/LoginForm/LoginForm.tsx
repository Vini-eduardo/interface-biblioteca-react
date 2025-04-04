import estilo from './loginForm.module.css';

function LoginForm() {
    return (
        <section className={estilo.formSection}>
        <h3>LOGIN</h3>
           
        <form action="" className={estilo.formLogin}>
           <label>
               E-mail
               <input 
               type="email" 
               placeholder="informe o seu e-mail"
               className={estilo.emailLogin}/>
           </label>

           <label>
            Senha
              <input 
              type="password" 
              placeholder="Informe sua senha"
              className={estilo.passwordLogin} />
           </label>

           <input
             type="button"
             value="Entrar"
             className={estilo.buttonLogin}
             />
           </form>
           </section>
    )
}

export default LoginForm