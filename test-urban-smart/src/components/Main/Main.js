import '../Main/Main.css';
import { useFormWithValidation } from '../Validation/Validation'

function Main ({ onLogin }) {

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(formValidation.data);
    }

    const formValidation = useFormWithValidation()

    return (
        <section className="form">
            <form onSubmit={handleSubmit}  className="form__container" name='loginForm'>
                <label className="form__field">Email
                    <input  value={formValidation.data.login} onChange={formValidation.handleChangeData}
                            type="login" 
                            name="login" 
                            className="form__input" 
                            id="login"
                            minLength="2"
                            maxLength="40" 
                            />
                </label>
                <label className="form__field">Пароль
                    <input  value={formValidation.data.password} onChange={formValidation.handleChangeData}  
                            type="text" 
                            name="password" 
                            className="form__input" 
                            id="password"
                            minLength="6" 
                            maxLength="20"
                            required />
                </label>
                <span className="form__error">{formValidation.error}</span>
                <button type="submit" className={`${formValidation.isValid ? "form__button_active" : "form__button_inactive"} form__button` } disabled={`${formValidation.isValid ? "" : "disabled"}`}>Войти</button>
            </form>
        </section>
    )
}

export default Main;