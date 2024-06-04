import React from 'react';

function SignupForm() {
  return (
    <div className="max-w-md  bg-white rounded-md ">
      <h3 className="text-2xl  ">Join Us</h3>
      <p className=" text-sm font-normal text-slate-500 mb-[26px]">Sign up using your email and set up a password</p>
        <div className='grid grid-flow-row grid-rows-5 gap-[15px]'>
      <div className="h-[61]">
        <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
        <input type="email" id="email" className="w-full mt-1 p-2 border rounded-md" placeholder="Your email" />
      </div>

      <div className="">
        <label htmlFor="fullname" className="block text-gray-700 font-semibold">Full Name</label>
        <input type="text" id="fullname" className="w-full mt-1 p-2 border rounded-md" placeholder="Your full name" />
      </div>

      <div className="">
        <label htmlFor="fullname" className="block text-gray-700 font-semibold">Phone Number</label>
        <input type="number" id="fullname" className="w-full mt-1 p-2 border rounded-md" placeholder="Phone Number" />
      </div>

      <div className="">
        <label htmlFor="fullname" className="block text-gray-700 font-semibold">Password</label>
        <input type="password" id="fullname" className="w-full mt-1 p-2 border rounded-md" placeholder="Password" />
      </div>

      <div className="">
        <label htmlFor="fullname" className="block text-gray-700 font-semibold">Confirm Password</label>
        <input type="password" id="fullname" className="w-full mt-1 p-2 border rounded-md" placeholder="Confirm Password" />
      </div>
      </div>

      <div className='mt-[60px]'>
        <label htmlFor="career-path" className="block text-gray-700 font-semibold">Your Career Path</label>
        <select id="career-path" className="w-full mt-1 p-2 border rounded-md">
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="manager">Manager</option>
        </select>
        <p className="text-sm font-normal text-slate-500 ">You will be able to change the path in the future in your profile section.</p>
      </div>


      <div className="flex items-center mt-6">
      <input
        type="checkbox"
        id="terms"
        name="terms"
        // checked={isChecked}
        // onChange={handleCheckboxChange}
        className="mr-2"
      />
      <label htmlFor="terms" className="text-sm">Accept terms and conditions</label>
    </div>

      <div className="mt-6">
        <button className='w-20 h-10 bg-slate-900 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm'>
          Submit
        </button>
      </div>
    </div>
  );
}

export default SignupForm;
