const PersonnelCarousel = ({personnel}) => {
    return ( 
        <div>
            {personnel && 
            <div className="flex items-center flex-wrap">
                {personnel.map(item=>(
                <p className="flex items-center justify-center w-5 h-5 rounded-full ring-1 ring-project-light-sky overflow-hidden -ml-1"><img src={item.image} /></p>
                ))} 
            </div>
            }
         </div>
     );
}
 
export default PersonnelCarousel;