import Button from "@/components/Button/Button";
import FlexboxRow from "@/components/FlexboxRow";
import Header from "@/components/Header/Header";
import Section from "@/components/Section/Section";
import { colors } from "@/constants";
import { NOT_IMPLEMENTED } from "@/utils";
import ProjectInfo from "./components/ProjectInfo/ProjectInfo";
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

      <FlexboxRow style={{ paddingBottom: "30px", height: "787px" }}>
        <Section
          style={{
            paddingTop: "30px",
            marginRight: 0,
            flex: "1 1 0px",
            width: 0,
          }}
        >
          <div className={classes.projectLeftBlock}>
            <img
              src="/AkBarsLogo.png"
              alt="img"
              className={classes.projectAkBarsLogoImage}
            />
            <ProjectInfo
              title="Ак Барс Банк"
              desc="Предложил свои решения в авторизованной зоне мобильного банка"
              tags={[
                "#android",
                "#benchmarking",
                "#гипотезы",
                "#fintech",
                "#тестовое",
              ]}
              onNavigateClick={NOT_IMPLEMENTED}
            />
          </div>
        </Section>

        <Section
          style={{
            backgroundColor: colors.green,
            marginLeft: 0,
            flex: "1 1 0px",
            width: 0,
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <img
            src="/AkBarsPhone.png"
            alt="img"
            className={classes.projectPhoneImg}
          />
        </Section>
      </FlexboxRow>

      <FlexboxRow style={{ paddingBottom: "30px", height: "787px" }}>
        <Section
          style={{
            backgroundColor: colors.yellow,
            marginRight: 0,
            flex: "1 1 0px",
            width: 0,
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <img
            src="/DenetPhone.png"
            alt="img"
            className={classes.projectPhoneImg}
          />
        </Section>
        <Section
          style={{
            paddingTop: "30px",
            marginLeft: 0,
            flex: "1 1 0px",
            width: 0,
          }}
        >
          <div className={classes.projectLeftBlock}>
            <FlexboxRow>
              <img
                src="/DenetLogo.png"
                alt="img"
                className={classes.denetLogoImage}
              />
            </FlexboxRow>
            <ProjectInfo
              title="Мобильное web3 хранилище"
              desc="Внедрение и проектирование основного функционала для выхода на рынок"
              tags={[
                "#облачное хранилище",
                "#android",
                "#IOS",
                "#исследования",
                "#web3",
                "#тестирования",
              ]}
              onNavigateClick={NOT_IMPLEMENTED}
            />
          </div>
        </Section>
      </FlexboxRow>

      <FlexboxRow style={{ paddingBottom: "30px", height: "787px" }}>
        <Section
          style={{
            paddingTop: "30px",
            marginRight: 0,
            flex: "1 1 0px",
            width: 0,
          }}
        >
          <div className={classes.projectLeftBlock}>
            <img
              src="/Web3Logo.png"
              alt="img"
              className={classes.projectAkBarsLogoImage}
            />
            <ProjectInfo
              title="Web3 Bank"
              desc="Концепт приложения web3 банкнига"
              tags={["#concept", "#mobile", "#benchmarking", "#fintech"]}
              onNavigateClick={NOT_IMPLEMENTED}
            />
          </div>
        </Section>

        <Section
          style={{
            backgroundColor: colors.black,
            marginLeft: 0,
            flex: "1 1 0px",
            width: 0,
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <img
            src="/Web3Phone.png"
            alt="img"
            className={classes.web3PhoneImg}
          />
        </Section>
      </FlexboxRow>
    </>
  );
};

export default Home;
