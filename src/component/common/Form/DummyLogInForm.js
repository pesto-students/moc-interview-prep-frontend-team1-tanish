import React , {useState}from "react";
import {Link} from "react-router-dom";

function DummyLogInForm ({submitFunction}){
    const [value, setValue] = useState("");
    const handleChange = (e) => {
        setValue(e.target.value);
      };
    return (
        <div class="font-sans antialiased bg-grey-lightest">
                <div class="w-full bg-grey-lightest" >
                    <div class="container mx-auto py-8">
                        <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                            <div class="py-4 px-8 text-black text-xl border-b border-grey-lighter font-bold text-center">Dummy Login </div>
                                <form onSubmit={submitFunction}>
                                <div class="py-4 px-8">
                                    <div class="mb-4">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" htmlfor="role">Select Role</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="role" type="text" list="roles" value={value} onChange={handleChange}/>
                                        <datalist id="roles">
                                            <option value="Student"/>
                                            <option value="Interviewer"/>
                                        </datalist>
                                    </div>
                                    {value?
                                        (<> 
                                            {value==="Student"?
                                                <>
                                                    <div class="mb-4">
                                                        <label class="block text-grey-darker text-sm font-bold mb-2" htmlfor="email">Email Address</label>
                                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Your email address" defaultValue="	asleym031@gmail.com"/>
                                                    </div>
                                                    <div class="mb-4">
                                                        <label class="block text-grey-darker text-sm font-bold mb-2" htmlfor="password">Password</label>
                                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="Your secure password" defaultValue="asley"/>
                                                    </div>
                                                    <div class="flex items-center justify-center mt-8">
                                                        <button class="bg-rose-300 hover:bg-rose-200 text-grey-darker font-bold py-2 px-6 rounded-full" type="submit">
                                                            Sign In
                                                        </button>
                                                    </div>
                                                </>
                                                :<>
                                                    <div class="mb-4">
                                                        <label class="block text-grey-darker text-sm font-bold mb-2" htmlfor="email">Email Address</label>
                                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Your email address" defaultValue="matias.lehtola@gmail.com"/>
                                                    </div>
                                                    <div class="mb-4">
                                                        <label class="block text-grey-darker text-sm font-bold mb-2" htmlfor="password">Password</label>
                                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="Your secure password" defaultValue="pwd"/>
                                                    </div>
                                                    <div class="flex items-center justify-center mt-8">
                                                        <button class="bg-rose-300 hover:bg-rose-200 text-grey-darker font-bold py-2 px-6 rounded-full" type="submit">
                                                            Sign In
                                                        </button>
                                                    </div>
                                                </>
                                            }

                                        </>):<></>
                                    }
                                </div>
                                </form>
                        </div>
                        <p class="text-center my-4">
                            <Link to="/signup" class="text-grey-dark text-sm no-underline hover:text-grey-darker">Does not  have an account ? <span class="underline underline-offset-4 text-blue-500">SignUp</span></Link>
                        </p>
                    </div>
                </div>
            </div>

    );
}

export default DummyLogInForm;