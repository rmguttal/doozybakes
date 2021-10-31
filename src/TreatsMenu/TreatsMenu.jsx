import React from "react";
import SectionHeading from "../shared/SectionHeading";
import MenuCard from "./MenuCard";
import { menuData } from "./menuData";

function TreatsMenu() {
  return (
    <div className="section" id="treatsMenu">
      <SectionHeading titleText="Treats Menu" />
      <div id="menu-container">
        <MenuCard
          sourceImage={menuData.dM.img}
          titleText={menuData.dM.name}
          descTxt={menuData.dM.description}
          halfPrice={menuData.dM.halfPrice}
          fullPrice={menuData.dM.fullPrice}
        />
        <MenuCard
          sourceImage={menuData.dAC.img}
          titleText={menuData.dAC.name}
          descTxt={menuData.dAC.description}
          halfPrice={menuData.dAC.halfPrice}
          fullPrice={menuData.dAC.fullPrice}
        />
        <MenuCard
          sourceImage={menuData.oldFa.img}
          titleText={menuData.oldFa.name}
          descTxt={menuData.oldFa.description}
          halfPrice={menuData.oldFa.halfPrice}
          fullPrice={menuData.oldFa.fullPrice}
        />
        <MenuCard
          sourceImage={menuData.healer.img}
          titleText={menuData.healer.name}
          descTxt={menuData.healer.description}
          halfPrice={menuData.healer.halfPrice}
          fullPrice={menuData.healer.fullPrice}
        />
        <MenuCard
          sourceImage={menuData.khaara.img}
          titleText={menuData.khaara.name}
          descTxt={menuData.khaara.description}
          halfPrice={menuData.khaara.halfPrice}
          fullPrice={menuData.khaara.fullPrice}
        />
        <MenuCard
          sourceImage={menuData.assorted.img}
          titleText={menuData.assorted.name}
          descTxt={menuData.assorted.description}
          halfPrice={menuData.assorted.halfPrice}
          fullPrice={menuData.assorted.fullPrice}
        />
        <MenuCard
          sourceImage={menuData.dMBites.img}
          titleText={menuData.dMBites.name}
          descTxt={menuData.dMBites.description}
          halfPrice={menuData.dMBites.halfPrice}
          fullPrice={menuData.dMBites.fullPrice}
        />
        <MenuCard
          sourceImage={menuData.dACBites.img}
          titleText={menuData.dACBites.name}
          descTxt={menuData.dACBites.description}
          halfPrice={menuData.dACBites.halfPrice}
          fullPrice={menuData.dACBites.fullPrice}
        />
        <MenuCard
          sourceImage={menuData.pupNibbles.img}
          titleText={menuData.pupNibbles.name}
          descTxt={menuData.pupNibbles.description}
          halfPrice={menuData.pupNibbles.halfPrice}
          fullPrice={menuData.pupNibbles.fullPrice}
        />
        <MenuCard
          sourceImage={menuData.bananaLoaf.img}
          titleText={menuData.bananaLoaf.name}
          descTxt={menuData.bananaLoaf.description}
          halfPrice={menuData.bananaLoaf.halfPrice}
          fullPrice={menuData.bananaLoaf.fullPrice}
        />
        <MenuCard
          sourceImage={menuData.orangeLoaf.img}
          titleText={menuData.orangeLoaf.name}
          descTxt={menuData.orangeLoaf.description}
          halfPrice={menuData.orangeLoaf.halfPrice}
          fullPrice={menuData.orangeLoaf.fullPrice}
        />
      </div>
    </div>
  );
}

export default TreatsMenu;
