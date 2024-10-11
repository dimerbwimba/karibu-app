import { Outlet } from "react-router-dom"
import SideBar from "../navigation/side-bar"
import MenuNav from "../navigation/main-nav";


const MainLayout = () =>{

	return (
		<div className="flex">
			<SideBar/>
			<div className=" w-[74.5%]  ">
				<div className="flex flex-col">
					<MenuNav/>
					<Outlet/>
				</div>
			</div>
		</div>
	)
}
export default MainLayout;