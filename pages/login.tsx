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
    <div className="flex items-center justify-center h-screen bg-black overflow-hidden">
      <div className="relative bg-gray-700 flex flex-col p-8 rounded-xl">
        <div className="flex justify-center items-center absolute bg-white rounded-full shadow-md -top-12 left-1/2 -translate-x-1/2 scale-9">
          <Image width="128" height="128" src="/spotify.svg" priority />
        </div>

        <div className="mt-12 flex flex-col items-center justify-center">
          <h1 className="text-white text-xl font-bold my-6">
            Spotify Clone Demo
          </h1>

          <div className="mt-6">
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  className="bg-green-500 hover:bg-green-400 hover:scale-105 transition duration-75 border-green-600 border shadow text-white font-bold p-4 rounded-xl"
                  onClick={() => {
                    signIn(provider.id, { callbackUrl: "/" });
                  }}
                >
                  Log in with {provider.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
