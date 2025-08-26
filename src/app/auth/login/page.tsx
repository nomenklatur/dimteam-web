import SigninForm from "@/components/custom/sections/sign-in-form";

const Signin = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-[calc(100vh-80px)] justify-center">
        <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12">
          <SigninForm />
        </div>
      </div>
    </div>
  );
};

export default Signin;