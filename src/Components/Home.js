import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {decrement, increment, changeName} from "../redux/CounterSlice"
import { setLatitude, setLongitude } from "../redux/Coordinates";

export default function Home(){
	const count = useSelector((state)=>state.counter.value);
	const name = useSelector((state)=>state.counter.name);
	const latitude = useSelector((state)=>state.coordinates.latitude)
	const longitude = useSelector((state)=>state.coordinates.longitude)


	const dispatch = useDispatch();
// Info portfolio news contact

	return(
			<div >

				{/* All cards */}
				<div className="flex w-screen h-[85vh] bg-black items-center justify-center">

					{/* Info */}
					<div className="flex w-screen h-[85vh] justify-center items-center">
						<div className="flex flex-wrap w-1/3 h-4/6rounded-md">

							<div className="w-60 h-48 bg-yellow-300 ml-2 mb-2 rounded-md ">
							</div>

							<div className=" w-60 h-48 bg-gray-50 ml-3 rounded-md ">
							</div>

							<div className="inline-block w-[97%] h-48 bg-green-500 text-white mx-2 rounded-md ">
									
								<div className="flex flex-wrap">
									<div className="flex  w-10 h-10 m-2 bg-white rounded-xl items-center justify-center">
										<img 
												src={require("../Images/icons/info.png")}
												className="w-5/6"
										/>
											
									</div>
									<div className="block">
										<h2 className=" font-cursive font-bold text-xl">About me</h2>
										<h2 className="w-24 h-1 bg-white rounded-md"></h2>
									</div>
										
								</div>
									
								<div className="flex break-words ml-12 flex-wrap">
									<h1 className="text-4xl font-bold font-name mr-2">Rakibul Alam Nahin</h1>
								</div>

								<div className="w-48 h-12 [perspective:1000px] overflow-hidden ml-36">
									<div className="relative h-full w-full [transform-style:preserve-3d] transition-all animate-aboutme">
										<div className="absolute inset-0 bg-blue-500 text-center justify-center">
											<h1 className="text-2xl mt-1 font-black">Web Developer</h1>
										</div >

										<div className="absolute inset-0 bg-red-500 text-center justify-center [transform:rotateX(180deg)] [backface-visibility:hidden]">
											<h1 className="text-2xl mt-1 font-black">App Developer</h1>

										</div>
							
									</div>
								</div>

							</div>

						</div>

						<div className="w-1/5 h-4/6 bg-red-500 ml-6 rounded-md">

						</div>

					</div>

				</div>

			</div>
	)
}