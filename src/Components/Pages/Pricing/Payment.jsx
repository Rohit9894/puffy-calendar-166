import { Box, Button } from "@chakra-ui/react";

import { FormControl, FormLabel, Text, Input } from "@chakra-ui/react";
import { useState, useReducer } from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { isDisabled,isActive } from "@testing-library/user-event/dist/utils";
const initialState = {
  name: "",
  card: "",
  expiry: "",
  cvv: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "name": {
      return { ...state, name: action.payload };
    }

    case "card": {
      return { ...state, card: action.payload };
    }

    case "expiry": {
      return { ...state, expiry: action.payload };
    }

    case "cvv": {
      return { ...state, cvv: action.payload };
    }

    case "reset":
      return initialState;

    default:
      return state;
  }
};
const Payment = () => {
  const [data, setData] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [pro, setPro] = useState(true);
  const [nam, setNam] = useState("");
  const [user, setUser] = useState("");
  const location = useLocation();
  const handlesave = (e) => {
    setData([...data, state]);
    dispatch({ type: "reset" });
    // console.log(data);

    if (planvalue === 0) {
      setNam("Free");
    } else if (planvalue === 9) {
      setNam("Individual");
    } else if (planvalue === 24) {
      setNam("Team");
    } else if (planvalue === 49) {
      setNam("Business");
    } else if (planvalue === 99) {
      setNam("Premium");
    } else if (planvalue === 299) {
      setNam("Enterprise");
    }
    setUser(state.name);
    setPro(!pro);
  };

  const [planvalue, setPlanvalue] = useState(location.state || 0);

  const finale = () => {
    alert(` Dear,${user} you Succsfully subscribed Monthly ${nam} plan`);
    setPro(!pro);
    setPlanvalue(0);
    Navigate("/");
  };
  return (
    <Box margin="auto" marginTop={"100px"} width="100%" marginBottom={"5pc"}>
      <Box
        display={["block", "block", "block", "flex"]}
        width={["90%", "90%", "90%", "90%"]}
        margin={"auto"}
        justifyContent="space-between"
      >
        <Box
          margin={"auto"}
          width={["430px", "430px", "500px", "500px"]}
          marginTop="5pc"
        >
          <Text> Add new card to proceed</Text>
          <Box
            border={"1px solid gray"}
            padding={["2pc", "2pc", "2pc", "2pc"]}
            borderRadius="2xl"
          >
            <FormControl>
              <FormLabel>Card holder name</FormLabel>
              <Input
                type="text"
                placeholder="Name"
                name="name"
                value={state.name}
                onChange={(e) =>
                  dispatch({
                    type: "name",
                    payload: e.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Card Data</FormLabel>
              <Input
                id="kr"
                type="number"
                name="card"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                value={state.card}
                onChange={(e) =>
                  dispatch({
                    type: "card",
                    payload: e.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl display={"flex"}>
              <Box>
                {" "}
                Expiry Date{" "}
                <Input
                  placeholder="MM/YY"
                  name="expiry"
                  value={state.expiry}
                  onChange={(e) =>
                    dispatch({
                      type: "expiry",
                      payload: e.target.value,
                    })
                  }
                ></Input>
              </Box>
              <Box>
                {" "}
                CVV
                <Input
                  placeholder="CVV"
                  name="cvv"
                  value={state.cvv}
                  onChange={(e) =>
                    dispatch({
                      type: "cvv",
                      payload: e.target.value,
                    })
                  }
                ></Input>
              </Box>
            </FormControl>

            <Button
              backgroundColor={"rgb(76,131,238)"}
              marginTop={"8px"}
              color="white"
              onClick={handlesave}
            >
              Save
            </Button>
          </Box>
        </Box>
        <Box
          margin={"auto"}
          width={["430px", "430px", "500px", "500px"]}
          marginTop={"5pc"}
          bg={"rgb(248,250,250)"}
          marginLeft={["auto", "auto", "auto", "10px"]}
        >
          <Text> Payment Sumery</Text>
          <Box
            border={"1px solid gray"}
            padding={["2pc", "2pc", "2pc", "2pc"]}
            borderRadius="2xl"
          >
            <Box display={"flex"} justifyContent="space-between">
              <Text fontWeight={"bold"} fontSize="20px">
                Plan
              </Text>
              <Text fontWeight={"bold"} fontSize="20px">
                $ {planvalue}
              </Text>
            </Box>
            <hr style={{ marginTop: "30px" }} />
            <Box
              display={"flex"}
              justifyContent="space-between"
              marginTop="30px"
            >
              <Text fontWeight={"bold"} fontSize="20px">
                Total to pay
              </Text>
              <Text fontWeight={"bold"} fontSize="20px">
                {" "}
                $ {planvalue}
              </Text>
            </Box>
            <Text fontSize={"12px"}>
              Once your payment has been processed, your account will be
              upgraded immediately
            </Text>

            <Button
              backgroundColor={"rgb(76,131,238)"}
              marginTop={"25px"}
              color="white"
              marginLeft={"80%"}
              isDisabled={pro}
              onClick={finale}
            >
              Proceed
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
