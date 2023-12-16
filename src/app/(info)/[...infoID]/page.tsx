import React from "react";
import { infoArr } from "../../../libs/contants";
import ErrorFile from "../../../components/error/ErrorFile";
type props = {
  params: {
    infoID: string | number | undefined;
  };
};

const page = ({ params: { infoID } }: props) => {
  console.log(infoID);

  const searchParam = () => {
    return infoArr.filter(
      (infoElem) => String(infoID).toLocaleLowerCase() === infoElem.title
    );
  };

  const fileServe = () => {
    const result = searchParam();
    if (result == undefined) {
      // return ErrorFile(404);
    } else if (!result.length) {
      // return ErrorFile(404);
    } else {
      console.log(`${result[0].urlLink} page is served by the server`);
      return result[0].filename();
    }
  };
  return <>{fileServe()}</>;
  // return <></>;
};

export default page;
