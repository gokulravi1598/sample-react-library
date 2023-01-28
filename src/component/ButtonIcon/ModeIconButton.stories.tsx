import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ModeIconButton} from "./ModeIconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';


export default{
    tittle : "Component/ButtonIcon",
    component: ModeIconButton,
    argsTypes:{
      
    },

}as ComponentMeta<typeof ModeIconButton>

// const iconOptions: any = {
//    "DeleteIcon" :<DeleteIcon />,
//    "SendIcon":<SendIcon/>
// };
const Template : ComponentStory<typeof ModeIconButton>=(args)=> <ModeIconButton {...args}/>;

export const TwitterIcon = Template.bind({});

TwitterIcon.args={
    
    variant:'contained',
    label:"Button",
    disable:false,
    icon:"SendIcon"
};