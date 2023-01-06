// import npm react-hook-form
import { useForm } from "react-hook-form";
import './form.css';
import '../../../src/index.css';

const Form = () => {

	const {
		handleSubmit,
		register,
		formState: { errors, isValid },
	} = useForm();

  // authentification
  const authentification = async(data) =>{
    const requestInfos = new Request("https://fakestoreapi.com/auth/login",
    {
      method:'post',
      body: JSON.stringify(data),
    }
    );
    const request = await fetch(requestInfos);
    const response = await request.JSON();
    return response;
  } 

	// soumission du form

	const onSubmit = (formValues) => {
    if (isValid) {

      authentification(formValues).then((token) => 
      console.log(token));

    }
	};

	return (
		<>
			<h3 className="title-form">Formulaire</h3>
			<form className="form-case" method="post" onSubmit={handleSubmit(onSubmit)}>
				<p>
					<label>Email : </label>
					<input
						type="email"
						{...register("email", {
							required: "email required",
							minLength: {
								value: 6,
								message: "very short",
							},
						})}
					/>

          {/* utiliser l'identifiant du chmaps saisi dans register */}

          <small> {errors.email?.message} </small>


				</p>

				<p>
					<label>Password : </label>
					<input
						type="password"
						{...register("password", {
							required: "mdp requiered",
							minLength: {
								value: 2,
								message: "very short",
							},
						})}
					/>

				</p>
				<p>
					<button className="but-form" type="submit">Submit</button>
					{/* <input type="submit" value="Submit" /> */}
				</p>
			</form>
		</>
	);
};

export default Form;
