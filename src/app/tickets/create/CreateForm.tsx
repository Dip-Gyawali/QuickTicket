"use client"

import React, { useState } from 'react'

export default function CreateForm() {
   const [title,setTitle] = useState<string>('');
   const [body,setBody] = useState<string>('');
   const [priority,setPriority] = useState<string>('low');
   const [isLodaing,setisLoading] = useState<boolean>(false)

  return (
    <form className="w-1/2">
      <label>
        <span>Title:</span>
        <input
          required 
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Body:</span>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select 
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
    </form>
  )
}
