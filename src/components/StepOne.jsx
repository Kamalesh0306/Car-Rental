"use client";
import { pickupTime } from "@/contants/appdata";
import { City } from "country-state-city";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import CitySelect from "./CitySelect";
import DateTimeForm from "./DateTimeForm";
import SelectForm from "./SelectForm";
import { Form } from "./ui/form";

const StepOne = ({ form }) => {
  const getCities = City?.getCitiesOfState("IN", "TN");
  const [getSource, setSource] = useState(null);
  const [getDestination, setDestination] = useState(null);

  const Map = useMemo(
    () => dynamic(() => import("@/components/Map")),
    [getSource, getDestination]
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-10 md:mx-[10%] my-10">
      <Form {...form}>
        <form className="w-full bg-white p-5 shadow-md border">
          <DateTimeForm
            id="pickupdate"
            label="Pickup Date"
            control={form.control}
          />
          <SelectForm
            id="pickuptime"
            label="Pickup Time"
            placeholder="Set pickup time"
            list={pickupTime}
            control={form.control}
          />
          <CitySelect
            id="source"
            label="Source"
            placeholder="Select your starting place"
            list={getCities}
            setValue={setSource}
            control={form.control}
          />
          <CitySelect
            id="destination"
            label="Destination"
            placeholder="Select your ending place"
            list={getCities}
            setValue={setDestination}
            control={form.control}
          />
          <SelectForm
            id="persons"
            label="Persons"
            placeholder="Select Persons"
            list={[1, 2, 3, 4, 5, 6]}
            control={form.control}
          />
          <SelectForm
            id="transfertype"
            label="Transfer Type"
            placeholder="Select transfer type"
            list={["one way", "return"]}
            control={form.control}
          />
        </form>
      </Form>
      <div className="flex justify-start flex-col">
        <Map getSource={getSource} getDestination={getDestination} />
      </div>
    </div>
  );
};

export default StepOne;
