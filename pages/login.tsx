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
    <div className="flex h-screen items-center justify-center overflow-hidden bg-black">
      <div className="relative flex flex-col rounded-xl bg-gray-700 p-8">
        <div className="scale-9 absolute -top-12 left-1/2 flex -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-md">
          <Image width="128" height="128" src="/spotify.svg" priority />
        </div>

        <div className="mt-12 flex flex-col items-center justify-center">
          <h1 className="my-6 text-xl font-bold text-white">
            Spotify Clone Demo
          </h1>

          <div className="mt-6">
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  className="rounded-xl border border-green-600 bg-green-500 p-4 font-bold text-white shadow transition duration-75 hover:scale-105 hover:bg-green-400"
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
