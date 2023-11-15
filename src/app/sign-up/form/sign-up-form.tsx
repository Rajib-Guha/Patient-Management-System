"use client";

import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SignUpForm: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    const handleDateChange = (date: Date | Date[]) => {
        if (date instanceof Date) {
            setSelectedDate(date);
        }
    };

    const handleSubmit = (values: any) => {
        console.log(values);
    };

    return (
        <div className="signup-form bg-white shadow-md border-transparent border-blue-900 rounded mx-16 px-8 pt-12 pb-8 mb-8 relative mt-20">
            <Formik initialValues={{}} onSubmit={handleSubmit}>
                <Form>
                    <h1 className="text-4xl text-white font-bold border border-black text-center bg-cyan-950 font-serif w-56 h-20 rounded-md flex items-center justify-center absolute -top-10 left-1/2 transform -translate-x-1/2">Verdure</h1>
                    <div className="flex mt-6">

                        {/* Authorization Column */}
                        <div className="w-1/3">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">AUTHORIZATION</h2>
                            <Field
                                className="custom-input"
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
                            />
                            <Field
                                className="custom-input"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                            />
                            <Field
                                className="custom-input"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                            />
                            <Field
                                className="custom-input"
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                            />
                        </div>

                        {/* Address Column */}
                        <div className="w-1/3">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">ADDRESS</h2>
                            <div className='flex'>
                                <Field
                                    className="shadow appearance-none border rounded mb-4 w-2/5 py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id="street-number"
                                    name="street-number"
                                    placeholder="Street Number"
                                />
                                <Field
                                    className="shadow appearance-none border rounded ml-2 mb-4 w-1/2 py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id="street-name"
                                    name="street-name"
                                    placeholder="Street Name"
                                />
                            </div>
                            <div className='relative'>
                                <Field
                                    className="shadow appearance-none border rounded mb-4 w-2/5 py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id="suburb"
                                    name="suburb"
                                    placeholder="Suburb"
                                />
                                <Field
                                    as="select"
                                    className="shadow appearance-none border rounded ml-2 mb-4 w-1/2 py-4 px-4 pr-8 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                                    id="state"
                                    name="state"
                                    defaultValue=""
                                >
                                    <option value="" label='State' className='text-gray-700' disabled>State</option>
                                    <option value="NSW">New South Wales</option>
                                    <option value="VIC">Victoria</option>
                                    <option value="QLD">Queensland</option>
                                    <option value="WA">Western Australia</option>
                                    <option value="SA">South Australia</option>
                                    <option value="TAS">Tasmania</option>
                                    <option value="ACT">Australian Capital Territory</option>
                                    <option value="NT">Northern Territory</option>
                                </Field>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-11 text-gray-700">
                                    <svg
                                        className="h-5 w-5 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 1 7 7 7-7" />
                                    </svg>
                                </div>
                            </div>

                            <div className='flex'>
                                <Field
                                    className="shadow appearance-none border rounded mb-4 w-2/5 py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id="country"
                                    name="country"
                                    placeholder="Country"
                                />
                                <Field
                                    className="shadow appearance-none border rounded ml-2 mb-4 w-1/2 py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id="postcode"
                                    name="postcode"
                                    placeholder="Postcode"
                                />
                            </div>

                        </div>

                        {/* Extra Information Column */}
                        <div className="w-1/3 pl-14 pr-4">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">EXTRA INFORMATION</h2>
                            <div className="relative">
                                <Field
                                    as="select"
                                    className="shadow appearance-none border rounded ml-2 mb-4 py-4 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    id="gender"
                                    name="gender"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Gender</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                    <option value="O">Other</option>
                                </Field>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="h-5 w-5 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 1 7 7 7-7" />
                                    </svg>
                                </div>
                            </div>



                            {/* Calendar */}
                            <div className=" ml-2 w-full mb-4">
                            <Calendar onChange={handleDateChange as any} value={selectedDate} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        
                        <div className="flex items-center mr-52 mb-2">
                            <Field
                                type="checkbox"
                                id="rememberMe"
                                name="rememberMe"
                                className="mr-2 w-5 h-5"
                            />
                            <label htmlFor="rememberMe" className="text-gray-700 items-center">Remember me</label>
                        </div>

                       
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-1/3 py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </div>

                   
                    <div className="text-center mt-2">
                        <p className="text-gray-700">
                            Already have an account?{' '}
                            <a href="/signin" className="text-blue-600 hover:underline">Sign in</a>
                        </p>
                    </div>
                    

                </Form>
            </Formik>
        </div>
    );
};

export default SignUpForm;