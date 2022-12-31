const PersonnelCard = ({name,unit,position,image}) => {
    return ( 
        <div className="flex flex-col gap-4 max-w-sm p-2 rounded-sm bg-project-light-sky">
            <div class="aspect-w-1 aspect-h-1">
                <img src={image} alt={name} class="w-full h-full object-center object-contain" />
            </div>
            <div className="flex flex-col gap-2">
                <p>name : {name}</p>
                <p>unit: {unit}</p>
                <p>position : {position}</p>
            </div>
        </div>
     );
}
 
export default PersonnelCard;