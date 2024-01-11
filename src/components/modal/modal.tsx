import { Component,ReactNode} from "react";
import Image from 'next/image';
import {f1} from "@/services/type/type";
import styles from './Modal.module.css';



class Modal extends Component<{children: ReactNode,changeIsActive:f1}>{
    componentDidMount() {        
        window.addEventListener('keydown', this.handleKeyClose);
    }

    componentWillUnmount() {       
        window.removeEventListener('keydown', this.handleKeyClose);
    }
 
    handleKeyClose = (event:any) => {   
      if (event.code === 'Escape') {
        this.props.changeIsActive();
      }
    };

 
    handleClose = (event:any) => {
        console.log(event);
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
                <div className={styles.overlay} onClick={this.handleClose}>
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