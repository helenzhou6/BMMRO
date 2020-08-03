/** @jsx jsx */
import { Formik, Form } from "formik";
import { css, jsx } from "@emotion/core";
import { useContext, Fragment } from "react";
import { navigate } from "@reach/router";

import NumberInput from "./formFields/NumberInput/NumberInput";
import TextInput from "./formFields/TextInput/TextInput";
import TextAreaInput from "./formFields/TextAreaInput/TextAreaInput";
import TimeInput from "./formFields/TimeInput/TimeInput";
import Select from "./formFields/Select/Select";
import Button from "./Button";

import { FirebaseContext } from "../firebaseContext/firebaseContext";
import { ROUTES } from "../constants/routes";
import { CollectionNames } from "../constants/datastore";
import directionOptions from "../constants/directionOptions";
import bottomSubstrateOptions from "../constants/bottomSubstrateOptions";
import cloudCoverOptions from "../constants/cloudCoverOptions";
import beaufortSeaStateOptions from "../constants/beaufortSeaStateOptions";
import tideStateOptions from "../constants/tideStateOptions";
import behaviourOptions from "../constants/behaviourOptions";
import swellWaveHeightOptions from "../constants/swellWaveHeightOptions";
import groupCohesionOptions from "../constants/groupCohesionOptions";

const HabitatUseForm = () => {
  const { datastore } = useContext(FirebaseContext);

  return (
    <Fragment>
      <h1>Habitat Use Form</h1>
      <div>
        <Formik
          enableReinitialize={true}
          initialValues={{
            numberOfAnimals: 1,
            numberOfCalves: "",
            numberOfBoats: 1,
            directionOfTravel: "",
            comments: "",
            waterDepth: "",
            waterTemp: "",
            bottomSubstrate: "",
            cloudCover: "",
            beaufortSeaState: "",
            tideState: "",
            behaviour: "",
            swellWaveHeight: "",
            distance: "",
            bearing: "",
            aspect: "",
            groupCohesion: "",
            groupComposition: "",
            surfaceBout: 0,
            endTime: "",
            startTime: "",
            latitude: "0",
            longitude: "0",
          }}
          onSubmit={(values) => {
            datastore.createSubDoc(
              "encounterPath",
              CollectionNames.HABITAT_USE,
              values
            );
            navigate(ROUTES.openEncounter);
          }}
        >
          <Form>
            <div>
              <NumberInput
                name="numberOfAnimals"
                labelText="Number of Animals"
                minValue={0}
                maxValue={99}
                isInteger={true}
              />
              <NumberInput
                name="numberOfCalves"
                labelText="Number of Calves"
                minValue={0}
                maxValue={99}
                isInteger={true}
              />
              <NumberInput
                name="numberOfBoats"
                labelText="Number of Boats"
                minValue={0}
                maxValue={999}
                isInteger={true}
              />
              <Select
                name="directionOfTravel"
                labelText="Direction of Travel"
                options={directionOptions}
              />
              <TextAreaInput
                name="comments"
                labelText="Comments"
                maxLength={500}
              />
              <NumberInput
                name="waterDepth"
                labelText="Water Depth (m)"
                minValue={0}
                maxValue={9999}
              />
              <NumberInput
                name="waterTemp"
                labelText="Water Temp (°C)"
                minValue={15}
                maxValue={40}
              />
              <Select
                name="bottomSubstrate"
                labelText="Bottom Substrate"
                options={bottomSubstrateOptions}
              />
              <Select
                name="cloudCover"
                labelText="Cloud Cover"
                options={cloudCoverOptions}
              />
              <Select
                name="beaufortSeaState"
                labelText="Beaufort Sea State"
                options={beaufortSeaStateOptions}
              />
              <Select
                name="tideState"
                labelText="Tide State"
                options={tideStateOptions}
              />
              <Select
                name="behaviour"
                labelText="Behaviour"
                options={behaviourOptions}
              />
              <Select
                name="swellWaveHeight"
                labelText="Swell / Wave height (ft)"
                options={swellWaveHeightOptions}
              />
              <NumberInput
                name="distance"
                labelText="Distance (m)"
                minValue={0}
                maxValue={9999}
              />
              <NumberInput
                name="bearing"
                labelText="Bearing (°)"
                minValue={0}
                maxValue={360}
              />
              <NumberInput
                name="aspect"
                labelText="Aspect (°)"
                minValue={0}
                maxValue={360}
              />
              <Select
                name="groupCohesion"
                labelText="Group Cohesion"
                options={groupCohesionOptions}
              />
              <TextInput
                name="groupComposition"
                labelText="Group Composition"
                maxLength={100}
              />
              <NumberInput
                name="surfaceBout"
                labelText="Surface Bout"
                minValue={0}
                maxValue={99}
                isInteger={true}
              />
              <TimeInput name="endTime" labelText="End Time (hh:mm)" />
              <TimeInput
                name="startTime"
                labelText="Start Time (hh:mm)*"
                autofill={true}
              />
            </div>
            <p>
              <small>
                <em>*required fields</em>
              </small>
            </p>
            <Button type="submit">Submit</Button>
          </Form>
        </Formik>
      </div>
    </Fragment>
  );
};

export default HabitatUseForm;
