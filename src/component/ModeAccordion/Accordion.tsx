import React ,{ useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface AccordianProps {
    data ? : any;
    disable?: boolean; 
    expand ?: boolean;  
     
}

// const [accordianData, setData] = React.useState<string[]>([
//     ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.',
//     ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
// ]);



export const AccordionComponent=({
    data , disable,expand ,...props
}: AccordianProps) => {
    
  const expandResponse = expand ? <ExpandMoreIcon />: "";

    return(
       
        data.map((data: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal)=>(
            <Accordion disabled={disable} TransitionProps={{ unmountOnExit: true }} >
            <AccordionSummary
              expandIcon={expandResponse}
              aria-controls="panel1a-content"
              id="panel1a-header"
              {...props}
            >
              <Typography >Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="red">
                {data}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))
       
    );
};