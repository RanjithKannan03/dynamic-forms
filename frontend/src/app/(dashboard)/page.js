'use client';

import DynamicForm from "@/components/DynamicForm";
import JSON_input from "@/components/JSON_input";
import React, { useState } from "react";

export default function App() {
  const [formSchema, setFormSchema] = useState(null);




  return (
    <div className="flex w-full h-full">
      <JSON_input formSchema={formSchema} setFormSchema={setFormSchema} />
      <DynamicForm schema={formSchema} />
    </div>
  )
}

