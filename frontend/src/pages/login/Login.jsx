/* eslint-disable no-mixed-spaces-and-tabs */
const Login = () => {
    	 return (
    		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    				<h1 className='text-3xl font-semibold text-center text-white'>
    					Login
    					<span className='text-blue-800'> ChatApp</span>
    				</h1>
    
    				<form className="text-white">
    					<div>
    						<label className='label p-2'>
    							<span className='text-white text-base label-text'>Username</span>
    						</label>
    						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
    					</div>
    
    					<div>
    						<label className='label'>
    							<span className='text-white text-base label-text'>Password</span>
    						</label>
    						<input
    							type='password'
    							placeholder='Enter Password'
    							className='w-full input input-bordered h-10'
    						/>
    					</div>
    					<a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
    						{"Don't"} have an account?
    					</a>
    
    					<div>
    						<button className='text-white btn btn-block btn-sm mt-2'>Login</button>
    					</div>
     				</form>
     			</div>
    		</div>
     	);
     };
     export default Login;