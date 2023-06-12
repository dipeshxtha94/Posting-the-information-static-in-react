import React, { useCallback, useState } from 'react'
import LoginForm from './LoginForm';
import CreateForm from './CreateForm';


type Flag={
  flag: boolean;
  setFlag: React.Dispatch<React.SetStateAction<boolean>>,
  setStatus1:  React.Dispatch<React.SetStateAction<boolean>>, 
  setStatus2: React.Dispatch<React.SetStateAction<boolean>>,
  status1:boolean,
  status2: boolean,
}

const JoinForm= ( { flag, setFlag, setStatus1, setStatus2, status1, status2 }: Flag ) => {

 
  console.log(flag)

  const handleClickSvg=()=>{
    setFlag(false)
  }

  const handleSignIn=()=>{
    setStatus2(true)
    setStatus1(false)
  }

  const handleClickCreate=()=>{
   setStatus1(true)
   setStatus2(false)
  }

  return (
    <>
    {status1  && <CreateForm setFlag={setFlag} setStatus1={setStatus1} setStatus2={setStatus2} />
    }
   {status2 && <LoginForm setFlag={setFlag} setStatus1={setStatus1} setStatus2={setStatus2} />  }
   </>
  )
}

export default JoinForm