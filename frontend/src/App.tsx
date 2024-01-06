import { Box, VStack, Select, Text, Flex, Image, Icon } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function App() {
  const [action, setAction] = useState<string>("simplify");

  useEffect(() => {
    chrome.storage.local.get(["sympy-action"], (result) => {
      const storedAction = result["sympy-action"];
      setAction(storedAction || "simplify");
    });
  }, []);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setAction(selectedValue);
    chrome.storage.local.set({ "sympy-action": selectedValue });
  };

  return (
    <Box borderRadius={"md"} boxShadow={"md"} w="250px">
      <Flex
        p={3}
        justifyContent={"space-between"}
        borderBottom={"1px solid"}
        borderColor={"gray.300"}
      >
        <Text fontWeight={"bold"}>SymPy for Overleaf</Text>
      </Flex>
      <VStack p={3} align="left" spacing={2}>
        <Box>
          <Text fontWeight={"bold"}>Action</Text>
          <Select
            borderColor={"gray.300"}
            onChange={(e) => handleSelectChange(e)}
            value={action}
          >
            <option value="simplify">Simplify</option>
            <option value="solve">Solve</option>
          </Select>
        </Box>
      </VStack>
    </Box>
  );
}

export default App;
