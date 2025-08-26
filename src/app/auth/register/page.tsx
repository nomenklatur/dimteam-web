import SignupForm from "@/components/custom/sections/sign-up-form";

const Signup = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-[calc(100vh-80px)] justify-center">
        <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;