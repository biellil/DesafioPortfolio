import style from './siderbar.module.scss';
import { Skills } from './skills';

export function Siderbar(){
    return (
        <aside className={style.Siderbar}>
            <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"    
                />

            <div className={style.Profile}>
                <img src="https://github.com/biellil.png" />
               <strong> José Gabriel</strong>

               <span>desenvolvedor Front-End</span> 
            </div>

          
            <Skills/>
           
        </aside>

    
    );
}