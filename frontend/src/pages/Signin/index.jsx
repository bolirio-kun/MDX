import './Signin.css'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function Signin() {
    return (
        <div className='container'>
            <div className='card'>
                <h2>Entrar na sua conta e negocie com seguança!</h2>
                <p>Acesse e aproveite uma experiencia segura dentro do MDX</p>

                <div className='socialLogin'>
                    <button className='google'>
                        <FcGoogle size={24}/>
                    </button>
                    <button className='facebook'>
                        <FaFacebookF size={24}/>
                    </button>
                </div>

                <div className='divider'>
                    <span>Ou conect com</span>
                </div>

                <label htmlFor="email">E-mail</label>
                <input type="email" id='email' placeholder='Digite seu E-mail' />

                <button className='acessarBtn'>Acessar</button>

                <p className='register'>Nao tem uma conta? <a href="/SingUp">Cadatre-se</a>
                </p>
            </div>

            <p className='terms'>Ao continuar, voce concorda com os <a href="#">Termos de uso</a> e <a href="#"> políticas de Privacidade</a> da MDX e seus parceiros, e em receber comunicações da MDX</p>

        </div>
    )
}