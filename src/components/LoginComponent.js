import React,{useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import {loginUser} from "../reducer/userSlice.js";
import axios from "axios";

function LoginComponent(){
  const dispatch = useDispatch();
  const [id,setId] = useState("")
  const [password,setPassword] = useState("")
  const [loading,setLoading] = useState(False);
  const [msg,setMsg] = useState("");

  useEffect(()=>{

  },[msg])

  const LoginFunc = (e)=>{
    e.preventDefault();
  }
}