import style from './skilss.module.scss';



export function Skills(){

    
  function hamdleCreateNewComment() {
    event.preventDefault()
  };

    return(

        <footer className={style.skills}>
        <strong>skills</strong>
      <div  className={style.container}>
       <div>
         <a href="#" onClick={hamdleCreateNewComment} >Git</a>
         <a href="#" onClick={hamdleCreateNewComment}>Css</a>
         <a href="#" onClick={hamdleCreateNewComment}>Github</a>
         <a href="#" onClick={hamdleCreateNewComment}>Javascrip</a>
         <a href="#" onClick={hamdleCreateNewComment} >ReactJs</a>
       </div>
     
     
     
       
       <div>
         <a  href="#" onClick={hamdleCreateNewComment} >Html</a>
         <a href="#" onClick={hamdleCreateNewComment}>Typescript</a>
         <a href="#" onClick={hamdleCreateNewComment}>FireBase</a>
         <a href="#" onClick={hamdleCreateNewComment}>Next.Js</a>
       
       </div>
     </div>
     </footer>
    );

}