import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShieldMoonIcon from '@mui/icons-material/ShieldMoon';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

export default function Acco() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='accr'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{color: "#fff"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  style={{color: "#fff"}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '10%', flexShrink: 0 }}>
            <Inventory2Icon/>
          </Typography>
          <Typography sx={{ color: '#fff' }}>
            How to manage time and get good marks for trips
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{color: "#fff", margin: "10px 0"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: "#fff"}} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '10%', flexShrink: 0 }}>
            <ShieldMoonIcon/>
          </Typography>
          <Typography sx={{ color: '#fff' }}>
            How to regulate transactions over time
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{color: "#fff"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: "#fff"}} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '10%', flexShrink: 0 }}>
            <LocalAtmIcon/>
          </Typography>
          <Typography sx={{ color: '#fff' }}>
            Withdrawing money through an ATM
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}