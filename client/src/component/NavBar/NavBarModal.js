import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import MenuIcon from "@material-ui/icons/Menu";
import Scroll from "react-scroll";
import CloseIcon from "@material-ui/icons/Close";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function NavBarModal() {
  let scroll = Scroll.animateScroll;
  const scrollTop = (e) => {
    scroll.scrollToTop();
    e.preventDefault();
    handleClose();
  };

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <a href="/">
        <img width="180px" src="./logo.png" alt="logo" />
      </a>
      <div className="close-icon">
        <CloseIcon onClick={handleClose} />
      </div>
      <ul>
        <li>
          <a href="#" onClick={scrollTop}>
            Accueil
          </a>
        </li>
        <li>
          <a href="/">A propos de nous</a>
        </li>
        <li>
          <a href="/">Nos réalisations</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Contactez-nous</a>
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      <MenuIcon fontSize="large" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
