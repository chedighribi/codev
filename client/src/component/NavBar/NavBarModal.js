import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import MenuIcon from "@material-ui/icons/Menu";
import Scroll from "react-scroll";
import CloseIcon from "@material-ui/icons/Close";

function getModalStyle() {
  // const top = 50;
  // const left = 50;

  return {
    top: `0%`,
    left: `0%`,
    // transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    minHeight: 600,
    backgroundImage: "linear-gradient(to bottom right, #6564e8, #9b7af2)",
    boxShadow: theme.shadows[5],
  },
  ul: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: "20px",
  },
  li: {
    padding: "20px 0",
    marginLeft: "30px",
    width: "80%",
    borderBottom: "thin dotted white",
    textTransform: "none",
  },
  a: {
    color: "white",
    fontSize: "16px",
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
      <div className="nav-modal-top">
        <a href="/">
          <img width="180px" src="./logo.png" alt="logo" />
        </a>
        <div className="close-icon">
          <CloseIcon onClick={handleClose} />
        </div>
      </div>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <a href="#" onClick={scrollTop} className={classes.a}>
            Accueil
          </a>
        </li>
        <li className={classes.li}>
          <a href="/" className={classes.a}>
            A propos de nous
          </a>
        </li>
        <li className={classes.li}>
          <a href="/" className={classes.a}>
            Nos réalisations
          </a>
        </li>
        <li className={classes.li}>
          <a href="/" className={classes.a}>
            Blog
          </a>
        </li>
        <li className={classes.li}>
          <a href="/" className={classes.a}>
            Contactez-nous
          </a>
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
