import React from "react";
import { Box, useTheme, BottomNavigation, BottomNavigationAction, Button } from "@mui/material";
import { useGetGeographyQuery } from "state/api";
import Header from "components/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "state/geoData";
import {
  DownloadOutlined,
} from "@mui/icons-material";

const Geography = () => {
    const theme = useTheme();
    const { data } = useGetGeographyQuery();
  return (
    <Box
      margin="1.rem 2.5rem"
    >
      <Header title="МОДУЛИ" subtitle="Выберите требуемый модуль" />
      <Box
          marginTop="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
      >
        <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            Earthshaking
      </Button>
      <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            Windy
      </Button>
      <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            Sandbox
      </Button>
      <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            Income
      </Button>
    </Box>


      <Box
        marginTop="40px"
        height="75vh"
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
      >

        {data ? (
         <ResponsiveChoropleth
            data={data}
            theme={{
              axis: {
                domain: {
                  line: {
                    stroke: theme.palette.secondary[200],
                  }
                },
                legend: {
                  text: {
                    fill: theme.palette.secondary[200],
                  }
                },
                ticks: {
                  line: {
                    stroke: theme.palette.secondary[200],
                    strokeWidth: 1,
                  },
                  text: {
                    fill: theme.palette.secondary[200],
                  }
                }
              },
              legends: {
                text: {
                  fill: theme.palette.secondary[200],
                }
              },
              tooltip: {
                container: {
                  color: theme.palette.primary.main,
                }
              }
            }}
            features={geoData.features}
            margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
            domain={[ 0, 60 ]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={200}
            projectionTranslation={[ 0.45, 0.6 ]}
            projectionRotation={[ 0, 0, 0 ]}
            borderWidth={1.3}
            borderColor="#ffffff"
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: true,
                    translateX: 0,
                    translateY: -125,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: 'left-to-right',
                    itemTextColor: theme.palette.secondary[200],
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: theme.palette.background.alt,
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
          /> 
        ) : (<>Loading...</>)
        }
      </Box>
    </Box>
  );
};

export default Geography;

