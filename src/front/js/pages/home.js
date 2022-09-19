import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/subs.css";
import "../../styles/footer.css";
import { Suscription } from "../component/subscription";
import { Ubicacion } from "../component/ubicacion";
import { Header } from "../component/navbar";
import { Footer } from "../component/footer";
import { Contacto } from "../component/contacto";
import fondo from '../../img/signup_img.jpg'
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
	<div>
		<div className="container-fluid mx-0" id="navbarMenu">
				<img/>
			<div className="titular">
				<h1>Bienvenido a SyF FIT</h1>
				<Link to="/login">
			 		<button className="btn btn-primary">Ingrese a su perfil</button>
		    	</Link>
			</div>
		</div>
		
		<div className="container-fluid">
			<Suscription />
		</div>
		{/* <div className="Ubi">
			<Ubicacion />
		</div> */}
		{/* <div className="contacto">
			<Contacto />
		</div> */}
	</div>
	);
};
