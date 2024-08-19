import { useContext } from 'react';
import { UserContext } from '../context/UserContext'
import perro from '../assets/registro7.png'

const Registro = () => {
    const { userType, changeUserType, userRegister, user, handleUser, handleForm, getImage } = useContext(UserContext);
    const clickInput = () => {
        const file = document.getElementById('image');
        file.click();
    }
    


    return (
        <div className="tablainicial align-items-stretch py-5">
            <div className="tablalateral shadow border-secondary-subtle">
                <img className='m-3' src={perro} alt="" style={{ width: 250 }} />
            </div>
            <div className="tablaregistro shadow border-secondary-subtle px-4 align-items-center">
                <h1 className="pt-3 pb-3">Registro</h1>
                <div className='d-flex flex-column w-100 mb-3'>
                    <label htmlFor='type'>
                        Selecciona tipo de Usuario (Cliente o Profesional)
                    </label>
                    <select defaultValue="cliente" id="type" name="type" className="imputs w-100 py-2" onChange={(e) => changeUserType(e.target.value)}>
                        <option value='cliente'>Cliente</option>
                        <option value='profesional'>Profesional</option>
                    </select>
                </div>
                <form onSubmit={handleForm}>
                    <div className="d-flex p-2">
                        <label className="formaregistro p-2" htmlFor="name">Nombre:</label>
                        <input id='name' name='nombre' onChange={handleUser} className="imputs mx-1" type="text" placeholder="Nombre y Apellido"  defaultValue={user.nombre} />
                    </div>
                    <div className="d-flex p-2">
                        <label className="formaregistro p-2" htmlFor="image">Imagen:</label>
                        <button type="button" onClick={() => { clickInput() }} className='bnt btn-sm botonvermas'>Subir imagen</button>
                        <input id="image" accept='.jpg, .png' onChange={getImage} name='image' type="file" className="imputs mx-1 d-none" placeholder="URL img" />
                        <img src={user.img} width={50} height={50} className='ms-2' />
                    </div>
                    <div className="d-flex p-2">
                        <label className="formaregistro p-2" htmlFor="direccion">Dirección:</label>
                        <input id='direccion' name='direccion' onChange={handleUser} className="imputs mx-1" type="text" placeholder="Dirección"  defaultValue={user.direccion} />
                    </div>
                    <div className="d-flex p-2">
                        <label className="formaregistro p-2" htmlFor="celular">Celular:</label>
                        <input id='celular' name='celular' onChange={handleUser} className="imputs mx-1" type="tel" placeholder="Celular"  defaultValue={user.celular} />
                    </div>

                    {userType === 'profesional' &&
                        <div className='d-flex p-2'>
                            <label className="formaregistro p-2" htmlFor="especialidad">Especialidad:</label>
                            <select className='imputs' name='especialidad' onChange={handleUser} id='especialidad' defaultValue={user.especialidad}>
                                <option  defaultValue='01'>Especialidad 1</option>
                                <option  defaultValue='02'>Especialidad 2</option>
                                <option  defaultValue='03'>Especialidad 3</option>
                                <option  defaultValue='04'>Especialidad 4</option>
                                <option  defaultValue='otra'>Otra</option>
                            </select>
                        </div>
                    }

                    <div className="d-flex p-2">
                        <label className="formaregistro p-2" htmlFor="email">Email:</label>
                        <input id='email' name='email' onChange={handleUser} className="imputs mx-1" type="email" placeholder="Email"  defaultValue={user.email} />
                    </div>
                    <div className="d-flex p-2">
                        <label className="formaregistro p-2" htmlFor="pass">Password:</label>
                        <input id='password' name='password' onChange={handleUser} className="imputs mx-1" type="password" placeholder="Password"  defaultValue={user.password} />
                    </div>
                    <button className="botonregistro shadow btn btn-lg m-5">Registrarse</button>
                </form>
                
            </div>

        </div>
    )
}

export default Registro
