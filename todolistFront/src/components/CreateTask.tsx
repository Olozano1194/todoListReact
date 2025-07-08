//estados
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
//form
import { useForm } from "react-hook-form";
//Api
import { CreateTask } from "../api/task.api";
//Model
import type { TaskModel } from "../models/task.model";
//Mensajes
import { toast } from "react-hot-toast";
//img
import Logo from '../../public/favicon-32x32.png'

const CreateTasks = () => {
    const params = useParams<{ id?: string }>();
    //const navigate = useNavigate();
    const { register, handleSubmit, formState: {errors}, reset } = useForm<TaskModel>();

    const onSubmit = handleSubmit(async (data: TaskModel) => {
        try {
            const requestData = {
                description: data.description,
                completed: data.completed
            }

            // if (params.id) {
            //     await updateMember(parseInt(params.id), requestData);
            //     //console.log('Actualizando miembro:', params.id);
            //     toast.success('Miembro Actualizado', {
            //         duration: 3000,
            //         position: 'bottom-right',
            //         style: {
            //             background: '#4b5563',   // Fondo negro
            //             color: '#fff',           // Texto blanco
            //             padding: '16px',
            //             borderRadius: '8px',
            //         },

            //     });                 
            // }else {
                await CreateTask(requestData);
                //console.log('Respuesta del servidor:',rest.data);            
                reset();
                toast.success('Tarea Creada', {
                    duration: 3000,
                    position: 'bottom-right',
                    style: {
                        background: '#4b5563',   // Fondo negro
                        color: '#fff',           // Texto blanco
                        padding: '16px',
                        borderRadius: '8px',
                    },

                });   
            
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Error al registrar la tarea';
            toast.error(errorMessage, {
                duration: 3000,
                position: 'bottom-right',
            });            
        }
    });

    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         try {
    //             if (params.id) {
    //                 const response = await getMember(parseInt(params.id));

    //                 //formateamos la fecha antes de pasarla al formulario
    //                 // if (response.dateInitial && response.dateFinal) {
    //                 //     response.dateInitial = formatDate(response.dateInitial);
    //                 //     response.dateFinal = formatDate(response.dateFinal);                        
    //                 // }
                    
    //                 reset(response);
    //             }
    //         }catch (error) {
    //             console.error('Error al obtener el miembro',error);
    //         }
    //     }
    //     fetchUserData();
    // }, [params.id, reset]);

    return (
        <main className="w-full flex flex-col p-2">
            <div className="w-full flex justify-center  pb-10">
                <h1 className="flex items-center text-center text-2xl md:text-4xl"><img className='w-9 h-7 rounded-lg mr-3' src={Logo} alt="" />ToDo <span className="text-green-400">List</span></h1>
            </div>
            <form
                onSubmit={onSubmit} 
                className="w-full flex flex-col gap-6 md:flex-row md:items-center md:pb-8">
                <label htmlFor="description">
                    <input 
                        type="text"
                        className="w-full p-2 border-solid border-b-2 border-gray-400 outline-none text-lg md:text-xl md:px-0"
                        placeholder="Agrega la tarea"
                        {...register('description',{
                            required: {
                                value: true,
                                message: 'Tarea requerida'
                            },
                            minLength: {
                                value: 10,
                                message: 'La tarea debe tener como minimo 10 letras'
                            },
                            maxLength: {
                                value: 30,
                                message: 'La tarea debe tener como maximo 30 letras'
                            },
                            pattern: {
                                    value: /^[a-zA-Z\s]+$/,
                                    message: 'tarea invalida'
                            },
                        })} 
                    />
                </label>
                {
                    errors.description && <span className='text-red-500 text-sm'>{errors.description.message}</span>
                }
                <div className="w-full flex justify-center pb-6 md:pb-0 md:justify-end">
                    <button className="w-48 bg-green-200 font-bold rounded-2xl p-2 cursor-pointer text-lg hover:bg-green-600 hover:text-gray-100 md:text-xl">
                    { params.id ? 'Actualizar' : 'Agregar' }
                </button>

                </div>                
            </form>
        </main>
    );
};
export default CreateTasks;