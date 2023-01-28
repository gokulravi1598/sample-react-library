import React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export interface ModeIconButtonProps {
    label: string
    disable?: boolean;
    variant: 'contained'|'outlined';
    icon:'DeleteIcon'|'SendIcon'|'CartIcon';
    onClick?: () => void;
    

}




export const ModeIconButton = ({label,variant,icon,disable, ...props }
    : ModeIconButtonProps) => {
    
//       var buttonIcon: any  ;
//    if(icon ='DeleteIcon'){
//     buttonIcon=<DeleteIcon />;
//    }else{
//     buttonIcon=<SendIcon/>;
//    }

   var icons= renderSwitch(icon);


//    console.log(label);
// console.log(buttonIcon);

    return (
        <Button 
        variant={variant}
        startIcon={icons}
        disabled={disable}
        >
        {label}
        </Button>
    );
}


function renderSwitch(icon:string): any{
    switch(icon){
    case 'DeleteIcon':
        return <DeleteIcon/>;
    case 'SendIcon' :
        return <SendIcon/>;
    case 'CartIcon' :
    return <AddShoppingCartIcon/>;
    }
    }