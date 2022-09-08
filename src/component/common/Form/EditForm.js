import React from "react";


function EditForm ({submitform,formFields}){
    console.log(formFields);
    return (
        <div class="mt-4 sm:mt-0">
            <div class="md:grid md:grid-cols-4 md:gap-6">
                <div class="mt-0 md:mt-4 md:col-span-3 ml-72">
                <form onSubmit={submitform}>
                    <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label htmlFor="email" class="block text-sm font-medium text-gray-700">Email</label>
                                    <input class="mt-1  w-full  sm:text-sm border border-black-500 h-8"   type="text" id="email"  defaultValue = {formFields.email}/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label htmlFor="company" class="block text-sm font-medium text-gray-700">Company</label>
                                    <input class="mt-1  w-full  sm:text-sm border border-black-500 h-8" type="text" id="company"   defaultValue = {formFields.company} />
                                </div> 
                                <div class="col-span-6 sm:col-span-3">
                                    <label htmlFor="name" class="block text-sm font-medium text-gray-700">Name</label>
                                    <input  class="mt-1  w-full  sm:text-sm border border-black-500 h-8" type="text" id="name"  defaultValue = {formFields.name}/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label htmlFor="skills" class="block text-sm font-medium text-gray-700">Skills</label>
                                    <input class="mt-1  w-full  sm:text-sm border border-black-500 h-8" type="text" id="skills"   defaultValue = {formFields.skills}/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label htmlFor="contact" class="block text-sm font-medium text-gray-700">Contact</label>
                                    <input class="mt-1  w-full  sm:text-sm border border-black-500 h-8" type="text" id="contact"  defaultValue = {formFields.contact}/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label htmlFor="image" class="block text-sm font-medium text-gray-700">Image</label>
                                    <input class="mt-1  w-full  sm:text-sm border border-black-500 h-8" type="text" id="image"  defaultValue = {formFields.image}/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label htmlFor="degree" class="block text-sm font-medium text-gray-700">Degree</label>
                                    <input type="text" name="degree" id="degree"  class="mt-1  w-full  sm:text-sm border border-black-500 h-8" defaultValue = {formFields.degree}/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label htmlFor="about" class="block text-sm font-medium text-gray-700">About</label>
                                    <input class="mt-1  w-full  sm:text-sm border border-black-500 h-8" type="text"  id="about" defaultValue = {formFields.about}/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label htmlFor="experience" class="block text-sm font-medium text-gray-700">Experience</label>
                                    <input class="mt-1  w-full  sm:text-sm border border-black-500 h-8" type="text" name="last_name" id="experience" defaultValue = {formFields.experience}/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label htmlFor="topics" class="block text-sm font-medium text-gray-700">Topics</label>
                                    <input class="mt-1  w-full  sm:text-sm border border-black-500 h-8" type="text" id="topics" defaultValue = {formFields.topics}/>
                                </div>
                            </div>
                         </div>
                        <div class="px-4 py-3 bg-gray-50 text-left sm:px-6">
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                 Update Details
                            </button>
                        </div>
                    </div>
                 </form>
                </div>
             </div>
        </div>
    );
}

export default EditForm;