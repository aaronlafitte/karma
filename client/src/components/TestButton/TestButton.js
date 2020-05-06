import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const TestButton = () => (
  <div>
    <Link onClick={e => e.preventDefault()}>
      <button className={'button mt-20'} >End Turn</button>
    </Link>
  </div>
);

export default TestButton;
