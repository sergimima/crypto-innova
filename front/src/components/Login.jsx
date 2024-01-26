import { QueryClientProvider, QueryClient, useQuery } from "react-query"
import { useForm } from "react-hook-form";


export function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    //console.log(email, password)
    const response = await fetch(`http://localhost:3000/users/login/${email}/${password}`);
    const datos = await response.json();
    //console.log(datos);
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span>Iniciar sesión </span>
                <span>Regístrate</span>
              </h6>
              <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Iniciar sesión </h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="form-group">
                            <input type="email" name="email" className="form-style" placeholder="Email" id="logemail" autoComplete="none" {...register("email")} />
                            <i className="input-icon fa fa-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input type="password" name="password" className="form-style" placeholder="Password" id="logpass" autoComplete="none" {...register("password")} />
                            <i className="input-icon fa fa-lock"></i>
                          </div>
                          <button type="submit" className="btn mt-4">
                          Iniciar sesión 
                          </button>
                        </form>
                        
                      </div>
                    </div>
                  </div>
                  <div class="card-back">	
                    <div class="center-wrap">	
                      <div class="section text-center">	
                        <h4 class="mb-4 pb-3">Sign Up</h4>	
                        <div class="form-group"> 
                          <input type="text" name="logname" class="form-style" placeholder="Your Full Name" id="logname" autocomplete="none"/>	
                          <i class="input-icon fa fa-user"></i>	
                        </div>	
                        <div class="form-group mt-2"> 
                          <input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="none"/>	
                          <i class="input-icon fa fa-at"></i>	
                        </div>	
                        <div class="form-group mt-2"> 
                          <input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="none"/>	
                          <i class="input-icon fa fa-lock"></i>	
                        </div>	
                        <a href="#" class="btn mt-4">Signup</a>	
                      </div>	
                    </div>	
                  </div>	
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}