import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";

const Doughnut = ({ id, data, legendVisiblity, height }) => {
  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{ visible: legendVisiblity, color: "white" }}
      height={height}
      background={currentMode === "dark" ? "#33373E" : "#fff"}
      tooltip={{ enable: true }}
    >
      <Inject
        services={[
          AccumulationLegend,
          AccumulationTooltip,
          PieSeries,
          AccumulationDataLabel,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Scale"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngel={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",
            font: {
              fontWeight: "600",
              colot: "#fff",
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Doughnut;
