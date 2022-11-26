import React from "react";
import Main from "../components/main";
import scrolljs from "../script/scrolljs";
import Topbar from "../components/topbar";
function index() {
  return (
    <>
      <Topbar />
      <div className="wrapper">
        <Main
          modelname={"Model 3"}
          ptext={"Schedule a Test Drive"}
          urlimage="https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD"
          primary="Custom Order"
          secondary="Existing Inventory"
        />

        <Main
          modelname={"Model Y"}
          ptext={"Schedule a Test Drive"}
          urlimage="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70"
          primary="Custom Order"
          secondary="Existing Inventory"
        />
        <Main
          modelname={"Model S"}
          ptext={"Schedule a Test Drive"}
          urlimage="https://tesla-cdn.thron.com/delivery/public/image/tesla/538ac149-d103-4834-9d38-641d8ae447ef/bvlatuR/std/4096x2560/Homepage-Model-S-Desktop-LHD"
          primary="Custom Order"
          secondary="Existing Inventory"
        />
        <Main
          modelname={"Model X"}
          ptext={"Schedule a Test Drive"}
          urlimage="https://tesla-cdn.thron.com/delivery/public/image/tesla/ddc135ed-1638-40fb-8ab1-f8045059ecef/bvlatuR/std/4096x2560/Homepage-Model-X-Desktop-LHD"
          primary="Custom Order"
          secondary="Existing Inventory"
        />
        <Main
          modelname={"Solar Panels"}
          ptext={"Lowest Cost Solar Panels in America"}
          urlimage="https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D"
          primary="Order Now"
          secondary="Learn More"
        />
        <Main
          modelname={"Solar Roof"}
          ptext={"Produce Clean Energy From Your Roof"}
          urlimage="https://tesla-cdn.thron.com/delivery/public/image/tesla/4a41ec0e-7316-46a8-8ce9-e2f195ba644d/bvlatuR/std/2880x1800/Homepage-SolarRoof-Desktop-Global?quality=auto-medium&format=auto"
          primary="Order Now"
          secondary="Learn More"
        />
        <Main
          modelname={"Accessories"}
          urlimage="https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/0x0/dd739764-bcaa-4263-9488-8c73bc9fb046"
          primary="Order Now"
        />
      </div>
    </>
  );
}

export default index;
