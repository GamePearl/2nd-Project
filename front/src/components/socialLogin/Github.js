import React, { useContext, useEffect } from "react";
import { DispatchContext } from "../../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Github = () => {
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);
};

export default Github;
