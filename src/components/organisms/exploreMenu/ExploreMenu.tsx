import { Box, Divider, Grid, MenuList, Paper, Typography } from "@mui/material";
import React from "react";
import ExploreMenuButton from "../../molecules/exploreMenuButton/ExploreMenuButton";
import { ReactComponent as EntrepreneurshipIcon } from "../../../images/Vector.svg";
import { ReactComponent as CareerSuccess } from "../../../images/CareerSuccess.svg";
import { ReactComponent as CommunicationSkills } from "../../../images/Communication Skills.svg";
import { ReactComponent as CorporateCulture } from "../../../images/Corporate Culture.svg";
import { ReactComponent as Economics } from "../../../images/Economics.svg";
import { ReactComponent as Education } from "../../../images/Education.svg";
import { ReactComponent as HealthNutrition } from "../../../images/Health Nutrition.svg";
import { ReactComponent as History } from "../../../images/History.svg";
import { ReactComponent as MarketingSales } from "../../../images/Marketing Sales.svg";
import { ReactComponent as MoneyInvestments } from "../../../images/Money Investments.svg";
import { ReactComponent as Motivation } from "../../../images/Motivation Inspiration.svg";
import { ReactComponent as Nature } from "../../../images/Nature Environment.svg";
import { ReactComponent as PersonalDevelopment } from "../../../images/Personal Development.svg";
import { ReactComponent as Politics } from "../../../images/Politics.svg";
import { ReactComponent as Productivity } from "../../../images/Productivity.svg";
import { ReactComponent as Relationship } from "../../../images/SexRelationship.svg";
import { ReactComponent as Science } from "../../../images/Science.svg";
import { ReactComponent as Psycology } from "../../../images/Psychology.svg";

const menuData = [
  {
    id: 1,
    iconComponent: EntrepreneurshipIcon,
    buttonText: "Entrepreneurship",
    path: "entrepreneurship",
  },
  {
    id: 2,
    iconComponent: Politics,
    buttonText: "Politics",
    path: "politics",
  },
  {
    id: 3,
    iconComponent: MarketingSales,
    buttonText: "Marketing & Sales",
    path: "marketing-sales",
  },
  {
    id: 4,
    iconComponent: Science,
    buttonText: "Science",
    path: "science",
  },
  {
    id: 5,
    iconComponent: HealthNutrition,
    buttonText: "Health & Nutrition",
    path: "health-nutrition",
  },
  {
    id: 6,
    iconComponent: PersonalDevelopment,
    buttonText: "Personal Development",
    path: "personal-development",
  },
  {
    id: 7,
    iconComponent: Economics,
    buttonText: "Economics",
    path: "economics",
  },
  {
    id: 8,
    iconComponent: History,
    buttonText: "History",
    path: "history",
  },
  {
    id: 9,
    iconComponent: CommunicationSkills,
    buttonText: "Communication Skills",
    path: "communication-skills",
  },
  {
    id: 10,
    iconComponent: CorporateCulture,
    buttonText: "CorporateCulture",
    path: "corporate-culture",
  },
  {
    id: 11,
    iconComponent: Motivation,
    buttonText: "Motivation & Inspiration",
    path: "motivation-inspiration",
  },
  {
    id: 12,
    iconComponent: MoneyInvestments,
    buttonText: "Money & Investments",
    path: "money-investments",
  },
  {
    id: 13,
    iconComponent: Psycology,
    buttonText: "Psychology",
    path: "psychology",
  },
  {
    id: 14,
    iconComponent: Productivity,
    buttonText: "Productivity",
    path: "productivity",
  },
  {
    id: 15,
    iconComponent: Relationship,
    buttonText: "Sex & Relationship",
    path: "sex-relationship",
  },
  {
    id: 16,
    iconComponent: Nature,
    buttonText: "Nature & Environment",
    path: "nature-environment",
  },
  {
    id: 17,
    iconComponent: CareerSuccess,
    buttonText: "Career & Success",
    path: "career-success",
  },
  {
    id: 18,
    iconComponent: Education,
    buttonText: "Education",
    path: "education",
  },
];

type Props = {
  onClick?: any;
};

function ExploreMenu(props: Props) {
  const { onClick } = props;
  const menuList = menuData.map((menuItem) => (
    <Grid item xs={4}>
      <ExploreMenuButton
        key={menuItem.id}
        iconComponent={menuItem.iconComponent}
        buttonText={menuItem.buttonText}
        onClick={() => onClick(menuItem.path)}
      />
    </Grid>
  ));

  return (
    <Paper
      sx={{
        bgcolor: "footerBgColor.main",
        px: "250px",
        py: "30px",
        mx: 0,
      }}
      elevation={0}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle3" color="secondary.main">
          Explore by category
        </Typography>
        <Typography variant="subtitle3" color="extraTextColor.main">
          See recently added titles
        </Typography>
        <Typography variant="subtitle3" color="extraTextColor.main">
          See popular titles
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <MenuList>
        <Grid container columnSpacing={25} rowSpacing={6}>
          {menuList}
        </Grid>
      </MenuList>
    </Paper>
  );
}

export default ExploreMenu;
