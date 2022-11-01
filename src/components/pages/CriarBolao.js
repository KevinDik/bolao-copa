import styles from './CriarBolao.module.css'
import logo from '../assets/logo.svg'
import diego from '../assets/diego.svg'
import luh from '../assets/luh.svg'
import mayk from '../assets/mayk.svg'
import rodrigo from '../assets/rodrigo.svg'
import Input from '../layouts/Input'
import Button from '../layouts/Button'
import confirm from '../assets/confirm.svg'
import phone from '../assets/phone.svg'

export default function CriarBolao() {
    return(
        <div className={styles.container}>
            <div>
                <div>
                    <img src={logo} alt="Logo principal"/>
                    <h1>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>
                    <div>
                        <ul>
                            <li><img src={diego} alt="icone do diego"/></li>
                            <li><img src={luh} alt="icone da luh"/></li>
                            <li><img src={mayk} alt="icone do mayk"/></li>
                            <li><img src={rodrigo} alt="icone do rodrigo"/></li>
                        </ul>
                        <h2><span>+12.592</span> pessoas já estão usando</h2>
                        <Input placeholder="Qual é o nome do seu Bolão"
                        type="text"
                        name="name"
                        />
                        <Button text="Criar meu Bolão"/>
                        <p>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>
                        <hr></hr>
                        <div>
                            <div>
                                <img src={confirm} alt="Imagem de confirmação"/>
                                <p>+2.034<span>Bolões criados</span></p>
                            </div>
                            <div>
                                <img src={confirm} alt="Imagem de confirmação"/>
                                <p>+192.847<span>Palpites enviados</span></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={phone} alt="Telefones modelo apple"/>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>)
}