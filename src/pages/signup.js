import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { userSignup } from '../controllers/user';
import "./login.css"

const SignupPage = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({ name: '', lastname: '', email: '', password: '' });
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const result = await userSignup(formData);
    if (result) {
      history.push('/');
    }
  }
  return(
    <>
    <div className="container_login">
      <div className="icon_section">
        <img className="icon_DM" src="../img/icon_DM.svg" />
      
      <div className="title_big">
        <h1>Cakes Cakes Cakes</h1>
        </div>
      </div>
   
      <div className="contariner_form">
        <div className="logo_section">
          <img class="logo" src="../img/logo_complet.svg"/>
        </div>
      <form onSubmit={handleFormSubmit}>
        <input
          label="Tu nombre"
          name="name"
          placeholder=" "
          value={formData.name}
          onChange={(value) => setFormData({ ...formData, name: value })} 
        />
      <input  label="Correo electrónico *"
        name="email"
        placeholder=" "
        value={formData.email}
        onChange={(value) => setFormData({ ...formData, email: value })} />
        <br>
      <input type="password"
        label="Password *"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={(value) => setFormData({ ...formData, password: value })} />
      </br>            
      <input type="submit" value="Submit"/>
      <input type="submit" formtarget="_blank" value="Submit to a new window/tab"/>
      <input
        type="password"
        label="Password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={(value) => setFormData({ ...formData, password: value })} 
      />
      <div className="info_use">
        <p>Hacemos uso responsable de tus datos. Clic</p>
      </div>
      <button>Quiero registrarme!</button>
      <span>or</span>
      <Link to="/login">LOG IN</Link>
      </form>     
      </div>
    </div>
    </>
    
    );
  }
  
  export default SignupPage;