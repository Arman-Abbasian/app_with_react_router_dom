const PersonnelAvatar = ({personnel}) => {
    return ( 
        <div>
            {personnel && 
            <div className="flex items-center flex-wrap">
                {personnel.map(item=>(
                <p className="flex items-center justify-center w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 rounded-full ring-2 ring-project-light-sky overflow-hidden -ml-1 bg-project-dark-green"><img src={item.image} className="w-full h-full object-center object-contain" /></p>
                ))} 
            </div>
            }
         </div>
     );
}
 
export default PersonnelAvatar;