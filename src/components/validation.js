export default (data) =>{
    let errors ={};
    if(!data.email.include('@')){
        errors.e1 ='Email is not valid';
    }
    if(!data.email){
        errors.e2 ='Ingrese Email'
    }
    if(data.email.lenght >35){
        errors.e3 ='Menos de 35 caracteres'
    }
    if(!/\d/.test(data.password)){
        errors.p1 = 'Al menso debe tener un numero'
    }
    if(data.password.lenght <6 || data.password.length > 10){
        errors.p2 = 'Longitud inconrrecta'
    }

    return errors

};