import { HomePage } from "@app/pages";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";


type Props = {}

function RoutesHome({ }: Props) {
    return (
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
    
          <Route path="/home" element={<HomePage />} />
        </Routes>
      );
};

export default RoutesHome

