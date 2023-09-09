import React from "react";
import { Info } from "../../components/Info.component";
import { SignUp } from "../../components/SignUp.component";

export const Root: React.FunctionComponent = () => {
    return (
        <div className='h-screen bg-dark-blue-plane text-white'>
            <div className='flex flex-col justify-center'>
              <div className='my-10 bg-dark-blue-plane'>
                <Info />
              </div>
              <div className='bg-dark-blue-plane'>
                <SignUp />
              </div>
            </div>
        </div>
      );
}
