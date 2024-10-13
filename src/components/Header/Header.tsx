import FlexboxRow from "../FlexboxRow";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <FlexboxRow className={classes.headerContainer}>
      <FlexboxRow style={{gap: '16px'}}>
        <img src="/Emoji.png" alt="img" className={classes.headerEmojiImg}/>
        <p>Юлтыев Айнур</p>
      </FlexboxRow>
      <p>UI UX дизайнер</p>
    </FlexboxRow>
  );
};

export default Header;
