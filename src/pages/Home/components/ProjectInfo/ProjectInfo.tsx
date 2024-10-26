import Button from "@/components/Button/Button";
import {colors} from "@/constants";
import React from "react";
import classes from "./ProjectInfo.module.css";

type Props = {
  title: string;
  desc: string;
  tags: string[];
  onNavigateClick: () => void;
};

const ProjectInfo: React.FC<Props> = ({
  title,
  desc,
  tags,
  onNavigateClick,
}) => {
  return (
    <>
      <div className={classes.projectDescriptionBlock}>
        <p className={classes.projectTitle}>{title}</p>
        <p className={classes.projectDescription}>{desc}</p>
        <Button
          label="Ознакомиться"
          style={{ color: colors.darkgrey }}
          onClick={onNavigateClick}
        />
      </div>
      <p className={classes.projectTags}>{tags.join(" ")}</p>
    </>
  );
};

export default ProjectInfo;
