'use client'

import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { CardTitle } from '../ui/card';
import React, { useEffect, useState } from 'react';

const DetailCard = () => {
  const [tools, setTools] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
   
    const fetchTools = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/Tools');
        const data = await response.json();
        setTools(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTools();
  }, []);

  useEffect(() => {
    // Calculate the total value of the tools
    const calculateTotalValue = () => {
      let total = 0;
      tools.forEach(tool => {
        total += tool.paidprice;
      });
      setTotalValue(total);
    };

    calculateTotalValue();
  }, [tools]);

  return (
      <Card className="bg-green-400">
        <CardHeader className=" text-lg ">
          <CardTitle>
            <p>current tools</p>
            <CardBody className="gap-2">
              <p>number of tools: {""}</p>
              <p>total value of tools £{totalValue}</p>
            </CardBody>
          </CardTitle>
        </CardHeader>
      </Card>
  );
}

export default DetailCard;