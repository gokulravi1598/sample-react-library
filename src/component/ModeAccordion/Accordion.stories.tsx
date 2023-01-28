import React from "react";
import { useState } from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AccordionComponent } from "./Accordion"


export default {
    title: "Component/Accordian",
    component: AccordionComponent,
    argsTypes: {


    },
} as ComponentMeta<typeof AccordionComponent>;
const Template: ComponentStory<typeof AccordionComponent> = (args) => <AccordionComponent {...args} />


export const sampleAccordian = Template.bind({});

sampleAccordian.args = {
    data: [
       "Sample Accordian1 details",
       "Sample Accordian2 details"
    ],
    expand : true
}

// export function AccordianSample(){





// interface accordianDetails{
// summary:string,
// details:string

// }

// const [accordianData, setData] = useState<accordianDetails>(
//  {
//     summary:"Accordian1",
//     details:"",
//  }
// );

// setData({
//     summary:"",
//     details:""
// });

// }

