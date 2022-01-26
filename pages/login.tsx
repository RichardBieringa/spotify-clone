import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { ClientSafeProvider, getProviders, signIn } from "next-auth/react";
import Image from "next/image";

interface Props {
  providers: ClientSafeProvider[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();

  return {
    props: {
      providers: providers,
    },
  };
};

const LogIn: NextPage<Props> = ({ providers }: Props) => {
  return (
    <div className="bg-black h-screen w-screen flex flex-col items-center justify-center">
      <Image width="128" height="128" src="/spotify.svg" priority />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-green-400 shadow text-white font-bold mt-5 p-4 rounded-xl"
            onClick={() => {
              signIn(provider.id, { callbackUrl: "/" });
            }}
          >
            Log in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LogIn;
