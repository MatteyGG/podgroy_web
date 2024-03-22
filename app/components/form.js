"use client"

//import image from './2.jpg';
import Image from 'next/image'

var image = '/1.jpg'
export default function Form() {
    const handlerSelect = () => {
        console.log('/' + document.getElementById("select_id").value + '.jpg')
        let image = document.querySelector('#img')
        image.src = '/' + document.getElementById("select_id").value + '.jpg'
    } 
    return (<div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full">
            <form action="https://formbold.com/s/FORM_ID" method="POST" className="grid gap-5 grid-cols-2">
                <div className='container md:block hidden'>
                    <Image style={{objectFit: "contain"}} width={600} height={500} src={image} id='img' loading ='eager' className=' rounded-lg md:block hidden' alt={"image"}/>
                </div>
                <div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="fName"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Имя
                                </label>
                                <input
                                    type="text"
                                    name="fName"
                                    id="fName"
                                    placeholder="Иван"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="lName"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Фамилия
                                </label>
                                <input
                                    type="text"
                                    name="lName"
                                    id="lName"
                                    placeholder="Иванов"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    <label
                        htmlFor="fName"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Почта
                    </label>
                    <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="podgoroy.pz@gmail.com"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />

                    <label
                        htmlFor="fName"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Номер телефона
                    </label>
                    <input
                        type="number"
                        name="fName"
                        id="fName"
                        placeholder="+7 909 997 55 97"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />

                    <div className="mb-5">
                        <label
                            htmlFor="guest"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Какой номер?
                        </label>
                        <select defaultValue={'DEAFAULT'} onClick={handlerSelect} id="select_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5">
                            <option value="1">Выберите комнату</option>
                            <option value="2">Красная комната</option>
                            <option value="3">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                        <label
                            htmlFor="guest"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Сколько будет гостей?
                        </label>
                        <input
                            type="number"
                            name="guest"
                            id="guest"
                            placeholder="5"
                            min="0"
                            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>

                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="date"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Дата
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="time"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Время заезда
                                </label>
                                <input
                                    type="time"
                                    name="time"
                                    id="time"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    >
                        Submit
                    </button>
                    <p className='font-semibold text-gray-400'>Aдминистрация оставляет за собой право отказать в размещении с животными.</p>
                </div >
            </form>
        </div>
    </div>

    );
}