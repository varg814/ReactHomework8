import React, { useState } from "react";
import MobileSvgWrapper from "../../molecules/MobileSvgWrapper/MobileSvgWrapper";
import MainSvgWrapper from "../../molecules/MainSvgWrapper/MainSvgWrapper";

function SvgSection() {
  return (
    <>
      <MainSvgWrapper />
      <MobileSvgWrapper />
    </>
  );
}

export default SvgSection;
