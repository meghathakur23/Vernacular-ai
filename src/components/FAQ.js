import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Information from "../Assets/img/icons/information.png";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function FAQ() {
  const classes = useStyles();

  return (
    <div className="backhround-fixed" style={{  paddingBottom: "71px" }}>
      <div className="container">
        <br/>
        <br/>
        <h1 style={{ textAlign: "center", color: "#9393ff", margin: "20px" }}>
          Frequently Asked Questions
        </h1>
        <p className="color-grey" style={{ marginBottom: "50px", textAlign: "center" }}>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
          Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <div className={classes.root}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-label="Expand"
              aria-controls="additional-actions1-content"
              id="additional-actions1-header"
            >
              <FormControlLabel
                aria-label="Acknowledge"
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={
                  <img style={{ marginRight: "10px" }} src={Information} />
                }
                label="I acknowledge that I should stop the click event propagation"
              />
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                The click event of the nested action will propagate up and
                expand the accordion unless you explicitly stop it.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-label="Expand"
              aria-controls="additional-actions2-content"
              id="additional-actions2-header"
            >
              <FormControlLabel
                aria-label="Acknowledge"
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={
                  <img style={{ marginRight: "10px" }} src={Information} />
                }
                label="I acknowledge that I should stop the focus event propagation"
              />
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                The focus event of the nested action will propagate up and also
                focus the accordion unless you explicitly stop it.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-label="Expand"
              aria-controls="additional-actions3-content"
              id="additional-actions3-header"
            >
              <FormControlLabel
                aria-label="Acknowledge"
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={
                  <img style={{ marginRight: "10px" }} src={Information} />
                }
                label="I acknowledge that I should provide an aria-label on each action that I add"
              />
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                If you forget to put an aria-label on the nested action, the
                label of the action will also be included in the label of the
                parent button that controls the accordion expansion.
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography color="textSecondary">
                If you forget to put an aria-label on the nested action, the
                label of the action will also be included in the label of the
                parent button that controls the accordion expansion.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-label="Expand"
              aria-controls="additional-actions3-content"
              id="additional-actions3-header"
            >
              <FormControlLabel
                aria-label="Acknowledge"
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={
                  <img style={{ marginRight: "10px" }} src={Information} />
                }
                label="I acknowledge that I should provide an aria-label on each action that I add"
              />
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                If you forget to put an aria-label on the nested action, the
                label of the action will also be included in the label of the
                parent button that controls the accordion expansion.
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography color="textSecondary">
                If you forget to put an aria-label on the nested action, the
                label of the action will also be included in the label of the
                parent button that controls the accordion expansion.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-label="Expand"
              aria-controls="additional-actions3-content"
              id="additional-actions3-header"
            >
              <FormControlLabel
                aria-label="Acknowledge"
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={
                  <img style={{ marginRight: "10px" }} src={Information} />
                }
                label="I acknowledge that I should provide an aria-label on each action that I add"
              />
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                If you forget to put an aria-label on the nested action, the
                label of the action will also be included in the label of the
                parent button that controls the accordion expansion.
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography color="textSecondary">
                If you forget to put an aria-label on the nested action, the
                label of the action will also be included in the label of the
                parent button that controls the accordion expansion.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-label="Expand"
              aria-controls="additional-actions3-content"
              id="additional-actions3-header"
            >
              <FormControlLabel
                aria-label="Acknowledge"
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={
                  <img style={{ marginRight: "10px" }} src={Information} />
                }
                label="I acknowledge that I should provide an aria-label on each action that I add"
              />
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                If you forget to put an aria-label on the nested action, the
                label of the action will also be included in the label of the
                parent button that controls the accordion expansion.
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography color="textSecondary">
                If you forget to put an aria-label on the nested action, the
                label of the action will also be included in the label of the
                parent button that controls the accordion expansion.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
