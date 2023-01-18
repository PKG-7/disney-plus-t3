import Image from "next/image";

export default function Login() {
  return (
    <div className="opacity- relative flex min-h-screen justify-center bg-login-bg-image align-top">
      <div className=" flex max-w-[850px] flex-col items-center justify-center">
        <Image
          alt="logo"
          width={650}
          height={650}
          src="/images/cta-logo-one.svg"
        />
        <a className="mt-2 mb-3 w-full cursor-pointer rounded bg-blue-600 py-2 px-4 text-center font-bold text-white transition hover:scale-[1.01] hover:bg-blue-500">
          GET ALL THERE
        </a>
        <p className="m-1 text-center text-[13px] leading-5 text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
          aliquam cupiditate sed et! Autem, perspiciatis. Dignissimos laudantium
          natus quisquam eius. Eius magnam delectus non harum animi sed eum?
          Numquam, debitis.
        </p>
        <Image
          alt="logo"
          width={650}
          height={650}
          src="/images/cta-logo-two.png"
        />
      </div>
    </div>
  );
}
