import User from './User.png';
import Cadeado from './Cadeado.png';
import './index.css';

function App() {
  return (
    <div id='fundo'>
    
      <div className="login">
      <h1 id='logo'></h1>
      <h2 id='letreiro'>MACKLEAPS</h2>
      <h4 id='letreiroadm'>ADMIN</h4>
      
      <form>
        <img src={User} className='Input-IconEmail'></img>
          <input
            type="email"
            id="email"
            placeholder="Usuários, DRT..."
            required
          />
        <a id='esqueceuEmail' href=''>Esqueceu seu Email?</a><br></br>
        <img src={Cadeado} className='Input-IconSenha'></img>
          <input
            type="password"
            id="password"
            placeholder="Sua senha"
            required
          /><br></br>
        <a href='' id='esqueceuSenha'>Esqueceu sua Senha?</a><br></br>
        <button type="submit" id='BotaoEntrar'>Entrar</button>
      </form>
    </div>
  </div>
);
}

export default App;
