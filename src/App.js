import "./index.css";
import HeaderMenu from "./components/Header";
import Sidebar from "./components/Sidebar";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import AutoFixNormalSharpIcon from "@mui/icons-material/AutoFixNormalSharp";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { makeStyles } from "@mui/styles";
import Chart from "./components/Apexchart";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const useStyles = makeStyles({
  cardbtn: {
    fontSize: "12px",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <HeaderMenu />
      <Grid container spacing={2}>
        <Grid item md={1}>
          <Sidebar />
        </Grid>

        <Grid
          item
          md={3}
          sx={{
            mt: "10",
          }}
        >
          <Box
            sx={{
              ml: 7,
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontStyle: "bold",
                fontFamily: "Galindo",
                fontSize: "1.6rem",
              }}
            >
              My Dashboard
              <AutoFixNormalSharpIcon
                style={{
                  fontSize: "2rem",
                  marginLeft: "1rem",
                }}
              />
            </Typography>

            <Card
              sx={{
                marginTop: "1rem",
                maxWidth: 300,
                width: 250,
                backgroundColor: "RGB(203, 231, 253)",
                borderRadius: "25px",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 100,
                  width: 100,
                  borderRadius: "50px",
                  margin: "0px auto",
                  marginTop: "24px",
                  marginLeft: "76px",
                }}
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
              />
              <CardMedia />
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  align="center"
                  sx={{
                    fontSize: "small",
                  }}
                >
                  Welcome Back
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  align="center"
                  sx={{ fontStyle: "bold", fontFamily: "Galindo" }}
                >
                  Jonathan W.
                </Typography>
              </CardContent>
              <CardActions>
                <Box
                  component="span"
                  className={classes.cardbtn}
                  fullwidth
                  sx={{
                    borderRadius: "35px",
                    backgroundColor: "white",
                    margin: "auto",
                    width: "80%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    color="primary"
                    sx={{
                      fontSize: "12px",
                      padding: "4px",
                      width: "100%",
                    }}
                  >
                    View Analysis
                  </Button>
                </Box>
              </CardActions>
            </Card>

            <Typography
              variant="h6"
              component="div"
              marginTop="42px"
              fontSize="1.2rem"
              sx={{ fontStyle: "bold", fontFamily: "Galindo" }}
            >
              Credit By categories
            </Typography>

            <Typography
              gutterBottom
              variant="h6"
              component="div"
              fontSize="1rem"
              sx={{
                color: "GrayText",
              }}
            >
              Credit By categories to welcome
            </Typography>

            <Card
              sx={{
                marginTop: "1rem",
                maxWidth: 300,
                width: 250,
                backgroundColor: "RGB(220, 219, 250)",
                borderRadius: "25px",
                display: "flex",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 33,
                  width: 33,
                  borderRadius: "50px",
                  marginTop: "1rem",
                  marginLeft: "10px",
                }}
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
              />

              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontStyle: "bold",
                    fontFamily: "Galindo",
                    fontSize: "15px",
                  }}
                >
                  Installment
                </Typography>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    fontSize: "small",
                  }}
                >
                  Samantha Wiliam
                </Typography>
              </CardContent>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  fontFamily: "Golindo",
                  fontWeight: "900",
                  marginTop: "15px",
                  fontSize: "18px",
                  marginLeft: "16px",
                }}
              >
                240$
              </Typography>
            </Card>
          </Box>
        </Grid>
        <Grid md={1}></Grid>

        <Grid item md={3}>
          <Typography
            variant="h3"
            component="div"
            sx={{
              display: "flex",
              fontWeight: "500",
              fontSize: "18px",
              backgroundColor: "RGB(220, 219, 250)",
              padding: "10px",
              width: "115px",
              float: "right",
              marginRight: "50px",
              borderRadius: "52px",
            }}
          >
            This Week <ExpandMoreIcon sx={{}} />
          </Typography>
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontWeight: "500",
              fontSize: "18px",
              width: "150px",
              marginTop: "60px",
            }}
          >
            Dispute Progress
          </Typography>
          <Typography
            variant="h3"
            component="div"
            color="gray"
            sx={{
              fontWeight: "500",
              fontSize: "11px",
              width: "150px",
            }}
          >
            30 Dispute in one month
          </Typography>
          <Box
            sx={{
              height: "148px",
              width: "100px",
            }}
          >
            <Chart />
          </Box>
          <Box
            component="div"
            sx={{
              width: "132px",
              display: "inline-block",
            }}
          >
            <AccountCircleOutlinedIcon
              fontSize="medium"
              sx={{
                color: "red",
                backgroundColor: "antiquewhite",
                mt: 2,
                borderRadius: "50px",
              }}
            />
            <Typography
              variant="h3"
              component="div"
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                width: "150px",
              }}
            >
              Generated
            </Typography>
            <Typography
              variant="h3"
              component="div"
              color="gray"
              sx={{
                fontWeight: "500",
                fontSize: "11px",
                width: "150px",
              }}
            >
              30 Dispute in one month
            </Typography>
          </Box>

          <Box
            component="div"
            sx={{
              width: "190px",
              float: "right",
              mt: 2,
            }}
          >
            <DeleteForeverOutlinedIcon
              color="primary"
              sx={{ backgroundColor: "#45445", borderRadius: "40" }}
            />
            <Typography
              variant="h3"
              component="div"
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                width: "150px",
              }}
            >
              Removed
            </Typography>
            <Typography
              variant="h3"
              component="div"
              color="gray"
              sx={{
                fontWeight: "500",
                fontSize: "11px",
                width: "150px",
              }}
            >
              30 Dispute in one month
            </Typography>
          </Box>

          <Box
            sx={{
              maxWidth: 300,
              width: 297,
              backgroundColor: "white",
              borderRadius: "25px",
              marginTop: "57px",
            }}
          >
            <Typography
              variant="h5"
              component="div"
              align="center"
              sx={{
                fontStyle: "bold",
                fontFamily: "Galindo",
                marginTop: "16px",
              }}
            >
              Credit Reports
            </Typography>
            <Box
              component="img"
              sx={{
                height: 100,
                width: 100,
                borderRadius: "50px",
                margin: "0px auto",
                marginLeft: "100px",
              }}
              alt="The house from the offer."
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            />

            <CardActions>
              <Box
                component="span"
                className={classes.cardbtn}
                fullwidth
                sx={{
                  borderRadius: "35px",
                  backgroundColor: "white",
                  margin: "auto",
                  width: "80%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  color="primary"
                  sx={{
                    fontSize: "12px",
                    padding: "4px",
                    width: "100%",
                  }}
                >
                  View Analysis
                </Button>
              </Box>
            </CardActions>
          </Box>
        </Grid>

        <Grid item md={1} sx={{ borderLeft: "1px solid rgba(0, 0, 0, .1)" }} />
        <Grid item md={2}>
          <Box
            sx={{
              alignItem: "right",
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontStyle: "bold",
                fontFamily: "Galindo",
              }}
            >
              1280.50$
            </Typography>
            <Typography
              variant="h3"
              component="div"
              color="gray"
              sx={{
                fontWeight: "500",
                fontSize: "11px",
              }}
            >
              Monday 6 September 2020
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontStyle: "bold",
                fontFamily: "Galindo",
                marginTop: "18px",
                fontSize: "1rem",
              }}
            >
              Today
            </Typography>
            {/* today cards */}
            <Box
              sx={{
                maxWidth: 300,
                width: 250,
                borderRadius: "25px",
                display: "flex",
                height: "63px",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 33,
                  width: 33,
                  borderRadius: "50px",
                  marginTop: "1rem",
                  marginLeft: "10px",
                }}
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
              />

              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontStyle: "bold",
                      fontFamily: "Galindo",
                      fontSize: "13px",
                    }}
                  >
                    Hunter Macbook
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontStyle: "bold",
                      fontSize: "10px",
                      backgroundColor: "RGB(91, 179, 244)",
                      padding: "0px 8px",
                      marginLeft: "7px",
                      borderRadius: "9px",
                      color: "white",
                    }}
                  >
                    New
                  </Typography>
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "14px",
                      marginTop: "12px",
                      position: "absolute",
                      marginLeft: "158px",
                    }}
                  />
                </Box>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    fontSize: "small",
                  }}
                >
                  Samantha Wiliam
                </Typography>
              </CardContent>
            </Box>

            <Box
              sx={{
                maxWidth: 300,
                width: 250,

                borderRadius: "25px",
                display: "flex",
                height: "63px",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 33,
                  width: 33,
                  borderRadius: "50px",
                  marginTop: "1rem",
                  marginLeft: "10px",
                }}
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
              />

              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontStyle: "bold",
                    fontFamily: "Galindo",
                    fontSize: "13px",
                  }}
                >
                  Hexagon
                </Typography>
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: "14px",
                    position: "absolute",
                    marginLeft: "158px",
                  }}
                />
                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    fontSize: "small",
                  }}
                >
                  Samantha Wiliam
                </Typography>
              </CardContent>
            </Box>

            <Box
              sx={{
                maxWidth: 300,
                width: 250,

                borderRadius: "25px",
                display: "flex",
                height: "63px",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 33,
                  width: 33,
                  borderRadius: "50px",
                  marginTop: "1rem",
                  marginLeft: "10px",
                }}
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
              />

              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontStyle: "bold",
                    fontFamily: "Galindo",
                    fontSize: "13px",
                  }}
                >
                  Marco Ruiz
                </Typography>
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: "14px",
                    position: "absolute",
                    marginLeft: "158px",
                  }}
                />
                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    fontSize: "small",
                  }}
                >
                  Samantha Wiliam
                </Typography>
              </CardContent>
            </Box>
            <Box
              component="span"
              className={classes.cardbtn}
              fullwidth
              sx={{
                borderRadius: "35px",
                backgroundColor: "#e9e9e9",
                width: "63%",
                marginTop: "19px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                color="primary"
                sx={{
                  fontSize: "12px",
                  padding: "8px",
                }}
              >
                View Analysis
              </Button>
            </Box>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontStyle: "bold",
                fontFamily: "Galindo",
                marginTop: "18px",
              }}
            >
              Loan Calculator
            </Typography>

            <Typography
              gutterBottom
              variant="h6"
              component="div"
              fontSize="1rem"
              sx={{
                color: "GrayText",
              }}
            >
              Credit By categories to welcome
            </Typography>

            <Box
              sx={{
                backgroundColor: "#deeefd",
                width: "16rem",
                borderRadius: "22px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#c8e7fe",
                  width: "140px",
                  padding: "12px",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    fontFamily: "Golindo",
                    fontWeight: "bolder",
                    fontSize: "20px",
                  }}
                >
                  $450.50
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  color="gray"
                  sx={{
                    fontSize: "small",
                    fontFamily: "Golindo",
                  }}
                >
                  All loan amount
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 33,
                  width: 33,
                  borderRadius: "50px",
                  marginTop: "1rem",
                  marginLeft: "10px",
                }}
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
              />
              <Box
                component="img"
                sx={{
                  height: 33,
                  width: 33,
                  borderRadius: "50px",
                  marginTop: "1rem",
                  marginLeft: "-10px",
                }}
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
              />
              <Box
                component="img"
                sx={{
                  height: 33,
                  width: 33,
                  borderRadius: "50px",
                  marginTop: "1rem",
                  marginLeft: "-10px",
                }}
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
              />
              <Box
                component="img"
                sx={{
                  height: 33,
                  width: 33,
                  borderRadius: "50px",
                  marginTop: "1rem",
                  marginLeft: "-10px",
                }}
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
              />
              <Typography
                variant="h6"
                component="div"
                color="gray"
                sx={{
                  fontSize: "small",
                  fontFamily: "Golindo",
                  marginTop: "24px",
                  marginLeft: "12px",
                }}
              >
                View more people
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
