import { Component} from "react";
import Image from 'next/image';
import {f1} from "@/services/type/type";
import { JSX } from "react/jsx-runtime";
import styles from './modal.module.css';


class Modal extends Component<{children: JSX.Element,changeIsActive:f1}>{
 
    handleClose = (event:Event):void => {      
       const { changeIsActive } = this.props;
        if (event.target === event.currentTarget) {
            changeIsActive();
        }
    };
    

    render() {
        const {children,changeIsActive} = this.props;
        return ( 
            <>
                <div className={styles.backdrop}/>     
                <div className={styles.overlay} onClick={()=>this.handleClose}>
                    <div className={styles.modal}>
                        <button type="button" onClick={changeIsActive} className={styles.close}>                               
                        <Image                           
                            src="/close_24px.svg"
                            alt="menu_24px"           
                            width={24}
                            height={24}
                            priority
                        />
                        </button>
                        <div>{children}</div>
                    </div>
                </div>      
            </>                      
        );
    }    
}


export default  Modal;