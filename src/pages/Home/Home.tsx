import Button from "../../components/Button/Button";
import FlexboxRow from "../../components/FlexboxRow";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import {colors} from "../../constants";
import {NOT_IMPLEMENTED} from "../../utils";
import TypoAbout from "./components/TypoAbout/TypoAbout";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <Section style={{ paddingTop: "30px", paddingBottom: "30px" }}>
        <FlexboxRow style={{ gap: "100px" }}>
          <img
            src="/PersonPhoto.png"
            alt="img"
            className={classes.personPhoto}
          />
          <div>
            <TypoAbout>Привет</TypoAbout>
            <TypoAbout>
              Я UI/UX дизайнер с 3-ех летним опытом. Проектирую мобильные и
              веб-приложения, собираю ui-киты, исследую пользователей,
              разрабатываю сайты, улучшаю метрики, курирую дизайнеров.
            </TypoAbout>
            <FlexboxRow style={{ gap: "24px" }}>
              <Button
                label="Telegram"
                style={{ color: colors.lightblue }}
                onClick={NOT_IMPLEMENTED}
              />
              <Button
                label="CV"
                style={{ color: colors.red }}
                onClick={NOT_IMPLEMENTED}
              />
              <Button
                label="Behance"
                style={{ color: colors.darkblue }}
                onClick={NOT_IMPLEMENTED}
              />
              <Button
                label="Обо мне"
                style={{ color: colors.darkgrey }}
                onClick={NOT_IMPLEMENTED}
              />
            </FlexboxRow>
          </div>
        </FlexboxRow>
      </Section>
      <p className={classes.titleH2}>Последние проекты</p>
      <Section style={{ paddingTop: "30px" }}>
        <FlexboxRow>
          <div className={classes.projectLeftBlock}>
            <img src="/AkBarsLogo.png" alt="img" className={classes.projectAkBarsLogoImage}/>
            <div className={classes.projectDescriptionBlock}>
              <p className={classes.projectTitle}>Ак Барс Банк</p>
              <p className={classes.projectDescription}>
                Предложил свои решения в авторизованной зоне мобильного банка
              </p>
              <Button
                label="Ознакомиться"
                style={{ color: colors.darkgrey }}
                onClick={NOT_IMPLEMENTED}
              />
            </div>
            <p className={classes.projectTags}>
              {[
                "#android",
                "#benchmarking",
                "#гипотезы",
                "#fintech",
                "#тестовое",
              ].join(" ")}
            </p>
          </div>

          <Section
            style={{
              backgroundColor: colors.green,
            }}
          >
            <img
              src="/AkBarsPhone.png"
              alt="img"
              className={classes.projectPhoneImg}
            />
          </Section>
        </FlexboxRow>
      </Section>
    </>
  );
};

export default Home;
