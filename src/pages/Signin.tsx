import type { NextPage } from "next";
import { useRouter } from "next/router";
import AppLogo from "../components/atoms/AppLogo";
import Box from "../components/layout/Box";
import Flex from "../components/layout/Flex";
import Layout from "@/components/templates/Layout";
import SigninFormContainer from "../containers/SigninFormContainer";

const SigninPage: NextPage = () => {
  const router = useRouter();
  // 인증 후 ecenthandler
  const handleSignin = async (err?: Error) => {
    if (!err) {
      // login success
      const redurectTo = (router.query["redirect_to"] as string) ?? "/";

      console.log("redirecting!", redurectTo);
      await router.push(redurectTo);
    }
  };

  return (
    <Layout>
      <Flex
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={{ base: 2, md: 0 }}
        paddingRight={{ base: 2, md: 0 }}
        justifyContent="center"
      >
        <Flex
          width="400px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box marginBottom={2}>
            <AppLogo />
          </Box>
          <Box width="100%">
            <SigninFormContainer onSignin={handleSignin} />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
};
