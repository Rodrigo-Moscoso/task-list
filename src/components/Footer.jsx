import { Box, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      boxSize="100%"
      borderTopColor="pink.600"
      borderTopWidth="20px"
      marginTop="50px"
      marginBottom="20px"
      paddingTop="20px"
      textAlign="center"
    >
      <Text color="pink.600" as="b">
        Copyright ©
      </Text>
      <Text color="pink.600">Todos los derechos reservados</Text>
    </Box>
  );
}
export default Footer;
