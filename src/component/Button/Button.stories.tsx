import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button  from "./Button";

export default{
    title : "Component/Button",
    component: Button,

    argsTypes:{
        // outline:{
        //     options:['primary','secondary','success','danger','warning','info','dark'],
        //     control :{type :'radio'}
        // }

    },
}as ComponentMeta<typeof Button>;

const Template : ComponentStory<typeof Button> = (args)=> <Button {...args}/>;

export const sampleButton = Template.bind({});

sampleButton.args={
 outline : 'primary',
 label:"Sample Button",
 size:'lg',
 disable:false
};

