
type Props={
	name:string,
	placeholder:string,
	onChange: (e:any)=> void
}

export default function Input ({name, placeholder, onChange}:Props){
    return (
        <div>
            <label className="lable">{name}</label>
            <input 
                onChange={(e)=>onChange(e.target.value)} 
                placeholder={placeholder} 
                className="input-text"
            />
        </div>
    )
}
