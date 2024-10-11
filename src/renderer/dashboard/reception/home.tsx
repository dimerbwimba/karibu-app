import ReceptionistBoard from "./_components/receptionist_board";
import ReceptionistName from "./_components/receptionist_name";

const ReceptionHospital = () => {
    return ( 
        <div className=" mt-12">
            <div className=" flex justify-center">
                <div className=" w-full ">
                    <ReceptionistName/>
                    <ReceptionistBoard/>
                </div>
            </div>
        </div>
     );
}
 
export default ReceptionHospital;