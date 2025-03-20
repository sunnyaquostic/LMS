// 'use client'
import { Search } from 'lucide-react'
import Form from 'next/form'
// import { useRouter } from 'next/navigation'
// import React, { useState } from 'react'

function SearchInput() {
    // const router = useRouter()
    // const [searchQuery, setSearchQuery] = useState("")

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    
    //     if(searchQuery.trim()) {
    //         router.push(`/search/${encodeURIComponent(searchQuery.trim())}`)
    //     }
    // };

  return (
    <Form 
        action="/search"
        className='relative w-full flex-1 max-w-[300px]'
        // onSubmit={handleSubmit}
    >
        <input 
            type="text" 
            placeholder='Search courses...'
            name='term'
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.validationMessage)}
            className='w-full rounded-full bg-secondary/80 px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
        />
        <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
    </Form>
  )
}

export default SearchInput